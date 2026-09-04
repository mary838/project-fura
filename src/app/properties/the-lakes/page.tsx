import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TheLakesDetailSection } from "@/components/properties/TheLakesDetailSection";
import {
  THE_LAKES_DESCRIPTION,
  THE_LAKES_DETAIL_SPECS,
  THE_LAKES_GALLERY,
  THE_LAKES_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "The Lakes — Fura Habitech",
  description:
    "The Lakes represents one of the largest proposed mixed-use waterfront tourism developments in Logan City.",
};

export default function TheLakesPage() {
  return (
    <PageShell>
      <TheLakesDetailSection
        title="The Lakes"
        description={THE_LAKES_DESCRIPTION}
        price={THE_LAKES_PRICE}
        gallery={THE_LAKES_GALLERY}
        specs={THE_LAKES_DETAIL_SPECS}
      />
    </PageShell>
  );
}
