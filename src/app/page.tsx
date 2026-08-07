import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { ButtonLink } from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import ResourceCard from "@/components/ResourceCard";
import SectionHeader from "@/components/SectionHeader";
import SignalGrid from "@/components/SignalGrid";
import { getFeaturedProjects } from "@/data/lab";
import { getFeaturedResources } from "@/data/resources";
import {
  advisoryServices,
  buildServices,
  expertiseAreas,
  processSteps,
} from "@/data/services";
import { ctas, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const pageMetadata = createPageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export const metadata: Metadata = {
  ...pageMetadata,
  title: { absolute: `${siteConfig.name} — ${siteConfig.tagline}` },
  openGraph: {
    ...pageMetadata.openGraph,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  twitter: {
    ...pageMetadata.twitter,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
};

const pillars = [
  {
    label: "Advisory",
    text: "Marketing leadership, richting en besluitvorming wanneer senioriteit nodig is.",
    href: "/advisory",
    accent: "bg-brand-blue",
  },
  {
    label: "Build",
    text: "Software, tools en automatisering die een concreet bedrijfsprobleem oplossen.",
    href: "/build",
    accent: "bg-brand-teal",
  },
  {
    label: "Lab",
    text: "Eigen producten en prototypes die laten zien wat Pformance daadwerkelijk bouwt.",
    href: "/lab",
    accent: "bg-brand-blue-dark",
  },
  {
    label: "Resources",
    text: "Praktische kennis, templates en tools waarmee teams zelfstandig sneller verder kunnen.",
    href: "/resources",
    accent: "bg-brand-navy",
  },
] as const;

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredResources = getFeaturedResources();

  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.16),transparent_32%)]" />
        <div className="mx-auto grid w-full max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-28 xl:py-32">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Strategie, technologie, uitvoering
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] font-bold leading-[1.03] tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.25rem]">
              Strategie bedenken is één ding.
              <span className="mt-2 block text-brand-blue">
                Wij zorgen dat het ook werkt.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Pformance verbindt senior marketing leadership met digitale
              productontwikkeling en praktische uitvoering, van commerciële
              uitdaging tot een oplossing die echt gebruikt kan worden.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={ctas.advisory.href} size="lg" variant="primary">
                {ctas.advisory.label}
              </ButtonLink>
              <ButtonLink
                href={ctas.build.href}
                size="lg"
                variant="secondary"
                className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              >
                {ctas.build.label}
              </ButtonLink>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate-400">
              <span>Strategisch wanneer het moet</span>
              <span>Praktisch waar het telt</span>
              <span>Meetbaar waar het kan</span>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <SignalGrid />
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.label}
              href={pillar.href}
              className="group relative min-h-56 border-b border-brand-border p-7 transition-colors hover:bg-brand-off md:nth-[odd]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className={`block h-1 w-10 ${pillar.accent}`} />
              <h2 className="mt-8 font-display text-2xl font-semibold tracking-[-0.025em] text-brand-navy">
                {pillar.label}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {pillar.text}
              </p>
              <span className="mt-7 inline-flex text-sm font-semibold text-brand-blue transition-transform group-hover:translate-x-1">
                Ontdek {pillar.label}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="positionering"
        className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-28"
      >
        <SectionHeader
          id="positionering"
          eyebrow="Waarom Pformance"
          title="Strategie die doorloopt tot uitvoering"
        />
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            Veel organisaties hebben geen gebrek aan ideeën, maar aan verbinding
            tussen commercie, marketing, technologie en uitvoering. Daardoor
            blijven plannen liggen, ontstaan losse tools of wordt er te veel
            handwerk geaccepteerd.
          </p>
          <p>
            Pformance werkt precies op dat snijvlak. We kunnen richting geven als
            marketingpartner en daarna ook de digitale oplossing ontwerpen,
            bouwen en implementeren die nodig is om die richting waar te maken.
          </p>
          <p className="font-medium text-brand-navy">
            Geen overdracht tussen advies en uitvoering, maar één lijn van
            probleem naar werkende oplossing.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="advisory-build"
        className="border-y border-brand-border bg-white"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:py-28">
          <SectionHeader
            id="advisory-build"
            eyebrow="Advisory en Build"
            title="Senior denken, praktisch bouwen"
            description="Pformance kan aan tafel zitten waar keuzes worden gemaakt en in de uitvoering blijven totdat de oplossing staat."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[12px] border border-brand-border bg-brand-off p-8 lg:p-10">
              <p className="brand-kicker">Advisory</p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-brand-navy">
                Marketing leadership wanneer richting nodig is
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                Interim of fractional marketing leadership, digitale strategie,
                ecommerce, SEO, GEO, AI visibility, MarTech en audits.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {advisoryServices.slice(0, 6).map((service) => (
                  <li
                    key={service.slug}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                    {service.title}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <ButtonLink href="/advisory" variant="secondary">
                  Bekijk Advisory
                </ButtonLink>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[12px] bg-brand-navy p-8 text-white lg:p-10">
              <div className="signal-grid absolute inset-0 opacity-30" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                  Build
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-white">
                  Digitale oplossingen die werk uit handen nemen
                </h3>
                <p className="mt-5 max-w-xl leading-7 text-slate-300">
                  Webapps, dashboards, automatisering, PIM, integraties,
                  AI toepassingen en websites, gebouwd rond het proces in plaats
                  van rond de technologie.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {buildServices.slice(0, 6).map((service) => (
                    <li
                      key={service.slug}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <ButtonLink
                    href="/build"
                    variant="secondary"
                    className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  >
                    Bekijk Build
                  </ButtonLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="lab-selectie"
        className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:py-28"
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            id="lab-selectie"
            eyebrow="Pformance Lab"
            title="Niet alleen adviseren, ook zelf bouwen"
            description="In het Lab ontwikkelen we eigen producten en prototypes. Het is de plek waar Pformance bewijst dat strategie ook in werkende software kan eindigen."
          />
          <Link
            href="/lab"
            className="shrink-0 rounded-md text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
          >
            Bekijk Pformance Lab →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="werkwijze"
        className="border-y border-brand-border bg-brand-navy text-white"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            Werkwijze
          </p>
          <h2
            id="werkwijze"
            className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.035em] text-balance sm:text-5xl"
          >
            Van vraagstuk naar resultaat, zonder onnodige tussenlagen
          </h2>

          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step} className="border-t border-white/15 pt-6">
                <span className="text-sm font-semibold text-brand-blue">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="expertise"
        className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:py-28"
      >
        <SectionHeader
          id="expertise"
          eyebrow="Expertise"
          title="Commercieel genoeg om de vraag te begrijpen, technisch genoeg om hem op te lossen"
          description="Pformance beweegt tussen strategie, marketing, data en productontwikkeling. Daardoor kunnen we eerder zien waar het echte knelpunt zit."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[12px] border border-brand-border bg-brand-border sm:grid-cols-2">
          {expertiseAreas.map((area) => (
            <article key={area.title} className="bg-white p-8">
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-brand-navy">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="resources-preview"
        className="border-t border-brand-border bg-white"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              id="resources-preview"
              eyebrow="Resources"
              title="Kennis moet bruikbaar zijn"
              description="Guides, templates, checklists en kleine tools rond marketing, ecommerce, data en AI. Gericht op toepassing, niet op content om de content."
            />
            <Link
              href="/resources"
              className="shrink-0 rounded-md text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Bekijk Resources →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
