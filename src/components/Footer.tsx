const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 md:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Copyright */}
          <div className="hud-text text-center md:text-left">
            <span>© {currentYear} IVAN LAY</span>
            <span className="mx-4">//</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          {/* Center - Status */}
          <div className="hud-text text-accent">
            <span className="hud-bracket flex items-center gap-2 justify-center">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              STATUS: AVAILABLE FOR COMMISSION
            </span>
          </div>

          {/* Right - Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hud-text hover:text-accent transition-colors"
          >
            ↑ BACK TO TOP
          </button>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="font-display text-4xl md:text-6xl font-bold tracking-tight opacity-10">
            IVAN<span className="text-accent">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
