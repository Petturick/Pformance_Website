import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageBlocks, { PageHero } from "./components/PageBlocks";
import { getPage } from "./content/site";

function upsertMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname || "/";
  const page = useMemo(() => getPage(currentPath), [currentPath]);

  useEffect(() => {
    document.title = page.metaTitle;
    upsertMeta("description", page.metaDescription);
    document.documentElement.lang = "nl";
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, page.metaDescription, page.metaTitle]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page.path]);

  return (
    <div className="site-frame">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentPath={page.path} />
      <main>
        <PageHero page={page} />
        <PageBlocks blocks={page.blocks} />
      </main>
      <Footer />
    </div>
  );
}
