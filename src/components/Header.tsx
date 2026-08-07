import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import SiteLink from "./SiteLink";
import { navigationItems } from "../config/navigation";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  currentPath: string;
};

function isActive(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Header({ menuOpen, setMenuOpen, currentPath }: HeaderProps) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner shell">
        <SiteLink className="site-logo" href="/" aria-label="Pformance home" onClick={closeMenu}>
          <BrandLogo />
        </SiteLink>

        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          {navigationItems.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              className={isActive(currentPath, item.href) ? "nav-link is-active" : "nav-link"}
              aria-current={isActive(currentPath, item.href) ? "page" : undefined}
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        <SiteLink className="button button-primary header-action" href="/contact">
          Plan gesprek
        </SiteLink>

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
            {navigationItems.map((item) => (
              <SiteLink
                key={item.href}
                href={item.href}
                className={isActive(currentPath, item.href) ? "mobile-nav-link is-active" : "mobile-nav-link"}
                aria-current={isActive(currentPath, item.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </SiteLink>
            ))}
            <SiteLink className="button button-primary mobile-nav-action" href="/contact" onClick={closeMenu}>
              Plan gesprek
            </SiteLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
