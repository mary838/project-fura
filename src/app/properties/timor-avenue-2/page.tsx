import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { TimorAvenueDetailSection } from "@/components/properties/TimorAvenueDetailSection";
import {
  TIMOR_AVENUE_2_IMAGE,
  TIMOR_AVENUE_2_PRICE,
  TIMOR_AVENUE_2_SPECS,
} from "@/lib/properties-content";

export const metadata: Metadata = pageMetadata({
  title: "Timor Avenue Site 2, Loganholme",
  description:
    "A 936 m² parcel on Timor Avenue, Loganholme, planned for 4 three-storey units of approximately 200 sqm, built with modern prefab modular construction.",
  path: "/properties/timor-avenue-2",
});

export default function TimorAvenue2Page() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Timor Avenue Site 2, Loganholme", path: "/properties/timor-avenue-2" },
        ]}
        propertyPath="/properties/timor-avenue-2"
      />
      <TimorAvenueDetailSection
        image={TIMOR_AVENUE_2_IMAGE}
        price={TIMOR_AVENUE_2_PRICE}
        specs={TIMOR_AVENUE_2_SPECS}
      />
    </PageShell>
  );
}
