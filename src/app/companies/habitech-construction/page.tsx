import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { ConstructionIntroSection } from "@/components/companies/ConstructionIntroSection";
import { ConstructionProjectsSection } from "@/components/companies/ConstructionProjectsSection";
import { ConstructionStatsSection } from "@/components/companies/ConstructionStatsSection";
import { RegistrationsSection } from "@/components/companies/RegistrationsSection";

export const metadata: Metadata = {
  title: "Habitech Construction — Fura Habitech",
  description:
    "Integrated construction solutions. Crafting excellence, building success.",
};

export default function HabitechConstructionPage() {
  return (
    <PageShell>
      <CompanyHero
        image="/fura/companies/construction/hero.png"
        title="Habitech Construction Pty Ltd"
        subtitle="Integrated Construction Solutions"
        tagline="Crafting Excellence, Building Success"
        ctaLabel="Partner With Us"
        ctaHref="#contact-form"
      />
      <ConstructionIntroSection />
      <ConstructionProjectsSection />
      <RegistrationsSection />
      <ConstructionStatsSection />
    </PageShell>
  );
}
