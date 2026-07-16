import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section
      id="testimonials"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 border-white/5 text-white" : "bg-slate-100 border-slate-200 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL TRUST</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Loved by Schools, Businesses, and Governments
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Read case-studies and verified client feedback on how our systems boost speeds, secure records, and scale digital assets.
          </p>
        </div>

        {/* Carousel Showcase Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main testimonial card */}
          <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
            darkMode 
              ? "bg-slate-900/40 border-white/5 shadow-2xl" 
              : "bg-white border-slate-200/80 shadow-lg"
          }`}>
            {/* Symmetrical glowing card border effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <Quote className="absolute top-8 left-8 w-16 h-16 text-slate-500/10 pointer-events-none" />

            <div className="relative space-y-6 z-10">
              {/* Star rating Row */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Client Content text */}
              <blockquote className={`text-base sm:text-xl font-medium leading-relaxed italic ${
                darkMode ? "text-slate-100" : "text-slate-800"
              }`}>
                "{current.content}"
              </blockquote>

              {/* Client Profile details */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-500/10">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border-2 border-blue-500 bg-slate-800 p-0.5"
                />
                <div>
                  <h4 className={`font-display font-bold text-sm sm:text-base ${darkMode ? "text-white" : "text-slate-950"}`}>
                    {current.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
                    {current.role} at <strong className="text-blue-500">{current.company}</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Slider Controls */}
          <div className="flex items-center justify-between sm:justify-end space-x-4 mt-6">
            <span className="text-xs font-mono text-slate-500">
              0{activeIdx + 1} / 0{TESTIMONIALS.length}
            </span>
            
            <div className="flex space-x-2">
              <button
                id="testimonial-prev-btn"
                onClick={handlePrev}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  darkMode 
                    ? "bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800 hover:text-white" 
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                }`}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={handleNext}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  darkMode 
                    ? "bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800 hover:text-white" 
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                }`}
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
