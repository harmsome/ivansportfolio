import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Linkedin, Mail, Download } from "lucide-react";

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
        title: "MISSING INFO",
        description: "Fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "INVALID EMAIL",
        description: "Enter a valid email address.",
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
        title: "MESSAGE SENT",
        description: "I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "ERROR",
        description: "Failed to send message. Try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-foreground" />
            <span className="hud-text">CONTACT_ME</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            LET'S
            <br />
            CONNECT<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left - Contact Info */}
          <div>
            <p className="font-mono text-muted-foreground leading-relaxed mb-12">
              Got a project in mind? Need someone who can turn raw footage into
              something that actually works? Let's talk.
            </p>

            {/* Large Email */}
            <a
              href="mailto:ivanlay88@gmail.com"
              className="block font-display text-2xl md:text-3xl lg:text-4xl font-bold hover:text-accent transition-colors mb-8 break-all"
            >
              IVANLAY88@GMAIL.COM
            </a>

            {/* Social Links */}
            <div className="flex gap-4 mb-12">
              <a
                href="https://www.linkedin.com/in/ivan-lay-jiun-yu-923a05358/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border p-4 hover:border-accent hover:text-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ivanlay88@gmail.com"
                className="border border-border p-4 hover:border-accent hover:text-accent transition-all"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Resume Download */}
            <a
              href="/cv/ivans-resume.pdf"
              download="ivans-resume.pdf"
              className="btn-brutal inline-flex items-center gap-3 px-6 py-4 text-sm"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>

            {/* Location */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="hud-text">
                <span className="hud-bracket">JOHOR BAHRU, MY</span>
              </p>
              <p className="hud-text mt-2 opacity-60">
                OPEN TO RELOCATION // SG COMMUTE OK
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
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
                <label className="hud-text text-xs mb-2 block">NAME_</label>
                <Input
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background border-border font-mono placeholder:text-muted-foreground/50 focus:border-accent h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label className="hud-text text-xs mb-2 block">EMAIL_</label>
                <Input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background border-border font-mono placeholder:text-muted-foreground/50 focus:border-accent h-14 rounded-none"
                  required
                />
              </div>

              <div>
                <label className="hud-text text-xs mb-2 block">MESSAGE_</label>
                <Textarea
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background border-border font-mono placeholder:text-muted-foreground/50 focus:border-accent min-h-[160px] resize-none rounded-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-brutal w-full h-14 text-sm"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
              </Button>
            </form>

            {/* Form Decoration */}
            <div className="mt-8 hud-text text-[10px] opacity-40">
              <span>// ALL FIELDS REQUIRED</span>
              <br />
              <span>// RESPONSE TIME: 24-48H</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
