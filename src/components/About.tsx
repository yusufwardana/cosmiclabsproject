import React, { useState } from "react";
import { TIMELINE } from "../data";
import { Eye, Target, Sparkles, Award, Shield, Zap } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE.length - 1);

  const coreValues = [
    {
      title: "Keunggulan Teknis",
      desc: "Kami menulis kode yang bersih, semantik, dan membangun saluran konektivitas terdedikasi tanpa kompromi.",
      icon: Zap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Keandalan Tinggi",
      desc: "Konfigurasi server ter-virtualisasi dan sistem pencadangan terstruktur menjamin ketersediaan tinggi untuk institusi.",
      icon: Shield,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      title: "Penguasaan Kreatif",
      desc: "Desainer berbakat kami merancang aset visual, token desain Figma, dan video profil yang memikat perhatian publik.",
      icon: Award,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950/80 border-white/5 text-white" 
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARSITEKTUR PERUSAHAAN</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2]">
            Menggabungkan Teknologi & Kreativitas <br className="hidden sm:inline" />
            Untuk Membangun Ekosistem Digital Masa Depan
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto mt-5" />
        </div>

        {/* Corporate Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className={`font-display font-extrabold text-2xl sm:text-3xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}>
              Akselerasi Transformasi Digital Anda
            </h3>
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Cosmic Labs adalah perusahaan solusi teknologi dan kreatif terpadu yang membantu bisnis, sekolah, instansi pemerintah, dan organisasi mengakselerasi transformasi digital. Kami menggabungkan konektivitas internet dedicated berkecepatan tinggi, infrastruktur IT yang tangguh, pengembangan aplikasi web kustom modern, serta media kreatif mutakhir untuk memberikan solusi yang andal dan berkelanjutan.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Baik dalam membangun platform pelayanan publik yang inklusif, menggelar jaringan fiber optik skala kampus, memvirtualisasikan server korporat, maupun merancang identitas merek visual, tim multidisiplin kami siap merancang setiap detail dengan presisi mutlak.
            </p>
          </div>

          <div className="lg:col-span-6">
            {/* Visual Brand Statement Box */}
            <div className={`relative p-8 rounded-3xl border overflow-hidden ${
              darkMode 
                ? "bg-slate-900/40 border-white/5 shadow-inner" 
                : "bg-white border-slate-200 shadow-md"
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                {/* Vision card */}
                <div className="flex space-x-4 items-start">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-slate-900"}`}>Visi Kami</h4>
                    <p className={`text-sm mt-1 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Menjadi mitra terpercaya dalam inovasi teknologi dan ekspresi kreatif—menghubungkan tulang punggung fisik yang kompleks dengan antarmuka pengguna yang intuitif dan elegan.
                    </p>
                  </div>
                </div>

                {/* Mission card */}
                <div className="flex space-x-4 items-start pt-4 border-t border-slate-500/10">
                  <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-500 shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-slate-900"}`}>Misi Kami</h4>
                    <p className={`text-sm mt-1 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Menghadirkan ekosistem digital yang aman, mudah diakses, dan berkinerja tinggi melalui rekayasa software presisi, konektivitas fiber simetris, cluster IT aman, serta desain visual berdampak tinggi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Bento Grid */}
        <div className="mb-20">
          <h3 className={`font-display font-extrabold text-2xl text-center mb-8 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Prinsip Utama Operasional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-slate-900/50 border-white/5 hover:border-white/10"
                      : "bg-white border-slate-200 hover:shadow-lg"
                  }`}
                >
                  <div className={`p-3 rounded-2xl ${val.bgColor} ${val.color} inline-block mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className={`font-display font-bold text-lg mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {val.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className={`font-display font-extrabold text-2xl ${darkMode ? "text-white" : "text-slate-900"}`}>
              Jejak Langkah & Perkembangan Cosmic
            </h3>
            <p className="text-sm text-slate-400 font-mono mt-1">KLIK NODE UNTUK MELIHAT RIWAYAT KAMI</p>
          </div>

          <div className={`p-6 sm:p-10 rounded-3xl border relative overflow-hidden ${
            darkMode ? "bg-slate-900/30 border-white/5" : "bg-white border-slate-200/80 shadow-md"
          }`}>
            
            {/* Horizontal Timeline Connector Bar */}
            <div className="absolute left-10 right-10 top-[68px] h-0.5 bg-slate-500/20 hidden md:block" />

            {/* Timeline Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10 text-center">
              {TIMELINE.map((milestone, index) => {
                const isActive = index === selectedMilestone;
                return (
                  <button
                    key={milestone.year}
                    id={`milestone-node-${milestone.year}`}
                    onClick={() => setSelectedMilestone(index)}
                    className="flex md:flex-col items-center space-x-4 md:space-x-0 cursor-pointer focus:outline-none focus:ring-0 select-none text-left md:text-center"
                  >
                    {/* Node Circle */}
                    <div className="relative flex items-center justify-center shrink-0 mb-3 mx-auto">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 border-2 z-10 ${
                        isActive
                          ? "bg-blue-600 border-blue-500 text-white scale-110 shadow-lg shadow-blue-500/20"
                          : darkMode
                            ? "bg-slate-900 border-white/10 text-slate-400 hover:text-white"
                            : "bg-slate-100 border-slate-300 text-slate-500 hover:text-slate-800"
                      }`}>
                        {milestone.year}
                      </div>
                      
                      {/* Inner glow on active */}
                      {isActive && (
                        <div className="absolute inset-[-4px] rounded-full border border-blue-500/40 animate-ping opacity-60" />
                      )}
                    </div>

                    {/* Metadata text */}
                    <div>
                      <div className={`font-display font-bold text-sm tracking-tight transition-colors duration-200 ${
                        isActive 
                          ? "text-blue-500" 
                          : darkMode 
                            ? "text-slate-300" 
                            : "text-slate-800"
                      }`}>
                        {milestone.title}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5 md:hidden">
                        Klik untuk melihat rincian
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Milestone Panel */}
            <div id="milestone-detail-panel" className={`mt-8 p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
              darkMode 
                ? "bg-slate-950/60 border-white/5 text-slate-200" 
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 border-b border-slate-500/10 pb-3 gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold font-mono text-blue-500">TAHUN {TIMELINE[selectedMilestone].year}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono">Pencapaian Terverifikasi</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">COSMIC_HIST_REG_{selectedMilestone + 1}</span>
              </div>
              <h4 className={`font-display font-extrabold text-lg mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                {TIMELINE[selectedMilestone].title}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                {TIMELINE[selectedMilestone].description}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
