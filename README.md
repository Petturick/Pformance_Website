# Pformance Website

Corporate website for **Pformance B.V.** at **www.prformance.nl**.

Pformance combines marketing leadership, digital product development and practical execution. The core promise is:

> Van commerciële uitdaging naar werkende oplossing.

The website follows **Pformance Brand Guide v1.0** and is built as a modular, multi-route experience rather than a one-page scrolling site.

## Technology

- React 18
- TypeScript, strict mode
- Vite
- Lucide outline icons
- CSS design system in `src/styles/global.css`
- Netlify SPA fallback for direct route navigation

## Routes

- `/` Home
- `/advisory`
- `/build`
- `/klantcases`
- `/lab`
- `/resources`
- `/over`
- `/contact`

`Klantcases` is a primary navigation item and is the permanent location for validated reference cases.

## Local development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
```

## Modular architecture

The website is intentionally separated into three layers.

### 1. Content

Normal content maintenance happens in:

`src/content/site.ts`

This file contains navigation, page metadata, hero copy, page block order, services, process steps, reference case entries, Lab products and Resources.

For normal copy changes you should **not** need to edit React component markup or CSS.

### 2. Reusable blocks

Reusable sections are rendered by:

`src/components/PageBlocks.tsx`

Available blocks include:

- page hero
- feature/service grid
- process steps
- customer case grid
- resources list
- split content/visual section
- quote
- CTA panel
- contact form

Pages are therefore composed from reusable blocks instead of separately designed templates.

### 3. Brand system

Visual rules live in:

`src/styles/global.css`

Core brand tokens:

- Pformance Navy `#061C48`
- Electric Blue `#1F63FF`
- Teal `#0E9E9A`
- Cyan `#22C7D8`
- Slate `#8AA4C4`
- Soft Gray `#D9DFE8`
- Off White `#F7F7F4`
- Dark Graphite `#363D4D`

The website is Light-first. Dark surfaces are used only where proof or technology needs additional emphasis.

Do not create local colours, arbitrary radii, decorative technical grids or page-specific visual systems. Add new patterns to the reusable system first.

## Editing a page

Open `src/content/site.ts`, find the page by its `path`, then edit its `hero` or ordered `blocks` array.

To reorder a page, reorder entries in `blocks`.

To hide a block, remove it from that page's `blocks` array. The component itself remains reusable elsewhere.

## Adding a Klantcase

Reference cases must be factual and validated. Do not publish a client name, testimonial, logo, metric or result without permission and evidence.

Add or replace an entry in `casePlaceholders` or create a dedicated case collection in `src/content/site.ts` with:

- client/company name
- sector
- context/challenge
- approach
- solution
- result
- proof/metrics
- testimonial, when approved
- technologies
- Advisory, Build or Combined category
- screenshots/assets
- publication status

The current generic entries deliberately say **Case in voorbereiding** until real references are supplied.

## Adding a Lab product

Find the `/lab` page in `src/content/site.ts` and add a feature entry. Use the convention:

`Productnaam · A Pformance Lab product`

Lab remains part of the Pformance master brand and does not receive its own logo or colour system.

## Adding a Resource

Find the `/resources` page and add an entry to the `resources` block. Every item should have a clear type, title, practical description, publication status and optional link.

Resources should provide standalone value rather than existing only as lead gates.

## Contact form

No fake backend confirmation is shown.

The current form composes an email to `hello@pformance.nl` in the visitor's own email application and explicitly states that the website does not yet store form data.

When a real backend, CRM or form service is introduced, replace this fallback only after successful end-to-end testing and privacy review.

## Direct route support

`public/_redirects` contains the Netlify fallback:

```text
/* /index.html 200
```

This ensures `/advisory`, `/build`, `/klantcases` and the other direct routes load correctly after refresh or external navigation.

## SEO and GEO

- route-specific document titles and meta descriptions are managed from `src/content/site.ts`
- `public/sitemap.xml` lists all primary routes
- `public/robots.txt` references the production sitemap
- headings use concrete Pformance terminology consistently
- customer proof should use factual company, problem, solution and result entities once approved

## Accessibility and UX requirements

- body copy is at least 16 px
- interactive targets are at least 44 px where essential
- visible focus states
- strong Navy/White contrast
- semantic heading hierarchy
- mobile-first responsive layouts
- `prefers-reduced-motion` respected
- no carousels
- no decorative content overload

## Brand governance

For design decisions, **Pformance Brand Guide v1.0 is the source of truth**.

Priority when in doubt:

1. brand consistency
2. readability
3. simplicity
4. proof
5. decoration

If a page feels crowded, remove elements before making everything smaller.

---

© Pformance B.V.
