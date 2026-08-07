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
  tone?: "dark" | "light";
};

export default function CTASection({
  title = "Van commerciële uitdaging naar werkende oplossing.",
  description = "Leg het vraagstuk op tafel. We bepalen snel waar strategie, marketing of technologie het verschil kan maken en of Pformance de juiste partij is om het ook uit te voeren.",
  primaryAction = ctas.build,
  secondaryAction = ctas.advisory,
  tone = "dark",
}: CTASectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      aria-labelledby="cta-heading"
      className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:py-24"
    >
      <div
        className={`relative overflow-hidden rounded-[12px] px-8 py-14 sm:px-14 sm:py-20 ${
          isDark
            ? "bg-brand-navy text-white"
            : "border border-brand-border bg-white text-brand-navy"
        }`}
      >
        {isDark ? (
          <>
            <div className="signal-grid absolute inset-0 opacity-25" />
            <div className="performance-slash absolute -bottom-20 right-16 h-56 w-16 bg-brand-blue/25" />
          </>
        ) : null}

        <div className="relative z-10 max-w-3xl">
          <p className={`brand-kicker ${isDark ? "!text-blue-300" : ""}`}>
            Volgende stap
          </p>
          <h2
            id="cta-heading"
            className="mt-4 font-display text-3xl font-bold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p
            className={`mt-5 max-w-2xl text-base leading-7 text-pretty sm:text-lg sm:leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={primaryAction.href} size="lg" variant="primary">
              {primaryAction.label}
            </ButtonLink>
            {secondaryAction ? (
              <ButtonLink
                href={secondaryAction.href}
                size="lg"
                variant="secondary"
                className={
                  isDark
                    ? "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
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
