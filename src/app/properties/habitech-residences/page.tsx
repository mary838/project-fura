import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { HabitechResidencesDetailSection } from "@/components/properties/HabitechResidencesDetailSection";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Residences",
  description:
    "Premium five-storey residential apartment project at 153 Mt Gravatt–Capalaba Road, Upper Mount Gravatt, Queensland. 35 apartments, A$38.7M GDV.",
  path: "/properties/habitech-residences",
});

export default function HabitechResidencesPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Habitech Residences", path: "/properties/habitech-residences" },
        ]}
        propertyPath="/properties/habitech-residences"
      />
      <HabitechResidencesDetailSection />
    </PageShell>
  );
}
