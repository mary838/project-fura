import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CapitalFlowSection } from "@/components/companies/CapitalFlowSection";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { FuraIntroSection } from "@/components/companies/FuraIntroSection";
import { FuraStatsSection } from "@/components/companies/FuraStatsSection";
import { StrategyComparisonSection } from "@/components/companies/StrategyComparisonSection";

export const metadata: Metadata = pageMetadata({
  title: "FURA Habitech",
  description:
    "Global real asset investment platform for housing solutions in Australia.",
  path: "/companies/fura-habitech",
});

export default function FuraHabitechPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FURA Habitech", path: "/companies/fura-habitech" },
        ]}
      />
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
