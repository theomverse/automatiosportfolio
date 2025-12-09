import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  "3+ Live Projects Deployed",
  "Available for Freelance Work",
  "24-48 Hour Turnaround"
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Additional atmospheric glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />
      
      {/* Content - Left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            I Build n8n Automations That{" "}
            <span className="gradient-text block mt-2">
              Save Businesses 15+ Hours Per Week
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl font-medium leading-relaxed">
            Data Science Student & AI Automation Specialist | Helping SMBs automate sales, marketing & reporting workflows
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((badge) => (
              <div 
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm md:text-base"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-foreground">{badge}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group text-base md:text-lg px-8 py-6 h-auto bg-foreground hover:bg-foreground/90 text-background rounded-full relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                See My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="group text-base md:text-lg px-8 py-6 h-auto border-foreground/20 hover:border-foreground/40 text-foreground rounded-full transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;
