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
  
  const [digitalPages, setDigitalPages] = useState<number>(5);
  const [digitalCms, setDigitalCms] = useState<"static" | "headless" | "custom">("headless");
  
  const [networkPoints, setNetworkPoints] = useState<number>(20);
  const [networkSpeed, setNetworkSpeed] = useState<"100mbps" | "1gbps" | "10gbps">("1gbps");
  
  const [serverVMs, setServerVMs] = useState<number>(3);
  const [backupRetention, setBackupRetention] = useState<"30days" | "1year" | "infinite">("30days");
  
  const [videoDuration, setVideoDuration] = useState<number>(60);
  const [creativeDeliverables, setCreativeDeliverables] = useState<"logo" | "brandbook" | "full">("brandbook");

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  useEffect(() => {
    if (preSelectedDivision === "digital" || preSelectedDivision === "connectivity" || preSelectedDivision === "it-infra" || preSelectedDivision === "creative") {
      setDivision(preSelectedDivision);
      setSelectedServices([]);
    }
  }, [preSelectedDivision]);

  // Price base in IDR Millions (Juta Rupiah)
  const serviceOptions: Record<string, ServiceOption[]> = {
    digital: [
      { id: "corp-web", name: "Pengembangan Portal Web / Website Sekolah / Instansi", basePrice: 8 },
      { id: "ecom", name: "Modul E-Commerce & Payment Gateway", basePrice: 12 },
      { id: "dash", name: "Dasbor Sistem Informasi & Analitik Real-Time", basePrice: 15 },
      { id: "maint", name: "Layanan Pemeliharaan SEO & Performa Rutin", basePrice: 3 },
    ],
    connectivity: [
      { id: "fo-splice", name: "Penyambungan Fiber Optik & Terminasi Core", basePrice: 10 },
      { id: "router-cfg", name: "Konfigurasi MikroTik Enterprise & VLAN", basePrice: 5 },
      { id: "wifi-manage", name: "Instalasi Grid Wi-Fi 6 Area Luas / Kampus", basePrice: 7 },
      { id: "cctv", name: "Pengawasan IP Camera CCTV & Server NVR", basePrice: 8 },
    ],
    "it-infra": [
      { id: "virt", name: "Setup Cluster Virtualisasi Proxmox VE", basePrice: 14 },
      { id: "cloud-mig", name: "Migrasi Server & Setup Hybrid Cloud", basePrice: 16 },
      { id: "cyber", name: "Audit Keamanan & Firewall PfSense", basePrice: 9 },
      { id: "back-rec", name: "Sistem Cadangan Otomatis Multisite", basePrice: 6 },
    ],
    creative: [
      { id: "logo", name: "Identitas Brand & System Design Tokens", basePrice: 5 },
      { id: "motion-gfx", name: "Motion Graphics & Animasi UI Lottie", basePrice: 7 },
      { id: "video-edit", name: "Produksi Video Profil Perusahaan 4K", basePrice: 10 },
      { id: "social-banners", name: "Paket Aset Desain Media Sosial Corporate", basePrice: 4 },
    ]
  };

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(prev => prev.filter(x => x !== id));
    } else {
      setSelectedServices(prev => [...prev, id]);
    }
  };

  const calculateEstimate = () => {
    let baseSum = selectedServices.reduce((sum, srvId) => {
      const match = serviceOptions[division].find(x => x.id === srvId);
      return sum + (match ? match.basePrice : 0);
    }, 0);

    if (baseSum === 0) baseSum = 8;

    let multiplier = 1;
    if (division === "digital") {
      multiplier += (digitalPages - 1) * 0.05;
      if (digitalCms === "headless") multiplier += 0.2;
      if (digitalCms === "custom") multiplier += 0.4;
    } else if (division === "connectivity") {
      multiplier += (networkPoints - 5) * 0.015;
      if (networkSpeed === "1gbps") multiplier += 0.15;
      if (networkSpeed === "10gbps") multiplier += 0.4;
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
    const estimatedWeeks = Math.max(2, Math.round(2 + (multiplier - 1) * 3));

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

    const randomHex = Math.floor(100000 + Math.random() * 900000).toString();
    setQuoteId(`CSMC-QT-${randomHex}`);
    setIsSubmitted(true);
  };

  const currentOptions = serviceOptions[division];

  return (
    <section
      id="estimator"
      className={`py-20 sm:py-28 border-t transition-colors duration-200 ${
        darkMode ? "bg-[oklch(0.12_0.015_258)] border-slate-800 text-slate-100" : "bg-[oklch(0.985_0.004_250)] border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-blue-500" />
            <span>KALKULATOR ESTIMASI PROYEK INTERAKTIF</span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] ${
            darkMode ? "text-white" : "text-slate-950"
          }`}>
            Atur Parameter Teknis & Dapatkan Perkiraan Biaya.
          </h2>
          <p className={`mt-4 text-base leading-relaxed max-w-[65ch] ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Sesuaikan variabel operasional proyek Anda untuk menghitung estimasi kisaran anggaran, durasi pengerjaan, serta rekomendasi teknologi secara transparan.
          </p>
        </div>

        {/* Builder Workbench Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Config Choices */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-lg border ${
              darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-300 shadow-sm"
            }`}>
              
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  LANGKAH {step === 1 ? "1: KONFIGURASI ARSITEKTUR" : "2: DOKUMEN PENAWARAN"}
                </span>
                <div className="flex items-center space-x-1.5 font-mono text-xs">
                  <span className={`h-2 w-2 rounded-full ${step === 1 ? "bg-blue-500" : "bg-slate-700"}`} />
                  <span className={`h-2 w-2 rounded-full ${step === 2 ? "bg-blue-500" : "bg-slate-700"}`} />
                </div>
              </div>

              {step === 1 ? (
                <div className="space-y-6">
                  
                  {/* Division Selector */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                      PILIH DIVISI UTAMA
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: "digital", icon: Globe, label: "Solusi Digital" },
                        { id: "connectivity", icon: Wifi, label: "Konektivitas" },
                        { id: "it-infra", icon: Cpu, label: "Infrastruktur IT" },
                        { id: "creative", icon: Paintbrush, label: "Studio Kreatif" },
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
                            className={`p-3 rounded border text-center flex flex-col items-center justify-center space-y-1.5 transition-all cursor-pointer ${
                              isSelect
                                ? "bg-blue-600/20 border-blue-500 text-blue-400 font-bold"
                                : darkMode
                                  ? "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                                  : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-xs font-mono">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service Addons */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                      PILIH MODUL & LAYANAN TAMBAHAN
                    </label>
                    <div className="space-y-2">
                      {currentOptions.map((srv) => {
                        const isCheck = selectedServices.includes(srv.id);
                        return (
                          <button
                            key={srv.id}
                            id={`service-toggle-btn-${srv.id}`}
                            onClick={() => handleServiceToggle(srv.id)}
                            className={`w-full text-left p-3 rounded border flex items-center justify-between transition-all cursor-pointer ${
                              isCheck
                                ? "bg-blue-600/10 border-blue-500 text-blue-400"
                                : darkMode
                                  ? "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isCheck ? "bg-blue-600 border-blue-500 text-white" : "border-slate-600"
                              }`}>
                                {isCheck && <Check className="w-3 h-3" />}
                              </div>
                              <span className="text-xs font-medium">{srv.name}</span>
                            </div>
                            <span className="text-xs font-mono text-slate-400">
                              +Rp {srv.basePrice} Juta
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Knobs */}
                  <div className="pt-4 border-t border-slate-800 space-y-4">
                    {division === "digital" && (
                      <div className="space-y-4 font-mono text-xs">
                        <div>
                          <div className="flex justify-between text-slate-400 mb-2">
                            <span>JUMLAH HALAMAN / MODUL</span>
                            <span className="text-blue-400 font-bold">{digitalPages} HALAMAN</span>
                          </div>
                          <input
                            id="slider-digital-pages"
                            type="range"
                            min="1"
                            max="50"
                            value={digitalPages}
                            onChange={(e) => setDigitalPages(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-slate-400 block mb-2">ARSITEKTUR CMS</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "static", label: "STATIS SPEED" },
                              { id: "headless", label: "HEADLESS CMS" },
                              { id: "custom", label: "KUSTOM API DB" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`cms-engine-toggle-${opt.id}`}
                                onClick={() => setDigitalCms(opt.id as any)}
                                className={`py-2 px-1 text-[10px] rounded border text-center cursor-pointer ${
                                  digitalCms === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white font-bold"
                                    : darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {division === "connectivity" && (
                      <div className="space-y-4 font-mono text-xs">
                        <div>
                          <div className="flex justify-between text-slate-400 mb-2">
                            <span>TITIK TERMINAL FIBER / PORT</span>
                            <span className="text-blue-400 font-bold">{networkPoints} TITIK</span>
                          </div>
                          <input
                            id="slider-connectivity-points"
                            type="range"
                            min="5"
                            max="200"
                            value={networkPoints}
                            onChange={(e) => setNetworkPoints(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-slate-400 block mb-2">KAPASITAS BANDWIDTH SLA</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "100mbps", label: "100 MBPS 1:1" },
                              { id: "1gbps", label: "1 GBPS 1:1" },
                              { id: "10gbps", label: "10 GBPS 1:1" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`fiber-speed-toggle-${opt.id}`}
                                onClick={() => setNetworkSpeed(opt.id as any)}
                                className={`py-2 px-1 text-[10px] rounded border text-center cursor-pointer ${
                                  networkSpeed === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white font-bold"
                                    : darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {division === "it-infra" && (
                      <div className="space-y-4 font-mono text-xs">
                        <div>
                          <div className="flex justify-between text-slate-400 mb-2">
                            <span>ALOKASI NODE SERVER VIRTUAL</span>
                            <span className="text-blue-400 font-bold">{serverVMs} VM PROXMOX</span>
                          </div>
                          <input
                            id="slider-it-vms"
                            type="range"
                            min="1"
                            max="15"
                            value={serverVMs}
                            onChange={(e) => setServerVMs(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-slate-400 block mb-2">RETENSI CADANGAN DATA</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "30days", label: "30 HARI" },
                              { id: "1year", label: "1 TAHUN" },
                              { id: "infinite", label: "PERMANEN" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`backup-retention-toggle-${opt.id}`}
                                onClick={() => setBackupRetention(opt.id as any)}
                                className={`py-2 px-1 text-[10px] rounded border text-center cursor-pointer ${
                                  backupRetention === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white font-bold"
                                    : darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {division === "creative" && (
                      <div className="space-y-4 font-mono text-xs">
                        <div>
                          <div className="flex justify-between text-slate-400 mb-2">
                            <span>DURASI VIDEO SINEMATIK</span>
                            <span className="text-blue-400 font-bold">{videoDuration} DETIK</span>
                          </div>
                          <input
                            id="slider-creative-video-duration"
                            type="range"
                            min="15"
                            max="300"
                            step="15"
                            value={videoDuration}
                            onChange={(e) => setVideoDuration(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-slate-400 block mb-2">PAKET HASIL KREATIF</label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: "logo", label: "ASET DESAIN" },
                              { id: "brandbook", label: "BRANDBOOK" },
                              { id: "full", label: "LENGKAP 4K" },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                id={`creative-deliverables-toggle-${opt.id}`}
                                onClick={() => setCreativeDeliverables(opt.id as any)}
                                className={`py-2 px-1 text-[10px] rounded border text-center cursor-pointer ${
                                  creativeDeliverables === opt.id
                                    ? "bg-blue-600 border-blue-500 text-white font-bold"
                                    : darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
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

                  <div className="pt-6 border-t border-slate-800 flex justify-end">
                    <button
                      id="estimator-proceed-btn"
                      onClick={() => setStep(2)}
                      className="hallmark-btn-primary text-xs flex items-center space-x-2"
                    >
                      <span>Lanjut ke Penawaran Resmi</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs animate-fadeIn">
                  {isSubmitted ? (
                    <div id="quote-success-banner" className="text-center py-6 space-y-3 font-mono">
                      <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className={`font-display font-bold text-lg ${darkMode ? "text-white" : "text-slate-950"}`}>
                        Estimasi Berhasil Ditinjau & Disimpan
                      </h4>
                      <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Nomor Referensi Penawaran:
                      </p>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 font-bold inline-block">
                        {quoteId}
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Dikirimkan ke <strong>{clientEmail}</strong>. Konsultan teknis kami akan menghubungi Anda dalam waktu 2 jam kerja.
                      </p>
                      
                      <div className="pt-3 flex justify-center">
                        <button
                          id="estimator-reset-btn"
                          type="button"
                          onClick={handleReset}
                          className="px-4 py-2 rounded border border-slate-800 text-xs font-mono text-slate-300 flex items-center space-x-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Buat Konfigurasi Baru</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Masukkan informasi kontak Anda untuk mengirimkan draf spesifikasi ini ke divisi <strong>{division.toUpperCase()}</strong>.
                      </p>

                      <div className="space-y-3 font-mono">
                        <div>
                          <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                            NAMA LENGKAP *
                          </label>
                          <input
                            id="quote-client-name"
                            type="text"
                            required
                            placeholder="Contoh: Aria Kusuma, S.T."
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className={`w-full p-2.5 text-xs rounded border outline-none font-sans ${
                              darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                            EMAIL PERUSAHAAN / INSTITUSI *
                          </label>
                          <input
                            id="quote-client-email"
                            type="email"
                            required
                            placeholder="Contoh: aria@sekolah.sch.id"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className={`w-full p-2.5 text-xs rounded border outline-none font-sans ${
                              darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                            }`}
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                            NAMA PERUSAHAAN / SEKOLAH / INSTANSI
                          </label>
                          <input
                            id="quote-client-company"
                            type="text"
                            placeholder="Contoh: SMAN 4 Jakarta / PT Nexa Tech"
                            value={clientCompany}
                            onChange={(e) => setClientCompany(e.target.value)}
                            className={`w-full p-2.5 text-xs rounded border outline-none font-sans ${
                              darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                        <button
                          id="estimator-back-btn"
                          type="button"
                          onClick={() => setStep(1)}
                          className={`px-4 py-2 rounded border text-xs font-mono ${
                            darkMode ? "border-slate-800 text-slate-400 hover:text-white" : "border-slate-300 text-slate-700"
                          }`}
                        >
                          Kembali
                        </button>
                        <button
                          id="estimator-submit-btn"
                          type="submit"
                          className="hallmark-btn-primary text-xs flex items-center space-x-2"
                        >
                          <span>Kirim Permintaan Estimasi</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}

            </div>
          </div>

          {/* Right panel: ESTIMATE REPORT DISPLAY */}
          <div className="lg:col-span-5 font-mono text-xs">
            <div className={`p-6 sm:p-8 rounded-lg border shadow-xl ${
              darkMode ? "bg-slate-900/90 border-slate-800 text-slate-200" : "bg-white border-slate-300 text-slate-800"
            }`}>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-slate-400">
                <div className="flex items-center space-x-1.5 text-blue-400 font-bold">
                  <FileText className="w-4 h-4" />
                  <span>RINGKASAN ESTIMASI</span>
                </div>
                <span>REF_2026.07</span>
              </div>

              <div className="space-y-4">
                <div className={`p-3 rounded border flex items-center space-x-3 ${
                  darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold">
                    {division === "digital" && <Globe className="w-4 h-4" />}
                    {division === "connectivity" && <Wifi className="w-4 h-4" />}
                    {division === "it-infra" && <Cpu className="w-4 h-4" />}
                    {division === "creative" && <Paintbrush className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase block">DIVISI TARGET</span>
                    <span className="font-bold text-white uppercase text-xs">
                      {division === "digital" && "SOLUSI DIGITAL"}
                      {division === "connectivity" && "KONEKTIVITAS FIBER"}
                      {division === "it-infra" && "INFRASTRUKTUR IT"}
                      {division === "creative" && "STUDIO KREATIF"}
                    </span>
                  </div>
                </div>

                <div className="py-4 border-y border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 uppercase block">PERKIRAAN KISARAN BIAYA</span>
                  <div className="flex items-baseline justify-center space-x-2 mt-1">
                    <span className={`text-2xl sm:text-3xl font-bold font-display ${darkMode ? "text-white" : "text-slate-950"}`}>
                      Rp {lowEstimate} Juta
                    </span>
                    <span className="text-slate-500 font-bold">-</span>
                    <span className={`text-2xl sm:text-3xl font-bold font-display ${darkMode ? "text-white" : "text-slate-950"}`}>
                      Rp {highEstimate} Juta
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-500 block mt-1">*Bergantung pada hasil survei teknis di lapangan</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded border ${darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                    <div className="text-slate-400 text-[10px] mb-1 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>ESTIMASI WAKTU</span>
                    </div>
                    <span className="font-bold text-white text-xs">
                      {estimatedWeeks} - {estimatedWeeks + 2} MINGGU
                    </span>
                  </div>

                  <div className={`p-3 rounded border ${darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                    <div className="text-slate-400 text-[10px] mb-1 flex items-center space-x-1">
                      <Cpu className="w-3 h-3" />
                      <span>SPESIFIKASI</span>
                    </div>
                    <span className="font-bold text-white text-xs truncate block uppercase">
                      {division === "digital" && `CMS: ${digitalCms}`}
                      {division === "connectivity" && networkSpeed}
                      {division === "it-infra" && `${serverVMs} VM PROXMOX`}
                      {division === "creative" && creativeDeliverables}
                    </span>
                  </div>
                </div>

                <button
                  id="estimator-print-report"
                  onClick={() => window.print()}
                  className={`w-full py-2.5 rounded text-xs font-mono border text-center cursor-pointer flex items-center justify-center space-x-2 ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-300 hover:text-white" : "bg-slate-100 border-slate-300 text-slate-700"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Cetak Draf Ringkasan Spesifikasi</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
