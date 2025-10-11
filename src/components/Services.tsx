import { Brain, Workflow, Database, MessageSquare, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Brain,
    title: "AI Lead Generation Systems",
    description: "Build automated systems that find and contact leads using AI and APIs."
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Streamline workflows using tools like n8n, Zapier, and Google Sheets."
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Outreach Bots",
    description: "Create smart bots that talk to leads and respond instantly."
  },
  {
    icon: BarChart3,
    title: "Data Integration & Reporting",
    description: "Connect APIs, collect data, and show insights in dashboards."
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
