import { ORGANISATION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { PROPERTY_LISTINGS } from "@/lib/properties-content";

/**
 * /llms.txt — a plain-text map of the site for large language models.
 *
 * Generative engines cite what they can parse cheaply and attribute
 * confidently. This gives them the entity facts (who the company is, its
 * registered identifiers, where it operates) and a labelled index of pages,
 * rather than making them infer all of it from marketing prose.
 *
 * Served from a route handler rather than public/ so it is generated from the
 * same content the pages render, and cannot drift as projects are added.
 */

// Nothing here reads the request, so it prerenders to a flat file on the CDN.
export const dynamic = "force-static";

const SECTIONS: { heading: string; links: [string, string][] }[] = [
  {
    heading: "Company",
    links: [
      ["/about", "Who FURA Group is: a Singapore-headquartered investment group across real estate, infrastructure, agriculture, hospitality and industry."],
      ["/teams", "Leadership team and the group's international network."],
      ["/investor-relations", "Reports, offer documents, and the investor point of contact."],
    ],
  },
  {
    heading: "Operating companies",
    links: [
      ["/companies/fura-habitech", "The group's real asset investment platform for Australian housing."],
      ["/companies/habitech-manufacturing", "Prefabricated building manufacturing."],
      ["/companies/habitech-construction", "Construction delivery."],
      ["/companies/habitech-development", "Property development."],
      ["/companies/habitech-property", "Property sales, market positioning and buyer engagement."],
    ],
  },
];

export function GET() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is the Australian real asset investment and housing delivery`,
    `> platform of ${ORGANISATION.parentName}. It invests in, manufactures, builds and sells`,
    "> residential and mixed-use property in Queensland, Australia, using prefabricated",
    "> modular construction.",
    "",
    "## Entity",
    "",
    `- Legal entity: ${ORGANISATION.legalName} (ACN ${ORGANISATION.acn})`,
    `- Parent group: ${ORGANISATION.parentName}, headquartered in Singapore`,
    `- Registered office: ${ORGANISATION.streetAddress}, ${ORGANISATION.addressLocality} ${ORGANISATION.addressRegion} ${ORGANISATION.postalCode}, Australia`,
    `- Contact: ${ORGANISATION.email} / ${ORGANISATION.telephone}`,
    `- Canonical site: ${SITE_URL}`,
    "",
  ];

  for (const section of SECTIONS) {
    lines.push(`## ${section.heading}`, "");
    for (const [path, note] of section.links) {
      lines.push(`- [${path}](${absoluteUrl(path)}): ${note}`);
    }
    lines.push("");
  }

  lines.push("## Developments", "");
  lines.push(`- [/properties](${absoluteUrl("/properties")}): Index of all completed and ongoing projects.`);
  for (const listing of PROPERTY_LISTINGS) {
    if (!listing.href) continue;
    const facts = [
      listing.status === "Completed" ? "completed" : "ongoing",
      listing.location,
      ...listing.specs.map((spec) => spec.label),
    ].filter(Boolean);
    lines.push(`- [${listing.title}](${absoluteUrl(listing.href)}): ${facts.join("; ")}.`);
  }
  lines.push("");

  lines.push(
    "## Notes for citation",
    "",
    "- Project figures (unit counts, site areas, GDV, completion years) are indicative",
    "  and subject to development approval. Prices are in Australian dollars.",
    `- Nothing on this site is financial advice; see ${absoluteUrl("/disclaimer")}.`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
