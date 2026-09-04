import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TimorAvenueDetailSection } from "@/components/properties/TimorAvenueDetailSection";
import {
  TIMOR_AVENUE_1_IMAGE,
  TIMOR_AVENUE_1_PRICE,
  TIMOR_AVENUE_1_SPECS,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "Timor Avenue — Fura Habitech",
  description:
    "A residential development across three land parcels in Loganholme, targeting low-rise housing using modern prefab modular construction.",
};

export default function TimorAvenuePage() {
  return (
    <PageShell>
      <TimorAvenueDetailSection
        image={TIMOR_AVENUE_1_IMAGE}
        price={TIMOR_AVENUE_1_PRICE}
        specs={TIMOR_AVENUE_1_SPECS}
      />
    </PageShell>
  );
}
