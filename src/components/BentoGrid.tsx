import React, { useState, useEffect } from "react";
import { 
  Sparkles, ShieldCheck, Award, Zap, 
  Clock, Infinity, HardDrive, Users, Wifi 
} from "lucide-react";

interface BentoGridProps {
  darkMode: boolean;
}

export default function BentoGrid({ darkMode }: BentoGridProps) {
  const [uptime, setUptime] = useState(99.994);
  const [activeClients, setActiveClients] = useState(1420);

  // Simulate active changing metrics in Bento
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(() => {
        const delta = (Math.random() * 0.004) - 0.002;
        const next = 99.99 + delta;
        return next > 100 ? 100 : next < 99.98 ? 99.98 : parseFloat(next.toFixed(4));
      });
      setActiveClients(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="why-choose"
      className={`py-20 sm:py-28 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KEUNGGULAN COSMIC</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2]">
            Mengapa Institusi Memilih Cosmic Labs
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto mt-5" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px]">
          
          {/* Card 1: Symmetrical Fiber */}
          <div className={`md:col-span-8 md:row-span-2 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden ${
            darkMode 
              ? "bg-slate-900/40 border-white/5 hover:border-white/10" 
              : "bg-white border-slate-200 shadow hover:shadow-xl"
          }`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 inline-block">
                  <Wifi className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping mr-1" />
                  <span>SLA AKTIF TERVERIFIKASI</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className={`font-display font-black text-2xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                  Konektivitas Fiber Optik Kelas Operator
                </h3>
                <p className={`text-sm leading-relaxed max-w-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Kami menggelar jaringan cincin fiber optik fisik langsung ke kompleks sekolah, gedung perkantoran, dan kantor dinas pemerintah. Parameter bandwidth simetris 1:1 menjamin kelancaran transaksi data tanpa pembatasan kuota (FUP) bahkan saat beban puncak.
                </p>
              </div>
            </div>

            {/* Simulated Live Connectivity Console */}
            <div className={`p-4 rounded-xl border flex items-center justify-between font-mono text-xs ${
              darkMode ? "bg-slate-950/80 border-white/5 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
            }`}>
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Indeks SLA Uptime Real-Time:</span>
                <span className="text-emerald-500 font-bold">{uptime}%</span>
              </div>
              <div className="hidden sm:flex items-center space-x-3 text-[10px] text-slate-500">
                <span>Latensi: ~3.2ms</span>
                <span>Jitter: 0.12ms</span>
              </div>
            </div>
          </div>

          {/* Card 2: Experienced Team */}
          <div className={`md:col-span-4 p-6 rounded-3xl border flex flex-col justify-between ${
            darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow hover:shadow-xl"
          }`}>
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">TIM TERSERTIFIKASI</span>
            </div>
            
            <div className="space-y-1">
              <h4 className={`font-display font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                Tim Berpengalaman
              </h4>
              <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Teknisi senior bersertifikat Cisco & MikroTik MTCNA, arsitek sistem web, serta pengarah kreatif profesional.
              </p>
            </div>

            {/* Certifications badges */}
            <div className="flex items-center space-x-1.5 pt-1 overflow-x-auto">
              {["CCNA", "MTCNA", "AWS", "UI/UX"].map((badge) => (
                <span key={badge} className="text-[8px] font-mono px-2 py-0.5 rounded bg-slate-500/10 text-slate-400 border border-slate-500/10 uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Modern Tech Stack */}
          <div className={`md:col-span-4 p-6 rounded-3xl border flex flex-col justify-between ${
            darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow hover:shadow-xl"
          }`}>
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">TEKNOLOGI MODERN</span>
            </div>

            <div className="space-y-1">
              <h4 className={`font-display font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                Teknologi Terdepan
              </h4>
              <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Vite, React 19, Tailwind CSS v4, hypervisor Proxmox VE, dan Ceph Storage untuk menjamin kecepatan maksimal.
              </p>
            </div>

            <span className="text-[10px] font-mono text-blue-500 font-bold block">
              Skor Performa Lighthouse 100/100
            </span>
          </div>

          {/* Card 4: Professional Support */}
          <div className={`md:col-span-4 p-6 rounded-3xl border flex flex-col justify-between relative overflow-hidden ${
            darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow hover:shadow-xl"
          }`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">DUKUNGAN PROAKTIF</span>
            </div>

            <div className="space-y-1">
              <h4 className={`font-display font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                Dukungan Profesional 24/7
              </h4>
              <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Sistem pemantauan proaktif dan diagnostik server otomatis memberikan peringatan dini sebelum gangguan terjadi.
              </p>
            </div>

            <span className="text-[10px] text-emerald-500 font-mono font-bold flex items-center">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-1 animate-pulse" />
              Garansi SLA Siaga 24/7/365
            </span>
          </div>

          {/* Card 5: Long-Term Partnership */}
          <div className={`md:col-span-4 p-6 rounded-3xl border flex flex-col justify-between ${
            darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow hover:shadow-xl"
          }`}>
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Infinity className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">KEMITRAAN BERKELANJUTAN</span>
            </div>

            <div className="space-y-1">
              <h4 className={`font-display font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                Kemitraan Jangka Panjang
              </h4>
              <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Kami tidak sekadar membangun. Kami mendampingi dengan pemeliharaan berkelanjutan, cadangan rutin, dan pembaruan sistem.
              </p>
            </div>

            <span className="text-[10px] text-indigo-500 font-mono font-bold block">
              Pengguna Aktif: {activeClients}+
            </span>
          </div>

          {/* Card 6: Creative Excellence */}
          <div className={`md:col-span-4 p-6 rounded-3xl border flex flex-col justify-between ${
            darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow hover:shadow-xl"
          }`}>
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">STUDIO KREATIF</span>
            </div>

            <div className="space-y-1">
              <h4 className={`font-display font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                Keunggulan Desain & Media
              </h4>
              <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Videografi sinematik, token desain responsif, dan sistem identitas visual yang memperkuat reputasi brand Anda.
              </p>
            </div>

            <span className="text-[10px] text-pink-500 font-mono font-bold block">
              Standar Desain Kelas Dunia
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
