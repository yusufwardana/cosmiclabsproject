import React, { useState, useEffect } from "react";
import { 
  Globe, Wifi, Server, Paintbrush, 
  ArrowRight, ShieldCheck, Terminal, Cpu, ArrowUpRight 
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

  // Live telemetry metrics
  useEffect(() => {
    const pingInterval = setInterval(() => {
      setPingValue((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        const next = prev + change;
        return next < 2 ? 2 : next > 7 ? 7 : next;
      });
    }, 1200);

    const speedInterval = setInterval(() => {
      setSpeedVal((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        const next = prev + change;
        return next < 935 ? 935 : next > 948 ? 948 : next;
      });
    }, 1500);

    const renderInterval = setInterval(() => {
      setRenderProgress((prev) => (prev >= 100 ? 0 : prev + 1));
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
      className={`relative pt-24 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-200 ${
        darkMode ? "bg-[oklch(0.12_0.015_258)] text-slate-100" : "bg-[oklch(0.985_0.004_250)] text-slate-900"
      }`}
    >
      {/* Grid Pattern Ground */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Block: Headline & Brand Message */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex">
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-md border text-[11px] font-mono tracking-wider uppercase ${
                darkMode 
                  ? "bg-slate-900/80 border-slate-800 text-blue-400" 
                  : "bg-blue-50 border-blue-200 text-blue-800"
              }`}>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>COSMIC LABS · ARSITEKTUR WORKBENCH KOBALT</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] ${
              darkMode ? "text-white" : "text-slate-950"
            }`}>
              Membangun Masa Depan dengan Teknologi & Kreativitas.
            </h1>

            {/* Subheadline */}
            <p className={`max-w-[62ch] text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Cosmic Labs menghadirkan portal aplikasi web kustom, jaringan fiber optik terdedikasi 1:1, cluster cloud Proxmox, dan media studio kreatif berdampak tinggi. Dibangun dengan presisi teknis tanpa kompromi.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-cta-services"
                onClick={() => onNavigate("divisions")}
                className="hallmark-btn-primary flex items-center space-x-2 cursor-pointer text-xs"
              >
                <span>Jelajahi Divisi Teknis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-portfolio"
                onClick={() => onNavigate("portfolio")}
                className={`px-5 py-2.5 rounded-md font-medium text-xs border transition-all flex items-center space-x-2 cursor-pointer ${
                  darkMode 
                    ? "bg-slate-900 border-slate-800 hover:border-slate-700 text-white" 
                    : "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
                }`}
              >
                <span>Studi Kasus Klien</span>
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => onNavigate("contact")}
                className={`px-4 py-2 text-xs font-mono transition-all underline underline-offset-4 cursor-pointer ${
                  darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Kontak Langsung →
              </button>
            </div>

            {/* Grounded Technical Parameters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/20 dark:border-slate-800 text-left">
              <div>
                <div className={`font-mono font-bold text-xl sm:text-2xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                  99,9% SLA
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-1">
                  Uptime Fiber Optik
                </div>
              </div>
              <div>
                <div className={`font-mono font-bold text-xl sm:text-2xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                  4 Divisi
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-1">
                  Spesialis Terintegrasi
                </div>
              </div>
              <div>
                <div className={`font-mono font-bold text-xl sm:text-2xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                  Rasio 1:1
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-1">
                  Bandwidth Dedicated
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Diagnostic Workbench */}
          <div className="lg:col-span-5 w-full">
            <div className={`rounded-lg border shadow-xl overflow-hidden transition-all ${
              darkMode 
                ? "bg-slate-900/90 border-slate-800 text-slate-200" 
                : "bg-white border-slate-300 text-slate-800"
            }`}>
              {/* Window Bar Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/40 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-slate-400 ml-2 text-[11px]">cosmic-diagnostik-v4.2.sh</span>
                </div>
                
                <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>200 OK</span>
                </div>
              </div>

              {/* Workbench Category Tabs */}
              <div className="grid grid-cols-4 border-b border-slate-800 text-xs font-mono">
                {[
                  { id: "web", icon: Globe, label: "WEB" },
                  { id: "fiber", icon: Wifi, label: "FIBER" },
                  { id: "cloud", icon: Server, label: "CLOUD" },
                  { id: "creative", icon: Paintbrush, label: "STUDIO" },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`hero-tab-${tab.id}`}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center justify-center space-x-1.5 py-2.5 text-xs font-mono transition-all border-b-2 cursor-pointer ${
                        isActive
                          ? "border-blue-500 text-blue-500 bg-blue-500/10 font-bold"
                          : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Workbench Terminal Display */}
              <div className="p-5 font-mono text-xs min-h-[300px] flex flex-col justify-between">
                
                {/* 1. Web Portals Render Diagnostic */}
                {activeTab === "web" && (
                  <div id="preview-tab-web" className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/50 pb-2">
                      <span>ENGINE_KANVAS // VITE_REACT</span>
                      <div className="flex space-x-1">
                        {(["desktop", "tablet", "mobile"] as const).map((lay) => (
                          <button
                            key={lay}
                            id={`layout-toggle-${lay}`}
                            onClick={() => setActiveLayout(lay)}
                            className={`px-2 py-0.5 text-[9px] rounded uppercase ${
                              activeLayout === lay ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            {lay}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={`mx-auto rounded border border-slate-800 p-3 bg-slate-950 transition-all duration-300 ${
                      activeLayout === "desktop" ? "w-full" : activeLayout === "tablet" ? "w-4/5" : "w-3/5"
                    }`}>
                      <div className="flex justify-between items-center mb-3 text-[10px] text-slate-400">
                        <span className="text-blue-400">GET /api/v1/portal</span>
                        <span className="text-emerald-400">STATUS: 200</span>
                      </div>
                      <div className="space-y-1.5 text-[10px] text-slate-300">
                        <div className="text-slate-500">// Grid Tailwind Responsif & React SSR</div>
                        <div><span className="text-pink-400">const</span> config = &#123; seo: <span className="text-emerald-300">"100/100"</span>, framework: <span className="text-emerald-300">"React 19"</span> &#125;;</div>
                        <div><span className="text-blue-400">export default</span> function App() &#123; return &lt;CosmicPortal /&gt;; &#125;</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-[11px]">
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <div className="text-slate-500 uppercase">LIGHTHOUSE SEO</div>
                        <div className="text-lg font-bold text-emerald-400">100 / 100</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <div className="text-slate-500 uppercase">FIRST CONTENTFUL PAINT</div>
                        <div className="text-lg font-bold text-blue-400">0.42s</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Dedicated Fiber Telemetry */}
                {activeTab === "fiber" && (
                  <div id="preview-tab-fiber" className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/50 pb-2">
                      <span>MONITOR_TRANSCEIVER_OPTIK</span>
                      <span className="text-emerald-400 text-[10px]">STATUS: TERHUBUNG</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <div className="text-[9px] text-slate-500 uppercase">LATENSI</div>
                        <div className="text-xl font-bold text-blue-400 mt-1">{pingValue} ms</div>
                        <div className="text-[8px] text-slate-500 mt-0.5">Target &lt; 5ms</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <div className="text-[9px] text-slate-500 uppercase">DOWNSTREAM</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">{speedVal} M</div>
                        <div className="text-[8px] text-slate-500 mt-0.5">Simetris</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                        <div className="text-[9px] text-slate-500 uppercase">UPSTREAM</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">{speedVal - 1} M</div>
                        <div className="text-[8px] text-slate-500 mt-0.5">Tanpa FUP</div>
                      </div>
                    </div>

                    {/* Wave Spectrum Bar */}
                    <div className="p-3 rounded bg-slate-950 border border-slate-800 h-20 flex items-end justify-between space-x-1">
                      {Array.from({ length: 16 }).map((_, idx) => {
                        const h = Math.floor(Math.sin((idx + pingValue) * 0.7) * 20) + 40;
                        return (
                          <div
                            key={idx}
                            style={{ height: `${h}%` }}
                            className="flex-1 bg-blue-500 rounded-t-sm transition-all duration-300"
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Proxmox Cloud Virtual Cluster */}
                {activeTab === "cloud" && (
                  <div id="preview-tab-cloud" className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/50 pb-2">
                      <span>STATUS_CLUSTER_PROXMOX_VE</span>
                      <span className="text-blue-400 text-[10px]">CEPH STORAGE: AKTIF</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: "vm-101-app-utama", cores: "16 vCPU", ram: "32GB RAM", load: "18%" },
                        { name: "vm-102-postgres-cluster", cores: "32 vCPU", ram: "64GB RAM", load: "24%" },
                        { name: "vm-103-media-transcode", cores: "8 vCPU", ram: "16GB RAM", load: "42%" },
                      ].map((vm) => (
                        <div key={vm.name} className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800 text-[11px]">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="font-bold text-slate-200">{vm.name}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-slate-400">
                            <span>{vm.cores}</span>
                            <span>{vm.ram}</span>
                            <span className="text-blue-400">{vm.load}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                      <div className="flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        <span>Firewall Hardware & Protokol High Availability Aktif</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Creative Studio Render Terminal */}
                {activeTab === "creative" && (
                  <div id="preview-tab-creative" className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/50 pb-2">
                      <span>RESOLVE_RENDER_ENGINE</span>
                      <span className="text-blue-400 text-[10px]">PIPELINE: {renderProgress}%</span>
                    </div>

                    <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>PRESET: BRAND_CINEMA_4K_HDR</span>
                        <span>BITRATE: 150 Mbps</span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center space-x-2 text-[10px]">
                          <span className="w-10 text-slate-500">AUDIO</span>
                          <div className="flex-1 h-3 rounded bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center px-2">
                            <div className="absolute left-0 top-0 bottom-0 bg-blue-500/20" style={{ width: `${renderProgress}%` }} />
                            <span className="text-[8px] text-blue-300">MASTER_AUDIO_PRO_STEREO</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-[10px]">
                          <span className="w-10 text-slate-500">VIDEO</span>
                          <div className="flex-1 h-3 rounded bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center px-2">
                            <div className="absolute left-0 top-0 bottom-0 bg-indigo-500/20" style={{ width: `${renderProgress}%` }} />
                            <span className="text-[8px] text-indigo-300">MAIN_FEATURE_4K_CUT</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${renderProgress}%` }} />
                    </div>
                  </div>
                )}

                {/* Workbench Footer */}
                <div className="pt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] text-slate-400">
                  <span>DIVISI // COSMIC_LABS_{activeTab.toUpperCase()}</span>
                  <button
                    onClick={() => onNavigate("divisions")}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Lihat Spesifikasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
