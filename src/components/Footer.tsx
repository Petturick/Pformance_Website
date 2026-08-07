import BrandLogo from "./BrandLogo";
import { navItems } from "../content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a href="/" aria-label="Pformance home"><BrandLogo /></a>
          <p>Strategisch. Duidelijk. Presteren.</p>
          <p className="footer-small">Van commerciële uitdaging naar werkende oplossing.</p>
        </div>

        <div>
          <h2 className="footer-heading">Navigatie</h2>
          <nav className="footer-nav" aria-label="Footer navigatie">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>

        <div>
          <h2 className="footer-heading">Pformance</h2>
          <div className="footer-nav">
            <a href="/klantcases">Klantcases</a>
            <a href="/resources">Resources</a>
            <a href="/over">Over Pformance</a>
            <a href="mailto:hello@pformance.nl">hello@pformance.nl</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Pformance B.V.</span>
        <span>Strategisch. Duidelijk. Presteren.</span>
      </div>
    </footer>
  );
}
