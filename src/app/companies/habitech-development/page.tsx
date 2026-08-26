import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
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
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
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
        <Footer />
      </main>
    </>
  );
}
