import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  /** Optional link target; renders the card as a link when provided. */
  href?: string;
  headingLevel?: "h3" | "h4";
};

export default function ServiceCard({
  service,
  href,
  headingLevel: Heading = "h3",
}: ServiceCardProps) {
  const content = (
    <>
      <Heading className="text-lg font-semibold tracking-tight text-zinc-950">
        {service.title}
      </Heading>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
        {service.summary}
      </p>
      {service.points.length > 0 ? (
        <ul className="mt-5 flex flex-col gap-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-sm leading-relaxed text-zinc-600"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1 shrink-0 rounded-full bg-blue-600"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  const className =
    "flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-200 hover:border-zinc-300";

  if (href) {
    return (
      <Link href={href} className={`${className} group`}>
        {content}
        <span className="mt-6 text-sm font-medium text-blue-600 group-hover:text-blue-700">
          Meer over {service.title.toLowerCase()}
          <span aria-hidden="true"> &rarr;</span>
        </span>
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
