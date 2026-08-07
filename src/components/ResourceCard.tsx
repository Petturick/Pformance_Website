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
    <article className="relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-medium text-white">
          {resourceTypeLabels[resource.type]}
        </span>
        <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
          {resourceStatusLabels[resource.status]}
        </span>
        {resource.gated ? (
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500">
            E-mail vereist
          </span>
        ) : null}
      </div>

      <Heading className="mt-5 text-lg font-semibold tracking-tight text-zinc-950">
        {isAvailable && resource.href ? (
          <Link
            href={resource.href}
            className="before:absolute before:inset-0 before:rounded-2xl"
          >
            {resource.title}
          </Link>
        ) : (
          resource.title
        )}
      </Heading>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
        {resource.description}
      </p>

      {resource.topics.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {resource.topics.map((topic) => (
            <li
              key={topic}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
            >
              {topic}
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-auto pt-6 text-sm font-medium text-zinc-500">
        {isAvailable ? (
          <span className="text-blue-600">
            Bekijken<span aria-hidden="true"> &rarr;</span>
          </span>
        ) : (
          "Binnenkort beschikbaar"
        )}
      </p>
    </article>
  );
}
