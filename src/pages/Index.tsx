
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections except hero
    document.querySelectorAll('section:not(#home)').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
