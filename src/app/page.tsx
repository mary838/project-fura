import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
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
    <>
      <NavigationBar />
      <main className="flex w-full flex-1 flex-col">
        <HousingHero />
        <AboutSection />
        <StrategiesSection />
        <OurProjectsSection />
        <PortfolioSection />
        <GovernanceSection />
        <WhyPartnerSection />
        <PartnerRibbon />
        <Footer />
      </main>
    </>
  );
}
