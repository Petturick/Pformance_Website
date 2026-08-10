import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageBlocks, { PageHero } from "./components/PageBlocks";
import { getPage } from "./content/site";
import { absoluteUrl, siteConfig } from "./config/site";

function upsertNamedMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertPropertyMeta(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertOrganizationData() {
  const id = "pformance-organization-schema";
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    identifier: [
      { "@type": "PropertyValue", name: "KVK", value: siteConfig.chamberOfCommerce },
      { "@type": "PropertyValue", name: "BTW", value: siteConfig.vatNumber },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: "NL",
    },
  });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname || "/");
  const page = useMemo(() => getPage(currentPath), [currentPath]);

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname || "/");
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    const canonical = absoluteUrl(page.path);
    document.title = page.metaTitle;
    document.documentElement.lang = "nl";

    upsertNamedMeta("description", page.metaDescription);
    upsertNamedMeta("robots", "index, follow");
    upsertPropertyMeta("og:type", "website");
    upsertPropertyMeta("og:site_name", siteConfig.name);
    upsertPropertyMeta("og:title", page.metaTitle);
    upsertPropertyMeta("og:description", page.metaDescription);
    upsertPropertyMeta("og:url", canonical);
    upsertCanonical(canonical);
    upsertOrganizationData();
  }, [page]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page.path]);

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Naar inhoud</a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentPath={page.path} />
      <main id="main-content">
        <PageHero page={page} />
        <PageBlocks blocks={page.blocks} pagePath={page.path} />
      </main>
      <Footer />
    </div>
  );
}
