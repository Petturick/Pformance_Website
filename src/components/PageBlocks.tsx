import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  MessageSquare,
  Route,
  Sparkles,
  Target,
} from "lucide-react";
import SiteLink from "./SiteLink";
import type { Action, Block, Page } from "../content/site";
import { siteConfig } from "../config/site";

const featureIcons = [Target, Code2, BarChart3, Database, Layers3, Sparkles, Route];

function pageKey(path: string) {
  if (path === "/") return "home";
  return path.replace(/^\//, "").replace(/\//g, "-") || "home";
}

function ActionLink({ action }: { action: Action }) {
  const style = action.style ?? "primary";
  const className = style === "primary" ? "button button-primary" : style === "secondary" ? "button button-secondary" : "text-link";
  return (
    <SiteLink className={className} href={action.href}>
      {action.label}<ArrowRight size={16} />
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

function SyntrxPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-ui syntrx-ui ${compact ? "product-ui-compact" : ""}`} aria-hidden="true">
      <div className="product-ui-head"><strong>Syntrx</strong><span>Productdata</span></div>
      <div className="product-ui-body">
        <div className="product-ui-nav"><i /><i /><i /><i /><i /></div>
        <div className="product-ui-main">
          <div className="product-ui-kpis"><b /><b /><b /></div>
          <div className="product-ui-product"><span /><em /></div>
          <div className="product-ui-lines"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

function OnboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-ui onboard-ui ${compact ? "product-ui-compact" : ""}`} aria-hidden="true">
      <div className="product-ui-head"><strong>OnboardTool</strong><span>Dashboard</span></div>
      <div className="onboard-kpis"><div><b>75%</b><span>Voortgang</span></div><div><b>12</b><span>Taken</span></div><div><b>8</b><span>Nieuwe hires</span></div></div>
      <div className="onboard-list"><i /><i /><i /></div>
    </div>
  );
}

function ProductStack() {
  return (
    <div className="hero-product-stack" aria-hidden="true">
      <SyntrxPreview compact />
      <OnboardPreview compact />
      <div className="hero-flow-lines"><i /><i /><i /><i /></div>
    </div>
  );
}

function CasesVisual() {
  return (
    <div className="hero-proof-lines" aria-hidden="true">
      <i /><i /><i /><i />
    </div>
  );
}

function InsightVisual() {
  return (
    <div className="hero-insight-card" aria-hidden="true">
      <div className="insight-orbit"><i /><i /><i /></div>
      <span>Strategie</span>
      <strong>Data. Technologie. Groei.</strong>
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="hero-contact-card" aria-hidden="true">
      <MessageSquare size={32} />
      <span>Een goed gesprek begint bij het echte probleem.</span>
    </div>
  );
}

function PageHeroVisual({ page }: { page: Page }) {
  if (page.path === "/cases") return <CasesVisual />;
  if (page.path === "/inzichten") return <InsightVisual />;
  if (page.path === "/contact") return <ContactVisual />;
  if (page.path === "/producten/syntrx") return <SyntrxPreview />;
  if (page.path === "/producten/onboardtool") return <OnboardPreview />;
  return <ProductStack />;
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
  return (
    <section className={`section-block feature-section feature-section-${key}`}>
      <div className="shell">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        <div className={`feature-grid columns-${block.columns ?? 3}`}>
          {block.items.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            const body = (
              <>
                <div className="feature-icon"><Icon size={22} strokeWidth={1.7} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href ? <span className="card-link">Bekijk <ArrowRight size={15} /></span> : null}
              </>
            );
            return item.href ? <SiteLink className="feature-card interactive-card" href={item.href} key={item.title}>{body}</SiteLink> : <article className="feature-card" key={item.title}>{body}</article>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessBlock({ block }: { block: Extract<Block, { type: "process" }> }) {
  return (
    <section className="section-block process-section">
      <div className="shell">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        <ol className="process-grid">
          {block.steps.map((step) => <li key={step.number} className="process-step"><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

function ProductMark({ title }: { title: string }) {
  return title.toLowerCase().includes("onboard") ? <OnboardPreview /> : <SyntrxPreview />;
}

function SplitBlock({ block, pagePath }: { block: Extract<Block, { type: "split" }>; pagePath: string }) {
  const tone = block.tone ?? "light";
  const productLike = block.visual === "product" || block.title === "Syntrx" || block.title === "OnboardTool";
  return (
    <section className={`section-block split-section split-${tone} split-section-${pageKey(pagePath)}`}>
      <div className="shell split-grid">
        <div className="split-copy">
          {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
          <h2>{block.title}</h2>
          <p>{block.text}</p>
          {block.bullets?.length ? <ul className="check-list">{block.bullets.map((bullet) => <li key={bullet}><Check size={16} />{bullet}</li>)}</ul> : null}
          {block.action ? <ActionLink action={block.action} /> : null}
        </div>
        <div className="split-mark">{productLike ? <ProductMark title={block.title} /> : <div className="human-placeholder"><span /><span /><span /></div>}</div>
      </div>
    </section>
  );
}

function CasesBlock({ block, pagePath }: { block: Extract<Block, { type: "cases" }>; pagePath: string }) {
  return (
    <section className={`section-block cases-section cases-section-${pageKey(pagePath)}`}>
      <div className="shell">
        <div className="section-heading-row"><SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />{block.action ? <ActionLink action={block.action} /> : null}</div>
        <div className="case-grid">
          {block.items.map((item, index) => (
            <article className="case-card" key={`${item.title}-${index}`}>
              <div className={`case-image case-image-${index + 1}`}><span>{item.sector}</span></div>
              <div className="case-content">
                <h3>{item.title}</h3>
                <p>{item.challenge}</p>
                {item.href ? <SiteLink className="text-link" href={item.href}>Bekijk case <ArrowRight size={15} /></SiteLink> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesBlock({ block }: { block: Extract<Block, { type: "resources" }> }) {
  const [featured, ...rest] = block.items;
  return (
    <section className="section-block resources-section-library">
      <div className="shell">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        {featured ? (
          <article className="resource-featured">
            <div className="resource-featured-visual"><div className="insight-orbit"><i /><i /><i /></div></div>
            <div><span className="resource-type">{featured.type}</span><h3>{featured.title}</h3><p>{featured.text}</p><span className="text-link">Lees artikel <ArrowRight size={15} /></span></div>
          </article>
        ) : null}
        <div className="resource-card-grid">
          {rest.map((item) => <article className="resource-card" key={item.title}><span className="resource-type">{item.type}</span><h3>{item.title}</h3><p>{item.text}</p><span className="text-link">Lees artikel <ArrowRight size={15} /></span></article>)}
        </div>
      </div>
    </section>
  );
}

function QuoteBlock({ block }: { block: Extract<Block, { type: "quote" }> }) {
  return <section className="section-block quote-section"><div className="shell quote-card"><MessageSquare size={26} /><blockquote>{block.quote}</blockquote>{block.source ? <p>{block.source}</p> : null}</div></section>;
}

function CtaBlock({ block }: { block: Extract<Block, { type: "cta" }> }) {
  return (
    <section className="section-block cta-wrap">
      <div className="shell"><div className="cta-panel"><div className="cta-copy"><MessageSquare size={28} /><div><h2>{block.title}</h2><p>{block.text}</p></div></div><div className="cta-actions"><ActionLink action={block.primary} />{block.secondary ? <ActionLink action={block.secondary} /> : null}</div></div></div>
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
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Kennismaking Pformance - ${company || name}`);
    const body = encodeURIComponent(`Naam: ${name}\nE-mail: ${email}\nBedrijf: ${company}\n\nVraagstuk:\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-block contact-section">
      <div className="shell contact-grid">
        <div className="contact-intro"><p className="eyebrow">Contact</p><h2>{block.title}</h2><p>{block.intro}</p><div className="contact-direct"><Mail size={18} /><div><span>E-mail</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><div className="contact-direct"><MapPin size={18} /><div><span>Vestiging</span><p>{siteConfig.address.city}</p></div></div></div>
        <form className="contact-form" onSubmit={submit}><div className="form-grid"><label>Naam<input name="name" required autoComplete="name" /></label><label>E-mailadres<input type="email" name="email" required autoComplete="email" /></label><label>Bedrijf<input name="company" autoComplete="organization" /></label></div><label>Wat speelt er?<textarea name="message" rows={5} required /></label><button className="button button-primary" type="submit">Stel e-mail op <ArrowUpRight size={16} /></button></form>
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
          case "process": return <ProcessBlock block={block} key={key} />;
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
