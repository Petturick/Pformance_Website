import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-start px-6 py-28 lg:py-40">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        404
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl">
        Deze pagina bestaat niet
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-zinc-600">
        De pagina is verplaatst of heeft nooit bestaan. Via onderstaande links
        kom je weer op weg.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" size="lg">
          Naar de homepage
        </ButtonLink>
        <ButtonLink href="/contact" size="lg" variant="secondary">
          Neem contact op
        </ButtonLink>
      </div>
    </section>
  );
}
