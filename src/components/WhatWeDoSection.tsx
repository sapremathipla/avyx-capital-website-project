import { FadeInSection, FadeInStagger, FadeInItem } from "./FadeInSection";
import { RefreshCw, TrendingUp, Wrench, Target, Globe } from "lucide-react";

const services = [
  {
    title: "Recapitalization & Structured Secondary",
    description: "We clean up cap tables, create liquidity, and reset the company for growth.",
    icon: RefreshCw,
  },
  {
    title: "Primary Capital Infusion",
    description: "Fresh capital when it truly accelerates the next chapter.",
    icon: TrendingUp,
  },
  {
    title: "Deep Operating Support",
    description: "We enter the business and strengthen, rebuild, or replace what's missing.",
    icon: Wrench,
  },
  {
    title: "Strategic Control",
    description: "We step into the driver's seat where governance and discipline are required.",
    icon: Target,
  },
  {
    title: "Opening Doors & Markets",
    description: "Our networks become your growth engine — across North America and India.",
    icon: Globe,
  },
];

export const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="section-light py-24 md:py-36">
      <div className="section-container">
        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeInSection>
            <span className="text-sm tracking-[0.3em] uppercase text-brand font-medium mb-6 block">
              Capabilities
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-foreground mb-4">
              WHAT WE DO
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="w-24 h-0.5 bg-brand mx-auto" />
          </FadeInSection>
        </div>

        {/* 5 Cards in a Row */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <FadeInItem key={index}>
                <div className="group bg-white border border-border/50 rounded-lg p-6 hover:shadow-xl hover:border-brand/30 transition-all duration-500 h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-3 leading-tight text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
};
