/** Content for the real estate properties pages. */

export type PropertyStatus = "Completed" | "On going";

export const PROPERTY_TABS = [
  "All Project Types",
  "On going project",
  "Completed project",
];

export type PropertySpec = {
  icon: string;
  label: string;
};

export type PropertyListing = {
  image: string;
  status: PropertyStatus;
  title: string;
  /** Omitted where the frame leaves the price line blank. */
  price?: string;
  specs: PropertySpec[];
  location?: string;
  href?: string;
};

/** The 384px cards in the main listing grid. */
export const PROPERTY_LISTINGS: PropertyListing[] = [
  {
    image: "/fura/properties/listings/habitech-residences.png",
    status: "On going",
    title: "Habitech Residences",
    price: "A$950,000 – A$1,150,000",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "35 Units" },
      { icon: "/fura/icons/currency-dollar-circle.svg", label: "A$38.7M GDV" },
      { icon: "/fura/icons/calendar.svg", label: "2027" },
    ],
    location: "153 Capalaba Street, Mount Gravatt, Brisbane",
    href: "/properties/habitech-residences",
  },
  {
    image: "/fura/properties/listings/wolloongabba-collective.jpg",
    status: "On going",
    title: "The Wolloongabba Collective",
    specs: [
      { icon: "/fura/icons/spacing-width-01.svg", label: "10,336 sqm" },
      { icon: "/fura/icons/calendar.svg", label: "2027–2029" },
    ],
    location: "Woolloongabba, Brisbane",
    href: "/properties/wolloongabba-collective",
  },
  {
    image: "/fura/properties/listings/timor-avenue-1.png",
    status: "On going",
    title: "Timor Avenue",
    price: "900k AUD",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "2013 sqm" },
      { icon: "/fura/icons/layers-three-02.svg", label: "10 Units" },
      { icon: "/fura/icons/layers-three-02.svg", label: "3 Floors" },
    ],
    href: "/properties/timor-avenue",
  },
  {
    image: "/fura/properties/listings/timor-avenue-2.png",
    status: "On going",
    title: "Timor Avenue",
    price: "900k AUD",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "936 sqm" },
      { icon: "/fura/icons/layers-three-02.svg", label: "3 Floors" },
      { icon: "/fura/icons/maximize-01.svg", label: "200 sqm" },
    ],
    href: "/properties/timor-avenue-2",
  },
  {
    image: "/fura/properties/listings/timor-avenue-3.png",
    status: "On going",
    title: "Timor Avenue",
    price: "A$950,000 – A$1,150,000",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "794 sqm" },
      { icon: "/fura/icons/layers-three-02.svg", label: "10 × 3-Bedroom Units" },
      { icon: "/fura/icons/maximize-01.svg", label: "200 sqm" },
    ],
    href: "/properties/timor-avenue-3",
  },
  {
    image: "/fura/properties/listings/winghouse-s.png",
    status: "On going",
    title: "Winghouse S",
    price: "150k AUD",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "1 Bedroom" },
      { icon: "/fura/icons/spacing-width-01.svg", label: "S" },
      { icon: "/fura/icons/calendar.svg", label: "5 months" },
      { icon: "/fura/icons/maximize-01.svg", label: "41 m²" },
    ],
    href: "/properties/winghouse-s",
  },
  {
    image: "/fura/properties/listings/winghouse-m.png",
    status: "On going",
    title: "Winghouse M",
    price: "$170k",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "2 Bedroom" },
      { icon: "/fura/icons/spacing-width-01.svg", label: "M" },
      { icon: "/fura/icons/calendar.svg", label: "5 months" },
      { icon: "/fura/icons/maximize-01.svg", label: "63 m²" },
    ],
    href: "/properties/winghouse-m",
  },
  {
    image: "/fura/properties/listings/winghouse-l.png",
    status: "On going",
    title: "Winghouse L",
    price: "$190k",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "Office" },
      { icon: "/fura/icons/spacing-width-01.svg", label: "L" },
      { icon: "/fura/icons/calendar.svg", label: "5 months" },
      { icon: "/fura/icons/sale-01.svg", label: "100% after completion" },
    ],
    href: "/properties/winghouse-l",
  },
  {
    image: "/fura/properties/listings/fura-living-kelvyngroove.png",
    status: "On going",
    title: "Fura Living, Kelvyngroove Village",
    price: "50m AUD",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "35 Units" },
      { icon: "/fura/icons/currency-dollar-circle.svg", label: "A$38.7M GDV" },
      { icon: "/fura/icons/calendar.svg", label: "2026–2027" },
    ],
    location: "Kingaroy, Queensland",
    href: "/properties/fura-living-kelvyngroove",
  },
  {
    image: "/fura/properties/listings/the-lakes.png",
    status: "On going",
    title: "The Lakes",
    price: "AUD 200M",
    specs: [
      { icon: "/fura/icons/building-03.svg", label: "11 Units" },
      { icon: "/fura/icons/spacing-width-01.svg", label: "21.9 Ha" },
      { icon: "/fura/icons/calendar.svg", label: "2026–2027" },
    ],
    location: "Logan City, Carbrook",
    href: "/properties/the-lakes",
  },
];

export type FeaturedProperty = {
  image: string;
  status: PropertyStatus;
  title: string;
  description: string;
};

/** The taller 640px cards in "Our Complete Projects Portfolio". */
export const FEATURED_PROPERTIES: FeaturedProperty[] = [
  {
    image: "/fura/properties/listings/central-street-20.png",
    status: "Completed",
    title: "20 Central Street",
    description:
      "Open Build Pty Ltd contributed to the 20 Central Street Student Accommodation, a AUD 109M development comprising three towers of 11, 20 and 24 storeys with 464 rooms. Located in Melbourne's CBD, the project provides modern, high-density student living with excellent access to public transport and city amenities.",
  },
  {
    image: "/fura/properties/listings/cent-road-200.png",
    status: "Completed",
    title: "200 Cent Road",
    description:
      "Open Build Pty Ltd contributed to the AUD 152.4M 200 Cent Road Melbourne, providing an integrated oncology facility equipped with research labs, clinical imaging, trials centre and wellness spaces. Completed in 2024, it stands as a major cancer treatment and research hub in Victoria.",
  },
  {
    image: "/fura/properties/listings/high-street.png",
    status: "Completed",
    title: "High Street",
    description:
      "Open Build Pty Ltd worked on the AUD 60M, 29-storey student accommodation tower at High Street featuring 374 beds, communal spaces, gym, and outdoor courtyards. Built on a constrained 470sqm site in Melbourne CBD, the project reached Practical Completion in August 2023.",
  },
];

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

export const HABITECH_RESIDENCES_GALLERY = [
  "/fura/properties/habitech-residences/main.png",
  "/fura/properties/habitech-residences/p2.png",
  "/fura/properties/habitech-residences/p3.png",
];

export const HABITECH_RESIDENCES_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Type",
    value: "5 Storey Apartment",
  },
  {
    icon: "/fura/icons/file-02.svg",
    label: "Project Gross Development",
    value: "Value 38.7 million AUD",
  },
  {
    icon: "/fura/icons/layers-three-02.svg",
    label: "Unit Pricing",
    value: "1 million - 1.15 million AUD",
  },
  {
    icon: "/fura/icons/spacing-width-01.svg",
    label: "Parking Space",
    value: "71 cars & bicycle park",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit", value: "35" },
  {
    icon: "/fura/icons/expand-03.svg",
    label: "Size",
    value: "3458 sqm NSA",
  },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Completion time",
    value: "2027",
  },
  {
    icon: "/fura/icons/marker-pin-01.svg",
    label: "Location",
    value: "153 Capalaba Street, Mount Gravatt, Brisbane",
  },
];

export const WOLLOONGABBA_COLLECTIVE_GALLERY = [
  "/fura/properties/wolloongabba-collective/main.png",
  "/fura/properties/wolloongabba-collective/p2.png",
  "/fura/properties/wolloongabba-collective/p3.png",
  "/fura/properties/wolloongabba-collective/p4.png",
];

export const WOLLOONGABBA_COLLECTIVE_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "Land Acquisition & DA Proposal",
  },
  {
    icon: "/fura/icons/target-05.svg",
    label: "Investment Strategy",
    value: "Short-Term Exit / Long-Term Delivery",
  },
  { icon: "/fura/icons/expand-03.svg", label: "Size", value: "10,336 sqm" },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "Construction price",
    value: "A$ 170,000 (+5% Fura Management fee)",
  },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Completion time",
    value: "2027-2029",
  },
  {
    icon: "/fura/icons/marker-pin-01.svg",
    label: "Location",
    value: "Woolloongabba, Brisbane",
  },
];

export const TIMOR_AVENUE_1_IMAGE = "/fura/properties/listings/timor-avenue-1.png";
export const TIMOR_AVENUE_1_PRICE = "900k AUD";

export const TIMOR_AVENUE_1_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "property 2013 sqm",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit:", value: "10 units" },
  { icon: "/fura/icons/expand-03.svg", label: "Size:", value: "2,013 m²" },
  {
    icon: "/fura/icons/home-03.svg",
    label: "House Configuration",
    value: "3 Floors",
  },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "One unit Purchasing Price",
    value: "AUD 900,000",
  },
  {
    icon: "/fura/icons/map-02.svg",
    label: "House 3 floors approx",
    value: "200 sqm",
  },
];

export const TIMOR_AVENUE_2_IMAGE = "/fura/properties/listings/timor-avenue-2.png";
export const TIMOR_AVENUE_2_PRICE = "900k AUD";

export const TIMOR_AVENUE_2_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "property 936 sqm",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit:", value: "4 units" },
  { icon: "/fura/icons/expand-03.svg", label: "Size:", value: "936 sqm" },
  {
    icon: "/fura/icons/home-03.svg",
    label: "House Configuration",
    value: "3 Floors",
  },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "One unit Purchasing Price",
    value: "AUD 900,000",
  },
  {
    icon: "/fura/icons/map-02.svg",
    label: "House 3 floors approx",
    value: "200 sqm",
  },
];

export const TIMOR_AVENUE_3_IMAGE = "/fura/properties/listings/timor-avenue-3.png";
export const TIMOR_AVENUE_3_PRICE = "900k AUD";

export const TIMOR_AVENUE_3_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "property 794 sqm",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit:", value: "3 units" },
  { icon: "/fura/icons/expand-03.svg", label: "Size:", value: "794 m²" },
  {
    icon: "/fura/icons/home-03.svg",
    label: "House Configuration",
    value: "3 Floors",
  },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "One unit Purchasing Price",
    value: "AUD 900,000",
  },
  {
    icon: "/fura/icons/map-02.svg",
    label: "House 3 floors approx",
    value: "200 sqm",
  },
];

export const WINGHOUSE_S_GALLERY = [
  "/fura/properties/listings/winghouse-s.png",
  "/fura/properties/winghouse-s/p2.png",
  "/fura/properties/winghouse-s/p3.png",
  "/fura/properties/winghouse-s/p4.png",
  "/fura/properties/winghouse-s/p5.png",
];

export const WINGHOUSE_S_PRICE = "150k";

export const WINGHOUSE_S_DESCRIPTION =
  "Compact, modern and intelligently designed, the 41 sqm secondary dwelling offers comfortable independent living while maximizing every square metre. Ideal for rental income, extended family accommodation or a private home office.";

export const WINGHOUSE_S_DETAIL_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "Secondary dwelling",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit:", value: "1 Bedroom" },
  { icon: "/fura/icons/expand-03.svg", label: "Size:", value: "41 m²" },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "Construction price",
    value: "A$ 170,000 (+5% Fura Management fee)",
  },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Completion time",
    value: "5 months",
  },
  {
    icon: "/fura/icons/percent-02.svg",
    label: "Payment terms",
    value: "100% after Completion",
  },
];

export const WINGHOUSE_M_GALLERY = [
  "/fura/properties/listings/winghouse-m.png",
  "/fura/properties/winghouse-m/p2.png",
  "/fura/properties/winghouse-m/p3.png",
  "/fura/properties/winghouse-m/p4.png",
  "/fura/properties/winghouse-m/p5.png",
];

export const WINGHOUSE_M_PRICE = "$170k";

export const WINGHOUSE_M_DESCRIPTION =
  "Spacious, contemporary and thoughtfully designed, the 63 sqm secondary dwelling delivers comfortable living with the perfect balance of functionality and style. Featuring two bedrooms and open-plan living, it is ideal for small families, downsizers, rental investment or multi-generational living.";

export const WINGHOUSE_M_DETAIL_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "Secondary dwelling",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit:", value: "2 Bedroom" },
  { icon: "/fura/icons/expand-03.svg", label: "Size:", value: "63 m²" },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "Construction price",
    value: "A$ 170,000 (+5% Fura Management fee)",
  },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Completion time",
    value: "5 months",
  },
  {
    icon: "/fura/icons/percent-02.svg",
    label: "Payment terms",
    value: "100% after Completion",
  },
];

export const WINGHOUSE_L_GALLERY = [
  "/fura/properties/listings/winghouse-l.png",
  "/fura/properties/winghouse-l/p2.png",
  "/fura/properties/winghouse-l/p3.png",
  "/fura/properties/winghouse-l/p4.png",
  "/fura/properties/winghouse-l/p5.png",
];

export const WINGHOUSE_L_PRICE = "$190k";

export const WINGHOUSE_L_DESCRIPTION =
  "Designed for growing families and modern lifestyles, the 79 sqm secondary dwelling offers generous living spaces, three comfortable bedrooms and a practical open-plan layout. Perfect for family living, long-term rental opportunities or premium guest accommodation, it combines space, comfort and contemporary modular design.";

export const WINGHOUSE_L_DETAIL_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "Secondary dwelling",
  },
  { icon: "/fura/icons/building-03.svg", label: "Unit:", value: "Office" },
  { icon: "/fura/icons/expand-03.svg", label: "Size:", value: "19m²" },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "Construction price",
    value: "A$ 170,000 (+5% Fura Management fee)",
  },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Completion time",
    value: "5 months",
  },
  {
    icon: "/fura/icons/percent-02.svg",
    label: "Payment terms",
    value: "100% after completion",
  },
];

export const FURA_LIVING_KELVYNGROOVE_GALLERY = [
  "/fura/properties/listings/fura-living-kelvyngroove.png",
  "/fura/properties/fura-living-kelvyngroove/p3.png",
  "/fura/properties/fura-living-kelvyngroove/p5.png",
  "/fura/properties/fura-living-kelvyngroove/p6.png",
  "/fura/properties/fura-living-kelvyngroove/p2.png",
  "/fura/properties/fura-living-kelvyngroove/p4.png",
];

export const FURA_LIVING_KELVYNGROOVE_PRICE = "50 m AUD";

export const FURA_LIVING_KELVYNGROOVE_DESCRIPTION =
  "Spacious, contemporary and thoughtfully designed, the 63 sqm secondary dwelling delivers comfortable living with the perfect balance of functionality and style. Featuring two bedrooms and open-plan living, it is ideal for small families, downsizers, rental investment or multi-generational living.";

export const FURA_LIVING_KELVYNGROOVE_DETAIL_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "Affordable Housing",
  },
  { icon: "/fura/icons/expand-03.svg", label: "Size", value: "15 Ha" },
  {
    icon: "/fura/icons/building-03.svg",
    label: "No of units",
    value: "200 individual units",
  },
  {
    icon: "/fura/icons/currency-dollar-circle.svg",
    label: "Unit pricing",
    value: "120k-160k",
  },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "Gross Development Value",
    value: "50 m AUD",
  },
  {
    icon: "/fura/icons/building-05.svg",
    label: "Development",
    value: "Build to rent",
  },
  {
    icon: "/fura/icons/building-07.svg",
    label: "Kelvyngroove Village",
    value: "Residential",
  },
  {
    icon: "/fura/icons/marker-pin-01.svg",
    label: "Location",
    value: "Kingaroy, Queensland",
  },
];

export const THE_LAKES_GALLERY = [
  "/fura/properties/listings/the-lakes.png",
  "/fura/properties/the-lakes/p2.png",
];

export const THE_LAKES_PRICE = "AUD 200 M";

export const THE_LAKES_DESCRIPTION =
  "The Lakes represents one of the largest proposed mixed-use waterfront tourism developments in Logan City, combining: 1,528 dwellings and accommodation units 5-star tourism infrastructure Convention and event facilities Retail and hospitality activation Extensive waterfront amenity";

export const THE_LAKES_DETAIL_SPECS: {
  icon: string;
  label: string;
  value: string;
}[] = [
  {
    icon: "/fura/icons/home-02.svg",
    label: "Project Status",
    value: "The Lakes",
  },
  { icon: "/fura/icons/expand-03.svg", label: "Size", value: "21,9Ha" },
  {
    icon: "/fura/icons/tag-02.svg",
    label: "Gross Development Value",
    value: "GDV  AUD 200 M",
  },
  {
    icon: "/fura/icons/calendar.svg",
    label: "Timeline",
    value: "2026-2027",
  },
  {
    icon: "/fura/icons/line-chart-down-01.svg",
    label: "Development timeline",
    value: "2027-2032",
  },
  {
    icon: "/fura/icons/marker-pin-01.svg",
    label: "Location",
    value: "LoganCity Carbrook",
  },
];
