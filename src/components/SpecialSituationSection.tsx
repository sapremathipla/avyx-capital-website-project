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
        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
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
            <p className="text-body-large text-muted-foreground">
              Avyx is a special-situation capital partner. And as the name implies — we handle situations.
            </p>
          </FadeInSection>
        </div>

        {/* First Row - 3 Cards */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {situations.slice(0, 3).map((situation, index) => (
            <FadeInItem key={index}>
              <div className="group bg-white border border-border/50 rounded-lg p-8 hover:shadow-xl hover:border-brand/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-brand rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-lg font-medium text-foreground">{situation}</span>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Second Row - 3 Cards (but using max-w to show 2 equal) */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {situations.slice(3, 6).map((situation, index) => (
            <FadeInItem key={index + 3}>
              <div className="group bg-white border border-border/50 rounded-lg p-8 hover:shadow-xl hover:border-brand/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-brand rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-lg font-medium text-foreground">{situation}</span>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Bottom Quote Section */}
        <FadeInSection delay={0.4} className="mt-16">
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
