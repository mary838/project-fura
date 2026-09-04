import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WinghouseDetailSection } from "@/components/properties/WinghouseDetailSection";
import {
  WINGHOUSE_S_DESCRIPTION,
  WINGHOUSE_S_DETAIL_SPECS,
  WINGHOUSE_S_GALLERY,
  WINGHOUSE_S_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "Winghouse S — Fura Habitech",
  description:
    "Compact, modern and intelligently designed, the 41 sqm secondary dwelling offers comfortable independent living.",
};

export default function WinghouseSPage() {
  return (
    <PageShell>
      <WinghouseDetailSection
        title="Winghouse S"
        description={WINGHOUSE_S_DESCRIPTION}
        price={WINGHOUSE_S_PRICE}
        gallery={WINGHOUSE_S_GALLERY}
        specs={WINGHOUSE_S_DETAIL_SPECS}
      />
    </PageShell>
  );
}
