import { useState } from "react";
import { FadeInSection } from "./FadeInSection";
import { ContactFormModal } from "./ContactFormModal";
import { ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="section-dark py-12 md:py-18">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <div className="w-20 h-0.5 bg-brand mx-auto mb-8" />
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-headline text-primary-foreground mb-4">
              READY TO RESTART GROWTH?
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl md:text-2xl text-primary-foreground/70 font-serif italic mb-12">
              Let's unstick, rebuild, and unlock what's waiting.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary inline-flex items-center gap-3 group"
            >
              <span>Contact Avyx Capital</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </FadeInSection>
        </div>
      </div>

      <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};
