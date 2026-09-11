import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { ContactValuesSection } from "@/components/properties/ContactValuesSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const RESOURCES = [
  {
    title: "Reports & Updates",
    body: "Quarterly progress updates and portfolio performance summaries for our investment partners.",
  },
  {
    title: "Offer Documents",
    body: "Class-specific offer documents governing each investment strategy, available on request.",
  },
  {
    title: "Investor Enquiries",
    body: "A dedicated point of contact for existing and prospective investors.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Investor Relations",
  description:
    "Reports, offer documents, and a dedicated point of contact for Fura Habitech's investment partners.",
  path: "/investor-relations",
});

export default function InvestorRelationsPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Investor Relations", path: "/investor-relations" },
        ]}
      />
      <CompanyHero
        image="/fura/images/about-hero.png"
        title="Investor Relations"
        subtitle="Global Real Asset Investment Platform"
        tagline="Reports, offer documents, and a dedicated point of contact for our investment partners."
        ctaLabel="Get in Touch"
        ctaHref="#contact"
        align="center"
      />

      <Section gap="xl" reveal>
        <SectionHeading
          align="center-lg"
          title="Resources for our investment partners"
          description="Everything you need to stay informed on your investment with Fura Habitech."
          descriptionSize="base"
        />
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {RESOURCES.map((resource) => (
            <div
              key={resource.title}
              className="card-hover flex flex-col gap-3 rounded-2xl border border-border-primary bg-surface p-6 hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]"
            >
              <p className="text-lg font-semibold text-title">
                {resource.title}
              </p>
              <p className="text-sm text-subtitle">{resource.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <div id="contact">
        <ContactValuesSection />
      </div>
    </PageShell>
  );
}
