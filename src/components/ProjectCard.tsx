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
    <article className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-200 hover:border-zinc-300">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
          {projectStatusLabels[project.status]}
        </span>
        {project.isPlaceholder ? (
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Placeholder content
          </span>
        ) : null}
      </div>

      <Heading className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
        <Link
          href={`/lab/${project.slug}`}
          className="before:absolute before:inset-0 before:rounded-2xl"
        >
          {project.title}
        </Link>
      </Heading>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
        {project.intro}
      </p>

      {project.technologies.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      <span className="mt-auto pt-6 text-sm font-medium text-blue-600 group-hover:text-blue-700">
        Bekijk project
        <span aria-hidden="true"> &rarr;</span>
      </span>
    </article>
  );
}
