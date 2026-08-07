import CTASection from "@/components/CTASection";
import ResourceCard from "@/components/ResourceCard";
import SectionHeader from "@/components/SectionHeader";
import {
  resourceTypeLabels,
  resources,
  type ResourceType,
} from "@/data/resources";
import { ctas } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Resources",
  description:
    "Guides, templates, checklists, calculators en gratis tools rond marketing, ecommerce, data en AI. Binnenkort beschikbaar.",
  path: "/resources",
});

const typeOrder: ResourceType[] = [
  "guide",
  "template",
  "checklist",
  "calculator",
  "tool",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            as="h1"
            eyebrow="Resources"
            title="Kennis die je zelf kunt toepassen"
            description="Praktische guides, templates, checklists, calculators en tools uit ons dagelijkse werk. Dit onderdeel is in opbouw."
          />

          <ul
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Type resources"
          >
            {typeOrder.map((type) => (
              <li
                key={type}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
              >
                {resourceTypeLabels[type]}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="resource-overzicht"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <SectionHeader
          id="resource-overzicht"
          eyebrow="In ontwikkeling"
          title="Wat er aankomt"
          description="Onderstaande resources staan gepland. Titels en omschrijvingen zijn nog voorlopig."
        />

        {/* TODO: Replace placeholder resources with real downloads, tools and gated forms. */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>

      <CTASection
        tone="light"
        title="Op de hoogte blijven?"
        description="Er is nog geen nieuwsbrief. Laat via het contactformulier weten welk onderwerp je interessant vindt, dan krijg je bericht zodra de eerste resources live staan."
        primaryAction={{ label: "Neem contact op", href: "/contact" }}
        secondaryAction={ctas.advisory}
      />
    </>
  );
}
