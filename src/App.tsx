import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { GrowthRoadmap } from './components/GrowthRoadmap';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsAndExpertise } from './components/SkillsAndExpertise';
import { EducationCertificates } from './components/EducationCertificates';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SeoStudioDrawer } from './components/SeoStudioDrawer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Sliders } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioApp() {
  const [isSeoStudioOpen, setIsSeoStudioOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col antialiased transition-colors duration-200 ${
      isDark 
        ? 'bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-950' 
        : 'bg-slate-50 text-slate-900 selection:bg-amber-300 selection:text-slate-950'
    }`}>
      {/* Slim Color-Coded Scroll Progress Bar at very top of viewport */}
      <ScrollProgressBar />

      {/* Top Bar Navigation with Theme Switch */}
      <Navbar 
        onOpenSeoStudio={() => setIsSeoStudioOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Semantic Content for Search Engines */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenSeoStudio={() => setIsSeoStudioOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Featured Case Studies */}
        <CaseStudies />

        {/* Client Growth Roadmap (Discovery to Conversion Timeline) */}
        <GrowthRoadmap />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Skills & Tech Stack Matrix */}
        <SkillsAndExpertise />

        {/* Education, Certifications & Availability */}
        <EducationCertificates />

        {/* Content Marketing & Growth Playbooks */}
        <BlogSection />

        {/* Working Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenSeoStudio={() => setIsSeoStudioOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive SEO Command Center Drawer */}
      <SeoStudioDrawer 
        isOpen={isSeoStudioOpen}
        onClose={() => setIsSeoStudioOpen(false)}
      />

      {/* Full Curriculum Vitae / Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating SEO Action Trigger */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-30 print:hidden">
        <button
          onClick={() => setIsSeoStudioOpen(true)}
          className={`group flex items-center gap-2 px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer ${
            isDark
              ? 'bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 hover:text-amber-300 border border-amber-400/30 hover:border-amber-400/60'
              : 'bg-white/95 hover:bg-slate-50 text-amber-600 hover:text-amber-700 border border-amber-300 shadow-md'
          }`}
          title="Open SEO Command Center & Core Web Vitals Audit"
        >
          <Sliders className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-semibold whitespace-nowrap">
            SEO Studio
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" title="SEO Healthy" />
        </button>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

