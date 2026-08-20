import { Workflow, Bot, Plug, FileText, MessageSquare, Handshake } from "lucide-react";

const reasons = [
  { icon: Workflow, title: "Strong n8n experience", description: "Complex, production-grade workflows built and maintained end to end." },
  { icon: Bot, title: "AI agent development", description: "Practical agents for qualification, support, outreach, and content." },
  { icon: Plug, title: "API integration experience", description: "OpenAI, Gemini, Airtable, Google Workspace, webhooks, and custom APIs." },
  { icon: FileText, title: "Clean documentation", description: "Every build ships with clear architecture notes and handover docs." },
  { icon: MessageSquare, title: "Reliable communication", description: "Predictable updates and fast response times throughout the project." },
  { icon: Handshake, title: "Agency-friendly", description: "Comfortable working white-label with agencies and creators." }
];

const WhyWorkWithMe = () => {
  return (
    <section id="why-me" className="py-28 px-6 relative bg-[#d8d3cc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111111]">
            Why <span className="gradient-text">Work With Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glass-card p-8 rounded-3xl glow-hover bg-white/80">
              <Icon className="w-6 h-6 text-[#111111] mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#111111]">{title}</h3>
              <p className="text-[#615e5b] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
