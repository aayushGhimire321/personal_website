import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Compass, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Wrench, 
  FileCheck, 
  Layers, 
  Search, 
  Zap, 
  BarChart3,
  Calendar,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GROWTH_ROADMAP_MILESTONES, RoadmapMilestone } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const GrowthRoadmap: React.FC = () => {
  const { isDark } = useTheme();
  const { t, isNepali } = useLanguage();
  
  const [activeFilter, setActiveFilter] = useState<'all' | 'seo' | 'paid'>('all');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(GROWTH_ROADMAP_MILESTONES[0].id);
  const [expandedPreviewId, setExpandedPreviewId] = useState<string | null>(GROWTH_ROADMAP_MILESTONES[0].id);

  // Filter milestones based on selected focus track
  const filteredMilestones = GROWTH_ROADMAP_MILESTONES.filter(m => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'seo') return m.tags.includes('seo');
    if (activeFilter === 'paid') return m.tags.includes('paid');
    return true;
  });

  const selectedMilestone = GROWTH_ROADMAP_MILESTONES.find(m => m.id === selectedMilestoneId) || GROWTH_ROADMAP_MILESTONES[0];
  const currentIndex = filteredMilestones.findIndex(m => m.id === selectedMilestoneId);

  const handleNext = () => {
    if (currentIndex < filteredMilestones.length - 1) {
      const next = filteredMilestones[currentIndex + 1];
      setSelectedMilestoneId(next.id);
      setExpandedPreviewId(next.id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prev = filteredMilestones[currentIndex - 1];
      setSelectedMilestoneId(prev.id);
      setExpandedPreviewId(prev.id);
    }
  };

  return (
    <section 
      id="roadmap" 
      aria-label="Client Growth Roadmap"
      className={`py-24 border-t transition-colors duration-200 relative ${
        isDark 
          ? 'bg-neutral-950/70 border-neutral-900 text-neutral-100' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold tracking-wider uppercase text-amber-500">
              {t('roadmap.kicker')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            {t('roadmap.title')}
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-neutral-400' : 'text-slate-600'
          }`}>
            {t('roadmap.description')}
          </p>

          {/* Interactive Track Selector / Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 rounded-xl border max-w-fit transition-colors">
            <button
              onClick={() => {
                setActiveFilter('all');
                if (!GROWTH_ROADMAP_MILESTONES.some(m => m.id === selectedMilestoneId)) {
                  setSelectedMilestoneId(GROWTH_ROADMAP_MILESTONES[0].id);
                }
              }}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? isDark
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-white font-bold shadow-sm'
                  : isDark
                    ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('roadmap.allPhases')}
            </button>

            <button
              onClick={() => {
                setActiveFilter('seo');
                const firstSeo = GROWTH_ROADMAP_MILESTONES.find(m => m.tags.includes('seo'));
                if (firstSeo) {
                  setSelectedMilestoneId(firstSeo.id);
                  setExpandedPreviewId(firstSeo.id);
                }
              }}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === 'seo'
                  ? isDark
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-white font-bold shadow-sm'
                  : isDark
                    ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('roadmap.seoFocus')}
            </button>

            <button
              onClick={() => {
                setActiveFilter('paid');
                const firstPaid = GROWTH_ROADMAP_MILESTONES.find(m => m.tags.includes('paid'));
                if (firstPaid) {
                  setSelectedMilestoneId(firstPaid.id);
                  setExpandedPreviewId(firstPaid.id);
                }
              }}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === 'paid'
                  ? isDark
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-white font-bold shadow-sm'
                  : isDark
                    ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('roadmap.paidFocus')}
            </button>
          </div>
        </div>

        {/* Desktop & Mobile Dual Layout: Timeline on Left, Deep Inspection Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Vertical Timeline Track (Left Column: 7 Cols on Desktop) */}
          <div className="lg:col-span-7 relative">
            {/* The Vertical Guide Line */}
            <div 
              aria-hidden="true" 
              className={`absolute top-4 bottom-4 left-6 sm:left-7 w-0.5 pointer-events-none transition-colors ${
                isDark ? 'bg-neutral-800' : 'bg-slate-200'
              }`}
            />

            {/* List of Vertical Milestones */}
            <div className="space-y-6 sm:space-y-8 relative">
              {filteredMilestones.map((milestone, idx) => {
                const isSelected = milestone.id === selectedMilestoneId;
                const phaseLabel = isNepali ? milestone.phaseNe : milestone.phase;
                const timelineLabel = isNepali ? milestone.timelineNe : milestone.timeline;
                const stageLabel = isNepali ? milestone.stageNameNe : milestone.stageName;
                const titleLabel = isNepali ? milestone.titleNe : milestone.title;
                const summaryLabel = isNepali ? milestone.summaryNe : milestone.summary;

                return (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="relative flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Node Marker on the Line */}
                    <button
                      onClick={() => {
                        setSelectedMilestoneId(milestone.id);
                        setExpandedPreviewId(milestone.id);
                      }}
                      aria-label={`Select ${phaseLabel}: ${titleLabel}`}
                      className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 border transition-all cursor-pointer ${
                        isSelected
                          ? isDark
                            ? 'bg-amber-400 text-neutral-950 border-amber-300 ring-4 ring-amber-400/20 shadow-lg'
                            : 'bg-slate-900 text-white border-slate-700 ring-4 ring-slate-900/10 shadow-lg'
                          : isDark
                            ? 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-amber-400/60 hover:text-amber-300'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-amber-500 hover:text-slate-900 shadow-2xs'
                      }`}
                    >
                      <span>{milestone.stepNumber}</span>
                      <span className="text-[9px] font-sans font-medium uppercase tracking-tighter opacity-80">
                        {isNepali ? 'चरण' : 'Step'}
                      </span>
                    </button>

                    {/* Milestone Card */}
                    <div 
                      onClick={() => {
                        setSelectedMilestoneId(milestone.id);
                        setExpandedPreviewId(milestone.id);
                      }}
                      className={`flex-1 rounded-2xl p-5 sm:p-6 border transition-all cursor-pointer break-inside-avoid ${
                        isSelected
                          ? isDark
                            ? 'bg-neutral-900/90 border-amber-400/50 shadow-xl'
                            : 'bg-slate-50 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                          : isDark
                            ? 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/70 hover:border-neutral-700'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      {/* Quiet Unboxed Metadata with · separator */}
                      <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                        <span className={`font-semibold ${isSelected ? 'text-amber-500' : isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
                          {phaseLabel}
                        </span>
                        <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
                        <span className={`font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
                          {timelineLabel}
                        </span>
                        <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
                        <span className={`font-medium ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>
                          {stageLabel}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-2.5 ${
                        isSelected 
                          ? isDark ? 'text-white' : 'text-slate-950'
                          : isDark ? 'text-neutral-200' : 'text-slate-800'
                      }`}>
                        {titleLabel}
                      </h3>

                      {/* Summary */}
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDark ? 'text-neutral-400' : 'text-slate-600'
                      }`}>
                        {summaryLabel}
                      </p>

                      {/* Quick Snapshot KPIs strip */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-dashed transition-colors"
                        style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}
                      >
                        {milestone.targetKpis.slice(0, 2).map((kpi, kIdx) => (
                          <div key={kIdx} className="space-y-0.5">
                            <span className="block text-[11px] text-neutral-400 truncate">
                              {isNepali ? kpi.labelNe : kpi.label}
                            </span>
                            <span className="block text-sm font-bold font-mono text-amber-500">
                              {kpi.value}
                            </span>
                          </div>
                        ))}

                        <div className="hidden sm:block space-y-0.5">
                          <span className="block text-[11px] text-neutral-400 truncate">
                            {isNepali ? 'डेलिभरेबल' : 'Deliverables'}
                          </span>
                          <span className={`block text-xs font-medium truncate ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
                            {milestone.deliverables.length} {isNepali ? 'मुख्य नतिजाहरू' : 'Verified Items'}
                          </span>
                        </div>
                      </div>

                      {/* Card Bottom CTA indicator */}
                      <div className="mt-4 pt-3 flex items-center justify-between text-xs font-semibold">
                        <span className={`flex items-center gap-1.5 transition-colors ${
                          isSelected ? 'text-amber-500' : isDark ? 'text-neutral-400 group-hover:text-amber-400' : 'text-slate-500 group-hover:text-amber-600'
                        }`}>
                          <span>{t('roadmap.viewDetails')}</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>

                        {isSelected && (
                          <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-mono">
                            <Check className="w-3.5 h-3.5" />
                            <span>{isNepali ? 'सक्रिय छ' : 'Active View'}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Deep Inspection Panel & Client Walkthrough (Right Column: 5 Cols on Desktop) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border p-6 sm:p-7 shadow-xl break-inside-avoid ${
                  isDark
                    ? 'bg-neutral-900 border-neutral-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                {/* Header Tag with Step Indicator */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-800/60">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-500">
                      {isNepali ? selectedMilestone.phaseNe : selectedMilestone.phase} · {isNepali ? selectedMilestone.timelineNe : selectedMilestone.timeline}
                    </span>
                    <h4 className="text-xl font-bold tracking-tight">
                      {isNepali ? selectedMilestone.titleNe : selectedMilestone.title}
                    </h4>
                  </div>

                  <div className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold shrink-0 ${
                    isDark 
                      ? 'bg-neutral-950 border-neutral-700 text-amber-400' 
                      : 'bg-slate-100 border-slate-300 text-slate-800'
                  }`}>
                    {selectedMilestone.stepNumber} / 06
                  </div>
                </div>

                {/* Strategic Objectives */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    {isNepali ? 'रणनीतिक उद्देश्यहरू' : 'Core Strategic Objectives'}
                  </span>
                  <ul className="space-y-2.5">
                    {selectedMilestone.objectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-neutral-300' : 'text-slate-700'}>
                          {isNepali ? obj.ne : obj.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Deliverables Matrix */}
                <div className="space-y-3 mb-6 pt-5 border-t border-neutral-800/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    {t('roadmap.deliverables')}
                  </span>
                  <div className="space-y-2">
                    {selectedMilestone.deliverables.map((del, dIdx) => (
                      <div 
                        key={dIdx} 
                        className={`p-3 rounded-xl border flex items-center gap-3 text-xs sm:text-sm font-medium ${
                          isDark 
                            ? 'bg-neutral-950/60 border-neutral-800/80 text-neutral-200' 
                            : 'bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <FileCheck className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="leading-snug">
                          {isNepali ? del.ne : del.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target KPI Metrics Benchmarks */}
                <div className="space-y-3 mb-6 pt-5 border-t border-neutral-800/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    {t('roadmap.kpiTargets')}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {selectedMilestone.targetKpis.map((kpi, kIdx) => (
                      <div 
                        key={kIdx} 
                        className={`p-3 rounded-xl border space-y-1 ${
                          isDark 
                            ? 'bg-neutral-950/60 border-neutral-800/80' 
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="text-[11px] text-neutral-400 block truncate">
                          {isNepali ? kpi.labelNe : kpi.label}
                        </span>
                        <span className="text-base font-extrabold font-mono text-amber-500 block">
                          {kpi.value}
                        </span>
                        <span className="text-[10px] leading-tight text-neutral-500 block line-clamp-2">
                          {isNepali ? kpi.contextNe : kpi.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Diagnostic Stack */}
                <div className="space-y-2.5 mb-6 pt-5 border-t border-neutral-800/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    {t('roadmap.techStack')}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
                    {selectedMilestone.toolsUsed.map((tool, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className={`px-2 py-1 rounded-md text-[11px] font-mono ${
                          isDark ? 'bg-neutral-800/80 text-neutral-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {tool}
                        </span>
                        {tIdx < selectedMilestone.toolsUsed.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-500">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Client Input Required & Step Navigation */}
                <div className={`p-4 rounded-xl border mb-6 ${
                  isDark ? 'bg-amber-400/5 border-amber-400/20' : 'bg-amber-50/80 border-amber-200'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Wrench className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-xs font-bold uppercase text-amber-500 tracking-wide">
                      {t('roadmap.clientAction')}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
                    {isNepali ? selectedMilestone.clientActionItem.ne : selectedMilestone.clientActionItem.en}
                  </p>
                </div>

                {/* Stepper Navigation Buttons */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-800/60">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                      isDark
                        ? 'bg-neutral-950 hover:bg-neutral-800 text-neutral-300 border-neutral-800'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>{t('roadmap.prevPhase')}</span>
                  </button>

                  <a
                    href="#contact"
                    className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap ${
                      isDark
                        ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{t('roadmap.startJourney')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex === filteredMilestones.length - 1}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                      isDark
                        ? 'bg-neutral-950 hover:bg-neutral-800 text-neutral-300 border-neutral-800'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    <span>{t('roadmap.nextPhase')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
