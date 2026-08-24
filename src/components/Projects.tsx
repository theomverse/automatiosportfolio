import { Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import customerSupportWorkflow from "@/assets/ai_customer_support_img.jpg.asset.json";
import salesReportImg from "@/assets/sales_report.jpg.asset.json";
import smartReportImg from "@/assets/smart_report.jpg.asset.json";

const GITHUB_URL = "https://github.com/";

const caseStudies = [
  {
    title: "AI Lead Qualification Agent",
    problem: "Sales teams waste hours manually reviewing and scoring inbound leads.",
    solution:
      "An AI agent reads every inbound submission, scores it against ICP criteria, enriches it, and routes qualified leads straight to the CRM with a summary for the rep.",
    stack: ["n8n", "OpenAI", "Airtable", "Webhooks", "Gmail"],
    flow: "Lead Form → n8n → AI Model → CRM → Email Notification"
  },
  {
    title: "AI SDR System",
    problem: "Outbound prospecting is repetitive and inconsistent at scale.",
    solution:
      "Automated prospect research, personalized first-touch copy generation, and multi-step follow-up sequencing with reply detection and handoff to a human.",
    stack: ["n8n", "OpenAI", "Google Sheets", "Email API"],
    flow: "Prospect List → n8n → Research + AI Copy → Email Sequence → Reply Handoff"
  },
  {
    title: "Customer Support Booking Workflow",
    problem: "Support inboxes were flooded with scheduling and FAQ requests.",
    solution:
      "An AI support agent answers common questions from a knowledge base, books meetings on the calendar, and escalates edge cases to a human with full context.",
    stack: ["n8n", "Gemini", "Google Calendar", "Gmail", "Webhooks"],
    image: customerSupportWorkflow.url,
    imageAlt: "Customer support booking automation workflow in n8n"
  },
  {
    title: "AI Content Repurposing Agent",
    problem: "Creators spend hours reformatting one piece of content for every channel.",
    solution:
      "One source asset is transcribed, summarized, and rewritten into channel-native posts, then queued for scheduled publishing and approval.",
    stack: ["n8n", "OpenAI", "Notion", "Social APIs"],
    flow: "Source Content → n8n → AI Rewrite → Approval → Scheduled Publishing"
  },
  {
    title: "SmartReport AI Sales Intelligence",
    problem: "Weekly sales reporting was manual, slow, and error-prone.",
    solution:
      "Sales data is pulled automatically, analyzed by AI for trends and anomalies, visualized as charts, and delivered as a report every week.",
    stack: ["n8n", "Google Sheets", "Gemini", "QuickChart", "Gmail"],
    images: [
      { src: smartReportImg.url, alt: "SmartReport n8n automation workflow canvas" },
      { src: salesReportImg.url, alt: "Weekly Sales Intelligence AI-generated report" }
    ]
  }
];

const otherProjects = [
  {
    title: "NASA Instagram Auto-Poster",
    description:
      "Fetches NASA's Astronomy Picture of the Day and publishes it to Instagram daily with generated captions.",
    stack: ["n8n", "NASA API", "Instagram Graph API"]
  },
  {
    title: "BBC News Automation",
    description:
      "Monitors news feeds, filters by topic, summarizes articles with AI, and distributes digests automatically.",
    stack: ["n8n", "RSS", "AI Summarization", "Email"]
  }
];

const CaseStudyCard = ({ study, index }: { study: typeof caseStudies[0]; index: number }) => {
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

  return (
    <article
      ref={cardRef}
      className={`glass-card p-8 rounded-3xl glow-hover transition-all duration-700 bg-white ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-[#111111]">{study.title}</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#615e5b] mb-2">Problem</p>
          <p className="text-[#615e5b] leading-relaxed">{study.problem}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#615e5b] mb-2">Solution</p>
          <p className="text-[#615e5b] leading-relaxed">{study.solution}</p>
        </div>
      </div>

      {study.image ? (
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#615e5b] mb-2">Workflow</p>
          <div className="rounded-xl border border-[#dfddda] bg-[#f3efeb] p-2 overflow-hidden shadow-sm">
            <img
              src={study.image}
              alt={study.imageAlt || `${study.title} workflow`}
              className="w-full max-w-[680px] h-auto max-h-[320px] object-contain rounded-lg mx-auto"
            />
          </div>
        </div>
      ) : study.flow ? (
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#615e5b] mb-2">Workflow</p>
          <div className="rounded-2xl bg-[#f3efeb] border border-[#dfddda] px-4 py-3 overflow-x-auto">
            <code className="text-sm text-[#111111] whitespace-nowrap">{study.flow}</code>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2 mb-6">
        {study.stack.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-[#111111]/5 text-[#111111] border border-[#111111]/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="ghost"
          className="rounded-full text-[#111111] hover:bg-[#f3efeb]"
          onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
        >
          <Github className="w-4 h-4 mr-2" />
          View on GitHub
        </Button>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111111]">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-lg text-[#615e5b] max-w-2xl mx-auto">
            Real automation systems, the problems they solved, and how they were built
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#111111]">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div key={project.title} className="glass-card p-8 rounded-3xl glow-hover bg-white">
                <h4 className="text-xl font-semibold mb-3 text-[#111111]">{project.title}</h4>
                <p className="text-[#615e5b] mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#f3efeb] text-[#615e5b] border border-[#dfddda]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
