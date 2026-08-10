import type { Case, Page } from "./types";

export const casePlaceholders: Case[] = [
  {
    title: "Productdata & PIM",
    sector: "Commercieel systeem",
    challenge: "Versnipperde productinformatie, handmatig beheer en onvoldoende grip op distributie naar kanalen.",
    publication: "Volledige klantcase wordt gepubliceerd zodra klantnaam, aanpak en resultaten zijn gevalideerd en vrijgegeven.",
    status: "Case in voorbereiding",
  },
  {
    title: "Pricing intelligence",
    sector: "Data & besluitvorming",
    challenge: "Handmatig prijs- en concurrentieonderzoek vertalen naar een schaalbaar systeem voor commerciële beslissingen.",
    publication: "Resultaatclaims worden alleen gepubliceerd met aantoonbare bron en context.",
    status: "Case in voorbereiding",
  },
  {
    title: "Digitale onboarding",
    sector: "Uitvoering & adoptie",
    challenge: "Losse documenten en kennis samenbrengen in een gestructureerd systeem voor onboarding en voortgang.",
    publication: "Bewijs, screenshots en resultaten volgen na inhoudelijke validatie.",
    status: "Case in voorbereiding",
  },
];

const home: Page = {
  path: "/",
  metaTitle: "Pformance | Van commerciële uitdaging naar werkend systeem",
  metaDescription: "Pformance is een commerciële technologiepartner die strategie, technologie en uitvoering verbindt in systemen die werken en blijven werken.",
  hero: {
    eyebrow: "Commerciële technologiepartner",
    title: "Van commerciële uitdaging naar",
    highlight: "werkend systeem.",
    intro: "Wij verbinden strategie, technologie en uitvoering om commerciële ambities te vertalen naar schaalbare systemen die werken en blijven werken.",
    primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    secondary: { label: "Bekijk cases", href: "/klantcases", style: "secondary" },
    visual: "orbit",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Waarom Pformance",
      title: "Strategie, technologie en uitvoering in één systeem.",
      intro: "Geen traditioneel marketingbureau en geen puur softwarebedrijf. We starten bij het commerciële probleem en bouwen van daaruit de juiste oplossing.",
      columns: 4,
      items: [
        { eyebrow: "01", title: "Strategie & richting", text: "We vertalen ambitie naar heldere keuzes, focus en een gedragen strategie.", href: "/advisory" },
        { eyebrow: "02", title: "Technologie & data", text: "We ontwerpen schaalbare digitale systemen met betrouwbare data als basis.", href: "/build" },
        { eyebrow: "03", title: "Uitvoering & adoptie", text: "We activeren teams en processen zodat verandering daadwerkelijk landt." },
        { eyebrow: "04", title: "Resultaat & groei", text: "We leveren meetbare impact die commerciële groei ondersteunt en blijft verbeteren." },
      ],
    },
    {
      type: "split",
      eyebrow: "Bewijs",
      title: "We maken zichtbaar waarom iets werkt.",
      text: "Pformance onderbouwt keuzes met data, cases, experimenten, frameworks en aantoonbare resultaten. Claims zijn concreet, contextgebonden en verifieerbaar.",
      bullets: ["250+ projecten in opgebouwde ervaring", "25+ specialistische expertises", "Data gedreven aanpak", "Bewezen frameworks en klantresultaten"],
      action: { label: "Bekijk cases", href: "/klantcases", style: "primary" },
      tone: "dark",
      visual: "product",
    },
    {
      type: "features",
      eyebrow: "Oplossingen",
      title: "Twee routes naar één werkend systeem.",
      columns: 2,
      items: [
        { eyebrow: "Advisory", title: "Richting en marketing leadership", text: "Voor organisaties die scherpere keuzes, senior sturing en een beter werkend commercieel model nodig hebben.", href: "/advisory" },
        { eyebrow: "Build", title: "Digitale systemen en producten", text: "Voor organisaties die processen, data en gebruikers willen verbinden in een bruikbare digitale oplossing.", href: "/build" },
      ],
    },
    {
      type: "cases",
      eyebrow: "Cases",
      title: "Bewijs boven belofte.",
      intro: "Cases worden opgebouwd rond context, keuzes, oplossing en aantoonbaar resultaat.",
      items: casePlaceholders,
      action: { label: "Bekijk alle cases", href: "/klantcases", style: "ghost" },
    },
    {
      type: "split",
      eyebrow: "Pformance Lab",
      title: "We bouwen ook zelf wat de markt nodig heeft.",
      text: "Lab is de product- en experimenteerruimte binnen Pformance. Hier vertalen we terugkerende problemen naar herhaalbare producten, prototypes en software.",
      bullets: ["Syntrx", "PricingTool", "Onboarding Platform", "Nieuwe concepten op basis van echte frictie"],
      action: { label: "Ontdek Pformance Lab", href: "/lab", style: "secondary" },
      tone: "soft",
      visual: "product",
    },
    {
      type: "resources",
      eyebrow: "Resources",
      title: "Kennis die zelfstandig waarde levert.",
      items: [
        { type: "Checklist", title: "Marketing audit checklist", text: "Een compacte controle op strategie, organisatie, kanalen, data en uitvoering.", status: "In voorbereiding" },
        { type: "Guide", title: "SEO, GEO & AI visibility", text: "Een praktisch kader voor klassieke en AI gedreven vindbaarheid.", status: "In voorbereiding" },
        { type: "Scan", title: "PIM readiness scan", text: "Bepaal waar productdata, ownership en distributie vastlopen.", status: "In voorbereiding" },
      ],
    },
    {
      type: "cta",
      title: "Laten we je commerciële ambitie vertalen naar een werkend systeem.",
      text: "Een eerste gesprek is bedoeld om context, probleem en gewenste uitkomst scherp te krijgen.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
      secondary: { label: "Bekijk onze aanpak", href: "/oplossingen", style: "secondary" },
    },
  ],
};

const solutions: Page = {
  path: "/oplossingen",
  metaTitle: "Oplossingen | Pformance",
  metaDescription: "Van strategie en marketing leadership tot digitale systemen, data en automatisering. Ontdek hoe Pformance commerciële vraagstukken oplost.",
  hero: {
    eyebrow: "Oplossingen",
    title: "Voor elke commerciële uitdaging een",
    highlight: "passende route.",
    intro: "Van strategie en leiderschap tot het bouwen van digitale systemen die verschil maken. We kiezen de route op basis van het probleem, niet op basis van een standaardpakket.",
    primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    secondary: { label: "Bekijk cases", href: "/klantcases", style: "secondary" },
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Advisory & Build",
      title: "Richting bepalen en realiseren wat nodig is.",
      columns: 2,
      items: [
        { eyebrow: "Advisory", title: "Strategie, marketing leadership en organisatie", text: "Marketing leadership, commerciële strategie, interim sturing, SEO, GEO, AI visibility en een werkend marketing operating model.", href: "/advisory" },
        { eyebrow: "Build", title: "Digitale producten, platforms en automatisering", text: "Webapps, dashboards, PIM, integraties, data, automatisering en AI toepassingen die processen en gebruikers verbinden.", href: "/build" },
      ],
    },
    {
      type: "process",
      eyebrow: "Onze werkwijze",
      title: "Context. Waarde. Bewijs. Actie.",
      steps: [
        { number: "01", title: "Context", text: "Waar staat de organisatie en wat is het echte vraagstuk?" },
        { number: "02", title: "Waarde", text: "Wat moet aantoonbaar beter worden voor klant, team of business?" },
        { number: "03", title: "Bewijs", text: "Welke data, cases of experimenten onderbouwen de gekozen route?" },
        { number: "04", title: "Actie", text: "Welke concrete volgende stap brengt het systeem in beweging?" },
      ],
    },
    {
      type: "cta",
      title: "Niet zeker welke route past?",
      text: "Dat hoeft ook niet. We beginnen bij het vraagstuk en bepalen daarna of Advisory, Build of een combinatie logisch is.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const advisory: Page = {
  path: "/advisory",
  metaTitle: "Advisory | Pformance",
  metaDescription: "Strategisch marketing leadership, commerciële richting en een werkend marketing operating model voor organisaties die slimmer willen groeien.",
  hero: {
    eyebrow: "Advisory",
    title: "Strategische richting die",
    highlight: "uitvoering versnelt.",
    intro: "Voor directie, commercie en marketing die meer grip, focus en meetbare voortgang nodig hebben.",
    primary: { label: "Bespreek je vraagstuk", href: "/contact", style: "primary" },
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Waar we bij helpen",
      title: "Van commerciële ambitie naar een bestuurbaar marketing systeem.",
      columns: 2,
      items: [
        { title: "Interim & fractional marketing leadership", text: "Senior sturing op prioriteiten, team, resultaat en verandering." },
        { title: "Strategie & positionering", text: "Heldere keuzes over markt, waardepropositie, prioriteiten en groei." },
        { title: "SEO, GEO & AI visibility", text: "Klassieke en AI gedreven vindbaarheid als onderdeel van commerciële groei." },
        { title: "Marketing operating model", text: "Rollen, ritme, KPI's, processen en tooling die uitvoering voorspelbaarder maken." },
      ],
    },
    {
      type: "process",
      eyebrow: "Aanpak",
      title: "Geen strategie in een lade, maar een werkend ritme.",
      steps: [
        { number: "01", title: "Diagnose", text: "We brengen markt, doelen, organisatie en belemmeringen terug tot de kern." },
        { number: "02", title: "Richting", text: "We maken keuzes en definiëren waar waarde en focus liggen." },
        { number: "03", title: "Inrichting", text: "We vertalen richting naar eigenaarschap, KPI's, processen en ritme." },
        { number: "04", title: "Sturing", text: "We begeleiden uitvoering, meten voortgang en sturen gericht bij." },
      ],
    },
    {
      type: "split",
      eyebrow: "Wanneer Advisory past",
      title: "Als ideeën genoeg aanwezig zijn, maar richting of executiekracht ontbreekt.",
      text: "Advisory helpt wanneer groei, marketingorganisatie of digitale ontwikkeling moet versnellen zonder nog meer losse initiatieven toe te voegen.",
      bullets: ["Directie en MT", "Commercie", "Marketing", "Operations en IT"],
      action: { label: "Plan een gesprek", href: "/contact", style: "primary" },
      tone: "soft",
      visual: "human",
    },
  ],
};

const build: Page = {
  path: "/build",
  metaTitle: "Build | Pformance",
  metaDescription: "Pformance ontwerpt en bouwt digitale systemen, producten, PIM oplossingen, dashboards, automatisering en AI toepassingen vanuit commerciële context.",
  hero: {
    eyebrow: "Build",
    title: "Digitale systemen die",
    highlight: "werkbaar worden.",
    intro: "We starten niet bij technologie, maar bij de commerciële uitdaging, gebruiker en gewenste impact.",
    primary: { label: "Bespreek een oplossing", href: "/contact", style: "primary" },
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Wat we bouwen",
      title: "Technologie met een duidelijke reden om te bestaan.",
      columns: 3,
      items: [
        { title: "Webapps & platforms", text: "Digitale omgevingen die processen, gebruikers en proposities verbinden." },
        { title: "Dashboards & tooling", text: "Beslisinformatie terugbrengen tot een bruikbare, dagelijkse interface." },
        { title: "PIM & productdata", text: "Productinformatie structureren, verrijken, beheren en distribueren." },
        { title: "Automatisering", text: "Handmatig werk terugbrengen door processen en data logisch te verbinden." },
        { title: "Integraties", text: "Commerce, CRM, ERP, data en andere bedrijfssystemen betrouwbaar koppelen." },
        { title: "AI toepassingen", text: "AI toepassen waar snelheid, kwaliteit of besluitvorming aantoonbaar verbetert." },
      ],
    },
    {
      type: "process",
      eyebrow: "Productaanpak",
      title: "Van probleem naar adoptie in vier stappen.",
      steps: [
        { number: "01", title: "Probleem", text: "Gebruiker, context, frictie en gewenste uitkomst scherp krijgen." },
        { number: "02", title: "Ontwerp", text: "Flow, informatiearchitectuur en systeemlogica concreet maken." },
        { number: "03", title: "Bouw", text: "Een onderhoudbare oplossing realiseren met duidelijke scope." },
        { number: "04", title: "Adoptie", text: "Gebruik meten, feedback verwerken en het systeem gericht verbeteren." },
      ],
    },
    {
      type: "split",
      eyebrow: "Bouwprincipe",
      title: "Technologie is het middel. Een werkend systeem is het resultaat.",
      text: "De architectuur volgt de behoefte. Soms is dat een kleine interne tool, soms een schaalbaar platform.",
      bullets: ["Schaalbaarheid", "Snelheid", "Duidelijkheid", "Meetbare impact"],
      tone: "dark",
      visual: "product",
    },
  ],
};

const cases: Page = {
  path: "/klantcases",
  metaTitle: "Cases | Pformance",
  metaDescription: "Pformance cases tonen context, keuzes, oplossing en aantoonbaar resultaat. Bewijs boven belofte.",
  hero: {
    eyebrow: "Cases",
    title: "Echte resultaten.",
    highlight: "Echte impact.",
    intro: "Elke case moet laten zien wat het probleem was, welke keuzes zijn gemaakt en wat aantoonbaar is veranderd.",
    primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    visual: "cases",
  },
  blocks: [
    {
      type: "cases",
      eyebrow: "Casebibliotheek",
      title: "Bewijs wordt zorgvuldig opgebouwd.",
      intro: "Klantnamen, quotes, cijfers en claims worden pas gepubliceerd na validatie en toestemming.",
      items: casePlaceholders,
    },
    {
      type: "split",
      eyebrow: "Proof standard",
      title: "Specifiek, aantoonbaar en altijd met context.",
      text: "We vermijden superlatieven zonder bewijs. Resultaten worden gekoppeld aan bron, periode en uitgangssituatie.",
      bullets: ["Context en uitdaging", "Aanpak en keuzes", "Oplossing en adoptie", "Resultaat en bewijs"],
      tone: "soft",
      visual: "orbit",
    },
  ],
};

const lab: Page = {
  path: "/lab",
  metaTitle: "Pformance Lab | Producten en experimenten",
  metaDescription: "Pformance Lab ontwikkelt eigen producten, prototypes en experimenten vanuit terugkerende commerciële en digitale problemen.",
  hero: {
    eyebrow: "Pformance Lab",
    title: "Experimenteren. Valideren.",
    highlight: "Bouwen.",
    intro: "Lab vertaalt terugkerende problemen naar producten die klein getest, verbeterd en pas daarna opgeschaald worden.",
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "A Pformance Lab product",
      title: "Eigen producten binnen één merk.",
      columns: 3,
      items: [
        { eyebrow: "Lab product", title: "Syntrx", text: "Een productinformatieplatform voor structureren, verrijken, workflow en distributie van productdata." },
        { eyebrow: "Lab product", title: "PricingTool", text: "Een systeem voor prijs- en concurrentie intelligence dat marktdata bruikbaar maakt voor beslissingen." },
        { eyebrow: "Lab product", title: "Onboarding Platform", text: "Een digitale omgeving voor kennis, onboarding, voortgang en adoptie." },
      ],
    },
    {
      type: "process",
      eyebrow: "Lab methode",
      title: "Eerst aannames testen, daarna investeren.",
      steps: [
        { number: "01", title: "Signaal", text: "Een terugkerend probleem of kans wordt scherp geformuleerd." },
        { number: "02", title: "Prototype", text: "We bouwen de kleinste versie die de kern kan toetsen." },
        { number: "03", title: "Validatie", text: "Gebruik, data en feedback bepalen of er echte waarde ontstaat." },
        { number: "04", title: "Product", text: "Alleen bewezen concepten krijgen verdere productontwikkeling." },
      ],
    },
  ],
};

const resources: Page = {
  path: "/resources",
  metaTitle: "Resources | Pformance",
  metaDescription: "Praktische guides, scans, checklists en frameworks voor commerciële groei, marketing, digitale producten en data.",
  hero: {
    eyebrow: "Resources",
    title: "Kennis en tools die",
    highlight: "direct bruikbaar zijn.",
    intro: "Geen vage thought leadership. Resources moeten zelfstandig waarde leveren, met heldere bron, context en datum.",
    visual: "resources",
  },
  blocks: [
    {
      type: "resources",
      eyebrow: "Bibliotheek",
      title: "Praktische hulpmiddelen voor echte vraagstukken.",
      items: [
        { type: "Checklist", title: "Marketing audit checklist", text: "Strategie, organisatie, kanalen, data en uitvoering in één controle.", status: "In voorbereiding" },
        { type: "Guide", title: "SEO, GEO & AI visibility", text: "Een kader om zichtbaarheid in klassieke en AI gedreven zoekomgevingen te beoordelen.", status: "In voorbereiding" },
        { type: "Scan", title: "PIM readiness scan", text: "Bepaal waar productdata, ownership, kwaliteit en distributie vastlopen.", status: "In voorbereiding" },
        { type: "Framework", title: "Digital product brief", text: "Probleem, gebruiker, scope, resultaat en risico vóór development scherp krijgen.", status: "In voorbereiding" },
      ],
    },
  ],
};

const about: Page = {
  path: "/over",
  metaTitle: "Over Pformance | Strategie, technologie en uitvoering",
  metaDescription: "Pformance helpt organisaties slimmer groeien door strategie, technologie en uitvoering te verbinden.",
  hero: {
    eyebrow: "Over Pformance",
    title: "Waarom we doen",
    highlight: "wat we doen.",
    intro: "Pformance is gebouwd op de overtuiging dat commerciële en digitale vraagstukken pas waarde creëren wanneer richting, systeem en uitvoering samenkomen.",
    primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Merkfundament",
      title: "Purpose, visie, missie en ambitie.",
      columns: 4,
      items: [
        { title: "Purpose", text: "Commerciële en digitale vraagstukken vertalen naar werkende systemen." },
        { title: "Visie", text: "Organisaties helpen slimmer te groeien door strategie, technologie en uitvoering te verbinden." },
        { title: "Missie", text: "Pformance analyseert, ontwerpt, bouwt en activeert oplossingen die echt werken." },
        { title: "Ambitie", text: "Uitgroeien tot een toonaangevende partner op het snijvlak van marketing leadership, digitale productontwikkeling en praktische executie." },
      ],
    },
    {
      type: "quote",
      quote: "Strategisch. Duidelijk. Presteren.",
      source: "Pformance merksignatuur",
    },
    {
      type: "split",
      eyebrow: "Waardepropositie",
      title: "Grip, groei, snelheid, schaalbaarheid en duidelijkheid.",
      text: "We combineren functionele, economische, emotionele en bewijsbare waarde in oplossingen die niet alleen goed bedacht zijn, maar ook aantoonbaar bruikbaar worden.",
      bullets: ["Functioneel: geïntegreerde strategie en uitvoering", "Economisch: rendement verbeteren en kosten verlagen", "Emotioneel: rust, vertrouwen en trots", "Bewijsbaar: data, experimenten en concrete resultaten"],
      tone: "soft",
      visual: "human",
    },
  ],
};

const contact: Page = {
  path: "/contact",
  metaTitle: "Contact | Pformance",
  metaDescription: "Plan een gesprek met Pformance over een commerciële uitdaging, marketing leadership of digitaal systeem.",
  hero: {
    eyebrow: "Contact",
    title: "Laten we het vraagstuk",
    highlight: "scherp krijgen.",
    intro: "Vertel wat er speelt. We beginnen bij context en gewenste impact, niet bij een vooraf bedachte oplossing.",
    visual: "contact",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Kies je ingang",
      title: "Richting nodig of iets bouwen?",
      columns: 2,
      items: [
        { title: "Ik zoek richting of marketing leadership", text: "Voor strategie, interim of fractional leadership en commerciële sturing." },
        { title: "Ik wil een digitaal systeem bouwen", text: "Voor tools, platforms, data, PIM, automatisering en AI toepassingen." },
      ],
    },
    { type: "contact", title: "Plan een eerste gesprek", intro: "Geef genoeg context om het gesprek goed voor te bereiden. Kort en concreet is genoeg." },
  ],
};

export const pages: Page[] = [home, solutions, advisory, build, cases, lab, resources, about, contact];

export function getPage(pathname: string) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return pages.find((page) => page.path === normalized) ?? home;
}
