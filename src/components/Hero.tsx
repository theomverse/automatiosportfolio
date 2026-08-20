import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  "20+ Automation Projects Built",
  "AI Agents & Workflow Automation",
  "Available for White-Label Client Work"
];


const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Subtle atmospheric glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white/8 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#d8d3cc]/10 rounded-full blur-[120px]" />
      
      {/* Content - Left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
            AI Automation Developer &{" "}
            <span className="gradient-text block mt-2">
              n8n Specialist
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl font-medium leading-relaxed">
            I build AI agents, business automations, lead generation systems, customer support workflows, and API integrations using n8n.
          </p>


          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((badge) => (
              <div 
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm md:text-base"
              >
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-white">{badge}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group text-base md:text-lg px-8 py-6 h-auto bg-white hover:bg-white/90 text-[#111111] rounded-full relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="group text-base md:text-lg px-8 py-6 h-auto border-white/30 hover:border-white/60 text-white bg-transparent rounded-full transition-all duration-300"
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
    </section>
  );
};

export default Hero;
