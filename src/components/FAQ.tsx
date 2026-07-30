import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, Sparkles, MessageSquareCode } from "lucide-react";

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950/85 border-white/5 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.03] grid-bg-dark pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PUSAT BANTUAN</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-center">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className={`mt-3 text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Temukan jawaban lengkap mengenai layanan bandwidth fiber optik, jaminan SLA, estimasi pengerjaan website, hingga pemeliharaan sistem.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? "bg-slate-900/60 border-blue-500/30"
                      : "bg-white border-blue-500/30 shadow-md"
                    : darkMode
                      ? "bg-slate-900/20 border-white/5 hover:border-white/10"
                      : "bg-white border-slate-200 hover:shadow"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <span className="text-xs font-mono text-blue-500 shrink-0 font-bold uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className={`font-display font-bold text-xs sm:text-sm ${
                      isOpen 
                        ? "text-blue-500" 
                        : darkMode 
                          ? "text-slate-200" 
                          : "text-slate-900"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? "bg-blue-600 text-white rotate-180" 
                      : darkMode ? "bg-slate-900 text-slate-400" : "bg-slate-100 text-slate-700"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  id={`faq-content-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-500/5" : "max-h-0 pointer-events-none"
                  }`}
                  style={{ transitionProperty: "max-height, border" }}
                >
                  <div className={`px-6 py-5 text-xs sm:text-sm leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
