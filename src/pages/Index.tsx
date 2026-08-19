import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Highlights />
      <WhyWorkWithMe />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
