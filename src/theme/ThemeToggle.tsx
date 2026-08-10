import { Laptop2, Moon, Sun } from "lucide-react";
import { useTheme, type ThemePreference } from "./ThemeProvider";

const options: Array<{ value: ThemePreference; label: string; icon: typeof Sun }> = [
  { value: "auto", label: "Auto", icon: Laptop2 },
  { value: "light", label: "Licht", icon: Sun },
  { value: "dark", label: "Donker", icon: Moon },
];

export default function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div className="theme-toggle" aria-label="Weergavemodus">
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          className={preference === value ? "theme-option is-active" : "theme-option"}
          onClick={() => setPreference(value)}
          aria-pressed={preference === value}
          title={value === "auto" ? "Automatisch: licht overdag, donker in de avond" : `${label} thema`}
        >
          <Icon size={15} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
