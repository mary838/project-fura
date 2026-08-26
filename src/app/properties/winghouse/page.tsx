import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PropertyDetailSection } from "@/components/properties/PropertyDetailSection";

export const metadata: Metadata = {
  title: "Winghouse — Fura Habitech",
  description:
    "Affordable housing in Brisbane, Queensland. 120 units, expected completion Q2 2026.",
};

export default function WinghousePage() {
  return (
    <PageShell>
      <PropertyDetailSection />
    </PageShell>
  );
}
