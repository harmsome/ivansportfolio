import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import ASCIIText from "./ASCIIText";

const About = () => {
  const highlights = [{
    title: "🎨 Visual Storytelling",
    description: "I create motion pieces that tell stories and capture feelings, not just visuals that look nice."
  }, {
    title: "💫 Design with Emotion",
    description: "Every movement has purpose — I design with feeling, flow, and a sense of rhythm."
  }, {
    title: "🎵 Timing & Flow",
    description: "I pay attention to pacing and energy, making sure everything moves naturally and connects with the audience."
  }];

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-card via-card to-muted/30" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="sr-only">About Me</h2>
          <div 
            className={`relative mx-auto flex justify-center items-center h-[140px] md:h-[180px] w-full max-w-5xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ASCIIText
              text="About Me"
              asciiFontSize={6}
              textFontSize={180}
              textColor="#fdf9f3"
              planeBaseHeight={6}
              enableWaves={true}
            />
          </div>
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I&apos;m Ivan, a motion designer and video editor driven by positivity and rhythm. My strength lies in creating visuals that move with emotion — blending design, timing, and storytelling into one seamless experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card 
                className="p-8 text-center hover:shadow-custom-lg transition-all duration-500 border-border bg-card h-full"
                style={{
                  filter: hoveredIndex === null ? 'none' : hoveredIndex === index ? 'none' : 'blur(4px)',
                  transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
