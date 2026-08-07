# Pformance Website

Corporate website for **Pformance B.V.** — [www.prformance.nl](https://www.prformance.nl)

Pformance combines strategic marketing leadership, digital product development and
practical execution. The site presents four areas: **Advisory**, **Build**, **Lab**
and **Resources**.

Central message: _"Van commerciële uitdaging naar werkende oplossing."_

The initial production-ready foundation includes the **Pformance Brand System v1.0** (Deep Navy / Performance Blue / Teal / Off White palette, Inter Tight + Inter typography, monogram, Signal Grid and Performance Slash visual language) applied across all core components. A CI quality gate runs ESLint, TypeScript type-check, and the production Next.js build on every push and pull request.

## Tech stack

| Concern    | Choice                            |
| ---------- | --------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack) |
| Language   | TypeScript (strict)               |
| Styling    | Tailwind CSS v4 (CSS-first config) |
| Linting    | ESLint (`eslint-config-next`)     |
| Formatting | Prettier                          |

There is no database, CMS, authentication or payment integration yet. All content
lives in typed data files under `src/data/`.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs on http://localhost:3000.

## Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Start the development server           |
| `npm run build`     | Production build                       |
| `npm run start`     | Serve the production build             |
| `npm run lint`      | Run ESLint                             |
| `npm run typecheck` | Type-check with `tsc --noEmit`         |
| `npm run format`    | Format `src/` with Prettier            |

## Environment variables

See `.env.example`.

| Variable               | Required | Description                                                     |
| ---------------------- | -------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Absolute base URL used for metadata, canonicals, sitemap, robots. Defaults to `https://www.prformance.nl`. |

## Project structure

```
src/
  app/
    layout.tsx            Root layout: metadata, navigation, footer
    page.tsx              Home
    advisory/page.tsx     Advisory
    build/page.tsx        Build
    lab/page.tsx          Lab overview
    lab/[slug]/page.tsx   Individual Lab project (statically generated)
    resources/page.tsx    Resources
    about/page.tsx        About
    contact/page.tsx      Contact
    not-found.tsx         404
    sitemap.ts            MetadataRoute.Sitemap
    robots.ts             MetadataRoute.Robots
    globals.css           Tailwind v4 import + @theme tokens
  components/             Reusable UI components
  data/                   Typed content: site, services, lab, resources
  lib/metadata.ts         Shared page metadata helper (incl. Open Graph)
```

## Content model

All content is typed and edited in `src/data/`:

- **`site.ts`** — site config, navigation, footer links, the two primary CTAs.
- **`services.ts`** — `advisoryServices` and `buildServices`, plus the process
  steps and expertise areas used on Home, About and Build.
- **`lab.ts`** — `labProjects` with `problem`, `solution`, `screenshots`,
  `technologies`, `status`, `links`, `demoLink` and a per-project `cta`.
- **`resources.ts`** — planned guides, templates, checklists, calculators and tools.

### Adding a Lab project

1. Add an entry to `labProjects` in `src/data/lab.ts`.
2. Place screenshots in `public/lab/<slug>/` and reference them in `screenshots`.
3. Set `isPlaceholder: false` once the copy is final.

The detail route is statically generated from `generateStaticParams()`, and the
sitemap picks the project up automatically.

## Placeholder content

Content that still needs a real copy pass is marked in two ways:

- `// TODO: Add real content` comments in the data files.
- `isPlaceholder: true` on Lab projects, which renders a visible
  "Placeholder content" badge in the UI.

The three Lab projects (**Syntrx**, **PricingTool**, **Onboarding Platform**) and
all Resources entries are currently placeholders. No customer numbers, results or
testimonials are claimed anywhere on the site.

## Contact form

`src/components/ContactForm.tsx` has no backend. Submitting composes a `mailto:`
message to the address in `siteConfig.email`. Replace this with a Route Handler or
form provider when an email/CRM integration is available.

## Styling

Tailwind CSS v4 is configured CSS-first in `src/app/globals.css`:

- `@import "tailwindcss";`
- `@theme { ... }` for the font stack and brand colour tokens.

There is no `tailwind.config.js`. The palette is zinc-based with a blue accent for
interactive elements.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`).
- One `h1` per page and a consistent heading hierarchy.
- Skip link to `#main`, keyboard-operable mobile menu with `aria-expanded`,
  `aria-controls` and Escape-to-close.
- Visible `:focus-visible` outlines and `aria-current="page"` on active nav items.
- `prefers-reduced-motion` respected.

## SEO

- Per-page metadata via `createPageMetadata()` in `src/lib/metadata.ts`, including
  canonical URLs, Open Graph and Twitter cards.
- `sitemap.xml` and `robots.txt` generated by `src/app/sitemap.ts` and
  `src/app/robots.ts`.
- JSON-LD `SoftwareApplication` markup on Lab project pages.

## Deployment

The site is fully static and deploys to any Next.js-compatible host. Set
`NEXT_PUBLIC_SITE_URL` to the production URL so metadata and the sitemap resolve
to absolute URLs.

```bash
npm run build
npm run start
```

---

© Pformance B.V.
