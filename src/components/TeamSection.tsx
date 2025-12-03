import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";

const supporters = [
  "Good-hearted bankers",
  "Lawyers who are genuine deal makers",
  "Operators who can step into the trenches on day one",
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block text-center">
              Our Team
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-foreground mb-12 text-center">
              THE AVYX PEOPLE
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="text-center mb-12">
              <p className="text-body-large mb-6">
                Avyx is built by entrepreneurs who have been stuck themselves — and exited.
              </p>
              <p className="text-body-large">
                We understand plateaus, ceilings, and the quiet frustration of stalled growth.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="bg-secondary/50 p-8 md:p-12 mb-12">
              <p className="text-lg text-foreground/80 mb-8 text-center">
                We're supported by:
              </p>
              <FadeInStagger className="space-y-4">
                {supporters.map((supporter, index) => (
                  <FadeInItem key={index}>
                    <div className="flex items-center gap-4 justify-center">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                      <span className="text-lg text-foreground">{supporter}</span>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="text-center space-y-4">
              <p className="text-body-large">
                We are friendly to all — yet we call a spade a spade when clarity demands it.
              </p>
              <p className="text-xl font-medium text-foreground">
                We bet where our mouth is. Always.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
