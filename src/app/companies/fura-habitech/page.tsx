import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
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
    <PageShell>
      <CompanyHero
        image="/fura/companies/fura-habitech/hero.png"
        title="FURA Habitech Pty Ltd"
        subtitle="Global Real Asset Investment Platform – for Housing Solutions in Australia"
        ctaLabel="Partner With Us"
        ctaHref="#contact-form"
      />
      <FuraIntroSection />
      <StrategyComparisonSection />
      <CapitalFlowSection />
      <FuraStatsSection />
    </PageShell>
  );
}
