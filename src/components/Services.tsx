import { Bot, Workflow, Plug, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    items: [
      "AI lead qualification agents",
      "AI SDR systems",
      "AI customer support agents",
      "Content automation agents"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    items: [
      "Lead capture workflows",
      "Sales pipelines",
      "Reporting systems",
      "Internal business automation"
    ]
  },
  {
    icon: Plug,
    title: "API Integrations",
    items: [
      "OpenAI & Gemini",
      "Airtable",
      "Google Workspace",
      "Custom APIs & webhooks"
    ]
  },
  {
    icon: Layers,
    title: "White-Label Development",
    items: [
      "Build client projects for agencies",
      "Workflow debugging",
      "Workflow optimization",
      "Maintenance and support"
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`glass-card p-8 rounded-3xl glow-hover transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
      <ul className="space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-primary mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Available <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automation and AI development support for businesses, creators, and agencies
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
