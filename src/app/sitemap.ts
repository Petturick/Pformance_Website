import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/data/lab";
import { siteConfig } from "@/data/site";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/advisory", changeFrequency: "monthly", priority: 0.9 },
  { path: "/build", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lab", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projects: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: new URL(`/lab/${slug}`, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...projects];
}
