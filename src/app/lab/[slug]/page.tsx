import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { getProjectBySlug, labProjects, projectStatusLabels } from "@/data/lab";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

type LabProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return labProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LabProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project niet gevonden",
      description: "Dit Lab-project bestaat niet of is verplaatst.",
      path: `/lab/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${project.title} — Lab`,
    description: project.intro,
    path: `/lab/${project.slug}`,
  });
}

export default async function LabProjectPage({ params }: LabProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.intro,
    applicationCategory: "BusinessApplication",
    url: new URL(`/lab/${project.slug}`, siteConfig.url).toString(),
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Content comes from our own data files; "<" is escaped to prevent
        // an accidental </script> break-out.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="border-b border-zinc-200">
          <div className="mx-auto w-full max-w-4xl px-6 py-16 lg:py-24">
            <nav aria-label="Kruimelpad" className="text-sm text-zinc-500">
              <Link href="/lab" className="rounded-sm hover:text-zinc-950">
                Lab
              </Link>
              <span aria-hidden="true" className="px-2">
                /
              </span>
              <span className="text-zinc-700">{project.title}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
                {projectStatusLabels[project.status]}
              </span>
              {project.isPlaceholder ? (
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  Placeholder content
                </span>
              ) : null}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-zinc-600">
              {project.intro}
            </p>

            {project.demoLink || project.links.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-3">
                {project.demoLink ? (
                  <ButtonLink
                    href={project.demoLink.href}
                    external={project.demoLink.external}
                    size="lg"
                  >
                    {project.demoLink.label}
                  </ButtonLink>
                ) : null}
                {project.links.map((link) => (
                  <ButtonLink
                    key={link.href}
                    href={link.href}
                    external={link.external}
                    size="lg"
                    variant="secondary"
                  >
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <div className="mx-auto w-full max-w-4xl px-6 py-16 lg:py-24">
          <section aria-labelledby="probleem">
            <h2
              id="probleem"
              className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Het probleem
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg">
              {project.problem}
            </p>
          </section>

          <section aria-labelledby="oplossing" className="mt-16">
            <h2
              id="oplossing"
              className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              De oplossing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg">
              {project.solution}
            </p>
          </section>

          <section aria-labelledby="screenshots" className="mt-16">
            <h2
              id="screenshots"
              className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Screenshots
            </h2>
            {project.screenshots.length > 0 ? (
              <div className="mt-8 grid gap-8">
                {project.screenshots.map((screenshot) => (
                  <figure key={screenshot.src}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {screenshot.caption ? (
                      <figcaption className="mt-3 text-sm text-zinc-500">
                        {screenshot.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : (
              /* TODO: Add real screenshots for this project. */
              <p className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-sm text-zinc-500">
                Screenshots volgen zodra de definitieve interface beschikbaar
                is.
              </p>
            )}
          </section>

          {project.technologies.length > 0 ? (
            <section aria-labelledby="technologie" className="mt-16">
              <h2
                id="technologie"
                className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
              >
                Technologie
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section
            aria-labelledby="project-cta"
            className="mt-20 rounded-3xl bg-zinc-950 px-8 py-12 text-white sm:px-12"
          >
            <h2
              id="project-cta"
              className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
            >
              {project.cta.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-zinc-300">
              {project.cta.description}
            </p>
            <div className="mt-8">
              <ButtonLink
                href={project.cta.href}
                size="lg"
                variant="secondary"
                className="border-transparent"
              >
                {project.cta.label}
              </ButtonLink>
            </div>
          </section>

          <p className="mt-12">
            <Link
              href="/lab"
              className="rounded-sm text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              <span aria-hidden="true">&larr; </span>
              Terug naar het Lab
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
