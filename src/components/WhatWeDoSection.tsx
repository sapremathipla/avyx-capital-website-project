import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";

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
    <section id="what-we-do" className="section-dark py-24 md:py-36">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <FadeInSection>
              <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
                Capabilities
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-headline text-primary-foreground mb-8">
                WHAT WE DO
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="w-24 h-0.5 bg-brand" />
            </FadeInSection>
          </div>

          <FadeInStagger className="space-y-8">
            {services.map((service, index) => (
              <FadeInItem key={index}>
                <div className="border-l-2 border-brand/30 pl-6 hover:border-brand transition-colors duration-300">
                  <h3 className="text-xl font-serif text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/60">
                    {service.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
};
