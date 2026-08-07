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
  MessageSquare,
  Route,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { Action, Block, Page } from "../content/site";

const featureIcons = [Route, Wrench, FlaskConical, FileText, LineChart, Layers3, Sparkles];

function ActionLink({ action }: { action: Action }) {
  const style = action.style ?? "primary";
  const className = style === "primary" ? "button button-primary" : style === "secondary" ? "button button-secondary" : "text-link";
  return (
    <a className={className} href={action.href}>
      {action.label}
      {style === "ghost" ? <ArrowRight size={16} /> : <ArrowUpRight size={16} />}
    </a>
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

function BrandVisual({ variant = "orbit" }: { variant?: Page["hero"]["visual"] | "human" }) {
  return (
    <div className={`brand-visual brand-visual-${variant ?? "orbit"}`} aria-hidden="true">
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="orbit-core" />
      <div className="visual-panel visual-panel-a"><span /><span /><span /></div>
      <div className="visual-panel visual-panel-b"><i /><i /><i /><i /></div>
    </div>
  );
}

export function PageHero({ page }: { page: Page }) {
  const { hero } = page;
  return (
    <section className="page-hero">
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
        <BrandVisual variant={hero.visual} />
      </div>
    </section>
  );
}

function FeatureGrid({ block }: { block: Extract<Block, { type: "features" }> }) {
  return (
    <section className="section-block">
      <div className="shell">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        <div className={`feature-grid columns-${block.columns ?? 3}`}>
          {block.items.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            const body = (
              <>
                <div className="feature-icon"><Icon size={22} /></div>
                {item.eyebrow ? <p className="card-eyebrow">{item.eyebrow}</p> : null}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href ? <span className="card-link">Lees meer <ArrowRight size={15} /></span> : null}
              </>
            );
            return item.href ? <a className="feature-card interactive-card" href={item.href} key={item.title}>{body}</a> : <article className="feature-card" key={item.title}>{body}</article>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessBlock({ block }: { block: Extract<Block, { type: "process" }> }) {
  return (
    <section className="section-block section-soft">
      <div className="shell">
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

function CasesBlock({ block }: { block: Extract<Block, { type: "cases" }> }) {
  return (
    <section className="section-block">
      <div className="shell">
        <div className="section-heading-row">
          <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
          {block.action ? <ActionLink action={block.action} /> : null}
        </div>
        <div className="case-grid">
          {block.items.map((item, index) => (
            <article className="case-card" key={`${item.title}-${index}`}>
              <div className="case-card-topline">
                <span>{item.sector}</span>
                {item.status ? <span className="status-pill">{item.status}</span> : null}
              </div>
              <div className="case-visual" aria-hidden="true">
                <div className="case-visual-line" />
                <div className="case-visual-bars"><i /><i /><i /></div>
              </div>
              <h3>{item.title}</h3>
              <p className="case-label">Uitdaging</p>
              <p>{item.challenge}</p>
              <p className="case-label">Publicatie</p>
              <p>{item.publication}</p>
              {item.href ? <a className="text-link" href={item.href}>Bekijk case <ArrowRight size={15} /></a> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesBlock({ block }: { block: Extract<Block, { type: "resources" }> }) {
  return (
    <section className="section-block">
      <div className="shell">
        <SectionIntro eyebrow={block.eyebrow} title={block.title} intro={block.intro} />
        <div className="resource-list">
          {block.items.map((item) => (
            <article className="resource-row" key={item.title}>
              <div>
                <span className="resource-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="resource-meta">
                <span>{item.status}</span>
                {item.href ? <a className="text-link" href={item.href}>Open <ArrowUpRight size={15} /></a> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitBlock({ block }: { block: Extract<Block, { type: "split" }> }) {
  const tone = block.tone ?? "light";
  return (
    <section className={`section-block split-section split-${tone}`}>
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
        <BrandVisual variant={block.visual ?? "orbit"} />
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
    window.location.href = `mailto:hello@pformance.nl?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-block contact-section">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>{block.title}</h2>
          <p>{block.intro}</p>
          <div className="contact-direct">
            <Mail size={18} />
            <div><span>E-mail</span><a href="mailto:hello@pformance.nl">hello@pformance.nl</a></div>
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

export default function PageBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "features": return <FeatureGrid block={block} key={key} />;
          case "process": return <ProcessBlock block={block} key={key} />;
          case "cases": return <CasesBlock block={block} key={key} />;
          case "resources": return <ResourcesBlock block={block} key={key} />;
          case "split": return <SplitBlock block={block} key={key} />;
          case "quote": return <QuoteBlock block={block} key={key} />;
          case "cta": return <CtaBlock block={block} key={key} />;
          case "contact": return <ContactBlock block={block} key={key} />;
          default: return null;
        }
      })}
    </>
  );
}
