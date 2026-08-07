import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { ButtonLink } from "@/components/Button";
import { buildServices, expertiseAreas } from "@/data/services";
import { ctas } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Build",
  description:
    "Webapplicaties, business tools, dashboards, automatisering, PIM-oplossingen, ecommerce tools, integraties, AI-toepassingen en professionele websites.",
  path: "/build",
});

const principles = [
  {
    title: "Probleem eerst",
    description:
      "We bouwen pas als helder is welk commercieel of operationeel probleem wordt opgelost en hoe succes gemeten wordt.",
  },
  {
    title: "Klein beginnen",
    description:
      "Een bruikbare eerste versie is waardevoller dan een compleet systeem dat pas over een jaar live gaat.",
  },
  {
    title: "Onderhoudbaar",
    description:
      "Heldere structuur, typesafe code en documentatie. Ook als een ander team het later overneemt.",
  },
  {
    title: "Geen lock-in",
    description:
      "Standaardtechnologie, eigen data en overdraagbare code. De oplossing blijft van de opdrachtgever.",
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "REST & GraphQL API's",
  "Vercel",
  "AWS",
];

export default function BuildPage() {
  return (
    <>
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            as="h1"
            eyebrow="Build"
            title="Digitale oplossingen die daadwerkelijk gebruikt worden"
            description="Van webapplicatie en dashboard tot PIM, integratie en AI-toepassing. Gebouwd vanuit commercieel begrip, opgeleverd in korte iteraties."
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ctas.build.href} size="lg">
              {ctas.build.label}
            </ButtonLink>
            <ButtonLink href="/lab" size="lg" variant="secondary">
              Bekijk het Lab
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="build-diensten"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <SectionHeader
          id="build-diensten"
          eyebrow="Diensten"
          title="Wat we bouwen"
          description="Maatwerk waar standaardsoftware tekortschiet, en integratie waar bestaande systemen niet samenwerken."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {buildServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="uitgangspunten"
        className="border-y border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            id="uitgangspunten"
            eyebrow="Uitgangspunten"
            title="Hoe we bouwen"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="stack"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeader
            id="stack"
            eyebrow="Technologie"
            title="De stack"
            description="Bewuste keuze voor volwassen, breed ondersteunde technologie. Zo blijft de oplossing onderhoudbaar en overdraagbaar."
          />
          <div>
            <ul className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {expertiseAreas.map((area) => (
                <div key={area.title}>
                  <h3 className="text-sm font-semibold text-zinc-950">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Een idee, een knelpunt of een half werkend systeem?"
        description="Stuur een korte omschrijving. We geven eerlijk aan of bouwen de juiste route is, of dat het slimmer kan."
        primaryAction={ctas.build}
        secondaryAction={ctas.advisory}
      />
    </>
  );
}
