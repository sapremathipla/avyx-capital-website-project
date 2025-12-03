import avyxLogo from "@/assets/avyx-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-primary-foreground/10 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img 
              src={avyxLogo} 
              alt="Avyx Capital" 
              className="h-8 w-auto brightness-0 invert opacity-80"
            />
          </div>

          <div className="flex items-center gap-8 text-sm text-primary-foreground/50">
            <span>India & North America</span>
            <span className="hidden md:block">•</span>
            <span>© {currentYear} Avyx Capital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
