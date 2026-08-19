import BrandLogo from "./BrandLogo";
import SiteLink from "./SiteLink";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <SiteLink href="/" aria-label="Pformance home"><BrandLogo /></SiteLink>
          <p className="footer-small">Strategie en technologie achter werkende commerciële systemen.</p>
        </div>

        <div>
          <h2 className="footer-heading">Oplossingen</h2>
          <nav className="footer-nav" aria-label="Oplossingen">
            <SiteLink href="/oplossingen">Groei en strategie</SiteLink>
            <SiteLink href="/oplossingen">Processen en technologie</SiteLink>
            <SiteLink href="/oplossingen">Software bouwen</SiteLink>
          </nav>
        </div>

        <div>
          <h2 className="footer-heading">Producten</h2>
          <nav className="footer-nav" aria-label="Producten">
            <SiteLink href="/producten/syntrx">Syntrx</SiteLink>
            <SiteLink href="/producten/onboardtool">OnboardTool</SiteLink>
          </nav>
        </div>

        <div>
          <h2 className="footer-heading">Pformance</h2>
          <nav className="footer-nav" aria-label="Pformance">
            <SiteLink href="/cases">Cases</SiteLink>
            <SiteLink href="/inzichten">Inzichten</SiteLink>
            <SiteLink href="/over">Over</SiteLink>
            <SiteLink href="/contact">Contact</SiteLink>
          </nav>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <span>{siteConfig.chamberOfCommerce} · {siteConfig.vatNumber}</span>
      </div>
    </footer>
  );
}
