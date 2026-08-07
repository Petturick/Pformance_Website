import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";
import { ctas } from "@/data/site";

type Action = {
  label: string;
  href: string;
};

type CTASectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  primaryAction?: Action;
  secondaryAction?: Action;
  /** Renders on a light background instead of the default dark panel. */
  tone?: "dark" | "light";
};

export default function CTASection({
  title = "Van commerciële uitdaging naar werkende oplossing.",
  description = "Een gesprek van een half uur is meestal genoeg om te bepalen of er een goede match is en waar de grootste winst zit.",
  primaryAction = ctas.build,
  secondaryAction = ctas.advisory,
  tone = "dark",
}: CTASectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      aria-labelledby="cta-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24"
    >
      <div
        className={`rounded-3xl px-8 py-14 sm:px-14 sm:py-20 ${
          isDark
            ? "bg-zinc-950 text-white"
            : "border border-zinc-200 bg-zinc-50 text-zinc-950"
        }`}
      >
        <div className="max-w-2xl">
          <h2
            id="cta-heading"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          <p
            className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={primaryAction.href}
              size="lg"
              variant={isDark ? "secondary" : "primary"}
              className={isDark ? "border-transparent" : undefined}
            >
              {primaryAction.label}
            </ButtonLink>
            {secondaryAction ? (
              <ButtonLink
                href={secondaryAction.href}
                size="lg"
                variant="secondary"
                className={
                  isDark
                    ? "border-zinc-700 bg-transparent text-white hover:border-zinc-600 hover:bg-zinc-900"
                    : undefined
                }
              >
                {secondaryAction.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
