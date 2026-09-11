/**
 * schema.org graphs describing the site to search engines and, downstream of
 * them, to answer engines and AI assistants.
 *
 * Everything here is built from content that already appears on the page —
 * structured data that asserts something the page doesn't show is a
 * spam signal and can get rich results revoked for the whole domain.
 */
import { ORGANISATION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { PROPERTY_LISTINGS } from "@/lib/properties-content";

/** Stable @id values so nodes can cross-reference instead of duplicating. */
export const ORG_ID = `${SITE_URL}/#organisation`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organisationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: ORGANISATION.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/fura/icons/logo-lockup-white.svg"),
    },
    // The ACN is the registry identifier an answer engine can use to tie this
    // site to the real ASIC-registered entity.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ACN",
      value: ORGANISATION.acn,
    },
    parentOrganization: {
      "@type": "Organization",
      name: ORGANISATION.parentName,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ORGANISATION.streetAddress,
      addressLocality: ORGANISATION.addressLocality,
      addressRegion: ORGANISATION.addressRegion,
      postalCode: ORGANISATION.postalCode,
      addressCountry: ORGANISATION.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: ORGANISATION.telephone,
      email: ORGANISATION.email,
      areaServed: "AU",
      availableLanguage: "en",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-AU",
  };
}

/** Root graph — emitted once, from the root layout, for every page. */
export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organisationSchema(), websiteSchema()],
  };
}

export type Crumb = { name: string; path: string };

/**
 * Breadcrumbs are how a crawler learns the site's hierarchy when the URL
 * alone is ambiguous, and they render as the path line under a search result.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/**
 * A single development, described from its listing entry.
 *
 * `price` is deliberately not mapped to an `offers.price`: the listing prices
 * are free-text ranges and shorthand ("900k AUD", "A$950,000 – A$1,150,000"),
 * and a mis-parsed number in structured data is worse than no number at all.
 */
export function propertySchema(path: string) {
  const listing = PROPERTY_LISTINGS.find((item) => item.href === path);
  if (!listing) return null;

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${absoluteUrl(path)}/#listing`,
    url: absoluteUrl(path),
    name: listing.title,
    image: absoluteUrl(listing.image),
    // "On going" projects are still being marketed; completed ones are not.
    availability:
      listing.status === "Completed"
        ? "https://schema.org/SoldOut"
        : "https://schema.org/PreOrder",
    provider: { "@id": ORG_ID },
    ...(listing.location
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: listing.location,
            addressCountry: "AU",
          },
        }
      : {}),
    // The spec chips ("35 Units", "10,336 sqm", "2027") are the page's own
    // factual claims, so they carry over verbatim as additional properties.
    additionalProperty: listing.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
    })),
  };
}
