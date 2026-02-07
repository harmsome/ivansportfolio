import { useState, useRef } from "react";
import project2DAnimation from "@/assets/fearflix-door.jpg";
import projectVideoEditing from "@/assets/project-video-editing.jpg";
import projectUIUXDesign from "@/assets/project-uiux-design.jpg";
import projectInstallations from "@/assets/project-installations.jpg";
import disquietAnatomyBg from "@/assets/disquiet-anatomy-bg.png";
import project3DModeling from "@/assets/project-3d-modeling.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 2,
      title: "VIDEO EDITING",
      subtitle: "COMMERCIAL // NARRATIVE",
      image: projectVideoEditing,
      video: "/videos/ivan-showreel.mp4",
      size: "large", // Takes 2 columns
      category: "VIDEO",
    },
    {
      id: 1,
      title: "MOTION GRAPHICS",
      subtitle: "2D ANIMATION // VFX",
      image: project2DAnimation,
      video: "/videos/fearflix-final.mp4",
      size: "medium",
      category: "MOTION",
    },
    {
      id: 4,
      title: "3D VISUALIZATION",
      subtitle: "MODELING // RENDERING",
      image: disquietAnatomyBg,
      size: "medium",
      category: "3D",
    },
    {
      id: 3,
      title: "UI/UX DESIGN",
      subtitle: "INTERFACE // EXPERIENCE",
      image: projectUIUXDesign,
      size: "small",
      category: "CODE",
    },
    {
      id: 5,
      title: "INSTALLATIONS",
      subtitle: "INTERACTIVE // SPATIAL",
      image: projectInstallations,
      size: "tall",
      category: "ART",
    },
    {
      id: 6,
      title: "SOCIAL CONTENT",
      subtitle: "TIKTOK // REELS",
      image: projectVideoEditing,
      video: "/videos/site-visit.mp4",
      size: "small",
      category: "VIDEO",
    },
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-foreground" />
            <span className="hud-text">PORTFOLIO_2024</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            SELECTED
            <br />
            WORKS<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Showreel */}
        <div className="mb-16 md:mb-24">
          <div className="hud-text mb-4">
            <span className="hud-bracket">SHOWREEL 2024</span>
          </div>
          <div className="relative aspect-video bg-card border border-border overflow-hidden group">
            <video
              src="/videos/ivan-showreel.mp4"
              controls
              className="w-full h-full object-cover"
              poster=""
            />
            <div className="absolute top-4 right-4 hud-text opacity-60">
              <span className="hud-bracket">DURATION: 02:30</span>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={`/project/${project.id}`}
              className={`relative overflow-hidden border border-border bg-card group cursor-pointer ${getGridClass(project.size)}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image/Video */}
              <div className="absolute inset-0">
                {project.video && hoveredProject === index ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 grayscale-0"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === index ? "grayscale-0 scale-105" : "grayscale"
                    }`}
                  />
                )}
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-background/80 transition-opacity duration-500 ${
                  hoveredProject === index ? "opacity-0" : "opacity-60"
                }`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                {/* Category Tag */}
                <div className="flex justify-between items-start">
                  <span className="hud-text text-[10px] md:text-xs border border-foreground/30 px-2 py-1">
                    {project.category}
                  </span>
                  <span className="hud-text text-[10px] md:text-xs opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div
                  className={`transition-all duration-500 ${
                    hoveredProject === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
                  }`}
                >
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="hud-text text-[10px] md:text-xs opacity-60">{project.subtitle}</p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 border-2 transition-all duration-300 pointer-events-none ${
                  hoveredProject === index ? "border-accent" : "border-transparent"
                }`}
              />
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-4 font-display text-sm tracking-[0.2em] uppercase border-b border-foreground/30 pb-2 hover:border-accent hover:text-accent transition-all"
          >
            <span>EXPLORE ALL PROJECTS</span>
            <span>→</span>
          </a>
        </div>

        {/* TikTok/Social Section */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="hud-text flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              RECENT UPLOADS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              { name: "SITE VISIT", video: "/videos/site-visit.mp4" },
              { name: "PARTITION", video: "/videos/office-partition-lock.mp4" },
              { name: "MEETING RM", video: "/videos/meeting-room.mp4" },
              { name: "LIDER", video: "/videos/lider-glass.mp4" },
            ].map((video, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[9/16] bg-card border border-border overflow-hidden">
                  <video
                    src={video.video}
                    controls
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="hud-text text-[10px] md:text-xs mt-2 text-center">{video.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
