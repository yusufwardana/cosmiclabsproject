import React, { useState } from "react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";
import { 
  X, ExternalLink, Calendar, Code2, 
  Tag, User, Search, Sparkles, LayoutGrid, Check 
} from "lucide-react";

interface PortfolioSectionProps {
  darkMode: boolean;
}

export default function PortfolioSection({ darkMode }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<"details" | "sandbox">("details");

  // Filter Categories in Indonesian
  const categories = [
    "Semua",
    "Website Development",
    "School Websites",
    "Government Projects",
    "Networking",
    "IT Infrastructure",
    "Branding"
  ];

  const filteredPortfolio = PORTFOLIO.filter((item) => {
    const categoryMatch = activeCategory === "Semua" || item.category === activeCategory;
    const searchMatch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  return (
    <section
      id="portfolio"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        darkMode ? "bg-slate-900/50 border-white/5" : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-pink-500 bg-pink-500/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KARYA UTAMA COSMIC</span>
            </div>
            <h2 className={`font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ${
              darkMode ? "text-white" : "text-slate-950"
            }`}>
              Studi Kasus & Portofolio Terverifikasi
            </h2>
            <p className={`text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Jelajahi implementasi nyata portal sekolah, jaringan fiber optik, cluster server, serta desain branding yang kami kerjakan untuk berbagai institusi.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              id="portfolio-search-input"
              type="text"
              placeholder="Cari berdasarkan teknologi atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border outline-none transition-all ${
                darkMode 
                  ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                  : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
              }`}
            />
            <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
          </div>
        </div>

        {/* Categories Sorter Slider */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {categories.map((cat) => {
            const isSelect = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`portfolio-cat-filter-${cat.replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelect
                    ? "bg-blue-600 border-blue-500 text-white shadow-md"
                    : darkMode
                      ? "bg-slate-950 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        {filteredPortfolio.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 font-mono text-sm">Tidak ditemukan proyek yang sesuai dengan pencarian tersebut.</p>
            <button
              id="portfolio-clear-filters"
              onClick={() => { setActiveCategory("Semua"); setSearchQuery(""); }}
              className="mt-3 text-xs text-blue-500 underline font-semibold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project) => (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                onClick={() => { setSelectedProject(project); setActiveTab("details"); }}
                className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${
                  darkMode
                    ? "bg-slate-950/75 border-white/5 hover:border-white/10 shadow-indigo-500/5 hover:shadow-indigo-500/10"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                }`}
              >
                {/* Image Block */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-bold bg-slate-950/80 text-blue-400 px-3 py-1 rounded-full border border-white/10 backdrop-blur">
                    {project.category}
                  </span>
                </div>

                {/* Info Block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className={`font-display font-extrabold text-lg group-hover:text-blue-500 transition-colors line-clamp-1 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed line-clamp-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="space-y-3 pt-3 border-t border-slate-500/10">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                            darkMode ? "bg-slate-900 text-slate-300" : "bg-slate-200 text-slate-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[9px] font-mono text-slate-500 px-1 py-0.5">+{project.technologies.length - 3} lainnya</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-blue-500">
                      <span>Lihat Spesifikasi Proyek</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Specification Modal Lightbox */}
        {selectedProject && (
          <div
            id="portfolio-lightbox-backdrop"
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div
              id="portfolio-lightbox-body"
              className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border flex flex-col justify-between shadow-2xl relative animate-zoomIn ${
                darkMode ? "bg-slate-950 border-white/5 text-white" : "bg-white border-slate-200 text-slate-800"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                id="close-lightbox-button"
                onClick={() => setSelectedProject(null)}
                className={`absolute top-5 right-5 p-2 rounded-xl transition-all border z-20 cursor-pointer ${
                  darkMode ? "bg-slate-900 border-white/5 hover:bg-slate-800" : "bg-slate-100 border-slate-200 hover:bg-slate-200"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Image Cover */}
              <div className="relative aspect-21/9 md:aspect-32/9 w-full overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-950/20" />
                
                {/* Meta Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col space-y-1 z-10 text-white">
                  <span className="text-[10px] font-mono uppercase bg-blue-600/90 text-white px-2.5 py-1 rounded-full border border-blue-400/20 w-fit">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight mt-1.5">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Specs Navigation tabs inside modal */}
              <div className="flex border-b border-slate-500/10 px-6 bg-slate-500/5">
                {[
                  { id: "details", label: "Spesifikasi Proyek & Studi Kasus" },
                  { id: "sandbox", label: "Simulasi Interaktif" },
                ].map((tb) => (
                  <button
                    key={tb.id}
                    id={`modal-tab-${tb.id}`}
                    onClick={() => setActiveTab(tb.id as any)}
                    className={`py-3.5 text-xs font-semibold border-b-2 mr-6 transition-all cursor-pointer ${
                      activeTab === tb.id
                        ? "border-blue-500 text-blue-500"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tb.label}
                  </button>
                ))}
              </div>

              {/* Core spec layout switcher */}
              <div className="p-6 sm:p-8">
                
                {activeTab === "details" ? (
                  /* TAB 1: DETAILS AND META */
                  <div id="modal-content-details" className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-fadeIn">
                    
                    {/* Left details */}
                    <div className="md:col-span-8 space-y-5">
                      <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-slate-950"}`}>
                        Tinjauan Studi Kasus
                      </h4>
                      <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {selectedProject.longDescription}
                      </p>

                      <div className="space-y-3">
                        <h5 className={`font-display font-semibold text-sm ${darkMode ? "text-white" : "text-slate-900"}`}>
                          Hasil Utama Proyek
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {selectedProject.deliverables.map((deliv) => (
                            <div key={deliv} className="flex items-start space-x-2 text-xs">
                              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right metadata panel */}
                    <div className="md:col-span-4 space-y-4">
                      <div className={`p-5 rounded-2xl border ${
                        darkMode ? "bg-slate-900/40 border-white/5" : "bg-slate-50 border-slate-200"
                      } space-y-4`}>
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Metadata Proyek</h4>
                        
                        <div className="space-y-3 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 flex items-center space-x-1.5 font-mono">
                              <User className="w-3.5 h-3.5" />
                              <span>Klien:</span>
                            </span>
                            <span className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{selectedProject.client}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 flex items-center space-x-1.5 font-mono">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>Tahun:</span>
                            </span>
                            <span className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{selectedProject.year}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 flex items-center space-x-1.5 font-mono">
                              <Tag className="w-3.5 h-3.5" />
                              <span>Tipe:</span>
                            </span>
                            <span className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{selectedProject.category}</span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-3 border-t border-slate-500/10">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Teknologi Terintegrasi</span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={`text-[9px] font-mono px-2.5 py-1 rounded-md ${
                                  darkMode ? "bg-slate-950 text-blue-400 border border-white/5" : "bg-blue-50 border border-blue-100 text-blue-700"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* TAB 2: LIVE SIMULATION SANDBOX */
                  <div id="modal-content-sandbox" className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-500/10">
                      <div>
                        <h4 className={`font-display font-bold text-base ${darkMode ? "text-white" : "text-slate-950"}`}>
                          Simulasi Prototip Interaktif
                        </h4>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">SISTEM SIMULASI COSMIC v4.2 AKTIF</p>
                      </div>
                      
                      <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono text-emerald-500 font-medium">
                        <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping mr-1" />
                        <span>PROTOTIPE TERHUBUNG</span>
                      </div>
                    </div>

                    {/* Simulated output screens based on project type */}
                    <div className={`p-6 rounded-2xl border min-h-[200px] flex flex-col justify-between ${
                      darkMode ? "bg-slate-900 border-white/5" : "bg-slate-50 border-slate-200"
                    }`}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-lg border border-white/5 text-xs font-mono text-slate-400">
                          <span className="text-emerald-500 font-bold">HTTPS://</span>
                          <span>{selectedProject.client.toLowerCase().replace(/\s+/g, "")}.sch.id/portal</span>
                        </div>
                        
                        <div className="p-4 rounded-xl border border-blue-500/10 bg-slate-950/40 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-blue-500 font-bold font-mono">AKSES MASUK AMAN TERVERIFIKASI</span>
                            <span className="text-[9px] text-slate-500">Node Cluster: AP-SOUTH</span>
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 w-1/2 bg-blue-500/10 rounded" />
                            <div className="h-3 w-4/5 bg-slate-500/10 rounded" />
                          </div>
                          <div className="h-9 w-32 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white font-mono font-bold animate-pulse">
                            DEMO DIBUKA
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-xs text-blue-500 font-mono pt-3 border-t border-slate-500/10 mt-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Lingkungan simulasi berjalan tanpa kendala.</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Lightbox footer */}
              <div className="p-6 border-t border-slate-500/10 bg-slate-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-400 font-mono text-center sm:text-left">
                  Ingin solusi serupa untuk institusi Anda? Dapatkan estimasi dari tim konsultan kami.
                </p>
                <button
                  id="lightbox-close-cta"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
                >
                  Tutup Spesifikasi Proyek
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
