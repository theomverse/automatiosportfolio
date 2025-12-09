import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Linkedin, MessageCircle, Package } from "lucide-react";
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
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Save Time with <span className="gradient-text">Automation?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project — I usually reply within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl space-y-6 animate-fade-in-up">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 border-border/50 h-14 text-lg rounded-2xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Your Email</label>
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
            <label className="block text-sm font-medium mb-2 text-foreground">What repetitive task takes too much time?</label>
            <Textarea
              name="message"
              placeholder="Tell me about the task you want to automate..."
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

        {/* Other Ways to Connect */}
        <div className="mt-16 glass-card p-8 md:p-12 rounded-3xl animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Ways to Connect</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:omverse69@example.com" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all glow-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">omverse69@example.com</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/kamasani-mohith-reddy-1b1239352" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all glow-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-foreground">Mohith Reddy</p>
              </div>
            </a>
            
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all glow-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-medium text-foreground">+91-XXXXXXXXXX</p>
              </div>
            </a>
          </div>

          {/* Free Consultation Note */}
          <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3">
            <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Free Consultation:</span> I'll analyze your workflow and suggest the best automation approach — no commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
