import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Copy,
  Eye,
  EyeOff,
  FileClock,
  Image as ImageIcon,
  LogOut,
  Plus,
  Save,
  Send,
  Trash2,
  Upload,
} from "lucide-react";
import { pages as staticPages, type Page } from "../content/site";
import {
  bootstrapCms,
  captureSessionFromUrl,
  CMS_ADMIN_EMAIL,
  getDraftPages,
  getValidSession,
  getVersions,
  listMedia,
  publicMediaUrl,
  publishPage,
  requestMagicLink,
  restoreVersion,
  saveDraft,
  signOutCms,
  uploadMedia,
  type CmsMediaItem,
  type CmsSession,
  type CmsVersion,
} from "../cms/cmsApi";
import "./admin.css";

type CmsBlock = Page["blocks"][number] & { hidden?: boolean };
type CmsPage = Omit<Page, "blocks"> & { blocks: CmsBlock[] };

const pageLabels: Record<string, string> = {
  "/": "Home",
  "/advisory": "Advisory",
  "/build": "Build",
  "/klantcases": "Klantcases",
  "/lab": "Lab",
  "/resources": "Resources",
  "/over": "Over",
  "/contact": "Contact",
};

const blockLabels: Record<string, string> = {
  features: "Kaarten / features",
  process: "Proces / stappen",
  cases: "Klantcases",
  resources: "Resources",
  split: "Tekst + visual",
  quote: "Quote",
  cta: "Call to action",
  contact: "Contactformulier",
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function Input({ label, value, onChange, type = "text", placeholder }: { label: string; value?: string; onChange: (value: string) => void; type?: string; placeholder?: string }) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      <input type={type} value={value ?? ""} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Textarea({ label, value, onChange, rows = 4, placeholder }: { label: string; value?: string; onChange: (value: string) => void; rows?: number; placeholder?: string }) {
  return (
    <label className="admin-field admin-field-wide">
      <span>{label}</span>
      <textarea value={value ?? ""} rows={rows} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value?: string | number; onChange: (value: string) => void; options: Array<{ value: string; label: string }> }) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      <select value={String(value ?? "")} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}

function ActionFields({ title, action, onChange }: { title: string; action?: any; onChange: (action: any) => void }) {
  return (
    <div className="admin-subpanel">
      <h4>{title}</h4>
      <div className="admin-form-grid">
        <Input label="Knoptekst" value={action?.label} onChange={(label) => onChange({ ...(action ?? {}), label })} />
        <Input label="Link" value={action?.href} onChange={(href) => onChange({ ...(action ?? {}), href })} placeholder="/contact" />
        <Select label="Stijl" value={action?.style ?? "primary"} onChange={(style) => onChange({ ...(action ?? {}), style })} options={[
          { value: "primary", label: "Primair" },
          { value: "secondary", label: "Secundair" },
          { value: "ghost", label: "Tekstlink" },
        ]} />
      </div>
    </div>
  );
}

function BlockEditor({ block, onChange }: { block: any; onChange: (block: any) => void }) {
  const patch = (key: string, value: unknown) => onChange({ ...block, [key]: value });
  const updateItem = (index: number, key: string, value: unknown) => {
    const items = [...(block.items ?? [])];
    items[index] = { ...items[index], [key]: value };
    patch("items", items);
  };
  const removeItem = (index: number) => patch("items", (block.items ?? []).filter((_: unknown, itemIndex: number) => itemIndex !== index));

  if (block.type === "quote") {
    return <div className="admin-form-grid"><Textarea label="Quote" value={block.quote} onChange={(value) => patch("quote", value)} /><Input label="Bron" value={block.source} onChange={(value) => patch("source", value)} /></div>;
  }

  if (block.type === "contact") {
    return <div className="admin-form-grid"><Input label="Titel" value={block.title} onChange={(value) => patch("title", value)} /><Textarea label="Intro" value={block.intro} onChange={(value) => patch("intro", value)} /></div>;
  }

  if (block.type === "cta") {
    return (
      <>
        <div className="admin-form-grid"><Input label="Titel" value={block.title} onChange={(value) => patch("title", value)} /><Textarea label="Tekst" value={block.text} onChange={(value) => patch("text", value)} /></div>
        <ActionFields title="Primaire knop" action={block.primary} onChange={(value) => patch("primary", value)} />
        <ActionFields title="Secundaire knop" action={block.secondary} onChange={(value) => patch("secondary", value)} />
      </>
    );
  }

  if (block.type === "split") {
    return (
      <>
        <div className="admin-form-grid">
          <Input label="Label boven titel" value={block.eyebrow} onChange={(value) => patch("eyebrow", value)} />
          <Input label="Titel" value={block.title} onChange={(value) => patch("title", value)} />
          <Textarea label="Tekst" value={block.text} onChange={(value) => patch("text", value)} />
          <Textarea label="Bullets, één per regel" value={(block.bullets ?? []).join("\n")} onChange={(value) => patch("bullets", value.split("\n").map((item) => item.trim()).filter(Boolean))} />
          <Select label="Achtergrond" value={block.tone ?? "light"} onChange={(value) => patch("tone", value)} options={[{ value: "light", label: "Licht" }, { value: "soft", label: "Zacht" }, { value: "dark", label: "Donker" }]} />
          <Input label="Afbeelding URL, optioneel" value={block.mediaUrl} onChange={(value) => patch("mediaUrl", value)} />
        </div>
        <ActionFields title="Knop" action={block.action} onChange={(value) => patch("action", value)} />
      </>
    );
  }

  const common = (
    <div className="admin-form-grid">
      <Input label="Label boven titel" value={block.eyebrow} onChange={(value) => patch("eyebrow", value)} />
      <Input label="Titel" value={block.title} onChange={(value) => patch("title", value)} />
      {"intro" in block ? <Textarea label="Intro" value={block.intro} onChange={(value) => patch("intro", value)} /> : null}
      {block.type === "features" ? <Select label="Kolommen" value={block.columns ?? 3} onChange={(value) => patch("columns", Number(value))} options={[{ value: "2", label: "2" }, { value: "3", label: "3" }, { value: "4", label: "4" }]} /> : null}
    </div>
  );

  if (block.type === "process") {
    return (
      <>{common}<div className="admin-items">{(block.steps ?? []).map((step: any, index: number) => <div className="admin-item" key={`${step.number}-${index}`}><div className="admin-item-head"><strong>Stap {index + 1}</strong><button type="button" onClick={() => patch("steps", block.steps.filter((_: unknown, itemIndex: number) => itemIndex !== index))}><Trash2 size={15} /></button></div><div className="admin-form-grid"><Input label="Nummer" value={step.number} onChange={(value) => { const next = [...block.steps]; next[index] = { ...step, number: value }; patch("steps", next); }} /><Input label="Titel" value={step.title} onChange={(value) => { const next = [...block.steps]; next[index] = { ...step, title: value }; patch("steps", next); }} /><Textarea label="Tekst" value={step.text} onChange={(value) => { const next = [...block.steps]; next[index] = { ...step, text: value }; patch("steps", next); }} /></div></div>)}<button className="admin-inline-action" type="button" onClick={() => patch("steps", [...(block.steps ?? []), { number: String((block.steps?.length ?? 0) + 1).padStart(2, "0"), title: "Nieuwe stap", text: "" }])}><Plus size={16} /> Stap toevoegen</button></div></>
    );
  }

  return (
    <>
      {common}
      <div className="admin-items">
        {(block.items ?? []).map((item: any, index: number) => (
          <div className="admin-item" key={`${item.title}-${index}`}>
            <div className="admin-item-head"><strong>{item.title || `Item ${index + 1}`}</strong><button type="button" onClick={() => removeItem(index)} aria-label="Verwijder item"><Trash2 size={15} /></button></div>
            <div className="admin-form-grid">
              {block.type === "resources" ? <Input label="Type" value={item.type} onChange={(value) => updateItem(index, "type", value)} /> : null}
              {block.type === "cases" ? <Input label="Sector / type" value={item.sector} onChange={(value) => updateItem(index, "sector", value)} /> : null}
              {block.type === "features" ? <Input label="Label" value={item.eyebrow} onChange={(value) => updateItem(index, "eyebrow", value)} /> : null}
              <Input label="Titel" value={item.title} onChange={(value) => updateItem(index, "title", value)} />
              {block.type === "cases" ? <><Textarea label="Uitdaging" value={item.challenge} onChange={(value) => updateItem(index, "challenge", value)} /><Textarea label="Publicatie / bewijs" value={item.publication} onChange={(value) => updateItem(index, "publication", value)} /><Input label="Status" value={item.status} onChange={(value) => updateItem(index, "status", value)} /><Input label="Afbeelding URL" value={item.imageUrl} onChange={(value) => updateItem(index, "imageUrl", value)} /></> : <Textarea label="Tekst" value={item.text} onChange={(value) => updateItem(index, "text", value)} />}
              {block.type === "resources" ? <Input label="Status" value={item.status} onChange={(value) => updateItem(index, "status", value)} /> : null}
              <Input label="Link, optioneel" value={item.href} onChange={(value) => updateItem(index, "href", value)} />
            </div>
          </div>
        ))}
        <button className="admin-inline-action" type="button" onClick={() => {
          const base = block.type === "cases" ? { title: "Nieuwe case", sector: "", challenge: "", publication: "", status: "" } : block.type === "resources" ? { type: "Guide", title: "Nieuwe resource", text: "", status: "In voorbereiding" } : { title: "Nieuw item", text: "" };
          patch("items", [...(block.items ?? []), base]);
        }}><Plus size={16} /> Item toevoegen</button>
      </div>
    </>
  );
}

function makeBlock(type: string): any {
  switch (type) {
    case "features": return { type, eyebrow: "", title: "Nieuwe sectie", columns: 3, items: [{ title: "Nieuw item", text: "" }] };
    case "process": return { type, eyebrow: "", title: "Nieuwe werkwijze", steps: [{ number: "01", title: "Nieuwe stap", text: "" }] };
    case "cases": return { type, eyebrow: "", title: "Klantcases", items: [] };
    case "resources": return { type, eyebrow: "", title: "Resources", items: [] };
    case "split": return { type, eyebrow: "", title: "Nieuwe sectie", text: "", tone: "light", bullets: [] };
    case "quote": return { type, quote: "Nieuwe quote", source: "" };
    case "cta": return { type, title: "Volgende stap", text: "", primary: { label: "Plan gesprek", href: "/contact", style: "primary" } };
    case "contact": return { type, title: "Plan een eerste gesprek", intro: "" };
    default: return makeBlock("split");
  }
}

export default function AdminApp() {
  const [session, setSession] = useState<CmsSession | null>(null);
  const [loginSent, setLoginSent] = useState(false);
  const [drafts, setDrafts] = useState<Array<{ path: string; content: CmsPage; updated_at: string }>>([]);
  const [selectedPath, setSelectedPath] = useState("/");
  const [editing, setEditing] = useState<CmsPage | null>(null);
  const [openBlocks, setOpenBlocks] = useState<Record<number, boolean>>({});
  const [versions, setVersions] = useState<CmsVersion[]>([]);
  const [media, setMedia] = useState<CmsMediaItem[]>([]);
  const [view, setView] = useState<"content" | "versions" | "media">("content");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const selectedDraft = useMemo(() => drafts.find((draft) => draft.path === selectedPath), [drafts, selectedPath]);

  async function loadDrafts() {
    let rows = await getDraftPages();
    if (!rows.length) {
      await bootstrapCms(staticPages);
      rows = await getDraftPages();
    }
    setDrafts(rows as any);
    const selected = rows.find((row) => row.path === selectedPath) ?? rows[0];
    if (selected) {
      setSelectedPath(selected.path);
      setEditing(clone(selected.content) as CmsPage);
    }
  }

  useEffect(() => {
    const captured = captureSessionFromUrl();
    void (async () => {
      const active = captured ?? await getValidSession();
      setSession(active);
      if (active) await loadDrafts();
    })();
  }, []);

  useEffect(() => {
    if (!selectedDraft) return;
    setEditing(clone(selectedDraft.content));
    setOpenBlocks({});
  }, [selectedPath]);

  async function handleSave(publish = false) {
    if (!editing) return;
    setBusy(true);
    setStatus("");
    try {
      await saveDraft(editing as Page);
      if (publish) await publishPage(editing.path);
      await loadDrafts();
      if (publish) {
        setVersions(await getVersions(editing.path));
        setStatus("Gepubliceerd. De live website gebruikt nu deze versie.");
      } else {
        setStatus("Concept opgeslagen. De live website is nog niet gewijzigd.");
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Opslaan is mislukt.");
    } finally {
      setBusy(false);
    }
  }

  async function openVersions() {
    if (!editing) return;
    setView("versions");
    setVersions(await getVersions(editing.path));
  }

  async function openMedia() {
    setView("media");
    setMedia(await listMedia());
  }

  if (!session) {
    return (
      <main className="admin-login">
        <div className="admin-login-card">
          <img src="/pformance-mark.svg" alt="" width="52" height="39" />
          <p className="admin-kicker">Pformance beheer</p>
          <h1>Website aanpassen zonder code.</h1>
          <p>De beheeromgeving is alleen toegankelijk via een beveiligde inloglink voor <strong>{CMS_ADMIN_EMAIL}</strong>.</p>
          <button className="admin-primary-button" type="button" onClick={async () => { setBusy(true); setStatus(""); try { await requestMagicLink(); setLoginSent(true); } catch (error) { setStatus(error instanceof Error ? error.message : "Inloglink versturen is mislukt."); } finally { setBusy(false); } }} disabled={busy}>{loginSent ? <CheckCircle2 size={18} /> : <Send size={18} />}{loginSent ? "Inloglink verstuurd" : "Stuur mij een inloglink"}</button>
          {loginSent ? <p className="admin-success">Open de e-mail en klik op de inloglink. Je komt automatisch terug in deze beheeromgeving.</p> : null}
          {status ? <p className="admin-error">{status}</p> : null}
          <a className="admin-back-link" href="/">Terug naar website</a>
        </div>
      </main>
    );
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/"><img src="/pformance-mark.svg" alt="" width="38" height="29" /><span>Pformance beheer</span></a>
        <p className="admin-sidebar-label">Pagina's</p>
        <nav className="admin-page-nav">
          {drafts.map((draft) => <button key={draft.path} className={selectedPath === draft.path ? "is-active" : ""} type="button" onClick={() => { setSelectedPath(draft.path); setView("content"); }}>{pageLabels[draft.path] ?? draft.path}<ChevronRight size={16} /></button>)}
        </nav>
        <div className="admin-sidebar-bottom">
          <button type="button" onClick={openMedia}><ImageIcon size={17} /> Media</button>
          <button type="button" onClick={() => { signOutCms(); setSession(null); }}><LogOut size={17} /> Uitloggen</button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div><p className="admin-kicker">{pageLabels[selectedPath]}</p><h1>{view === "content" ? "Pagina bewerken" : view === "versions" ? "Versiegeschiedenis" : "Mediabibliotheek"}</h1></div>
          <div className="admin-topbar-actions">
            {view !== "media" && editing ? <a className="admin-secondary-button" href={editing.path} target="_blank" rel="noreferrer"><Eye size={17} /> Bekijk live</a> : null}
            {view === "content" ? <><button className="admin-secondary-button" type="button" onClick={() => void handleSave(false)} disabled={busy}><Save size={17} /> Concept opslaan</button><button className="admin-primary-button" type="button" onClick={() => void handleSave(true)} disabled={busy}><Send size={17} /> Publiceren</button></> : null}
          </div>
        </header>

        {status ? <div className="admin-status">{status}</div> : null}

        {view === "content" && editing ? (
          <div className="admin-content">
            <section className="admin-panel">
              <div className="admin-panel-heading"><div><p className="admin-kicker">Basis</p><h2>SEO en pagina instellingen</h2></div></div>
              <div className="admin-form-grid"><Input label="SEO titel" value={editing.metaTitle} onChange={(metaTitle) => setEditing({ ...editing, metaTitle })} /><Textarea label="Meta description" value={editing.metaDescription} onChange={(metaDescription) => setEditing({ ...editing, metaDescription })} /></div>
            </section>

            <section className="admin-panel">
              <div className="admin-panel-heading"><div><p className="admin-kicker">Hero</p><h2>Bovenkant van de pagina</h2></div></div>
              <div className="admin-form-grid">
                <Input label="Label boven titel" value={editing.hero.eyebrow} onChange={(eyebrow) => setEditing({ ...editing, hero: { ...editing.hero, eyebrow } })} />
                <Input label="Titel" value={editing.hero.title} onChange={(title) => setEditing({ ...editing, hero: { ...editing.hero, title } })} />
                <Input label="Gemarkeerd deel" value={editing.hero.highlight} onChange={(highlight) => setEditing({ ...editing, hero: { ...editing.hero, highlight } })} />
                <Textarea label="Intro" value={editing.hero.intro} onChange={(intro) => setEditing({ ...editing, hero: { ...editing.hero, intro } })} />
                <Input label="Eigen hero afbeelding URL, optioneel" value={(editing.hero as any).mediaUrl} onChange={(mediaUrl) => setEditing({ ...editing, hero: { ...editing.hero, mediaUrl } } as CmsPage)} placeholder="Plak een URL uit Media" />
              </div>
              <ActionFields title="Primaire knop" action={editing.hero.primary} onChange={(primary) => setEditing({ ...editing, hero: { ...editing.hero, primary } })} />
              <ActionFields title="Secundaire knop" action={editing.hero.secondary} onChange={(secondary) => setEditing({ ...editing, hero: { ...editing.hero, secondary } })} />
            </section>

            <section className="admin-panel">
              <div className="admin-panel-heading"><div><p className="admin-kicker">Modulaire blokken</p><h2>Inhoud en volgorde</h2></div><select className="admin-add-select" defaultValue="" onChange={(event) => { if (!event.target.value) return; setEditing({ ...editing, blocks: [...editing.blocks, makeBlock(event.target.value)] }); event.target.value = ""; }}><option value="" disabled>Blok toevoegen</option>{Object.entries(blockLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>
              <div className="admin-block-list">
                {editing.blocks.map((block: any, index) => {
                  const open = openBlocks[index] ?? false;
                  return <article className={`admin-block ${block.hidden ? "is-hidden" : ""}`} key={`${block.type}-${index}`}><div className="admin-block-head"><button className="admin-block-open" type="button" onClick={() => setOpenBlocks({ ...openBlocks, [index]: !open })}>{open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}<div><span>{blockLabels[block.type] ?? block.type}</span><strong>{block.title ?? block.quote ?? "Blok"}</strong></div></button><div className="admin-block-actions"><button type="button" disabled={index === 0} onClick={() => { const blocks = [...editing.blocks]; [blocks[index - 1], blocks[index]] = [blocks[index], blocks[index - 1]]; setEditing({ ...editing, blocks }); }} title="Omhoog"><ArrowUp size={16} /></button><button type="button" disabled={index === editing.blocks.length - 1} onClick={() => { const blocks = [...editing.blocks]; [blocks[index], blocks[index + 1]] = [blocks[index + 1], blocks[index]]; setEditing({ ...editing, blocks }); }} title="Omlaag"><ArrowDown size={16} /></button><button type="button" onClick={() => { const blocks = [...editing.blocks]; blocks[index] = { ...blocks[index], hidden: !block.hidden } as CmsBlock; setEditing({ ...editing, blocks }); }} title={block.hidden ? "Tonen" : "Verbergen"}>{block.hidden ? <Eye size={16} /> : <EyeOff size={16} />}</button><button type="button" onClick={() => { const blocks = [...editing.blocks]; blocks.splice(index + 1, 0, clone(block)); setEditing({ ...editing, blocks }); }} title="Dupliceren"><Copy size={16} /></button><button type="button" onClick={() => { if (window.confirm("Dit blok verwijderen?")) setEditing({ ...editing, blocks: editing.blocks.filter((_, blockIndex) => blockIndex !== index) }); }} title="Verwijderen"><Trash2 size={16} /></button></div></div>{open ? <div className="admin-block-body"><BlockEditor block={block} onChange={(next) => { const blocks = [...editing.blocks]; blocks[index] = next; setEditing({ ...editing, blocks }); }} /></div> : null}</article>;
                })}
              </div>
            </section>
          </div>
        ) : null}

        {view === "versions" ? <div className="admin-content"><section className="admin-panel"><div className="admin-panel-heading"><div><p className="admin-kicker">Rollback per pagina</p><h2>Eerdere publicaties</h2></div><button className="admin-secondary-button" type="button" onClick={() => setView("content")}>Terug naar bewerken</button></div><p className="admin-help">Terugzetten maakt eerst een concept van de gekozen versie. Pas na Publiceren wordt deze weer live.</p><div className="admin-version-list">{versions.length ? versions.map((version) => <div className="admin-version" key={version.id}><div><FileClock size={18} /><div><strong>{new Date(version.created_at).toLocaleString("nl-NL")}</strong><span>{version.source === "publish" ? "Vorige live versie" : version.source}</span></div></div><button className="admin-secondary-button" type="button" onClick={async () => { await restoreVersion(version.id); await loadDrafts(); setView("content"); setStatus("Versie teruggezet als concept. Controleer de pagina en klik op Publiceren om deze live te zetten."); }}>Zet terug als concept</button></div>) : <p>Nog geen eerdere versies. Versies worden automatisch opgebouwd bij publicaties.</p>}</div></section></div> : null}

        {view === "media" ? <div className="admin-content"><section className="admin-panel"><div className="admin-panel-heading"><div><p className="admin-kicker">Media</p><h2>Afbeeldingen en documenten</h2></div><label className="admin-primary-button admin-upload-button"><Upload size={17} /> Upload bestand<input type="file" accept="image/*,.pdf" onChange={async (event) => { const file = event.target.files?.[0]; if (!file) return; setBusy(true); try { const url = await uploadMedia(file); await navigator.clipboard.writeText(url); setMedia(await listMedia()); setStatus("Bestand geüpload. De URL staat op je klembord."); } catch (error) { setStatus(error instanceof Error ? error.message : "Upload mislukt."); } finally { setBusy(false); event.target.value = ""; } }} /></label></div><p className="admin-help">Upload een bestand en kopieer daarna de URL. Die kun je direct in een hero of case plakken.</p><div className="admin-media-grid">{media.map((item) => { const url = publicMediaUrl(item.name); const image = /\.(png|jpe?g|webp|svg)$/i.test(item.name); return <article className="admin-media-card" key={item.name}>{image ? <img src={url} alt="" /> : <div className="admin-file-placeholder">PDF</div>}<div><strong>{item.name}</strong><button type="button" onClick={async () => { await navigator.clipboard.writeText(url); setStatus("URL gekopieerd."); }}><Copy size={15} /> Kopieer URL</button></div></article>; })}</div></section></div> : null}

        {view === "content" && editing ? <button className="admin-history-link" type="button" onClick={() => void openVersions()}><FileClock size={17} /> Bekijk versiegeschiedenis van {pageLabels[editing.path]}</button> : null}
      </main>
    </div>
  );
}
