import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { labProjects } from "@/data/lab";
import { ctas } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Lab",
  description:
    "Producten en prototypes die Pformance zelf ontwikkelt: Syntrx, PricingTool en het Onboarding Platform.",
  path: "/lab",
});

export default function LabPage() {
  return (
    <>
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            as="h1"
            eyebrow="Lab"
            title="Producten en prototypes van Pformance"
            description="Het Lab is de plek waar we eigen ideeën uitwerken tot werkende producten. Sommige ontstaan uit klantvragen, andere uit een probleem dat we zelf tegenkwamen."
          />
        </div>
      </section>

      <section
        aria-labelledby="lab-projecten"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <h2 id="lab-projecten" className="sr-only">
          Projecten
        </h2>

        {/* TODO: Replace placeholder projects with real cases, screenshots and links. */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-zinc-500">
          De projectbeschrijvingen in het Lab zijn nog placeholder content en
          worden vervangen zodra de definitieve teksten en screenshots
          beschikbaar zijn.
        </p>
      </section>

      <CTASection
        title="Een vergelijkbaar product nodig?"
        description="De producten in het Lab zijn ontstaan uit echte problemen. Loop je tegen iets soortgelijks aan, dan denken we graag mee."
        primaryAction={ctas.build}
        secondaryAction={ctas.advisory}
      />
    </>
  );
}
