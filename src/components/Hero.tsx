import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          z: -500,
          opacity: 0,
          scale: 0.5,
        },
        {
          z: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-card z-0" />

      <div className="container relative z-10 px-4 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight whitespace-nowrap"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              Hey! I&apos;m <span className="gradient-animated">Ivan</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground animate-in slide-in-from-right-8 duration-1000 delay-400 mt-6">
              A Motion Grapher & Video Editor
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-600 mt-4">
              I Crafting stories that move — with rhythm and soul.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800 mt-12">
            <Button variant="hero" size="lg" asChild className="hover-scale text-lg px-10 py-6">
              <a href="#projects">
                <TypewriterText
                  texts={["View My Project", "Check Out My Work", "See Portfolio"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                />
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-10 py-6">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-8 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 mt-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth hover-scale"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:ivanlay88@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-smooth hover-scale"
              aria-label="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;