import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WinghouseDetailSection } from "@/components/properties/WinghouseDetailSection";
import {
  WINGHOUSE_M_DESCRIPTION,
  WINGHOUSE_M_DETAIL_SPECS,
  WINGHOUSE_M_GALLERY,
  WINGHOUSE_M_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "Winghouse M — Fura Habitech",
  description:
    "Spacious, contemporary and thoughtfully designed, the 63 sqm secondary dwelling delivers comfortable living for small families or downsizers.",
};

export default function WinghouseMPage() {
  return (
    <PageShell>
      <WinghouseDetailSection
        title="Winghouse M"
        description={WINGHOUSE_M_DESCRIPTION}
        price={WINGHOUSE_M_PRICE}
        gallery={WINGHOUSE_M_GALLERY}
        specs={WINGHOUSE_M_DETAIL_SPECS}
        galleryMoreCount="9+"
        galleryMoreLabel="All 13 photo"
      />
    </PageShell>
  );
}
