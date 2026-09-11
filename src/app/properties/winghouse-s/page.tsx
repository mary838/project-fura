import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { WinghouseDetailSection } from "@/components/properties/WinghouseDetailSection";
import {
  WINGHOUSE_S_DESCRIPTION,
  WINGHOUSE_S_DETAIL_SPECS,
  WINGHOUSE_S_GALLERY,
  WINGHOUSE_S_PRICE,
} from "@/lib/properties-content";

export const metadata: Metadata = pageMetadata({
  title: "Winghouse S",
  description:
    "Compact, modern and intelligently designed, the 41 sqm secondary dwelling offers comfortable independent living.",
  path: "/properties/winghouse-s",
});

export default function WinghouseSPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Real Estate Properties", path: "/properties" },
          { name: "Winghouse S", path: "/properties/winghouse-s" },
        ]}
        propertyPath="/properties/winghouse-s"
      />
      <WinghouseDetailSection
        title="Winghouse S"
        description={WINGHOUSE_S_DESCRIPTION}
        price={WINGHOUSE_S_PRICE}
        gallery={WINGHOUSE_S_GALLERY}
        specs={WINGHOUSE_S_DETAIL_SPECS}
      />
    </PageShell>
  );
}
