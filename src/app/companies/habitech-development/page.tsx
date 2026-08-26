import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { BuildingSystemsSection } from "@/components/companies/BuildingSystemsSection";
import { CompanyHero } from "@/components/companies/CompanyHero";
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
      <CompanyHero
        image="/fura/companies/development/hero.png"
        title="Habitech Development Pty Ltd"
        subtitle="Integrated Construction Solutions"
        tagline="Crafting Excellence, Building Success"
        ctaLabel="Partner With Us"
        ctaHref="/invest"
      />
      <BuildingSystemsSection />
      <EnvironmentalSection />
      <DevelopmentStatsSection />
    </PageShell>
  );
}
