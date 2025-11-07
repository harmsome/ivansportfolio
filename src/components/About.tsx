import { Card } from "@/components/ui/card";
const About = () => {
  const highlights = [{
    title: "🎨 Visual Storytelling",
    description: "I create motion pieces that tell stories and capture feelings, not just visuals that look nice."
  }, {
    title: "💫 Design with Emotion",
    description: "Every movement has purpose — I design with feeling, flow, and a sense of rhythm."
  }, {
    title: "🎵 Timing & Flow",
    description: "I pay attention to pacing and energy, making sure everything moves naturally and connects with the audience."
  }];
  return <section id="about" className="py-24 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">I’m Ivan, a motion designer and video editor driven by positivity and rhythm.
My strength lies in creating visuals that move with emotion — blending design, timing, and storytelling into one seamless experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => <Card key={index} className="p-8 text-center hover:shadow-custom-lg transition-smooth border-border bg-card">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default About;