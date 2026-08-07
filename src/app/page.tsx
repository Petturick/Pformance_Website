import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { ButtonLink } from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import ResourceCard from "@/components/ResourceCard";
import SectionHeader from "@/components/SectionHeader";
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
  // The root layout applies a "%s | Pformance" template that we don't want here.
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

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredResources = getFeaturedResources();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Advisory &middot; Build &middot; Lab
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-950 sm:text-5xl lg:text-6xl">
            Van commerciële uitdaging naar werkende oplossing.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-zinc-600">
            Pformance combineert strategisch marketing leadership met digitale
            productontwikkeling. We benoemen het echte probleem, kiezen een
            heldere richting en bouwen vervolgens de oplossing die het verschil
            maakt.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ctas.advisory.href} size="lg" variant="primary">
              {ctas.advisory.label}
            </ButtonLink>
            <ButtonLink href={ctas.build.href} size="lg" variant="secondary">
              {ctas.build.label}
            </ButtonLink>
          </div>

          <dl className="mt-20 grid gap-10 border-t border-zinc-200 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold text-zinc-950">Advisory</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                Strategie en marketingleiding op directieniveau, interim of
                fractional.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-zinc-950">Build</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                Webapplicaties, tools, dashboards, integraties en
                AI-toepassingen.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-zinc-950">Lab</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                Eigen producten en prototypes, gebouwd om echte problemen op te
                lossen.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Positioning */}
      <section
        aria-labelledby="positionering"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeader
            id="positionering"
            eyebrow="Positionering"
            title="Geen bureau. Geen softwarehuis. Iets ertussenin."
          />
          <div className="flex flex-col gap-6 text-base leading-relaxed text-pretty text-zinc-600 lg:text-lg">
            <p>
              De meeste commerciële problemen zijn geen campagneprobleem en geen
              IT-probleem. Ze ontstaan doordat strategie, uitvoering en techniek
              los van elkaar georganiseerd zijn.
            </p>
            <p>
              Pformance werkt over die grenzen heen. We denken mee op
              directieniveau over positionering, kanalen en groei, en bouwen
              daarna zelf de applicaties, tools en integraties die het plan
              uitvoerbaar maken.
            </p>
            <p className="text-zinc-950">
              Eén partij die het probleem doorgrondt, de richting bepaalt en de
              oplossing daadwerkelijk oplevert.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory & Build */}
      <section
        aria-labelledby="diensten"
        className="border-y border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            id="diensten"
            eyebrow="Wat we doen"
            title="Advisory en Build, in samenhang"
            description="Advies zonder uitvoering blijft een document. Bouwen zonder strategie levert een tool die niemand gebruikt. Daarom horen ze bij Pformance bij elkaar."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Advisory
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Strategisch marketing leadership, digitale en ecommerce
                strategie, SEO en AI-zichtbaarheid, MarTech en de inrichting van
                de marketingorganisatie.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {advisoryServices.slice(0, 5).map((service) => (
                  <li
                    key={service.slug}
                    className="flex gap-3 text-sm text-zinc-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-blue-600"
                    />
                    {service.title}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/advisory" variant="secondary">
                  Bekijk Advisory
                </ButtonLink>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Build
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Webapplicaties, business tools, dashboards, automatisering, PIM,
                ecommerce tools, integraties, AI-toepassingen en professionele
                websites.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {buildServices.slice(0, 5).map((service) => (
                  <li
                    key={service.slug}
                    className="flex gap-3 text-sm text-zinc-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-blue-600"
                    />
                    {service.title}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/build" variant="secondary">
                  Bekijk Build
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Selected Lab projects */}
      <section
        aria-labelledby="lab-selectie"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            id="lab-selectie"
            eyebrow="Lab"
            title="Producten die we zelf bouwen"
            description="In het Lab ontwikkelen we eigen producten en prototypes. Ze laten zien hoe we denken, ontwerpen en bouwen."
          />
          <Link
            href="/lab"
            className="shrink-0 rounded-sm text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Alle projecten
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* How Pformance works */}
      <section
        aria-labelledby="werkwijze"
        className="border-y border-zinc-200 bg-zinc-950"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Werkwijze
            </p>
            <h2
              id="werkwijze"
              className="mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
            >
              Hoe Pformance werkt
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">
              Een korte route van probleem naar oplossing, zonder onnodige
              tussenlagen.
            </p>
          </div>

          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step} className="border-t border-zinc-800 pt-6">
                <span className="text-sm font-medium text-blue-500">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Expertise */}
      <section
        aria-labelledby="expertise"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <SectionHeader
          id="expertise"
          eyebrow="Expertise"
          title="Commercie en techniek in één team"
          description="Pformance beweegt zich zowel in de directiekamer als in de codebase. Dat maakt het verschil tussen een plan en een werkend systeem."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
          {expertiseAreas.map((area) => (
            <article key={area.title} className="bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Resources preview */}
      <section
        aria-labelledby="resources-preview"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              id="resources-preview"
              eyebrow="Resources"
              title="Kennis die je direct kunt gebruiken"
              description="We werken aan guides, templates, checklists en tools rond marketing, ecommerce, data en AI. Binnenkort beschikbaar."
            />
            <Link
              href="/resources"
              className="shrink-0 rounded-sm text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Naar Resources
              <span aria-hidden="true"> &rarr;</span>
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
