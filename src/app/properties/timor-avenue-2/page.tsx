import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TimorAvenueDetailSection } from "@/components/properties/TimorAvenueDetailSection";
import {
  TIMOR_AVENUE_2_IMAGE,
  TIMOR_AVENUE_2_PRICE,
  TIMOR_AVENUE_2_SPECS,
} from "@/lib/properties-content";

export const metadata: Metadata = {
  title: "Timor Avenue — Fura Habitech",
  description:
    "A residential development across three land parcels in Loganholme, targeting low-rise housing using modern prefab modular construction.",
};

export default function TimorAvenue2Page() {
  return (
    <PageShell>
      <TimorAvenueDetailSection
        image={TIMOR_AVENUE_2_IMAGE}
        price={TIMOR_AVENUE_2_PRICE}
        specs={TIMOR_AVENUE_2_SPECS}
      />
    </PageShell>
  );
}
