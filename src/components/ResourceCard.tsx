import Link from "next/link";
import {
  resourceStatusLabels,
  resourceTypeLabels,
  type Resource,
} from "@/data/resources";

type ResourceCardProps = {
  resource: Resource;
  headingLevel?: "h2" | "h3";
};

export default function ResourceCard({
  resource,
  headingLevel: Heading = "h3",
}: ResourceCardProps) {
  const isAvailable = resource.status === "available" && Boolean(resource.href);

  return (
    <article className="relative flex h-full flex-col rounded-[12px] border border-brand-border bg-brand-off p-7 transition-colors hover:border-brand-blue/30">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
          {resourceTypeLabels[resource.type]}
        </span>
        <span className="rounded-md border border-brand-border bg-white px-3 py-1 text-xs font-medium text-slate-600">
          {resourceStatusLabels[resource.status]}
        </span>
        {resource.gated ? (
          <span className="rounded-md border border-brand-border bg-white px-3 py-1 text-xs font-medium text-slate-500">
            E-mail vereist
          </span>
        ) : null}
      </div>

      <Heading className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-brand-navy">
        {isAvailable && resource.href ? (
          <Link
            href={resource.href}
            className="before:absolute before:inset-0 before:rounded-[12px]"
          >
            {resource.title}
          </Link>
        ) : (
          resource.title
        )}
      </Heading>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {resource.description}
      </p>

      {resource.topics.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {resource.topics.map((topic) => (
            <li
              key={topic}
              className="rounded-md bg-white px-2.5 py-1 text-xs text-slate-600"
            >
              {topic}
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-auto pt-7 text-sm font-semibold text-slate-500">
        {isAvailable ? (
          <span className="text-brand-blue">Bekijken →</span>
        ) : (
          "Binnenkort beschikbaar"
        )}
      </p>
    </article>
  );
}
