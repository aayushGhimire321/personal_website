import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { WORK_EXPERIENCES, WorkExperience } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Current' | 'Leadership' | 'Brand & BD'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(WORK_EXPERIENCES[0].id);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (filter === 'Current') return exp.type === 'current';
    if (filter === 'Leadership') return exp.category === 'Leadership';
    if (filter === 'Brand & BD') return exp.category === 'Brand' || exp.category === 'Business Development';
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className={`py-24 border-b transition-colors duration-200 ${
      isDark ? 'border-neutral-800/80' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
              isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
            }`}>
              {t('exp.kicker')}
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-neutral-100' : 'text-slate-950'
            }`}>
              {t('exp.title')}
            </h2>
            <p className={`text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              {t('exp.description')}
            </p>
          </div>

          {/* Filter Bar (Hidden on Print) */}
          <div className={`flex items-center gap-1 p-1 border rounded-xl overflow-x-auto no-scrollbar print:hidden ${
            isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-200/70 border-slate-300'
          }`}>
            {(['All', 'Current', 'Leadership', 'Brand & BD'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filter === cat
                    ? isDark
                      ? 'bg-neutral-800 text-amber-400 font-semibold shadow-xs'
                      : 'bg-white text-slate-900 font-bold shadow-xs'
                    : isDark
                      ? 'text-neutral-400 hover:text-neutral-200'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat} Roles
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4 print:space-y-3">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden break-inside-avoid page-break-inside-avoid ${
                  isExpanded
                    ? isDark
                      ? 'bg-neutral-900/90 border-neutral-700 shadow-lg'
                      : 'bg-white border-slate-300 shadow-md'
                    : isDark
                      ? 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full text-left p-5 sm:p-6 print:p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 font-mono text-xs font-bold print:w-7 print:h-7 print:text-[10px] ${
                      isDark 
                        ? 'bg-neutral-800 border-neutral-700 text-amber-400' 
                        : 'bg-slate-100 border-slate-200 text-amber-700'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`text-base sm:text-lg font-bold print:text-sm ${
                          isDark ? 'text-neutral-100' : 'text-slate-950'
                        }`}>
                          {exp.role}
                        </h3>
                        {exp.type === 'current' && (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                            isDark 
                              ? 'bg-amber-400/10 text-amber-300 border-amber-400/30' 
                              : 'bg-amber-100 text-amber-800 border-amber-300'
                          }`}>
                            Present
                          </span>
                        )}
                      </div>

                      {/* Clean Unboxed Metadata */}
                      <div className={`flex flex-wrap items-center gap-2 text-xs mt-1 ${
                        isDark ? 'text-neutral-400' : 'text-slate-600'
                      }`}>
                        <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>{exp.company}</span>
                        <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-500" />
                          {exp.location}
                        </span>
                        <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3 h-3 text-amber-500" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 print:border-none ${
                    isDark ? 'border-neutral-800' : 'border-slate-100'
                  }`}>
                    <span className={`text-xs font-mono font-medium ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
                      {exp.category}
                    </span>
                    <div className={`p-1 rounded-lg print:hidden ${isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-slate-100 text-slate-700'}`}>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Detailed Responsibilities & Skills (Always visible on print for full resume value) */}
                <div className={`px-5 sm:px-6 pb-6 pt-2 border-t space-y-4 text-xs sm:text-sm print:block print:p-3 print:pt-1 ${
                  isExpanded ? 'block' : 'hidden print:block'
                } ${
                  isDark ? 'border-neutral-800/80 text-neutral-300' : 'border-slate-100 text-slate-700 bg-slate-50/50'
                }`}>
                  <div className="space-y-2 print:space-y-1">
                    <div className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                      isDark ? 'text-neutral-400' : 'text-slate-600'
                    }`}>
                      Key Responsibilities & Deliverables
                    </div>
                    <ul className="space-y-2 print:space-y-1">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 print:w-3.5 print:h-3.5" />
                          <span className="leading-relaxed print:text-xs">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competencies */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 print:pt-1">
                    <span className={`text-xs font-mono mr-1 ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>Skills:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-1 text-xs border rounded-md font-medium print:text-[10px] print:px-1.5 print:py-0.5 ${
                          isDark
                            ? 'bg-neutral-950/80 text-neutral-300 border-neutral-800'
                            : 'bg-white text-slate-800 border-slate-200 shadow-2xs'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

