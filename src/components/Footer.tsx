import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/kamasani-mohith-reddy-1b1239352" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:omverse69@example.com" 
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025 MR Automations. Built with n8n & AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
