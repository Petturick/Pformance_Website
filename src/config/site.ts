export const siteConfig = {
  name: "Pformance",
  legalName: "Pformance B.V.",
  url: "https://pformance.nl",
  domain: "pformance.nl",
  email: "hello@pformance.nl",
  address: {
    street: "Begijnenhofstraat 33",
    postalCode: "6001 BH",
    city: "Weert",
    country: "Nederland",
  },
  chamberOfCommerce: "98022776",
  vatNumber: "NL868328182B01",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
