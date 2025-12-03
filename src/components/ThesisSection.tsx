import { FadeInSection } from "./FadeInSection";

export const ThesisSection = () => {
  return (
    <section id="thesis" className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
              Investment Philosophy
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-foreground mb-12">
              THE AVYX THESIS
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="text-body-large space-y-8">
              <p>
                We focus on the stuck middle — companies too good to fail but unable 
                to break through their current ceiling.
              </p>
              <div className="py-8 border-y border-border/50">
                <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-relaxed">
                  Where others hesitate, Avyx steps in.<br />
                  Where rationality stalls, we restore it.<br />
                  Where value is trapped, we unlock it.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
