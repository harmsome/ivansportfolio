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
    const sectionEl = containerRef.current;
    if (!sectionEl || !api) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduced = mql.matches;
    if (reduced) return;

    let snapping = false;

    const canNext = () => api?.canScrollNext() ?? false;
    const canPrev = () => api?.canScrollPrev() ?? false;

    const horizontalStep = (dir: 'next' | 'prev') => {
      if (isScrollingRef.current) return;
      isScrollingRef.current = true;
      if (dir === 'next') api.scrollNext();
      else api.scrollPrev();
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    };

    const isActive = () => {
      const rect = sectionEl.getBoundingClientRect();
      const atTopAligned = Math.abs(rect.top) < 2; // snapped to top
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      return atTopAligned && visible;
    };

    const snapIntoView = () => {
      if (snapping) return;
      snapping = true;
      const top = sectionEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => {
        snapping = false;
      }, 400);
    };

    const handleWheel = (e: WheelEvent) => {
      if (snapping || (window as any).manualExitProjects) return;

      const rect = sectionEl.getBoundingClientRect();
      const enteringFromAbove = e.deltaY > 0 && rect.top < window.innerHeight && rect.top > 0;
      const enteringFromBelow = e.deltaY < 0 && rect.bottom > 0 && rect.bottom < window.innerHeight;

      // Snap section fully into view on first entry
      if (enteringFromAbove || enteringFromBelow) {
        e.preventDefault();
        snapIntoView();
        return;
      }

      if (!isActive()) return; // allow normal scroll outside active state

      const midGallery = canPrev() && canNext();

      if (e.deltaY > 0) {
        if (canNext()) {
          e.preventDefault();
          horizontalStep('next');
        } else if (midGallery) {
          // block vertical while mid-gallery
          e.preventDefault();
        }
      } else if (e.deltaY < 0) {
        if (canPrev()) {
          e.preventDefault();
          horizontalStep('prev');
        } else if (midGallery) {
          e.preventDefault();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((window as any).manualExitProjects) return;
      if (!isActive()) return;

      switch (e.key) {
        case 'ArrowRight':
          if (canNext()) { e.preventDefault(); horizontalStep('next'); }
          break;
        case 'ArrowLeft':
          if (canPrev()) { e.preventDefault(); horizontalStep('prev'); }
          break;
        case 'ArrowDown':
          if (canNext()) { e.preventDefault(); horizontalStep('next'); }
          break;
        case 'ArrowUp':
          if (canPrev()) { e.preventDefault(); horizontalStep('prev'); }
          break;
        case 'Escape':
          (window as any).manualExitProjects = true;
          break;
      }
    };

    // Touch handlers for mobile/tablet
    let startX = 0, startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if ((window as any).manualExitProjects) return;
      const t = e.touches[0];
      startX = t.clientX; startY = t.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if ((window as any).manualExitProjects) return;
      if (!isActive()) return;

      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const midGallery = canPrev() && canNext();

      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal swipe
        if (dx < -10 && canNext()) { e.preventDefault(); horizontalStep('next'); startX = t.clientX; startY = t.clientY; }
        if (dx > 10 && canPrev()) { e.preventDefault(); horizontalStep('prev'); startX = t.clientX; startY = t.clientY; }
      } else if (midGallery) {
        // Block vertical scroll while mid-gallery
        e.preventDefault();
      }
    };

    // Reset manual exit when section is not visible
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        (window as any).manualExitProjects = false;
      }
    }, { threshold: 0.01 });
    io.observe(sectionEl);

    // Listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    sectionEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    sectionEl.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel as any);
      window.removeEventListener('keydown', handleKeyDown as any);
      sectionEl.removeEventListener('touchstart', handleTouchStart as any);
      sectionEl.removeEventListener('touchmove', handleTouchMove as any);
      io.disconnect();
    };
  }, [api]);

  return (
    <section id="projects-section" className="py-24 overflow-hidden" ref={containerRef}>
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
          <CarouselContent id="projects-scroller" className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="project-card group relative h-[600px] overflow-hidden border border-border bg-background">
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