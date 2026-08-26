export type NavItem = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  /** Omitted for links that only open a menu — those never navigate. */
  href?: string;
  /** Sub-items shown in a dropdown; presence of this renders the chevron. */
  items?: NavItem[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "HOME", href: "/" },
  {
    label: "WHO WE ARE",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Teams", href: "/teams" },
    ],
  },
  {
    // Labels here are the nav's own wording, which differs from the portfolio
    // card titles ("Habitech Property", "Habitech Training").
    label: "COMPANIES",
    items: [
      { label: "Fura Habitech", href: "/companies/fura-habitech" },
      {
        label: "Habitech Manufacturing",
        href: "/companies/habitech-manufacturing",
      },
      {
        label: "Habitech Construction",
        href: "/companies/habitech-construction",
      },
      {
        label: "Habitech Development",
        href: "/companies/habitech-development",
      },
      {
        label: "Habitech Real Estate Property",
        href: "/companies/habitech-property",
      },
      {
        label: "Habitech Training Program",
        href: "/companies/habitech-training",
      },
    ],
  },
  { label: "REAL ESTATE PROPERTIES", href: "/properties" },
];
