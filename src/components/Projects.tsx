import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const projects = [{
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  }, {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and deadline tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  }, {
    title: "Portfolio Website",
    description: "Modern portfolio website with blog functionality, project showcase, and contact form integration.",
    tech: ["React", "Tailwind CSS", "Sanity CMS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  }, {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and bill payments.",
    tech: ["React Native", "Firebase", "Redux", "Plaid API"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  }, {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with scheduling, insights, and engagement tracking.",
    tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  }];

  useEffect(() => {
    if (!containerRef.current || !api) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      
      // If currently scrolling, prevent any action
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }
      
      const canScrollNext = api.canScrollNext();
      const canScrollPrev = api.canScrollPrev();
      
      // If scrolling down and can move to next slide
      if (e.deltaY > 0 && canScrollNext) {
        e.preventDefault();
        isScrollingRef.current = true;
        api.scrollNext();
        
        // Add delay before allowing next scroll
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      } 
      // If scrolling up and can move to previous slide
      else if (e.deltaY < 0 && canScrollPrev) {
        e.preventDefault();
        isScrollingRef.current = true;
        api.scrollPrev();
        
        // Add delay before allowing next scroll
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
      // Otherwise allow normal page scrolling (when at first/last slide)
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [api]);

  return (
    <section id="projects" className="py-24 overflow-hidden" ref={containerRef}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground text-lg font-mono tracking-wider">
            / Portfolio Showcase
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="group relative h-[600px] overflow-hidden border border-border bg-background">
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-500" />
                  
                  {/* Content Overlay - Always visible but enhanced on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="text-xs px-4 py-2 border border-primary/30 text-primary font-mono backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        size="lg"
                        asChild
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-custom-lg"
                      >
                        <a href={`/project/${index + 1}`}>
                          See More Details
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute top-8 left-8 text-foreground/40 font-mono text-sm tracking-wider">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          <CarouselNext className="hidden md:flex border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;