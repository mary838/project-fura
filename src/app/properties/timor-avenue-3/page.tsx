import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { TimorAvenueDetailSection } from "@/components/properties/TimorAvenueDetailSection";
import {
  TIMOR_AVENUE_3_IMAGE,
  TIMOR_AVENUE_3_PRICE,
  TIMOR_AVENUE_3_SPECS,
} from "@/lib/properties-content";

export const metadata: Metadata = pageMetadata({
  title: "Timor Avenue Site 3, Loganholme",
  description:
    "A 794 m² parcel on Timor Avenue, Loganholme, planned for 3 three-bedroom units of approximately 200 sqm, built with modern prefab modular construction.",
  path: "/properties/timor-avenue-3",
});

export default function TimorAvenue3Page() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Timor Avenue Site 3, Loganholme", path: "/properties/timor-avenue-3" },
        ]}
        propertyPath="/properties/timor-avenue-3"
      />
      <TimorAvenueDetailSection
        image={TIMOR_AVENUE_3_IMAGE}
        price={TIMOR_AVENUE_3_PRICE}
        specs={TIMOR_AVENUE_3_SPECS}
      />
    </PageShell>
  );
}
