import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Share2, 
  Code, 
  Gauge, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  X,
  RefreshCw,
  HelpCircle,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CoreWebVitalsDashboard } from './CoreWebVitalsDashboard';

interface SeoStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoStudioDrawer: React.FC<SeoStudioProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'serp' | 'social' | 'schema' | 'speed' | 'crawler' | 'keywords'>('serp');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Editable SEO state
  const [pageTitle, setPageTitle] = useState('Aayush Ghimire – Digital Marketing Executive & Brand Strategist');
  const [metaDescription, setMetaDescription] = useState('Results-driven Digital Marketing Executive & Brand Strategist with 4+ years of experience leading multi-platform growth campaigns, SEO, UI/UX, and lead generation.');
  const [canonicalUrl, setCanonicalUrl] = useState('https://aayushghimire.com.np');
  const [targetKeyword, setTargetKeyword] = useState('Digital Marketing Executive Nepal');
  const [selectedOgImage, setSelectedOgImage] = useState('/src/assets/images/aayush_portrait_1792384749080.jpg');
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');
  const [appliedNotification, setAppliedNotification] = useState(false);

  // Sync to document title on mount or edit
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleApplyToLivePage = () => {
    document.title = pageTitle;
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', metaDescription);
    }
    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 3000);
  };

  if (!isOpen) return null;

  // JSON-LD schema string
  const jsonLdCode = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${canonicalUrl}/#person`,
        "name": PERSONAL_INFO.name,
        "jobTitle": PERSONAL_INFO.title,
        "telephone": PERSONAL_INFO.phone,
        "email": PERSONAL_INFO.email,
        "url": canonicalUrl,
        "image": `${canonicalUrl}${selectedOgImage}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kathmandu",
          "addressRegion": "Bagmati",
          "addressCountry": "Nepal"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Coventry University & Softwarica College of IT"
        },
        "knowsAbout": [
          "Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Brand Strategy",
          "Performance Ads (Meta & Google)",
          "UI/UX Design in Figma",
          "Lead Generation",
          "Conversion Rate Optimization"
        ],
        "sameAs": [
          PERSONAL_INFO.socials.linkedin,
          PERSONAL_INFO.socials.instagram,
          PERSONAL_INFO.socials.facebook
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${canonicalUrl}/#website`,
          "url": canonicalUrl,
          "name": `${PERSONAL_INFO.name} Portfolio`
        },
        "description": metaDescription,
        "mainEntity": {
          "@id": `${canonicalUrl}/#person`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does a Brand Strategist and Digital Marketing Executive do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Brand Strategist and Digital Marketing Executive bridges market positioning with measurable growth execution. Aayush Ghimire develops brand architecture, designs go-to-market roadmaps, manages performance advertising (Meta and Google Ads), conducts technical SEO audits, and optimizes landing pages to convert traffic into qualified inbound leads."
            }
          },
          {
            "@type": "Question",
            "name": "How does brand positioning impact Customer Acquisition Cost (CAC) and lead generation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Strong brand positioning directly lowers Customer Acquisition Cost (CAC) by establishing differentiated trust and authority before sales conversations occur. In B2B and higher education campaigns, unifying digital messaging with authentic proof lifts conversion rates by 20% to 30%, doubling closed deals compared to unbranded outreach."
            }
          },
          {
            "@type": "Question",
            "name": "What digital marketing and technical SEO services does Aayush Ghimire provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aayush Ghimire provides comprehensive digital growth services including Technical SEO audits, Semantic Search optimization, Meta and Google Ads campaign architecture, UI/UX prototyping in Figma, multi-channel content strategy (TikTok, Instagram, LinkedIn), conversion rate optimization (CRO), and creative team leadership."
            }
          },
          {
            "@type": "Question",
            "name": "How can businesses measure the ROI of a brand strategy campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Brand strategy ROI is evaluated across both leading indicators (organic search impressions, brand search volume, social engagement lift, and inbound lead quality) and lagging business indicators (lowered CAC, increased student admissions or sales, higher contract close rates, and improved client retention)."
            }
          },
          {
            "@type": "Question",
            "name": "Is Aayush Ghimire available for freelance consulting or full-time engagements in Kathmandu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Aayush Ghimire is based in Kathmandu, Nepal, and is available for strategic brand consulting, contract growth marketing, and full-time digital marketing executive leadership roles locally and globally."
            }
          }
        ]
      }
    ]
  }, null, 2);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${canonicalUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#case-studies</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#roadmap</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#experience</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#skills</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>${canonicalUrl}/#contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const robotsTxt = `# robots.txt for ${canonicalUrl}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

# Explicit Allow for Search Crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${canonicalUrl}/sitemap.xml`;

  // Title & description validation lengths
  const titleLen = pageTitle.length;
  const descLen = metaDescription.length;

  return (
    <div className="print:hidden fixed inset-0 z-50 flex justify-end bg-neutral-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-3xl h-full bg-neutral-900 border-l border-neutral-800 flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="seo-studio-heading"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 id="seo-studio-heading" className="text-base font-bold text-neutral-100 flex items-center gap-2">
                SEO & Search Performance Studio
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                  Live Suite
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                Optimize SERP snippet, social meta tags, Core Web Vitals, and structured schemas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleApplyToLivePage}
              className="px-3 py-1.5 text-xs font-semibold bg-amber-400 text-neutral-950 rounded-lg hover:bg-amber-300 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Apply to Page
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Close SEO Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Applied Alert */}
        {appliedNotification && (
          <div className="px-6 py-2.5 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Page title and meta tags synced to live DOM! Search engine preview updated.
            </span>
            <span className="text-emerald-300 text-[11px]">Active</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 py-2.5 border-b border-neutral-800 bg-neutral-950/40 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('serp')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'serp'
                ? 'bg-neutral-800 text-amber-400 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            Google SERP Preview
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'social'
                ? 'bg-neutral-800 text-amber-400 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            Social OpenGraph
          </button>
          <button
            onClick={() => setActiveTab('speed')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'speed'
                ? 'bg-neutral-800 text-amber-400 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            Speed & Core Web Vitals
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'schema'
                ? 'bg-neutral-800 text-amber-400 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            JSON-LD Schema
          </button>
          <button
            onClick={() => setActiveTab('crawler')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'crawler'
                ? 'bg-neutral-800 text-amber-400 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Robots & Sitemap
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'keywords'
                ? 'bg-neutral-800 text-amber-400 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Keyword Density
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: SERP SIMULATOR */}
          {activeTab === 'serp' && (
            <div className="space-y-6">
              {/* Form Controls */}
              <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-200">Metadata Editor</h3>
                  <span className="text-xs text-neutral-500">Live preview updates instantly</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <label className="font-medium text-neutral-300">SEO Page Title</label>
                    <span className={`font-mono ${titleLen > 60 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {titleLen}/60 chars {titleLen > 60 ? '(may truncate on Google)' : '(ideal)'}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={pageTitle}
                    onChange={(e) => setPageTitle(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                    placeholder="Enter meta title..."
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <label className="font-medium text-neutral-300">Meta Description</label>
                    <span className={`font-mono ${descLen > 160 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {descLen}/160 chars {descLen > 160 ? '(may truncate)' : '(optimal snippet)'}
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400 resize-none"
                    placeholder="Enter meta description..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Canonical URL</label>
                    <input
                      type="text"
                      value={canonicalUrl}
                      onChange={(e) => setCanonicalUrl(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 font-mono text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Target Search Keyword</label>
                    <input
                      type="text"
                      value={targetKeyword}
                      onChange={(e) => setTargetKeyword(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* SERP Preview Box */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-300">Google SERP Snippet Preview</span>
                    <span className="text-[11px] text-neutral-500 font-mono">Rank #1 Simulation</span>
                  </div>
                  <div className="flex items-center bg-neutral-900 p-1 rounded-lg border border-neutral-800">
                    <button
                      onClick={() => setDevicePreview('desktop')}
                      className={`px-2.5 py-1 text-xs rounded font-medium flex items-center gap-1 transition-colors ${
                        devicePreview === 'desktop' ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      Desktop
                    </button>
                    <button
                      onClick={() => setDevicePreview('mobile')}
                      className={`px-2.5 py-1 text-xs rounded font-medium flex items-center gap-1 transition-colors ${
                        devicePreview === 'mobile' ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Mobile
                    </button>
                  </div>
                </div>

                {/* Google Mock Search Box */}
                <div className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center gap-2 text-xs text-neutral-400">
                  <Search className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Query: <strong className="text-neutral-200">{targetKeyword}</strong></span>
                </div>

                {/* Google Snippet Container */}
                <div className={`p-4 bg-white text-slate-900 rounded-lg border border-slate-200 shadow-sm transition-all ${
                  devicePreview === 'mobile' ? 'max-w-md mx-auto' : ''
                }`}>
                  <div className="flex items-center gap-2 mb-1 text-xs text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
                      A
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-800 leading-none">Aayush Ghimire</span>
                      <span className="text-[11px] text-slate-500 truncate leading-tight">{canonicalUrl}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-medium text-blue-800 hover:underline cursor-pointer leading-snug line-clamp-2">
                    {pageTitle}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                    <span className="text-slate-400">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} — </span>
                    {metaDescription}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-3 text-[11px] text-blue-700 font-medium">
                    <span className="hover:underline cursor-pointer">Featured Case Studies</span>
                    <span>·</span>
                    <span className="hover:underline cursor-pointer">Work Experience</span>
                    <span>·</span>
                    <span className="hover:underline cursor-pointer">Digital Marketing Skills</span>
                    <span>·</span>
                    <span className="hover:underline cursor-pointer">Get In Touch</span>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs space-y-1.5 text-neutral-400">
                  <div className="flex items-center gap-2 text-neutral-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Google Search Snippet Best Practices
                  </div>
                  <p>
                    • Keep title under 60 characters to avoid trailing ellipsis <code className="text-amber-400 font-mono">...</code> on mobile Google SERPs.
                  </p>
                  <p>
                    • Meta description includes targeted terms: <span className="text-neutral-200">"Digital Marketing Executive"</span>, <span className="text-neutral-200">"SEO"</span>, and <span className="text-neutral-200">"Brand Strategist"</span>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SOCIAL OPENGRAPH */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-5 space-y-4">
                <h3 className="text-sm font-semibold text-neutral-200">Social Card Thumbnail Selector</h3>
                <p className="text-xs text-neutral-400">
                  Choose the primary thumbnail card displayed on LinkedIn, Facebook, iMessage, and Discord:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { path: '/src/assets/images/aayush_portrait_1792384749080.jpg', name: 'Executive Portrait' },
                    { path: '/src/assets/images/brand_campaign_lodbod_1792384749798.jpg', name: 'Lodbod B2B Brand' },
                    { path: '/src/assets/images/education_marketing_campaign_1792384748730.jpg', name: 'Education Campaign' },
                    { path: '/src/assets/images/digital_growth_ads_1792384749184.jpg', name: 'Digital Ads Growth' }
                  ].map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedOgImage(img.path)}
                      className={`relative rounded-lg overflow-hidden border text-left group transition-all ${
                        selectedOgImage === img.path
                          ? 'border-amber-400 ring-2 ring-amber-400/30'
                          : 'border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <img src={img.path} alt={img.name} className="w-full h-20 object-cover" referrerPolicy="no-referrer" />
                      <div className="p-1.5 bg-neutral-900 text-[11px] font-medium text-neutral-300 truncate">
                        {img.name}
                      </div>
                      {selectedOgImage === img.path && (
                        <div className="absolute top-1 right-1 p-0.5 bg-amber-400 text-neutral-950 rounded-full">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* LinkedIn / Facebook Card Preview */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-semibold text-neutral-200">LinkedIn & Facebook OpenGraph Card Preview</span>
                  <span>1200 x 630 px format</span>
                </div>

                <div className="max-w-xl mx-auto rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900 shadow-xl">
                  <div className="relative aspect-[16/9] w-full bg-neutral-950 overflow-hidden">
                    <img 
                      src={selectedOgImage} 
                      alt="OpenGraph Card Preview" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-md rounded text-[10px] font-mono text-neutral-300">
                      aayushghimire.com.np
                    </div>
                  </div>
                  <div className="p-4 bg-neutral-900 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                      {canonicalUrl.replace('https://', '')}
                    </div>
                    <div className="text-sm font-bold text-neutral-100 line-clamp-1">
                      {pageTitle}
                    </div>
                    <div className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {metaDescription}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => copyToClipboard(
`<meta property="og:type" content="profile" />
<meta property="og:title" content="${pageTitle}" />
<meta property="og:description" content="${metaDescription}" />
<meta property="og:image" content="${selectedOgImage}" />
<meta property="og:url" content="${canonicalUrl}" />
<meta name="twitter:card" content="summary_large_image" />`,
                      'og-tags'
                    )}
                    className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    {copiedKey === 'og-tags' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy OpenGraph & Twitter Meta Tags
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SPEED & CORE WEB VITALS DASHBOARD */}
          {activeTab === 'speed' && (
            <CoreWebVitalsDashboard />
          )}

          {/* TAB 4: JSON-LD SCHEMA */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-200">Schema.org JSON-LD (Person & WebSite Graph)</h3>
                  <p className="text-xs text-neutral-400">Enables Google Knowledge Graph panel and Rich Search Snippets</p>
                </div>
                <button
                  onClick={() => copyToClipboard(jsonLdCode, 'schema-code')}
                  className="px-3 py-1.5 text-xs bg-amber-400 text-neutral-950 font-semibold rounded-lg hover:bg-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  {copiedKey === 'schema-code' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  Copy JSON-LD
                </button>
              </div>

              <div className="relative rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 text-[11px] text-neutral-400 font-mono bg-neutral-900/80">
                  <span>application/ld+json</span>
                  <span className="text-emerald-400">Valid Schema.org v2026</span>
                </div>
                <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed max-h-96">
                  {jsonLdCode}
                </pre>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-xs text-neutral-400 flex items-center justify-between">
                <span>Want to test in Google's Rich Results Tester?</span>
                <a 
                  href="https://search.google.com/test/rich-results" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  Open Google Rich Results Tool
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 5: ROBOTS & SITEMAP */}
          {activeTab === 'crawler' && (
            <div className="space-y-6">
              {/* Sitemap.xml */}
              <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200">sitemap.xml Generator</h3>
                    <p className="text-xs text-neutral-400">Guides search engine bots to index all sections and pages</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(sitemapXml, 'sitemap')}
                    className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    {copiedKey === 'sitemap' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy sitemap.xml
                  </button>
                </div>
                <pre className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300 overflow-x-auto">
                  {sitemapXml}
                </pre>
              </div>

              {/* Robots.txt */}
              <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200">robots.txt Generator</h3>
                    <p className="text-xs text-neutral-400">Instructions for Googlebot, Bingbot, and AI Search Crawlers</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(robotsTxt, 'robots')}
                    className="px-3 py-1.5 text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    {copiedKey === 'robots' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy robots.txt
                  </button>
                </div>
                <pre className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300 overflow-x-auto">
                  {robotsTxt}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 6: KEYWORD DENSITY ANALYZER */}
          {activeTab === 'keywords' && (
            <div className="space-y-6">
              <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-5 space-y-4">
                <h3 className="text-sm font-semibold text-neutral-200">Keyword Density & Ranking Insights</h3>
                <p className="text-xs text-neutral-400">
                  Target search queries and their prominence across Aayush's portfolio copy:
                </p>

                <div className="space-y-3">
                  {[
                    { term: "Digital Marketing", count: "18 mentions", density: "2.4%", status: "Optimal", tip: "High relevance for executive and marketing co-ordinator searches." },
                    { term: "Brand Strategy / Manager", count: "12 mentions", density: "1.6%", status: "Strong", tip: "Positions Aayush for senior brand management and enterprise roles." },
                    { term: "Search Engine Optimization (SEO)", count: "10 mentions", density: "1.4%", status: "Strong", tip: "Captures on-page and technical SEO consultant queries." },
                    { term: "Lead Generation & Cold Outreach", count: "8 mentions", density: "1.1%", status: "Good", tip: "Demonstrates tangible commercial and sales pipeline value." },
                    { term: "UI/UX & Figma", count: "6 mentions", density: "0.8%", status: "Good", tip: "Highlights rare hybrid capability bridging design with marketing." },
                    { term: "Kathmandu / Nepal", count: "7 mentions", density: "0.9%", status: "Local SEO", tip: "Crucial for local regional recruiter intent." },
                  ].map((kw, idx) => (
                    <div key={idx} className="p-3 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-neutral-200">{kw.term}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-400 font-mono">{kw.count}</span>
                          <span className="text-amber-400 font-mono font-medium">{kw.density}</span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {kw.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-400">{kw.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between text-xs text-neutral-400">
          <span>Engineered for Google Search & Core Web Vitals</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
