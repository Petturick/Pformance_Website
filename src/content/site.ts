export type Action = { label: string; href: string; style?: "primary" | "secondary" | "ghost" };
export type Feature = { title: string; text: string; eyebrow?: string; href?: string };
export type Step = { number: string; title: string; text: string };
export type Case = { title: string; sector: string; challenge: string; publication: string; status?: string; href?: string };
export type Resource = { type: string; title: string; text: string; status: string; href?: string };

export type Block =
  | { type: "features"; eyebrow?: string; title: string; intro?: string; columns?: 2 | 3 | 4; items: Feature[] }
  | { type: "process"; eyebrow?: string; title: string; intro?: string; steps: Step[] }
  | { type: "cases"; eyebrow?: string; title: string; intro?: string; items: Case[]; action?: Action }
  | { type: "resources"; eyebrow?: string; title: string; intro?: string; items: Resource[] }
  | { type: "split"; eyebrow?: string; title: string; text: string; bullets?: string[]; action?: Action; tone?: "light" | "soft" | "dark"; visual?: "orbit" | "product" | "human" }
  | { type: "quote"; quote: string; source?: string }
  | { type: "cta"; title: string; text: string; primary: Action; secondary?: Action }
  | { type: "contact"; title: string; intro: string };

export type Page = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow?: string;
    title: string;
    highlight?: string;
    intro: string;
    primary?: Action;
    secondary?: Action;
    visual?: "orbit" | "product" | "cases" | "resources" | "contact";
  };
  blocks: Block[];
};

export const navItems = [
  { label: "Advisory", href: "/advisory" },
  { label: "Build", href: "/build" },
  { label: "Klantcases", href: "/klantcases" },
  { label: "Lab", href: "/lab" },
  { label: "Resources", href: "/resources" },
  { label: "Over", href: "/over" },
  { label: "Contact", href: "/contact" },
];

export const casePlaceholders: Case[] = [
  {
    title: "Productdata & PIM",
    sector: "Referentiecase",
    challenge: "Van versnipperde productinformatie naar één beheersbare bron voor content en commerce.",
    publication: "Klantnaam, aanpak en resultaten volgen pas na validatie en toestemming.",
    status: "Case in voorbereiding",
  },
  {
    title: "Pricing intelligence",
    sector: "Referentiecase",
    challenge: "Van handmatig prijs- en concurrentieonderzoek naar een schaalbaar beslissysteem.",
    publication: "Klantnaam, aanpak en resultaten volgen pas na validatie en toestemming.",
    status: "Case in voorbereiding",
  },
  {
    title: "Digitale onboarding",
    sector: "Referentiecase",
    challenge: "Van losse documenten en kennis naar een gestructureerde onboardingervaring.",
    publication: "Klantnaam, aanpak en resultaten volgen pas na validatie en toestemming.",
    status: "Case in voorbereiding",
  },
];

const home: Page = {
  path: "/",
  metaTitle: "Pformance | Van commerciële uitdaging naar werkende oplossing",
  metaDescription: "Pformance combineert marketing leadership, digitale productontwikkeling en praktische uitvoering in oplossingen die werken.",
  hero: {
    eyebrow: "Strategie. Technologie. Impact.",
    title: "Van commerciële uitdaging naar",
    highlight: "werkende oplossing.",
    intro: "Pformance brengt marketing leadership, digitale productontwikkeling en praktische uitvoering samen in één heldere lijn.",
    primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
    secondary: { label: "Bekijk klantcases", href: "/klantcases", style: "secondary" },
    visual: "orbit",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Waar Pformance waarde toevoegt",
      title: "Vier duidelijke ingangen. Eén manier van werken.",
      columns: 4,
      items: [
        { eyebrow: "Advisory", title: "Marketing leadership", text: "Richting, interim leadership en een marketingorganisatie die beter presteert.", href: "/advisory" },
        { eyebrow: "Build", title: "Digitale oplossingen", text: "Tools, platforms, dashboards en automatisering die concrete problemen oplossen.", href: "/build" },
        { eyebrow: "Lab", title: "Producten & experimenten", text: "Nieuwe concepten klein testen voordat ze groter worden gemaakt.", href: "/lab" },
        { eyebrow: "Resources", title: "Praktische kennis", text: "Guides, checklists en tools die zelfstandig waarde bieden.", href: "/resources" },
      ],
    },
    {
      type: "cases",
      eyebrow: "Klantcases",
      title: "Bewijs boven belofte.",
      intro: "Referentiecases krijgen een vaste plek met uitdaging, aanpak, resultaat en bewijs. Geen opgeblazen claims.",
      items: casePlaceholders,
      action: { label: "Naar alle klantcases", href: "/klantcases", style: "ghost" },
    },
    {
      type: "process",
      eyebrow: "Werkwijze",
      title: "Van vraagstuk naar resultaat in vier stappen.",
      steps: [
        { number: "01", title: "Inzicht", text: "We maken context, probleem en prioriteiten scherp." },
        { number: "02", title: "Richting", text: "We kiezen strategie, scope en gewenste uitkomst." },
        { number: "03", title: "Realisatie", text: "We ontwerpen, bouwen of organiseren wat nodig is." },
        { number: "04", title: "Verbeteren", text: "We meten, leren en verbeteren gericht." },
      ],
    },
    {
      type: "split",
      eyebrow: "Positionering",
      title: "Geen traditioneel bureau. Geen puur softwarebedrijf.",
      text: "De kracht zit in de combinatie van senior strategie, technisch maakvermogen en praktische uitvoering.",
      bullets: ["Strategisch en direct", "Technisch waar het waarde toevoegt", "Praktisch genoeg om echt te implementeren"],
      action: { label: "Lees over Pformance", href: "/over", style: "ghost" },
      tone: "soft",
      visual: "orbit",
    },
    {
      type: "cta",
      title: "Heb je een commercieel of digitaal vraagstuk dat moet bewegen?",
      text: "Een eerste gesprek is bedoeld om het probleem scherper te maken, niet om je door een verkoopfunnel te trekken.",
      primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
      secondary: { label: "Bekijk klantcases", href: "/klantcases", style: "secondary" },
    },
  ],
};

const advisory: Page = {
  path: "/advisory",
  metaTitle: "Advisory | Pformance",
  metaDescription: "Marketing leadership, strategie en organisatiekracht voor bedrijven die scherper willen kiezen en beter willen uitvoeren.",
  hero: {
    eyebrow: "Advisory",
    title: "Marketing leadership dat",
    highlight: "richting geeft.",
    intro: "Voor organisaties die senior marketingkracht nodig hebben om focus aan te brengen en uitvoering te versnellen.",
    primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
    secondary: { label: "Bekijk klantcases", href: "/klantcases", style: "secondary" },
    visual: "orbit",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Waar we bij helpen",
      title: "Richting, structuur en uitvoerbaarheid.",
      columns: 2,
      items: [
        { title: "Interim Marketing Management", text: "Tijdelijk senior leiderschap voor prioriteiten, team, planning en resultaat." },
        { title: "Strategie & positionering", text: "Van ambities naar duidelijke keuzes, proposities en marktprioriteiten." },
        { title: "E-commerce, SEO, GEO & AI visibility", text: "Vindbaarheid en digitale groei als één samenhangend commercieel systeem." },
        { title: "Marketing operating model", text: "Rollen, ritme, tooling, KPI's en besluitvorming zo inrichten dat uitvoering beter wordt." },
      ],
    },
    {
      type: "process",
      eyebrow: "Aanpak",
      title: "Geen dik strategiedocument. Een werkend ritme.",
      steps: [
        { number: "01", title: "Diagnose", text: "We brengen doelen, markt, team en belemmeringen terug tot de kern." },
        { number: "02", title: "Keuzes", text: "We prioriteren wat nu het meeste effect heeft." },
        { number: "03", title: "Plan", text: "We vertalen strategie naar eigenaarschap, ritme en concrete acties." },
        { number: "04", title: "Sturing", text: "We begeleiden uitvoering, maken voortgang zichtbaar en sturen bij." },
      ],
    },
    {
      type: "split",
      eyebrow: "Wanneer Advisory past",
      title: "Als er genoeg ideeën zijn, maar te weinig richting.",
      text: "Advisory past wanneer commerciële groei, marketingorganisatie of digitale ontwikkeling moet versnellen zonder direct een extra managementlaag op te bouwen.",
      bullets: ["Tijdelijke marketing leadership", "Strategische herpositionering", "Opschalen van team en operatie", "Scherper sturen op commerciële impact"],
      action: { label: "Bespreek jouw situatie", href: "/contact", style: "primary" },
      tone: "soft",
      visual: "human",
    },
    {
      type: "cta",
      title: "Marketing moet richting geven, niet meer ruis toevoegen.",
      text: "We beginnen bij de keuzes die het verschil maken voor markt, team en resultaat.",
      primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const build: Page = {
  path: "/build",
  metaTitle: "Build | Pformance",
  metaDescription: "Digitale producten, tools, dashboards, PIM oplossingen, automatisering en integraties die concrete bedrijfsproblemen oplossen.",
  hero: {
    eyebrow: "Build",
    title: "Digitale oplossingen die werken voor",
    highlight: "gebruikers én business.",
    intro: "We starten niet bij technologie. We starten bij het probleem en bouwen alleen wat aantoonbaar waarde toevoegt.",
    primary: { label: "Bespreek een oplossing", href: "/contact", style: "primary" },
    secondary: { label: "Bekijk klantcases", href: "/klantcases", style: "secondary" },
    visual: "product",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Wat we bouwen",
      title: "Digitale bouwkracht met commerciële context.",
      columns: 3,
      items: [
        { title: "Webapps & platforms", text: "Digitale omgevingen voor processen, klanten, teams en proposities." },
        { title: "Dashboards & tools", text: "Informatie en beslissingen samenbrengen in één bruikbare interface." },
        { title: "PIM & productdata", text: "Productinformatie structureren, verrijken en bruikbaar maken voor meerdere kanalen." },
        { title: "Automatisering", text: "Handwerk terugbrengen door processen en data logisch te verbinden." },
        { title: "Integraties", text: "Koppelingen tussen commerce, data, CRM, ERP en andere bedrijfssystemen." },
        { title: "AI toepassingen", text: "AI alleen inzetten waar kwaliteit, snelheid of besluitvorming aantoonbaar verbetert." },
      ],
    },
    {
      type: "process",
      eyebrow: "Productaanpak",
      title: "Klein beginnen. Goed valideren. Gericht opschalen.",
      steps: [
        { number: "01", title: "Probleem", text: "We definiëren gebruiker, behoefte en gewenste uitkomst." },
        { number: "02", title: "Ontwerp", text: "We maken flow, informatie en oplossing concreet." },
        { number: "03", title: "Bouw", text: "We realiseren een onderhoudbare oplossing met duidelijke scope." },
        { number: "04", title: "Optimalisatie", text: "We leren van gebruik, data en feedback en verbeteren gericht." },
      ],
    },
    {
      type: "cases",
      eyebrow: "Relevant werk",
      title: "Van systeemvraagstuk naar werkende toepassing.",
      items: casePlaceholders,
      action: { label: "Bekijk klantcases", href: "/klantcases", style: "ghost" },
    },
    {
      type: "split",
      eyebrow: "Bouwprincipe",
      title: "Technologie is middel, geen verhaal.",
      text: "De juiste oplossing kan een kleine interne tool zijn of een schaalbaar platform. De architectuur volgt de behoefte, niet andersom.",
      bullets: ["Heldere scope", "Eenvoudige interfaces", "Beheersbare techniek", "Ruimte om later te groeien"],
      tone: "dark",
      visual: "product",
    },
    {
      type: "cta",
      title: "Heb je een proces, tool of platform dat beter moet?",
      text: "We brengen eerst het probleem terug tot de kern en bepalen daarna wat er daadwerkelijk gebouwd moet worden.",
      primary: { label: "Bespreek de oplossing", href: "/contact", style: "primary" },
    },
  ],
};

const cases: Page = {
  path: "/klantcases",
  metaTitle: "Klantcases | Pformance",
  metaDescription: "Referentiecases van Pformance met uitdaging, aanpak, resultaat en bewijs per opdracht.",
  hero: {
    eyebrow: "Klantcases",
    title: "Bewijs boven",
    highlight: "belofte.",
    intro: "Hier komen de referentiecases van Pformance, opgebouwd rond echte vraagstukken en gevalideerde resultaten.",
    primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
    visual: "cases",
  },
  blocks: [
    {
      type: "split",
      eyebrow: "Case standaard",
      title: "Elke referentiecase moet iets bewijzen.",
      text: "Geen losse portfoliofoto's of vage klantlogo's. Een case laat zien wat het probleem was, welke keuzes zijn gemaakt, wat is veranderd en welk resultaat aantoonbaar is.",
      bullets: ["Context & uitdaging", "Aanpak & belangrijkste keuzes", "Oplossing & uitvoering", "Resultaat & bewijs", "Klantquote alleen met toestemming"],
      tone: "soft",
      visual: "orbit",
    },
    {
      type: "cases",
      eyebrow: "Referentiecases",
      title: "De casebibliotheek wordt nu opgebouwd.",
      intro: "De huidige posities zijn bewust nog niet gekoppeld aan klantnamen of prestaties. Die worden pas gepubliceerd na inhoudelijke validatie en toestemming.",
      items: casePlaceholders,
    },
    {
      type: "features",
      eyebrow: "Structuur",
      title: "Klantcases blijven overzichtelijk wanneer het aantal groeit.",
      columns: 3,
      items: [
        { title: "Advisory", text: "Strategie, marketing leadership, organisatie en commerciële groei." },
        { title: "Build", text: "Platforms, tools, automatisering, PIM en digitale productontwikkeling." },
        { title: "Combinatie", text: "Cases waarin strategie en realisatie één doorlopende opdracht vormen." },
      ],
    },
    {
      type: "cta",
      title: "Een vergelijkbaar vraagstuk?",
      text: "Gebruik de cases als bewijs van aanpak, maar bespreek vooral wat jouw organisatie nodig heeft.",
      primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
      secondary: { label: "Bekijk Build", href: "/build", style: "secondary" },
    },
  ],
};

const lab: Page = {
  path: "/lab",
  metaTitle: "Lab | Pformance",
  metaDescription: "Pformance Lab ontwikkelt en valideert eigen producten, prototypes en experimenten voordat ze groter worden gemaakt.",
  hero: {
    eyebrow: "Pformance Lab",
    title: "Experimenteren. Valideren.",
    highlight: "Bouwen.",
    intro: "Lab is de plek waar Pformance eigen producten en nieuwe ideeën klein test, verbetert en doorontwikkelt.",
    visual: "orbit",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Eigen producten",
      title: "Van intern probleem naar herhaalbare oplossing.",
      columns: 3,
      items: [
        { eyebrow: "Pformance Lab product", title: "Syntrx", text: "Een productinformatieconcept voor het structureren, verrijken en beheren van productdata." },
        { eyebrow: "Pformance Lab product", title: "PricingTool", text: "Een prijs- en concurrentieconcept voor het samenbrengen van marktdata en beslissingen." },
        { eyebrow: "Pformance Lab product", title: "Onboarding Platform", text: "Een digitale omgeving voor gestructureerde onboarding, kennis en voortgang." },
      ],
    },
    {
      type: "process",
      eyebrow: "Lab methode",
      title: "Eerst aannames testen, daarna investeren.",
      steps: [
        { number: "01", title: "Signaal", text: "Een terugkerend probleem of kans wordt scherp geformuleerd." },
        { number: "02", title: "Prototype", text: "We maken de kleinste versie die de kern van het idee kan toetsen." },
        { number: "03", title: "Validatie", text: "Gebruik en feedback bepalen of het concept waarde creëert." },
        { number: "04", title: "Product", text: "Alleen bewezen concepten krijgen meer productontwikkeling en schaal." },
      ],
    },
    {
      type: "split",
      eyebrow: "Waarom Lab bestaat",
      title: "Pformance moet kunnen bewijzen dat het zelf kan bouwen.",
      text: "Lab is geen los submerk. Het is de product- en experimenteerruimte binnen Pformance, met dezelfde visuele taal en kwaliteitslat.",
      tone: "dark",
      visual: "product",
    },
    {
      type: "cta",
      title: "Een idee dat het testen waard is?",
      text: "We kunnen een concept klein maken, valideren en pas daarna beslissen wat de volgende investering moet zijn.",
      primary: { label: "Bespreek een experiment", href: "/contact", style: "primary" },
    },
  ],
};

const resources: Page = {
  path: "/resources",
  metaTitle: "Resources | Pformance",
  metaDescription: "Praktische guides, checklists, templates en tools voor marketing, digitale producten en commerciële groei.",
  hero: {
    eyebrow: "Resources",
    title: "Kennis en tools die je",
    highlight: "verder helpen.",
    intro: "Resources moeten zelfstandig waarde bieden. Praktisch, compact en direct bruikbaar zonder onnodige leadfunnel.",
    visual: "resources",
  },
  blocks: [
    {
      type: "resources",
      eyebrow: "In voorbereiding",
      title: "Een groeiende bibliotheek van bruikbare hulpmiddelen.",
      items: [
        { type: "Checklist", title: "Marketing audit checklist", text: "Controle op strategie, kanalen, organisatie, data en uitvoering.", status: "In voorbereiding" },
        { type: "Guide", title: "SEO, GEO & AI visibility", text: "Een kader om vindbaarheid te beoordelen over klassieke en AI-gedreven zoekervaringen.", status: "In voorbereiding" },
        { type: "Template", title: "PIM readiness scan", text: "Een scan om te bepalen waar productdata, ownership en distributie vastlopen.", status: "In voorbereiding" },
        { type: "Framework", title: "Digital product brief", text: "Probleem, gebruiker, scope, resultaat en risico vóór development scherp krijgen.", status: "In voorbereiding" },
      ],
    },
    {
      type: "split",
      eyebrow: "Resource principe",
      title: "Eerst waarde leveren, daarna pas om contact vragen.",
      text: "Een guide of tool moet nuttig zijn zonder verkooppraat. Wanneer verdieping nodig is, is contact de logische volgende stap.",
      bullets: ["Concrete inhoud", "Geen vage thought leadership", "Heldere bron en datum", "Regelmatig actualiseren"],
      tone: "soft",
      visual: "orbit",
    },
    {
      type: "cta",
      title: "Mis je een praktisch hulpmiddel?",
      text: "Vertel welk vraagstuk je regelmatig tegenkomt. Goede resources beginnen bij echte frictie.",
      primary: { label: "Deel een vraagstuk", href: "/contact", style: "primary" },
    },
  ],
};

const about: Page = {
  path: "/over",
  metaTitle: "Over Pformance",
  metaDescription: "Pformance verbindt strategisch denken met digitale productontwikkeling en praktische uitvoering.",
  hero: {
    eyebrow: "Over Pformance",
    title: "Strategisch genoeg om te kiezen.",
    highlight: "Praktisch genoeg om te bouwen.",
    intro: "Pformance is ontworpen rond één gedachte: advies heeft pas waarde wanneer het leidt tot betere keuzes en werkende uitvoering.",
    primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
    visual: "orbit",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Merkfundament",
      title: "Vier eigenschappen sturen hoe Pformance werkt.",
      columns: 4,
      items: [
        { title: "Strategisch", text: "Complexiteit structureren en keuzes expliciet maken." },
        { title: "Duidelijk", text: "Geen jargon om indruk te maken. Schrijven en ontwerpen voor begrip." },
        { title: "Praktisch", text: "Ideeën vertalen naar concrete stappen, systemen en resultaat." },
        { title: "Vooruitkijkend", text: "Technologie inzetten wanneer die aantoonbaar nieuwe waarde creëert." },
      ],
    },
    {
      type: "split",
      eyebrow: "Positionering",
      title: "Strategie, technologie en uitvoering in één aanpak.",
      text: "Pformance kan niet alleen adviseren wat er moet gebeuren, maar ook helpen om het daadwerkelijk te realiseren.",
      bullets: ["Advisory voor richting en leadership", "Build voor digitale realisatie", "Lab voor eigen producten en experimenten", "Resources voor kennis en hulpmiddelen"],
      tone: "soft",
      visual: "orbit",
    },
    { type: "quote", quote: "Zeg wat het is. Laat zien dat het werkt.", source: "Pformance brand principle" },
    {
      type: "cta",
      title: "De beste eerste stap is meestal een scherp gesprek.",
      text: "We brengen het vraagstuk terug tot de kern en bepalen daarna welke route logisch is.",
      primary: { label: "Plan gesprek", href: "/contact", style: "primary" },
    },
  ],
};

const contact: Page = {
  path: "/contact",
  metaTitle: "Contact | Pformance",
  metaDescription: "Bespreek een marketing leadership, digitaal product of commercieel vraagstuk met Pformance.",
  hero: {
    eyebrow: "Contact",
    title: "Laten we het vraagstuk",
    highlight: "scherp krijgen.",
    intro: "Vertel kort wat er speelt. De eerste stap is bepalen wat het echte probleem is en welke route logisch volgt.",
    visual: "contact",
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Kies je ingang",
      title: "Twee routes, één gesprek.",
      columns: 2,
      items: [
        { title: "Ik zoek marketing leadership", text: "Voor strategie, interim management, commerciële richting of het professionaliseren van marketing." },
        { title: "Ik wil iets laten bouwen", text: "Voor een tool, platform, dashboard, PIM oplossing, automatisering of digitaal product." },
      ],
    },
    { type: "contact", title: "Plan een eerste gesprek", intro: "Het formulier is bewust kort. Geef genoeg context om het gesprek goed te kunnen voorbereiden." },
  ],
};

export const pages: Page[] = [home, advisory, build, cases, lab, resources, about, contact];

export function getPage(pathname: string) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return pages.find((page) => page.path === normalized) ?? home;
}
