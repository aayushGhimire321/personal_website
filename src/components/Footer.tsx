import React from 'react';
import { ArrowUp, Sliders, Linkedin, Instagram, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenSeoStudio: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSeoStudio, onOpenResume }) => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t text-xs py-16 transition-colors duration-200 ${
      isDark 
        ? 'border-neutral-800 bg-neutral-950 text-neutral-400' 
        : 'border-slate-200 bg-white text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <span className={`text-base font-bold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
              {PERSONAL_INFO.name}
            </span>
            <p className={`text-xs max-w-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
              Digital Marketing Executive & Brand Strategist based in Kathmandu, Nepal. Focused on data-driven growth, technical SEO, and conversion-engineered digital experiences.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs">
              <button
                onClick={onOpenSeoStudio}
                className={`font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-800'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                Open SEO Performance Studio
              </button>
              <span aria-hidden="true" className={isDark ? 'text-neutral-700' : 'text-slate-300'}>·</span>
              <button
                onClick={onOpenResume}
                className={`transition-colors cursor-pointer ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-slate-700 hover:text-slate-950 font-medium'
                }`}
              >
                View Full CV
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className={`font-semibold uppercase tracking-wider text-[11px] font-mono ${
              isDark ? 'text-neutral-200' : 'text-slate-900'
            }`}>
              Site Navigation
            </div>
            <ul className="space-y-1.5">
              <li><a href="#about" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>About & Profile</a></li>
              <li><a href="#case-studies" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>Featured Campaigns</a></li>
              <li><a href="#roadmap" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>Growth Roadmap</a></li>
              <li><a href="#experience" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>Career Experience</a></li>
              <li><a href="#skills" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>Skills & Tooling</a></li>
              <li><a href="#blog" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>Growth Blog & Insights</a></li>
              <li><a href="#contact" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-amber-700'}`}>Get in Touch</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <div className={`font-semibold uppercase tracking-wider text-[11px] font-mono ${
              isDark ? 'text-neutral-200' : 'text-slate-900'
            }`}>
              Direct Contact
            </div>
            <div className="space-y-1 text-xs">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className={`font-medium ${isDark ? 'text-neutral-200 hover:text-amber-400' : 'text-slate-900 hover:text-amber-700'}`}>{PERSONAL_INFO.email}</a></div>
              <div>Phone: <a href={`tel:${PERSONAL_INFO.phone.replace(/\\s+/g, '')}`} className={`font-medium ${isDark ? 'text-neutral-200 hover:text-amber-400' : 'text-slate-900 hover:text-amber-700'}`}>{PERSONAL_INFO.phone}</a></div>
              <div>Location: <span className={isDark ? 'text-neutral-300' : 'text-slate-800'}>{PERSONAL_INFO.currentAddress}</span></div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-blue-700'}`} aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-blue-500" />
              </a>
              <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-pink-600'}`} aria-label="Instagram">
                <Instagram className="w-4 h-4 text-pink-500" />
              </a>
              <a href={PERSONAL_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-amber-400' : 'hover:text-blue-700'}`} aria-label="Facebook">
                <Facebook className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
          isDark ? 'border-neutral-800/80 text-neutral-400' : 'border-slate-200 text-slate-500'
        }`}>
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Search optimized with structured Schema.org.
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
              isDark ? 'text-neutral-300 hover:text-amber-400' : 'text-slate-700 hover:text-amber-700 font-medium'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

