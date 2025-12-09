import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <Tools />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
