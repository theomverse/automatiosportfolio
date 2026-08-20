import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Linkedin, Github, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-[#f3efeb]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111111]">
            Let's Build Your <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-xl text-[#615e5b] max-w-2xl mx-auto">
            Need help building an automation system or looking for white-label development support? Let's connect.
          </p>
        </div>


        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl space-y-6 animate-fade-in-up bg-white">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#111111]">Your Name</label>
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#f3efeb] border-[#dfddda] h-14 text-lg rounded-2xl text-[#111111] placeholder:text-[#8a8a87]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#111111]">Your Email</label>
            <Input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#f3efeb] border-[#dfddda] h-14 text-lg rounded-2xl text-[#111111] placeholder:text-[#8a8a87]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#111111]">What repetitive task takes too much time?</label>
            <Textarea
              name="message"
              placeholder="Tell me about the task you want to automate..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-[#f3efeb] border-[#dfddda] text-lg rounded-2xl resize-none text-[#111111] placeholder:text-[#8a8a87]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-14 text-lg rounded-full glow-hover bg-[#111111] hover:bg-[#111111]/90 text-white"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>

        {/* Other Ways to Connect */}
        <div className="mt-16 glass-card p-8 md:p-12 rounded-3xl animate-fade-in bg-white">
          <h3 className="text-2xl font-bold mb-8 text-center text-[#111111]">Find Me Here</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#f3efeb] hover:bg-[#dfddda] transition-all glow-hover"
            >
              <div className="w-12 h-12 rounded-full bg-[#111111]/10 flex items-center justify-center">
                <Github className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#615e5b]">GitHub</p>
                <p className="font-medium text-[#111111]">View my repositories</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/kamasani-mohith-reddy-1b1239352" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#f3efeb] hover:bg-[#dfddda] transition-all glow-hover"
            >
              <div className="w-12 h-12 rounded-full bg-[#111111]/10 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#615e5b]">LinkedIn</p>
                <p className="font-medium text-[#111111]">Mohith Reddy</p>
              </div>
            </a>

            <a 
              href="mailto:omverse69@example.com" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#f3efeb] hover:bg-[#dfddda] transition-all glow-hover"
            >
              <div className="w-12 h-12 rounded-full bg-[#111111]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#615e5b]">Email</p>
                <p className="font-medium text-[#111111]">omverse69@example.com</p>
              </div>
            </a>
          </div>


          {/* Free Consultation Note */}
          <div className="mt-8 p-4 rounded-2xl bg-[#111111]/5 border border-[#111111]/10 flex items-start gap-3">
            <Package className="w-5 h-5 text-[#111111] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-[#615e5b]">
              <span className="font-semibold text-[#111111]">Free Consultation:</span> I'll analyze your workflow and suggest the best automation approach — no commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
