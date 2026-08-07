import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { defaultContactIntent, isContactIntent } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Neem contact op met Pformance over marketing leadership, digitale strategie of het bouwen van een digitale oplossing.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const intent = firstValue(params.intent);
  const project = firstValue(params.project);

  return (
    <>
      <section className="border-b border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeader
            as="h1"
            eyebrow="Contact"
            title="Laten we het probleem scherp krijgen"
            description="Een gesprek van een half uur is meestal genoeg om te bepalen of er een match is en waar de grootste winst zit."
          />
        </div>
      </section>

      <section
        aria-labelledby="contactformulier"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 id="contactformulier" className="sr-only">
              Contactformulier
            </h2>
            <ContactForm
              defaultIntent={
                isContactIntent(intent) ? intent : defaultContactIntent
              }
              project={project}
            />
          </div>

          <aside className="flex flex-col gap-10">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                Direct contact
              </h2>
              <dl className="mt-6 flex flex-col gap-5 text-sm">
                <div>
                  <dt className="font-medium text-zinc-900">E-mail</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="rounded-sm text-zinc-600 hover:text-zinc-950"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">LinkedIn</dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm text-zinc-600 hover:text-zinc-950"
                    >
                      {siteConfig.name} op LinkedIn
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">Bedrijf</dt>
                  <dd className="mt-1 text-zinc-600">
                    {siteConfig.legalName}, {siteConfig.country}
                  </dd>
                </div>
              </dl>
              {/* TODO: Add phone number, KvK and address once confirmed. */}
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                Wat je kunt verwachten
              </h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-zinc-600">
                <li className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-blue-600"
                  />
                  Reactie binnen twee werkdagen.
                </li>
                <li className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-blue-600"
                  />
                  Een eerste gesprek zonder verplichtingen.
                </li>
                <li className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-blue-600"
                  />
                  Een eerlijk oordeel, ook als Pformance niet de juiste partij
                  is.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
