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
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioApp() {
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
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Semantic Content for Search Engines */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

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
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Curriculum Vitae / Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

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
