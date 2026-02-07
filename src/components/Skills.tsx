import aftereffectsLogo from "@/assets/aftereffects-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import c4dLogo from "@/assets/c4d-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import unityLogo from "@/assets/unity-logo.png";

const Skills = () => {
  const primaryStack = [
    { name: "PREMIERE PRO", icon: premiereLogo, type: "EDIT" },
    { name: "AFTER EFFECTS", icon: aftereffectsLogo, type: "MOTION" },
    { name: "DAVINCI RESOLVE", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png", type: "COLOR" },
    { name: "CINEMA 4D", icon: c4dLogo, type: "3D" },
    { name: "BLENDER", icon: blenderLogo, type: "3D" },
  ];

  const secondaryStack = [
    { name: "FIGMA", icon: figmaLogo },
    { name: "VS CODE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "UNITY", icon: unityLogo },
    { name: "PHOTOSHOP", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-foreground" />
            <span className="hud-text">TOOLS_STACK</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            THE
            <br />
            ARSENAL<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Primary Stack - Large */}
        <div className="mb-16">
          <div className="hud-text mb-8">
            <span className="hud-bracket">PRIMARY // DAILY DRIVERS</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {primaryStack.map((tool, index) => (
              <div
                key={index}
                className="group border border-border bg-card p-6 hover:border-accent transition-all duration-300 hover:bg-accent/5"
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <p className="font-display text-sm font-bold tracking-wide">{tool.name}</p>
                  <p className="hud-text text-[10px] mt-1 opacity-60">{tool.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="hr-brutal mb-16" />

        {/* Secondary Stack - Compact */}
        <div>
          <div className="hud-text mb-8 opacity-60">
            <span className="hud-bracket">SECONDARY // SUPPORT TOOLS</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {secondaryStack.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-border/50 bg-card/50 px-4 py-3 hover:border-border transition-all group"
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                  className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all"
                />
                <span className="font-display text-xs tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet Decoration */}
        <div className="mt-16 p-6 border border-border bg-card/50 font-mono text-xs text-muted-foreground overflow-x-auto">
          <pre>{`// workflow.config
{
  "editor": "premiere_pro",
  "motion": "after_effects",
  "color": "davinci_resolve",
  "3d_primary": "cinema4d",
  "3d_secondary": "blender",
  "fps": 24,
  "export": "prores_422",
  "delivery": "on_time"
}`}</pre>
        </div>
      </div>
    </section>
  );
};

export default Skills;
