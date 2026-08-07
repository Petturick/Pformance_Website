/**
 * Central site configuration.
 * Values that appear across metadata, navigation, footer and structured data.
 */

export const siteConfig = {
  name: "Pformance",
  legalName: "Pformance B.V.",
  // TODO: Confirm final production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.prformance.nl",
  locale: "nl_NL",
  lang: "nl",
  tagline: "Van commerciële uitdaging naar werkende oplossing.",
  description:
    "Pformance combineert strategisch marketing leadership, digitale productontwikkeling en praktische executie. Van commerciële uitdaging naar werkende oplossing.",
  // TODO: Replace with real company contact details.
  email: "info@prformance.nl",
  phone: "",
  country: "Nederland",
  social: {
    linkedin: "https://www.linkedin.com/company/pformance",
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
    description: "Digitale producten, tools en integraties die werken.",
  },
  {
    href: "/lab",
    label: "Lab",
    description: "Producten en prototypes gebouwd door Pformance.",
  },
  {
    href: "/resources",
    label: "Resources",
    description: "Guides, templates en tools. Binnenkort beschikbaar.",
  },
  {
    href: "/about",
    label: "Over",
    description: "Waar Pformance voor staat.",
  },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Diensten",
    items: [
      { href: "/advisory", label: "Advisory" },
      { href: "/build", label: "Build" },
      { href: "/lab", label: "Lab" },
    ],
  },
  {
    title: "Kennis",
    items: [
      { href: "/resources", label: "Resources" },
      { href: "/advisory", label: "Marketing audit" },
      { href: "/build", label: "AI-toepassingen" },
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
