# Pformance Website

Corporate website for **Pformance B.V.** at **https://pformance.nl**.

Pformance combines marketing leadership, digital product development and practical execution. The core promise is:

> Van commerciële uitdaging naar werkende oplossing.

The website follows **Pformance Brand Guide v1.0** and is intentionally built as a calm, modular, multi-route experience rather than a one-page scrolling site.

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

`Klantcases` is a permanent primary navigation item for validated reference cases.

## Canonical website configuration

The domain and company details are maintained centrally in:

`src/config/site.ts`

The canonical production domain is **https://pformance.nl**. Do not introduce `prformance.nl` or a second domain in metadata, canonicals, sitemap, robots, documentation or content.

## Content editing

Normal content maintenance happens in:

`src/content/site.ts`

This file contains navigation, page metadata, hero copy, page block order, services, process steps, customer case placeholders, Lab products and Resources.

For normal text or content changes you should not need to edit React markup or CSS.

## Modular architecture

The site is separated into four layers.

### 1. Brand system

Visual rules live in `src/styles/global.css` and `src/styles/overrides.css`.

Core colours from the Brand Guide:

- Pformance Navy `#061C48`
- Electric Blue `#1F63FF`
- Teal `#0E9E9A`
- Cyan `#22C7D8`
- Slate `#8AA4C4`
- Soft Gray `#D9DFE8`
- Off White `#F7F7F4`
- Dark Graphite `#363D4D`

The website is Light-first. Dark surfaces are controlled exceptions for proof or technology emphasis.

### 2. Reusable blocks

`src/components/PageBlocks.tsx` contains the reusable page modules:

- page hero
- feature/service grid
- process steps
- customer case grid
- resource list
- split text + visual block
- quote block
- CTA panel
- contact block

Pages are composed from ordered blocks instead of being designed as separate templates.

### 3. Content

`src/content/site.ts` contains the normal editable content and block order.

To reorder a page, reorder the entries in that page's `blocks` array.

To remove a section, remove the block from that page. The block component remains reusable elsewhere.

### 4. Site configuration

`src/config/site.ts` contains the canonical domain, company name, email, office address, KVK and VAT information.

## Navigation

Internal navigation uses `src/components/SiteLink.tsx`. It keeps the speed of a single React app while each menu item still has its own real URL. Netlify direct-route fallback ensures external visits and browser refreshes continue to work.

## Adding a Klantcase

Reference cases must be factual and validated. Do not publish a client name, logo, testimonial, metric or result without permission and evidence.

The case structure should support:

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

The current generic entries deliberately say **Case in voorbereiding** until real reference material is supplied.

## Adding a Lab product

Add or edit the relevant feature entries on the `/lab` page in `src/content/site.ts`.

Use the naming convention:

`Productnaam · A Pformance Lab product`

Lab remains part of the Pformance master brand and never receives its own logo or conflicting colour system.

## Adding a Resource

Add entries to the Resources block in `src/content/site.ts`.

Resources should provide standalone practical value and can be marked `In voorbereiding` until publication.

## Contact form

The current website does not fake a backend submission.

The contact form composes an email to `hello@pformance.nl` in the visitor's own email application. Replace this fallback only when a real backend, CRM or form provider is connected and tested end to end.

## SEO and GEO

- route-specific titles and descriptions come from `src/content/site.ts`
- canonical URLs always use `https://pformance.nl`
- `public/sitemap.xml` contains all primary routes
- `public/robots.txt` references the canonical sitemap
- Organization structured data is generated from `src/config/site.ts`
- copy uses concrete Pformance terminology consistently

## Accessibility and UX

- semantic landmarks and heading hierarchy
- keyboard-usable navigation
- visible focus states
- 44px minimum primary interaction targets where relevant
- body copy at least 16px
- strong Navy/White contrast
- `prefers-reduced-motion` respected
- no carousels
- no decorative technical grid backgrounds
- no walls of text when a dedicated route is more appropriate

## Local development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run typecheck
npm run build
```

## Deployment

Netlify publishes the `dist` directory. `public/_redirects` provides the fallback required for direct visits to `/advisory`, `/build`, `/klantcases` and the other routes.

## Governance

When design choices conflict, use this order:

1. Brand consistency
2. Readability
3. Simplicity
4. Proof
5. Decoration

If a page feels crowded, remove elements before making everything smaller.

---

© Pformance B.V.
