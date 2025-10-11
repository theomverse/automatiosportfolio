import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Send as Telegram, Linkedin } from "lucide-react";
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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero animate-gradient-shift opacity-20" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Automate Your <span className="gradient-text">Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to save time and grow faster with AI automation?<br />
            Let's discuss your project — I usually reply within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl space-y-6 animate-fade-in-up">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 border-border/50 h-14 text-lg rounded-2xl"
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 border-border/50 h-14 text-lg rounded-2xl"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-background/50 border-border/50 text-lg rounded-2xl resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-14 text-lg rounded-full glow-hover bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 animate-fade-in">
          <a 
            href="mailto:your@email.com" 
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center glow-hover"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-primary" />
          </a>
          <a 
            href="https://t.me/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center glow-hover"
            aria-label="Telegram"
          >
            <Telegram className="w-6 h-6 text-primary" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center glow-hover"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
