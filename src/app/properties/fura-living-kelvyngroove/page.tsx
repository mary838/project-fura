import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { FuraLivingDetailSection } from "@/components/properties/FuraLivingDetailSection";
import {
  FURA_LIVING_KELVYNGROOVE_DESCRIPTION,
  FURA_LIVING_KELVYNGROOVE_DETAIL_SPECS,
  FURA_LIVING_KELVYNGROOVE_GALLERY,
  FURA_LIVING_KELVYNGROOVE_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = pageMetadata({
  title: "Fura Living, Kelvyngroove Village",
  description:
    "Spacious, contemporary and thoughtfully designed, the 63 sqm secondary dwelling delivers comfortable living with the perfect balance of functionality and style.",
  path: "/properties/fura-living-kelvyngroove",
});

export default function FuraLivingKelvyngroovePage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Fura Living, Kelvyngroove Village", path: "/properties/fura-living-kelvyngroove" },
        ]}
        propertyPath="/properties/fura-living-kelvyngroove"
      />
      <FuraLivingDetailSection
        title="Fura Living, Kelvyngroove Village"
        description={FURA_LIVING_KELVYNGROOVE_DESCRIPTION}
        price={FURA_LIVING_KELVYNGROOVE_PRICE}
        gallery={FURA_LIVING_KELVYNGROOVE_GALLERY}
        specs={FURA_LIVING_KELVYNGROOVE_DETAIL_SPECS}
      />
    </PageShell>
  );
}
