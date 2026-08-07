import type { ElementType, ReactNode } from "react";

type Align = "left" | "center";

type SectionHeaderProps = {
  /** Small label rendered above the title. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: Align;
  /** Heading level, so pages keep a correct hierarchy. */
  as?: Extract<ElementType, "h1" | "h2" | "h3">;
  className?: string;
  id?: string;
};

const titleSizes: Record<string, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl",
  h2: "text-3xl sm:text-4xl",
  h3: "text-xl sm:text-2xl",
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
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={`${titleSizes[Heading]} font-semibold tracking-tight text-balance text-zinc-950`}
      >
        {title}
      </Heading>
      {description ? (
        <div className="text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}
