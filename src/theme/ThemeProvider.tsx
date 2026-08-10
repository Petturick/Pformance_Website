import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ThemePreference = "auto" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
};

const STORAGE_KEY = "pformance_theme_preference";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function normalizeDegrees(value: number) {
  return ((value % 360) + 360) % 360;
}

function dayOfYear(date: Date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const now = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.floor((now - start) / 86400000);
}

function solarTime(date: Date, latitude: number, longitude: number, sunrise: boolean) {
  const n = dayOfYear(date);
  const lngHour = longitude / 15;
  const t = n + ((sunrise ? 6 : 18) - lngHour) / 24;
  const meanAnomaly = (0.9856 * t) - 3.289;
  let trueLongitude = meanAnomaly + (1.916 * Math.sin(meanAnomaly * Math.PI / 180)) + (0.020 * Math.sin(2 * meanAnomaly * Math.PI / 180)) + 282.634;
  trueLongitude = normalizeDegrees(trueLongitude);

  let rightAscension = Math.atan(0.91764 * Math.tan(trueLongitude * Math.PI / 180)) * 180 / Math.PI;
  rightAscension = normalizeDegrees(rightAscension);
  const longitudeQuadrant = Math.floor(trueLongitude / 90) * 90;
  const raQuadrant = Math.floor(rightAscension / 90) * 90;
  rightAscension = (rightAscension + longitudeQuadrant - raQuadrant) / 15;

  const sinDeclination = 0.39782 * Math.sin(trueLongitude * Math.PI / 180);
  const cosDeclination = Math.cos(Math.asin(sinDeclination));
  const zenith = 90.833;
  const cosHour = (Math.cos(zenith * Math.PI / 180) - (sinDeclination * Math.sin(latitude * Math.PI / 180))) /
    (cosDeclination * Math.cos(latitude * Math.PI / 180));

  if (cosHour < -1 || cosHour > 1) return null;

  let hourAngle = Math.acos(cosHour) * 180 / Math.PI;
  if (sunrise) hourAngle = 360 - hourAngle;
  hourAngle /= 15;

  const localMeanTime = hourAngle + rightAscension - (0.06571 * t) - 6.622;
  const universalTime = ((localMeanTime - lngHour) % 24 + 24) % 24;
  const utcMidnight = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return new Date(utcMidnight + universalTime * 3600000);
}

function resolveFromClock(now = new Date()): ResolvedTheme {
  const hour = now.getHours();
  return hour >= 19 || hour < 7 ? "dark" : "light";
}

async function resolveAutoTheme(): Promise<ResolvedTheme> {
  const now = new Date();
  if (typeof navigator === "undefined" || !navigator.geolocation) return resolveFromClock(now);

  try {
    if (navigator.permissions?.query) {
      const permission = await navigator.permissions.query({ name: "geolocation" as PermissionName });
      if (permission.state !== "granted") return resolveFromClock(now);
    } else {
      return resolveFromClock(now);
    }

    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: false,
        maximumAge: 6 * 60 * 60 * 1000,
        timeout: 2500,
      });
    });

    const sunrise = solarTime(now, position.coords.latitude, position.coords.longitude, true);
    const sunset = solarTime(now, position.coords.latitude, position.coords.longitude, false);
    if (!sunrise || !sunset) return resolveFromClock(now);
    return now >= sunset || now < sunrise ? "dark" : "light";
  } catch {
    return resolveFromClock(now);
  }
}

function applyTheme(theme: ResolvedTheme, preference: ThemePreference) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.style.colorScheme = theme;
  let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = theme === "dark" ? "#0B1C3A" : "#FAF7F3";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" || stored === "auto" ? stored : "auto";
  });
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => preference === "auto" ? resolveFromClock() : preference);

  useEffect(() => {
    let alive = true;
    let timer = 0;

    const sync = async () => {
      const next = preference === "auto" ? await resolveAutoTheme() : preference;
      if (!alive) return;
      setResolvedTheme(next);
      applyTheme(next, preference);
    };

    void sync();
    if (preference === "auto") timer = window.setInterval(() => void sync(), 5 * 60 * 1000);

    return () => {
      alive = false;
      if (timer) window.clearInterval(timer);
    };
  }, [preference]);

  const value = useMemo<ThemeContextValue>(() => ({
    preference,
    resolvedTheme,
    setPreference: (next) => {
      localStorage.setItem(STORAGE_KEY, next);
      setPreferenceState(next);
    },
  }), [preference, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within ThemeProvider");
  return value;
}
