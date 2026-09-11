import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { PropertyIntroSection } from "@/components/companies/PropertyIntroSection";
import { PropertyManagementSection } from "@/components/companies/PropertyManagementSection";
import { PropertyTimelineSection } from "@/components/companies/PropertyTimelineSection";
import { PropertyCareSection } from "@/components/companies/PropertyCareSection";
import { PropertyEcosystemSection } from "@/components/companies/PropertyEcosystemSection";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Real Estate Property",
  description:
    "Property sales, market positioning, and buyer engagement across Australia and international markets.",
  path: "/companies/habitech-property",
});

export default function HabitechPropertyPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Habitech Real Estate Property", path: "/companies/habitech-property" },
        ]}
      />
      <CompanyHero
        image="/fura/companies/property/hero.png"
        title="Habitech Real Estate Property Pty Ltd"
        subtitle="Integrated Construction Solutions"
        tagline="Crafting Excellence, Building Success"
        ctaLabel="Partner With Us"
        ctaHref="#contact-form"
      />
      <PropertyIntroSection />
      <PropertyManagementSection />
      <PropertyTimelineSection />
      <PropertyCareSection />
      <PropertyEcosystemSection />
    </PageShell>
  );
}
