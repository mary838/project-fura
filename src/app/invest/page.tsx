import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { ContactValuesSection } from "@/components/properties/ContactValuesSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STRATEGIES } from "@/lib/home-content";
import { StrategyCard } from "@/components/ui/StrategyCard";

export const metadata: Metadata = {
  title: "Invest With Us — Fura Habitech",
  description:
    "Partner with Fura Habitech on curated real asset investment opportunities across Australia, from landbanking to build-to-rent strategies.",
};

export default function InvestPage() {
  return (
    <PageShell>
      <CompanyHero
        image="/fura/images/why-partner.png"
        title="Invest With Fura Habitech"
        subtitle="Global Real Asset Investment Platform"
        tagline="Partner with us on curated real asset opportunities across Australia."
        ctaLabel="Get in Touch"
        ctaHref="#contact"
        align="center"
      />

      <Section gap="xl" reveal>
        <SectionHeading
          align="center-lg"
          title="Three strategies capture value at different stages"
          description="Investors select a class; each class is governed by its applicable offer documents."
          descriptionSize="base"
        />
        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start">
          {STRATEGIES.map((strategy) => (
            <StrategyCard key={strategy.badge} {...strategy} />
          ))}
        </div>
      </Section>

      <div id="contact">
        <ContactValuesSection />
      </div>
    </PageShell>
  );
}
