import React, { useEffect, useState } from "react";
import { Sparkles, Building2, School, GraduationCap, Shield, Laptop, Milestone } from "lucide-react";

interface TrustedByProps {
  darkMode: boolean;
}

export default function TrustedBy({ darkMode }: TrustedByProps) {
  // Statistics States
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [deploymentsCount, setDeploymentsCount] = useState(0);
  const [campaignsCount, setCampaignsCount] = useState(0);

  useEffect(() => {
    // Staggered counters increment simulation
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setProjectsCount(() => Math.min(450, Math.floor((450 / steps) * step)));
      setClientsCount(() => Math.min(220, Math.floor((220 / steps) * step)));
      setSubscribersCount(() => Math.min(1250, Math.floor((1250 / steps) * step)));
      setDeploymentsCount(() => Math.min(85, Math.floor((85 / steps) * step)));
      setCampaignsCount(() => Math.min(310, Math.floor((310 / steps) * step)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const trustLogos = [
    { name: "SMAN 4 Jakarta", type: "School Portal", icon: School },
    { name: "Apex Wealth", type: "FinTech App", icon: Building2 },
    { name: "Sunda Government", type: "Public Service", icon: Shield },
    { name: "Nexa Health", type: "SaaS Platform", icon: Laptop },
    { name: "University of Java", type: "Edu Platform", icon: GraduationCap },
    { name: "Velo Logistics", type: "UMKM Retailer", icon: Milestone }
  ];

  return (
    <div
      id="trusted-and-stats"
      className={`py-12 sm:py-16 border-t border-b transition-colors duration-300 relative overflow-hidden ${
        darkMode 
          ? "bg-slate-950/40 border-white/5 text-slate-300" 
          : "bg-slate-50 border-slate-200/80 text-slate-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* LOGO SLIDER */}
        <div className="space-y-6">
          <p className="text-center text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            TRUSTED BY INSTITUTIONS, SCHOOLS, AND GOVERNMENTS
          </p>

          {/* Logo container slider */}
          <div className="relative w-full overflow-hidden">
            {/* Soft fade gradients on edges */}
            <div className={`absolute top-0 bottom-0 left-0 w-16 z-10 pointer-events-none bg-gradient-to-r ${
              darkMode ? "from-[#020617] to-transparent" : "from-[#F8FAFC] to-transparent"
            }`} />
            <div className={`absolute top-0 bottom-0 right-0 w-16 z-10 pointer-events-none bg-gradient-to-l ${
              darkMode ? "from-[#020617] to-transparent" : "from-[#F8FAFC] to-transparent"
            }`} />

            {/* Scrolling loop track */}
            <div className="flex space-x-8 sm:space-x-12 animate-[scroll_25s_linear_infinite] w-max py-2">
              {[...trustLogos, ...trustLogos].map((logo, idx) => {
                const Icon = logo.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center space-x-2.5 px-5 py-3 rounded-2xl border transition-all hover:-translate-y-0.5 shrink-0 ${
                      darkMode 
                        ? "bg-slate-900/60 border-white/5 text-white" 
                        : "bg-white border-slate-200 shadow-sm text-slate-800"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-blue-500" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-display tracking-tight">{logo.name}</span>
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">{logo.type}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* STATISTICS COUNTERS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 pt-10 border-t border-slate-500/10 text-center">
          
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-mono block uppercase">Projects Completed</span>
            <span className={`text-3xl sm:text-4xl font-black font-display tracking-tight block ${darkMode ? "text-white" : "text-slate-950"}`}>
              {projectsCount}+
            </span>
            <span className="text-[9px] text-blue-500 font-mono">Web, Cloud & Splicing</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-mono block uppercase">Happy Clients</span>
            <span className={`text-3xl sm:text-4xl font-black font-display tracking-tight block ${darkMode ? "text-white" : "text-slate-950"}`}>
              {clientsCount}+
            </span>
            <span className="text-[9px] text-blue-500 font-mono">Institutions & Retail</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-mono block uppercase">Broadband Subs</span>
            <span className={`text-3xl sm:text-4xl font-black font-display tracking-tight block ${darkMode ? "text-white" : "text-slate-950"}`}>
              {subscribersCount}+
            </span>
            <span className="text-[9px] text-blue-500 font-mono">Symmetrical Fiber Lines</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 font-mono block uppercase">IT Deployments</span>
            <span className={`text-3xl sm:text-4xl font-black font-display tracking-tight block ${darkMode ? "text-white" : "text-slate-950"}`}>
              {deploymentsCount}+
            </span>
            <span className="text-[9px] text-blue-500 font-mono">Proxmox Active VMs</span>
          </div>

          <div className="space-y-1 col-span-2 md:col-span-1">
            <span className="text-[10px] text-slate-500 font-mono block uppercase">Creative Campaigns</span>
            <span className={`text-3xl sm:text-4xl font-black font-display tracking-tight block ${darkMode ? "text-white" : "text-slate-950"}`}>
              {campaignsCount}+
            </span>
            <span className="text-[9px] text-blue-500 font-mono">Video, Brand Books & Lottie</span>
          </div>

        </div>

      </div>

      {/* Styled logo track CSS keyframe */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
