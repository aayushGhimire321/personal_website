import React from 'react';
import { GraduationCap, Award, Globe2 } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS, LANGUAGES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const EducationCertificates: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-24 border-b transition-colors duration-200 ${
      isDark ? 'border-neutral-800/80' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (7 cols): Education & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
                isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
              }`}>
                Academic Background & Qualifications
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-neutral-100' : 'text-slate-950'
              }`}>
                Education & Credentials
              </h2>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-5 sm:p-6 rounded-2xl border space-y-2 transition-all ${
                    isDark 
                      ? 'bg-neutral-900/60 border-neutral-800' 
                      : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className={`text-base font-bold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
                      {edu.degree}
                    </h3>
                    <span className={`text-xs font-mono font-bold ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                      {edu.grade}
                    </span>
                  </div>

                  <div className={`text-xs font-medium ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                    {edu.institution}
                  </div>

                  <div className={`flex flex-wrap items-center gap-2 text-xs ${
                    isDark ? 'text-neutral-400' : 'text-slate-600'
                  }`}>
                    <span>{edu.university}</span>
                    <span aria-hidden="true" className={isDark ? 'text-neutral-700' : 'text-slate-300'}>·</span>
                    <span className="font-mono">{edu.year}</span>
                  </div>

                  <p className={`text-xs pt-1 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pt-4">
              <h3 className={`text-sm font-bold mb-3 flex items-center gap-2 ${
                isDark ? 'text-neutral-200' : 'text-slate-900'
              }`}>
                <Award className="w-4 h-4 text-amber-500" />
                Industry Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isDark ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-slate-200 shadow-2xs'
                  }`}>
                    <div>
                      <div className={`text-sm font-semibold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>{cert.title}</div>
                      <div className={`text-xs ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>{cert.issuer} · {cert.date}</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {cert.skills.map((s, i) => (
                        <span key={i} className={`text-[11px] px-2 py-0.5 rounded border font-mono font-medium ${
                          isDark 
                            ? 'bg-neutral-950 text-neutral-300 border-neutral-800' 
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Languages & Career Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
                isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
              }`}>
                Communication & Readiness
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-neutral-100' : 'text-slate-950'
              }`}>
                Languages & Status
              </h2>
            </div>

            {/* Languages */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className={`flex items-center gap-2 text-sm font-bold ${
                isDark ? 'text-neutral-200' : 'text-slate-950'
              }`}>
                <Globe2 className="w-4 h-4 text-amber-500" />
                Languages Spoken
              </div>

              <div className="space-y-3">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border space-y-1 ${
                    isDark ? 'bg-neutral-950/60 border-neutral-800/80' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-bold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>{lang.name}</span>
                      <span className={`font-mono text-[11px] font-semibold ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>{lang.level}</span>
                    </div>
                    <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Preferences */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className={`text-sm font-bold ${isDark ? 'text-neutral-200' : 'text-slate-950'}`}>
                Job & Engagement Preferences
              </div>

              <div className="space-y-3 text-xs">
                <div className={`flex items-center justify-between p-3 rounded-xl border ${
                  isDark ? 'bg-neutral-950/60 border-neutral-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>Target Level</span>
                  <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>Mid-Level Executive / Manager</span>
                </div>
                <div className={`flex items-center justify-between p-3 rounded-xl border ${
                  isDark ? 'bg-neutral-950/60 border-neutral-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>Available For</span>
                  <span className={`font-semibold ${isDark ? 'text-amber-300' : 'text-amber-800'}`}>Freelance, Part-Time & Strategic Roles</span>
                </div>
                <div className={`flex items-center justify-between p-3 rounded-xl border ${
                  isDark ? 'bg-neutral-950/60 border-neutral-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>Location Base</span>
                  <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>Kathmandu Valley / Remote Global</span>
                </div>
                <div className={`flex items-center justify-between p-3 rounded-xl border ${
                  isDark ? 'bg-neutral-950/60 border-neutral-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>Mobility</span>
                  <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>Two-Wheeler Licensed & Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

