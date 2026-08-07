"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { ctas, primaryNav, siteConfig } from "@/data/site";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  // Derived open state: navigating to another path closes the menu without an effect.
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
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Naar hoofdinhoud
      </a>

      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 lg:h-20"
      >
        <Link
          href="/"
          className="rounded-sm text-lg font-semibold tracking-tight text-zinc-950"
          aria-label={`${siteConfig.name} — naar de homepage`}
        >
          {siteConfig.name}
          <span className="text-blue-600">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active
                      ? "bg-zinc-100 font-medium text-zinc-950"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
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
            Contact
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-50 lg:hidden"
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
        className="border-t border-zinc-200 bg-white lg:hidden"
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex flex-col gap-0.5 rounded-xl px-3 py-3 transition-colors ${
                    active ? "bg-zinc-100" : "hover:bg-zinc-50"
                  }`}
                >
                  <span className="text-base font-medium text-zinc-950">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="text-sm text-zinc-500">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 flex flex-col gap-2">
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
