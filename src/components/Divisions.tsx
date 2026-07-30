import React, { useState } from "react";
import { DIVISIONS } from "../data";
import { Division } from "../types";
import { 
  Globe, Wifi, Server, Paintbrush, 
  Check, ArrowRight, X, Sparkles 
} from "lucide-react";

interface DivisionsProps {
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
  onPreSelectDivision?: (divisionId: string) => void;
}

export default function Divisions({ darkMode, onNavigate, onPreSelectDivision }: DivisionsProps) {
  const [activeDrawer, setActiveDrawer] = useState<Division | null>(null);

  const getIcon = (iconName: any) => {
    if (typeof iconName !== "string") return iconName;
    switch (iconName) {
      case "Globe": return Globe;
      case "Wifi": return Wifi;
      case "Server": return Server;
      case "Paintbrush": return Paintbrush;
      default: return Globe;
    }
  };

  const handleLearnMore = (division: Division) => {
    setActiveDrawer(division);
  };

  const handleEstimateAction = (divisionId: string) => {
    setActiveDrawer(null);
    if (onPreSelectDivision) {
      onPreSelectDivision(divisionId);
    }
    onNavigate("estimator");
  };

  return (
    <section
      id="divisions"
      className={`py-20 sm:py-28 transition-colors duration-200 border-t ${
        darkMode ? "bg-[oklch(0.12_0.015_258)] border-slate-800 text-slate-100" : "bg-[oklch(0.985_0.004_250)] border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-blue-500" />
            <span>DIVISI OPERASIONAL SPESIALIS</span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] ${
            darkMode ? "text-white" : "text-slate-950"
          }`}>
            Empat Divisi Mandiri, Satu Standar Infrastruktur Terpadu.
          </h2>
          <p className={`mt-4 text-base leading-relaxed max-w-[65ch] ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Cosmic Labs mengoperasikan divisi rekayasa dan kreatif terpisah untuk menghadirkan keahlian mendalam dalam pengembangan aplikasi web, jaringan fiber optik dedicated, virtualisasi cloud server, serta produksi media digital.
          </p>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIVISIONS.map((division) => {
            const IconComponent = getIcon(division.icon);
            return (
              <div
                key={division.id}
                id={`division-card-${division.id}`}
                className={`group relative p-6 sm:p-8 rounded-lg border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  darkMode
                    ? "bg-slate-900/80 border-slate-800 hover:border-blue-500/60"
                    : "bg-white border-slate-300 hover:border-blue-500/60 shadow-sm"
                }`}
                onClick={() => handleLearnMore(division)}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      KODE // {division.id.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-display font-bold text-xl group-hover:text-blue-500 transition-colors ${
                      darkMode ? "text-white" : "text-slate-950"
                    }`}>
                      {division.title}
                    </h3>
                    <p className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mt-1">
                      {division.tagline}
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {division.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/20 dark:border-slate-800">
                    {division.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 mt-6 border-t border-slate-800/20 dark:border-slate-800 text-xs font-mono">
                  <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
                    SPESIFIKASI & KAPABILITAS TEKNIS
                  </span>
                  <div className="flex items-center text-blue-500 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Modal */}
        {activeDrawer && (
          <div
            id="division-drawer-backdrop"
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex justify-end transition-opacity animate-fadeIn"
            onClick={() => setActiveDrawer(null)}
          >
            <div
              id="division-drawer-body"
              className={`w-full max-w-2xl h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl relative border-l ${
                darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="close-drawer-button"
                onClick={() => setActiveDrawer(null)}
                className={`absolute top-6 right-6 p-2 rounded border transition-all cursor-pointer ${
                  darkMode ? "bg-slate-950 border-slate-800 text-slate-400 hover:text-white" : "bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-950"
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 pt-4">
                  <div className="w-10 h-10 rounded bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
                    {React.createElement(getIcon(activeDrawer.icon), { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider block">MODUL ARSITEKTUR TEKNIS</span>
                    <h3 className={`font-display font-bold text-2xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                      {activeDrawer.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {activeDrawer.description}
                </p>

                <div className="space-y-4">
                  <h4 className={`font-display font-bold text-sm border-b border-slate-800 pb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                    Fitur & Layanan Utama Divisi
                  </h4>
                  
                  <div className="space-y-2.5">
                    {activeDrawer.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded border flex items-start space-x-3 text-xs ${
                          darkMode ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">Teknologi Digunakan</span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {activeDrawer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded border ${
                            darkMode ? "bg-slate-950 border-slate-800 text-blue-400" : "bg-blue-50 border-blue-200 text-blue-800"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded border bg-blue-500/10 border-blue-500/20 text-xs font-mono text-blue-400">
                    <span className="font-bold block">Tingkat SLA:</span> {activeDrawer.sla}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center space-x-3">
                <button
                  id="drawer-estimate-cta"
                  onClick={() => handleEstimateAction(activeDrawer.id)}
                  className="hallmark-btn-primary text-xs flex-1 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hitung Estimasi Biaya Proyek</span>
                </button>
                <button
                  id="drawer-close-cta"
                  onClick={() => setActiveDrawer(null)}
                  className={`px-4 py-2.5 rounded text-xs font-mono border ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-400 hover:text-white" : "bg-slate-100 border-slate-300 text-slate-700"
                  }`}
                >
                  Tutup
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
