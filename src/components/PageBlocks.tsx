import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  FlaskConical,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Route,
  Sparkles,
  Wrench,
} from "lucide-react";
import SiteLink from "./SiteLink";
import type { Action, Block, Page } from "../content/site";
import { siteConfig } from "../config/site";

const featureIcons = [Route, Wrench, FlaskConical, FileText, LineChart, Layers3, Sparkles];

function pageKey(path: string) {
  if (path === "/") return "home";
  return path.replace(/^\//, "").replace(/\//g, "-") || "home";
}

function ActionLink({ action }: { action: Action }) {
  const style = action.style ?? "primary";
  const className =
    style === "primary"
      ? "button button-primary"
      : style === "secondary"
        ? "button button-secondary"
        : "text-link";

  return (
    <SiteLink className={className} href={action.href}>
      {action.label}
      {style === "ghost" ? <ArrowRight size={16} /> : <ArrowUpRight size={16} />}
    </SiteLink>
  );
}

function SectionIntro({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="section-intro">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function HomeHeroVisual() {
  return (
    <div className="hero-art hero-art-home" aria-hidden="true">
      <div className="hero-ring hero-ring-navy" />
      <div className="hero-ring hero-ring-blue" />
      <div className="hero-accent hero-accent-teal" />
      <div className="hero-caption">Strategie · Technologie · Uitvoering</div>
    </div>
  );
}

function AdvisoryHeroVisual() {
  return (
    <div className="hero-art hero-art-advisory" aria-hidden="true">
      <span className="advisory-line">Diagnose</span>
      <span className="advisory-line">Keuzes</span>
      <span className="advisory-line">Plan</span>
      <span className="advisory-line advisory-line-active">Sturing</span>
      <div className="advisory-axis" />
    </div>
  );
}

function BuildHeroVisual() {
  return (
    <div className="hero-art hero-art-build" aria-hidden="true">
      <div className="ui-shell">
        <div className="ui-topbar"><span /><span /><span /></div>
        <div className="ui-body">
          <div className="ui-sidebar"><i /><i /><i /><i /></div>
          <div className="ui-content">
            <div className="ui-metric-row"><b /><b /><b /></div>
            <div className="ui-chart"><span /><span /><span /><span /><span /></div>
            <div className="ui-table"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="ui-accent-chip">Build</div>
    </div>
  );
}

function CasesHeroVisual() {
  return (
    <div className="hero-art hero-art-cases" aria-hidden="true">
      <div className="proof-step"><span>01</span><strong>Context</strong></div>
      <div className="proof-step"><span>02</span><strong>Keuzes</strong></div>
      <div className="proof-step"><span>03</span><strong>Oplossing</strong></div>
      <div className="proof-step proof-step-active"><span>04</span><strong>Bewijs</strong></div>
    </div>
  );
}

function LabHeroVisual() {
  return (
    <div className="hero-art hero-art-lab" aria-hidden="true">
      <div className="lab-product lab-product-one"><span>01</span><strong>Syntrx</strong></div>
      <div className="lab-product lab-product-two"><span>02</span><strong>PricingTool</strong></div>
      <div className="lab-product lab-product-three"><span>03</span><strong>Onboarding</strong></div>
    </div>
  );
}

function ResourcesHeroVisual() {
  return (
    <div className="hero-art hero-art-resources" aria-hidden="true">
      <div className="resource-index-item"><span>Checklist</span><strong>Audit</strong></div>
      <div className="resource-index-item"><span>Guide</span><strong>Visibility</strong></div>
      <div className="resource-index-item"><span>Template</span><strong>PIM</strong></div>
      <div className="resource-index-item"><span>Framework</span><strong>Product</strong></div>
    </div>
  );
}

function AboutHeroVisual() {
  return (
    <div className="hero-art hero-art-about" aria-hidden="true">
      <span>Strategisch</span>
      <span>Duidelijk</span>
      <span>Praktisch</span>
      <span className="about-active">Vooruitkijkend</span>
    </div>
  );
}

function ContactHeroVisual() {
  return (
    <div className="hero-art hero-art-contact" aria-hidden="true">
      <div><span>01</span><strong>Marketing leadership</strong></div>
      <div><span>02</span><strong>Digitale oplossing</strong></div>
    </div>
  );
}

function PageHeroVisual({ page }: { page: Page }) {
  switch (page.path) {
    case "/advisory": return <AdvisoryHeroVisual />;
    case "/build": return <BuildHeroVisual />;
    case "/klantcases": return <CasesHeroVisual />;
    case "/lab": return <LabHeroVisual />;
    case "/resources": return <ResourcesHeroVisual />;
    case "/over": return <AboutHeroVisual />;
    case "/contact": return <ContactHeroVisual />;
    default: return <HomeHeroVisual />;
  }
}

export function PageHero({ page }: { page: Page }) {
  const { hero } = page;
  const key = pageKey(page.path);

  return (
    <section className={`page-hero page-hero-${key}`}>
      <div className="shell hero-grid">
        <div className="hero-copy">
          {hero.eyebrow ? <p className="eyebrow">{hero.eyebrow}</p> : null}
          <h1>{hero.title} {hero.highlight ? <span>{hero.highlight}</span> : null}</h1>
          <p className="hero-intro">{hero.intro}</p>
          {hero.primary || hero.secondary ? (
            <div className="hero-actions">
              {hero.primary ? <ActionLink action={hero.primary} /> : null}
              {hero.secondary ? <ActionLink action={hero.secondary} /> : null}
            </div>
          ) : null}
        </div>
        <PageHeroVisual page={page} />
      </div>
    </section>
  );
}

function FeatureGrid({ block, pagePath }: { block: Extract<Block, { type: "features" }>; pagePath: string }) {
  const key = pageKey(pagePath);
  const hideIcons = pagePath === "/over" || pagePath === "/contact";

  return (
    <section className={`section-block feature-section feature-section-${key}`}>
      <div className="shell">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        <div className={`feature-grid columns-${block.columns ?? 3}`}>
          {block.items.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            const body = (
              <>
                {!hideIcons ? <div className="feature-icon"><Icon size={22} /></div> : <span className="feature-index">0{index + 1}</span>}
                {item.eyebrow ? <p className="card-eyebrow">{item.eyebrow}</p> : null}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href ? <span className="card-link">Lees meer <ArrowRight size={15} /></span> : null}
              </>
            );

            const className = `feature-card ${item.href ? "interactive-card" : ""} feature-card-${key} feature-card-${index + 1}`;

            return item.href ? (
              <SiteLink className={className} href={item.href} key={item.title}>{body}</SiteLink>
            ) : (
              <article className={className} key={item.title}>{body}</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessBlock({ block, pagePath }: { block: Extract<Block, { type: "process" }>; pagePath: string }) {
  const key = pageKey(pagePath);

  return (
    <section className={`section-block section-soft process-section process-section-${key}`}>
      <div className="shell process-layout">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        <ol className="process-grid">
          {block.steps.map((step) => (
            <li key={step.number} className="process-step">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CasesBlock({ block, pagePath }: { block: Extract<Block, { type: "cases" }>; pagePath: string }) {
  const key = pageKey(pagePath);

  return (
    <section className={`section-block cases-section cases-section-${key}`}>
      <div className="shell">
        <div className="section-heading-row">
          <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          {block.action ? <ActionLink action={block.action} /> : null}
        </div>
        <div className="case-grid">
          {block.items.map((item, index) => (
            <article className={`case-card ${pagePath === "/klantcases" && index === 0 ? "case-card-featured" : ""}`} key={`${item.title}-${index}`}>
              <div className="case-card-topline">
                <span>{item.sector}</span>
                {item.status ? <span className="status-pill">{item.status}</span> : null}
              </div>
              <div className="case-visual" aria-hidden="true">
                <span className="case-visual-number">0{index + 1}</span>
                <div className="case-visual-line" />
                <div className="case-visual-bars"><i /><i /><i /></div>
              </div>
              <h3>{item.title}</h3>
              <p className="case-label">Uitdaging</p>
              <p>{item.challenge}</p>
              <p className="case-label">Publicatie</p>
              <p>{item.publication}</p>
              {item.href ? <SiteLink className="text-link" href={item.href}>Bekijk case <ArrowRight size={15} /></SiteLink> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesBlock({ block }: { block: Extract<Block, { type: "resources" }> }) {
  return (
    <section className="section-block resources-section-library">
      <div className="shell resources-layout">
        <div className="resources-aside">
          <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          <div className="resource-legend" aria-label="Beschikbare resourcetypen">
            {Array.from(new Set(block.items.map((item) => item.type))).map((type) => <span key={type}>{type}</span>)}
          </div>
        </div>
        <div className="resource-list">
          {block.items.map((item, index) => (
            <article className="resource-row" key={item.title}>
              <span className="resource-number">0{index + 1}</span>
              <div>
                <span className="resource-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="resource-meta">
                <span>{item.status}</span>
                {item.href ? <SiteLink className="text-link" href={item.href}>Open <ArrowUpRight size={15} /></SiteLink> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitBlock({ block, pagePath }: { block: Extract<Block, { type: "split" }>; pagePath: string }) {
  const tone = block.tone ?? "light";
  const key = pageKey(pagePath);

  return (
    <section className={`section-block split-section split-${tone} split-section-${key}`}>
      <div className="shell split-grid">
        <div className="split-copy">
          {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
          <h2>{block.title}</h2>
          <p>{block.text}</p>
          {block.bullets?.length ? (
            <ul className="check-list">
              {block.bullets.map((bullet) => <li key={bullet}><Check size={16} />{bullet}</li>)}
            </ul>
          ) : null}
          {block.action ? <ActionLink action={block.action} /> : null}
        </div>
        <div className="split-mark" aria-hidden="true"><span /><span /></div>
      </div>
    </section>
  );
}

function QuoteBlock({ block }: { block: Extract<Block, { type: "quote" }> }) {
  return (
    <section className="section-block quote-section">
      <div className="shell quote-card">
        <MessageSquare size={26} />
        <blockquote>{block.quote}</blockquote>
        {block.source ? <p>{block.source}</p> : null}
      </div>
    </section>
  );
}

function CtaBlock({ block }: { block: Extract<Block, { type: "cta" }> }) {
  return (
    <section className="section-block cta-wrap">
      <div className="shell">
        <div className="cta-panel">
          <div>
            <p className="eyebrow eyebrow-on-dark">Volgende stap</p>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </div>
          <div className="cta-actions">
            <ActionLink action={block.primary} />
            {block.secondary ? <ActionLink action={block.secondary} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ block }: { block: Extract<Block, { type: "contact" }> }) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const route = String(form.get("route") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Kennismaking Pformance - ${company || name}`);
    const body = encodeURIComponent(`Naam: ${name}\nE-mail: ${email}\nBedrijf: ${company}\nRoute: ${route}\n\nVraagstuk:\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-block contact-section contact-section-redesign">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>{block.title}</h2>
          <p>{block.intro}</p>

          <div className="contact-direct">
            <Mail size={18} />
            <div>
              <span>E-mail</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>

          <div className="contact-direct">
            <MapPin size={18} />
            <div>
              <span>Vestiging</span>
              <p className="contact-address">{siteConfig.address.street}<br />{siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.country}</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-grid">
            <label>Naam<input name="name" required autoComplete="name" /></label>
            <label>E-mailadres<input type="email" name="email" required autoComplete="email" /></label>
            <label>Bedrijf<input name="company" autoComplete="organization" /></label>
            <label>Waar gaat het over?
              <select name="route" defaultValue="Advisory">
                <option>Advisory</option>
                <option>Build</option>
                <option>Klantcase of samenwerking</option>
                <option>Lab</option>
                <option>Anders</option>
              </select>
            </label>
          </div>
          <label>Wat speelt er?<textarea name="message" rows={6} required /></label>
          <button className="button button-primary" type="submit">Stel e-mail op <ArrowUpRight size={16} /></button>
          <p className="form-note">Je eigen e-mailprogramma opent met de ingevulde informatie. Via deze website wordt nog geen formulierdata opgeslagen.</p>
        </form>
      </div>
    </section>
  );
}

export default function PageBlocks({ blocks, pagePath }: { blocks: Block[]; pagePath: string }) {
  return (
    <div className={`page-body page-body-${pageKey(pagePath)}`}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "features": return <FeatureGrid block={block} pagePath={pagePath} key={key} />;
          case "process": return <ProcessBlock block={block} pagePath={pagePath} key={key} />;
          case "cases": return <CasesBlock block={block} pagePath={pagePath} key={key} />;
          case "resources": return <ResourcesBlock block={block} key={key} />;
          case "split": return <SplitBlock block={block} pagePath={pagePath} key={key} />;
          case "quote": return <QuoteBlock block={block} key={key} />;
          case "cta": return <CtaBlock block={block} key={key} />;
          case "contact": return <ContactBlock block={block} key={key} />;
          default: return null;
        }
      })}
    </div>
  );
}
