import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const containerRef = useRef<HTMLDivElement>(null);

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
  }];

  useEffect(() => {
    if (!containerRef.current || !api) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0) {
        api?.scrollNext();
      } else {
        api?.scrollPrev();
      }
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
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="group hover:shadow-custom-lg transition-smooth flex flex-col border-border bg-card h-full overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;