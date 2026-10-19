import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATION_DATA, CERTIFICATIONS, LANGUAGES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyMarkdownResume = () => {
    const md = `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.title}**
Address: ${PERSONAL_INFO.currentAddress}
Phone: ${PERSONAL_INFO.phone} / ${PERSONAL_INFO.landline}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}

---

## Career Summary
${PERSONAL_INFO.shortBio}

---

## Experience
${WORK_EXPERIENCES.map(w => `
### ${w.role} — ${w.company}
*${w.location} | ${w.period}*
${w.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

---

## Education
${EDUCATION_DATA.map(e => `
### ${e.degree}
*${e.institution} — ${e.university} (${e.year})*
Grade: ${e.grade}
${e.details}
`).join('\n')}

---

## Certifications
${CERTIFICATIONS.map(c => `- ${c.title} — ${c.issuer} (${c.date})`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div 
        className={`w-full max-w-4xl max-h-[92vh] border rounded-2xl flex flex-col shadow-2xl overflow-hidden print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black ${
          isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-300'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Top Control Bar (Hidden on Print) */}
        <div className={`flex items-center justify-between px-6 py-4 border-b print:hidden ${
          isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2">
            <h3 id="resume-title" className={`text-sm font-bold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
              Curriculum Vitae / Professional Resume
            </h3>
            <span className={`text-xs font-mono ${isDark ? 'text-neutral-500' : 'text-slate-500'}`}>
              (Aayush Ghimire)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyMarkdownResume}
              className={`px-3 py-1.5 text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' 
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold bg-amber-400 text-neutral-950 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ml-2 cursor-pointer ${
                isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              }`}
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className={`flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:bg-white print:text-black print:p-8 ${
          isDark ? 'bg-neutral-900 text-neutral-200' : 'bg-white text-slate-800'
        }`}>
          {/* Resume Header */}
          <div className={`border-b pb-6 space-y-3 ${
            isDark ? 'border-neutral-800' : 'border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-neutral-100' : 'text-slate-950'} print:text-black`}>
                {PERSONAL_INFO.name}
              </h1>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-amber-400' : 'text-amber-700'} print:text-neutral-700`}>
                {PERSONAL_INFO.title}
              </span>
            </div>

            <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            } print:text-neutral-600`}>
              <span>{PERSONAL_INFO.currentAddress}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.email}</span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed pt-2 ${
              isDark ? 'text-neutral-300' : 'text-slate-700'
            } print:text-neutral-700`}>
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1 flex items-center gap-2 ${
              isDark ? 'text-amber-400 border-neutral-800' : 'text-amber-700 border-slate-200'
            } print:text-neutral-900 print:border-neutral-300`}>
              <Briefcase className="w-3.5 h-3.5" />
              Work Experience (4 Years, 8 Months)
            </h2>

            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className={`font-bold text-sm ${isDark ? 'text-neutral-100' : 'text-slate-950'} print:text-black`}>
                        {exp.role}
                      </strong>
                      <span className={`ml-2 ${isDark ? 'text-neutral-400' : 'text-slate-600'} print:text-neutral-600`}>
                        — {exp.company} ({exp.location})
                      </span>
                    </div>
                    <span className={`font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-500'} print:text-neutral-600`}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`space-y-1 text-xs list-disc list-inside ${
                    isDark ? 'text-neutral-300' : 'text-slate-700'
                  } print:text-neutral-700`}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 pt-2">
            <h2 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1 flex items-center gap-2 ${
              isDark ? 'text-amber-400 border-neutral-800' : 'text-amber-700 border-slate-200'
            } print:text-neutral-900 print:border-neutral-300`}>
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h2>

            <div className="space-y-4 text-xs">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className={`font-semibold text-xs ${isDark ? 'text-neutral-100' : 'text-slate-950'} print:text-black`}>
                      {edu.degree}
                    </strong>
                    <span className={`font-mono font-bold ${isDark ? 'text-amber-400' : 'text-amber-700'} print:text-neutral-700`}>
                      {edu.grade}
                    </span>
                  </div>
                  <div className={`${isDark ? 'text-neutral-400' : 'text-slate-600'} print:text-neutral-600`}>
                    {edu.institution} · {edu.university} ({edu.year})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div className="space-y-3 pt-2">
            <h2 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1 flex items-center gap-2 ${
              isDark ? 'text-amber-400 border-neutral-800' : 'text-amber-700 border-slate-200'
            } print:text-neutral-900 print:border-neutral-300`}>
              <Award className="w-3.5 h-3.5" />
              Certifications & Skills Summary
            </h2>
            <div className={`text-xs ${isDark ? 'text-neutral-300' : 'text-slate-700'} print:text-neutral-700`}>
              <div className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'} print:text-black`}>
                The Fundamentals of Digital Marketing (3 Months) — Chautari Digitals (May, 2024)
              </div>
              <p className={`text-[11px] mt-1 ${isDark ? 'text-neutral-400' : 'text-slate-600'} print:text-neutral-600`}>
                Skills: SEO · Meta Ads · Google Ads · Content Strategy · Lead Generation · UI/UX Design (Figma) · Campaign ROI Tracking · Cold Outreach · CRM Software
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t print:hidden flex items-center justify-between text-xs ${
          isDark ? 'border-neutral-800 bg-neutral-950/80 text-neutral-400' : 'border-slate-200 bg-slate-50 text-slate-600'
        }`}>
          <span>Available for mid-level marketing executive and strategic consulting roles.</span>
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

