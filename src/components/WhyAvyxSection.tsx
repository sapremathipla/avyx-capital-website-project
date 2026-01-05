import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";

const reasons = [
  "We fix structural issues others avoid",
  "We take responsibility, not just board seats",
  "We resolve founder–investor gridlock",
  "We bring clarity, control, and capability",
  "We do the unglamorous, high-impact work",
  "We focus on outcomes, not optics",
];

export const WhyAvyxSection = () => {
  return (
    <section className="section-dark py-12 md:py-18">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                The Difference
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-primary-foreground mb-12">
                WHY AVYX
              </h2>
            </FadeInSection>

            <FadeInStagger className="space-y-4">
              {reasons.map((reason, index) => (
                <FadeInItem key={index}>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-primary-foreground/80">{reason}</span>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          <div className="flex items-center">
            <FadeInSection delay={0.3}>
              <div className="border-l-4 border-brand pl-8">
                <p className="text-xl md:text-2xl font-serif text-primary-foreground/90 leading-relaxed mb-4">
                  Avyx isn't merely capital.
                </p>
                <p className="text-lg text-primary-foreground/70 leading-relaxed">
                  It's a reset switch, a growth engine, and a new home for companies that deserve more.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
