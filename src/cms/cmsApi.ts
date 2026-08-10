import type { Page } from "../content/site";

const SUPABASE_URL = "https://nztzosiwxzvstevqfdmc.supabase.co";
const SUPABASE_KEY = "sb_publishable_ryctVHK_3QV6yX68wiGJSQ_Fu55wKNW";
export const CMS_ADMIN_EMAIL = "hello@pformance.nl";
const SESSION_KEY = "pformance_cms_session";

export type CmsSession = {
  access_token: string;
  refresh_token?: string;
  expires_at?: number;
  user?: { id?: string; email?: string };
};

export type CmsVersion = {
  id: number;
  path: string;
  content: Page;
  created_at: string;
  source: string;
};

export type CmsMediaItem = {
  name: string;
  id?: string;
  created_at?: string;
  updated_at?: string;
  metadata?: Record<string, unknown>;
};

function decodeJwt(token: string) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return {};
  }
}

export function captureSessionFromUrl() {
  if (!window.location.hash.includes("access_token=")) return null;
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const accessToken = params.get("access_token");
  if (!accessToken) return null;
  const claims = decodeJwt(accessToken);
  const email = String(claims.email ?? "").toLowerCase();
  if (email !== CMS_ADMIN_EMAIL) {
    window.history.replaceState({}, "", window.location.pathname);
    return null;
  }
  const expiresIn = Number(params.get("expires_in") ?? 3600);
  const session: CmsSession = {
    access_token: accessToken,
    refresh_token: params.get("refresh_token") ?? undefined,
    expires_at: Math.floor(Date.now() / 1000) + expiresIn - 30,
    user: { id: claims.sub, email },
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  window.history.replaceState({}, "", window.location.pathname);
  return session;
}

export function getStoredSession(): CmsSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function signOutCms() {
  localStorage.removeItem(SESSION_KEY);
}

async function refreshSession(session: CmsSession) {
  if (!session.refresh_token) return null;
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: session.refresh_token }),
  });
  if (!response.ok) return null;
  const data = await response.json();
  const claims = decodeJwt(data.access_token);
  const next: CmsSession = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + Number(data.expires_in ?? 3600) - 30,
    user: { id: claims.sub, email: claims.email },
  };
  if (String(next.user?.email ?? "").toLowerCase() !== CMS_ADMIN_EMAIL) return null;
  localStorage.setItem(SESSION_KEY, JSON.stringify(next));
  return next;
}

export async function getValidSession() {
  const session = getStoredSession();
  if (!session) return null;
  if (!session.expires_at || session.expires_at > Math.floor(Date.now() / 1000)) return session;
  const refreshed = await refreshSession(session);
  if (!refreshed) signOutCms();
  return refreshed;
}

export async function requestMagicLink() {
  const redirectTo = `${window.location.origin}/admin`;
  const response = await fetch(`${SUPABASE_URL}/auth/v1/otp?redirect_to=${encodeURIComponent(redirectTo)}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: CMS_ADMIN_EMAIL, create_user: true }),
  });
  if (!response.ok) throw new Error(await response.text());
}

function headers(token?: string, extra?: HeadersInit): HeadersInit {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${token ?? SUPABASE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function adminFetch(path: string, init: RequestInit = {}) {
  const session = await getValidSession();
  if (!session) throw new Error("Je beheersessie is verlopen. Log opnieuw in.");
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...init,
    headers: headers(session.access_token, init.headers),
  });
  if (!response.ok) throw new Error(await response.text());
  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export async function getPublishedPage(path: string): Promise<Page | null> {
  try {
    const query = `/rest/v1/cms_published_pages?path=eq.${encodeURIComponent(path)}&select=content&limit=1`;
    const response = await fetch(`${SUPABASE_URL}${query}`, { headers: headers() });
    if (!response.ok) return null;
    const rows = await response.json();
    return rows?.[0]?.content ?? null;
  } catch {
    return null;
  }
}

export async function getDraftPages(): Promise<Array<{ path: string; content: Page; updated_at: string }>> {
  return (await adminFetch("/rest/v1/cms_drafts?select=path,content,updated_at&order=path.asc")) ?? [];
}

export async function bootstrapCms(pages: Page[]) {
  const session = await getValidSession();
  if (!session) throw new Error("Log opnieuw in.");
  const now = new Date().toISOString();
  const drafts = pages.map((page) => ({ path: page.path, content: page, updated_at: now }));
  const published = pages.map((page) => ({ path: page.path, content: page, published_at: now }));
  await adminFetch("/rest/v1/cms_drafts?on_conflict=path", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(drafts),
  });
  await adminFetch("/rest/v1/cms_published_pages?on_conflict=path", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(published),
  });
}

export async function saveDraft(page: Page) {
  await adminFetch("/rest/v1/cms_drafts?on_conflict=path", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({ path: page.path, content: page, updated_at: new Date().toISOString() }),
  });
}

export async function publishPage(path: string) {
  await adminFetch("/rest/v1/rpc/cms_publish_page", {
    method: "POST",
    body: JSON.stringify({ page_path: path }),
  });
}

export async function getVersions(path: string): Promise<CmsVersion[]> {
  return (await adminFetch(`/rest/v1/cms_page_versions?path=eq.${encodeURIComponent(path)}&select=id,path,content,created_at,source&order=created_at.desc&limit=30`)) ?? [];
}

export async function restoreVersion(id: number) {
  await adminFetch("/rest/v1/rpc/cms_restore_version", {
    method: "POST",
    body: JSON.stringify({ version_id: id }),
  });
}

export async function listMedia(): Promise<CmsMediaItem[]> {
  return (await adminFetch("/storage/v1/object/list/cms-media", {
    method: "POST",
    body: JSON.stringify({ prefix: "", limit: 100, offset: 0, sortBy: { column: "created_at", order: "desc" } }),
  })) ?? [];
}

export function publicMediaUrl(name: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/cms-media/${encodeURIComponent(name).replace(/%2F/g, "/")}`;
}

export async function uploadMedia(file: File) {
  const session = await getValidSession();
  if (!session) throw new Error("Log opnieuw in.");
  const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]+/g, "-")}`;
  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/cms-media/${encodeURIComponent(safeName)}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${session.access_token}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false",
    },
    body: file,
  });
  if (!response.ok) throw new Error(await response.text());
  return publicMediaUrl(safeName);
}
