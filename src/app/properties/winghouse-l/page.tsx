import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WinghouseDetailSection } from "@/components/properties/WinghouseDetailSection";
import {
  WINGHOUSE_L_DESCRIPTION,
  WINGHOUSE_L_DETAIL_SPECS,
  WINGHOUSE_L_GALLERY,
  WINGHOUSE_L_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "Winghouse L — Fura Habitech",
  description:
    "Designed for growing families and modern lifestyles, the 79 sqm secondary dwelling offers generous living spaces and three bedrooms.",
};

export default function WinghouseLPage() {
  return (
    <PageShell>
      <WinghouseDetailSection
        title="Winghouse L"
        description={WINGHOUSE_L_DESCRIPTION}
        price={WINGHOUSE_L_PRICE}
        gallery={WINGHOUSE_L_GALLERY}
        specs={WINGHOUSE_L_DETAIL_SPECS}
        galleryMoreCount="2+"
        galleryMoreLabel="All 6 photo"
      />
    </PageShell>
  );
}
