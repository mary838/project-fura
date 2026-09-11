import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { ConstructionIntroSection } from "@/components/companies/ConstructionIntroSection";
import { ConstructionProjectsSection } from "@/components/companies/ConstructionProjectsSection";
import { ConstructionStatsSection } from "@/components/companies/ConstructionStatsSection";
import { RegistrationsSection } from "@/components/companies/RegistrationsSection";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Construction",
  description:
    "Integrated construction solutions. Crafting excellence, building success.",
  path: "/companies/habitech-construction",
});

export default function HabitechConstructionPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Habitech Construction", path: "/companies/habitech-construction" },
        ]}
      />
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
