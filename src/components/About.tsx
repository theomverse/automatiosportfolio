import { Code2, Zap, Sparkles, Cpu } from "lucide-react";

const skills = [
  { icon: Code2, label: "n8n & Zapier" },
  { icon: Zap, label: "API Integration" },
  { icon: Sparkles, label: "AI & Gemini" },
  { icon: Cpu, label: "Automation" }
];

const About = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-12 md:p-16 rounded-3xl animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-7xl font-bold gradient-text">MR</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm <span className="text-foreground font-semibold">MR</span>, an automation enthusiast who builds scalable AI systems using open tools like{" "}
                <span className="text-primary">n8n</span>,{" "}
                <span className="text-primary">Zapier</span>, and{" "}
                <span className="text-primary">Gemini</span>. I turn complex workflows into simple, automated processes that save time and drive growth.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.label}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all glow-hover"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">{skill.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
