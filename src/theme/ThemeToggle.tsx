import { Check, Moon, Sun, SunMoon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme, type ThemePreference } from "./ThemeProvider";

const options: Array<{ value: ThemePreference; label: string; description: string; icon: typeof Sun }> = [
  { value: "auto", label: "Automatisch", description: "Schakelt mee met dag en avond", icon: SunMoon },
  { value: "light", label: "Licht", description: "Altijd de lichte weergave", icon: Sun },
  { value: "dark", label: "Donker", description: "Altijd de donkere weergave", icon: Moon },
];

export default function ThemeToggle() {
  const { preference, resolvedTheme, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const TriggerIcon = preference === "auto" ? SunMoon : resolvedTheme === "dark" ? Moon : Sun;
  const activeLabel = options.find((option) => option.value === preference)?.label ?? "Automatisch";

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="theme-control" ref={rootRef}>
      <button
        type="button"
        className="theme-trigger"
        onClick={() => setOpen((current) => !current)}
        aria-label={`Weergave: ${activeLabel}`}
        aria-expanded={open}
        aria-haspopup="menu"
        title={`Weergave: ${activeLabel}`}
      >
        <TriggerIcon size={17} strokeWidth={1.8} />
      </button>

      {open ? (
        <div className="theme-menu" role="menu" aria-label="Weergavemodus kiezen">
          {options.map(({ value, label, description, icon: Icon }) => {
            const active = preference === value;
            return (
              <button
                key={value}
                type="button"
                className={active ? "theme-menu-option is-active" : "theme-menu-option"}
                onClick={() => {
                  setPreference(value);
                  setOpen(false);
                }}
                role="menuitemradio"
                aria-checked={active}
              >
                <Icon size={16} strokeWidth={1.8} />
                <span className="theme-menu-copy">
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
                {active ? <Check className="theme-menu-check" size={15} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
