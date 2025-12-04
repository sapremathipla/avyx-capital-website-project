import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";
import bankersImg from "@/assets/bankers.png";
import lawyersImg from "@/assets/lawyers.png";
import operatorsImg from "@/assets/operators.png";

const supporters = [
  {
    title: "Good-hearted bankers",
    image: bankersImg,
  },
  {
    title: "Lawyers who are genuine deal makers",
    image: lawyersImg,
  },
  {
    title: "Operators who can step into the trenches on day one",
    image: operatorsImg,
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
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
            <div className="text-center mb-16">
              <p className="text-body-large mb-6">
                Avyx is built by entrepreneurs who have been stuck themselves — and exited.
              </p>
              <p className="text-body-large">
                We understand plateaus, ceilings, and the quiet frustration of stalled growth.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-lg text-foreground/80 mb-10 text-center">
              We're supported by:
            </p>
          </FadeInSection>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {supporters.map((supporter, index) => (
              <FadeInItem key={index}>
                <div className="group relative bg-card border border-border/60 p-8 lg:p-10 h-full transition-all duration-500 hover:border-brand/40 hover:shadow-[0_8px_40px_-12px_hsla(var(--brand)/0.15)]">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand/80 via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number indicator */}
                  <div className="text-6xl font-serif text-brand/10 absolute top-4 right-6 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-6">
                      <img 
                        src={supporter.image} 
                        alt={supporter.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-lg md:text-xl font-serif text-foreground font-medium">
                      {supporter.title}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

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
