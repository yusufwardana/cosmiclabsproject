import React, { useState } from "react";
import { Sparkles, Mail, Check, ArrowUpRight, ArrowUp } from "lucide-react";

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
      className={`pt-16 pb-8 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-white/5 text-slate-400" 
          : "bg-slate-100 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-500/10 pb-12 mb-8">
          
          {/* Col 1: Cosmic overview (4 columns lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => onNavigate("hero")}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-base tracking-tight text-gradient-cosmic">
                COSMIC LABS
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              Cosmic Labs is a one-stop technology and creative solutions partner accelerating digital transformation across schools, public departments, local startups, and corporate conglomerates.
            </p>

            {/* Social channels mock */}
            <div className="flex items-center space-x-3.5 pt-2">
              {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-blue-500 font-mono transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services Quick lists (2.5 columns lg) */}
          <div className="lg:col-span-3 space-y-4 text-xs font-mono">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              Core Divisions
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Digital Solutions", id: "divisions" },
                { name: "Connectivity Ops", id: "divisions" },
                { name: "IT Infrastructure", id: "divisions" },
                { name: "Creative Studio", id: "divisions" }
              ].map((srv, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate(srv.id)}
                    className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 columns lg) */}
          <div className="lg:col-span-2 space-y-4 text-xs font-mono">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Story", id: "about" },
                { name: "Divisions", id: "divisions" },
                { name: "Interactive Estimator", id: "estimator" },
                { name: "Verified Portfolio", id: "portfolio" },
                { name: "Core Why Us", id: "why-choose" },
                { name: "Active Blog Insights", id: "blog" }
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

          {/* Col 4: Symmetrical newsletter subscription (3.5 columns lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              Cosmic Newsletter
            </h4>
            <p className="text-xs leading-relaxed">
              Get modern web performance tips, Mikrotik routing scripts, and creative assets directly.
            </p>

            {subscribed ? (
              <div id="newsletter-success" className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-2 text-[11px] text-emerald-500">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form id="newsletter-footer-form" onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 pr-10 text-xs rounded-xl border outline-none transition-all ${
                      darkMode 
                        ? "bg-slate-900 border-white/5 focus:border-blue-500 text-white" 
                        : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                    }`}
                  />
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Sub-Footer details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono border-t border-slate-500/5 pt-8">
          
          <div className="space-y-1 text-center sm:text-left">
            <span>© 2026 Cosmic Labs. All Rights Reserved.</span>
            <span className="block text-[9px] text-slate-500">Structured carrier lines, virtual infrastructure, and modular layouts compliant.</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-blue-500 transition-colors">Terms of Use</a>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className={`p-2.5 rounded-full transition-all border cursor-pointer ${
                darkMode ? "bg-slate-900 border-white/5 text-white hover:bg-slate-800" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
