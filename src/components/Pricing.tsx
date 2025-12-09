import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Basic Automation",
    price: "₹599 - ₹6,999",
    features: [
      "Lead capture",
      "Email automation",
      "Simple integrations",
      "2-3 day delivery"
    ]
  },
  {
    title: "Standard Workflow",
    price: "₹999 - ₹7,999",
    features: [
      "Multi-step automations",
      "AI integration",
      "Automated reporting",
      "5-7 day delivery"
    ]
  },
  {
    title: "Advanced System",
    price: "₹2,900 - ₹9,999",
    features: [
      "Complex workflows",
      "Multiple integrations",
      "Custom logic & AI",
      "7-10 day delivery"
    ]
  },
  {
    title: "Monthly Support",
    price: "₹2,000/month",
    features: [
      "Updates & maintenance",
      "Bug fixes",
      "Optimization",
      "Priority support"
    ]
  }
];

const PricingCard = ({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) => {
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
      <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
      <p className="text-2xl md:text-3xl font-bold text-primary mb-6">{plan.price}</p>
      
      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear pricing for every automation need
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.title} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
