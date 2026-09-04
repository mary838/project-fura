import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { BuildingSystemsSection } from "@/components/companies/BuildingSystemsSection";
import { DevelopmentHeroSection } from "@/components/companies/DevelopmentHeroSection";
import { DevelopmentStatsSection } from "@/components/companies/DevelopmentStatsSection";
import { EnvironmentalSection } from "@/components/companies/EnvironmentalSection";

export const metadata: Metadata = {
  title: "Habitech Development — Fura Habitech",
  description:
    "Integrated construction solutions. Crafting excellence, building success.",
};

export default function HabitechDevelopmentPage() {
  return (
    <PageShell>
      <DevelopmentHeroSection />
      <EnvironmentalSection />
      <BuildingSystemsSection />
      <DevelopmentStatsSection />
    </PageShell>
  );
}
