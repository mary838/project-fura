import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { PropertyDetailSection } from "@/components/properties/PropertyDetailSection";

export const metadata: Metadata = pageMetadata({
  title: "Winghouse",
  description:
    "Affordable housing in Brisbane, Queensland. 120 units, expected completion Q2 2026.",
  path: "/properties/winghouse",
});

export default function WinghousePage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Winghouse", path: "/properties/winghouse" },
        ]}
      />
      <PropertyDetailSection />
    </PageShell>
  );
}
