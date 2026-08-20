import { Code2, Zap, Sparkles, Cpu } from "lucide-react";

const skills = [
  { icon: Code2, label: "n8n" },
  { icon: Sparkles, label: "AI Agents" },
  { icon: Zap, label: "API Integrations" },
  { icon: Cpu, label: "Workflow Automation" }
];


const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-12 md:p-16 rounded-3xl animate-fade-in-up bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#111111] via-[#615e5b] to-[#8a8a87] p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-7xl font-bold gradient-text">MR</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111111]">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-lg text-[#615e5b] leading-relaxed mb-6">
                Hi, I'm <span className="text-[#111111] font-semibold">Mohith Reddy</span>, a Computer Science student and Automation Developer.
              </p>

              <p className="text-lg text-[#615e5b] leading-relaxed mb-6">
                I build AI-powered workflows, automation systems, and integrations using n8n, AI models, APIs, and cloud services.
              </p>

              <p className="text-lg text-[#615e5b] leading-relaxed mb-8">
                My focus is helping businesses, creators, and automation agencies eliminate repetitive work through reliable automation systems.
              </p>


              {/* Skills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.label}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#f3efeb] hover:bg-[#dfddda] transition-all glow-hover"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className="w-6 h-6 text-[#111111]" />
                      <span className="text-sm font-medium text-[#111111]">{skill.label}</span>
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
