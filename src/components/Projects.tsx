import { ExternalLink, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Automated Lead Scraper for Local Businesses",
    description: "AI-powered system that automatically finds, qualifies, and contacts local business leads. Increased lead generation by 300% while reducing manual work.",
    tags: ["n8n", "OpenAI", "Google Sheets"],
    videoPlaceholder: "https://www.loom.com/share/your-video-id-here"
  },
  {
    title: "Twitter Data Automation Pipeline",
    description: "Real-time monitoring system that tracks industry trends, analyzes sentiment, and generates daily insight reports automatically.",
    tags: ["n8n", "Twitter API", "Airtable"],
    videoPlaceholder: "https://www.loom.com/share/your-video-id-here"
  },
  {
    title: "AI Customer Support Chatbot",
    description: "Intelligent chatbot integrated with Google Sheets that answers customer questions 24/7 with 95% accuracy, reducing support tickets by 60%.",
    tags: ["Gemini", "Zapier", "Google Sheets"],
    videoPlaceholder: "https://www.loom.com/share/your-video-id-here"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card p-8 rounded-3xl glow-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Video placeholder */}
      <div className="relative mb-6 rounded-2xl overflow-hidden bg-muted aspect-video flex items-center justify-center group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <Button
          variant="ghost"
          size="lg"
          className="relative z-10 w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground glow-border"
          onClick={() => window.open(project.videoPlaceholder, '_blank')}
        >
          <Play className="w-6 h-6" />
        </Button>
      </div>

      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button
        variant="ghost"
        className="w-full justify-between text-muted-foreground hover:text-primary"
        onClick={() => window.open(project.videoPlaceholder, '_blank')}
      >
        View Case Study
        <ExternalLink className="w-4 h-4" />
      </Button>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real automation systems that deliver measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
