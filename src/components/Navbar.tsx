import React, { useState, useEffect } from 'react';
import { Sliders, Menu, X, ArrowUpRight, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenSeoStudio: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSeoStudio, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.caseStudies'), href: "#case-studies" },
    { label: t('nav.roadmap'), href: "#roadmap" },
    { label: t('nav.experience'), href: "#experience" },
    { label: t('nav.skills'), href: "#skills" },
    { label: t('nav.blog'), href: "#blog" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header 
      className={`print:hidden fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled 
          ? isDark 
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className={`text-lg font-bold tracking-tight transition-colors whitespace-nowrap shrink-0 ${
              isDark 
                ? 'text-neutral-100 hover:text-amber-400' 
                : 'text-slate-900 hover:text-amber-600'
            }`}
          >
            Aayush Ghimire
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className={`hidden md:flex items-center gap-7 text-sm font-medium ${
            isDark ? 'text-neutral-300' : 'text-slate-600'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 ${
                  isDark ? 'hover:text-amber-400' : 'hover:text-amber-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions (Language Switch + Theme Switch + SEO Studio + Hire CTA) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Language Toggle Switch (EN / नेपाली) */}
            <button
              onClick={toggleLanguage}
              role="switch"
              aria-checked={language === 'ne'}
              aria-label={`Switch language to ${language === 'en' ? 'Nepali' : 'English'}`}
              title={`Switch language to ${language === 'en' ? 'Nepali (नेपाली)' : 'English'}`}
              className={`px-2.5 py-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
                isDark
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-800 hover:border-neutral-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-2xs'
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono text-[11px] font-bold">
                {language === 'en' ? 'नेपाली' : 'English'}
              </span>
            </button>

            {/* High-Contrast Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              role="switch"
              aria-checked={!isDark}
              aria-label={`Switch to ${isDark ? 'high-contrast light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'High-Contrast Light' : 'Dark'} mode`}
              className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer ${
                isDark
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-2xs'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-mono">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-800" />
                  <span className="text-[11px] font-mono">Dark</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResume}
              className={`px-3.5 py-2 text-xs font-medium border rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isDark
                  ? 'text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border-neutral-800'
                  : 'text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border-slate-300 shadow-2xs'
              }`}
            >
              {t('nav.viewCv')}
            </button>

            <button
              onClick={onOpenSeoStudio}
              className={`px-3.5 py-2 text-xs font-medium border rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                isDark
                  ? 'text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border-amber-400/30'
                  : 'text-amber-900 bg-amber-50 hover:bg-amber-100 border-amber-300 font-semibold'
              }`}
              title="Open SEO Command Center & Core Web Vitals Audit"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-500" />
              {t('nav.seoStudio')}
            </button>

            <a
              href="#contact"
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 shadow-xs ${
                isDark
                  ? 'text-neutral-950 bg-amber-400 hover:bg-amber-300'
                  : 'text-white bg-slate-900 hover:bg-slate-800'
              }`}
            >
              {t('nav.letsTalk')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              role="switch"
              aria-checked={language === 'ne'}
              aria-label="Toggle language"
              className={`px-2 py-1.5 border rounded-lg text-xs font-bold font-mono ${
                isDark 
                  ? 'bg-neutral-900 text-amber-400 border-neutral-800' 
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              {language === 'en' ? 'ने' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              role="switch"
              aria-checked={!isDark}
              aria-label="Toggle theme"
              className={`p-2 border rounded-lg ${
                isDark 
                  ? 'bg-neutral-900 text-amber-400 border-neutral-800' 
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onOpenSeoStudio}
              className={`p-2 border rounded-lg ${
                isDark
                  ? 'text-amber-400 bg-neutral-900 border-neutral-800'
                  : 'text-amber-800 bg-amber-50 border-amber-300'
              }`}
              title="SEO Studio"
              aria-label="Open SEO Studio"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 border rounded-lg ${
                isDark
                  ? 'text-neutral-300 hover:text-white bg-neutral-900 border-neutral-800'
                  : 'text-slate-700 hover:text-slate-900 bg-white border-slate-300'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-xl border-b px-6 py-5 space-y-4 ${
          isDark
            ? 'bg-neutral-950/95 border-neutral-800'
            : 'bg-white/95 border-slate-200 shadow-md'
        }`}>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-1 transition-colors ${
                  isDark
                    ? 'text-neutral-300 hover:text-amber-400'
                    : 'text-slate-700 hover:text-amber-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={`pt-3 border-t flex flex-col gap-2.5 ${
            isDark ? 'border-neutral-800' : 'border-slate-200'
          }`}>
            <button
              onClick={() => {
                toggleLanguage();
              }}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border ${
                isDark
                  ? 'bg-neutral-900 text-neutral-200 border-neutral-800'
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <Languages className="w-4 h-4 text-amber-500" />
              <span>{language === 'en' ? 'नेपाली भाषामा हेर्नुहोस् (Switch to Nepali)' : 'Switch to English'}</span>
            </button>

            <button
              onClick={() => {
                toggleTheme();
              }}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border ${
                isDark
                  ? 'bg-neutral-900 text-neutral-200 border-neutral-800'
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
              <span>{isDark ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full py-2.5 text-xs font-medium border rounded-lg text-center ${
                isDark
                  ? 'text-neutral-200 bg-neutral-900 border-neutral-800'
                  : 'text-slate-800 bg-slate-50 border-slate-300'
              }`}
            >
              {t('nav.viewCv')}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoStudio();
              }}
              className={`w-full py-2.5 text-xs font-semibold border rounded-lg text-center flex items-center justify-center gap-1.5 ${
                isDark
                  ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                  : 'text-amber-900 bg-amber-50 border-amber-300'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              {t('nav.seoStudio')}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg text-center ${
                isDark
                  ? 'text-neutral-950 bg-amber-400'
                  : 'text-white bg-slate-900'
              }`}
            >
              {t('nav.letsTalk')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

