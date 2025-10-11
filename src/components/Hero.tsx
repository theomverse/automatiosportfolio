import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
            Building AI systems that{" "}
            <span className="text-foreground block mt-2">
              automate your business
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-light leading-relaxed">
            I help startups and local businesses use AI to save time, generate leads, and grow — using scalable automation built with n8n, Zapier, and Gemini.
          </p>
          
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
        </div>
      </div>
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;
