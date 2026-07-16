import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Divisions from "./components/Divisions";
import Calculator from "./components/Calculator";
import PortfolioSection from "./components/PortfolioSection";
import BentoGrid from "./components/BentoGrid";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Sparkles } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to Dark Mode for cosmic aesthetic
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [preSelectedDivision, setPreSelectedDivision] = useState("digital");

  // Pre-loader percentage ticker
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 350);
          return 100;
        }
        // Increment progress faster initially, then slower
        const diff = Math.max(2, Math.floor((100 - prev) * 0.15));
        return prev + diff;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [loading]);

  // Synchronize Dark Mode class on the document node
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Symmetrical scroll to page section
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Pre-select tab on Quote estimator
  const handlePreSelectDivision = (divisionId: string) => {
    setPreSelectedDivision(divisionId);
  };

  return (
    <>
      {/* 1. Page Loading Overlay */}
      {loading && (
        <div 
          id="loading-screen"
          className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center transition-opacity duration-300"
          style={{ opacity: loadingProgress === 100 ? 0 : 1 }}
        >
          <div className="space-y-6 text-center select-none">
            {/* Spinning active logo */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            {/* Loading indicators */}
            <div className="space-y-2">
              <span className="font-display font-extrabold text-white text-lg tracking-wider block">
                COSMIC LABS
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 block uppercase">
                ENGINE_INITIALIZATION... {loadingProgress}%
              </span>
            </div>

            {/* Symmetrical timeline gauge */}
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-100"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Primary Page Layout */}
      <div 
        id="applet-viewport-root"
        className={`min-h-screen relative flex flex-col justify-between ${
          darkMode ? "bg-[#020617] text-slate-200" : "bg-[#F8FAFC] text-slate-800"
        }`}
      >
        {/* Navigation */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onNavigate={handleNavigate} 
        />

        {/* Content sections */}
        <main className="flex-1 w-full">
          {/* Hero */}
          <Hero 
            darkMode={darkMode} 
            onNavigate={handleNavigate} 
          />

          {/* Trusted By Client Logos and Counters */}
          <TrustedBy darkMode={darkMode} />

          {/* About & Timeline */}
          <About darkMode={darkMode} />

          {/* Business Divisions */}
          <Divisions 
            darkMode={darkMode} 
            onNavigate={handleNavigate} 
            onPreSelectDivision={handlePreSelectDivision}
          />

          {/* Project Quote Estimator */}
          <Calculator 
            darkMode={darkMode} 
            preSelectedDivision={preSelectedDivision} 
          />

          {/* Case Studies / Portfolio */}
          <PortfolioSection darkMode={darkMode} />

          {/* Why us Bento grid */}
          <BentoGrid darkMode={darkMode} />

          {/* Delivery Process */}
          <Process darkMode={darkMode} />

          {/* Ratings & Reviews */}
          <Testimonials darkMode={darkMode} />

          {/* Accordion FAQ */}
          <FAQ darkMode={darkMode} />

          {/* Knowledge Blog */}
          <Blog darkMode={darkMode} />

          {/* Contact Details & Form */}
          <Contact darkMode={darkMode} />
        </main>

        {/* Footer Navigation */}
        <Footer 
          darkMode={darkMode} 
          onNavigate={handleNavigate} 
        />
      </div>
    </>
  );
}
