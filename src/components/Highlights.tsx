import { Bot, Github, Linkedin, Workflow } from "lucide-react";

const stats = [
  { icon: Workflow, value: "20+", label: "Automation Projects Built" },
  { icon: Bot, value: "10+", label: "AI Agents Created" },
  { icon: Github, value: "15+", label: "GitHub Repositories" },
  { icon: Linkedin, value: "30+", label: "LinkedIn Technical Posts" }
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card p-8 rounded-3xl text-center glow-hover">
              <Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold gradient-text mb-2">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
