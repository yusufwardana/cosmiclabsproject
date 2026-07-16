import React, { useState, useEffect } from "react";
import { Sparkles, FileText, Check, ArrowRight, RotateCcw, Calendar, Cpu, Wifi, Globe, Paintbrush } from "lucide-react";

interface CalculatorProps {
  darkMode: boolean;
  preSelectedDivision: string;
}

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
}

export default function Calculator({ darkMode, preSelectedDivision }: CalculatorProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [division, setDivision] = useState<"digital" | "connectivity" | "it-infra" | "creative">("digital");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Custom Knobs based on Division
  const [digitalPages, setDigitalPages] = useState<number>(5);
  const [digitalCms, setDigitalCms] = useState<"static" | "headless" | "custom">("headless");
  
  const [networkPoints, setNetworkPoints] = useState<number>(20);
  const [networkSpeed, setNetworkSpeed] = useState<"100mbps" | "1gbps" | "10gbps">("1gbps");
  
  const [serverVMs, setServerVMs] = useState<number>(3);
  const [backupRetention, setBackupRetention] = useState<"30days" | "1year" | "infinite">("30days");
  
  const [videoDuration, setVideoDuration] = useState<number>(60); // seconds
  const [creativeDeliverables, setCreativeDeliverables] = useState<"logo" | "brandbook" | "full">("brandbook");

  // Client info for quote submission
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  // Sync with preselected division from Divisions component
  useEffect(() => {
    if (preSelectedDivision === "digital" || preSelectedDivision === "connectivity" || preSelectedDivision === "it-infra" || preSelectedDivision === "creative") {
      setDivision(preSelectedDivision);
      setSelectedServices([]);
    }
  }, [preSelectedDivision]);

  // Handle service options per Division
  const serviceOptions: Record<string, ServiceOption[]> = {
    digital: [
      { id: "corp-web", name: "Corporate Website UI Development", basePrice: 1200 },
      { id: "ecom", name: "E-Commerce System & Checkout Gateway", basePrice: 2000 },
      { id: "dash", name: "Custom Admin Dashboard & Visual Charts", basePrice: 1800 },
      { id: "maint", name: "Continuous Optimization & SEO Active Audits", basePrice: 400 },
    ],
    connectivity: [
      { id: "fo-splice", name: "Physical Fiber Optic Core Splicing", basePrice: 1500 },
      { id: "router-cfg", name: "Mikrotik Hardware & Symmetrical VLAN Config", basePrice: 800 },
      { id: "wifi-manage", name: "Seamless Zero-Dead-Zone Wi-Fi AP Layout", basePrice: 900 },
      { id: "cctv", name: "Secure IP Surveillance & Isolated VLAN NVR", basePrice: 1100 },
    ],
    "it-infra": [
      { id: "virt", name: "Proxmox Bare-Metal Hypervisor Cluster Setup", basePrice: 1600 },
      { id: "cloud-mig", name: "Hybrid Cloud Workload Migration", basePrice: 1800 },
      { id: "cyber", name: "Intrusion Detection & SSL/TLS Cryptographic Hardening", basePrice: 1400 },
      { id: "back-rec", name: "3-2-1 Automated Triple Redundant Cold Backup", basePrice: 1000 },
    ],
    creative: [
      { id: "logo", name: "Bespoke Geometric Logo & Design Guidelines", basePrice: 700 },
      { id: "motion-gfx", name: "Premium Lottie-Ready Motion Graphic Renders", basePrice: 900 },
      { id: "video-edit", name: "Multi-Camera Corporate Video Sound Designing", basePrice: 1100 },
      { id: "social-banners", name: "Figma Source Responsive Banners Deck", basePrice: 500 },
    ]
  };

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(prev => prev.filter(x => x !== id));
    } else {
      setSelectedServices(prev => [...prev, id]);
    }
  };

  // Pricing calculations
  const calculateEstimate = () => {
    let baseSum = selectedServices.reduce((sum, srvId) => {
      const match = serviceOptions[division].find(x => x.id === srvId);
      return sum + (match ? match.basePrice : 0);
    }, 0);

    // If no specific services selected, add a default starting sum
    if (baseSum === 0) baseSum = 1000;

    // Apply multipliers based on knobs
    let multiplier = 1;
    if (division === "digital") {
      multiplier += (digitalPages - 1) * 0.05;
      if (digitalCms === "headless") multiplier += 0.25;
      if (digitalCms === "custom") multiplier += 0.45;
    } else if (division === "connectivity") {
      multiplier += (networkPoints - 5) * 0.015;
      if (networkSpeed === "1gbps") multiplier += 0.15;
      if (networkSpeed === "10gbps") multiplier += 0.45;
    } else if (division === "it-infra") {
      multiplier += (serverVMs - 1) * 0.15;
      if (backupRetention === "1year") multiplier += 0.1;
      if (backupRetention === "infinite") multiplier += 0.25;
    } else if (division === "creative") {
      multiplier += (videoDuration - 30) * 0.008;
      if (creativeDeliverables === "brandbook") multiplier += 0.15;
      if (creativeDeliverables === "full") multiplier += 0.35;
    }

    const estimatedTotal = Math.round(baseSum * multiplier);
    const lowEstimate = Math.round(estimatedTotal * 0.9);
    const highEstimate = Math.round(estimatedTotal * 1.15);
    const estimatedWeeks = Math.max(2, Math.round(3 + (multiplier - 1) * 4));

    return { lowEstimate, highEstimate, estimatedWeeks };
  };

  const { lowEstimate, highEstimate, estimatedWeeks } = calculateEstimate();

  const handleReset = () => {
    setSelectedServices([]);
    setDigitalPages(5);
    setDigitalCms("headless");
    setNetworkPoints(20);
    setNetworkSpeed("1gbps");
    setServerVMs(3);
    setBackupRetention("30days");
    setVideoDuration(60);
    setCreativeDeliverables("brandbook");
    setIsSubmitted(false);
    setStep(1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    // Generate simulated Quote ID
    const randomHex = Math.floor(100000 + Math.random() * 900000).toString();
    setQuoteId(`CSMC-QT-${randomHex}`);
    setIsSubmitted(true);
  };

  const currentOptions = serviceOptions[division];

  return (
    <section
      id="estimator"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative ${
        darkMode 
          ? "bg-slate-950 border-white/5 text-white" 
          : "bg-slate-100 border-slate-200 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE BUILDER</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Configure Your Custom Solution
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Configure your technical variables in real-time. Our dynamic algorithm will instantly calculate an estimated cost range, timeline range, and structural recommendation.
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Config choices */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow-md"
            }`}>
              
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-slate-500/10 pb-4 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Step {step === 1 ? "1: Architecture Config" : "2: Institutional Review"}
                </span>
                <div className="flex items-center space-x-1 font-mono text-xs">
                  <span className={`h-2 w-2 rounded-full ${step === 1 ? "bg-blue-500" : "bg-slate-600"}`} />
                  <span className={`h-2 w-2 rounded-full ${step === 2 ? "bg-blue-500" : "bg-slate-600"}`} />
                </div>
              </div>

              {step === 1 ? (
                /* STEP 1: OPTIONS CONFIG */
                <div className="space-y-6">
                  
                  {/* Division Selection Row */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                      Select Division Vertical
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: "digital", icon: Globe, label: "Digital" },
                        { id: "connectivity", icon: Wifi, label: "Connectivity" },
                        { id: "it-infra", icon: Cpu, label: "IT Infra" },
                        { id: "creative", icon: Paintbrush, label: "Creative" },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelect = division === item.id;
                        return (
                          <button
                            key={item.id}
                            id={`estimator-div-btn-${item.id}`}
                            onClick={() => {
                              setDivision(item.id as any);
                              setSelectedServices([]);
                            }}
                            className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center space-y-2 transition-all cursor-pointer ${
                              isSelect
                                ? "bg-blue-500/15 border-blue-500 text-blue-500 shadow-lg"
                                : darkMode
                                  ? "bg-slate-950/40 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900"
                                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-[11px] font-semibold">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service Addons Checklist */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                      Include Specific Deliverables
                    </label>
                    <div className="space-y-2.5">
                      {currentOptions.map((srv) => {
                        const isCheck = selectedServices.includes(srv.id);
                        return (
                          <button
                            key={srv.id}
                            id={`service-toggle-btn-${srv.id}`}
                            onClick={() => handleServiceToggle(srv.id)}
                            className={`w-full text-left p-3.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                              isCheck
                                ? "bg-slate-500/10 border-blue-500 text-blue-400"
                                : darkMode
                                  ? "bg-slate-950/40 border-white/5 text-slate-300 hover:bg-slate-900"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                                isCheck ? "bg-blue-600 border-blue-500 text-white" : "border-slate-500/25"
                              }`}>
                                {isCheck && <Check className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-xs sm:text-sm font-semibold">{srv.name}</span>
                            </div>
                            <span className="text-xs font-mono text-slate-400 shrink-0">
                              Base: ${srv.basePrice}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Custom Knobs based on active division */}
                  <div className="pt-4 border-t border-slate-500/10 space-y-4">
                    
                    {/* DIGITAL solution options */}
                    {division === "digital" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div>
                          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                            <span>PROJECT SCALE (PAGES DECK)</span>
                            <span className="text-blue-500 font-bold">{digitalPages} PAGES</span>
                          </div>
                          <input
                            id="slider-digital-pages"
                            type="range"
                            min="1"
                            max="50"
                            value={digitalPages}
                            onChange={(e) => setDigitalPages(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-2">CMS CORE ENGINE</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "static", label: "Static HTML/CSS" },
                              { id: "headless", label: "Headless CMS" },
                              { id: "custom", label: "Custom DB Dashboard" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`cms-engine-toggle-${opt.id}`}
                                onClick={() => setDigitalCms(opt.id as any)}
                                className={`py-2 px-1 text-[10px] font-mono rounded-lg border text-center cursor-pointer ${
                                  digitalCms === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : darkMode ? "bg-slate-950/40 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CONNECTIVITY options */}
                    {division === "connectivity" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div>
                          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                            <span>NETWORK OUTLETS / PORT TERMINALS</span>
                            <span className="text-blue-500 font-bold">{networkPoints} TERMINALS</span>
                          </div>
                          <input
                            id="slider-connectivity-points"
                            type="range"
                            min="5"
                            max="200"
                            value={networkPoints}
                            onChange={(e) => setNetworkPoints(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-2">FIBER SYMMETRICAL SPEED</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "100mbps", label: "100 Mbps SLA" },
                              { id: "1gbps", label: "1 Gbps SLA" },
                              { id: "10gbps", label: "10 Gbps SLA" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`fiber-speed-toggle-${opt.id}`}
                                onClick={() => setNetworkSpeed(opt.id as any)}
                                className={`py-2 px-1 text-[10px] font-mono rounded-lg border text-center cursor-pointer ${
                                  networkSpeed === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : darkMode ? "bg-slate-950/40 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* IT INFRASTRUCTURE options */}
                    {division === "it-infra" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div>
                          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                            <span>VIRTUAL SERVERS (PROXMOX CORE COUNT)</span>
                            <span className="text-blue-500 font-bold">{serverVMs} NODE VMS</span>
                          </div>
                          <input
                            id="slider-it-vms"
                            type="range"
                            min="1"
                            max="15"
                            value={serverVMs}
                            onChange={(e) => setServerVMs(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-2">BACKUP VAULT RETENTION</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "30days", label: "30-Day Cycle" },
                              { id: "1year", label: "1-Year Archive" },
                              { id: "infinite", label: "Eternal Vault" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`backup-retention-toggle-${opt.id}`}
                                onClick={() => setBackupRetention(opt.id as any)}
                                className={`py-2 px-1 text-[10px] font-mono rounded-lg border text-center cursor-pointer ${
                                  backupRetention === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : darkMode ? "bg-slate-950/40 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CREATIVE STUDIO options */}
                    {division === "creative" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div>
                          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                            <span>VIDEO TIMELINE DURATION</span>
                            <span className="text-blue-500 font-bold">{videoDuration} SECONDS</span>
                          </div>
                          <input
                            id="slider-creative-video-duration"
                            type="range"
                            min="15"
                            max="300"
                            step="15"
                            value={videoDuration}
                            onChange={(e) => setVideoDuration(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-2">CREATIVE DELIVERABLES</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "logo", label: "Asset Pack Only" },
                              { id: "brandbook", label: "Complete Brand Guide" },
                              { id: "full", label: "Brand System & Media" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`creative-deliverables-toggle-${opt.id}`}
                                onClick={() => setCreativeDeliverables(opt.id as any)}
                                className={`py-2 px-1 text-[10px] font-mono rounded-lg border text-center cursor-pointer ${
                                  creativeDeliverables === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : darkMode ? "bg-slate-950/40 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Proceed to details */}
                  <div className="pt-6 border-t border-slate-500/10 flex justify-end">
                    <button
                      id="estimator-proceed-btn"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                    >
                      <span>Review institutional details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* STEP 2: INSITUTIONAL INFORMATION & SUBMISSION */
                <form onSubmit={handleFormSubmit} className="space-y-5 animate-fadeIn">
                  
                  {isSubmitted ? (
                    <div id="quote-success-banner" className="text-center py-8 space-y-4">
                      <div className="w-14 h-14 bg-emerald-500/15 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className={`font-display font-black text-xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                        Dynamic Configuration Logged
                      </h4>
                      <p className={`text-xs max-w-md mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Thank you, <strong className="text-blue-500">{clientName}</strong>. Your customized project parameters have been synchronized with the <strong>{division.toUpperCase()}</strong> Division under Quote ID:
                      </p>
                      <div className={`p-3 rounded-xl font-mono text-xs font-bold inline-block border ${
                        darkMode ? "bg-slate-950 border-white/5 text-emerald-400" : "bg-slate-50 border-slate-200 text-emerald-600"
                      }`}>
                        {quoteId}
                      </div>
                      <p className="text-[11px] text-slate-500">
                        A Senior Solutions Architect will reach out to <strong>{clientEmail}</strong> within 2 business hours.
                      </p>
                      
                      <div className="pt-4 flex items-center justify-center space-x-3">
                        <button
                          id="estimator-reset-btn"
                          type="button"
                          onClick={handleReset}
                          className="px-4 py-2.5 rounded-xl border border-slate-500/10 text-xs font-semibold flex items-center space-x-2 text-slate-400 hover:text-white"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Configure New Quote</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Input your professional coordinates to secure this real-time pricing breakdown and submit a request directly to the <strong>{division.toUpperCase()} Division</strong>.
                      </p>

                      <div className="space-y-3.5">
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                            Institutional Name / Full Name *
                          </label>
                          <input
                            id="quote-client-name"
                            type="text"
                            required
                            placeholder="e.g. SMAN 4 Principal, or Nexa CEO"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className={`w-full p-3 text-xs rounded-xl border outline-none transition-all ${
                              darkMode 
                                ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                                : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                            Corporate Email Address *
                          </label>
                          <input
                            id="quote-client-email"
                            type="email"
                            required
                            placeholder="e.g. administrator@sman4.sch.id"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className={`w-full p-3 text-xs rounded-xl border outline-none transition-all ${
                              darkMode 
                                ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                                : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                            Company / Organization / School Name
                          </label>
                          <input
                            id="quote-client-company"
                            type="text"
                            placeholder="e.g. St. John's Academy"
                            value={clientCompany}
                            onChange={(e) => setClientCompany(e.target.value)}
                            className={`w-full p-3 text-xs rounded-xl border outline-none transition-all ${
                              darkMode 
                                ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                                : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4 flex items-center justify-between border-t border-slate-500/10">
                        <button
                          id="estimator-back-btn"
                          type="button"
                          onClick={() => setStep(1)}
                          className={`px-5 py-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            darkMode ? "border-white/5 text-slate-400 hover:text-white" : "border-slate-200 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          Back to Config
                        </button>
                        <button
                          id="estimator-submit-btn"
                          type="submit"
                          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-2 shadow-lg shadow-blue-500/20 cursor-pointer"
                        >
                          <span>Lock Symmetrical Estimate</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              )}

            </div>
          </div>

          {/* Right panel: LIVE ESTIMATE REPORT DISPLAY */}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-3xl border border-blue-500/20 shadow-2xl relative overflow-hidden ${
              darkMode ? "bg-slate-950" : "bg-white"
            }`}>
              
              {/* Symmetrical glowing card border effect */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Title / Watermark */}
              <div className="flex items-center justify-between border-b border-slate-500/10 pb-4 mb-5 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-1.5 text-blue-500">
                  <FileText className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider">Estimate Report</span>
                </div>
                <span>REV_2026.07</span>
              </div>

              {/* Summary Details */}
              <div className="space-y-4">
                
                {/* Dynamic division info banner */}
                <div className={`p-3 rounded-xl border flex items-center space-x-3 ${
                  darkMode ? "bg-slate-900/50 border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="p-2 rounded bg-blue-600 text-white">
                    {division === "digital" && <Globe className="w-4 h-4" />}
                    {division === "connectivity" && <Wifi className="w-4 h-4" />}
                    {division === "it-infra" && <Cpu className="w-4 h-4" />}
                    {division === "creative" && <Paintbrush className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider block">TARGET FOCUS</span>
                    <span className={`text-xs font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {division === "digital" && "🌐 DIGITAL Solutions"}
                      {division === "connectivity" && "📡 CONNECTIVITY Operations"}
                      {division === "it-infra" && "🖥 IT INFRASTRUCTURE"}
                      {division === "creative" && "🎨 CREATIVE STUDIO"}
                    </span>
                  </div>
                </div>

                {/* Estimator price ranges metrics */}
                <div className="py-4 border-y border-slate-500/10 text-center">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">ESTIMATED PRICE RANGE</span>
                  <div className="flex items-baseline justify-center space-x-1.5 mt-1.5">
                    <span className={`text-3xl sm:text-4xl font-black font-display ${darkMode ? "text-white" : "text-slate-900"}`}>
                      ${lowEstimate.toLocaleString()}
                    </span>
                    <span className="text-slate-400 text-lg font-bold">-</span>
                    <span className={`text-3xl sm:text-4xl font-black font-display ${darkMode ? "text-white" : "text-slate-900"}`}>
                      ${highEstimate.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-1 font-mono">USD. Exclusive of active hardware hardware if applicable</span>
                </div>

                {/* Sub details */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  
                  {/* Delivery Timeline estimate */}
                  <div className={`p-3 rounded-xl border ${
                    darkMode ? "bg-slate-900/30 border-white/5" : "bg-slate-50 border-slate-200"
                  }`}>
                    <div className="flex items-center space-x-1.5 text-slate-400 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>TIMELINE</span>
                    </div>
                    <span className={`font-bold block ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {estimatedWeeks} - {estimatedWeeks + 2} Weeks
                    </span>
                  </div>

                  {/* Core recommendation */}
                  <div className={`p-3 rounded-xl border ${
                    darkMode ? "bg-slate-900/30 border-white/5" : "bg-slate-50 border-slate-200"
                  }`}>
                    <div className="flex items-center space-x-1.5 text-slate-400 mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>ENGINE</span>
                    </div>
                    <span className={`font-bold block truncate ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {division === "digital" && `CMS: ${digitalCms.toUpperCase()}`}
                      {division === "connectivity" && `${networkSpeed.toUpperCase()} Optic`}
                      {division === "it-infra" && `${serverVMs} VM Cluster`}
                      {division === "creative" && creativeDeliverables.toUpperCase()}
                    </span>
                  </div>

                </div>

                {/* Custom list of configured variables */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">CONFIG PARAMETERS</span>
                  
                  <div className={`p-3 rounded-xl border text-[11px] font-mono space-y-1.5 ${
                    darkMode ? "bg-slate-900/20 border-white/5 text-slate-300" : "bg-slate-100/50 border-slate-200 text-slate-600"
                  }`}>
                    <div className="flex justify-between">
                      <span>Primary Vertical:</span>
                      <span className="text-blue-500 font-bold uppercase">{division}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Services Toggled:</span>
                      <span className="font-bold text-slate-400">{selectedServices.length} Selected</span>
                    </div>
                    
                    {division === "digital" && (
                      <>
                        <div className="flex justify-between">
                          <span>Target Pages Count:</span>
                          <span className="text-white font-bold">{digitalPages} Pages</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CMS Model Core:</span>
                          <span className="text-white font-bold uppercase">{digitalCms}</span>
                        </div>
                      </>
                    )}

                    {division === "connectivity" && (
                      <>
                        <div className="flex justify-between">
                          <span>Splicing Terminals:</span>
                          <span className="text-white font-bold">{networkPoints} Outlets</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bandwidth SLA Cap:</span>
                          <span className="text-white font-bold uppercase">{networkSpeed}</span>
                        </div>
                      </>
                    )}

                    {division === "it-infra" && (
                      <>
                        <div className="flex justify-between">
                          <span>Compute Hypervisors:</span>
                          <span className="text-white font-bold">{serverVMs} Node Clusters</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Backup Retain Cycle:</span>
                          <span className="text-white font-bold uppercase">{backupRetention}</span>
                        </div>
                      </>
                    )}

                    {division === "creative" && (
                      <>
                        <div className="flex justify-between">
                          <span>Timeline Editing cap:</span>
                          <span className="text-white font-bold">{videoDuration} Seconds</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Deliverables tier:</span>
                          <span className="text-white font-bold uppercase">{creativeDeliverables}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Print button / Export */}
                <button
                  id="estimator-print-report"
                  onClick={() => window.print()}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold transition-all border text-center cursor-pointer flex items-center justify-center space-x-2 ${
                    darkMode 
                      ? "bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800" 
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Config PDF</span>
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
