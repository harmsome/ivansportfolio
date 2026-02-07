import { useState, useEffect } from "react";

const HUDNavigation = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { label: "WORKS", href: "#projects" },
    { label: "ABOUT", href: "#about" },
    { label: "STACK", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Top Left - Name/Logo */}
      <div className="fixed top-6 left-6 z-50">
        <a href="#" className="group">
          <span className="font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
            IVAN<span className="text-accent">.</span>
          </span>
          <div className="hud-text mt-1 opacity-60">EDITOR // MOTION</div>
        </a>
      </div>

      {/* Top Right - Menu Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="font-display text-sm tracking-[0.3em] uppercase border border-foreground/30 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-200"
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Bottom Left - Status */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:block">
        <div className="hud-text space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>AVAILABLE FOR WORK</span>
          </div>
          <div className="opacity-60">
            {time.toLocaleTimeString("en-US", { hour12: false })} // JB/SG
          </div>
        </div>
      </div>

      {/* Bottom Right - Contact Quick Link */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <a
          href="mailto:ivanlay88@gmail.com"
          className="hud-text hover:text-accent transition-colors"
        >
          ivanlay88@gmail.com
        </a>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 z-40 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <nav className="space-y-4 text-center">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground hover:text-accent transition-colors glitch-text"
                data-text={item.label}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Menu decorative elements */}
        <div className="absolute top-1/4 left-10 hud-text opacity-30 hidden lg:block">
          <div>NAV_MENU.EXE</div>
          <div>VER 2.0.25</div>
        </div>
        <div className="absolute bottom-1/4 right-10 hud-text opacity-30 text-right hidden lg:block">
          <div>SELECT DESTINATION</div>
          <div>→ SCROLL TO NAVIGATE</div>
        </div>
      </div>
    </>
  );
};

export default HUDNavigation;
