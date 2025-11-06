import { Card } from "@/components/ui/card";
import photoshopLogo from "@/assets/photoshop-logo.png";
import illustratorLogo from "@/assets/illustrator-logo.png";
import aftereffectsLogo from "@/assets/aftereffects-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";

const Skills = () => {
  const tools = [
    { name: "Photoshop", icon: photoshopLogo },
    { name: "Illustrator", icon: illustratorLogo },
    { name: "After Effects", icon: aftereffectsLogo },
    { name: "Premiere Pro", icon: premiereLogo },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground text-lg">Tools that I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className="p-6 flex flex-col items-center justify-center gap-4 hover:shadow-custom-lg transition-smooth border-border bg-card"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-center">{tool.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
