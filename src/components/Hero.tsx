import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Metadata/Camera UI style */}
          <div className="hud-text mb-8 flex flex-wrap gap-6 animate-in fade-in duration-1000">
            <span className="hud-bracket">LOC: JB/SG</span>
            <span className="hud-bracket flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              REC: ON
            </span>
            <span className="hud-bracket">ROLE: EDITOR</span>
            <span className="hud-bracket">FPS: 24</span>
          </div>

          {/* Main Headline with glitch effect on hover */}
          <h1
            ref={headingRef}
            className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.85] tracking-tight mb-8 glitch-text"
            data-text="VISUALS THAT MOVE."
            style={{
              transform: isHovering
                ? `translate(${mousePos.x}px, ${mousePos.y}px)`
                : "translate(0, 0)",
              transition: "transform 0.1s ease-out",
            }}
          >
            VISUALS
            <br />
            THAT MOVE<span className="text-accent">.</span>
          </h1>

          {/* Subtext */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            High-end video editing, motion design & 3D visualization.
            <br />
            Crafting raw, cinematic content that cuts through the noise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <a
              href="#projects"
              className="btn-brutal px-8 py-4 text-sm font-display"
            >
              VIEW WORKS
            </a>
            <a
              href="#contact"
              className="font-display text-sm tracking-[0.2em] uppercase border-b-2 border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-all"
            >
              GET IN TOUCH →
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hud-text animate-bounce">
            <span className="hud-bracket">SCROLL</span>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-foreground/20 hidden lg:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-foreground/20 hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-foreground/20 hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-foreground/20 hidden lg:block" />
    </section>
  );
};

export default Hero;
