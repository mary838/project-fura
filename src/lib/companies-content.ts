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

/** The four stages the delivery infographic illustrates, in order. */
export const DELIVERY_IMAGES: { src: string; alt: string }[] = [
  {
    src: "/fura/companies/manufacturing/delivery-1.png",
    alt: "Modules assembled in the factory",
  },
  {
    src: "/fura/companies/manufacturing/delivery-2.png",
    alt: "Packaged modules loaded for shipping",
  },
  {
    src: "/fura/companies/manufacturing/delivery-3.png",
    alt: "A module in transport to site",
  },
  {
    src: "/fura/companies/manufacturing/delivery-4.png",
    alt: "Cranes placing modules during on-site assembly",
  },
];

export const MANUFACTURING_STATS: StatTile[] = [
  {
    label: "Years experience",
    value: "17+",
    icon: "/fura/icons/user-03.svg",
  },
  {
    label: "Project completed",
    value: "500+",
    icon: "/fura/icons/certificate-01.svg",
  },
  {
    label: "Country served",
    value: "15+",
    icon: "/fura/icons/globe-02.svg",
  },
  {
    label: "Professional team",
    value: "100+",
    icon: "/fura/icons/award-03.svg",
  },
];

export type ConstructionProject = {
  image: string;
  /** Separately-cropped still for the mobile card's shorter 370x200 frame. */
  mobileImage: string;
  category: string;
  title: string;
  description: string;
};

export const CONSTRUCTION_PROJECTS: ConstructionProject[] = [
  {
    image: "/fura/companies/construction/p1-central-street.png",
    mobileImage: "/fura/companies/construction/p1-central-street-mobile.jpg",
    category: "STUDENT ACCOMMODATION",
    title: "20 Central Street",
    description:
      "Open Build Pty Ltd contributed to the 20 central Street Student Accommodation, a AUD 109M development comprising three towers of 11, 20 and 24 storeys with 464 rooms. Located in Melbourne’s CBD, the project provides modern, high-density student living with excellent access to public transportand city amenities.",
  },
  {
    image: "/fura/companies/construction/p2-cent-road.png",
    mobileImage: "/fura/companies/construction/p2-cent-road-mobile.jpg",
    category: "HEALTHCARE",
    title: "200 Cent Road Melbourne",
    description:
      "Open Build Pty Ltd contributed to the AUD 152.4M 200 cent road Melbourne, providing an integrated oncology facility equipped with research labs, clinical imaging, trials centre and wellness spaces. Completed in 2024, it stands as a major cancer treatment and research hub in Victoria.",
  },
  {
    image: "/fura/companies/construction/p3-high-street.png",
    mobileImage: "/fura/companies/construction/p3-high-street-mobile.jpg",
    category: "STUDENT ACCOMMODATION",
    title: "High Street",
    description:
      "Open Build Pty Ltd worked on the AUD 60M, 29-storey student accommodation tower at High Street featuring 374 beds, communal spaces, gym, and outdoor courtyards. Built on a constrained 470sqm site in Melbourne CBD, the project reached Practical Completion in August 2023.",
  },
  {
    image: "/fura/companies/construction/p4-private-hospital.png",
    mobileImage: "/fura/companies/construction/p4-private-hospital-mobile.jpg",
    category: "HEALTHCARE",
    title: "Private Hospital",
    description:
      "Open Build Pty Ltd delivered the early works for Private Hospital , including demolition of three buildings, basement retention and heritage façade protection. These works supported the AUD 183M hospital redevelopment and reached Practical Completion in late 2022.",
  },
  {
    image: "/fura/companies/construction/p5-gold-central.png",
    mobileImage: "/fura/companies/construction/p5-gold-central-mobile.jpg",
    category: "STUDENT ACCOMMODATION",
    title: "Gold Central City",
    description:
      "Open Build Pty Ltd worked on the AUD 53M 17-storey student accommodation tower built through the centre of the heritage-listed Gold Central City, delivering 362 beds, a biophilic façade and 5 Star Green Star performance. Completed in 2022.",
  },
  {
    image: "/fura/companies/construction/p6-office-hq.png",
    mobileImage: "/fura/companies/construction/p6-office-hq-mobile.jpg",
    category: "COMMERCIAL",
    title: "Office Headquarters",
    description:
      "Open Build Pty Ltd contributed to the AUD 50M Office Headquarters, a nine-level commercial building with retail, 10,152sqm office NLA, two basement levels and EOT facilities. The project achieved 5 Star Green Star and NABERS ratings, completing in 2021.",
  },
  {
    image: "/fura/companies/construction/p7-state-school.png",
    mobileImage: "/fura/companies/construction/p7-state-school-mobile.jpg",
    category: "EDUCATION",
    title: "State School New Learning Centre",
    description:
      "Open Build Pty Ltd delivered the State School New Learning Centre in Brisbane, completed in two stages within an operational school. Works included refurbishing A Block and constructing a new two-storey Public building with eight classrooms, breakout spaces, an undercroft and a tennis court, linked via a new walkway. Heritage features were preserved and strict access controls were implemented to ensure campus safety.",
  },
  {
    image: "/fura/companies/construction/p8-east-primary.png",
    mobileImage: "/fura/companies/construction/p8-east-primary-mobile.jpg",
    category: "EDUCATION",
    title: "East Primary School",
    description:
      "Open Build Pty Ltd delivered the new East Primary School in South east for the Victorian School Building Authority. The campus includes modern single-storey learning buildings, flexible learning neighbourhoods, specialist facilities, a gymnasium, library and administration centre, complemented by landscaped outdoor areas and sports courts. Practical completion was achieved ahead of the 2026 school year, with the school opening in Term 1.",
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
    icon: "/fura/icons/user-03.svg",
  },
  {
    label: "Project delivery",
    value: "AUD 550M+",
    icon: "/fura/icons/package.svg",
  },
  {
    label: "Certifications",
    value: "National",
    icon: "/fura/icons/award-03.svg",
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

export type SustainabilityPillar = {
  icon: string;
  title: string;
  description: string;
};

export const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    icon: "/fura/icons/leaf.svg",
    title: "Sustainable by Design",
    description:
      "We consider sustainability from the earliest stages of planning — balancing architectural quality, functionality, energy performance and long-term environmental impact.",
  },
  {
    icon: "/fura/icons/home-leaf.svg",
    title: "Energy-Efficient Living",
    description:
      "Smart design strategies, natural light, ventilation, insulation and efficient systems help reduce energy use and create healthier, more comfortable homes.",
  },
  {
    icon: "/fura/icons/home-leaf-2.svg",
    title: "Responsible Materials",
    description:
      "We prioritise durable, low-impact and responsibly sourced materials where appropriate—reducing environmental impact while maintaining quality and performance.",
  },
  {
    icon: "/fura/icons/sun-home.svg",
    title: "Climate-Smart Design",
    description:
      "We prioritise durable, low-impact and responsibly sourced materials where appropriate—reducing environmental impact while maintaining quality and performance.",
  },
  {
    icon: "/fura/icons/build-tools.svg",
    title: "Smarter Construction",
    description:
      "Through integrated design, manufacturing and construction processes, we explore efficient building methods that can reduce material waste and improve consistency.",
  },
  {
    icon: "/fura/icons/clock-refresh.svg",
    title: "Designed for the Long Term",
    description:
      "Sustainability is also about longevity. We design adaptable, resilient places that can continue to serve residents and communities well into the future.",
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

export type IconCard = {
  icon: string;
  title: string;
  description: string;
};

export const PROPERTY_MANAGEMENT_ITEMS: IconCard[] = [
  {
    icon: "/fura/icons/eye.svg",
    title: "Property Inspections",
    description:
      "Executing structured routine check-ups on systems and common areas to mitigate risks and address structural degradation early.",
  },
  {
    icon: "/fura/icons/users-02.svg",
    title: "Resident & Tenant Support",
    description:
      "Providing smooth onboarding, prompt issue resolution, and streamlined communications to preserve premium tenant satisfaction.",
  },
  {
    icon: "/fura/icons/home-02.svg",
    title: "Property Operations",
    description:
      "Managing daily administrative structures, utility contracts, and building operational efficiency with professional administrative focus.",
  },
  {
    icon: "/fura/icons/tool-02.svg",
    title: "Maintenance Coordination",
    description:
      "Coordinating standard upkeep and prompt corrective tasks with highly experienced engineering partners to keep facilities in shape.",
  },
  {
    icon: "/fura/icons/file-06.svg",
    title: "Compliance & Documentation",
    description:
      "Securing alignment with updated municipal codes, tenant laws, security regulations, and property insurance policies.",
  },
  {
    icon: "/fura/icons/bar-chart-02.svg",
    title: "Reporting & Oversight",
    description:
      "Delivering real-time financial tracking, expense breakdowns, and comprehensive health dashboards of all asset categories.",
  },
];

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
};

export const PROPERTY_TIMELINE: TimelineStep[] = [
  {
    number: "01",
    title: "Property Setup",
    description:
      "Initial inspection, comprehensive key inventory, system verification, and operational documentation.",
  },
  {
    number: "02",
    title: "Tenancy Management",
    description:
      "Regular garden upkeep, waste handling coordination, systematic HVAC checks, and cleaning oversight.",
  },
  {
    number: "03",
    title: "Maintenance & Repairs",
    description:
      "24/7 on-call technical team deployment for quick mechanical, plumbing, and structural restoration.",
  },
  {
    number: "04",
    title: "Long-Term Asset Management",
    description:
      "Capital reserves reporting, annual health evaluations, and long-range yield improvement mapping.",
  },
];

export const PROPERTY_CARE_POINTS: { title: string; description: string }[] = [
  {
    title: "We manage every aspect of property care",
    description:
      "From key setup and systems validation on first handover to dynamic everyday maintenance calls and community rules preservation.",
  },
  {
    title: "Responsive Tenant Communication",
    description:
      "Your renters connect to structured, reliable communication lines ensuring rapid fixes and seamless ongoing lease retention.",
  },
  {
    title: "Long-Term Strategy",
    description:
      "Systematic building inspection loops and yield maps ensure physical infrastructure and capital values appreciate consistently over the decade.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Get total visibility on budgets, expenses, check-up logs, and compliance statuses with straightforward reporting dashboards.",
  },
];

export const PROPERTY_ECOSYSTEM_ITEMS: IconCard[] = [
  {
    icon: "/fura/icons/layers-three-01.svg",
    title: "Prime Development",
    description:
      "Premium residential and mixed-use space construction, shaping community structures across dynamic metropolitan zones.",
  },
  {
    icon: "/fura/icons/shuffle-01.svg",
    title: "Habitech Construction",
    description:
      "Quality architecture implementation and strict engineering excellence focusing on material integrity and ecological alignment.",
  },
  {
    icon: "/fura/icons/home-02.svg",
    title: "Habitech Property",
    description:
      "Corporate commercial brokerage and dynamic transaction advisory, mapping high-yield lease acquisitions for private portfolios.",
  },
];

export const FURA_HABITECH_PHILOSOPHY: string[] = [
  "Real asset backed",
  "Land secured",
  "Multiple exit options",
  "Diversified projects",
  "Institutional governance (AFSL)",
  "Strategic partnerships",
  "Conservative underwriting",
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
