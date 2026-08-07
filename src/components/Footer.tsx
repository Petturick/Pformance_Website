import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { footerNav, siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <BrandLogo variant="reversed" />
            <p className="mt-5 font-display text-xl font-semibold leading-7 text-white">
              Strategie, technologie en uitvoering in één lijn.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Pformance helpt organisaties commerciële en digitale vraagstukken
              concreet te maken en daadwerkelijk op te lossen.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  {group.title}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="rounded-md text-sm text-slate-300 transition-colors hover:text-white"
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

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} {siteConfig.legalName}. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-md text-sm text-slate-300 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            ) : null}
            {siteConfig.social.linkedin ? (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-sm text-slate-300 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            ) : null}
            <Link
              href="/contact"
              className="rounded-md text-sm font-semibold text-brand-blue hover:text-blue-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
