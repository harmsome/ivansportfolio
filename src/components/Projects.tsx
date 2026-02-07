import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
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
import c4dLogo from "@/assets/c4d-logo.png";

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
      { name: "Cinema 4D", icon: c4dLogo },
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
    <section id="projects" className="pt-32 pb-20 overflow-hidden bg-card">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Showreel Section */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8 tracking-wide">Showreel</h3>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-sm overflow-hidden border border-border shadow-lg">
            <video 
              src="/videos/ivan-showreel.mp4"
              controls
              className="w-full h-full object-cover"
              poster=""
            />
          </div>
        </div>

        <div className="flex justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium tracking-wide"
          >
            <a href="/cv/ivans-resume.pdf" download="ivans-resume.pdf">
              <Download className="h-4 w-4 mr-2" />
              Download Ivan's Resume
            </a>
          </Button>
        </div>
        {/* New TikTok Videos Section */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2 rounded-sm text-sm font-medium shadow-lg shadow-primary/20 tracking-wide">
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-ping"></span>
              New Added
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide">Latest TikTok Videos</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Site Visit", video: "/videos/site-visit.mp4" },
              { name: "Office Partition & Lock", video: "/videos/office-partition-lock.mp4" },
              { name: "Meeting room", video: "/videos/meeting-room.mp4" },
              { name: "Lider Glass", video: "/videos/lider-glass.mp4" }
            ].map((video, index) => (
              <div key={index} className="space-y-3 group">
                <p className="text-sm font-medium text-center text-foreground/80 tracking-wide">{video.name}</p>
                <div className="relative w-full aspect-[9/16] bg-background rounded-sm overflow-hidden ring-1 ring-primary/30 group-hover:ring-primary transition-all">
                  <video 
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/project/2" className="text-primary hover:underline text-sm font-medium tracking-wide">
              View all TikTok videos →
            </a>
          </div>
        </div>

        <div className="text-center space-y-3 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-wide">Projects</h2>
          <p className="text-muted-foreground text-lg font-light tracking-widest uppercase">
            Portfolio Showcase
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
          <CarouselContent id="projects-scroller" className="-ml-6">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-6 basis-full">
                <div className="project-card group relative h-[650px] overflow-hidden border border-border bg-background">
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-background/70 group-hover:bg-background/85 transition-all duration-500" />
                  
                  {/* Content Overlay - Always visible but enhanced on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 tracking-wide">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-5 justify-center mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.apps.map((app, appIndex) => (
                          <div 
                            key={appIndex} 
                            className="flex flex-col items-center gap-3"
                          >
                            <div className="w-14 h-14 flex items-center justify-center bg-foreground/10 backdrop-blur-sm rounded-sm p-2.5">
                              <img 
                                src={app.icon} 
                                alt={`${app.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-xs text-foreground/70 font-light tracking-wide">{app.name}</span>
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