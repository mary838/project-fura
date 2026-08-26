import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { PropertyIntroSection } from "@/components/companies/PropertyIntroSection";
import { PropertySalesSection } from "@/components/companies/PropertySalesSection";

export const metadata: Metadata = {
  title: "Habitech Real Estate Property — Fura Habitech",
  description:
    "Property sales, market positioning, and buyer engagement across Australia and international markets.",
};

export default function HabitechPropertyPage() {
  return (
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <CompanyHero
          image="/fura/companies/property/hero.png"
          title="Habitech Real Estate Property Pty Ltd"
          subtitle="Integrated Construction Solutions"
          tagline="Crafting Excellence, Building Success"
          ctaLabel="Partner With Us"
          ctaHref="/invest"
        />
        <PropertyIntroSection />
        <PropertySalesSection />
        <Footer />
      </main>
    </>
  );
}
