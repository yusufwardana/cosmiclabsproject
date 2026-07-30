import React, { useState } from "react";
import { PROCESS_STEPS } from "../data";
import { 
  MessageSquareCode, Map, Palette, Cpu, 
  ShieldAlert, Rocket, LifeBuoy, Check, Sparkles 
} from "lucide-react";

interface ProcessProps {
  darkMode: boolean;
}

export default function Process({ darkMode }: ProcessProps) {
  const [activeStep, setActiveStep] = useState(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquareCode":
        return MessageSquareCode;
      case "Map":
        return Map;
      case "Palette":
        return Palette;
      case "Cpu":
        return Cpu;
      case "ShieldAlert":
        return ShieldAlert;
      case "Rocket":
        return Rocket;
      case "LifeBuoy":
        return LifeBuoy;
      default:
        return MessageSquareCode;
    }
  };

  const currentStepData = PROCESS_STEPS.find(s => s.number === activeStep) || PROCESS_STEPS[0];
  const IconComponent = getIcon(currentStepData.icon);

  return (
    <section
      id="process"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative overflow-hidden ${
        darkMode ? "bg-slate-900/50 text-white" : "bg-white text-slate-800"
      }`}
    >
      {/* Decorative Aurora glow */}
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PIPA OPERASIONAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Proses Kerja Simetris & Terstruktur Kami
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Kami membagi siklus hidup proyek menjadi tujuh tahap terstruktur dengan laporan rutin yang transparan mulai dari konsultasi hingga pemantauan jangka panjang.
          </p>
        </div>

        {/* Stepper Timeline Navigation */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex md:justify-between items-center min-w-[700px] px-4 relative">
            
            {/* Background connection bar */}
            <div className="absolute left-10 right-10 top-1/2 h-0.5 bg-slate-500/20 z-0" />

            {/* Steps Nodes */}
            {PROCESS_STEPS.map((step) => {
              const isPassed = step.number < activeStep;
              const isActive = step.number === activeStep;
              return (
                <button
                  key={step.number}
                  id={`process-node-btn-${step.number}`}
                  onClick={() => setActiveStep(step.number)}
                  className="relative z-10 flex flex-col items-center cursor-pointer select-none focus:outline-none"
                >
                  {/* Step ball */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-blue-600 border-blue-500 text-white scale-110 shadow-lg shadow-blue-500/25"
                      : isPassed
                        ? "bg-emerald-600 border-emerald-500 text-white"
                        : darkMode
                          ? "bg-slate-950 border-white/10 text-slate-500 hover:text-white hover:bg-slate-900"
                          : "bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200 hover:text-slate-800"
                  }`}>
                    {isPassed ? <Check className="w-4 h-4" /> : step.number}
                  </div>
                  
                  {/* Small step title */}
                  <span className={`text-[10px] font-mono font-semibold mt-2 uppercase tracking-wider whitespace-nowrap transition-colors ${
                    isActive ? "text-blue-500 font-bold" : isPassed ? "text-emerald-500" : "text-slate-500"
                  }`}>
                    {step.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Display Dashboard */}
        <div className={`p-6 sm:p-10 rounded-3xl border ${
          darkMode ? "bg-slate-950/70 border-white/5" : "bg-slate-50 border-slate-200/80 shadow-md"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Icon and Text info */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step indicator badge */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-blue-500/15 text-blue-400 font-bold uppercase">
                  TAHAP {currentStepData.number} DARI 7
                </span>
                <span className="text-xs text-slate-400 font-mono">KODE: CSMC_PROC_PH_{currentStepData.number}</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className={`font-display font-black text-2xl sm:text-3xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                  {currentStepData.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {currentStepData.description}
                </p>
              </div>

              {/* Checklist bullets */}
              <div className="space-y-2.5 pt-4 border-t border-slate-500/10">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Daftar Hasil & Target Tahapan</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStepData.details.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-xl border flex items-center space-x-3 text-xs ${
                        darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200"
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Visual illustration panel corresponding to step */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div className={`p-8 rounded-3xl border w-full aspect-square max-w-[320px] flex flex-col items-center justify-center text-center relative overflow-hidden ${
                darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200/80 shadow"
              }`}>
                {/* Floating blur circles */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />

                {/* Big bouncing icon container */}
                <div className="relative p-6 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 mb-6 group-hover:scale-105 transition-transform animate-float">
                  <IconComponent className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">TARGET TAHAPAN</span>
                  <h4 className={`font-display font-extrabold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {currentStepData.title} Aktif
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                    Kolaborasi berkelanjutan dan penjaminan mutu kualitas tanpa kompromi.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
