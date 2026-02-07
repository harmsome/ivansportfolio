import { Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-border bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          
          {/* Large Email */}
          <a 
            href="mailto:ivanlay88@gmail.com" 
            className="text-2xl md:text-3xl font-serif font-medium text-foreground hover:text-primary transition-colors duration-300 tracking-tight"
          >
            ivanlay88@gmail.com
          </a>

          {/* Location Note */}
          <p className="text-muted-foreground text-sm font-light tracking-wide text-center max-w-md">
            Based in Johor Bahru | Open to relocation or commuting opportunities in Singapore
          </p>

          {/* Resume Download */}
          <Button 
            variant="outline" 
            size="default"
            asChild
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-medium tracking-wide"
          >
            <a href="/cv/ivans-resume.pdf" download="ivans-resume.pdf">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex gap-8">
            <a 
              href="https://www.linkedin.com/in/ivan-lay-jiun-yu-923a05358/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ivanlay88@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300" 
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground/50 text-xs font-light tracking-widest uppercase">
            © {new Date().getFullYear()} Ivan Lay
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;