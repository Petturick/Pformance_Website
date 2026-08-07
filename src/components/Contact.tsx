import { useState } from "react";
import { Mail, MapPin, Send, CircleCheck as CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's build something measurable</h2>
          <p className="section-lead">
            Tell us where you want to go. We'll help you figure out how to get there —
            and walk the road with you.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail size={18} strokeWidth={1.8} />
              <a href="mailto:hello@pformance.nl">hello@pformance.nl</a>
            </div>
            <div className="contact-detail-item">
              <MapPin size={18} strokeWidth={1.8} />
              <span>Rotterdam, The Netherlands</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success">
              <CheckCircle2 size={48} strokeWidth={1.5} />
              <h3>Message received</h3>
              <p>Thanks for reaching out. We'll get back to you within one business day.</p>
            </div>
          ) : (
            <>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@company.com"
                />
              </div>
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Company name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="What are you working on?"
                />
              </div>
              <button type="submit" className="btn-primary btn-form">
                Send message
                <Send size={16} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
