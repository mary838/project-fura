import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { TheLakesDetailSection } from "@/components/properties/TheLakesDetailSection";
import {
  THE_LAKES_DESCRIPTION,
  THE_LAKES_DETAIL_SPECS,
  THE_LAKES_GALLERY,
  THE_LAKES_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = pageMetadata({
  title: "The Lakes",
  description:
    "The Lakes represents one of the largest proposed mixed-use waterfront tourism developments in Logan City.",
  path: "/properties/the-lakes",
});

export default function TheLakesPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "The Lakes", path: "/properties/the-lakes" },
        ]}
        propertyPath="/properties/the-lakes"
      />
      <TheLakesDetailSection
        title="The Lakes"
        description={THE_LAKES_DESCRIPTION}
        price={THE_LAKES_PRICE}
        gallery={THE_LAKES_GALLERY}
        specs={THE_LAKES_DETAIL_SPECS}
      />
    </PageShell>
  );
}
