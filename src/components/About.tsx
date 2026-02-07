import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import profilePicture from "@/assets/profile-picture.png";

const About = () => {
  const highlights = [{
    title: "Technical Precision",
    description: "Expert-level proficiency in Premiere Pro, After Effects, and DaVinci Resolve for seamless post-production workflows."
  }, {
    title: "Creative Storytelling",
    description: "Every frame serves the narrative — I craft visuals that evoke emotion and drive engagement."
  }, {
    title: "Client-Focused Delivery",
    description: "Reliable turnaround with attention to brand guidelines and project specifications."
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
    <section id="about" className="relative py-40 lg:py-52 px-6 bg-background" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        {/* Title and Description at the top */}
        <div className="text-center space-y-8 mb-24">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">The Craft Behind the Work</h2>
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              I am a detail-oriented Video Editor and Motion Designer based in Johor Bahru. 
              With a strong foundation in technical post-production (Premiere Pro, After Effects, DaVinci Resolve), 
              I bridge the gap between creative storytelling and technical precision.
            </p>
          </div>
        </div>

        {/* Two-column layout: Namecard left, Highlights right */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
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
                  className="p-8 hover:border-primary/30 transition-all duration-500 border-border bg-card/50 h-full"
                  style={{
                    opacity: hoveredIndex === null ? 0.9 : hoveredIndex === index ? 1 : 0.5,
                    transform: hoveredIndex === index ? 'translateX(8px)' : 'translateX(0)'
                  }}
                >
                  <h3 className="text-lg font-serif font-medium mb-4 tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.description}</p>
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
