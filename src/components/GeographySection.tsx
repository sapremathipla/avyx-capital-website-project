import { FadeInSection } from "./FadeInSection";
import indiaMapImg from "@/assets/india-map.png";

export const GeographySection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background Map Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${indiaMapImg})` }}
      />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
              Global Reach
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-foreground mb-8">
              GEOGRAPHY
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex items-center justify-center gap-8 mb-8">
              <span className="text-3xl md:text-4xl font-serif text-foreground">India</span>
              <div className="w-16 h-px bg-brand" />
              <span className="text-3xl md:text-4xl font-serif text-foreground">North America</span>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-body-large">
              Two vast ecosystems. One philosophy: unlock value wherever it's trapped.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
