import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, X, Layers, ExternalLink } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const CaseStudies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const categories = ['All', 'Brand Strategy', 'Campus & Growth', 'Paid Ads & SEO'];

  const filteredCases = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === selectedCategory);

  return (
    <section id="case-studies" className={`py-24 border-b transition-colors duration-200 ${
      isDark ? 'border-neutral-800/80' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
              isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
            }`}>
              {t('cases.kicker')}
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-neutral-100' : 'text-slate-950'
            }`}>
              {t('cases.title')}
            </h2>
            <p className={`text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              {t('cases.description')}
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Control - Hidden on Print) */}
          <div className={`flex items-center gap-1 p-1 border rounded-xl overflow-x-auto no-scrollbar print:hidden ${
            isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-200/70 border-slate-300'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-neutral-800 text-amber-400 font-semibold shadow-xs'
                      : 'bg-white text-slate-900 font-bold shadow-xs'
                    : isDark
                      ? 'text-neutral-400 hover:text-neutral-200'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-6">
          {filteredCases.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveModalCase(item)}
              className={`group cursor-pointer rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden break-inside-avoid page-break-inside-avoid ${
                isDark 
                  ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:shadow-xl' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden print:aspect-[16/9]">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent print:hidden" />
                
                {/* Clean Unboxed Category & Client Metadata */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 print:relative print:top-0 print:left-0 print:p-2 print:bg-slate-100 print:text-black">
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[11px] font-medium text-amber-300 border border-white/10 print:bg-transparent print:text-slate-900 print:border-none print:font-bold">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm print:bg-transparent print:text-slate-600">
                    {item.period}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-xs font-medium text-white print:hidden">
                  {item.client}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 print:p-4 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 hidden print:block mb-1">
                    {item.client}
                  </div>
                  <h3 className={`text-lg font-bold transition-colors leading-snug print:text-base ${
                    isDark ? 'text-neutral-100 group-hover:text-amber-400' : 'text-slate-900 group-hover:text-amber-700'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed print:line-clamp-none print:text-xs ${
                    isDark ? 'text-neutral-400' : 'text-slate-600'
                  }`}>
                    {item.summary}
                  </p>
                </div>

                {/* Metrics Preview */}
                <div className={`pt-4 border-t grid grid-cols-3 gap-2 text-center print:pt-2 ${
                  isDark ? 'border-neutral-800/80' : 'border-slate-100'
                }`}>
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className={`p-2 rounded-lg border ${
                      isDark ? 'bg-neutral-950/50 border-neutral-800/50' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className={`text-xs font-extrabold font-mono tabular-nums truncate ${
                        isDark ? 'text-amber-400' : 'text-amber-700'
                      }`}>
                        {m.value}
                      </div>
                      <div className={`text-[10px] truncate ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`flex items-center justify-between pt-1 text-xs font-semibold group-hover:translate-x-1 transition-transform print:hidden ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>
                  <span>View Full Strategy Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-fade-in">
          <div 
            className={`w-full max-w-3xl max-h-[90vh] border rounded-2xl flex flex-col shadow-2xl overflow-hidden ${
              isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200 text-slate-900'
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
          >
            {/* Modal Header */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2 text-xs">
                <span className={`font-semibold ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                  {activeModalCase.category}
                </span>
                <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-400'}>·</span>
                <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>{activeModalCase.client}</span>
              </div>
              <button
                onClick={() => setActiveModalCase(null)}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDark ? 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                }`}
                aria-label="Close case study details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] w-full bg-neutral-950 border border-neutral-800">
                <img
                  src={activeModalCase.heroImage}
                  alt={activeModalCase.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 id="case-modal-title" className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-neutral-100' : 'text-slate-950'
                }`}>
                  {activeModalCase.title}
                </h3>
                <p className={`text-sm mt-2 leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-slate-700'
                }`}>
                  {activeModalCase.summary}
                </p>
              </div>

              {/* Problem / Challenge */}
              <div className={`p-4 rounded-xl border space-y-1.5 ${
                isDark ? 'bg-neutral-950/60 border-neutral-800/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                  isDark ? 'text-neutral-300' : 'text-slate-800'
                }`}>
                  The Market Challenge
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-neutral-400' : 'text-slate-600'
                }`}>
                  {activeModalCase.problem}
                </p>
              </div>

              {/* Strategic Roadmap */}
              <div className="space-y-3">
                <h4 className={`text-sm font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>
                  Execution & Growth Strategy
                </h4>
                <div className="space-y-2">
                  {activeModalCase.strategy.map((strat, i) => (
                    <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border text-xs sm:text-sm ${
                      isDark ? 'bg-neutral-950/40 border-neutral-800/60 text-neutral-300' : 'bg-slate-50/80 border-slate-200 text-slate-700'
                    }`}>
                      <span className={`font-mono font-bold shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span>{strat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className={`text-sm font-semibold ${isDark ? 'text-neutral-200' : 'text-slate-900'}`}>
                  Core Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalCase.deliverables.map((deliv, i) => (
                    <div key={i} className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs ${
                      isDark ? 'bg-neutral-950/60 border-neutral-800 text-neutral-300' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Metrics */}
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-amber-400/5 border-amber-400/20' : 'bg-amber-50/80 border-amber-200'
              }`}>
                <h4 className={`text-xs font-semibold uppercase tracking-wider font-mono mb-3 ${
                  isDark ? 'text-amber-300' : 'text-amber-900'
                }`}>
                  Verified Campaign Outcomes
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {activeModalCase.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className={`text-lg sm:text-xl font-extrabold font-mono ${
                        isDark ? 'text-amber-400' : 'text-amber-700'
                      }`}>
                        {m.value}
                      </div>
                      <div className={`text-xs ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`px-6 py-4 border-t flex items-center justify-between ${
              isDark ? 'border-neutral-800 bg-neutral-950/80 text-neutral-400' : 'border-slate-200 bg-slate-50 text-slate-600'
            }`}>
              <span className="text-xs">Led by Aayush Ghimire</span>
              <button
                onClick={() => setActiveModalCase(null)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                }`}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

