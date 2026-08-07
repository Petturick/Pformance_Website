# Pformance Website V3 implementation specification

This specification defines the rebuilt Pformance website for the canonical domain **https://pformance.nl**. Pformance Brand Guide v1.0 is the source of truth for brand, UX and visual decisions.

## Core objective

Build a calm, modular, multi-route corporate website that combines marketing leadership, digital product development and practical execution. The site must not feel like a generic agency, colourful startup or pure software company.

Core promise: **Van commerciële uitdaging naar werkende oplossing.**

## Canonical domain and company data

The single canonical domain is **https://pformance.nl**.

Canonical company information lives in `src/config/site.ts` and must be reused for metadata, structured data, footer and contact information.

Do not duplicate domain or company data across components when it can come from the central configuration.

## Primary navigation

The logo links to Home. The desktop menu is positioned on the right and contains:

1. Advisory → `/advisory`
2. Build → `/build`
3. Klantcases → `/klantcases`
4. Lab → `/lab`
5. Resources → `/resources`
6. Over → `/over`
7. Contact → `/contact`

A `Plan gesprek` CTA is visible on desktop. Mobile uses an accessible compact menu.

This is not a one-page scrolling website. Each menu item has a distinct URL and page experience. Direct route navigation and browser refreshes must work on Netlify.

## Modular architecture

Normal content is managed in `src/content/site.ts`.

Reusable presentation blocks are managed in `src/components/PageBlocks.tsx`.

Global company and domain configuration is managed in `src/config/site.ts`.

Internal route navigation is handled by `src/components/SiteLink.tsx` without adding an unnecessary routing dependency.

Design rules remain locked in the shared CSS system so normal content editing cannot break the house style.

## Brand system

Light mode is the default experience. Controlled dark sections may be used only for proof, technology or emphasis.

Core colours:

- Pformance Navy `#061C48`
- Electric Blue `#1F63FF`
- Teal `#0E9E9A`
- Cyan `#22C7D8`
- Slate `#8AA4C4`
- Soft Gray `#D9DFE8`
- Off White `#F7F7F4`
- Dark Graphite `#363D4D`

Display typography: Space Grotesk SemiBold.
Body and UI typography: Inter.

Use generous white space, an 8px spacing rhythm, 12px default radii, thin neutral borders and restrained shadows.

Graphic language uses large calm interlocking ring segments, overlap and negative space. Do not use decorative technical grids, repeated wireframe boxes, random squares or busy technology patterns.

## Homepage

Keep the homepage concise.

Hero:

- eyebrow: `Strategie. Technologie. Impact.`
- headline: `Van commerciële uitdaging naar werkende oplossing.`
- one short supporting sentence
- primary CTA: `Plan gesprek`
- secondary CTA: `Bekijk klantcases`
- one restrained brand visual

Then:

1. Advisory, Build, Lab and Resources as four concise entry points
2. maximum three Klantcases previews
3. four-step approach: Inzicht, Richting, Realisatie, Verbeteren
4. concise positioning block
5. final CTA

## Advisory

Headline: `Marketing leadership dat richting geeft.`

Use concise blocks for interim marketing management, strategy and positioning, e-commerce/SEO/GEO/AI visibility, and marketing operating model. Include the four-step approach Diagnose, Keuzes, Plan, Sturing.

## Build

Headline: `Digitale oplossingen die werken voor gebruikers én business.`

Cover webapps and platforms, dashboards and tools, PIM and product data, automation, integrations and AI applications. The story starts with the business problem, not technology.

## Klantcases

Headline: `Bewijs boven belofte.`

Klantcases are a permanent top-level menu item. Never invent customer names, logos, testimonials, metrics or results. Until validated reference material is supplied, use clearly labelled preparation states.

The case model must be able to support customer, sector, challenge, approach, solution, result, proof, testimonial, technology, category, screenshots and publication status.

## Lab

Headline: `Experimenteren. Valideren. Bouwen.`

Lab remains part of the Pformance master brand. Syntrx, PricingTool and Onboarding Platform may be shown as Pformance Lab products without invented customer or performance claims.

## Resources

Headline: `Kennis en tools die je verder helpen.`

Prepare guides, checklists, templates, calculators and practical tools. Resources should provide standalone value and can be marked `In voorbereiding` before publication.

## Over

Headline: `Strategisch genoeg om te kiezen. Praktisch genoeg om te bouwen.`

Explain the four brand traits: Strategisch, Duidelijk, Praktisch and Vooruitkijkend. Do not invent company scale or track record metrics.

## Contact

Headline: `Laten we het vraagstuk scherp krijgen.`

Present two clear routes: marketing leadership and something to build. The current form may compose an email, but must not pretend to submit or store data until a real backend is connected.

## SEO and GEO

Every route has a unique title and meta description. Canonical URLs and Open Graph URLs use `https://pformance.nl`. Organization structured data uses the central company configuration. `public/sitemap.xml` and `public/robots.txt` use the same canonical domain.

## UX and accessibility

- body text at least 16px
- primary touch targets at least 44px where relevant
- visible 2px focus states
- WCAG AA contrast for essential body text and UI
- semantic headings and landmarks
- keyboard usable navigation
- skip link to the main content
- reduced-motion preferences respected
- no carousels
- no oversized walls of text
- responsive from mobile to wide desktop

## Release requirements

Before merge:

1. the canonical domain is `https://pformance.nl` everywhere in current source files
2. all eight primary routes work directly on Netlify
3. Klantcases is in primary navigation
4. old one-page components are removed
5. no fabricated reference data is published
6. the Light Brand Guide system is applied consistently
7. TypeScript and production build are green
8. the PR is ready for the repository owner to merge without additional code work
