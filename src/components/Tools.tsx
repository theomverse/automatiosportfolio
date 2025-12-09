import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "OpenAI", description: "AI-powered analysis", color: "text-primary" },
  { name: "Gemini", description: "Smart insights generation", color: "text-secondary" },
  { name: "n8n", description: "Primary automation platform", color: "text-accent" },
  { name: "QuickChart", description: "Chart generation", color: "text-primary" },
  { name: "Google Sheets", description: "Data storage & reporting", color: "text-secondary" },
  { name: "Airtable", description: "Advanced databases", color: "text-accent" },
  { name: "Firebase", description: "Backend services", color: "text-primary" }
];

const ToolCard = ({ tool, index }: { tool: typeof tools[0]; index: number }) => {
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
      className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center glow-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className={`text-xl font-semibold ${tool.color} mb-2`}>{tool.name}</span>
      <span className="text-xs text-muted-foreground">{tool.description}</span>
    </div>
  );
};

const Tools = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Tools I <span className="gradient-text">Use</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
