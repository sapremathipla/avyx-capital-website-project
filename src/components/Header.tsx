import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avyxLogo from "@/assets/avyx-logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            <a href="#" className="flex items-center">
              <img 
                src={avyxLogo} 
                alt="Avyx Capital" 
                className="h-10 md:h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {[
                { label: "Thesis", id: "thesis" },
                { label: "What We Do", id: "what-we-do" },
                { label: "Sectors", id: "sectors" },
                { label: "Team", id: "team" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    isScrolled 
                      ? "text-foreground/70 hover:text-brand" 
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium tracking-wide uppercase px-6 py-2.5 transition-all duration-300 ${
                  isScrolled
                    ? "bg-brand text-brand-foreground hover:bg-brand/90"
                    : "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-primary-foreground"
              } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-primary-foreground"
              } ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-primary-foreground"
              } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {[
                { label: "Thesis", id: "thesis" },
                { label: "What We Do", id: "what-we-do" },
                { label: "Sectors", id: "sectors" },
                { label: "Team", id: "team" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-serif text-primary-foreground hover:text-brand transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
