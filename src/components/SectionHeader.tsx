import type { ElementType, ReactNode } from "react";

type Align = "left" | "center";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: Align;
  as?: Extract<ElementType, "h1" | "h2" | "h3">;
  className?: string;
  id?: string;
};

const titleSizes: Record<string, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl",
  h2: "text-3xl sm:text-4xl lg:text-[2.75rem]",
  h3: "text-2xl sm:text-3xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  id,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "items-start";

  return (
    <div
      className={["flex max-w-3xl flex-col gap-4", alignment, className]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? <p className="brand-kicker">{eyebrow}</p> : null}
      <Heading
        id={id}
        className={`${titleSizes[Heading]} font-display font-bold leading-tight tracking-[-0.035em] text-balance text-brand-navy`}
      >
        {title}
      </Heading>
      {description ? (
        <div className="text-base leading-7 text-pretty text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </div>
      ) : null}
    </div>
  );
}
