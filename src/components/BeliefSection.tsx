import { FadeInSection } from "./FadeInSection";
import ourBeliefImg from "@/assets/our-belief.png";

export const BeliefSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-24 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ourBeliefImg})` }}
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
              Core Belief
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-white mb-12">
              OUR BELIEF
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white/80 leading-relaxed">
                Value is rarely destroyed
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white/80 leading-relaxed">
                It is usually trapped
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand leading-relaxed mt-6">
                Avyx exists to unlock it
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
