import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import { expertiseAreas, processSteps } from "@/data/services";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Over Pformance",
  description:
    "Pformance B.V. combineert strategisch marketing leadership, digitale productontwikkeling en praktische executie voor commerciële en digitale vraagstukken.",
  path: "/about",
});

const beliefs = [
  {
    title: "Het probleem staat centraal",
    description:
      "Niet het kanaal, niet de tool en niet de techniek. Eerst begrijpen wat er commercieel misgaat, daarna pas oplossen.",
  },
  {
    title: "Strategie en uitvoering horen bij elkaar",
    description:
      "Een advies dat niet uitvoerbaar is, is geen advies. We blijven betrokken tot het werkt.",
  },
  {
    title: "Eerlijk over wat niet nodig is",
    description:
      "Soms is het antwoord een kleinere oplossing, een bestaand pakket of gewoon minder doen. Dat zeggen we ook.",
  },
  {
    title: "Overdraagbaar resultaat",
    description:
      "Code, data en kennis blijven van de opdrachtgever. Afhankelijkheid is geen verdienmodel.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            as="h1"
            eyebrow="Over Pformance"
            title="Commercieel denken en digitaal bouwen in één beweging"
            description="Pformance B.V. helpt organisaties commerciële, marketing- en digitale vraagstukken scherp te krijgen, de juiste strategie te bepalen en de bijbehorende oplossingen daadwerkelijk te bouwen."
          />
        </div>
      </section>

      <section
        aria-labelledby="verhaal"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeader
            id="verhaal"
            eyebrow="Waarom Pformance bestaat"
            title="Tussen strategie en uitvoering valt te veel weg"
          />
          <div className="flex flex-col gap-6 text-base leading-relaxed text-pretty text-zinc-600 lg:text-lg">
            <p>
              Strategisch advies eindigt vaak bij een presentatie. Bureaus
              voeren campagnes uit zonder eigenaarschap over het commerciële
              resultaat. Softwarepartijen bouwen wat gevraagd wordt, zonder de
              commerciële context te kennen.
            </p>
            <p>
              Daardoor blijft er in de praktijk veel liggen: goede plannen die
              niet worden uitgevoerd, en systemen die technisch werken maar
              commercieel niets opleveren.
            </p>
            <p className="text-zinc-950">
              Pformance is opgezet om die overgang te overbruggen: één partij
              die het probleem doorgrondt, de richting bepaalt en de oplossing
              bouwt.
            </p>
          </div>
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
            title="Waar we voor staan"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <article
                key={belief.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                  {belief.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="aanpak"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <SectionHeader
          id="aanpak"
          eyebrow="Aanpak"
          title="Van probleem naar werkende oplossing"
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="border-t border-zinc-200 pt-6">
              <span className="text-sm font-medium text-blue-600">
                {step.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="kennisgebieden"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            id="kennisgebieden"
            eyebrow="Kennisgebieden"
            title="Waar onze expertise zit"
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

          {/* TODO: Add company details (KvK, BTW, vestigingsadres) once confirmed. */}
          <dl className="mt-14 grid gap-8 border-t border-zinc-200 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold text-zinc-950">
                Statutaire naam
              </dt>
              <dd className="mt-2 text-sm text-zinc-600">
                {siteConfig.legalName}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-zinc-950">Land</dt>
              <dd className="mt-2 text-sm text-zinc-600">
                {siteConfig.country}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-zinc-950">E-mail</dt>
              <dd className="mt-2 text-sm text-zinc-600">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-sm hover:text-zinc-950"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
