import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { TimorAvenueDetailSection } from "@/components/properties/TimorAvenueDetailSection";
import {
  TIMOR_AVENUE_1_IMAGE,
  TIMOR_AVENUE_1_PRICE,
  TIMOR_AVENUE_1_SPECS,
} from "@/lib/properties-content";

export const metadata: Metadata = pageMetadata({
  title: "Timor Avenue Site 1, Loganholme",
  description:
    "A 2,013 m² parcel on Timor Avenue, Loganholme, planned for 10 three-storey units built with modern prefab modular construction. From AUD 900,000 per unit.",
  path: "/properties/timor-avenue",
});

export default function TimorAvenuePage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Timor Avenue Site 1, Loganholme", path: "/properties/timor-avenue" },
        ]}
        propertyPath="/properties/timor-avenue"
      />
      <TimorAvenueDetailSection
        image={TIMOR_AVENUE_1_IMAGE}
        price={TIMOR_AVENUE_1_PRICE}
        specs={TIMOR_AVENUE_1_SPECS}
      />
    </PageShell>
  );
}
