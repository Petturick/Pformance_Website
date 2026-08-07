import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/advisory". */
  path: string;
};

/**
 * Builds page metadata with consistent Open Graph and Twitter tags.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
