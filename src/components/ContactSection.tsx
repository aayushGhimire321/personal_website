import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Linkedin, 
  Instagram, 
  Facebook,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Brand Strategy & Growth',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const { isDark } = useTheme();
  const { t, isNepali } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setCopyFeedback(label);
    setTimeout(() => {
      setCopiedKey(null);
      setCopyFeedback(null);
    }, 2200);
  };

  return (
    <section id="contact" className={`py-24 border-b transition-colors duration-200 ${
      isDark ? 'border-neutral-800/80' : 'border-slate-200 bg-slate-50/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (5 cols): Contact Information & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
                isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
              }`}>
                {t('contact.kicker')}
              </div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-neutral-100' : 'text-slate-950'
              }`}>
                {t('contact.title')}
              </h2>
              <p className={`text-sm mt-3 leading-relaxed ${
                isDark ? 'text-neutral-400' : 'text-slate-600'
              }`}>
                {t('contact.description')}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2.5 rounded-lg shrink-0 ${isDark ? 'bg-neutral-800 text-amber-400' : 'bg-slate-100 text-amber-700'}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>Email Direct</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className={`text-sm font-semibold truncate block transition-colors ${
                      isDark ? 'text-neutral-200 hover:text-amber-400' : 'text-slate-900 hover:text-amber-700'
                    }`}>
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email', 'Email address')}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer print:hidden shrink-0 ${
                    copiedKey === 'email'
                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-sm'
                      : isDark 
                        ? 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border-neutral-700 hover:border-neutral-600' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border-slate-300 shadow-2xs'
                  }`}
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-semibold text-emerald-400">{isNepali ? 'प्रतिलिपि भयो!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-70" />
                      <span>{isNepali ? 'क्लिपबोर्डमा प्रतिलिपि' : 'Copy to Clipboard'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2.5 rounded-lg shrink-0 ${isDark ? 'bg-neutral-800 text-amber-400' : 'bg-slate-100 text-amber-700'}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>Mobile & WhatsApp</div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <a href={`tel:${PERSONAL_INFO.phone.replace(/\\s+/g, '')}`} className={`text-sm font-semibold transition-colors ${
                        isDark ? 'text-neutral-200 hover:text-amber-400' : 'text-slate-900 hover:text-amber-700'
                      }`}>
                        {PERSONAL_INFO.phone}
                      </a>
                      <span className={`text-xs ${isDark ? 'text-neutral-500' : 'text-slate-500'}`}>
                        ({PERSONAL_INFO.landline})
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone', 'Phone number')}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer print:hidden shrink-0 ${
                    copiedKey === 'phone'
                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-sm'
                      : isDark 
                        ? 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border-neutral-700 hover:border-neutral-600' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border-slate-300 shadow-2xs'
                  }`}
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedKey === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-semibold text-emerald-400">{isNepali ? 'प्रतिलिपि भयो!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-70" />
                      <span>{isNepali ? 'क्लिपबोर्डमा प्रतिलिपि' : 'Copy to Clipboard'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className={`p-2.5 rounded-lg ${isDark ? 'bg-neutral-800 text-amber-400' : 'bg-slate-100 text-amber-700'}`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>Current & Permanent Residence</div>
                  <div className={`text-xs font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.currentAddress}
                  </div>
                  <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                    Permanent: {PERSONAL_INFO.permanentAddress}
                  </div>
                </div>
              </div>

              {/* Live Accessible Copy Confirmation Toast */}
              {copyFeedback && (
                <div 
                  role="status" 
                  aria-live="polite"
                  className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 print:hidden ${
                    isDark 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>
                    {copyFeedback} {isNepali ? 'क्लिपबोर्डमा सुरक्षित गरियो।' : 'copied to clipboard successfully!'}
                  </span>
                </div>
              )}
            </div>

            {/* Social Channels */}
            <div className="pt-2 space-y-2">
              <div className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                Verified Social & Professional Handles
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    isDark 
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700' 
                      : 'bg-white border-slate-300 text-slate-800 hover:text-blue-700 shadow-2xs'
                  }`}
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                  linkedin.com/in/aayush-ghimire-209119217
                  <ArrowUpRight className="w-3 h-3 opacity-60 print:hidden" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Message Form / Print Summary */}
          <div className="lg:col-span-7">
            {/* Print-only clean summary block */}
            <div className="hidden print:block p-6 rounded-2xl border border-slate-300 bg-slate-50 space-y-3">
              <h3 className="text-base font-bold text-slate-950">
                Direct Inquiries & Consultation
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Available for mid-level marketing executive positions, brand growth consulting, SEO strategy, and freelance performance campaigns.
              </p>
              <div className="pt-2 text-xs font-mono space-y-1 text-slate-800">
                <div>Primary Email: {PERSONAL_INFO.email}</div>
                <div>Primary Mobile: {PERSONAL_INFO.phone}</div>
                <div>Location: {PERSONAL_INFO.currentAddress}</div>
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl border transition-all print:hidden ${
              isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
                Send a Message or Project Inquiry
              </h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                Fill in the details below and I'll respond within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className={`text-base font-bold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
                    Message Received Successfully!
                  </h4>
                  <p className={`text-xs max-w-md mx-auto leading-relaxed ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
                    Thank you, <strong className="font-bold">{formData.name}</strong>. Your inquiry regarding <strong className={isDark ? 'text-amber-400' : 'text-amber-700'}>{formData.service}</strong> has been logged. I will reach out to you via <strong className="font-bold">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Brand Strategy & Growth', message: '' });
                    }}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 text-xs border rounded-lg focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-neutral-950 border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:border-amber-400' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-600'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs border rounded-lg focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-neutral-950 border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:border-amber-400' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 98..."
                        className={`w-full px-3.5 py-2.5 text-xs border rounded-lg focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-neutral-950 border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:border-amber-400' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-600'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                        Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs border rounded-lg focus:outline-none transition-colors ${
                          isDark 
                            ? 'bg-neutral-950 border-neutral-700 text-neutral-100 focus:border-amber-400' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-amber-600'
                        }`}
                      >
                        <option value="Brand Strategy & Growth">Brand Strategy & Positioning</option>
                        <option value="Technical SEO & Audit">Technical SEO & Content Strategy</option>
                        <option value="Paid Performance Ads (Meta/Google)">Paid Performance Ads (Meta / Google)</option>
                        <option value="B2B Lead Generation & Outreach">B2B Lead Generation & Outreach</option>
                        <option value="Full-Time / Fractional Marketing Role">Full-Time / Strategic Marketing Role</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                      Message / Project Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your business goals, target timelines, or project requirements..."
                      className={`w-full px-3.5 py-2.5 text-xs border rounded-lg focus:outline-none transition-colors resize-none ${
                        isDark 
                          ? 'bg-neutral-950 border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:border-amber-400' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                      isDark 
                        ? 'text-neutral-950 bg-amber-400 hover:bg-amber-300' 
                        : 'text-white bg-slate-900 hover:bg-slate-800'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    {t('contact.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

