import { FadeInSection } from "./FadeInSection";

export const BeliefSection = () => {
  return (
    <section className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
              Core Belief
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-foreground mb-12">
              OUR BELIEF
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/80 leading-relaxed">
                Value is rarely destroyed
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/80 leading-relaxed">
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
