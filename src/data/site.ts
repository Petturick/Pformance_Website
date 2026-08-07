/**
 * Central site configuration.
 * Values that appear across metadata, navigation, footer and structured data.
 */

export const siteConfig = {
  name: "Pformance",
  legalName: "Pformance B.V.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.prformance.nl",
  locale: "nl_NL",
  lang: "nl",
  tagline: "Van commerciële uitdaging naar werkende oplossing.",
  description:
    "Pformance verbindt marketing leadership, digitale productontwikkeling en praktische uitvoering. Van commerciële uitdaging naar werkende oplossing.",
  // Add confirmed public contact channels before launch.
  email: "",
  phone: "",
  country: "Nederland",
  social: {
    linkedin: "",
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  {
    href: "/advisory",
    label: "Advisory",
    description: "Strategisch marketing leadership en digitale strategie.",
  },
  {
    href: "/build",
    label: "Build",
    description: "Software, tools en digitale oplossingen die werken.",
  },
  {
    href: "/lab",
    label: "Lab",
    description: "Producten en prototypes gebouwd door Pformance.",
  },
  {
    href: "/resources",
    label: "Resources",
    description: "Guides, templates, checklists en praktische tools.",
  },
  {
    href: "/about",
    label: "Over Pformance",
    description: "Waarom Pformance bestaat en hoe we werken.",
  },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Pformance",
    items: [
      { href: "/advisory", label: "Advisory" },
      { href: "/build", label: "Build" },
      { href: "/lab", label: "Pformance Lab" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Expertise",
    items: [
      { href: "/advisory", label: "Marketing leadership" },
      { href: "/advisory", label: "SEO, GEO en AI visibility" },
      { href: "/build", label: "Software en automatisering" },
      { href: "/build", label: "PIM en digitale tools" },
    ],
  },
  {
    title: "Bedrijf",
    items: [
      { href: "/about", label: "Over Pformance" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export const ctas = {
  advisory: {
    label: "Ik zoek marketing leadership",
    href: "/contact?intent=advisory",
  },
  build: {
    label: "Ik wil een digitale oplossing bouwen",
    href: "/contact?intent=build",
  },
} as const;
