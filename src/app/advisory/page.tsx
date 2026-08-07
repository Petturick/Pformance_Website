import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { ButtonLink } from "@/components/Button";
import { advisoryServices } from "@/data/services";
import { ctas } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Advisory",
  description:
    "Strategisch marketing leadership, interim en fractional marketing management, digitale strategie, ecommerce, SEO, GEO, AI search visibility, MarTech en marketingorganisatie.",
  path: "/advisory",
});

const situations = [
  "Er is groei nodig, maar niemand heeft tijd om de strategie echt scherp te krijgen.",
  "Marketing levert activiteit op, maar geen aantoonbaar commercieel resultaat.",
  "De marketingleiding valt weg en de organisatie mist richting.",
  "De stack is uitgedijd, maar data en rapportage kloppen nog steeds niet.",
  "Zichtbaarheid in zoekmachines en AI-assistenten loopt terug zonder duidelijke oorzaak.",
  "Er wordt veel gebouwd, maar zonder samenhangende digitale koers.",
];

export default function AdvisoryPage() {
  return (
    <>
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            as="h1"
            eyebrow="Advisory"
            title="Marketing leadership met commerciële verantwoordelijkheid"
            description="Richting geven aan commercie, marketing en digitaal — als sparringpartner van de directie, als interim manager of als fractional marketingleiding naast het bestaande team."
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ctas.advisory.href} size="lg">
              {ctas.advisory.label}
            </ButtonLink>
            <ButtonLink href="/build" size="lg" variant="secondary">
              Bekijk ook Build
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="herkenbaar"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeader
            id="herkenbaar"
            eyebrow="Wanneer Advisory past"
            title="Herkenbare situaties"
          />
          <ul className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
            {situations.map((situation) => (
              <li
                key={situation}
                className="py-5 text-base leading-relaxed text-pretty text-zinc-700"
              >
                {situation}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="advisory-diensten"
        className="border-y border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            id="advisory-diensten"
            eyebrow="Diensten"
            title="Waar Advisory uit bestaat"
            description="Losse trajecten of doorlopende betrokkenheid, afhankelijk van wat de organisatie op dat moment nodig heeft."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisoryServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="samenwerking"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <SectionHeader
          id="samenwerking"
          eyebrow="Samenwerkingsvormen"
          title="Zo werken we samen"
          description="De vorm volgt de vraag. Alle vormen zijn gericht op meetbaar resultaat en overdraagbaarheid."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
              Strategisch traject
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Afgebakend traject met een duidelijke vraag, bijvoorbeeld een
              marketing audit, een digitale roadmap of een ecommerce groeiplan.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
              Fractional leadership
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Een vast aantal dagen per maand als marketingleiding, met
              verantwoordelijkheid voor koers, prioriteiten en team.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-8">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
              Interim management
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Tijdelijke invulling van een senior marketingrol bij vertrek,
              groei of reorganisatie, inclusief overdracht.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Behoefte aan richting in marketing en digitaal?"
        description="In een eerste gesprek bepalen we samen waar het werkelijke knelpunt zit en welke vorm van samenwerking daarbij past."
        primaryAction={ctas.advisory}
        secondaryAction={ctas.build}
      />
    </>
  );
}
