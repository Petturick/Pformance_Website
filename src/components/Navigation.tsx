"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { ButtonLink } from "@/components/Button";
import { ctas, primaryNav } from "@/data/site";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const isOpen = menu.open && menu.path === pathname;
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu({ open: false, path: pathname });
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-brand-off/92 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[12px] focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Naar hoofdinhoud
      </a>

      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-6 lg:h-20"
      >
        <BrandLogo />

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[10px] px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-navy/[0.06] text-brand-navy"
                      : "text-slate-600 hover:bg-brand-navy/[0.04] hover:text-brand-navy"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="primary" size="md">
            Plan een kennismaking
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-[12px] border border-brand-navy/15 text-brand-navy transition-colors hover:bg-brand-navy/[0.04] lg:hidden"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          onClick={() => setMenu({ open: !isOpen, path: pathname })}
        >
          <span aria-hidden="true" className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
                isOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
                isOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id={menuId}
        hidden={!isOpen}
        className="border-t border-brand-border bg-brand-off lg:hidden"
      >
        <ul className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-6 py-5">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex flex-col gap-1 rounded-[12px] px-4 py-3.5 transition-colors ${
                    active ? "bg-brand-navy/[0.06]" : "hover:bg-brand-navy/[0.04]"
                  }`}
                >
                  <span className="text-base font-semibold text-brand-navy">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
          <li className="mt-4 flex flex-col gap-2 border-t border-brand-border pt-5">
            <ButtonLink href={ctas.advisory.href} variant="secondary" size="lg">
              {ctas.advisory.label}
            </ButtonLink>
            <ButtonLink href={ctas.build.href} variant="primary" size="lg">
              {ctas.build.label}
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
