import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";
import whoWeHelpImg from "@/assets/who-we-help.png";

const criteria = [
  "Genuine products",
  "Committed customers",
  "Meaningful revenue",
  "Stalled trajectories",
];

export const WhoWeHelpSection = () => {
  return (
    <section className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 lg:scale-110 lg:-translate-x-8">
            <FadeInSection>
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={whoWeHelpImg} 
                  alt="Business partnership" 
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeInSection>
          </div>

          <div className="order-1 lg:order-2">
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Partnership
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-foreground mb-4">
                WHO WE HELP
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-subheadline text-foreground/80 font-serif italic mb-8">
                Companies seeking growth or a new home
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-body-large mb-8">
                We partner with businesses that have:
              </p>
            </FadeInSection>

            <FadeInStagger className="space-y-3 mb-10">
              {criteria.map((item, index) => (
                <FadeInItem key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-px bg-muted-foreground/50" />
                    <span className="text-base text-foreground/80">{item}</span>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>

            <FadeInSection delay={0.5}>
              <p className="text-body">
                Whether the issue is capability, structure, investor conflict, or founder fatigue — 
                we help companies regain motion.
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
