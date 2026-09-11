import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { PropertiesListSection } from "@/components/properties/PropertiesListSection";

export const metadata: Metadata = pageMetadata({
  title: "Real Estate Properties",
  description:
    "Completed and ongoing residential, commercial and affordable housing projects across Australia.",
  path: "/properties",
});

export default function PropertiesPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
        ]}
      />
      <PropertiesListSection />
    </PageShell>
  );
}
