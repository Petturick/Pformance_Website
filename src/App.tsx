import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advisory from "./components/Advisory";
import Build from "./components/Build";
import Lab from "./components/Lab";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <Advisory />
        <Build />
        <Lab />
        <Resources />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
      <a
        href="#top"
        className="back-to-top"
        aria-label="Back to top"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        <ArrowUpRight size={20} />
      </a>
      <MobileMenu open={menuOpen} scrollTo={scrollTo} />
    </>
  );
}

function MobileMenu({ open, scrollTo }: { open: boolean; scrollTo: (id: string) => void }) {
  if (!open) return null;
  const items = [
    { id: "advisory", label: "Advisory" },
    { id: "build", label: "Build" },
    { id: "lab", label: "Lab" },
    { id: "resources", label: "Resources" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div className="mobile-menu" role="dialog" aria-modal="true">
      <nav className="mobile-menu-nav">
        {items.map((item) => (
          <button key={item.id} className="mobile-menu-link" onClick={() => scrollTo(item.id)}>
            {item.label}
            <ArrowUpRight size={18} />
          </button>
        ))}
      </nav>
    </div>
  );
}
