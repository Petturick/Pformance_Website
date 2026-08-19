import type { Case, Page } from "./types";

export const casePlaceholders: Case[] = [
  {
    title: "Syntrx implementatie",
    sector: "Syntrx",
    challenge: "Van versnipperde productdata naar één centrale bron.",
    publication: "Productdata, markten en distributie samenbrengen in één beheersbaar systeem.",
    href: "/producten/syntrx",
  },
  {
    title: "Onboarding in de praktijk",
    sector: "OnboardTool",
    challenge: "Nieuwe medewerkers sneller en beter laten starten.",
    publication: "Onboarding, voortgang en kennisoverdracht samenbrengen in één omgeving.",
    href: "/producten/onboardtool",
  },
];

const home: Page = {
  path: "/",
  metaTitle: "Pformance | Van commercieel probleem naar werkend systeem",
  metaDescription: "Pformance verbindt strategie, technologie en uitvoering en bouwt werkende commerciële systemen en softwareproducten.",
  hero: {
    eyebrow: "Strategie. Technologie. Resultaat.",
    title: "Van commercieel probleem naar",
    highlight: "werkend systeem.",
    intro: "Pformance verbindt strategie, technologie en uitvoering. We bouwen digitale systemen die processen verbeteren en groei versnellen.",
    primary: { label: "Bespreek een vraagstuk", href: "/contact", style: "primary" },
    secondary: { label: "Bekijk onze producten", href: "/producten", style: "secondary" },
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Onze kracht",
      title: "Strategie. Technologie. Uitvoering.",
      columns: 3,
      items: [
        { title: "Richting bepalen", text: "We brengen focus in strategie en commerciële keuzes." },
        { title: "Slimme systemen", text: "We bouwen technologie die processen eenvoudiger maakt." },
        { title: "Groei realiseren", text: "We verbeteren continu op basis van data en gebruik." },
      ],
    },
    {
      type: "split",
      eyebrow: "Onze producten",
      title: "Syntrx",
      text: "Productdata onder controle, van bron tot verkoopkanaal.",
      bullets: ["Centraal productdatabeheer", "Distributie naar markten en kanalen", "Schaalbaar voor groei"],
      action: { label: "Bekijk Syntrx", href: "/producten/syntrx", style: "primary" },
      tone: "dark",
      visual: "product",
    },
    {
      type: "split",
      title: "OnboardTool",
      text: "Onboarding die niet eindigt bij een welkomstmail.",
      bullets: ["Centrale onboardingomgeving", "Voortgang en ontwikkeling", "Kennisoverdracht en betrokkenheid"],
      action: { label: "Bekijk OnboardTool", href: "/producten/onboardtool", style: "primary" },
      tone: "light",
      visual: "product",
    },
    {
      type: "cases",
      eyebrow: "Uit de praktijk",
      title: "Oplossingen die impact maken.",
      items: casePlaceholders,
      action: { label: "Bekijk cases", href: "/cases", style: "ghost" },
    },
    {
      type: "cta",
      title: "Heb je een commercieel probleem dat niet met nóg een losse tool wordt opgelost?",
      text: "Laten we het vraagstuk scherp krijgen.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const solutions: Page = {
  path: "/oplossingen",
  metaTitle: "Oplossingen | Pformance",
  metaDescription: "Kies de Pformance route voor commerciële groei, slimme processen of maatwerksoftware.",
  hero: {
    eyebrow: "Oplossingen",
    title: "Wat moet er",
    highlight: "beter werken?",
    intro: "Kies het gebied dat past bij jouw uitdaging.",
    primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      title: "Drie routes naar resultaat.",
      columns: 3,
      items: [
        { title: "Groei en strategie", text: "Positionering, marketing leadership en commerciële richting." },
        { title: "Processen en technologie", text: "Automatiseren, integreren en slimmer werken met data." },
        { title: "Software bouwen", text: "Maatwerksoftware en platforms die precies passen bij de organisatie." },
      ],
    },
    {
      type: "cta",
      title: "Niet zeker waar te beginnen?",
      text: "Wij denken graag met je mee.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const products: Page = {
  path: "/producten",
  metaTitle: "Producten | Pformance",
  metaDescription: "Ontdek Syntrx en OnboardTool, softwareproducten van Pformance gebouwd vanuit echte praktijkproblemen.",
  hero: {
    eyebrow: "Producten",
    title: "Software gebouwd vanuit",
    highlight: "echte praktijkproblemen.",
    intro: "Twee krachtige producten. Eén missie, commerciële processen slimmer en eenvoudiger maken.",
    visual: "product",
  },
  blocks: [
    {
      type: "split",
      title: "Syntrx",
      text: "Productdata onder controle, van bron tot verkoopkanaal.",
      bullets: ["Centraal productinformatiemanagement", "Flexibele distributie per kanaal", "Schaalbaar en toekomstbestendig"],
      action: { label: "Bekijk Syntrx", href: "/producten/syntrx", style: "primary" },
      tone: "dark",
      visual: "product",
    },
    {
      type: "split",
      title: "OnboardTool",
      text: "Onboarding die niet eindigt bij een welkomstmail.",
      bullets: ["Centrale onboardingomgeving", "Ontwikkeling en voortgang", "Kennisdeling en betrokkenheid"],
      action: { label: "Bekijk OnboardTool", href: "/producten/onboardtool", style: "primary" },
      tone: "light",
      visual: "product",
    },
    {
      type: "cta",
      title: "Benieuwd wat deze producten voor jouw organisatie kunnen betekenen?",
      text: "We laten graag zien waar de beste fit zit.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const syntrx: Page = {
  path: "/producten/syntrx",
  metaTitle: "Syntrx | Pformance",
  metaDescription: "Syntrx brengt productdata, markten en distributie samen in één centraal productinformatiesysteem.",
  hero: {
    eyebrow: "Producten / Syntrx",
    title: "Syntrx",
    highlight: "Productdata onder controle.",
    intro: "Beheer, verrijk en distribueer productinformatie vanuit één centrale bron.",
    primary: { label: "Bekijk Syntrx", href: "https://syntrx.eu", style: "primary" },
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      title: "Van bron tot verkoopkanaal.",
      columns: 3,
      items: [
        { title: "Eén centrale bron", text: "Productinformatie op één plek beheren en verrijken." },
        { title: "Grip op distributie", text: "Bepaal per markt en kanaal welke data wordt gepubliceerd." },
        { title: "Schaalbaar beheer", text: "Groeien zonder meer versnippering of handmatig werk." },
      ],
    },
    {
      type: "cta",
      title: "Meer weten over Syntrx?",
      text: "Bekijk het product of plan een persoonlijke demo.",
      primary: { label: "Naar Syntrx", href: "https://syntrx.eu", style: "primary" },
      secondary: { label: "Plan een gesprek", href: "/contact", style: "secondary" },
    },
  ],
};

const onboardTool: Page = {
  path: "/producten/onboardtool",
  metaTitle: "OnboardTool | Pformance",
  metaDescription: "OnboardTool brengt onboarding, voortgang, ontwikkeling en kennisoverdracht samen in één omgeving.",
  hero: {
    eyebrow: "Producten / OnboardTool",
    title: "OnboardTool",
    highlight: "Onboarding die doorloopt.",
    intro: "Een centrale omgeving voor onboarding, ontwikkeling, voortgang en kennisoverdracht.",
    primary: { label: "Bekijk OnboardTool", href: "https://www.onboardtool.com", style: "primary" },
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      title: "Een betere start, zichtbaar gemaakt.",
      columns: 3,
      items: [
        { title: "Centrale onboarding", text: "Taken, informatie en verwachtingen in één duidelijke route." },
        { title: "Voortgang in beeld", text: "Zie waar iemand staat en wat de volgende stap is." },
        { title: "Kennis die blijft", text: "Maak overdracht en ontwikkeling onderdeel van het proces." },
      ],
    },
    {
      type: "cta",
      title: "Meer weten over OnboardTool?",
      text: "Bekijk het product of plan een persoonlijke demo.",
      primary: { label: "Naar OnboardTool", href: "https://www.onboardtool.com", style: "primary" },
      secondary: { label: "Plan een gesprek", href: "/contact", style: "secondary" },
    },
  ],
};

const cases: Page = {
  path: "/cases",
  metaTitle: "Cases | Pformance",
  metaDescription: "Bekijk hoe Pformance strategie, technologie en uitvoering vertaalt naar werkende oplossingen.",
  hero: {
    eyebrow: "Cases",
    title: "Bewijs boven",
    highlight: "belofte.",
    intro: "Echte projecten. Echte impact.",
    visual: "cases",
  },
  blocks: [
    {
      type: "cases",
      title: "Uit de praktijk.",
      items: casePlaceholders,
    },
    {
      type: "cta",
      title: "Heb je een vergelijkbare uitdaging?",
      text: "Laten we samen de mogelijkheden bespreken.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const insights: Page = {
  path: "/inzichten",
  metaTitle: "Inzichten | Pformance",
  metaDescription: "Praktische Pformance inzichten over strategie, technologie, data, AI en digitale groei.",
  hero: {
    eyebrow: "Inzichten",
    title: "Kennis die je",
    highlight: "vooruit helpt.",
    intro: "Praktische inzichten over strategie, technologie en digitale groei.",
    visual: "resources",
  },
  blocks: [
    {
      type: "resources",
      title: "Uitgelicht en recent.",
      items: [
        { type: "Strategie", title: "De rol van PIM in een succesvolle commerciële strategie", text: "Waarom productdata steeds meer een commerciële groeifactor wordt.", status: "Artikel" },
        { type: "Automatisering", title: "5 processen die je vandaag kunt verbeteren", text: "Waar automatisering direct rust en schaalbaarheid kan opleveren.", status: "Artikel" },
        { type: "Data & AI", title: "AI in de praktijk, kansen en valkuilen", text: "Waar AI waarde toevoegt en waar menselijke regie nodig blijft.", status: "Artikel" },
      ],
    },
    {
      type: "cta",
      title: "Geen inzicht missen?",
      text: "Volg Pformance voor nieuwe artikelen en praktische updates.",
      primary: { label: "Neem contact op", href: "/contact", style: "primary" },
    },
  ],
};

const about: Page = {
  path: "/over",
  metaTitle: "Over Pformance",
  metaDescription: "Pformance verbindt commerciële strategie, technologie en uitvoering om slimme systemen te bouwen die blijven werken.",
  hero: {
    eyebrow: "Over Pformance",
    title: "Commerciële uitdagingen verdienen",
    highlight: "slimme systemen.",
    intro: "Pformance is de commerciële technologiepartner voor organisaties die willen groeien, veranderen en vooruit willen.",
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      title: "Zo werken we.",
      columns: 3,
      items: [
        { title: "Strategisch partner", text: "We denken mee vóór de vraag achter de vraag." },
        { title: "Technologie die werkt", text: "Geen losse tools, maar systemen die impact maken." },
        { title: "Resultaat gedreven", text: "We bouwen om meetbare verbetering te realiseren." },
      ],
    },
    {
      type: "split",
      eyebrow: "Pformance",
      title: "De brug tussen strategie, technologie en uitvoering.",
      text: "We combineren commerciële denkkracht met het vermogen om digitale oplossingen daadwerkelijk te bouwen.",
      tone: "soft",
      visual: "human",
    },
    {
      type: "cta",
      title: "Laten we kennismaken.",
      text: "We horen graag waar jouw organisatie tegenaan loopt.",
      primary: { label: "Plan een gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const contact: Page = {
  path: "/contact",
  metaTitle: "Contact | Pformance",
  metaDescription: "Bespreek jouw commerciële, digitale of softwarevraagstuk met Pformance.",
  hero: {
    eyebrow: "Contact",
    title: "Laten we het vraagstuk",
    highlight: "scherp krijgen.",
    intro: "Vertel kort wat er speelt. Wij denken mee over de meest logische volgende stap.",
    visual: "contact",
  },
  blocks: [
    { type: "contact", title: "Plan een eerste gesprek", intro: "Kort en concreet is genoeg. Geef vooral aan wat nu niet goed werkt en wat je wilt bereiken." },
  ],
};

export const pages: Page[] = [home, solutions, products, syntrx, onboardTool, cases, insights, about, contact];

export function getPage(pathname: string) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return pages.find((page) => page.path === normalized) ?? home;
}
