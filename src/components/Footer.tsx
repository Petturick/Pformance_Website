import BrandLogo from "./BrandLogo";
import SiteLink from "./SiteLink";
import { navigationItems } from "../config/navigation";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <SiteLink href="/" aria-label="Pformance home">
            <BrandLogo />
          </SiteLink>
          <p>Strategisch. Duidelijk. Presteren.</p>
          <p className="footer-small">Van commerciële marketinguitdaging naar werkend groeisysteem.</p>
        </div>

        <div>
          <h2 className="footer-heading">Navigatie</h2>
          <nav className="footer-nav" aria-label="Footer navigatie">
            {navigationItems.map((item) => <SiteLink key={item.href} href={item.href}>{item.label}</SiteLink>)}
            <SiteLink href="/contact">Contact</SiteLink>
          </nav>
        </div>

        <div>
          <h2 className="footer-heading">Pformance B.V.</h2>
          <div className="footer-nav footer-company">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.url}>{siteConfig.domain}</a>
            <span>{siteConfig.address.street}</span>
            <span>{siteConfig.address.postalCode} {siteConfig.address.city}</span>
            <span>{siteConfig.address.country}</span>
            <span>KVK {siteConfig.chamberOfCommerce}</span>
            <span>BTW {siteConfig.vatNumber}</span>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <span>Strategisch. Duidelijk. Presteren.</span>
      </div>
    </footer>
  );
}
