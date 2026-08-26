/** Content for the Fura Habitech about page sections. */

export type OrganigramEntry = {
  name: string;
  country: string;
};

export const ORGANIGRAM_PARENT: OrganigramEntry = {
  name: "Fura Capital Pte Ltd",
  country: "Singapore",
};

export const ORGANIGRAM_SUBSIDIARIES: OrganigramEntry[] = [
  { name: "Fura Landbank Fund", country: "Singapore" },
  { name: "Furi Corporation", country: "Cambodia" },
  { name: "Fari Inc", country: "USA" },
  { name: "Fura Japan", country: "Japan" },
  { name: "Fura Chongqing", country: "China" },
  { name: "Fura Australia", country: "Australia" },
];

export const CAPABILITIES: string[] = [
  "Create value through land acquisition and DA uplift",
  "Generate development profits through Build-to-Sell projects",
  "Create recurring income through Build-to-Rent assets",
  "Deliver housing faster through modular construction",
  "Provide investors with multiple exit pathways (including asset sales, institutional portfolio acquisitions, superannuation fund purchases, and owner refinancing or buyback options).",
];

export type Statistic = {
  value: string;
  label: string;
};

/** Rendered as a centred pair above a three-up row, as in the design. */
export const STATISTICS_PRIMARY: Statistic[] = [
  { value: "15+", label: "Under AFSL License ensuring capital protection" },
  { value: "+500", label: "+500 projects completed and + 15 countries served" },
];

export const STATISTICS_SECONDARY: Statistic[] = [
  {
    value: "> USD 750M",
    label:
      "Frefab & Modular construction Materials exported in more than 10 countries",
  },
  {
    value: "> USD 250M",
    label: "Years in Asset Development & Cross-border Capital Management",
  },
  { value: "6", label: "Global Real Asset Platform in 6 Countries" },
];

export type NewsItem = {
  image: string;
  title: string;
  date: string;
  href: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    image: "/fura/images/news-q1-progress.png",
    title: "Fura Habitech Highlights Q1 2024 Project Progress in Queensland",
    date: "May 2, 2026",
    href: "/news/q1-2024-project-progress",
  },
  {
    image: "/fura/images/news-us-market.png",
    title: "Fura Group Expands Presence in the US Market",
    date: "May 2, 2026",
    href: "/news/us-market-expansion",
  },
  {
    image: "/fura/images/news-sustainable.png",
    title: "Building Sustainable Communities for the Future",
    date: "May 2, 2026",
    href: "/news/building-sustainable-communities",
  },
];
