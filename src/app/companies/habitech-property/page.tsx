import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { PropertyIntroSection } from "@/components/companies/PropertyIntroSection";
import { PropertyManagementSection } from "@/components/companies/PropertyManagementSection";
import { PropertyTimelineSection } from "@/components/companies/PropertyTimelineSection";
import { PropertyCareSection } from "@/components/companies/PropertyCareSection";
import { PropertyEcosystemSection } from "@/components/companies/PropertyEcosystemSection";

export const metadata: Metadata = {
  title: "Habitech Real Estate Property — Fura Habitech",
  description:
    "Property sales, market positioning, and buyer engagement across Australia and international markets.",
};

export default function HabitechPropertyPage() {
  return (
    <PageShell>
      <CompanyHero
        image="/fura/companies/property/hero.png"
        title="Habitech Real Estate Property Pty Ltd"
        subtitle="Integrated Construction Solutions"
        tagline="Crafting Excellence, Building Success"
        ctaLabel="Partner With Us"
        ctaHref="/invest"
      />
      <PropertyIntroSection />
      <PropertyManagementSection />
      <PropertyTimelineSection />
      <PropertyCareSection />
      <PropertyEcosystemSection />
    </PageShell>
  );
}
