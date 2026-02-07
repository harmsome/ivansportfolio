import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import project2DAnimation from "@/assets/fearflix-door.jpg";
import projectVideoEditing from "@/assets/project-video-editing.jpg";
import disquietAnatomyBg from "@/assets/disquiet-anatomy-bg.png";

const Projects = () => {
  // Filtered projects: Only Video Editing, Motion Graphics (2D Animation), and 3D Modeling
  const projects = [
    {
      id: 2,
      title: "Video Editing",
      description: "Cut and mix videos with music and mood to make the story feel alive.",
      image: projectVideoEditing,
      size: "large" as const,
    },
    {
      id: 1,
      title: "Motion Graphics",
      description: "Motion story that made with 2D and smooth animation to show feelings and rhythm.",
      image: project2DAnimation,
      size: "medium" as const,
    },
    {
      id: 4,
      title: "3D Modeling",
      description: "Detailed 3D models with nice light and smooth shape.",
      image: disquietAnatomyBg,
      size: "medium" as const,
    },
  ];

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

        <div className="text-center space-y-3 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-wide">Projects</h2>
          <p className="text-muted-foreground text-lg font-light tracking-widest uppercase">
            Portfolio Showcase
          </p>
        </div>

        {/* Cinematic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Large Featured Project */}
          <a 
            href={`/project/${projects[0].id}`}
            className="group relative md:col-span-2 h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
          >
            <img 
              src={projects[0].image} 
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Featured</p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-4 tracking-wide">
                  {projects[0].title}
                </h3>
                <p className="text-foreground/70 text-lg max-w-xl font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 mb-6">
                  {projects[0].description}
                </p>
                <Button 
                  size="lg"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-custom-lg font-medium tracking-wide"
                >
                  View Project
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </a>

          {/* Medium Projects */}
          {projects.slice(1).map((project) => (
            <a 
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative h-[400px] lg:h-[450px] overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-base max-w-md font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 mb-5">
                    {project.description}
                  </p>
                  <Button 
                    size="default"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-custom-lg font-medium tracking-wide"
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
    </section>
  );
};

export default Projects;