import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import ASCIIText from "./ASCIIText";
import TrueFocus from "./TrueFocus";

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
    <section id="about" className="py-24 px-4 bg-card" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <ASCIIText text="About Me" asciiFontSize={6} textFontSize={120} />
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
            >
              <Card className="p-8 text-center hover:shadow-custom-lg transition-smooth border-border bg-card h-full">
                <h3 className="text-xl font-semibold mb-3">
                  <TrueFocus 
                    sentence={item.title} 
                    manualMode={true}
                    blurAmount={3}
                    borderColor="hsl(var(--primary))"
                    glowColor="hsl(var(--primary) / 0.6)"
                    animationDuration={0.3}
                  />
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
