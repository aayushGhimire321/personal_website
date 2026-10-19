import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  Share2, 
  X, 
  Check, 
  Copy, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { BLOG_POSTS, BlogPost, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const BlogSection: React.FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'All',
    'SEO & Organic Growth',
    'Performance & Ads',
    'Brand Strategy',
    'Content Marketing'
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const handleCopyLink = (post: BlogPost) => {
    const url = `${window.location.origin}/#blog-${post.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section 
      id="blog" 
      aria-labelledby="blog-heading"
      className={`py-24 border-t transition-colors duration-200 relative ${
        isDark 
          ? 'border-neutral-800 bg-neutral-950/70' 
          : 'border-slate-200 bg-slate-50/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className={`inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider uppercase px-3 py-1 rounded-md border ${
              isDark 
                ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' 
                : 'bg-amber-100 text-amber-800 border-amber-300'
            }`}>
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('blog.kicker')}</span>
            </div>
            <h2 
              id="blog-heading" 
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                isDark ? 'text-neutral-100' : 'text-slate-950'
              }`}
            >
              {t('blog.title')}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              {t('blog.description')}
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end text-right shrink-0">
            <span className={`text-xs font-mono ${isDark ? 'text-neutral-500' : 'text-slate-500'}`}>
              Articles & Guides
            </span>
            <span className={`text-2xl font-bold font-mono ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              0{BLOG_POSTS.length} Published
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b pb-4 print:hidden" style={{ borderColor: isDark ? '#262626' : '#e2e8f0' }}>
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === 'All' 
              ? BLOG_POSTS.length 
              : BLOG_POSTS.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? isDark
                      ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                      : 'bg-slate-900 text-white font-semibold shadow-xs'
                    : isDark
                      ? 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                      : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected 
                    ? isDark ? 'bg-neutral-900 text-amber-300' : 'bg-slate-800 text-amber-200' 
                    : isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              id={`blog-${post.id}`}
              itemScope
              itemType="https://schema.org/BlogPosting"
              className={`group border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl print-avoid-break ${
                isDark 
                  ? 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700' 
                  : 'bg-white border-slate-300 hover:border-slate-400 shadow-xs'
              }`}
            >
              <div>
                {/* Article Card Media Header */}
                <div className="relative aspect-16/9 overflow-hidden bg-neutral-950">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    itemProp="image"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-md bg-neutral-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      {post.category}
                    </span>
                  </div>

                  {/* Date & Read time overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <time itemProp="datePublished" dateTime={post.publishedDate}>
                        {post.publishedDate}
                      </time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 
                    itemProp="headline"
                    className={`text-lg sm:text-xl font-bold leading-snug transition-colors group-hover:text-amber-400 ${
                      isDark ? 'text-neutral-100' : 'text-slate-900 group-hover:text-amber-600'
                    }`}
                  >
                    {post.title}
                  </h3>

                  <p 
                    itemProp="description"
                    className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-slate-600'
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-neutral-950 text-neutral-400 border-neutral-800' 
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className={`px-6 py-4 border-t flex items-center justify-between mt-4 ${
                isDark ? 'border-neutral-800 bg-neutral-950/40' : 'border-slate-100 bg-slate-50/80'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center text-[10px] font-bold">
                    AG
                  </div>
                  <span className={`text-xs font-medium ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
                    Aayush Ghimire
                  </span>
                </div>

                <button
                  onClick={() => setActiveArticle(post)}
                  className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1 ${
                    isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-800'
                  }`}
                >
                  Read Strategy Breakdown
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Content Marketing Philosophy Banner */}
        <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDark 
            ? 'bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/20 border-neutral-800' 
            : 'bg-gradient-to-r from-amber-50 via-white to-orange-50 border-amber-200'
        }`}>
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Content Strategy Thesis
            </div>
            <h4 className={`text-base sm:text-lg font-bold ${isDark ? 'text-neutral-100' : 'text-slate-900'}`}>
              High-intent organic traffic beats vanity impressions every single time.
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
              Effective content marketing is not about high-frequency automated posts—it is about answering the exact risk concerns, pricing models, and operational choices high-value clients need to make before signing.
            </p>
          </div>

          <a
            href="#contact"
            className={`px-5 py-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shadow-md flex items-center gap-2 cursor-pointer ${
              isDark 
                ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 hover:shadow-amber-400/20' 
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <span>Partner on Content Strategy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className={`w-full max-w-3xl max-h-[90vh] border rounded-2xl flex flex-col shadow-2xl overflow-hidden print:max-h-none print:border-none print:shadow-none ${
              isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-100' : 'bg-white border-slate-300 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reader-article-title"
          >
            {/* Modal Top Control Bar */}
            <div className={`flex items-center justify-between px-6 py-4 border-b print:hidden ${
              isDark ? 'border-neutral-800 bg-neutral-950/70' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  {activeArticle.category}
                </span>
                <span className={`text-xs ${isDark ? 'text-neutral-500' : 'text-slate-400'}`}>·</span>
                <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                  {activeArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyLink(activeArticle)}
                  className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isDark 
                      ? 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:text-white' 
                      : 'bg-white text-slate-700 border-slate-300 hover:text-slate-950'
                  }`}
                  title="Copy link to this article"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                    isDark 
                      ? 'bg-neutral-950 text-neutral-400 hover:text-white border-neutral-800 hover:bg-neutral-800' 
                      : 'bg-white text-slate-500 hover:text-slate-900 border-slate-300 hover:bg-slate-100'
                  }`}
                  aria-label="Close article modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Article Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                  <span>Published: {activeArticle.publishedDate}</span>
                  <span>·</span>
                  <span>Author: {PERSONAL_INFO.name} ({PERSONAL_INFO.title})</span>
                </div>

                <h1 
                  id="reader-article-title" 
                  className={`text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight ${
                    isDark ? 'text-neutral-50' : 'text-slate-950'
                  }`}
                >
                  {activeArticle.title}
                </h1>

                {/* Cover Image */}
                <div className="rounded-xl overflow-hidden aspect-16/9 bg-neutral-950 border border-neutral-800">
                  <img 
                    src={activeArticle.coverImage} 
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Lead Summary Callout */}
                <div className={`p-5 rounded-xl border-l-4 leading-relaxed text-sm sm:text-base font-medium ${
                  isDark 
                    ? 'border-amber-400 bg-neutral-950/60 text-neutral-200' 
                    : 'border-amber-500 bg-amber-50/70 text-slate-800'
                }`}>
                  {activeArticle.content.lead}
                </div>
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-8 text-sm sm:text-base">
                {activeArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className={`text-lg sm:text-xl font-bold tracking-tight ${
                      isDark ? 'text-amber-400' : 'text-slate-900'
                    }`}>
                      {section.heading}
                    </h2>

                    <div className={`space-y-3 leading-relaxed ${
                      isDark ? 'text-neutral-300' : 'text-slate-700'
                    }`}>
                      {section.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.keyTakeaway && (
                      <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm font-medium ${
                        isDark 
                          ? 'bg-neutral-950 border-amber-400/30 text-amber-200' 
                          : 'bg-amber-50/80 border-amber-200 text-amber-900'
                      }`}>
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold block mb-0.5">Key Strategic Takeaway:</strong>
                          <span>{section.keyTakeaway}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="pt-6 border-t space-y-3" style={{ borderColor: isDark ? '#262626' : '#e2e8f0' }}>
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider block ${
                  isDark ? 'text-neutral-400' : 'text-slate-600'
                }`}>
                  Strategic Disciplines
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeArticle.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`text-xs font-mono px-3 py-1 rounded-md border ${
                        isDark 
                          ? 'bg-neutral-950 text-neutral-300 border-neutral-800' 
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Box & Inquiry CTA */}
              <div className={`p-6 rounded-2xl border space-y-4 ${
                isDark 
                  ? 'bg-neutral-950 border-neutral-800' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                    <img 
                      src="/src/assets/images/aayush_portrait_1792384749080.jpg" 
                      alt="Aayush Ghimire" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isDark ? 'text-neutral-100' : 'text-slate-950'}`}>
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>
                      {PERSONAL_INFO.title} · Based in {PERSONAL_INFO.currentAddress}
                    </p>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>
                  Need a tailored organic acquisition framework or ad funnel designed specifically for your school, company, or platform? Let's discuss metrics and strategy.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#contact"
                    onClick={() => setActiveArticle(null)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      isDark 
                        ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Discuss This Strategy</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      isDark 
                        ? 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800' 
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Back to All Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
