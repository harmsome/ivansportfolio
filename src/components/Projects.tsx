import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import project2DAnimation from "@/assets/fearflix-door.jpg";
import projectVideoEditing from "@/assets/project-video-editing.jpg";
import projectUIUXDesign from "@/assets/project-uiux-design.jpg";
import project3DModeling from "@/assets/project-3d-modeling.jpg";
import projectInstallations from "@/assets/project-installations.jpg";
import photoshopLogo from "@/assets/photoshop-logo.png";
import illustratorLogo from "@/assets/illustrator-logo.png";
import aftereffectsLogo from "@/assets/aftereffects-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import framerLogo from "@/assets/framer-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import unityLogo from "@/assets/unity-logo.png";
import disquietAnatomyBg from "@/assets/disquiet-anatomy-bg.png";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();

  const projects = [{
    title: "2D Animation",
    description: "Motion story that made with 2D and smooth animation to show feelings and rhythm.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Illustrator", icon: illustratorLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project2DAnimation
  }, {
    title: "Video Editing",
    description: "Cut and mix videos with music and mood to make the story feel alive.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Premiere Pro", icon: premiereLogo },
      { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" }
    ],
    image: projectVideoEditing
  }, {
    title: "UI/UX Design",
    description: "User Friendly and convenient design that looks nice and feels simple to use.",
    apps: [
      { name: "Figma", icon: figmaLogo },
      { name: "Framer", icon: framerLogo },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ],
    image: projectUIUXDesign
  }, {
    title: "3D Modeling",
    description: "Detailed 3D models with nice light and smooth shape.",
    apps: [
      { name: "Blender", icon: blenderLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: disquietAnatomyBg
  }, {
    title: "Installations",
    description: "Interactive project that i made on physical",
    apps: [
      { name: "Unity", icon: unityLogo }
    ],
    image: projectInstallations
  }];

  return (
    <section id="projects" className="pt-20 pb-12 overflow-hidden bg-card">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-1 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground text-base font-mono tracking-wider">
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
                      
                      <div className="flex flex-wrap gap-4 justify-center mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.apps.map((app, appIndex) => (
                          <div 
                            key={appIndex} 
                            className="flex flex-col items-center gap-2"
                          >
                            <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                              <img 
                                src={app.icon} 
                                alt={`${app.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-xs text-white/80">{app.name}</span>
                          </div>
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