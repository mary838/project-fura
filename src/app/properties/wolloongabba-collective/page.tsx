import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { WolloongabbaCollectiveDetailSection } from "@/components/properties/WolloongabbaCollectiveDetailSection";

export const metadata: Metadata = pageMetadata({
  title: "The Wolloongabba Collective",
  description:
    "A large-scale inner-city landbank project comprising six adjoining parcels with a combined site area of 10,336 sqm in Woolloongabba, Brisbane.",
  path: "/properties/wolloongabba-collective",
});

export default function WolloongabbaCollectivePage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "The Wolloongabba Collective", path: "/properties/wolloongabba-collective" },
        ]}
        propertyPath="/properties/wolloongabba-collective"
      />
      <WolloongabbaCollectiveDetailSection />
    </PageShell>
  );
}
