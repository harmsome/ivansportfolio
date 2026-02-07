import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract luxury background */}
      <div className="absolute inset-0 bg-background z-0">
        {/* Subtle gradient orbs for luxury feel */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-[100px]" />
      </div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] z-[1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Fine horizontal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Eyebrow text */}
          <p className="text-primary text-sm md:text-base font-medium tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Video Editor & Motion Designer
          </p>
          
          <div className="space-y-8">
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium tracking-tight leading-[1.1]"
            >
              Visual Precision &<br />
              <span className="text-primary">Cinematic Storytelling</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-600 font-light leading-relaxed">
              Specializing in High-End Video Editing, Motion Design, and 3D Visualization. 
              Crafting immersive narratives for brands that demand perfection.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800 pt-6">
            <Button 
              variant="hero" 
              size="lg" 
              asChild 
              className="text-base md:text-lg px-10 py-7 tracking-wide font-medium"
            >
              <a href="#projects">
                View Selected Works
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="text-base md:text-lg px-10 py-7 tracking-wide border-border hover:border-primary hover:text-primary"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-10 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 pt-8">
            <a
              href="https://www.linkedin.com/in/ivan-lay-jiun-yu-923a05358/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ivanlay88@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-card to-transparent z-[1]" />
    </section>
  );
};

export default Hero;