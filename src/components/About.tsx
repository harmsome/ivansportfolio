import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experience = [
    { year: "2024", role: "FREELANCE EDITOR", company: "VARIOUS CLIENTS" },
    { year: "2023", role: "MOTION DESIGNER", company: "STUDIO PROJECTS" },
    { year: "2022", role: "VIDEO EDITOR", company: "COMMERCIAL WORK" },
  ];

  const awards = [
    { year: "2024", title: "KANCIL AWARD", category: "BEST STUDENT FILM" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 bg-card" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-foreground" />
            <span className="hud-text">ABOUT_ME</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            THE
            <br />
            MANIFESTO<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Manifesto Content - Brutalist Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Left - Statement */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
              I MAKE VISUALS THAT PUNCH.
              <br />
              EDIT CONTENT THAT STICKS.
              <br />
              <span className="text-muted-foreground">NO FLUFF. JUST IMPACT.</span>
            </p>

            <p className="font-mono text-muted-foreground leading-relaxed mb-8">
              Detail-oriented editor based in JB. Technical precision meets creative vision.
              Every cut serves the story. Every frame earns its place.
            </p>

            <a
              href="/cv/ivans-resume.pdf"
              download="ivans-resume.pdf"
              className="btn-brutal inline-flex items-center gap-3 px-6 py-3 text-sm"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </a>
          </div>

          {/* Right - Stats */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold">50+</span>
                <p className="hud-text mt-2">PROJECTS DELIVERED</p>
              </div>
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold">3+</span>
                <p className="hud-text mt-2">YEARS EXPERIENCE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold">24</span>
                <p className="hud-text mt-2">FPS PREFERRED</p>
              </div>
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold">∞</span>
                <p className="hud-text mt-2">CAFFEINE CONSUMED</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="hr-brutal mb-16" />

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">
            EXPERIENCE<span className="text-accent">_</span>
          </h3>
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border hover:border-accent transition-colors group"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="hud-text w-16">{item.year}</span>
                  <span className="font-display text-lg md:text-xl font-bold group-hover:text-accent transition-colors">
                    {item.role}
                  </span>
                </div>
                <span className="hud-text opacity-60 mt-2 md:mt-0">{item.company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="hr-brutal mb-16" />

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">
            AWARDS<span className="text-accent">_</span>
          </h3>
          <div className="space-y-4">
            {awards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-accent group"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="hud-text w-16">{item.year}</span>
                  <span className="font-display text-xl md:text-2xl font-bold text-accent neon-glow">
                    ★ {item.title}
                  </span>
                </div>
                <span className="hud-text mt-2 md:mt-0">{item.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Note */}
        <div className="text-center py-12 border-t border-b border-border">
          <p className="hud-text text-sm">
            <span className="hud-bracket">BASED IN JOHOR BAHRU</span>
            <span className="mx-4">//</span>
            <span className="hud-bracket">OPEN TO SG COMMUTE</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
