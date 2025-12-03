import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";

const thesisPoints = [
  {
    emphasis: "Where others hesitate,",
    action: "Avyx steps in.",
  },
  {
    emphasis: "Where rationality stalls,",
    action: "we restore it.",
  },
  {
    emphasis: "Where value is trapped,",
    action: "we unlock it.",
  },
];

export const ThesisSection = () => {
  return (
    <section id="thesis" className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Investment Philosophy
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-foreground mb-8">
                THE AVYX THESIS
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-body-large max-w-3xl mx-auto">
                We focus on the stuck middle — companies too good to fail but unable 
                to break through their current ceiling.
              </p>
            </FadeInSection>
          </div>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {thesisPoints.map((point, index) => (
              <FadeInItem key={index}>
                <div className="group relative bg-card border border-border/60 p-8 lg:p-10 h-full transition-all duration-500 hover:border-brand/40 hover:shadow-[0_8px_40px_-12px_hsla(var(--brand)/0.15)]">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand/80 via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number indicator */}
                  <div className="text-6xl font-serif text-brand/10 absolute top-4 right-6 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl font-serif text-foreground/70 mb-2 leading-relaxed">
                      {point.emphasis}
                    </p>
                    <p className="text-xl md:text-2xl font-serif text-foreground font-medium">
                      {point.action}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
};
