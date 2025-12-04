import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";
import whatWeDoImg from "@/assets/what-we-do.png";

const services = [
  {
    title: "Recapitalization & Structured Secondary",
    description: "We clean up cap tables, create liquidity, and reset the company for growth.",
  },
  {
    title: "Primary Capital Infusion",
    description: "Fresh capital when it truly accelerates the next chapter.",
  },
  {
    title: "Deep Operating Support",
    description: "We enter the business and strengthen, rebuild, or replace what's missing.",
  },
  {
    title: "Strategic Control",
    description: "We step into the driver's seat where governance and discipline are required.",
  },
  {
    title: "Opening Doors & Markets",
    description: "Our networks become your growth engine — across North America and India.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="section-light py-24 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Capabilities
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-foreground mb-8">
                WHAT WE DO
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="w-24 h-0.5 bg-brand mb-10" />
            </FadeInSection>

            <FadeInStagger className="space-y-6">
              {services.map((service, index) => (
                <FadeInItem key={index}>
                  <div className="border-l-2 border-brand/30 pl-6 hover:border-brand transition-colors duration-300">
                    <h3 className="text-xl font-serif text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          <div className="lg:scale-110 lg:translate-x-8">
            <FadeInSection delay={0.2}>
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={whatWeDoImg} 
                  alt="Growth chart" 
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};
