import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ne';

export interface Translations {
  [key: string]: {
    en: string;
    ne: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Navigation
  'nav.about': { en: 'About', ne: 'मेरो बारेमा' },
  'nav.caseStudies': { en: 'Case Studies', ne: 'केस स्टडीहरू' },
  'nav.experience': { en: 'Experience', ne: 'कार्य अनुभव' },
  'nav.skills': { en: 'Skills', ne: 'दक्षताहरू' },
  'nav.roadmap': { en: 'Roadmap', ne: 'रोडम्याप' },
  'nav.blog': { en: 'Blog', ne: 'लेख तथा विचार' },
  'nav.contact': { en: 'Contact', ne: 'सम्पर्क' },
  'nav.viewCv': { en: 'View CV', ne: 'बायोडाटा (CV)' },
  'nav.seoStudio': { en: 'SEO Studio', ne: 'एसईओ स्टुडियो' },
  'nav.letsTalk': { en: "Let's Talk", ne: 'सल्लाह गरौं' },

  // Hero Section
  'hero.kicker': { 
    en: 'Digital Marketing Executive & Brand Strategist', 
    ne: 'डिजिटल मार्केटिङ एक्जिक्युटिभ र ब्रान्ड रणनीतिकार' 
  },
  'hero.headline1': { 
    en: 'Scaling Brand Authority & Organic Growth', 
    ne: 'ब्रान्डको प्रभाव र दिगो अर्गानिक वृद्धि' 
  },
  'hero.headline2': { 
    en: 'Through Technical SEO, Content & Precision Ads', 
    ne: 'प्राविधिक एसईओ, कन्टेन्ट र प्रभावकारी विज्ञापनद्वारा' 
  },
  'hero.bio': { 
    en: 'Results-driven marketing executive with 4+ years of proven expertise in multi-platform digital growth, technical SEO, brand identity, and high-conversion client acquisition.', 
    ne: '४+ वर्षभन्दा बढी अनुभव भएका डिजिटल मार्केटिङ विशेषज्ञ, प्राविधिक एसईओ, ब्रान्ड पहिचान, सामाजिक सञ्जाल वृद्धि तथा प्रभावकारी ग्राहक आकर्षणमा कुशल।' 
  },
  'hero.ctaHire': { en: 'Explore Strategy & Hire', ne: 'रणनीति हेर्नुहोस् र सहकार्य गरौं' },
  'hero.ctaResume': { en: 'Download Curriculum Vitae', ne: 'बायोडाटा (CV) डाउनलोड' },
  'hero.available': { en: 'Available for Strategic Consulting & Leadership', ne: 'रणनीतिक परामर्श र नेतृत्व भूमिकाको लागि उपलब्ध' },
  'hero.stats.exp': { en: 'Track Record', ne: 'कार्य अनुभव' },
  'hero.stats.expDetail': { en: 'Hands-on marketing execution', ne: 'प्रत्यक्ष मार्केटिङ व्यवस्थापन' },
  'hero.stats.admissions': { en: 'Admissions & Inquiries', ne: 'भर्ना तथा सोधपुछ वृद्धि' },
  'hero.stats.admissionsDetail': { en: 'Measurable brand growth', ne: 'मापनयोग्य ब्रान्ड प्रगति' },
  'hero.stats.team': { en: 'Creative Team Led', ne: 'नेतृत्व गरेको टिम' },
  'hero.stats.teamDetail': { en: 'Cross-functional management', ne: '१०+ सिर्जनशील सदस्यहरू' },
  'hero.stats.engagement': { en: 'Client Engagement', ne: 'ग्राहक संलग्नता' },
  'hero.stats.engagementDetail': { en: 'Across multi-channel accounts', ne: 'सबै च्यानलहरूमा +३०% वृद्धि' },

  // Case Studies Section
  'cases.kicker': { en: 'Featured Work & Campaigns', ne: 'प्रमुख परियोजना तथा अभियानहरू' },
  'cases.title': { en: 'Strategic Case Studies', ne: 'रणनीतिक केस स्टडीहरू' },
  'cases.description': { 
    en: 'Measurable commercial outcomes spanning enterprise B2B freight logistics, higher-education admissions campaigns, and performance lead funnels.', 
    ne: 'इन्टरप्राइज बी२बी लजिस्टिक, उच्च शिक्षा भर्ना अभियान र डिजिटल लिड फनेलहरूको वास्तविक नतिजा।' 
  },
  'cases.readBreakdown': { en: 'View Full Strategy & Metrics', ne: 'पूर्ण रणनीति र तथ्याङ्क हेर्नुहोस्' },
  'cases.filterAll': { en: 'All Campaigns', ne: 'सबै अभियानहरू' },

  // Experience Section
  'exp.kicker': { en: 'Career Journey', ne: 'कार्य अनुभव यात्रा' },
  'exp.title': { en: 'Professional Experience', ne: 'व्यावसायिक कार्य अनुभव' },
  'exp.description': { 
    en: 'A chronological track record of driving institutional brand awareness, managing creative teams, and generating verified business pipeline.', 
    ne: 'विभिन्न संस्थाहरूमा ब्रान्ड पहिचान वृद्धि, सिर्जनशील टिमको नेतृत्व र व्यवसाय विस्तारको प्रमाणित इतिहास।' 
  },

  // Skills Section
  'skills.kicker': { en: 'Capabilities & Specialized Toolkit', ne: 'दक्षता तथा आधुनिक टुल्स' },
  'skills.title': { en: 'Skills Built on Data, Design & Execution', ne: 'डेटा, डिजाइन र कार्यसम्पादनमा आधारित सीपहरू' },
  'skills.description': { 
    en: 'Interactive telemetry rings displaying verified competency benchmarks across organic search engineering, paid funnel mechanics, UI/UX systems, and commercial deal development.', 
    ne: 'प्राविधिक एसईओ, विज्ञापन फनेल, युआई/युएक्स डिजाइन र व्यवसाय विकासमा प्रमाणित दक्षता प्रतिशत।' 
  },
  'skills.searchPlaceholder': { en: 'Filter skills (e.g. SEO, Figma)...', ne: 'सीपहरू खोज्नुहोस् (जस्तै: SEO, Figma)...' },

  // Education Section
  'edu.kicker': { en: 'Academic & Professional Credentials', ne: 'शैक्षिक योग्यता तथा प्रमाणपत्रहरू' },
  'edu.title': { en: 'Education, Certifications & Availability', ne: 'शिक्षा, प्रमाणपत्र र उपलब्धता' },
  'edu.details': { en: 'Academic Background', ne: 'शैक्षिक विवरण' },
  'edu.certs': { en: 'Industry Certifications', ne: 'व्यावसायिक प्रमाणपत्रहरू' },
  'edu.languages': { en: 'Language Proficiency', ne: 'भाषागत दक्षता' },

  // Blog Section
  'blog.kicker': { en: 'Content Marketing & Growth Playbooks', ne: 'कन्टेन्ट मार्केटिङ तथा ग्रोथ गाइडहरू' },
  'blog.title': { en: 'Strategic Perspectives & Case Analysis', ne: 'रणनीतिक विचार तथा केस विश्लेषण' },
  'blog.description': { 
    en: 'Deep dives into semantic search algorithms, multi-platform ad funnel mechanics, high-trust brand positioning, and content ecosystems designed to convert cold inquiries into active clients.', 
    ne: 'खोज एल्गोरिदम, मल्टि-च्यानल विज्ञापन, ब्रान्डिङ र कन्टेन्ट रणनीतिका व्यावहारिक अनुभवहरू।' 
  },
  'blog.readArticle': { en: 'Read Strategy Breakdown', ne: 'पूर्ण लेख पढ्नुहोस्' },

  // Growth Roadmap Section
  'roadmap.kicker': { en: 'Client Journey & Methodology', ne: 'ग्राहक सफलता कार्यविधि तथा यात्रा' },
  'roadmap.title': { en: 'Strategic Growth Roadmap', ne: 'रणनीतिक वृद्धि रोडम्याप' },
  'roadmap.description': { 
    en: 'A battle-tested 6-stage journey transforming cold market discovery into predictable, compounding client conversions and measurable commercial ROI.', 
    ne: 'प्रारम्भिक बजार विश्लेषणदेखि उच्च रूपान्तरण र दिगो व्यवसाय वृद्धिसम्मको प्रमाणित ६-चरण यात्रा।' 
  },
  'roadmap.allPhases': { en: 'All 6 Phases (Full-Funnel)', ne: 'सबै ६ चरणहरू (पूर्ण फनेल)' },
  'roadmap.seoFocus': { en: 'Organic & SEO Sprint', ne: 'अर्गानिक र एसईओ केन्द्रित' },
  'roadmap.paidFocus': { en: 'Performance Ads & CRO', ne: 'विज्ञापन र रूपान्तरण' },
  'roadmap.deliverables': { en: 'Key Strategic Deliverables', ne: 'मुख्य रणनीतिक नतिजाहरू' },
  'roadmap.kpiTargets': { en: 'Target KPI Benchmarks', ne: 'लक्षित सूचकहरू (KPIs)' },
  'roadmap.techStack': { en: 'Tech & Diagnostic Stack', ne: 'प्रयोग गरिएका सफ्टवेयर र टुल्स' },
  'roadmap.clientAction': { en: 'Client Input & Alignment', ne: 'ग्राहक सहकार्य तथा स्वीकृति' },
  'roadmap.nextPhase': { en: 'Next Phase', ne: 'अर्को चरण' },
  'roadmap.prevPhase': { en: 'Previous Phase', ne: 'अघिल्लो चरण' },
  'roadmap.startJourney': { en: 'Initiate Discovery Diagnostic', ne: 'तपाईंको व्यवसाय अडिट सुरु गरौं' },
  'roadmap.viewDetails': { en: 'Click to Inspect Milestone Artifacts', ne: 'चरणको विस्तृत विवरण हेर्न क्लिक गर्नुहोस्' },

  // Contact Section
  'contact.kicker': { en: 'Get In Touch', ne: 'सम्पर्क गरौं' },
  'contact.title': { en: "Let's Build Something High-Impact", ne: 'प्रभावकारी काम सँगै सुरु गरौं' },
  'contact.description': { 
    en: 'Whether you need end-to-end brand architecture, performance ad scaling, technical SEO auditing, or creative team management—my inbox is open.', 
    ne: 'तपाईंको कम्पनी वा संस्थालाई ब्रान्डिङ, एसईओ अडिट, डिजिटल विज्ञापन वा टिम व्यवस्थापन चाहिएको छ भने मलाई सम्पर्क गर्नुहोस्।' 
  },
  'contact.name': { en: 'Your Full Name', ne: 'तपाईंको पूरा नाम' },
  'contact.email': { en: 'Work Email Address', ne: 'इमेल ठेगाना' },
  'contact.phone': { en: 'Phone / WhatsApp Number', ne: 'फोन / ह्वाट्सएप नम्बर' },
  'contact.service': { en: 'Primary Service Required', ne: 'आवश्यक सेवा रोज्नुहोस्' },
  'contact.message': { en: 'Project Goals & Timeline', ne: 'परियोजनाको विवरण र समयसीमा' },
  'contact.submit': { en: 'Send Strategic Inquiry', ne: 'सन्देश पठाउनुहोस्' },
  'contact.success': { en: 'Inquiry Sent Successfully!', ne: 'तपाईंको सन्देश सफलतापूर्वक पठाइयो!' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isNepali: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'en' || saved === 'ne') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ne' : 'en'));
  };

  const t = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[language] || entry.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isNepali: language === 'ne' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
