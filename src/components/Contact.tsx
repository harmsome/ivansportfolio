import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          honeypot: formData.website
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-40 lg:py-52 px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center space-y-8 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Large Email CTA */}
        <div className="text-center mb-20">
          <a 
            href="mailto:ivanlay88@gmail.com" 
            className="inline-block text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground hover:text-primary transition-colors duration-300 tracking-tight"
          >
            ivanlay88@gmail.com
          </a>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 border border-border bg-card/30 hover:border-primary/30 transition-all duration-500">
            <Mail className="h-6 w-6 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-medium text-base mb-2 tracking-wide">Email</h3>
            <a href="mailto:ivanlay88@gmail.com" className="text-muted-foreground text-sm font-light hover:text-primary transition-colors">
              ivanlay88@gmail.com
            </a>
          </div>
          
          <div className="text-center p-8 border border-border bg-card/30 hover:border-primary/30 transition-all duration-500">
            <Phone className="h-6 w-6 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-medium text-base mb-2 tracking-wide">Phone</h3>
            <a href="tel:+60137131212" className="text-muted-foreground text-sm font-light hover:text-primary transition-colors">
              +60 13 713 1212
            </a>
          </div>
          
          <div className="text-center p-8 border border-border bg-card/30 hover:border-primary/30 transition-all duration-500">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-medium text-base mb-2 tracking-wide">Location</h3>
            <p className="text-muted-foreground text-sm font-light">Johor Bahru, Malaysia</p>
          </div>
        </div>

        {/* Resume Download */}
        <div className="flex justify-center mb-20">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-medium tracking-wide px-10 py-6"
          >
            <a href="/cv/ivans-resume.pdf" download="ivans-resume.pdf">
              <Download className="h-5 w-5 mr-3" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <Card className="p-10 border border-border bg-card/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <Input 
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-background border-border focus:border-primary h-12" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background border-border focus:border-primary h-12" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  className="bg-background border-border focus:border-primary resize-none" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                className="w-full py-6 font-medium tracking-wide" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;