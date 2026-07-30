import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Command, Search, ArrowRight, Sparkles, Terminal } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Tentang Kami", id: "about" },
    { name: "Divisi Solusi", id: "divisions" },
    { name: "Estimator", id: "estimator" },
    { name: "Portofolio", id: "portfolio" },
    { name: "Proses Kerja", id: "process" },
    { name: "Artikel & Berita", id: "blog" },
    { name: "Kontak", id: "contact" },
  ];

  const commandItems = [
    { name: "Portal Web & Aplikasi Kustom", type: "Divisi", id: "divisions" },
    { name: "Konektivitas Fiber Optic Dedicated", type: "Divisi", id: "divisions" },
    { name: "Infrastruktur Virtualisasi Proxmox", type: "Divisi", id: "divisions" },
    { name: "Studio Kreatif & Media Branding", type: "Divisi", id: "divisions" },
    { name: "Kalkulator Estimasi Proyek Interaktif", type: "Alat", id: "estimator" },
    { name: "Portofolio Proyek & Studi Kasus", type: "Karya", id: "portfolio" },
    { name: "Metodologi & Proses Pengembangan", type: "Sistem", id: "process" },
    { name: "Pertanyaan yang Sering Diajukan (FAQ)", type: "Bantuan", id: "faq" },
    { name: "Konsultasi Teknis Gratis", type: "Kontak", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setCmdOpen(false);
    onNavigate(sectionId);
  };

  const filteredCommands = commandItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav
        id="main-sticky-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? darkMode
              ? "bg-[oklch(0.12_0.015_258)]/90 backdrop-blur-md border-b border-slate-800 shadow-sm"
              : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Wordmark Logo */}
            <div
              id="navbar-logo"
              className="flex items-center space-x-2.5 cursor-pointer group"
              onClick={() => handleNavClick("hero")}
            >
              <div className="w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm tracking-tighter shadow-sm group-hover:bg-blue-500 transition-colors">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-base tracking-tight ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}>
                  COSMIC LABS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  INFRASTRUKTUR & STUDIO
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                    darkMode
                      ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Action Bar */}
            <div className="hidden md:flex items-center space-x-3">
              {/* ⌘K Command Palette Button */}
              <button
                id="cmd-k-trigger"
                onClick={() => setCmdOpen(true)}
                className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-md border text-xs font-mono transition-all ${
                  darkMode
                    ? "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-blue-500/50 hover:text-slate-200"
                    : "bg-slate-100 border-slate-200 text-slate-500 hover:border-blue-500/50 hover:text-slate-800"
                }`}
              >
                <Search className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[11px]">Cari...</span>
                <kbd className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-800 text-slate-300 border border-slate-700">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                id="theme-toggle-desktop"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-md transition-all border ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Estimator CTA */}
              <button
                id="cta-navbar-quote"
                onClick={() => handleNavClick("estimator")}
                className="hallmark-btn-primary text-xs flex items-center space-x-1.5"
              >
                <span>Estimator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                id="cmd-k-mobile-trigger"
                onClick={() => setCmdOpen(true)}
                className={`p-2 rounded-md border ${
                  darkMode ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                <Search className="w-4 h-4 text-blue-500" />
              </button>

              <button
                id="theme-toggle-mobile"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-md transition-all ${
                  darkMode ? "text-amber-400" : "text-slate-700"
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                id="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${
                  darkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className={`md:hidden border-b shadow-lg transition-all ${
              darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            <div className="px-4 py-4 space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                    darkMode
                      ? "hover:bg-slate-900 text-slate-300 hover:text-white"
                      : "hover:bg-slate-100 text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800/40">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => handleNavClick("estimator")}
                  className="w-full hallmark-btn-primary flex items-center justify-center space-x-2 text-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Buka Estimator Interaktif</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ⌘K Command Palette Modal */}
      {cmdOpen && (
        <div
          id="command-palette-modal"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className={`w-full max-w-xl rounded-lg border shadow-2xl overflow-hidden ${
              darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-300 text-slate-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3 border-b border-slate-700/50 space-x-3">
              <Command className="w-4 h-4 text-blue-500 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Ketik perintah atau bagian..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none placeholder:text-slate-500 font-mono"
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-400 border border-slate-700">
                ESC
              </kbd>
            </div>

            {/* Command List Results */}
            <div className="max-h-72 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-xs cursor-pointer font-sans transition-colors ${
                      darkMode ? "hover:bg-blue-600/20 hover:text-blue-300 text-slate-300" : "hover:bg-blue-50 hover:text-blue-800 text-slate-700"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/50 text-slate-400 border border-slate-700/50">
                      {item.type}
                    </span>
                  </div>
                ))
              ) : (
                <div className="py-6 text-center text-xs text-slate-500 font-mono">
                  Tidak ditemukan hasil untuk "{searchQuery}"
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex items-center justify-between bg-slate-950/40">
              <span>COSMIC LABS COMMAND PALETTE</span>
              <span>TEKAN ESC UNTUK MENUTUP</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
