import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToThesis = () => {
    const element = document.getElementById("thesis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-background/40" />

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-0.5 bg-brand mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-display text-foreground mb-6"
          >
            <span className="block">AVYX CAPITAL</span>
            <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl font-serif italic text-foreground/70">
              — Unlocking Value. Unstucking Companies.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-3xl"
          >
            The private equity partner for companies seeking growth or a new home
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            <p className="mb-6">
              Avyx Capital invests in businesses that have built something meaningful — strong products, 
              real customers, real traction — yet find themselves plateaued or constrained.
            </p>
            <p className="mb-2">These companies don't need pep talks.</p>
            <p className="text-foreground font-medium">
              They need a partner who fixes, builds, and accelerates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-12 flex gap-4"
          >
            <button onClick={scrollToContact} className="btn-primary">
              Contact Avyx Capital
            </button>
            <button onClick={scrollToThesis} className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase border-2 border-foreground/20 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToThesis}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
