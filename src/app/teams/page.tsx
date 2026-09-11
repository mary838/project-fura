import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { LeadershipSection } from "@/components/team/LeadershipSection";
import { TeamHeroSection } from "@/components/team/TeamHeroSection";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description:
    "A globally connected network combining local expertise, strategic partnerships, and investment capabilities across key international markets.",
  path: "/teams",
});

export default function TeamsPage() {
  // Opens on a white section, so the default solid bar is right here.
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Our Team", path: "/teams" },
        ]}
      />
      <TeamHeroSection />
      <LeadershipSection />
    </PageShell>
  );
}
