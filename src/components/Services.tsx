import { Brain, Workflow, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Lead Generation",
    description: "Intelligent systems that find and qualify leads automatically, helping you focus on closing deals."
  },
  {
    icon: Workflow,
    title: "Workflow Automation with n8n & Zapier",
    description: "Connect your tools and automate repetitive tasks. Build custom workflows that work while you sleep."
  },
  {
    icon: Database,
    title: "Data Collection & Processing with APIs",
    description: "Extract, transform, and organize data from any source. Turn raw information into actionable insights."
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
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

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`glass-card p-8 rounded-3xl glow-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-border">
          <Icon className="w-8 h-8 text-primary animate-glow-pulse" />
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized automation services that transform how you work
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
