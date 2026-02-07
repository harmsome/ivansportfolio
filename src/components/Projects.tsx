import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import project2DAnimation from "@/assets/fearflix-door.jpg";
import projectVideoEditing from "@/assets/project-video-editing.jpg";
import projectUIUXDesign from "@/assets/project-uiux-design.jpg";
import projectInstallations from "@/assets/project-installations.jpg";
import disquietAnatomyBg from "@/assets/disquiet-anatomy-bg.png";

const Projects = () => {
  // Primary Projects: Video, Motion, 3D (large, immersive)
  const selectedWorks = [
    {
      id: 2,
      title: "Video Editing",
      subtitle: "Commercial & Narrative",
      image: projectVideoEditing,
    },
    {
      id: 1,
      title: "Motion Graphics",
      subtitle: "2D Animation & VFX",
      image: project2DAnimation,
    },
    {
      id: 4,
      title: "3D Visualization",
      subtitle: "Modeling & Rendering",
      image: disquietAnatomyBg,
    },
  ];

  // Secondary Projects: UI, Installations (compact)
  const extendedCapabilities = [
    {
      id: 3,
      title: "UI/UX Design",
      image: projectUIUXDesign,
    },
    {
      id: 5,
      title: "Interactive Installations",
      image: projectInstallations,
    },
  ];

  return (
    <section id="projects" className="pt-40 pb-32 overflow-hidden bg-card">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Showreel Section */}
        <div className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Showreel 2024</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight">A Collection of My Best Work</h2>
          </div>
          <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden">
            <video 
              src="/videos/ivan-showreel.mp4"
              controls
              className="w-full h-full object-cover"
              poster=""
            />
          </div>
        </div>

        {/* Resume Download */}
        <div className="flex justify-center mb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-medium tracking-wide px-10 py-6"
          >
            <a href="/cv/ivans-resume.pdf" download="ivans-resume.pdf">
              <Download className="h-5 w-5 mr-3" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Latest TikTok Videos */}
        <div className="mb-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4 mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Recent
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight">Social Media Content</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "Site Visit", video: "/videos/site-visit.mp4" },
              { name: "Office Partition", video: "/videos/office-partition-lock.mp4" },
              { name: "Meeting Room", video: "/videos/meeting-room.mp4" },
              { name: "Lider Glass", video: "/videos/lider-glass.mp4" }
            ].map((video, index) => (
              <div key={index} className="space-y-3 group">
                <div className="relative w-full aspect-[9/16] bg-background overflow-hidden group-hover:ring-1 group-hover:ring-primary/50 transition-all duration-500">
                  <video 
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>
                </div>
                <p className="text-xs font-medium text-center text-muted-foreground tracking-wide">{video.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/project/2" className="text-primary hover:text-primary/80 text-sm font-medium tracking-wide inline-flex items-center gap-2 transition-colors">
              View All Content
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ==================== PRIMARY SECTION: SELECTED WORKS ==================== */}
        <div className="mb-48">
          <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">Selected Works</h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
              High-end video production, motion design, and 3D visualization projects
            </p>
          </div>

          {/* Large Cinematic Grid */}
          <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Featured Large Card */}
            <a 
              href={`/project/${selectedWorks[0].id}`}
              className="group relative block h-[60vh] min-h-[500px] max-h-[700px] overflow-hidden cursor-pointer"
            >
              <img 
                src={selectedWorks[0].image} 
                alt={selectedWorks[0].title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
                <div className="transform transition-all duration-700 group-hover:translate-y-0 translate-y-6">
                  <p className="text-primary text-xs font-medium tracking-[0.25em] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {selectedWorks[0].subtitle}
                  </p>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-6 tracking-tight">
                    {selectedWorks[0].title}
                  </h3>
                  <Button 
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide px-8"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </a>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {selectedWorks.slice(1).map((project) => (
                <a 
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="group relative h-[50vh] min-h-[400px] max-h-[550px] overflow-hidden cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <div className="transform transition-all duration-700 group-hover:translate-y-0 translate-y-4">
                      <p className="text-primary text-xs font-medium tracking-[0.25em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.subtitle}
                      </p>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-5 tracking-tight">
                        {project.title}
                      </h3>
                      <Button 
                        size="default"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide"
                      >
                        View Project
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== SECONDARY SECTION: EXTENDED CAPABILITIES ==================== */}
        <div className="border-t border-border pt-24">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-muted-foreground">Extended Capabilities</h3>
            <p className="text-muted-foreground/70 text-sm font-light max-w-xl mx-auto">
              Multidisciplinary skills that support my creative vision
            </p>
          </div>

          {/* Compact Horizontal Scroll / Grid */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 md:max-w-3xl md:mx-auto">
            {extendedCapabilities.map((project) => (
              <a 
                key={project.id}
                href={`/project/${project.id}`}
                className="group relative flex-shrink-0 w-72 md:w-auto h-48 overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/80 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-lg font-serif font-medium text-foreground/80 group-hover:text-foreground tracking-wide transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 tracking-wide">
                      View Project →
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;