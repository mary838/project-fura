/**
 * Single source of truth for the site's public identity — canonical origin,
 * organisation details, and the route table the sitemap is built from.
 *
 * Everything that needs an absolute URL (canonicals, Open Graph, JSON-LD @id)
 * reads from here so the domain is changed in exactly one place.
 */

/**
 * The canonical origin. `furahabitech.com` 301-redirects here, so `.au` is the
 * host Google indexes and the only one that may appear in a canonical tag —
 * pointing canonicals at a redirecting host tells crawlers to index a URL that
 * immediately bounces them, which drops the page from results.
 *
 * Override per-environment with NEXT_PUBLIC_SITE_URL (preview deployments
 * should set their own so their canonicals don't all claim to be production).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://furahabitech.au"
).replace(/\/$/, "");

/** Bare hostname, e.g. for Message-ID headers that need a domain not a URL. */
export const SITE_HOST = new URL(SITE_URL).host;

export const SITE_NAME = "Fura Habitech";

export const SITE_DESCRIPTION =
  "Fura Habitech, by Fura Group. Connecting investors with innovative real asset opportunities across Australia.";

/** Legal entity behind the site, as stated in the footer. */
export const ORGANISATION = {
  legalName: "FURA Australia Pty Ltd",
  acn: "685 099 674",
  telephone: "+61 7 3000 0000",
  email: "info@furahabitech.com",
  streetAddress: "Level 12, 1 Eagle Street",
  addressLocality: "Brisbane",
  addressRegion: "QLD",
  postalCode: "4000",
  addressCountry: "AU",
  /** Fura Group, the Singapore-headquartered parent investment group. */
  parentName: "FURA Group",
} as const;

/** Resolves an app-relative path to an absolute URL on the canonical origin. */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export type SiteRoute = {
  path: string;
  /** Sitemap hint only — Google treats these as weak signals, not directives. */
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/**
 * Every indexable route. Kept explicit rather than globbed off the filesystem
 * so priorities stay deliberate and a new page is a conscious sitemap entry.
 */
export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/teams", changeFrequency: "monthly", priority: 0.7 },
  { path: "/investor-relations", changeFrequency: "monthly", priority: 0.9 },

  { path: "/companies/fura-habitech", changeFrequency: "monthly", priority: 0.8 },
  { path: "/companies/habitech-manufacturing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/companies/habitech-construction", changeFrequency: "monthly", priority: 0.8 },
  { path: "/companies/habitech-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/companies/habitech-property", changeFrequency: "monthly", priority: 0.8 },

  { path: "/properties", changeFrequency: "weekly", priority: 0.9 },
  { path: "/properties/habitech-residences", changeFrequency: "monthly", priority: 0.8 },
  { path: "/properties/wolloongabba-collective", changeFrequency: "monthly", priority: 0.8 },
  { path: "/properties/the-lakes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/properties/fura-living-kelvyngroove", changeFrequency: "monthly", priority: 0.8 },
  { path: "/properties/timor-avenue", changeFrequency: "monthly", priority: 0.7 },
  { path: "/properties/timor-avenue-2", changeFrequency: "monthly", priority: 0.7 },
  { path: "/properties/timor-avenue-3", changeFrequency: "monthly", priority: 0.7 },
  { path: "/properties/winghouse", changeFrequency: "monthly", priority: 0.8 },
  { path: "/properties/winghouse-s", changeFrequency: "monthly", priority: 0.7 },
  { path: "/properties/winghouse-m", changeFrequency: "monthly", priority: 0.7 },
  { path: "/properties/winghouse-l", changeFrequency: "monthly", priority: 0.7 },

  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.2 },
];
