import aftereffectsLogo from "@/assets/aftereffects-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import c4dLogo from "@/assets/c4d-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import unityLogo from "@/assets/unity-logo.png";

const Skills = () => {
  // Primary Tools: Video & 3D (larger, prominent)
  const primaryTools = [
    { name: "Premiere Pro", icon: premiereLogo },
    { name: "After Effects", icon: aftereffectsLogo },
    { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" },
    { name: "Cinema 4D", icon: c4dLogo },
    { name: "Blender", icon: blenderLogo },
  ];

  // Secondary Tools: Dev & Design (smaller, text-based)
  const secondaryTools = [
    { name: "Figma", icon: figmaLogo },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Unity", icon: unityLogo },
  ];

  return (
    <section id="skills" className="relative py-40 lg:py-52 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Toolkit</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">Professional Tools</h2>
        </div>

        {/* Primary Tools - Large Icons */}
        <div className="mb-20">
          <p className="text-center text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-10">Primary Tools — Video & 3D</p>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16 max-w-4xl mx-auto">
            {primaryTools.map((tool, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center p-4 bg-muted/30 border border-border hover:border-primary/30 transition-all duration-500 group-hover:bg-muted/50">
                  <img 
                    src={tool.icon} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-center tracking-wide text-foreground/80">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-border mx-auto mb-16" />

        {/* Secondary Tools - Smaller, Text-focused */}
        <div>
          <p className="text-center text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-8">Secondary Tools — Design & Development</p>
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
            {secondaryTools.map((tool, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 px-4 py-2 border border-border/50 bg-background/50 hover:border-border transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center opacity-60">
                  <img 
                    src={tool.icon} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain grayscale"
                  />
                </div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
