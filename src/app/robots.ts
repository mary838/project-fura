import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * AI crawlers that read pages to answer questions and cite sources. They are
 * listed explicitly and allowed: a citation in an AI answer is the whole point
 * of GEO, and several of these honour a named rule over the wildcard.
 *
 * Note these are the *retrieval* crawlers. The training-corpus crawlers
 * (GPTBot, CCBot, Google-Extended) are a separate decision — blocking them
 * does not affect citations, so they are left to the wildcard rule below.
 */
const ANSWER_ENGINE_CRAWLERS = [
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT browsing on a user's behalf
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "Amazonbot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The contact endpoint is a POST-only mail relay — nothing to index,
        // and crawling it just burns crawl budget.
        disallow: ["/api/"],
      },
      {
        userAgent: ANSWER_ENGINE_CRAWLERS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    // Declares which of the two domains is the real one, for the crawlers
    // that still read this directive.
    host: SITE_URL,
  };
}
