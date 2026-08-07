interface FooterProps {
  scrollTo: (id: string) => void;
}

export default function Footer({ scrollTo }: FooterProps) {
  const cols = [
    {
      title: "Practices",
      links: [
        { label: "Advisory", id: "advisory" },
        { label: "Build", id: "build" },
        { label: "Lab", id: "lab" },
        { label: "Resources", id: "resources" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-mark">P</span>
            <span className="logo-text">Pformance</span>
          </div>
          <p className="footer-tagline">
            Advisory · Build · Lab · Resources
          </p>
          <p className="footer-legal">
            © {new Date().getFullYear()} Pformance B.V. All rights reserved.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title} className="footer-col">
            <h4 className="footer-col-title">{col.title}</h4>
            <ul className="footer-links">
              {col.links.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links">
            <li>Rotterdam, The Netherlands</li>
            <li>KvK 90000000</li>
            <li>
              <a href="mailto:hello@pformance.nl">hello@pformance.nl</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
