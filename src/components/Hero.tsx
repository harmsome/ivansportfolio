import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      
      <div className="container relative z-10 px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in slide-in-from-left-8 duration-1000 delay-200">
              Hey! I&apos;m <span className="gradient-animated">Ivan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-in slide-in-from-right-8 duration-1000 delay-400">
              A Motion Grapher & Video Editor
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-600">
              I Crafting stories that move — with rhythm and soul.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
            <Button variant="hero" size="lg" asChild className="hover-scale">
              <a href="#projects">
                View My Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-smooth" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-smooth" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:ivanlay88@gmail.com" className="text-muted-foreground hover:text-foreground transition-smooth" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;