/**
 * Resources: knowledge and lead generation area.
 *
 * NOTE: This area is not live yet. All entries below describe planned resources.
 * TODO: Add real resources, downloadable files and (where relevant) gated forms.
 */

export type ResourceType =
  "guide" | "template" | "checklist" | "calculator" | "tool";

export type ResourceStatus = "planned" | "in-progress" | "available";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  status: ResourceStatus;
  /** Whether an email address is required to access the resource. */
  gated: boolean;
  /** Set once the resource is available. */
  href?: string;
  topics: string[];
};

export const resourceTypeLabels: Record<ResourceType, string> = {
  guide: "Guide",
  template: "Template",
  checklist: "Checklist",
  calculator: "Calculator",
  tool: "Tool",
};

export const resourceStatusLabels: Record<ResourceStatus, string> = {
  planned: "Gepland",
  "in-progress": "In ontwikkeling",
  available: "Beschikbaar",
};

export const resources: Resource[] = [
  {
    slug: "marketing-audit-checklist",
    title: "Marketing audit checklist",
    // TODO: Add real content
    description:
      "Placeholder: gestructureerde checklist om strategie, kanalen, tooling en organisatie systematisch door te lichten.",
    type: "checklist",
    status: "planned",
    gated: true,
    topics: ["Strategie", "Audit"],
  },
  {
    slug: "martech-stack-template",
    title: "MarTech stack template",
    // TODO: Add real content
    description:
      "Placeholder: template om de huidige marketingstack in kaart te brengen, inclusief kosten, eigenaarschap en overlap.",
    type: "template",
    status: "planned",
    gated: true,
    topics: ["MarTech", "Data"],
  },
  {
    slug: "ai-search-visibility-guide",
    title: "AI search visibility guide",
    // TODO: Add real content
    description:
      "Placeholder: praktische guide over zichtbaarheid in AI-assistenten en generatieve zoekervaringen, naast klassieke SEO.",
    type: "guide",
    status: "in-progress",
    gated: false,
    topics: ["SEO", "GEO", "AI"],
  },
  {
    slug: "build-vs-buy-calculator",
    title: "Build versus buy calculator",
    // TODO: Add real content
    description:
      "Placeholder: rekenmodel om zelf bouwen af te wegen tegen een bestaande oplossing, inclusief beheerkosten over meerdere jaren.",
    type: "calculator",
    status: "planned",
    gated: false,
    topics: ["Digitale strategie", "Build"],
  },
  {
    slug: "product-data-quality-scan",
    title: "Productdata kwaliteitsscan",
    // TODO: Add real content
    description:
      "Placeholder: gratis tool die een productfeed beoordeelt op volledigheid, consistentie en kanaalgeschiktheid.",
    type: "tool",
    status: "planned",
    gated: false,
    topics: ["PIM", "Ecommerce"],
  },
  {
    slug: "fractional-marketing-lead-guide",
    title: "Fractional marketing leadership guide",
    // TODO: Add real content
    description:
      "Placeholder: wanneer fractional leadership werkt, hoe je de rol inricht en hoe je resultaat afspreekt.",
    type: "guide",
    status: "planned",
    gated: true,
    topics: ["Leadership", "Organisatie"],
  },
];

export function getFeaturedResources(limit = 3): Resource[] {
  const order: Record<ResourceStatus, number> = {
    available: 0,
    "in-progress": 1,
    planned: 2,
  };
  return [...resources]
    .sort((a, b) => order[a.status] - order[b.status])
    .slice(0, limit);
}

export function getResourcesByType(type: ResourceType): Resource[] {
  return resources.filter((resource) => resource.type === type);
}
