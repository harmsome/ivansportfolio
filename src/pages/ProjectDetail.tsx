import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import project2DAnimation from "@/assets/project-2d-animation.jpg";
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

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [{
    id: 1,
    title: "2D Animation",
    description: "Motion story that made with 2D and smooth animation to show feelings and rhythm.",
    longDescription: "This project explores the art of 2D animation, combining smooth motion graphics with emotional storytelling. Using industry-standard tools, every frame is carefully crafted to convey rhythm, mood, and narrative flow.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Illustrator", icon: illustratorLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project2DAnimation,
    process: "The animation process began with storyboarding and character design in Illustrator. Assets were then refined in Photoshop before being brought to life in After Effects with carefully timed keyframes and easing curves.",
    outcome: "Created a compelling visual narrative that effectively communicates emotion through movement and timing."
  }, {
    id: 2,
    title: "Video Editing",
    description: "Cut and mix videos with music and mood to make the story feel alive.",
    longDescription: "A comprehensive video editing project that combines cinematic techniques with rhythmic pacing to create engaging visual stories. Each cut is intentional, each transition meaningful.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Premiere Pro", icon: premiereLogo },
      { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" }
    ],
    image: projectVideoEditing,
    process: "The editing workflow involved rough cuts in Premiere Pro, followed by color grading in DaVinci Resolve, and final effects and motion graphics in After Effects.",
    outcome: "Produced dynamic video content that maintains viewer engagement through strategic pacing and visual storytelling."
  }, {
    id: 3,
    title: "UI/UX Design",
    description: "User Friendly and convenient design that looks nice and feels simple to use.",
    longDescription: "A user-centered design approach focusing on intuitive interfaces and seamless user experiences. Every element is designed with purpose, every interaction carefully considered.",
    apps: [
      { name: "Figma", icon: figmaLogo },
      { name: "Framer", icon: framerLogo },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ],
    image: projectUIUXDesign,
    process: "Started with user research and wireframing in Figma, created interactive prototypes in Framer, and implemented the final design with clean, maintainable code.",
    outcome: "Delivered an intuitive interface that balances aesthetics with functionality, resulting in improved user satisfaction."
  }, {
    id: 4,
    title: "3D Modeling",
    description: "Detailed 3D models with nice light and smooth shape.",
    longDescription: "High-quality 3D modeling project featuring detailed geometry, realistic materials, and professional lighting setups. Each model is crafted with attention to form, texture, and visual appeal.",
    apps: [
      { name: "Blender", icon: blenderLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project3DModeling,
    process: "Models were sculpted and textured in Blender using PBR workflows. Final renders were enhanced in Photoshop with color correction and post-processing effects.",
    outcome: "Created photorealistic 3D assets with clean topology and optimized materials suitable for various applications."
  }, {
    id: 5,
    title: "Installations",
    description: "Interactive project that i made on physical",
    longDescription: "An interactive installation project that bridges digital and physical spaces. Using real-time technology, this project creates immersive experiences that respond to user interaction.",
    apps: [
      { name: "Unity", icon: unityLogo }
    ],
    image: projectInstallations,
    process: "Developed in Unity using C# scripting for interactive behaviors. Integrated sensors and physical computing elements to create responsive installations.",
    outcome: "Successfully deployed interactive installation that engages audiences through intuitive physical interaction."
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
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div>
              <div className="text-primary font-mono text-sm mb-4">[OVERVIEW]</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                About This Project
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.longDescription}
              </p>
            </div>

            {/* Apps Used */}
            <div>
              <div className="text-primary font-mono text-sm mb-4">[TOOLS & SOFTWARE]</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                Apps Used
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {project.apps.map((app, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-4 p-6 border border-border bg-card hover:border-primary/50 transition-colors"
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img 
                        src={app.icon} 
                        alt={`${app.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Outcome */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-primary font-mono text-sm mb-4">[PROCESS]</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                How It Was Made
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.process}
              </p>
            </div>
            <div>
              <div className="text-primary font-mono text-sm mb-4">[OUTCOME]</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Final Result
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-muted-foreground font-mono text-sm">
              [PROJECT {id} / {projects.length}]
            </div>
            <div className="flex gap-4">
              {Number(id) > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/project/${Number(id) - 1}`)}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous Project
                </Button>
              )}
              {Number(id) < projects.length && (
                <Button 
                  onClick={() => navigate(`/project/${Number(id) + 1}`)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Next Project
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
