/** Content for the real estate properties pages. */

export type PropertyStatus = "Completed" | "On going";

export type PropertyCard = {
  image: string;
  meta: string;
  title: string;
  description: string;
  status: PropertyStatus;
  href?: string;
};

export const PROPERTY_FILTERS = [
  "All Project Types",
  "Completed project",
  "On going project",
];

export const PROPERTIES: PropertyCard[] = [
  {
    image: "/fura/properties/kingaroy.png",
    meta: "15 ha",
    title: "Kingaroy",
    description: "Masterplanned affordable housing community in Kingaroy.",
    status: "Completed",
  },
  {
    image: "/fura/properties/woolloongabba.png",
    meta: "~10,000 sqm",
    title: "Woolloongabba, Brisbane CBD",
    description: "Commercial & mixed-use development in Woolloongabba.",
    status: "Completed",
  },
  {
    image: "/fura/properties/brisbane-townhouses.png",
    meta: "35+ units",
    title: "Brisbane Apartments & Townhouses",
    description: "17 townhouses delivered across prime Brisbane locations.",
    status: "Completed",
  },
  {
    image: "/fura/properties/the-lake.png",
    meta: "350 units",
    title: "The Lake, Loganholme",
    description: "Residential community delivering 350 quality units.",
    status: "Completed",
  },
  {
    image: "/fura/properties/wing-house.png",
    meta: "Secondary dwelling opportunities",
    title: "The Wing House",
    description: "Residential community delivering 350 quality units.",
    status: "On going",
    href: "/properties/winghouse",
  },
  {
    image: "/fura/properties/fura-living.png",
    meta: "Affordable housing (liveable solutions)",
    title: "Fura Living",
    description: "Residential community delivering 350 quality units.",
    status: "On going",
  },
];

/** The first card's meta has a second segment; the rest are single. */
export const KINGAROY_SECOND_META = "Affordable Housing";

export const CONTACT_VALUES: { icon: string; title: string; body: string }[] = [
  {
    icon: "/fura/icons/coins-hand.svg",
    title: "Investor First",
    body: "We align with investors for consistent outcomes.",
  },
  {
    icon: "/fura/icons/file-check.svg",
    title: "Transparent",
    body: "Clear processes and regular communication.",
  },
  {
    icon: "/fura/icons/building-07.svg",
    title: "Track Record",
    body: "Proven delivery across multiple asset classes.",
  },
];

export const WINGHOUSE_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Type",
    value: "Affordable Housing",
  },
  {
    icon: "/fura/icons/lightning-01.svg",
    label: "Status",
    value: "Construction",
  },
  {
    icon: "/fura/icons/bar-chart.svg",
    label: "Total Units",
    value: "120 units",
  },
  { icon: "/fura/icons/expand-03.svg", label: "Land Size", value: "2.4 ha" },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Expected Completion",
    value: "Q2 2026",
  },
];

export const WINGHOUSE_PREVIEWS = [
  "/fura/properties/winghouse/p1.png",
  "/fura/properties/winghouse/p2.png",
  "/fura/properties/winghouse/p3.png",
  "/fura/properties/winghouse/p3.png",
];

export const WINGHOUSE_FEATURES: {
  icon: string;
  title: string;
  body: string;
}[] = [
  {
    icon: "/fura/icons/feat-home.svg",
    title: "Affordable Living",
    body: "Quality homes designed for long-term affordability.",
  },
  {
    icon: "/fura/icons/feat-lightbulb.svg",
    title: "Sustainable Design",
    body: "Energy-efficient homes with sustainable materials and practices.",
  },
  {
    icon: "/fura/icons/feat-users.svg",
    title: "Community Focused",
    body: "Facilities and open spaces to support community wellbeing.",
  },
  {
    icon: "/fura/icons/feat-marker.svg",
    title: "Connected Location",
    body: "Facilities and open spaces to support community wellbeing.",
  },
];
