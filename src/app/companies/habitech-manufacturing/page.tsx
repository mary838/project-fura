import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { CompanyIntroSection } from "@/components/companies/CompanyIntroSection";
import { DeliveryEfficiencySection } from "@/components/companies/DeliveryEfficiencySection";
import { ManufacturingSitesSection } from "@/components/companies/ManufacturingSitesSection";
import { OneStopServiceSection } from "@/components/companies/OneStopServiceSection";

export const metadata: Metadata = {
  title: "Habitech Manufacturing — Fura Habitech",
  description:
    "Integrated prefabricated building solutions. From precision manufacturing to efficient construction.",
};

export default function HabitechManufacturingPage() {
  return (
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <CompanyHero
          image="/fura/companies/manufacturing/hero.png"
          title="Habitech Manufacturing Pty Ltd"
          subtitle="Integrated Prefabricated Building Solutions"
          tagline="From precision manufacturing to efficient construction."
          ctaLabel="Explore Our Capabilities"
          ctaHref="/invest"
        />
        <CompanyIntroSection />
        <OneStopServiceSection />
        <ManufacturingSitesSection />
        <DeliveryEfficiencySection />
        <Footer />
      </main>
    </>
  );
}
