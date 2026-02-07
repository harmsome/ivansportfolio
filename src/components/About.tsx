import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import profilePicture from "@/assets/profile-picture.png";

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
    <section id="about" className="relative py-32 lg:py-40 px-4 bg-gradient-to-b from-card via-card to-muted/30" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        {/* Title and Description at the top */}
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide">About Me</h2>
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              I&apos;m Ivan, a motion designer and video editor driven by positivity and rhythm. My strength lies in creating visuals that move with emotion — blending design, timing, and storytelling into one seamless experience.
            </p>
          </div>
        </div>

        {/* Two-column layout: Namecard left, Highlights right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Profile Card */}
          <div 
            className={`flex justify-center md:justify-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ProfileCard
              avatarUrl={profilePicture}
              name=""
              title=""
              handle=""
              status=""
              contactText="Contact"
              showUserInfo={false}
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          {/* Right: Three highlight cards stacked vertically */}
          <div className="flex flex-col gap-8 h-full justify-between">
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
                  className="p-8 hover:shadow-custom-lg transition-all duration-500 border-border bg-card h-full"
                  style={{
                    filter: hoveredIndex === null ? 'blur(1px)' : hoveredIndex === index ? 'blur(0px)' : 'blur(4px)',
                    transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <h3 className="text-xl font-serif font-medium mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
