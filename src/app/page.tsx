import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/home/AboutSection";
import { GovernanceSection } from "@/components/home/GovernanceSection";
import { HousingHero } from "@/components/home/HousingHero";
import { OurProjectsSection } from "@/components/home/OurProjectsSection";
import { PartnerRibbon } from "@/components/home/PartnerRibbon";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { StrategiesSection } from "@/components/home/StrategiesSection";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";

export default function Home() {
  return (
    <PageShell nav="transparent">
      <HousingHero />
      <AboutSection />
      <StrategiesSection />
      <OurProjectsSection />
      <PortfolioSection />
      <GovernanceSection />
      <WhyPartnerSection />
      <PartnerRibbon />
    </PageShell>
  );
}
