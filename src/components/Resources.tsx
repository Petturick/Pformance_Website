import { BookOpen, FileText, Video, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ResourceItem {
  icon: LucideIcon;
  type: string;
  title: string;
  description: string;
  readTime: string;
}

const resources: ResourceItem[] = [
  {
    icon: FileText,
    type: "Article",
    title: "The hidden cost of premature platforms",
    description: "Why building a platform before you need one can slow you down — and what to do instead.",
    readTime: "8 min read",
  },
  {
    icon: Video,
    type: "Talk",
    title: "Security by design in modern teams",
    description: "A practical framework for embedding security into your delivery process without sacrificing speed.",
    readTime: "32 min watch",
  },
  {
    icon: BookOpen,
    type: "Guide",
    title: "From roadmap to reality: a delivery playbook",
    description: "The structures, rituals, and artefacts that turn a strategy deck into shipped software.",
    readTime: "15 min read",
  },
  {
    icon: Download,
    type: "Template",
    title: "Discovery workshop canvas",
    description: "A ready-to-use canvas for running structured discovery sessions with your team and stakeholders.",
    readTime: "Downloadable PDF",
  },
];

export default function Resources() {
  return (
    <section className="section section-alt" id="resources">
      <div className="section-header">
        <span className="section-label">04 — Resources</span>
        <h2 className="section-title">Knowledge worth sharing</h2>
        <p className="section-lead">
          We publish what we learn — articles, talks, guides, and tools from the field.
          No fluff, just practical thinking you can apply.
        </p>
      </div>
      <div className="card-grid">
        {resources.map((res) => (
          <article key={res.title} className="card card-resource">
            <div className="resource-meta">
              <span className="resource-type">
                <res.icon size={14} strokeWidth={2} />
                {res.type}
              </span>
              <span className="resource-time">{res.readTime}</span>
            </div>
            <h3 className="card-title">{res.title}</h3>
            <p className="card-text">{res.description}</p>
            <button className="resource-link">Read more →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
