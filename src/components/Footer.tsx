import React, { useState } from "react";
import { Sparkles, Check, ArrowUp, Terminal } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ darkMode, onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      className={`pt-16 pb-8 border-t transition-colors duration-200 ${
        darkMode 
          ? "bg-[oklch(0.12_0.015_258)] border-slate-800 text-slate-400" 
          : "bg-[oklch(0.985_0.004_250)] border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-slate-800/40 pb-12 mb-8">
          
          {/* Brand Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer group"
              onClick={() => onNavigate("hero")}
            >
              <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className={`font-display font-bold text-base tracking-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}>
                COSMIC LABS
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              Cosmic Labs adalah perusahaan teknologi dan solusi kreatif terpercaya yang menyediakan aplikasi web kelas industri, internet fiber optik simetris 1:1, infrastruktur cloud Proxmox, serta layanan studio media branding.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono pt-1">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Vertical Divisions Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              DIVISI OPERASIONAL
            </h4>
            <ul className="space-y-2">
              {[
                "Pengembangan Web & Aplikasi",
                "Internet Fiber Optik Dedicated",
                "Infrastruktur Cloud & Server",
                "Studio Media Kreatif & Branding"
              ].map((name, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate("divisions")}
                    className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              NAVIGASI
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Tentang Kami", id: "about" },
                { name: "Divisi Layanan", id: "divisions" },
                { name: "Kalkulator Biaya", id: "estimator" },
                { name: "Portofolio", id: "portfolio" },
                { name: "Proses Kerja", id: "process" },
                { name: "Artikel & Wawasan", id: "blog" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              BULETIN TEKNOLOGI
            </h4>
            <p className="text-xs leading-relaxed">
              Dapatkan pembaruan rilis teknis, artikel riset, serta analisis performa web langsung di email Anda.
            </p>

            {subscribed ? (
              <div id="newsletter-success" className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Terima kasih telah berlangganan!</span>
              </div>
            ) : (
              <form id="newsletter-footer-form" onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="nama@perusahaan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 p-2 text-xs font-mono rounded border outline-none ${
                    darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-300 text-slate-900"
                  }`}
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="hallmark-btn-primary text-xs py-2 px-3"
                >
                  Daftar
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Hallmark Sub-Footer Timestamp & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono border-t border-slate-800/30 pt-6">
          <div className="space-y-0.5 text-center sm:text-left">
            <span>© 2026 Cosmic Labs. Hak Cipta Dilindungi Undang-Undang.</span>
            <span className="block text-slate-500">Membangun Masa Depan dengan Teknologi & Kreativitas</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Jaminan Uptime SLA 99.9%</span>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className={`p-2 rounded border transition-all cursor-pointer ${
                darkMode ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-300 text-slate-700"
              }`}
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
