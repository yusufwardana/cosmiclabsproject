import React, { useState } from "react";
import { 
  Sparkles, Phone, Mail, MapPin, 
  Clock, Send, MessageSquareCode, Check, ExternalLink 
} from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Digital Solutions",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappAgentOpen, setWhatsappAgentOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "Digital Solutions",
        message: ""
      });
    }, 1500);
  };

  const handleWhatsappRedirect = () => {
    const message = encodeURIComponent("Hello Cosmic Labs, I'd like to consult on a tech and creative transformation project.");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 border-t transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 border-white/5 text-white" : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT DISCOVERY KICKOFF</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight">
            Initiate Your Transformation
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Reach out directly. Connect with our dedicated account handlers to organize a symmetrical engineering consultation.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Corporate details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow"
            } space-y-6`}>
              
              <h3 className={`font-display font-extrabold text-xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                Cosmic Labs Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-mono">
                
                {/* Office Location */}
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">VISITING ADDRESS</span>
                    <span className={darkMode ? "text-slate-200" : "text-slate-700"}>
                      Cosmic Plaza Block C, Suite 102, Sudirman Tech District, Jakarta, Indonesia
                    </span>
                  </div>
                </div>

                {/* Corporate email */}
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">CORPORATE EMAIL</span>
                    <a 
                      href="mailto:partner@cosmiclabs.co"
                      className="text-blue-500 hover:underline font-bold"
                    >
                      partner@cosmiclabs.co
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">VOIP HOTLINE</span>
                    <a 
                      href="tel:+6221504928"
                      className="text-blue-500 hover:underline font-bold"
                    >
                      +62 (21) 504-928
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">BUSINESS HOURS</span>
                    <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
                      Monday - Friday: 08:30 - 18:00 WIB <br />
                      Saturday: 09:00 - 15:00 WIB (Tech support only)
                    </span>
                  </div>
                </div>

              </div>

              {/* Symmetrical Vector Map Representation */}
              <div className="space-y-2 pt-2 border-t border-slate-500/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">COSMIC COORDINATES RADAR</span>
                
                <div className={`aspect-video rounded-2xl border relative overflow-hidden flex items-center justify-center ${
                  darkMode ? "bg-slate-950 border-white/5" : "bg-slate-100 border-slate-200"
                }`}>
                  {/* Styled Background map grids lines */}
                  <div className="absolute inset-0 opacity-15 bg-grid-slate-500" style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                  
                  {/* Floating Target Pin */}
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <span className="flex h-4 w-4 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
                    </span>
                    <span className="text-[9px] font-mono font-bold text-blue-500 mt-2 bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur">
                      LAT: -6.2146 / LON: 106.8451
                    </span>
                  </div>

                  {/* Symmetrical watermarks */}
                  <div className="absolute bottom-2 left-3 text-[8px] font-mono text-slate-500">Jakarta Central radar v4</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Message intake Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow"
            }`}>
              
              {isSuccess ? (
                <div id="contact-success-panel" className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow border border-emerald-500/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className={`font-display font-black text-xl ${darkMode ? "text-white" : "text-slate-950"}`}>
                    Message Dispatched Successfully
                  </h4>
                  <p className={`text-xs max-w-md mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Your project details have been safely queued in our communications database. A solutions architect from our creative and technology team will contact you shortly.
                  </p>
                  <button
                    id="reset-contact-form-btn"
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="corporate-contact-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ir. Dian Kusuma"
                        className={`w-full p-3.5 text-xs rounded-xl border outline-none transition-all ${
                          darkMode 
                            ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                            : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. dkusuma@institution.id"
                        className={`w-full p-3.5 text-xs rounded-xl border outline-none transition-all ${
                          darkMode 
                            ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                            : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                      Operational Area of Inquiry
                    </label>
                    <select
                      id="contact-subject-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 text-xs rounded-xl border outline-none transition-all cursor-pointer ${
                        darkMode 
                          ? "bg-slate-950 border-white/5 focus:border-blue-500 text-slate-300" 
                          : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-700"
                      }`}
                    >
                      <option value="Digital Solutions">🌐 Digital Solutions (Web apps, CMS, Portals)</option>
                      <option value="Connectivity & Fiber">📡 Connectivity (Dedicated Fiber Splicing, APs)</option>
                      <option value="IT Infrastructure">🖥 IT Infrastructure (Proxmox Clustering, Security)</option>
                      <option value="Creative Studio">🎨 Creative Studio (Logo systems, corporate video)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                      Detailed message / Project guidelines *
                    </label>
                    <textarea
                      id="contact-message-input"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your database configurations, fiber requirements, design elements, or institutional delivery timelines..."
                      className={`w-full p-3.5 text-xs rounded-xl border outline-none transition-all resize-none ${
                        darkMode 
                          ? "bg-slate-950 border-white/5 focus:border-blue-500 text-white" 
                          : "bg-slate-50 border-slate-200 focus:border-blue-500 text-slate-800"
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Encrypting details...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Inquiry Symmetrically</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Floating Active WhatsApp Chat Agent Bubble */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end space-y-2">
        {whatsappAgentOpen && (
          <div 
            id="whatsapp-chat-agent-bubble"
            className={`p-4 rounded-2xl border shadow-2xl w-72 mb-1 text-xs animate-slideInUp ${
              darkMode ? "bg-slate-950 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            <div className="flex items-center space-x-2 pb-2.5 border-b border-slate-500/10 mb-2.5">
              <div className="relative">
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Aria"
                  alt="Aria"
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full bg-slate-800 p-0.5 border border-blue-500"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold font-display">Aria Kusuma</h4>
                <p className="text-[9px] text-slate-400 font-mono">Senior Support Agent • Online</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-3">
              "Hi there! I am ready to handle your questions regarding our digital, fiber connectivity, or IT infrastructure operations. Let's talk over WhatsApp!"
            </p>
            <button
              id="whatsapp-agent-launch-btn"
              onClick={handleWhatsappRedirect}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center space-x-1.5 shadow-lg cursor-pointer"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Connect Over WhatsApp</span>
            </button>
          </div>
        )}
        
        {/* Main Floating Trigger Button */}
        <button
          id="whatsapp-main-floating-trigger"
          onClick={() => setWhatsappAgentOpen(!whatsappAgentOpen)}
          className="p-4 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-700 hover:scale-105 transition-all flex items-center justify-center relative cursor-pointer"
          aria-label="Toggle WhatsApp Help"
        >
          <MessageSquareCode className="w-6 h-6" />
          <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-rose-500 border-2 border-white animate-ping" />
        </button>
      </div>
    </section>
  );
}
