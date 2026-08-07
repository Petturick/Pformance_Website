/**
 * Advisory and Build service definitions.
 *
 * Content is written by Pformance and describes the actual offering.
 * No client names, numbers or results are claimed here.
 */

export type ServiceTrack = "advisory" | "build";

export type Service = {
  slug: string;
  track: ServiceTrack;
  title: string;
  summary: string;
  /** Concrete deliverables or activities within this service. */
  points: string[];
};

export const advisoryServices: Service[] = [
  {
    slug: "marketing-leadership",
    track: "advisory",
    title: "Strategisch marketing leadership",
    summary:
      "Richting geven aan commercie en marketing op directieniveau, met verantwoordelijkheid voor keuzes, focus en resultaat.",
    points: [
      "Commerciële en marketingstrategie vertalen naar een concreet plan",
      "Prioritering van kanalen, doelgroepen en proposities",
      "Sparringpartner voor directie, MT en founders",
      "Sturing op meetbare doelstellingen in plaats van losse campagnes",
    ],
  },
  {
    slug: "interim-fractional",
    track: "advisory",
    title: "Interim & fractional marketing management",
    summary:
      "Tijdelijke of parttime invulling van marketingleiding, zonder dat er een vaste senior rol nodig is.",
    points: [
      "Interim marketing manager of marketing director",
      "Fractional leadership voor een vast aantal dagen per maand",
      "Overbrugging bij vertrek, groei of reorganisatie",
      "Coaching en aansturing van bestaand marketingteam en bureaus",
    ],
  },
  {
    slug: "digital-strategy",
    track: "advisory",
    title: "Digitale strategie",
    summary:
      "Een heldere digitale koers: welke systemen, kanalen en producten nodig zijn om commercieel te winnen.",
    points: [
      "Digitale roadmap gekoppeld aan commerciële doelen",
      "Keuzes rond platformen, build-versus-buy en partners",
      "Prioritering op basis van impact en haalbaarheid",
      "Bewaking van samenhang tussen marketing, sales en IT",
    ],
  },
  {
    slug: "ecommerce-strategy",
    track: "advisory",
    title: "Ecommerce strategie",
    summary:
      "Van assortiment en pricing tot conversie en fulfilment: de commerciële logica achter een webshop of D2C-propositie.",
    points: [
      "Propositie, assortimentsstrategie en pricing-uitgangspunten",
      "Conversie- en funnelanalyse over de volledige customer journey",
      "Platform- en PIM-keuzes vanuit commercieel perspectief",
      "Groeiscenario's voor nieuwe markten en kanalen",
    ],
  },
  {
    slug: "seo-geo-ai-search",
    track: "advisory",
    title: "SEO, GEO en AI search visibility",
    summary:
      "Vindbaarheid in klassieke zoekmachines én in AI-gedreven antwoorden en generatieve zoekervaringen.",
    points: [
      "Technische SEO, contentstructuur en interne linking",
      "GEO (generative engine optimization) en AI search visibility",
      "Contentstrategie gericht op vragen in plaats van losse zoekwoorden",
      "Meetbaar maken van zichtbaarheid in AI-assistenten en zoekmachines",
    ],
  },
  {
    slug: "martech",
    track: "advisory",
    title: "MarTech & datalandschap",
    summary:
      "Een marketingstack die past bij de organisatie: bruikbaar, meetbaar en zonder onnodige complexiteit.",
    points: [
      "Inventarisatie en rationalisatie van de bestaande stack",
      "CDP, CRM, automation en analytics op elkaar aansluiten",
      "Datamodel en tracking die betrouwbare beslissingen mogelijk maken",
      "Implementatiebegeleiding en selectie van leveranciers",
    ],
  },
  {
    slug: "marketing-audit",
    track: "advisory",
    title: "Marketing audit",
    summary:
      "Een gestructureerde doorlichting van strategie, uitvoering, kanalen en organisatie, met concrete aanbevelingen.",
    points: [
      "Analyse van positionering, propositie en doelgroepen",
      "Beoordeling van kanalen, budgetten en rendement",
      "Review van tooling, data en meetbaarheid",
      "Rapportage met prioriteiten en een uitvoerbaar vervolgplan",
    ],
  },
  {
    slug: "marketing-organisation",
    track: "advisory",
    title: "Marketingorganisatie",
    summary:
      "De juiste mensen, rollen en werkwijzen, zodat marketing structureel blijft leveren.",
    points: [
      "Teamontwerp, rolprofielen en verantwoordelijkheden",
      "Samenwerking tussen marketing, sales, product en IT",
      "Keuze tussen in-house, bureau en freelance capaciteit",
      "Werkwijzen, planning en rapportagestructuur",
    ],
  },
];

export const buildServices: Service[] = [
  {
    slug: "web-applications",
    track: "build",
    title: "Webapplicaties",
    summary:
      "Applicaties die een specifiek commercieel of operationeel probleem oplossen, gebouwd op een moderne stack.",
    points: [
      "Van functioneel ontwerp tot werkende applicatie",
      "Schaalbare architectuur en onderhoudbare code",
      "Focus op gebruiksgemak voor de dagelijkse gebruiker",
      "Doorontwikkeling in korte, meetbare iteraties",
    ],
  },
  {
    slug: "business-tools",
    track: "build",
    title: "Business tools",
    summary:
      "Interne tools die handmatig werk vervangen: calculatoren, configuratoren, portalen en workflow-applicaties.",
    points: [
      "Vervanging van fragiele spreadsheets en losse processen",
      "Rollen, rechten en audit trails waar nodig",
      "Koppelingen met bestaande systemen",
      "Snelle oplevering van een bruikbare eerste versie",
    ],
  },
  {
    slug: "dashboards",
    track: "build",
    title: "Dashboards & rapportage",
    summary:
      "Inzicht dat daadwerkelijk gebruikt wordt: één plek waar commerciële en operationele cijfers samenkomen.",
    points: [
      "Databronnen samenbrengen tot één betrouwbaar beeld",
      "KPI-definities die binnen de organisatie kloppen",
      "Dashboards voor directie én voor dagelijkse sturing",
      "Automatische verversing en alerting",
    ],
  },
  {
    slug: "automation",
    track: "build",
    title: "Automatisering",
    summary:
      "Repeterend werk automatiseren, zodat het team tijd overhoudt voor werk met impact.",
    points: [
      "Procesanalyse en identificatie van automatiseringskansen",
      "Workflows tussen systemen zonder handmatige tussenstappen",
      "Data-synchronisatie en batchverwerking",
      "Monitoring en foutafhandeling",
    ],
  },
  {
    slug: "pim",
    track: "build",
    title: "PIM-oplossingen",
    summary:
      "Productdata op orde: één bron voor content, specificaties, media en kanaaluitzendingen.",
    points: [
      "Datamodel voor producten, varianten en attributen",
      "Import, verrijking en kwaliteitscontrole van productdata",
      "Uitzending naar webshop, marktplaatsen en partners",
      "Meertalige content en kanaalspecifieke varianten",
    ],
  },
  {
    slug: "ecommerce-tools",
    track: "build",
    title: "Ecommerce tools",
    summary:
      "Aanvullende functionaliteit rond een bestaand ecommerceplatform, waar standaard niet volstaat.",
    points: [
      "Pricing-, promotie- en marge-logica",
      "Feeds, koppelingen en marktplaatsintegraties",
      "Conversie-gerichte componenten en experimenten",
      "Operationele tooling voor het ecommerceteam",
    ],
  },
  {
    slug: "integrations",
    track: "build",
    title: "Integraties",
    summary:
      "Systemen laten samenwerken: ERP, CRM, PIM, webshop, marketing automation en externe API's.",
    points: [
      "API-integraties en middleware",
      "Betrouwbare datastromen met logging en herstel",
      "Migraties tussen platformen",
      "Documentatie en overdraagbaarheid",
    ],
  },
  {
    slug: "ai-applications",
    track: "build",
    title: "AI-toepassingen",
    summary:
      "AI toegepast waar het aantoonbaar helpt: contentproductie, classificatie, zoeken en beslisondersteuning.",
    points: [
      "Concrete use cases in plaats van experimenten zonder doel",
      "Retrieval en context op basis van eigen data",
      "Menselijke controle op output waar dat nodig is",
      "Kosten- en kwaliteitsbewaking van modellen",
    ],
  },
  {
    slug: "websites",
    track: "build",
    title: "Professionele websites",
    summary:
      "Snelle, vindbare en onderhoudbare websites die de commerciële propositie serieus ondersteunen.",
    points: [
      "Positionering en boodschap vertaald naar structuur en content",
      "Technische SEO en performance vanaf de basis",
      "Toegankelijkheid en heldere informatiearchitectuur",
      "Beheerbaar door het eigen team",
    ],
  },
];

export const allServices: Service[] = [...advisoryServices, ...buildServices];

export function getServicesByTrack(track: ServiceTrack): Service[] {
  return allServices.filter((service) => service.track === track);
}

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Scherpstellen",
    description:
      "We benoemen het werkelijke commerciële, marketing- of digitale probleem. Niet de symptomen, maar de oorzaak.",
  },
  {
    step: "02",
    title: "Richting kiezen",
    description:
      "Strategie, prioriteiten en een realistische route. Inclusief wat we bewust níet doen.",
  },
  {
    step: "03",
    title: "Bouwen",
    description:
      "Oplossingen worden gebouwd en geïmplementeerd. In korte iteraties, met werkende resultaten onderweg.",
  },
  {
    step: "04",
    title: "Borgen",
    description:
      "Overdracht aan het team, meetbaar maken van resultaat en doorontwikkeling waar dat waarde toevoegt.",
  },
];

export type Expertise = {
  title: string;
  description: string;
};

export const expertiseAreas: Expertise[] = [
  {
    title: "Commercieel & marketing",
    description:
      "Positionering, propositie, go-to-market, kanaalstrategie, funnel en marketingorganisatie.",
  },
  {
    title: "Digital & ecommerce",
    description:
      "Ecommerce, PIM, productdata, conversie, platformkeuzes en digitale roadmaps.",
  },
  {
    title: "Search & AI-zichtbaarheid",
    description:
      "SEO, GEO, contentstructuur en vindbaarheid in AI-gedreven zoekervaringen.",
  },
  {
    title: "Engineering",
    description:
      "TypeScript, React, Next.js, API's, integraties, databases en cloud-hosting.",
  },
];
