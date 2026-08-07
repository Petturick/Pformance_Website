import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>Strategy. Engineering. Research.</span>
        </div>
        <h1 className="hero-title">
          Turning strategy into<br />
          <span className="hero-title-accent">measurable digital results</span>
        </h1>
        <p className="hero-subtitle">
          Pformance B.V. unites Advisory, Build, Lab and Resources under one roof —
          helping organizations move from idea to impact with clarity and confidence.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Start a conversation
            <ArrowDown size={18} />
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("build")}>
            Explore our work
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">12+</span>
            <span className="hero-stat-label">Years of practice</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">40+</span>
            <span className="hero-stat-label">Projects delivered</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">4</span>
            <span className="hero-stat-label">Integrated practices</span>
          </div>
        </div>
      </div>
      <button className="hero-scroll-hint" onClick={() => scrollTo("advisory")} aria-label="Scroll down">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
