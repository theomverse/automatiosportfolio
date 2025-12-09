import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does automation take?",
    answer: "Simple automations take 2-3 days. Complex systems take 5-7 days. I'll give you an exact timeline after understanding your needs."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No! I handle everything from setup to deployment. You'll get simple documentation and training on how to use your automation."
  },
  {
    question: "What if something breaks?",
    answer: "All projects include 30 days of free support. I also offer optional monthly maintenance plans for ongoing updates."
  },
  {
    question: "Can you automate any task?",
    answer: "If it's repetitive and involves apps or data, chances are high I can automate it. Contact me to discuss your specific use case."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card rounded-2xl px-6 border-none"
            >
              <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
