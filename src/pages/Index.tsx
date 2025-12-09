import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ThesisSection } from "@/components/ThesisSection";
import { SpecialSituationSection } from "@/components/SpecialSituationSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { ApproachSection } from "@/components/ApproachSection";
import { SectorFocusSection } from "@/components/SectorFocusSection";
import { TeamSection } from "@/components/TeamSection";
import { GeographySection } from "@/components/GeographySection";
import { WhyAvyxSection } from "@/components/WhyAvyxSection";
import { BeliefSection } from "@/components/BeliefSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      {/* <ThesisSection /> */}
      <SpecialSituationSection />
      <WhatWeDoSection />
      <WhoWeHelpSection />
      {/* <ApproachSection /> */}
      <SectorFocusSection />
      <TeamSection />
      <GeographySection />
      <WhyAvyxSection />
      {/* <BeliefSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
