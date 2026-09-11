import type { MetadataRoute } from "next";
import { SITE_ROUTES, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // The site is statically authored, so there is no per-page edit timestamp
  // to report. Build time is the honest answer: it is when the content last
  // could have changed.
  const lastModified = new Date();

  return SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
