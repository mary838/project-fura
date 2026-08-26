/** Content for the Fura Habitech home page sections. */

export type Strategy = {
  badge: string;
  icon: string;
  title: string;
  description: string;
  driver: string;
};

export const STRATEGIES: Strategy[] = [
  {
    badge: "Class A",
    icon: "/fura/icons/map-pin.svg",
    title: "Landbank and DA uplift",
    description:
      "Acquire strategic land and seek value uplift through planning, rezoning or approvals.",
    driver: "Land and approval uplift",
  },
  {
    badge: "Class B",
    icon: "/fura/icons/house.svg",
    title: "Build-to-Sell",
    description:
      "Deliver residential projects and realise development margin through sale.",
    driver: "Development and sale margin",
  },
  {
    badge: "Class C",
    icon: "/fura/icons/building.svg",
    title: "Build-to-Rent",
    description:
      "Hold completed housing for rental income and longer-term asset growth.",
    driver: "Recurring rental income",
  },
];

export type Project = {
  image: string;
  category: string;
  detail: string;
  title: string;
  meta: string;
};

export const PROJECTS: Project[] = [
  {
    image: "/fura/images/project-mt-gravatt.png",
    category: "Built-to-Sell",
    detail: "Project & townhouses)",
    title: "Mt Gravatt–Capalaba",
    meta: "39 units / “153”",
  },
  {
    image: "/fura/images/project-woolloongabba.png",
    category: "Landbank & DA Uplift",
    detail: "Brisbane",
    title: "Woolloongabba",
    meta: "10,336 sqm",
  },
  {
    image: "/fura/images/project-wing-house.png",
    category: "Build-to-Rent",
    detail: "Secondary dwelling,",
    title: "Wing House (Medium)",
    meta: "Open for landlords",
  },
];

export type PortfolioCompany = {
  image: string;
  title: string;
  href: string;
};

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    image: "/fura/images/portfolio-manufacturing.png",
    title: "Habitech Manufacturing",
    href: "/companies/habitech-manufacturing",
  },
  {
    image: "/fura/images/portfolio-construction.png",
    title: "Habitech Construction",
    href: "/companies/habitech-construction",
  },
  {
    image: "/fura/images/portfolio-development.png",
    title: "Habitech Development",
    href: "/companies/habitech-development",
  },
  {
    image: "/fura/images/portfolio-property.png",
    title: "Habitech Property",
    href: "/companies/habitech-property",
  },
  {
    image: "/fura/images/portfolio-training.png",
    title: "Habitech Training",
    href: "/companies/habitech-training",
  },
  {
    image: "/fura/images/portfolio-fura-habitech.png",
    title: "Fura Habitech",
    href: "/companies/fura-habitech",
  },
];

export type GovernanceItem = {
  num: string;
  title: string;
  description: string;
};

export const GOVERNANCE_ITEMS: GovernanceItem[] = [
  {
    num: "01",
    title: "AFS licence oversight",
    description:
      "CODA Asset Management holds AFSL 389315 and supervises the financial-services activities within its authorisations.",
  },
  {
    num: "02",
    title: "Formal investment management",
    description:
      "CODA is appointed to manage the portfolio and deployment of investor capital under the Investment Management Agreement.",
  },
  {
    num: "03",
    title: "Security trustee",
    description:
      "CODA holds relevant security on behalf of bondholders under the Security Trust Deed.",
  },
  {
    num: "04",
    title: "Asset backing",
    description:
      "The Bond structure is backed by relevant underlying investments, subject to the governing deeds and priority arrangements.",
  },
  {
    num: "05",
    title: "Stage-gate controls",
    description:
      "Capital deployment, budgets, approvals and liquidity are monitored across the project lifecycle.",
  },
];

export type ValueCard = {
  title: string;
  description: string;
  /** Spans both columns in the desktop 2x2 grid. */
  wide?: boolean;
};

export const VALUE_CARDS: ValueCard[] = [
  {
    title: "Proven Track Record",
    description: "Commitment to innovation, Green projects and",
  },
  {
    title: "Infrastructures.",
    description: "Defensive & Profitable Investment",
  },
  {
    title: "Opportunities",
    description:
      "Global & Connected real Asset Platform across Singapore, Cambodia, United States, Japan, China and Australia",
    wide: true,
  },
];

export type Partner = {
  logo: string;
  name: string;
  /** Per-logo fit tweaks taken from the Figma frame crops. */
  logoClassName?: string;
};

export const PARTNERS: Partner[] = [
  { logo: "/fura/partners/rhodium.png", name: "Rhodium Equity Pty Limited" },
  {
    logo: "/fura/partners/fura-capital.png",
    name: "Fura Capital Pte Ltd",
    logoClassName: "scale-[1.2]",
  },
  { logo: "/fura/partners/jane-box.png", name: "Jane-Box" },
  {
    logo: "/fura/partners/open-build.png",
    name: "Open Build Pty Ltd",
    logoClassName: "scale-[1.35]",
  },
  { logo: "/fura/partners/aad-sourcing.png", name: "AAD Sourcing Solutions" },
  {
    logo: "/fura/partners/vertium.png",
    name: "Vertium Asset Management Pty Ltd.",
  },
];
