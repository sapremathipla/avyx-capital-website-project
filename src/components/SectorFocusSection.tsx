import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";
import sectorFocusBg from "@/assets/sector-focus-bg.png";

const sectors = [
  "B2B SaaS",
  "Hospitality & Travel",
  "Financial Services & Fintech",
  "Enterprise Technology",
];

export const SectorFocusSection = () => {
  return (
    <section 
      id="sectors" 
      className="relative py-24 md:py-36"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sectorFocusBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/60" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
              Industries
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-primary-foreground mb-4">
              SECTOR FOCUS
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl font-serif text-primary-foreground/80 italic mb-12">
              Sector-agnostic. Depth where it matters.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-lg text-primary-foreground/70 mb-12">
              We invest where value is trapped, with special strength in:
            </p>
          </FadeInSection>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sectors.map((sector, index) => (
              <FadeInItem key={index}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 hover:border-brand/50 hover:bg-primary-foreground/15 transition-all duration-300">
                  <span className="text-xl font-serif text-primary-foreground">
                    {sector}
                  </span>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeInSection delay={0.5}>
            <p className="text-primary-foreground/70">
              In these spaces, we bring not just capital — but credibility and operating expertise.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
