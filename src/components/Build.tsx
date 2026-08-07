import { Code as Code2, Layers, Cloud, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: Code2,
    title: "Product Engineering",
    description: "Full-stack teams that design, build, and ship web and mobile products with a bias for momentum.",
  },
  {
    icon: Layers,
    title: "Platform Architecture",
    description: "Scalable, maintainable foundations — API design, data modelling, and infrastructure that lasts.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "CI/CD pipelines, observability, and automation that keep deployment boring and releases safe.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description: "Security woven through every layer — from threat modelling to least-privilege access controls.",
  },
];

export default function Build() {
  return (
    <section className="section section-alt" id="build">
      <div className="section-header">
        <span className="section-label">02 — Build</span>
        <h2 className="section-title">Engineering that ships</h2>
        <p className="section-lead">
          Ideas are only as good as their execution. Our Build practice turns validated concepts
          into production-grade software — fast, reliable, and built to evolve.
        </p>
      </div>
      <div className="card-grid">
        {capabilities.map((cap) => (
          <article key={cap.title} className="card">
            <div className="card-icon">
              <cap.icon size={24} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">{cap.title}</h3>
            <p className="card-text">{cap.description}</p>
          </article>
        ))}
      </div>
      <div className="build-cta">
        <p className="build-cta-text">
          From first commit to production — we embed with your team or operate independently.
        </p>
      </div>
    </section>
  );
}
