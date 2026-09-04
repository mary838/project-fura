import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { HabitechResidencesDetailSection } from "@/components/properties/HabitechResidencesDetailSection";

export const metadata: Metadata = {
  title: "Habitech Residences — Fura Habitech",
  description:
    "Premium five-storey residential apartment project at 153 Mt Gravatt–Capalaba Road, Upper Mount Gravatt, Queensland. 35 apartments, A$38.7M GDV.",
};

export default function HabitechResidencesPage() {
  return (
    <PageShell>
      <HabitechResidencesDetailSection />
    </PageShell>
  );
}
