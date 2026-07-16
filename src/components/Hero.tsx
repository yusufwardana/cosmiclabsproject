import React, { useState, useEffect } from "react";
import { 
  Globe, Wifi, Server, Paintbrush, Play, 
  ArrowRight, ShieldCheck, Cpu, ArrowUpRight, Check 
} from "lucide-react";

interface HeroProps {
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ darkMode, onNavigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"web" | "fiber" | "cloud" | "creative">("web");
  const [pingValue, setPingValue] = useState(4);
  const [speedVal, setSpeedVal] = useState(942);
  const [renderProgress, setRenderProgress] = useState(78);
  const [activeLayout, setActiveLayout] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Simulated metrics and network activities
  useEffect(() => {
    const pingInterval = setInterval(() => {
      setPingValue((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        const next = prev + change;
        return next < 2 ? 2 : next > 8 ? 8 : next;
      });
    }, 1200);

    const speedInterval = setInterval(() => {
      setSpeedVal((prev) => {
        const change = Math.floor(Math.random() * 9) - 4;
        const next = prev + change;
        return next < 930 ? 930 : next > 950 ? 950 : next;
      });
    }, 1500);

    const renderInterval = setInterval(() => {
      setRenderProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 300);

    return () => {
      clearInterval(pingInterval);
      clearInterval(speedInterval);
      clearInterval(renderInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* Background Grids & Ambient Auroras */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 opacity-40 ${darkMode ? "grid-bg-dark" : "grid-bg-light"}`} />
        
        {/* Floating Aurora Blurs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-500/20 aurora-blur animate-aurora-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-pink-500/15 aurora-blur animate-aurora-fast" />
        <div className="absolute top-1/2 left-2/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-emerald-500/10 aurora-blur animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Block: Core Messaging */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-mono font-medium tracking-wide ${
                darkMode 
                  ? "bg-slate-900/60 border-white/10 text-blue-400" 
                  : "bg-blue-50 border-blue-100 text-blue-700"
              }`}>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>COSMIC LABS PREMIUM EDITION</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className={`font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] ${
              darkMode ? "text-white" : "text-slate-950"
            }`}>
              Technology That <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">Drives Growth.</span> <br className="hidden sm:inline" />
              Creativity That <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Inspires.</span>
            </h1>

            {/* Subheadline */}
            <p className={`max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Cosmic Labs delivers professional websites, internet services, IT infrastructure, and creative studio solutions to help businesses, schools, and organizations thrive in the digital era.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-services"
                onClick={() => onNavigate("divisions")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-portfolio"
                onClick={() => onNavigate("portfolio")}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  darkMode 
                    ? "bg-slate-900/60 border-white/10 hover:bg-slate-800 text-white" 
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800"
                }`}
              >
                <span>View Portfolio</span>
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => onNavigate("contact")}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-all text-sm underline underline-offset-4 cursor-pointer ${
                  darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-slate-500/10 text-center lg:text-left">
              <div>
                <div className={`font-display font-bold text-2xl sm:text-3xl ${darkMode ? "text-white" : "text-slate-950"}`}>99.9%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Fiber Uptime SLA</div>
              </div>
              <div>
                <div className={`font-display font-bold text-2xl sm:text-3xl ${darkMode ? "text-white" : "text-slate-950"}`}>450+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Projects Delivered</div>
              </div>
              <div>
                <div className={`font-display font-bold text-2xl sm:text-3xl ${darkMode ? "text-white" : "text-slate-950"}`}>100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Client Trust</div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Live Previews */}
          <div className="lg:col-span-5 w-full">
            <div className={`relative p-1.5 rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
              darkMode 
                ? "bg-slate-950/70 border-white/10 shadow-indigo-500/5" 
                : "bg-white/80 border-slate-200/80 shadow-slate-900/10"
            }`}>
              {/* Card Header and Tabs */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-500/10">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                
                {/* Mode status indicator */}
                <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-500 font-medium tracking-wide animate-pulse">
                  <span>● LIVE PREVIEW</span>
                </div>
              </div>

              {/* Engine Interactive Tabs */}
              <div className="grid grid-cols-4 border-b border-slate-500/10">
                {[
                  { id: "web", icon: Globe, label: "Web" },
                  { id: "fiber", icon: Wifi, label: "Fiber" },
                  { id: "cloud", icon: Server, label: "Cloud" },
                  { id: "creative", icon: Paintbrush, label: "Studio" },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`hero-tab-${tab.id}`}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5 py-3 text-xs font-medium border-b-2 transition-all cursor-pointer ${
                        isActive
                          ? "border-blue-500 text-blue-500 bg-blue-500/5"
                          : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-500/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Inner screen contents dynamically shifting */}
              <div className="relative min-h-[300px] p-5 flex flex-col justify-between">
                
                {/* 1. Website Interactive Display */}
                {activeTab === "web" && (
                  <div id="preview-tab-web" className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-500/5">
                      <div className="text-xs font-mono text-slate-400">Canvas Rendering</div>
                      <div className="flex space-x-1 bg-slate-500/10 p-0.5 rounded-lg">
                        {(["desktop", "tablet", "mobile"] as const).map((lay) => (
                          <button
                            key={lay}
                            id={`layout-toggle-${lay}`}
                            onClick={() => setActiveLayout(lay)}
                            className={`px-1.5 py-0.5 text-[9px] rounded font-mono uppercase ${
                              activeLayout === lay 
                                ? "bg-blue-600 text-white" 
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {lay[0]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Simulating website layout based on frame selection */}
                    <div className={`mx-auto rounded-xl border border-slate-500/10 p-4 transition-all duration-500 ${
                      activeLayout === "desktop" ? "w-full" : activeLayout === "tablet" ? "w-4/5" : "w-3/5"
                    } ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
                      {/* Nav mock */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-2 rounded bg-blue-500/50" />
                        <div className="flex space-x-1">
                          <span className="w-4 h-1 rounded bg-slate-400/30" />
                          <span className="w-4 h-1 rounded bg-slate-400/30" />
                          <span className="w-4 h-1 rounded bg-slate-400/30" />
                        </div>
                      </div>
                      
                      {/* Hero mock */}
                      <div className="space-y-2 mb-4">
                        <div className="h-3 w-4/5 rounded bg-gradient-to-r from-blue-500 to-indigo-500" />
                        <div className="h-2 w-3/5 rounded bg-slate-400/30" />
                        <div className="h-2 w-2/5 rounded bg-slate-400/20" />
                      </div>

                      {/* Dynamic CTA */}
                      <div className="h-5 w-16 rounded bg-indigo-600 animate-pulse flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold font-mono">SUBMIT</span>
                      </div>
                    </div>

                    {/* Analytics graph mock */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className={`p-3 rounded-xl border border-slate-500/10 ${darkMode ? "bg-slate-900/40" : "bg-slate-100"}`}>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Conversion Rate</div>
                        <div className="text-lg font-bold text-emerald-500 font-display mt-0.5">+142.8%</div>
                        <div className="text-[8px] text-slate-500">From continuous web optimization</div>
                      </div>
                      <div className={`p-3 rounded-xl border border-slate-500/10 ${darkMode ? "bg-slate-900/40" : "bg-slate-100"}`}>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">SEO Audit Index</div>
                        <div className="text-lg font-bold text-blue-500 font-display mt-0.5">100 / 100</div>
                        <div className="text-[8px] text-slate-500">Perfect Google indexing</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Fiber Networks Interactive Display */}
                {activeTab === "fiber" && (
                  <div id="preview-tab-fiber" className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-500/5">
                      <div className="text-xs font-mono text-slate-400">Carrier Interface</div>
                      <div className="flex items-center space-x-1.5 text-[10px] text-emerald-500 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span>OPTICAL UPSTREAM ACTIVE</span>
                      </div>
                    </div>

                    {/* Fiber stats visualizer */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className={`p-3 rounded-xl text-center border border-slate-500/10 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
                        <span className="text-[9px] text-slate-400 font-mono block">PING</span>
                        <span className="text-2xl font-bold font-mono text-blue-500 mt-1 block">{pingValue} <span className="text-xs">ms</span></span>
                        <span className="text-[8px] text-slate-500 block mt-0.5">Ultra-Stable</span>
                      </div>
                      <div className={`p-3 rounded-xl text-center border border-slate-500/10 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
                        <span className="text-[9px] text-slate-400 font-mono block">DOWNLOAD</span>
                        <span className="text-xl font-bold font-mono text-emerald-500 mt-1 block">{speedVal} <span className="text-[9px]">Mbps</span></span>
                        <span className="text-[8px] text-slate-500 block mt-0.5">1:1 Dedicated</span>
                      </div>
                      <div className={`p-3 rounded-xl text-center border border-slate-500/10 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
                        <span className="text-[9px] text-slate-400 font-mono block">UPLOAD</span>
                        <span className="text-xl font-bold font-mono text-emerald-500 mt-1 block">{speedVal - 2} <span className="text-[9px]">Mbps</span></span>
                        <span className="text-[8px] text-slate-500 block mt-0.5">Symmetrical</span>
                      </div>
                    </div>

                    {/* Live Ping visual waves */}
                    <div className={`p-4 rounded-xl border border-slate-500/10 ${darkMode ? "bg-slate-900/50" : "bg-slate-100/50"} h-24 flex items-end justify-between space-x-1 overflow-hidden`}>
                      {Array.from({ length: 18 }).map((_, idx) => {
                        const h = Math.floor(Math.sin((idx + pingValue) * 0.8) * 20) + 40;
                        return (
                          <div 
                            key={idx} 
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-sm transition-all duration-300"
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Cloud Server Clusters */}
                {activeTab === "cloud" && (
                  <div id="preview-tab-cloud" className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-500/5">
                      <div className="text-xs font-mono text-slate-400">Proxmox Virtual Cluster</div>
                      <div className="flex items-center space-x-1 bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400 font-mono px-2 py-0.5 rounded">
                        <span>HEALTHY: 100%</span>
                      </div>
                    </div>

                    {/* Virtual machine list mock */}
                    <div className="space-y-2">
                      {[
                        { name: "vm-app-server-01", vcpu: "8 vCPU", ram: "16 GB", usage: "32%" },
                        { name: "vm-database-primary", vcpu: "16 vCPU", ram: "32 GB", usage: "14%" },
                        { name: "vm-creative-cdn-cache", vcpu: "4 vCPU", ram: "8 GB", usage: "68%" },
                      ].map((vm) => (
                        <div key={vm.name} className={`flex items-center justify-between p-2.5 rounded-lg border border-slate-500/10 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono font-bold text-slate-300">{vm.name}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-400">
                            <span>{vm.vcpu}</span>
                            <span>{vm.ram}</span>
                            <span className="text-blue-400">{vm.usage}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Physical cluster stats */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-2 bg-slate-500/5 p-2 rounded">
                      <div className="flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                        <span>DDOS Shield Active</span>
                      </div>
                      <span>Ceph Storage: 4.8 TB / 12 TB</span>
                    </div>
                  </div>
                )}

                {/* 4. Creative Studio Editing Timeline */}
                {activeTab === "creative" && (
                  <div id="preview-tab-creative" className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-500/5">
                      <div className="text-xs font-mono text-slate-400">Video Render Terminal</div>
                      <div className="text-[10px] text-pink-500 font-mono">EXPORT PIPELINE: {renderProgress}%</div>
                    </div>

                    {/* Dynamic color correction and timeline editor mock */}
                    <div className={`p-4 rounded-xl border border-slate-500/10 ${darkMode ? "bg-slate-900" : "bg-slate-50"} space-y-3`}>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>LUTS: COSMIC_CINEMA_04</span>
                        <span>Resolve Engine v19.0</span>
                      </div>

                      {/* Mock editor tracks */}
                      <div className="space-y-1.5 pt-1">
                        {/* Audio track */}
                        <div className="flex items-center space-x-1">
                          <span className="text-[8px] font-mono text-slate-500 w-8">AUDIO</span>
                          <div className="flex-1 h-3 rounded bg-blue-950 border border-blue-800/30 overflow-hidden relative flex items-center justify-around">
                            <div className="absolute inset-0 bg-blue-500/10" style={{ width: `${renderProgress}%` }} />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          </div>
                        </div>
                        {/* Video track */}
                        <div className="flex items-center space-x-1">
                          <span className="text-[8px] font-mono text-slate-500 w-8">VIDEO</span>
                          <div className="flex-1 h-3 rounded bg-pink-950 border border-pink-800/30 overflow-hidden relative flex items-center justify-around">
                            <div className="absolute inset-0 bg-pink-500/20" style={{ width: `${renderProgress}%` }} />
                            <span className="text-[7px] text-pink-300 font-mono uppercase tracking-widest font-bold">PROMO_CUT</span>
                          </div>
                        </div>
                        {/* VFX text track */}
                        <div className="flex items-center space-x-1">
                          <span className="text-[8px] font-mono text-slate-500 w-8">TEXT</span>
                          <div className="flex-1 h-3 rounded bg-violet-950 border border-violet-800/30 overflow-hidden relative flex items-center justify-around">
                            <div className="absolute inset-0 bg-violet-500/20" style={{ width: `${renderProgress}%` }} />
                            <span className="text-[6px] text-violet-300 font-mono tracking-widest uppercase">DYNAMIC_LOGO_LOOP</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress slider bar */}
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300" style={{ width: `${renderProgress}%` }} />
                    </div>
                  </div>
                )}

                {/* Card footer details */}
                <div className="mt-4 pt-3 border-t border-slate-500/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DIV: COSMIC_LABS_{activeTab.toUpperCase()}</span>
                  <span className="flex items-center text-blue-400">
                    <span>Explore details</span>
                    <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
