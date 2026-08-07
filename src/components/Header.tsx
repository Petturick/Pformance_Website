import { Menu, X } from "lucide-react";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Header({ menuOpen, setMenuOpen, scrollTo }: HeaderProps) {
  const navItems = [
    { id: "advisory", label: "Advisory" },
    { id: "build", label: "Build" },
    { id: "lab", label: "Lab" },
    { id: "resources", label: "Resources" },
  ];

  return (
    <header className="header" id="top">
      <div className="header-inner">
        <button className="logo" onClick={() => scrollTo("top")}>
          <span className="logo-mark">P</span>
          <span className="logo-text">Pformance</span>
        </button>
        <nav className="header-nav">
          {navItems.map((item) => (
            <button key={item.id} className="header-nav-link" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => scrollTo("contact")}>
          Get in touch
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
