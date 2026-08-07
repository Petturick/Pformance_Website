"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import {
  contactIntents,
  defaultContactIntent,
  type ContactIntent,
} from "@/data/contact";
import { siteConfig } from "@/data/site";

/**
 * Contact form without a backend.
 *
 * TODO: Replace the mailto submission with a real API route or form provider
 * once an email/CRM integration is available.
 */

const fieldClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-950 placeholder:text-zinc-400 focus-visible:border-blue-600";

const labelClass = "block text-sm font-medium text-zinc-900";

type ContactFormProps = {
  defaultIntent?: ContactIntent;
  /** Optional Lab project slug the visitor came from. */
  project?: string;
};

export default function ContactForm({
  defaultIntent = defaultContactIntent,
  project,
}: ContactFormProps) {
  const [intent, setIntent] = useState<ContactIntent>(defaultIntent);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const intentLabel =
      contactIntents.find((item) => item.value === intent)?.label ?? "Contact";
    const subject = `Contactaanvraag: ${intentLabel}`;
    const body = [
      `Naam: ${name}`,
      `Bedrijf: ${company}`,
      `E-mail: ${email}`,
      project ? `Project: ${project}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [company, email, intent, message, name, project]);

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <fieldset className="flex flex-col gap-3">
        <legend className={labelClass}>Waar gaat het over?</legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {contactIntents.map((item) => (
            <label
              key={item.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue-600 ${
                intent === item.value
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-zinc-300 text-zinc-700 hover:border-zinc-400"
              }`}
            >
              <input
                type="radio"
                name="intent"
                value={item.value}
                checked={intent === item.value}
                onChange={() => setIntent(item.value)}
                className="sr-only"
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Naam
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Bedrijf
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          E-mailadres
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Waar loop je tegenaan?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-describedby="contact-message-help"
          className={`mt-2 ${fieldClass} resize-y`}
        />
        <p id="contact-message-help" className="mt-2 text-sm text-zinc-500">
          Een korte omschrijving van de situatie is voldoende voor een eerste
          reactie.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Verstuur bericht
        </Button>
        <p className="text-sm text-zinc-500">
          Dit opent je e-mailprogramma met het bericht klaargezet.
        </p>
      </div>
    </form>
  );
}
