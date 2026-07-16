import React, { useState } from "react";
import { DIVISIONS } from "../data";
import { Division } from "../types";
import { 
  Globe, Wifi, Server, Paintbrush, 
  Check, ArrowRight, X, Sparkles, ChevronRight 
} from "lucide-react";

interface DivisionsProps {
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
  onPreSelectDivision?: (divisionId: string) => void;
}

export default function Divisions({ darkMode, onNavigate, onPreSelectDivision }: DivisionsProps) {
  const [activeDrawer, setActiveDrawer] = useState<Division | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Wifi":
        return Wifi;
      case "Server":
        return Server;
      case "Paintbrush":
        return Paintbrush;
      default:
        return Globe;
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
    // Navigate to Estimator
    onNavigate("estimator");
  };

  return (
    <section
      id="divisions"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? "bg-slate-900/50 text-white" : "bg-white text-slate-800"
      }`}
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL VERTICALS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2]">
            Comprehensive Ecosystems Built for Scale
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Our multi-disciplinary team is divided into four highly focused divisions, collaborating seamlessly to accelerate your digital infrastructure.
          </p>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIVISIONS.map((division) => {
            const IconComponent = getIcon(division.icon);
            return (
              <div
                key={division.id}
                id={`division-card-${division.id}`}
                className={`group relative p-8 sm:p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer ${
                  darkMode
                    ? "bg-slate-950/75 border-white/5 hover:border-white/10"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:shadow-slate-900/10"
                }`}
                onClick={() => handleLearnMore(division)}
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                  style={{ backgroundColor: division.glowColor }}
                />

                <div className="space-y-6">
                  {/* Division Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-tr ${division.gradient} text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {division.id}_DIVISION
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <div className="space-y-2">
                    <h3 className={`font-display font-extrabold text-2xl group-hover:text-blue-500 transition-colors ${
                      darkMode ? "text-white" : "text-slate-950"
                    }`}>
                      {division.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-500 uppercase tracking-wide">
                      {division.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed line-clamp-3 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {division.description}
                  </p>

                  {/* Feature Bullets (Preview) */}
                  <ul className="space-y-2 pt-2 border-t border-slate-500/10">
                    {division.services.slice(0, 2).map((srv) => (
                      <li key={srv.id} className="flex items-start space-x-2 text-xs">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
                          <strong className={darkMode ? "text-white" : "text-slate-900"}>{srv.name}:</strong> {srv.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-500/10 text-xs font-semibold">
                  <span className={darkMode ? "text-slate-400 group-hover:text-white" : "text-slate-500 group-hover:text-slate-900"}>
                    Discover services & technologies
                  </span>
                  <div className={`p-2.5 rounded-full transition-all group-hover:translate-x-1.5 ${
                    darkMode ? "bg-slate-900 text-slate-100 group-hover:bg-blue-600" : "bg-slate-200 text-slate-800 group-hover:bg-blue-600 group-hover:text-white"
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Modal / Slider Drawer */}
        {activeDrawer && (
          <div
            id="division-drawer-backdrop"
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex justify-end transition-opacity animate-fadeIn"
            onClick={() => setActiveDrawer(null)}
          >
            <div
              id="division-drawer-body"
              className={`w-full max-w-2xl h-full p-6 sm:p-10 flex flex-col justify-between overflow-y-auto shadow-2xl relative animate-slideInRight ${
                darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Close */}
              <button
                id="close-drawer-button"
                onClick={() => setActiveDrawer(null)}
                className={`absolute top-6 right-6 p-2 rounded-xl transition-all border cursor-pointer ${
                  darkMode ? "bg-slate-900 border-white/5 hover:bg-slate-800" : "bg-slate-100 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-start space-x-4 pt-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-tr ${activeDrawer.gradient} text-white shadow-xl`}>
                    {React.createElement(getIcon(activeDrawer.icon), { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider block">COSMIC DIVISIONAL MODULE</span>
                    <h3 className={`font-display font-black text-3xl mt-0.5 ${darkMode ? "text-white" : "text-slate-950"}`}>
                      {activeDrawer.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-500 uppercase font-semibold mt-1 tracking-wider">
                      {activeDrawer.tagline}
                    </p>
                  </div>
                </div>

                {/* Division Bio */}
                <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {activeDrawer.description}
                </p>

                {/* Detailed Services Sublist */}
                <div className="space-y-4">
                  <h4 className={`font-display font-bold text-lg border-b border-slate-500/10 pb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}>
                    Available Professional Services
                  </h4>
                  
                  <div className="space-y-4">
                    {activeDrawer.services.map((srv) => (
                      <div
                        key={srv.id}
                        id={`service-detail-${srv.id}`}
                        className={`p-4 rounded-2xl border transition-all ${
                          darkMode ? "bg-slate-900/40 border-white/5" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <h5 className={`font-display font-bold text-sm ${darkMode ? "text-white" : "text-slate-900"}`}>
                          {srv.name}
                        </h5>
                        <p className={`text-xs mt-1 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                          {srv.description}
                        </p>
                        
                        {/* Core Features bullets */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {srv.features.map((feat) => (
                            <span
                              key={feat}
                              className={`text-[9px] font-mono px-2.5 py-1 rounded-full border ${
                                darkMode 
                                  ? "bg-slate-950/60 border-white/5 text-blue-400" 
                                  : "bg-blue-50 border-blue-100 text-blue-700"
                              }`}
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Drawer Call-to-Action */}
              <div className="mt-10 pt-6 border-t border-slate-500/10 flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="drawer-estimate-cta"
                  onClick={() => handleEstimateAction(activeDrawer.id)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Configure {activeDrawer.title} Project Quote</span>
                </button>
                <button
                  id="drawer-close-cta"
                  onClick={() => setActiveDrawer(null)}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                    darkMode 
                      ? "bg-slate-900 border-white/5 hover:bg-slate-800 text-slate-300" 
                      : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  Close Explorer
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
