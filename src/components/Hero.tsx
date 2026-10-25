import React from 'react';
import { 
  ArrowRight, 
  Sliders, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Facebook
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

import aayushPortrait from "../assets/images/aayush_potrait.jpg";



interface HeroProps {
  onOpenSeoStudio: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSeoStudio, onOpenResume }) => {
  const { isDark } = useTheme();
  const { t, isNepali } = useLanguage();

  return (
    <section id="about" className={`relative pt-32 pb-20 print:pt-4 print:pb-6 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'border-neutral-800/80' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center print:gap-8">
          {/* Left Column (7 cols): Typographic Content */}
          <div className="lg:col-span-7 space-y-6 print:space-y-4">
            {/* Editorial Kicker */}
            <div className={`flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase ${
              isDark ? 'text-amber-400' : 'text-amber-700 font-bold'
            }`}>
              <span>{t('hero.kicker')}</span>
              <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-400'}>/</span>
              <span>UI/UX Designer</span>
            </div>

            {/* Headline */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] print:text-3xl ${
              isDark ? 'text-neutral-100' : 'text-slate-950'
            }`} style={{ textWrap: 'balance' }}>
              {isNepali 
                ? `${t('hero.headline1')} — ${t('hero.headline2')}`
                : 'Driving measurable business growth through performance marketing & brand experiences.'}
            </h1>

            {/* Lead Narrative */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl print:text-sm ${
              isDark ? 'text-neutral-300' : 'text-slate-700'
            }`}>
              {t('hero.bio')}
            </p>

            {/* Quick Contact & Verification Metadata (Unboxed) */}
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pt-1 ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {PERSONAL_INFO.currentAddress}
              </span>
              <span aria-hidden="true" className={isDark ? 'text-neutral-700' : 'text-slate-300'}>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className={`flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-amber-400' : 'hover:text-amber-700 font-medium'
              }`}>
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                {PERSONAL_INFO.email}
              </a>
              <span aria-hidden="true" className={isDark ? 'text-neutral-700' : 'text-slate-300'}>·</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\\s+/g, '')}`} className={`flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-amber-400' : 'hover:text-amber-700 font-medium'
              }`}>
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* CTAs (Hidden on Print) */}
            <div className="flex flex-wrap items-center gap-3 pt-4 print:hidden">
              <a
                href="#case-studies"
                className={`px-5 py-3 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm ${
                  isDark
                    ? 'text-neutral-950 bg-amber-400 hover:bg-amber-300'
                    : 'text-white bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {t('cases.kicker')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className={`px-4 py-3 text-sm font-medium border rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                  isDark
                    ? 'text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border-neutral-800'
                    : 'text-slate-800 bg-white hover:bg-slate-50 border-slate-300 shadow-2xs'
                }`}
              >
                <FileDown className="w-4 h-4 text-amber-500" />
                {t('hero.ctaResume')}
              </button>

              <button
                onClick={onOpenSeoStudio}
                className={`px-4 py-3 text-sm font-semibold border rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                  isDark
                    ? 'text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border-amber-400/25'
                    : 'text-amber-900 bg-amber-50 hover:bg-amber-100 border-amber-300'
                }`}
                title="Launch Live SEO Management Suite"
              >
                <Sliders className="w-4 h-4 text-amber-500" />
                {t('nav.seoStudio')}
              </button>
            </div>

            {/* Social Verification Bar */}
            <div className={`pt-2 flex items-center gap-4 text-xs ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              <span className="font-medium">Profiles:</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors flex items-center gap-1 ${
                  isDark ? 'hover:text-amber-400' : 'hover:text-blue-600'
                }`}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className={isDark ? 'text-neutral-700' : 'text-slate-300'}>·</span>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors flex items-center gap-1 ${
                  isDark ? 'hover:text-amber-400' : 'hover:text-pink-600'
                }`}
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram</span>
              </a>
              <span aria-hidden="true" className={isDark ? 'text-neutral-700' : 'text-slate-300'}>·</span>
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors flex items-center gap-1 ${
                  isDark ? 'hover:text-amber-400' : 'hover:text-blue-700'
                }`}
                aria-label="Facebook profile"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): High-Resolution Visual Container */}
          <div className="lg:col-span-5 relative print:max-w-xs print:mx-auto">
            <div className={`relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border shadow-2xl transition-colors print:shadow-none print:border-slate-300 ${
              isDark ? 'border-neutral-800 bg-neutral-900' : 'border-slate-300 bg-white shadow-xl'
            }`}>
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={aayushPortrait}
                  alt="Aayush Ghimire - Digital Marketing Executive"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark 
                    ? 'from-neutral-950 via-neutral-950/20 to-transparent' 
                    : 'from-slate-950/80 via-slate-950/20 to-transparent'
                }`} />

                {/* Inset Badge Overlay */}
                <div className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md border text-xs shadow-lg ${
                  isDark 
                    ? 'bg-neutral-900/90 border-neutral-800 text-neutral-200' 
                    : 'bg-white/95 border-slate-200 text-slate-900'
                }`}>
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span>Aayush Ghimire</span>
                    <span className={`text-[11px] font-mono font-normal ${
                      isDark ? 'text-amber-400' : 'text-amber-700'
                    }`}>
                      Kathmandu, Nepal
                    </span>
                  </div>
                  <p className={`text-[11px] line-clamp-1 ${
                    isDark ? 'text-neutral-400' : 'text-slate-600'
                  }`}>
                    BSc (Hons) IT · Coventry Univ, UK · 4.8 Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip Below the Split */}
        <div className={`mt-16 pt-8 border-t ${
          isDark ? 'border-neutral-800/80' : 'border-slate-200'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight tabular-nums ${
                isDark ? 'text-neutral-100' : 'text-slate-900'
              }`}>
                4.8 Years
              </div>
              <div className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                {t('hero.stats.exp')}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                {t('hero.stats.expDetail')}
              </div>
            </div>

            <div className="space-y-1">
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight tabular-nums ${
                isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                +20% Growth
              </div>
              <div className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                {t('hero.stats.admissions')}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                {t('hero.stats.admissionsDetail')}
              </div>
            </div>

            <div className="space-y-1">
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight tabular-nums ${
                isDark ? 'text-neutral-100' : 'text-slate-900'
              }`}>
                10-Person
              </div>
              <div className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                {t('hero.stats.team')}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                {t('hero.stats.teamDetail')}
              </div>
            </div>

            <div className="space-y-1">
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight tabular-nums ${
                isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                +30% Engagement
              </div>
              <div className={`text-xs font-semibold ${isDark ? 'text-neutral-300' : 'text-slate-800'}`}>
                {t('hero.stats.engagement')}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                {t('hero.stats.engagementDetail')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

