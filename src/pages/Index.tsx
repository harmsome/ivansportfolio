import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import HUDNavigation from "@/components/HUDNavigation";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {/* Film Grain Overlay */}
          <div className="grain-overlay" />
          {/* Scanline Effect */}
          <div className="scanline" />
          {/* HUD Navigation */}
          <HUDNavigation />
          <main className="min-h-screen scroll-smooth">
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Contact />
            <Footer />
            <ScrollToTop />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
