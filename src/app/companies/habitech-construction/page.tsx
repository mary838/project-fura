import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { ConstructionIntroSection } from "@/components/companies/ConstructionIntroSection";
import { ConstructionProjectsSection } from "@/components/companies/ConstructionProjectsSection";
import { RegistrationsSection } from "@/components/companies/RegistrationsSection";

export const metadata: Metadata = {
  title: "Habitech Construction — Fura Habitech",
  description:
    "Integrated construction solutions. Crafting excellence, building success.",
};

export default function HabitechConstructionPage() {
  return (
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <CompanyHero
          image="/fura/companies/construction/hero.png"
          title="Habitech Construction Pty Ltd"
          subtitle="Integrated Construction Solutions"
          tagline="Crafting Excellence, Building Success"
          ctaLabel="Partner With Us"
          ctaHref="/invest"
        />
        <ConstructionIntroSection />
        <ConstructionProjectsSection />
        <RegistrationsSection />
        <Footer />
      </main>
    </>
  );
}
