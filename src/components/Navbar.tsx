import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Divisions", id: "divisions" },
    { name: "Estimator", id: "estimator" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Why Us", id: "why-choose" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Scroll progress tracking
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        id="main-sticky-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg"
              : "bg-white/80 backdrop-blur-md border-b border-slate-900/5 shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div 
              id="navbar-logo"
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavClick("hero")}
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="absolute inset-0 rounded-xl bg-white/20 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  COSMIC LABS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 group-hover:text-blue-500 transition-colors uppercase">
                  Future-Ready
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-slate-500/5 ${
                    darkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Action Bar */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                id="theme-toggle-desktop"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl transition-all border ${
                  darkMode
                    ? "bg-slate-900 border-white/5 text-yellow-400 hover:bg-slate-800"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Consultation CTA */}
              <button
                id="cta-navbar-quote"
                onClick={() => handleNavClick("estimator")}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-500 group-hover:from-blue-600 group-hover:to-pink-500 hover:text-white text-white focus:ring-2 focus:outline-none focus:ring-blue-800 cursor-pointer mt-2"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-lg group-hover:bg-opacity-0">
                  Interactive Estimator
                </span>
              </button>
            </div>

            {/* Mobile Actions Menu Trigger */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                id="theme-toggle-mobile"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all ${
                  darkMode ? "text-yellow-400" : "text-slate-700"
                }`}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                id="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-all ${
                  darkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className={`md:hidden absolute top-16 left-0 right-0 border-b shadow-2xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-950 border-white/5 text-slate-100"
                : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    darkMode
                      ? "hover:bg-slate-900 text-slate-300 hover:text-white"
                      : "hover:bg-slate-100 text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-500/10">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => handleNavClick("estimator")}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 text-white font-medium text-center shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Dynamic Estimate</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
