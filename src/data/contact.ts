/**
 * Contact intents, shared between the server page (query parameter parsing)
 * and the client form component.
 */

export const contactIntents = [
  { value: "advisory", label: "Marketing leadership / advies" },
  { value: "build", label: "Een digitale oplossing bouwen" },
  { value: "other", label: "Iets anders" },
] as const;

export type ContactIntent = (typeof contactIntents)[number]["value"];

export const defaultContactIntent: ContactIntent = "advisory";

export function isContactIntent(
  value: string | undefined,
): value is ContactIntent {
  return contactIntents.some((intent) => intent.value === value);
}
