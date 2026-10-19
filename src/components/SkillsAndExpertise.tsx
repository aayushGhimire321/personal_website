import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface CircularRingProps {
  level: number;
  isDark: boolean;
  delayIndex: number;
  gradientId: string;
}

const CircularSkillRing: React.FC<CircularRingProps> = ({ level, isDark, delayIndex, gradientId }) => {
  const radius = 23;
  const circumference = 2 * Math.PI * radius; // ~144.51

  return (
    <div className="relative shrink-0 w-14 h-14 flex items-center justify-center select-none">
      <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 60 60">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={level >= 90 ? "#f59e0b" : "#3b82f6"} />
            <stop offset="100%" stopColor={level >= 90 ? "#fde047" : "#60a5fa"} />
          </linearGradient>
        </defs>
        
        {/* Background Track Circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          className={isDark ? "stroke-neutral-800/90" : "stroke-slate-200"}
          strokeWidth="4.5"
          fill="transparent"
        />

        {/* Animated Progress Circle with framer-motion */}
        <motion.circle
          cx="30"
          cy="30"
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="4.5"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (level / 100) * circumference }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: delayIndex * 0.08 }}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>

      {/* Numerical Percentage Inside Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-[11px] font-mono font-bold tabular-nums tracking-tight ${
          level >= 90
            ? isDark ? 'text-amber-400' : 'text-amber-700'
            : isDark ? 'text-blue-400' : 'text-blue-700'
        }`}>
          {level}%
        </span>
      </div>
    </div>
  );
};

export const SkillsAndExpertise: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    const filteredItems = category.items.filter(item => {
      const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchTag = item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchName || matchTag;
    });
    return { ...category, items: filteredItems };
  }).filter(cat => cat.items.length > 0);

  return (
    <section 
      id="skills" 
      aria-labelledby="skills-heading"
      className={`py-24 border-b transition-colors duration-200 ${
        isDark ? 'border-neutral-800/80 bg-neutral-950/40' : 'border-slate-200 bg-slate-50/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`text-xs font-semibold tracking-wider uppercase mb-2 flex items-center gap-1.5 ${
              isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('skills.kicker')}</span>
            </div>
            <h2 
              id="skills-heading"
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-neutral-100' : 'text-slate-950'
              }`}
            >
              {t('skills.title')}
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              {t('skills.description')}
            </p>
          </div>

          {/* Interactive Skill Quick Search (Hidden on Print) */}
          <div className="relative w-full md:w-72 print:hidden shrink-0">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-neutral-500' : 'text-slate-400'
            }`} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('skills.searchPlaceholder')}
              className={`w-full pl-10 pr-4 py-2 text-xs border rounded-xl transition-colors focus:outline-none ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:border-amber-400' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-600 shadow-2xs'
              }`}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs cursor-pointer ${
                  isDark ? 'text-neutral-500 hover:text-neutral-300' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4">
          {filteredCategories.map((cat, idx) => {
            const avgLevel = Math.round(
              cat.items.reduce((acc, curr) => acc + curr.level, 0) / (cat.items.length || 1)
            );

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between space-y-6 transition-all break-inside-avoid page-break-inside-avoid print:p-4 print:space-y-3 ${
                  isDark 
                    ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700' 
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Pillar Header */}
                <div className="border-b pb-4" style={{ borderColor: isDark ? '#262626' : '#f1f5f9' }}>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
                      {cat.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                        isDark 
                          ? 'bg-amber-400/10 text-amber-300 border-amber-400/30' 
                          : 'bg-amber-50 text-amber-800 border-amber-300'
                      }`}>
                        Avg {avgLevel}%
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-neutral-500' : 'text-slate-400'}`}>
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                  <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                    {cat.description}
                  </p>
                </div>

                {/* Skills List with Interactive SVG Circular Progress Rings */}
                <div className="space-y-3.5">
                  {cat.items.map((skill, sIdx) => {
                    const gradientId = `ring-grad-${idx}-${sIdx}`;

                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.01, x: 2 }}
                        transition={{ duration: 0.15 }}
                        className={`p-3.5 rounded-xl border flex items-center gap-4 transition-colors ${
                          isDark 
                            ? 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-950' 
                            : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                        }`}
                      >
                        {/* Interactive SVG Circular Progress Ring */}
                        <CircularSkillRing 
                          level={skill.level}
                          isDark={isDark}
                          delayIndex={sIdx}
                          gradientId={gradientId}
                        />

                        {/* Skill Details */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs sm:text-sm font-bold truncate ${
                              isDark ? 'text-neutral-100' : 'text-slate-900'
                            }`}>
                              {skill.name}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold shrink-0 uppercase tracking-wider ${
                              skill.level >= 90
                                ? isDark 
                                  ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' 
                                  : 'bg-amber-100 text-amber-800 border border-amber-300'
                                : isDark 
                                  ? 'bg-neutral-800 text-neutral-300 border border-neutral-700' 
                                  : 'bg-slate-200 text-slate-800 border border-slate-300'
                            }`}>
                              {skill.level >= 90 ? 'Mastery' : 'Advanced'}
                            </span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-1">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                                  isDark 
                                    ? 'bg-neutral-900 text-neutral-400 border-neutral-800' 
                                    : 'bg-white text-slate-600 border-slate-200'
                                }`}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
