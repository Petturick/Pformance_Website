import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { navItems } from "../content/site";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  currentPath: string;
};

function isActive(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Header({ menuOpen, setMenuOpen, currentPath }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner shell">
        <a className="site-logo" href="/" aria-label="Pformance home">
          <BrandLogo />
        </a>

        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={isActive(currentPath, item.href) ? "nav-link is-active" : "nav-link"}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-action" href="/contact">Plan gesprek</a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Sluit menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-nav-panel" id="mobile-navigation">
          <nav className="mobile-nav shell" aria-label="Mobiele navigatie">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={isActive(currentPath, item.href) ? "mobile-nav-link is-active" : "mobile-nav-link"}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="button button-primary mobile-nav-action" href="/contact" onClick={() => setMenuOpen(false)}>Plan gesprek</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
