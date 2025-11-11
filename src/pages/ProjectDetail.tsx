import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import FlowingMenu from "@/components/FlowingMenu";
import CircularNextButton from "@/components/CircularNextButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import project2DAnimation from "@/assets/fearflix-door.jpg";
import fearflixHeroEyes from "@/assets/fearflix-hero-eyes.jpg";
import projectVideoEditing from "@/assets/project-video-editing.jpg";
import projectUIUXDesign from "@/assets/project-uiux-design.jpg";
import project3DModeling from "@/assets/project-3d-modeling.jpg";
import projectInstallations from "@/assets/project-installations.jpg";
import fearflixNetflix from "@/assets/fearflix-netflix.jpg";
import fearflixStyleframe1 from "@/assets/fearflix-styleframe-1.jpg";
import fearflixStyleframe2 from "@/assets/fearflix-styleframe-2.jpg";
import fearflixStyleframe3 from "@/assets/fearflix-styleframe-3.jpg";
import fearflixStyleframe4 from "@/assets/fearflix-styleframe-4.jpg";
import fearflixStyleframe5 from "@/assets/fearflix-styleframe-5.jpg";
import fearflixStyleframe6 from "@/assets/fearflix-styleframe-6.jpg";
import fearflixStyleframe7 from "@/assets/fearflix-styleframe-7.jpg";
import photoshopLogo from "@/assets/photoshop-logo.png";
import illustratorLogo from "@/assets/illustrator-logo.png";
import aftereffectsLogo from "@/assets/aftereffects-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import framerLogo from "@/assets/framer-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import unityLogo from "@/assets/unity-logo.png";

interface SubProject {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  overview?: string;
  styleframes?: Array<{ id: number; image: string }>;
  videoPath?: string;
  isHorror?: boolean;
}

const ProjectDetail = () => {
  const { id, subId } = useParams();
  const navigate = useNavigate();
  const [selectedStyleframe, setSelectedStyleframe] = useState<string | null>(null);

  const projects = [{
    id: 1,
    title: "2D Animation",
    year: "2024",
    description: "Motion story that made with 2D and smooth animation to show feelings and rhythm.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Illustrator", icon: illustratorLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project2DAnimation,
    subProjects: [
      { 
        id: 1, 
        title: "The Fearflix", 
        year: "2024", 
        description: "This is a Netflix horror series 2d animation ads", 
        image: fearflixHeroEyes,
        overview: "A chilling Netflix horror series brought to life through compelling 2D animation. This project combines dark atmospheric visuals with smooth motion design to create an engaging promotional campaign that captures the essence of fear and suspense. Each frame was meticulously crafted to build tension and intrigue, drawing viewers into a world of supernatural terror.",
        styleframes: [
          { id: 1, image: fearflixStyleframe1 },
          { id: 2, image: fearflixStyleframe2 },
          { id: 3, image: fearflixStyleframe3 },
          { id: 4, image: fearflixStyleframe4 },
          { id: 5, image: fearflixStyleframe5 },
          { id: 6, image: fearflixStyleframe6 },
          { id: 7, image: fearflixStyleframe7 }
        ],
        videoPath: "/videos/fearflix-final.mp4",
        isHorror: true
      },
      { id: 2, title: "Motion Graphics Reel", year: "2024", description: "Dynamic typography and shape animations", image: project2DAnimation },
      { id: 3, title: "Explainer Animation", year: "2024", description: "Clear visual storytelling for complex concepts", image: project2DAnimation }
    ] as SubProject[]
  }, {
    id: 2,
    title: "Video Editing",
    year: "2024",
    description: "Cut and mix videos with music and mood to make the story feel alive.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Premiere Pro", icon: premiereLogo },
      { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" }
    ],
    image: projectVideoEditing,
    subProjects: [
      { id: 1, title: "Documentary Edit", year: "2024", description: "Narrative-driven documentary storytelling", image: projectVideoEditing },
      { id: 2, title: "Commercial Campaign", year: "2024", description: "Fast-paced promotional content", image: projectVideoEditing },
      { id: 3, title: "Music Video", year: "2024", description: "Rhythmic editing synced to music", image: projectVideoEditing }
    ] as SubProject[]
  }, {
    id: 3,
    title: "UI/UX Design",
    year: "2024",
    description: "User Friendly and convenient design that looks nice and feels simple to use.",
    apps: [
      { name: "Figma", icon: figmaLogo },
      { name: "Framer", icon: framerLogo },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ],
    image: projectUIUXDesign,
    subProjects: [
      { id: 1, title: "E-commerce Platform", year: "2024", description: "Seamless shopping experience design", image: projectUIUXDesign },
      { id: 2, title: "Mobile App Interface", year: "2024", description: "Intuitive mobile-first design", image: projectUIUXDesign },
      { id: 3, title: "Dashboard Design", year: "2024", description: "Data visualization and analytics", image: projectUIUXDesign }
    ] as SubProject[]
  }, {
    id: 4,
    title: "3D Modeling",
    year: "2024",
    description: "Detailed 3D models with nice light and smooth shape.",
    apps: [
      { name: "Blender", icon: blenderLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project3DModeling,
    subProjects: [
      { id: 1, title: "Product Visualization", year: "2024", description: "Photorealistic product renders", image: project3DModeling },
      { id: 2, title: "Character Modeling", year: "2024", description: "Stylized 3D character creation", image: project3DModeling },
      { id: 3, title: "Environment Design", year: "2024", description: "Immersive 3D environments", image: project3DModeling }
    ] as SubProject[]
  }, {
    id: 5,
    title: "Installations",
    year: "2024",
    description: "Interactive project that i made on physical",
    apps: [
      { name: "Unity", icon: unityLogo }
    ],
    image: projectInstallations,
    subProjects: [
      { id: 1, title: "Interactive Wall", year: "2024", description: "Touch-responsive digital installation", image: projectInstallations },
      { id: 2, title: "VR Experience", year: "2024", description: "Immersive virtual reality environment", image: projectInstallations },
      { id: 3, title: "Motion Tracking", year: "2024", description: "Gesture-controlled interactive space", image: projectInstallations }
    ] as SubProject[]
  }];

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // If subId is provided, show individual sub-project detail
  if (subId) {
    const subProject = project.subProjects.find(sp => sp.id === Number(subId));
    
    if (!subProject) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button onClick={() => navigate(`/project/${id}`)}>
              <ArrowLeft className="h-4 w-4" />
              Back to Category
            </Button>
          </div>
        </div>
      );
    }

    return (
      <main className="min-h-screen bg-background">
        {/* Hero Image - Full Width */}
        <div className="relative h-screen w-full overflow-hidden">
          <img 
            src={subProject.image} 
            alt={subProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Back Button Overlay */}
          <div className="absolute top-8 left-8 z-10">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/project/${id}`)}
              className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-white border border-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {project.title}
            </Button>
          </div>
          
          {/* Title Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="container max-w-7xl mx-auto">
              <div className="text-white/60 font-mono text-sm mb-2">{project.title}</div>
              <h1 className={`text-6xl md:text-8xl font-bold text-white tracking-tight mb-4 ${subProject.isHorror ? 'font-horror' : ''}`}>
                {subProject.title}
              </h1>
              <div className="text-white/80 text-lg md:text-xl mb-2">{subProject.year}</div>
              <p className="text-white/90 text-xl md:text-2xl max-w-3xl">
                {subProject.description}
              </p>
            </div>
          </div>
        </div>

        {/* Project Content Sections */}
        <section className="py-32 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <div className="text-primary font-mono text-sm mb-6">[OVERVIEW]</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Project Overview
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {subProject.overview || `This project showcases expertise in ${project.title.toLowerCase()}, utilizing industry-standard tools and techniques to deliver exceptional results. Every detail has been carefully crafted to achieve the desired impact.`}
                </p>
              </div>

              <div>
                <div className="text-primary font-mono text-sm mb-6">[TOOLS]</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Software Used
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.apps.map((app, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-3 px-6 py-3 border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        animation: `float 3s ease-in-out infinite ${index * 0.2}s`
                      }}
                    >
                      <img 
                        src={app.icon} 
                        alt={app.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>

        {/* Design Styleframes Section - Only show if styleframes exist */}
        {subProject.styleframes && subProject.styleframes.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[DESIGN STYLEFRAMES]</div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-16 tracking-tight ${subProject.isHorror ? 'font-horror' : ''}`}>
                Design Styleframes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subProject.styleframes.map((frame) => (
                  <Dialog key={frame.id}>
                    <DialogTrigger asChild>
                      <div className="relative cursor-pointer group">
                        <div className="absolute -top-6 left-0 text-primary font-mono text-xs">
                          Styleframe {frame.id}
                        </div>
                        <img 
                          src={frame.image} 
                          alt={`Styleframe ${frame.id}`}
                          className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl w-full p-0 border-0">
                      <img 
                        src={frame.image} 
                        alt={`Styleframe ${frame.id}`}
                        className="w-full h-auto object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final Outcome Video Section - Only show if video exists */}
        {subProject.videoPath && (
          <section className="py-32 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[FINAL OUTCOME]</div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-16 tracking-tight ${subProject.isHorror ? 'font-horror' : ''}`}>
                Final Outcome
              </h2>
              <div className="relative w-full aspect-video bg-black">
                <video 
                  controls
                  className="w-full h-full"
                  poster={subProject.image}
                >
                  <source src={subProject.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16 border-t border-border">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/project/${id}`)}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {project.title}
              </Button>
              
              {Number(subId) < project.subProjects.length && (
                <Button 
                  onClick={() => navigate(`/project/${id}/${Number(subId) + 1}`)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Next Project
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // Category overview showing sub-projects
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image - Full Width */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Back Button Overlay */}
        <div className="absolute top-8 left-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-white border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container max-w-7xl mx-auto">
            <div className="text-white/60 font-mono text-sm mb-2">{project.year}</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Apps Used Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-primary font-mono text-sm mb-6">[TOOLS & SOFTWARE]</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Apps Used
          </h2>
          <div className="flex flex-wrap gap-6">
            {project.apps.map((app, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 px-8 py-4 border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={app.icon} 
                    alt={`${app.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-base font-medium">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Projects List with FlowingMenu */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-primary font-mono text-sm mb-6">[PROJECTS]</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Featured Work
          </h2>
          
          <div className="h-[600px]">
            <FlowingMenu 
              items={project.subProjects.map((subProject) => ({
                link: `/project/${id}/${subProject.id}`,
                text: subProject.title,
                image: subProject.image
              }))}
            />
          </div>
        </div>
      </section>

      {/* Category Navigation - Hidden */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-muted-foreground font-mono text-sm text-center">
            [CATEGORY {id} / {projects.length}]
          </div>
        </div>
      </section>

      {/* Circular Next Category Button */}
      {Number(id) < projects.length && (
        <CircularNextButton 
          nextCategoryName={projects[Number(id)]?.title || "Next Category"}
          onClick={() => navigate(`/project/${Number(id) + 1}`)}
        />
      )}

      <Footer />
    </main>
  );
};

export default ProjectDetail;
