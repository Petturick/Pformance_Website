import Link from "next/link";
import { footerNav, siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-zinc-950"
            >
              {siteConfig.name}
              <span className="text-blue-600">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Strategisch marketing leadership, digitale productontwikkeling en
              praktische executie.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {group.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="rounded-sm text-sm text-zinc-700 transition-colors hover:text-zinc-950"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            &copy; {year} {siteConfig.legalName}. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-sm text-sm text-zinc-700 transition-colors hover:text-zinc-950"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-sm text-zinc-700 transition-colors hover:text-zinc-950"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
