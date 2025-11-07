import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-smooth" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-smooth" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:ivanlay88@gmail.com" className="text-muted-foreground hover:text-foreground transition-smooth" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ivan Lay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;