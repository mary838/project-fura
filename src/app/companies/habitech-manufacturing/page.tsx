import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { CompanyIntroSection } from "@/components/companies/CompanyIntroSection";
import { DeliveryEfficiencySection } from "@/components/companies/DeliveryEfficiencySection";
import { ManufacturingSitesSection } from "@/components/companies/ManufacturingSitesSection";
import { ManufacturingStatsSection } from "@/components/companies/ManufacturingStatsSection";
import { OneStopServiceSection } from "@/components/companies/OneStopServiceSection";

export const metadata: Metadata = {
  title: "Habitech Manufacturing — Fura Habitech",
  description:
    "Integrated prefabricated building solutions. From precision manufacturing to efficient construction.",
};

export default function HabitechManufacturingPage() {
  return (
    <PageShell>
      <CompanyHero
        image="/fura/companies/manufacturing/hero.png"
        title="Habitech Manufacturing Pty Ltd"
        subtitle="Integrated Prefabricated Building Solutions"
        tagline="From precision manufacturing to efficient construction."
        ctaLabel="Explore Our Capabilities"
        ctaHref="#contact-form"
      />
      <CompanyIntroSection />
      <OneStopServiceSection />
      <ManufacturingSitesSection />
      <DeliveryEfficiencySection />
      <ManufacturingStatsSection />
    </PageShell>
  );
}
