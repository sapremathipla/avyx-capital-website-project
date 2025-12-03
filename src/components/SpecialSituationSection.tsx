import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";

const situations = [
  "Stalled growth",
  "Misaligned investors",
  "Founders not supporting exits",
  "Cluttered cap tables",
  "Missing capabilities",
  "No clear path to scale",
];

export const SpecialSituationSection = () => {
  return (
    <section className="section-cream py-24 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Our Focus
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-foreground mb-8">
                SPECIAL SITUATION CAPITAL
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-body-large mb-8">
                Avyx is a special-situation capital partner. And as the name implies — we handle situations.
              </p>
            </FadeInSection>
          </div>

          <div>
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {situations.map((situation, index) => (
                <FadeInItem key={index}>
                  <div className="premium-card">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-brand rounded-full flex-shrink-0" />
                      <span className="text-foreground font-medium">{situation}</span>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>

        <FadeInSection delay={0.3} className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-serif text-foreground/90 mb-6 italic">
              These aren't obstacles to us — they are invitations.
            </p>
            <p className="text-body-large mb-6">
              We step into complex, high-stakes situations with clarity, control, and operating depth.
            </p>
            <p className="text-lg font-medium text-foreground">
              When the situation is difficult, Avyx is at its best.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
