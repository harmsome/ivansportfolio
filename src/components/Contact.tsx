import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
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
    website: "" // Honeypot field - should remain empty
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
          honeypot: formData.website // Send honeypot for server-side validation
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
  return <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's talk!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 border-2 border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">ivanlay88@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+60 13 713 1212</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Johor Bahru</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary group">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - hidden from users, bots will fill it */}
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
                    className="bg-background" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5} 
                    className="bg-background resize-none" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full hover-scale" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;