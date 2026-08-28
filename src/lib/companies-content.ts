/** Content for the company detail pages. */

export type ServiceStep = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export type DeliveryPoint = {
  number: string;
  title: string;
  description: string;
};

export type StatTile = {
  label: string;
  value: string;
  icon: string;
  /** True when the SVG already draws its own 64px circular container. */
  iconIsContainer?: boolean;
};

export const MANUFACTURING_STEPS: ServiceStep[] = [
  {
    number: "01",
    title: "Design & Planning",
    description:
      "We start with a deep understanding of your needs and site conditions. Our team delivers requirement planning, concept design, detailed design, and seamless implementation coordination tailored to your project goals.",
    image: "/fura/companies/manufacturing/step-01.png",
  },
  {
    number: "02",
    title: "Certifications",
    description:
      "We perform engineering validation and rigorous compliance checks, including structural review and material specification verification. Every design is finalized with a design freeze sign-off to ensure safety, reliability, and code compliance.",
    image: "/fura/companies/manufacturing/step-02.png",
  },
  {
    number: "03",
    title: "Manufacture",
    description:
      "Our advanced prefabrication facilities leverage precision prefabrication and smart manufacturing. Each component undergoes strict quality inspection and is carefully stored to protect quality until delivery.",
    image: "/fura/companies/manufacturing/step-03.png",
  },
  {
    number: "04",
    title: "Transportation",
    description:
      "We perform engineering validation and rigorous compliance checks, including structural review and material specification verification. Every design is finalized with a design freeze sign-off to ensure safety, reliability, and code compliance.",
    image: "/fura/companies/manufacturing/step-04.png",
  },
  {
    number: "05",
    title: "Assembly",
    description:
      "Our experienced installation teams ensure safe and precise on-site assembly. We provide lifting guidance, thorough inspection, and construction supervision to maintain the highest standards from start to finish.",
    image: "/fura/companies/manufacturing/step-05.png",
  },
  {
    number: "06",
    title: "Fitting & Fixtures",
    description:
      "We complete all finishing works and ensure everything is ready for use. Comprehensive documentation, phased acceptance, and final handover provide you with peace of mind and a smooth project closeout.",
    image: "/fura/companies/manufacturing/step-06.png",
  },
];

export const MANUFACTURING_SITES: string[] = [
  "/fura/companies/manufacturing/site-1.png",
  "/fura/companies/manufacturing/site-2.png",
  "/fura/companies/manufacturing/site-3.png",
  "/fura/companies/manufacturing/site-4.png",
];

export const DELIVERY_POINTS: DeliveryPoint[] = [
  {
    number: "01",
    title: "Reduced on-site labour",
    description: "Factory production reduces site-based trade hours.",
  },
  {
    number: "02",
    title: "Shorter delivery programme",
    description: "Off-site production can progress alongside site works.",
  },
  {
    number: "03",
    title: "Controlled quality",
    description:
      "Standardised components are produced in a managed environment.",
  },
  {
    number: "04",
    title: "Lower site dependency",
    description:
      "Reduced exposure to trade availability and weather disruption.",
  },
];

export const MANUFACTURING_STATS: StatTile[] = [
  {
    label: "Years experience",
    value: "17+",
    icon: "/fura/icons/stat-experience.svg",
  },
  {
    label: "Project completed",
    value: "500+",
    icon: "/fura/icons/stat-projects.svg",
  },
  {
    label: "Country served",
    value: "15+",
    icon: "/fura/icons/stat-countries.svg",
    iconIsContainer: true,
  },
  {
    label: "Professional team",
    value: "100+",
    icon: "/fura/icons/stat-team.svg",
    iconIsContainer: true,
  },
];

export type ConstructionProject = {
  image: string;
  category: string;
  title: string;
  /** Long form, shown from `lg`. */
  description: string;
  /** Condensed one-liner the mobile card shows instead of `description`. */
  meta: string;
};

export const CONSTRUCTION_PROJECTS: ConstructionProject[] = [
  {
    image: "/fura/companies/construction/p1-central-street.png",
    category: "STUDENT ACCOMMODATION",
    title: "20 Central Street",
    description:
      "Open Build Pty Ltd contributed to the 20 central Street Student Accommodation, a AUD 109M development comprising three towers of 11, 20 and 24 storeys with 464 rooms. Located in Melbourne’s CBD, the project provides modern, high-density student living with excellent access to public transportand city amenities.",
    meta: "AUD 108M | Melbourne CBD",
  },
  {
    image: "/fura/companies/construction/p2-cent-road.png",
    category: "HEALTHCARE",
    title: "200 Cent Road Melbourne",
    description:
      "Open Build Pty Ltd contributed to the AUD 152.4M 200 cent road Melbourne, providing an integrated oncology facility equipped with research labs, clinical imaging, trials centre and wellness spaces. Completed in 2024, it stands as a major cancer treatment and research hub in Victoria.",
    meta: "AUD 152.4M | Oncology research hub",
  },
  {
    image: "/fura/companies/construction/p3-high-street.png",
    category: "STUDENT ACCOMMODATION",
    title: "High Street",
    description:
      "Open Build Pty Ltd worked on the AUD 60M, 29-storey student accommodation tower at High Street featuring 374 beds, communal spaces, gym, and outdoor courtyards. Built on a constrained 470sqm site in Melbourne CBD, the project reached Practical Completion in August 2023.",
    meta: "AUD 60M | Melbourne CBD",
  },
  {
    image: "/fura/companies/construction/p4-private-hospital.png",
    category: "HEALTHCARE",
    title: "Private Hospital",
    description:
      "Open Build Pty Ltd delivered the early works for Private Hospital , including demolition of three buildings, basement retention and heritage façade protection. These works supported the AUD 183M hospital redevelopment and reached Practical Completion in late 2022.",
    meta: "Supported AUD 180M project",
  },
  {
    image: "/fura/companies/construction/p5-gold-central.png",
    category: "STUDENT ACCOMMODATION",
    title: "Gold Central City",
    description:
      "Open Build Pty Ltd worked on the AUD 53M 17-storey student accommodation tower built through the centre of the heritage-listed Gold Central City, delivering 362 beds, a biophilic façade and 5 Star Green Star performance. Completed in 2022.",
    meta: "AUD 53M | Melbourne CBD",
  },
  {
    image: "/fura/companies/construction/p6-office-hq.png",
    category: "COMMERCIAL",
    title: "Office Headquarters",
    description:
      "Open Build Pty Ltd contributed to the AUD 50M Office Headquarters, a nine-level commercial building with retail, 10,152sqm office NLA, two basement levels and EOT facilities. The project achieved 5 Star Green Star and NABERS ratings, completing in 2021.",
    meta: "AUD 50M | 10,152 sqm NLA",
  },
  {
    image: "/fura/companies/construction/p7-state-school.png",
    category: "EDUCATION",
    title: "State School New Learning Centre",
    description:
      "Open Build Pty Ltd delivered the State School New Learning Centre in Brisbane, completed in two stages within an operational school. Works included refurbishing A Block and constructing a new two-storey Public building with eight classrooms, breakout spaces, an undercroft and a tennis court, linked via a new walkway. Heritage features were preserved and strict access controls were implemented to ensure campus safety.",
    meta: "Brisbane | Education Development",
  },
  {
    image: "/fura/companies/construction/p8-east-primary.png",
    category: "EDUCATION",
    title: "East Primary School",
    description:
      "Open Build Pty Ltd delivered the new East Primary School in South east for the Victorian School Building Authority. The campus includes modern single-storey learning buildings, flexible learning neighbourhoods, specialist facilities, a gymnasium, library and administration centre, complemented by landscaped outdoor areas and sports courts. Practical completion was achieved ahead of the 2026 school year, with the school opening in Term 1.",
    meta: "Victorian School Building Authority",
  },
];

export const CONSTRUCTION_REGISTRATIONS: string[] = [
  "Victoria (VBA – Victorian Building Authority)",
  "Domestic Builder Unlimited — DB-U",
  "Commercial Builder Unlimited — CB-U",
  "New South Wales (NSW)",
  "Commercial Builder – Unlimited Category — NSW",
  "Queensland (QLD)",
  "Commercial Builder – Unlimited Category — QLD",
  "Registered Draftsperson",
  "Building Design — Architectural — DP-AD",
  "Building Design — Services — DP-SD",
];

export const CONSTRUCTION_STATS: StatTile[] = [
  {
    label: "Years experience",
    value: "25+",
    icon: "/fura/icons/stat-years.svg",
  },
  {
    label: "Project delivery",
    value: "AUD 550M+",
    icon: "/fura/icons/stat-delivery.svg",
    iconIsContainer: true,
  },
  {
    label: "Certifications",
    value: "National",
    icon: "/fura/icons/stat-certifications.svg",
  },
];

export type BuildingSystem = {
  image: string;
  title: string;
  description: string;
};

export const BUILDING_SYSTEMS: BuildingSystem[] = [
  {
    image: "/fura/companies/development/sys-alc-panel.png",
    title: "ALC Panel System",
    description:
      "ALC panels provide a lightweight and efficient wall system designed for faster installation, improved thermal performance, acoustic comfort and fire resistance. Their prefabricated nature helps reduce on-site work while supporting more efficient and sustainable construction.",
  },
  {
    image: "/fura/companies/development/sys-cold-steel.png",
    title: "Cold Formed Steel",
    description:
      "Cold formed steel provides a lightweight, recyclable structural system designed for accuracy, prefabrication and efficient assembly. Its strength, thermal performance and seismic resilience make it suitable for flexible, high-performance building solutions.",
  },
  {
    image: "/fura/companies/development/sys-precast.png",
    title: "Precast Building System",
    description:
      "Precast concrete combines factory-controlled precision with faster installation, durability and reduced on-site impact. The system supports energy-efficient construction, strong structural performance and a wide variety of architectural finishes.",
  },
];

export type SustainabilityCert = {
  image: string;
  /** Certifying body, used as the stamp's alternative text. */
  name: string;
  /**
   * Artwork width as a multiple of the 120px stamp. Each source file carries
   * roughly half its width in whitespace, so the design scales it up until the
   * mark fills the circle and lets the circle crop the rest.
   */
  zoom: number;
  /**
   * Nudges the artwork within the stamp, in px, where the design re-centres
   * the crop — a few marks sit off-centre in their source file, and centring
   * them instead pulls neighbouring artwork into the circle.
   */
  offsetX?: number;
  offsetY?: number;
  /**
   * Clips the artwork to a window of this size, centred in the stamp. The
   * wordmark logos are masked to a band in the design, which keeps stray marks
   * from the source file — a neighbouring logo, a registered symbol — out of
   * the circle.
   */
  frame?: { width: number; height: number };
  /** RESET sits on an off-white ground rather than pure white. */
  ground?: string;
};

export const SUSTAINABILITY_CERTS: SustainabilityCert[] = [
  {
    image: "/fura/companies/development/certs/cert-1.png",
    name: "WELL Silver 2023",
    zoom: 1.97,
    offsetX: 6.5,
    offsetY: 3.3,
  },
  {
    image: "/fura/companies/development/certs/cert-2.png",
    name: "International Living Future Institute",
    zoom: 1.79,
    frame: { width: 94, height: 41 },
  },
  {
    image: "/fura/companies/development/certs/cert-3.png",
    name: "USGBC LEED Platinum",
    zoom: 1.95,
  },
  {
    image: "/fura/companies/development/certs/cert-4.png",
    name: "RESET Standard",
    zoom: 1.95,
    offsetX: -9,
    offsetY: 1.4,
    ground: "#fbfbfb",
  },
  {
    image: "/fura/companies/development/certs/cert-5.png",
    name: "HQE",
    zoom: 1.78,
    offsetX: 1.9,
    offsetY: -5.6,
    frame: { width: 94, height: 52 },
  },
  {
    image: "/fura/companies/development/certs/cert-6.png",
    name: "MINERGIE",
    zoom: 1.68,
    offsetX: 6.7,
    offsetY: -5.3,
    frame: { width: 104, height: 24 },
  },
];

export const DEVELOPMENT_STATS: StatTile[] = [
  {
    label: "Years experience",
    value: "25+",
    icon: "/fura/icons/stat-dev-years.svg",
  },
  {
    label: "Project complete",
    value: "80+",
    icon: "/fura/icons/stat-dev-projects.svg",
    iconIsContainer: true,
  },
  {
    label: "Sustainable",
    value: "Architecture approach",
    icon: "/fura/icons/stat-dev-sustainable.svg",
  },
];

export const PROPERTY_SHOWCASE: { image: string; label: string }[] = [
  { image: "/fura/companies/property/showcase-l.png", label: "Type L floor plan" },
  { image: "/fura/companies/property/showcase-m.png", label: "Type M floor plan" },
  { image: "/fura/companies/property/showcase-s.png", label: "Type S floor plan" },
];

export const PROPERTY_STATS: StatTile[] = [
  {
    label: "Years experience",
    value: "20+",
    icon: "/fura/icons/stat-prop-years.svg",
  },
  {
    label: "Global sales",
    value: "Network",
    icon: "/fura/icons/stat-prop-network.svg",
    iconIsContainer: true,
  },
];

export const FURA_HABITECH_STATS: StatTile[] = [
  {
    label: "Years experience",
    value: "17+",
    icon: "/fura/icons/stat-fh-years.svg",
  },
  {
    label: "ASIC Certified",
    value: "AFSL licensed",
    icon: "/fura/icons/stat-fh-asic.svg",
    iconIsContainer: true,
  },
];
