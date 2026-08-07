# Pformance Website V2 implementation specification

This file is the implementation brief for the next website version. It translates Pformance Brand Guide v1.0 and the agreed UX direction into a concrete build plan.

## Objective

Rebuild the current one-page website as a calm, modular, multi-route corporate website. The site must feel premium, intelligent, clear and practical. It must not look like a generic marketing agency, a colourful startup or a pure SaaS company.

Pformance positioning: strategy, technology and execution in one approach. Core promise: **Van commerciële uitdaging naar werkende oplossing.**

## Required navigation

The logo links to Home. The desktop menu sits on the right side of the header and contains:

1. Advisory → `/advisory`
2. Build → `/build`
3. Klantcases → `/klantcases`
4. Lab → `/lab`
5. Resources → `/resources`
6. Over → `/over`
7. Contact → `/contact`

Add a clear `Plan gesprek` CTA on desktop. Mobile uses a compact accessible menu.

This is explicitly **not** a one-page scrolling site. Every menu item needs its own route and page experience. Direct visits to all routes must work on Netlify.

## Brand Guide rules, source of truth

Light system is the default website experience. Controlled dark sections are allowed for technology, proof and emphasis, but dark must not become a separate visual identity.

### Colours

- Pformance Navy `#061C48`, primary text, trust, seniority and precision
- Electric Blue `#1F63FF`, primary action and progress
- Teal `#0E9E9A`, secondary informational accent only
- Cyan `#22C7D8`, secondary informational accent only
- Slate `#8AA4C4`, supporting information
- Soft Gray `#D9DFE8`, borders and low-emphasis lines
- Off White `#F7F7F4`, soft surfaces
- Dark Graphite `#363D4D`, secondary body copy

Use one dominant colour per surface, one action accent and at most one supporting accent. Colour is functional, not decorative.

### Typography

Display preference: Space Grotesk SemiBold, with Inter Display SemiBold/system fallback if unavailable.
Body and UI: Inter Regular, Inter Medium for labels/navigation, Inter SemiBold for UI accents.
Approximate scale from brand guide: H1 56/60, H2 36/42, H3 24/30, body 16/26, small 13/20.
Short lines, generous line-height, no extremely thin weights.

### Layout

- 12-column layout logic
- 8px spacing rhythm
- 12px default radius
- 8px compact UI radius
- 16px large media/hero radius
- 1px Soft Gray/low-opacity Slate borders
- subtle shadows only when functional
- space first, decoration later
- if a page feels busy, remove elements before shrinking them

### Graphic language

Use large, calm interlocking ring segments, cuts, overlap and negative space derived from the logo. Maximum one dominant brand shape per composition.

Do **not** use visible technical grid backgrounds, decorative little squares, repeated wireframe boxes or busy technology patterns behind the logo. This is explicitly prohibited by the brand guide.

### Iconography

Functional geometric outline icons only, 24/32px, consistent stroke. Navy or Electric Blue, maximum one accent. No emoji, 3D UI icons or mixed filled/outline sets.

### Imagery

Use real expertise, people in context, real interfaces, dashboards, prototypes and tooling. Avoid generic handshake/corporate stock. AI visuals must never imply a fake client project, fake product or fake result.

### Tone of voice

Direct, clear, businesslike, concrete, forward-looking and substantiated. Avoid buzzwords, vague transformation language and unsupported claims.

Copy hierarchy: context → concrete value → logical next action.
CTA hierarchy: primary `Plan gesprek`, secondary `Bekijk klantcases`, deeper `Lees meer` / `Bekijk aanpak`.

## Modular architecture

The site must be managed as reusable blocks rather than seven separately hard-coded page designs.

Create a central editable content source, preferably `src/content/site.ts` or equivalent. Most copy, case entries, resources, navigation labels and block order must be editable there without changing component markup or CSS.

Create a reusable page renderer/component library with at least these modules:

- Page hero
- Feature/service grid
- Process/steps
- Klantcase grid
- Split text + visual
- Quote/testimonial
- Resource list/grid
- CTA panel
- Contact block/form
- Footer

Pages are hero + ordered blocks. Design tokens remain locked in CSS/components so normal content edits cannot break the house style.

## Homepage

Keep it concise and not text-heavy.

Hero:
- eyebrow: `Strategie. Technologie. Impact.`
- headline: `Van commerciële uitdaging naar werkende oplossing.`
- short supporting sentence about marketing leadership, digital product development and practical execution
- primary CTA `Plan gesprek`
- secondary CTA `Bekijk klantcases`
- one restrained brand visual, no technical grid

Then:
1. Four concise pillars: Advisory, Build, Lab, Resources
2. Klantcases preview, maximum 3 cards
3. Four-step approach: Inzicht, Richting, Realisatie, Verbeteren
4. Short positioning block explaining Pformance is neither traditional agency nor pure software company
5. Strong final CTA

Do not repeat every service and every process detail on Home. Detailed content belongs on dedicated pages.

## Advisory page

Headline direction: `Marketing leadership dat richting geeft.`

Blocks:
- Hero
- Services: Interim Marketing Management, Strategy & Positioning, e-commerce/SEO/GEO/AI visibility, marketing operating model/team & capability
- Four-step approach: Diagnose, Keuzes, Plan, Sturing
- When Advisory fits, concise split block
- CTA

Keep the page executive and calm.

## Build page

Headline direction: `Digitale oplossingen die werken voor gebruikers én business.`

Blocks:
- Hero
- What we build: webapps/platforms, dashboards/tools, PIM/product data, automation, integrations, AI applications
- Product approach: Probleem, Ontwerp, Bouw, Optimalisatie
- relevant Klantcases preview
- one controlled dark proof/technology section
- CTA

Technology is a means, not the story.

## Klantcases page

This is a new top-level menu item and must have its own route.

Headline: `Bewijs boven belofte.`

Important: do not invent customers, testimonials, statistics, logos or performance claims. Until real references are supplied, create clearly labelled case placeholders such as `Case in voorbereiding` and explain that customer name, permission and validated results will be added before publication.

Define a scalable case data model supporting:
- client/company name
- sector
- challenge/context
- approach
- solution
- result
- proof/metrics
- testimonial
- technologies
- Advisory / Build / Combined category
- images/screenshots
- publication status

The page should be ready for filters later, but do not overbuild filtering now.

## Lab page

Headline direction: `Experimenteren. Valideren. Bouwen.`

Show Pformance Lab as part of Pformance, never as separate sub-brand.
Initial product entries can include Syntrx, PricingTool and Onboarding Platform, but do not invent market results or customers.

Blocks:
- Hero
- Product cards
- Lab method: Signaal, Prototype, Validatie, Product
- why Lab exists / proof of build capability
- CTA

## Resources page

Headline: `Kennis en tools die je verder helpen.`

Resources should provide standalone value instead of being pure lead gates.
Prepare modular entries for guides, checklists, templates, calculators and free tools. Clearly mark items `In voorbereiding` if not yet published.

## Over page

Headline direction: `Strategisch genoeg om te kiezen. Praktisch genoeg om te bouwen.`

Explain Pformance’s positioning and four personality traits: Strategisch, Duidelijk, Praktisch, Vooruitkijkend.
Avoid invented project counts, years, clients or scale metrics.

## Contact page

Headline: `Laten we het vraagstuk scherp krijgen.`

Provide two clear routes:
- Ik zoek marketing leadership
- Ik wil iets laten bouwen

Keep the form short. If no real backend is configured, do not pretend submissions are stored or sent. Either connect the existing valid backend or make the fallback explicit, for example composing an email. Never invent an API endpoint.

## UX and accessibility

- body text at least 16px
- 44x44px minimum touch targets
- visible 2px focus state
- WCAG AA contrast for essential UI/body copy
- semantic headings
- keyboard usable navigation
- prefers-reduced-motion respected
- motion short, precise and purposeful, no bounce/spectacle
- no carousels
- no oversized walls of text
- responsive from mobile first through wide desktop

## SEO / GEO

Each route needs a clear page title and meta description. Maintain semantic page headings and concrete entity names. Add/update sitemap and robots. Use consistent wording: Pformance, Advisory, Build, Klantcases, Lab and Resources.

## Content governance

Normal changes should happen in the central content file. Keep README instructions explaining how to:
- edit text
- reorder blocks
- add a Klantcase
- add a Lab product
- add a Resource
- add a new page block

## Release requirements

Before marking the PR ready:

1. Ensure direct route navigation works, not one-page scrolling.
2. Ensure the top menu contains Klantcases.
3. Ensure there are no fabricated customer references or fake metrics.
4. Ensure the website follows the Light brand system and no visible technical-grid decorative background remains.
5. Ensure TypeScript and production build pass.
6. Keep the result calm. When in doubt, remove content or decoration rather than making everything smaller.
