/**
 * Lab projects: products and prototypes built by Pformance.
 *
 * NOTE: All content below is PLACEHOLDER content and needs review by Pformance.
 * TODO: Add real copy, screenshots and links for every project before launch.
 */

export type ProjectStatus =
  "concept" | "in-development" | "beta" | "live" | "internal";

export type ProjectScreenshot = {
  /** Path under /public, or an absolute URL. */
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  /** Renders with an external-link affordance. */
  external?: boolean;
};

export type LabProject = {
  slug: string;
  title: string;
  /** One-line summary used on cards and in metadata. */
  intro: string;
  /** The commercial or operational problem the product addresses. */
  problem: string;
  /** How the product solves it. */
  solution: string;
  screenshots: ProjectScreenshot[];
  technologies: string[];
  status: ProjectStatus;
  links: ProjectLink[];
  /** Optional public demo environment. */
  demoLink?: ProjectLink;
  cta: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
  /** Marks the project as needing a real content pass. */
  isPlaceholder: boolean;
  featured?: boolean;
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  concept: "Concept",
  "in-development": "In ontwikkeling",
  beta: "Beta",
  live: "Live",
  internal: "Intern",
};

export const labProjects: LabProject[] = [
  {
    slug: "syntrx",
    title: "Syntrx",
    // TODO: Add real content
    intro:
      "Placeholder: platform voor het structureren en verrijken van productdata richting meerdere verkoopkanalen.",
    problem:
      "Placeholder: productdata staat verspreid over spreadsheets, ERP-exports en losse systemen. Kanalen vragen elk een eigen formaat, waardoor teams handmatig blijven corrigeren en fouten pas zichtbaar worden nadat ze live staan.",
    solution:
      "Placeholder: één centraal datamodel met validatieregels, verrijking en kanaalspecifieke uitzendingen. Wijzigingen zijn traceerbaar en fouten worden gesignaleerd voordat data het kanaal bereikt.",
    screenshots: [
      // TODO: Add real screenshots in /public/lab/syntrx/
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    status: "in-development",
    links: [],
    cta: {
      title: "Herkenbaar probleem met productdata?",
      description:
        "We kijken graag mee naar jouw datamodel, kanalen en processen.",
      label: "Plan een kennismaking",
      href: "/contact?intent=build&project=syntrx",
    },
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "pricingtool",
    title: "PricingTool",
    // TODO: Add real content
    intro:
      "Placeholder: applicatie voor prijsstelling, marge-inzicht en gecontroleerde prijsaanpassingen.",
    problem:
      "Placeholder: prijzen worden bepaald in complexe spreadsheets die maar door enkele mensen begrepen worden. Marge-effecten van een prijswijziging zijn vooraf niet inzichtelijk en aanpassingen kosten dagen.",
    solution:
      "Placeholder: een tool waarin prijsregels, kortingsstructuren en marges expliciet zijn gemodelleerd. Scenario's zijn door te rekenen voordat ze worden doorgevoerd, met goedkeuring en historie per wijziging.",
    screenshots: [
      // TODO: Add real screenshots in /public/lab/pricingtool/
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    status: "beta",
    links: [],
    cta: {
      title: "Pricing die vastloopt in spreadsheets?",
      description:
        "We brengen prijsregels, marges en besluitvorming terug naar één plek.",
      label: "Bespreek jouw pricing-vraagstuk",
      href: "/contact?intent=build&project=pricingtool",
    },
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "onboarding-platform",
    title: "Onboarding Platform",
    // TODO: Add real content
    intro:
      "Placeholder: platform voor gestructureerde onboarding van klanten, partners of medewerkers.",
    problem:
      "Placeholder: onboarding verloopt via e-mail, documenten en losse afspraken. Niemand heeft overzicht over de status, en informatie moet meerdere keren worden opgevraagd.",
    solution:
      "Placeholder: een begeleid traject met stappen, taken en documentuploads. Alle betrokkenen zien dezelfde status en herinneringen gaan automatisch uit.",
    screenshots: [
      // TODO: Add real screenshots in /public/lab/onboarding-platform/
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    status: "concept",
    links: [],
    cta: {
      title: "Onboarding die te veel tijd kost?",
      description:
        "We ontwerpen het proces en bouwen de ondersteunende applicatie.",
      label: "Praat over onboarding",
      href: "/contact?intent=build&project=onboarding-platform",
    },
    isPlaceholder: true,
    featured: true,
  },
];

export function getProjectBySlug(slug: string): LabProject | undefined {
  return labProjects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): LabProject[] {
  return labProjects.filter((project) => project.featured).slice(0, limit);
}

export function getProjectSlugs(): string[] {
  return labProjects.map((project) => project.slug);
}
