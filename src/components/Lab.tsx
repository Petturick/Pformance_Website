import { FlaskConical, Cpu, GitBranch, ChartBar as BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Experiment {
  icon: LucideIcon;
  title: string;
  description: string;
}

const experiments: Experiment[] = [
  {
    icon: FlaskConical,
    title: "Prototyping",
    description: "Rapid prototypes and proofs-of-concept that de-risk decisions before you invest at scale.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Applied machine learning and intelligent automation — practical, measured, and accountable.",
  },
  {
    icon: GitBranch,
    title: "Emerging Tech",
    description: "Honest evaluation of where new technologies create real value — and where they don't.",
  },
  {
    icon: BarChart3,
    title: "Data & Insights",
    description: "Analytics foundations, dashboards, and data pipelines that make the invisible visible.",
  },
];

export default function Lab() {
  return (
    <section className="section" id="lab">
      <div className="section-header">
        <span className="section-label">03 — Lab</span>
        <h2 className="section-title">Where ideas get tested</h2>
        <p className="section-lead">
          The Lab is our sandbox for experimentation. We explore new technologies, build
          prototypes, and generate the evidence you need to invest with confidence.
        </p>
      </div>
      <div className="card-grid">
        {experiments.map((exp) => (
          <article key={exp.title} className="card">
            <div className="card-icon">
              <exp.icon size={24} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">{exp.title}</h3>
            <p className="card-text">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
