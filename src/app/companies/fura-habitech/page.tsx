import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { CapitalFlowSection } from "@/components/companies/CapitalFlowSection";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { FuraIntroSection } from "@/components/companies/FuraIntroSection";
import { FuraStatsSection } from "@/components/companies/FuraStatsSection";
import { StrategyComparisonSection } from "@/components/companies/StrategyComparisonSection";

export const metadata: Metadata = {
  title: "FURA Habitech — Fura Habitech",
  description:
    "Global real asset investment platform for housing solutions in Australia.",
};

export default function FuraHabitechPage() {
  return (
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <CompanyHero
          image="/fura/companies/fura-habitech/hero.png"
          title="FURA Habitech Pty Ltd"
          subtitle="Global Real Asset Investment Platform – for Housing Solutions in Australia"
          ctaLabel="Partner With Us"
          ctaHref="/invest"
        />
        <FuraIntroSection />
        <StrategyComparisonSection />
        <CapitalFlowSection />
        <FuraStatsSection />
        <Footer />
      </main>
    </>
  );
}
