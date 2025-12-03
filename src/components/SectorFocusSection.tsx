import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";

const sectors = [
  "B2B SaaS",
  "Hospitality & Travel",
  "Financial Services & Fintech",
  "Enterprise Technology",
];

export const SectorFocusSection = () => {
  return (
    <section id="sectors" className="section-dark py-24 md:py-36">
      <div className="section-container">
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
            <p className="text-body-large mb-12">
              We invest where value is trapped, with special strength in:
            </p>
          </FadeInSection>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sectors.map((sector, index) => (
              <FadeInItem key={index}>
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 hover:border-brand/50 transition-colors duration-300">
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
