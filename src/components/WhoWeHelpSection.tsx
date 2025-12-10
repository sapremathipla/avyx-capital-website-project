import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";
import { Package, Users, TrendingUp, Target } from "lucide-react";

const criteria = [
  { text: "Genuine products", icon: Package },
  { text: "Committed customers", icon: Users },
  { text: "Meaningful revenue", icon: TrendingUp },
  { text: "Stalled trajectories", icon: Target },
];

export const WhoWeHelpSection = () => {
  return (
    <section className="section-light py-24 md:py-36">
      <div className="section-container">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
            <p className="text-subheadline text-foreground/80 font-serif italic">
              Companies seeking growth or a new home
            </p>
          </FadeInSection>
        </div>

        {/* Partner Line */}
        <FadeInSection delay={0.3}>
          <p className="text-body-large text-center mb-12">
            We partner with businesses that have:
          </p>
        </FadeInSection>

        {/* Four Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {criteria.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <FadeInItem key={index}>
                <div className="bg-brand rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-medium text-white">{item.text}</span>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        {/* Closing Line */}
        <FadeInSection delay={0.5}>
          <p className="text-body text-center max-w-3xl mx-auto">
            Whether the issue is capability, structure, investor conflict, or founder fatigue — 
            we help companies regain motion.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};
