import Link from "next/link";
import { projectStatusLabels, type LabProject } from "@/data/lab";

type ProjectCardProps = {
  project: LabProject;
  headingLevel?: "h2" | "h3";
};

export default function ProjectCard({
  project,
  headingLevel: Heading = "h3",
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-brand-border bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/35 hover:shadow-lg hover:shadow-brand-navy/5">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-brand-teal" />
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
          {projectStatusLabels[project.status]}
        </span>
        {project.isPlaceholder ? (
          <span className="rounded-md border border-brand-border bg-brand-off px-3 py-1 text-xs font-medium text-slate-600">
            In ontwikkeling
          </span>
        ) : null}
      </div>

      <Heading className="mt-6 font-display text-2xl font-semibold tracking-[-0.025em] text-brand-navy">
        <Link
          href={`/lab/${project.slug}`}
          className="before:absolute before:inset-0 before:rounded-[12px]"
        >
          {project.title}
        </Link>
      </Heading>

      <p className="mt-3 text-sm leading-6 text-slate-600">{project.intro}</p>

      {project.technologies.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-brand-off px-2.5 py-1 text-xs text-slate-600"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      <span className="mt-auto pt-7 text-sm font-semibold text-brand-blue transition-transform group-hover:translate-x-1">
        Bekijk project →
      </span>
    </article>
  );
}
