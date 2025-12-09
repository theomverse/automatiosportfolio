import { Code2, Zap, Sparkles, Cpu } from "lucide-react";

const skills = [
  { icon: Code2, label: "n8n & APIs" },
  { icon: Zap, label: "API Integration" },
  { icon: Sparkles, label: "AI & Gemini" },
  { icon: Cpu, label: "Workflow Automation" }
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
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I'm <span className="text-foreground font-semibold">Mohith Reddy</span> — a Data Science student and n8n Automation Specialist from India.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I help small businesses and content creators eliminate repetitive tasks by building custom AI-powered workflows using n8n, Google Sheets, and APIs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My automation systems have saved clients 15+ hours per week on tasks like:
              </p>

              <ul className="text-lg text-muted-foreground leading-relaxed mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Weekly sales reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Lead capture & follow-up
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Social media scheduling
                </li>
              </ul>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                When I'm not building automations, I'm exploring new AI models and creating tools that boost productivity.
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
