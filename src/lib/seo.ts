import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { PROPERTY_LISTINGS } from "@/lib/properties-content";

/**
 * Default share image. Not a purpose-built 1200x630 card — social platforms
 * centre-crop it — but a real photograph beats the blank card a page with no
 * og:image gets, which is what most link previews of this site would show.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/fura/images/hero.png",
  width: 1609,
  height: 978,
  alt: `${SITE_NAME} — global real asset platform`,
};

type PageMetadataInput = {
  /** Page name only — the "— Fura Habitech" suffix comes from the root template. */
  title: string;
  description: string;
  /** Route path, used for the canonical tag and og:url. */
  path: string;
  /** Overrides the default share image, e.g. a property's own photo. */
  image?: { url: string; width?: number; height?: number; alt?: string };
};

/**
 * Builds a page's metadata.
 *
 * Exists because Next replaces the whole `openGraph` object when a page
 * declares one — it does not merge with the layout's. Setting og:title on a
 * page by hand would silently drop og:type, og:site_name and og:locale, so
 * every page composes its card through here instead.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  // A development shares better as its own photo than as the site-wide hero,
  // so property routes pick theirs up from the listing data automatically.
  const listingImage = PROPERTY_LISTINGS.find(
    (listing) => listing.href === path,
  )?.image;
  const resolved = image ?? (listingImage ? { url: listingImage } : undefined);
  // Dimensions are omitted for listing photos — they vary, and a wrong
  // og:image:width makes scrapers reserve the wrong box. Crawlers that care
  // fetch the image and measure it themselves.
  const ogImage = resolved
    ? { alt: title, ...resolved }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    // Relative — resolved against `metadataBase` from the root layout. The
    // canonical is what tells Google this page, on this domain, is the one
    // to index rather than any redirecting or parameterised variant.
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_AU",
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
