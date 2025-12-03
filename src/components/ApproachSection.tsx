import { FadeInSection } from "./FadeInSection";

export const ApproachSection = () => {
  return (
    <section className="section-cream py-24 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Methodology
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-foreground mb-4">
                OUR APPROACH
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-subheadline text-foreground/80 font-serif italic mb-10">
                — Value Enhancers
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="space-y-6 text-body-large">
                <p>If something is missing, we add it.</p>
                <p>If something is broken, we repair it.</p>
                <p>If growth has stalled, we reignite it.</p>
                <p>If the company needs a new home, we provide it.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="mt-10 pt-10 border-t border-border">
                <p className="text-lg text-foreground/70 mb-2">
                  We don't dwell on what went wrong.
                </p>
                <p className="text-xl font-medium text-foreground">
                  We focus on what can go right.
                </p>
              </div>
            </FadeInSection>
          </div>

          <div>
            <FadeInSection delay={0.2}>
              <div className="aspect-square bg-gradient-to-br from-primary/5 via-brand/10 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-8 border border-border/50" />
                <div className="absolute inset-16 border border-brand/20" />
                <div className="absolute inset-24 bg-brand/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-serif text-foreground/5">+</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
