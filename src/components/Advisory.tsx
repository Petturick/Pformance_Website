import { Compass, Lightbulb, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Compass,
    title: "Strategy & Roadmapping",
    description: "We turn ambitious visions into clear, prioritised roadmaps — grounded in business value, not buzzwords.",
  },
  {
    icon: Lightbulb,
    title: "Discovery & Ideation",
    description: "Structured workshops that surface the right problems to solve, validate assumptions, and align stakeholders.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Operating models, process redesign, and technology choices that move organisations forward — sustainably.",
  },
  {
    icon: Users,
    title: "Interim Leadership",
    description: "Hands-on CTO and product leadership when you need experience in the driver's seat, not just advice.",
  },
];

export default function Advisory() {
  return (
    <section className="section" id="advisory">
      <div className="section-header">
        <span className="section-label">01 — Advisory</span>
        <h2 className="section-title">Clarity before code</h2>
        <p className="section-lead">
          Every great product starts with the right questions. Our Advisory practice helps
          you define where to play, how to win, and what to build first.
        </p>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <div className="card-icon">
              <service.icon size={24} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-text">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
