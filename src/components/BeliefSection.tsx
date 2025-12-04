import { FadeInSection } from "./FadeInSection";
import ourBeliefImg from "@/assets/our-belief.png";

export const BeliefSection = () => {
  return (
    <section className="section-dark py-24 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Core Belief
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-primary-foreground mb-12">
                OUR BELIEF
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary-foreground/80 leading-relaxed">
                  Value is rarely destroyed
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary-foreground/80 leading-relaxed">
                  It is usually trapped
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand leading-relaxed mt-6">
                  Avyx exists to unlock it
                </p>
              </div>
            </FadeInSection>
          </div>

          <div>
            <FadeInSection delay={0.2}>
              <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                <img 
                  src={ourBeliefImg} 
                  alt="Target and precision" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
