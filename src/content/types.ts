export type Action = { label: string; href: string; style?: "primary" | "secondary" | "ghost" };
export type Feature = { title: string; text: string; eyebrow?: string; href?: string };
export type Step = { number: string; title: string; text: string };
export type Case = { title: string; sector: string; challenge: string; publication: string; status?: string; href?: string; imageUrl?: string };
export type Resource = { type: string; title: string; text: string; status: string; href?: string };

export type Block =
  | { type: "features"; eyebrow?: string; title: string; intro?: string; columns?: 2 | 3 | 4; items: Feature[] }
  | { type: "process"; eyebrow?: string; title: string; intro?: string; steps: Step[] }
  | { type: "cases"; eyebrow?: string; title: string; intro?: string; items: Case[]; action?: Action }
  | { type: "resources"; eyebrow?: string; title: string; intro?: string; items: Resource[] }
  | { type: "split"; eyebrow?: string; title: string; text: string; bullets?: string[]; action?: Action; tone?: "light" | "soft" | "dark"; visual?: "orbit" | "product" | "human"; mediaUrl?: string }
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
    mediaUrl?: string;
  };
  blocks: Block[];
};
