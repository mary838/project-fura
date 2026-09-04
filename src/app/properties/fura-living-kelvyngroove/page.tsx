import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FuraLivingDetailSection } from "@/components/properties/FuraLivingDetailSection";
import {
  FURA_LIVING_KELVYNGROOVE_DESCRIPTION,
  FURA_LIVING_KELVYNGROOVE_DETAIL_SPECS,
  FURA_LIVING_KELVYNGROOVE_GALLERY,
  FURA_LIVING_KELVYNGROOVE_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "Fura Living, Kelvyngroove Village — Fura Habitech",
  description:
    "Spacious, contemporary and thoughtfully designed, the 63 sqm secondary dwelling delivers comfortable living with the perfect balance of functionality and style.",
};

export default function FuraLivingKelvyngroovePage() {
  return (
    <PageShell>
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
