import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
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
      <Heading className="font-display text-xl font-semibold tracking-[-0.02em] text-brand-navy">
        {service.title}
      </Heading>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
      {service.points.length > 0 ? (
        <ul className="mt-5 flex flex-col gap-2.5">
          {service.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  const className =
    "flex h-full flex-col rounded-[12px] border border-brand-border bg-white p-7 transition-all duration-200 hover:border-brand-blue/30 hover:shadow-md hover:shadow-brand-navy/5";

  if (href) {
    return (
      <Link href={href} className={`${className} group`}>
        {content}
        <span className="mt-6 text-sm font-semibold text-brand-blue transition-transform group-hover:translate-x-1">
          Meer over {service.title.toLowerCase()} →
        </span>
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
