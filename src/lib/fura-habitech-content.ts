/** Content for the FURA Habitech company page. */

export type StrategyCardData = {
  badge: string;
  icon: string;
  title: string;
  description: string;
  driver: string;
};

export const FH_STRATEGIES: StrategyCardData[] = [
  {
    badge: "Class A",
    icon: "/fura/icons/feat-marker.svg",
    title: "Landbank and DA uplift",
    description:
      "Acquire strategically positioned land and create value through Development Approval (DA) uplift.",
    driver: "Land and approval uplift",
  },
  {
    badge: "Class B",
    icon: "/fura/icons/home-02.svg",
    title: "Build-to-Sell",
    description:
      "Develop Build-to-Sell residential and mixed-use projects addressing housing needs through modular and efficient solutions.",
    driver: "Development and sale margin",
  },
  {
    badge: "Class C",
    icon: "/fura/icons/building-03.svg",
    title: "Build-to-Rent",
    description:
      "Deliver Build-to-Rent affordable housing solutions for key workers, students and healthcare staff, alongside compact secondary dwellings.",
    driver: "Recurring rental income",
  },
];

export type ComparisonRow = {
  klass: string;
  strategy: string;
  /** Rendered on its own lines when it contains a newline. */
  targetReturn: string[];
  hold: string;
  focus: string;
  suitedFor: string;
};

export const FH_COMPARISON: ComparisonRow[] = [
  {
    klass: "CLASS A",
    strategy: "Landbank & DA uplift",
    targetReturn: ["18–25% IRR"],
    hold: "12–24 months",
    focus: "Value creation through planning and DA uplift",
    suitedFor: "Investors seeking higher return with shorter duration",
  },
  {
    klass: "CLASS B",
    strategy: "Build-to-Sell",
    targetReturn: ["15–20% IRR"],
    hold: "24–36 months",
    focus: "Development profit via efficient delivery",
    suitedFor: "Investors seeking strong returns with moderate hold",
  },
  {
    klass: "CLASS C",
    strategy: "Build-to-Rent",
    targetReturn: ["6–10% Yield", "+ Capital Growth"],
    hold: "5–7 years",
    focus: "Stable income through long-term rentals",
    suitedFor: "Investors seeking income and capital preservation",
  },
];

export const FH_FLOW_STEPS: { title: string; description: string }[] = [
  {
    title: "Select Class B",
    description: "Eligible wholesale and institutional investors",
  },
  { title: "Class B Bond", description: "Issued by FURA Habitech" },
  { title: "BTS Portfolio", description: "Managed by CODA" },
  { title: "Mt Gravatt SPV", description: "One eligible Class B deployment" },
  { title: "Develop and sell", description: "Apartments delivered and sold" },
  { title: "Redemption", description: "Proceeds and target return" },
];

export const CODA_ROLES: { icon: string; title: string; caption: string }[] = [
  {
    icon: "/fura/icons/check-circle.svg",
    title: "AFS License",
    caption: "Provides licensed oversight",
  },
  {
    icon: "/fura/icons/briefcase.svg",
    title: "Investment Manager",
    caption: "Manages the portfolio",
  },
  {
    icon: "/fura/icons/lock.svg",
    title: "Security Trustee",
    caption: "Holds security for bondholders",
  },
];
