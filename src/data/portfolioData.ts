import lodbodImage from "./assets/images/brand_campaign_lodbod_1792384749798.jpg";
import softwaricaImage from "./assets/images/education_marketing_campaign_1792384748730.jpg";
import digitalAdsImage from "./assets/images/digital_growth_ads_1792384749184.jpg";

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: 'current' | 'past';
  category: 'Marketing' | 'Brand' | 'Business Development' | 'Leadership';
  highlights: string[];
  skills: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Brand Strategy' | 'Paid Ads & SEO' | 'Campus & Growth' | 'Creative Direction';
  period: string;
  heroImage: string;
  summary: string;
  problem: string;
  strategy: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'SEO & Organic Growth' | 'Performance & Ads' | 'Brand Strategy' | 'Content Marketing';
  readTime: string;
  publishedDate: string;
  coverImage: string;
  tags: string[];
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaway?: string;
    }[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  items: { name: string; level: number; tags: string[] }[];
}

export interface RoadmapMilestone {
  id: string;
  stepNumber: string;
  phase: string;
  phaseNe: string;
  stageName: string;
  stageNameNe: string;
  title: string;
  titleNe: string;
  timeline: string;
  timelineNe: string;
  category: 'discovery' | 'strategy' | 'production' | 'launch' | 'cro' | 'scale';
  tags: ('full-funnel' | 'seo' | 'paid')[];
  summary: string;
  summaryNe: string;
  objectives: { en: string; ne: string }[];
  deliverables: { en: string; ne: string }[];
  targetKpis: { label: string; labelNe: string; value: string; context: string; contextNe: string }[];
  toolsUsed: string[];
  clientActionItem: { en: string; ne: string };
  deliverablePreview: {
    badge: string;
    badgeNe: string;
    title: string;
    titleNe: string;
    summary: string;
    summaryNe: string;
    metricProof: string;
  };
}

export const PERSONAL_INFO = {
  name: "Aayush Ghimire",
  title: "Digital Marketing Executive & Brand Strategist",
  shortBio: "Results-driven marketing executive with 4+ years of proven expertise in multi-platform digital growth, technical SEO, brand identity, and high-conversion client acquisition.",
  email: "aghimire781@gmail.com",
  phone: "+977 9860099869",
  landline: "014770229",
  currentAddress: "Ghattekulo, Kathmandu, Nepal",
  permanentAddress: "Badikhel, Lalitpur, Nepal",
  birthDate: "Jan 2, 2004",
  education: "BSc (Hons) in Information Technology – Coventry University, England, UK",
  availability: "Mid Level · Freelance, Strategic Consulting & Full-time",
  socials: {
    linkedin: "https://www.linkedin.com/in/aayush-ghimire-209119217/",
    instagram: "https://www.instagram.com/aayush4599/",
    facebook: "https://www.facebook.com/aayush.ghimire.18/",
  },
  stats: [
    { label: "Track Record", value: "4.8 yrs", detail: "Hands-on marketing execution" },
    { label: "Admissions & Inquiries", value: "+20%", detail: "Measurable brand growth" },
    { label: "Creative Team Led", value: "10+", detail: "Cross-functional management" },
    { label: "Client Engagement", value: "+30%", detail: "Across multi-channel accounts" }
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "euro-school",
    role: "Digital Marketing Co-ordinator",
    company: "Euro School",
    location: "Hattigauda, Kathmandu",
    period: "August, 2026 – Present",
    duration: "Current",
    type: "current",
    category: "Marketing",
    highlights: [
      "Create, edit, and publish engaging multimedia content across Facebook, Instagram, TikTok, YouTube, and website.",
      "Develop and execute social media strategies to significantly scale brand awareness and parental engagement.",
      "Manage end-to-end SEO, website traffic monitoring, conversion analytics, and digital marketing activities.",
      "Direct event media coverage, photography, videography, and promotional collateral for school milestones.",
      "Collaborate across faculty and administrative heads to maintain consistent brand tone and rapid inquiry response."
    ],
    skills: ["SEO Auditing", "Meta & TikTok Growth", "Content Calendars", "Video/Graphic Production", "Web Traffic Analytics"]
  },
  {
    id: "lodbod-brand",
    role: "Senior Brand Manager",
    company: "loard board (Lodbod Logistics)",
    location: "Bhanimandal, Lalitpur",
    period: "July, 2026 – Present",
    duration: "Current",
    type: "current",
    category: "Brand",
    highlights: [
      "Developed and executed integrated online and offline brand architectures to solidify Lodbod's presence in commercial logistics.",
      "Led high-impact B2B brand awareness campaigns targeting shippers, transport enterprises, fleet owners, and enterprise logistics clients.",
      "Produced comprehensive marketing collateral including corporate decks, brochures, industrial banners, and product video assets.",
      "Established brand governance guidelines and monitored campaign ROI, CAC (Customer Acquisition Cost), and channel performance.",
      "Orchestrated corporate sponsorships, industry trade exhibitions, and strategic networking programs."
    ],
    skills: ["B2B Brand Positioning", "ROI / CAC Tracking", "Corporate Collateral", "Event Sponsorships", "Multi-Channel Media"]
  },
  {
    id: "lodbod-bd",
    role: "Senior Business Development Officer",
    company: "loard board (Lodbod Logistics)",
    location: "Bhanimandal, Lalitpur",
    period: "June, 2026 – Present",
    duration: "Current",
    type: "current",
    category: "Business Development",
    highlights: [
      "Identified and onboarded major shippers, transport companies, industrial factories, and distributors into the digital freight network.",
      "Generated qualified enterprise leads through strategic cold calling, direct market field visits, and referral networking.",
      "Negotiated commercial terms, closed high-volume freight contracts, and converted prospects into recurring platform users.",
      "Maintained meticulous CRM records, pipeline forecasts, and collaborated with operations for seamless vehicle placement."
    ],
    skills: ["Cold Calling & Outreach", "Commercial Negotiations", "B2B Pipeline CRM", "Client Retention", "Field Presentations"]
  },
  {
    id: "softwarica",
    role: "Senior Marketing Officer",
    company: "Softwarica College of IT & E-Commerce",
    location: "Dillibazar, Kathmandu",
    period: "November, 2025 – June, 2026",
    duration: "7 months",
    type: "past",
    category: "Marketing",
    highlights: [
      "Conducted 100+ student counseling sessions monthly, guiding aspiring engineers into British BSc (Hons) degrees.",
      "Managed 5+ marketing campaigns per semester, fueling a documented 20%+ growth in verified student inquiries.",
      "Planned and executed 10+ annual career seminars, tech exhibitions, and 15+ school/institute outreach roadshows.",
      "Directed social campaigns across Facebook, Instagram, TikTok, and LinkedIn, cultivating relationships with 200+ students and stakeholders."
    ],
    skills: ["Student Counseling", "Education Seminars", "Admissions Pipeline", "Community Outreach", "Event Coordination"]
  },
  {
    id: "chautari-digitals",
    role: "Senior Digital Marketing Executive",
    company: "Chautari Digitals",
    location: "Yekantakuna, Lalitpur",
    period: "August, 2024 – October, 2025",
    duration: "1 year, 2 months",
    type: "past",
    category: "Leadership",
    highlights: [
      "Led and mentored a team of 4 marketing specialists, supervising the end-to-end execution of multi-client digital deliverables.",
      "Managed and optimized 5+ client social accounts, delivering data-backed strategies that elevated average engagement by 30%.",
      "Drove organic and paid client acquisition pipelines through targeted outbound outreach and consultative marketing proposal closures.",
      "Delivered bi-weekly analytical reports with actionable growth insights to maximize client ROAS."
    ],
    skills: ["Team Mentorship", "Account Management", "Proposal Pitching", "Social Media Strategy", "ROAS Optimization"]
  },
  {
    id: "blessing-abroad",
    role: "Digital Marketing Officer",
    company: "The Blessing Abroad Study",
    location: "Putalisadak, Kathmandu",
    period: "January, 2023 – July, 2025",
    duration: "2 years, 6 months",
    type: "past",
    category: "Marketing",
    highlights: [
      "Engineered Meta Ads and Google Ads campaigns to generate high-intent study abroad inquiries for global destinations.",
      "Audited and optimized website landing pages with on-page SEO best practices, boosting organic search visibility and rankings.",
      "Curated editorial content calendars, coordinating with video creators and designers for compelling student testimonial reels.",
      "Analyzed inquiry funnel drop-offs and nurtured leads through automated digital follow-ups."
    ],
    skills: ["Google Ads", "Meta Ads Manager", "On-Page SEO", "Funnel Nurturing", "Analytics & Reporting"]
  },
  {
    id: "sabitri-ent",
    role: "Team Lead",
    company: "Sabitri Entertainment",
    location: "Pepsicola, Kathmandu",
    period: "April, 2022 – August, 2024",
    duration: "2 years, 4 months",
    type: "past",
    category: "Leadership",
    highlights: [
      "Led and mentored a creative studio team of 10 members (designers, video editors, copywriters) from concept to release.",
      "Supervised end-to-end production of digital trailers, promotional reels, event posters, and premiere activations.",
      "Established brand identity guidelines and streamlined production workflows to guarantee 100% on-time milestone delivery.",
      "Served as primary liaison between executive leadership and the creative unit for strategic alignment."
    ],
    skills: ["10-Person Team Leadership", "Creative Direction", "Post-Production Pipeline", "Brand Governance", "Workflow Design"]
  },
  {
    id: "genx-associate",
    role: "Digital Marketing Officer",
    company: "Genx Associate Pvt. LTD.",
    location: "Chakrapath, Kathmandu",
    period: "January, 2022 – April, 2022",
    duration: "3 months",
    type: "past",
    category: "Marketing",
    highlights: [
      "Executed targeted promotional campaigns across social channels for international workforce opportunities.",
      "Scheduled graphics, recruitment notices, and monitored real-time inquiries for immediate phone/chat follow-ups.",
      "Conducted competitor benchmark research to sharpen advertising messaging."
    ],
    skills: ["Social Posting", "Lead Follow-ups", "Recruitment Marketing", "Market Research"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lodbod-logistics",
    title: "B2B Freight Logistics Brand Architecture & Shippers Onboarding",
    client: "loard board / Lodbod Logistics",
    category: "Brand Strategy",
    period: "2026",
    heroImage: lodbodImage,
    summary: "Spearheaded the integrated brand positioning and B2B growth engine for a high-velocity digital logistics marketplace connecting cargo shippers with verified fleet operators.",
    problem: "Traditional logistics in Nepal relied on fragmented verbal broker channels, leading to high transaction costs and low shipper trust for app-based freight bookings.",
    strategy: [
      "Designed a cohesive corporate identity system bridging professional enterprise trust with driver-friendly mobile touchpoints.",
      "Launched direct cold outreach and field representation targeting manufacturing hubs and distribution centers across Kathmandu Valley.",
      "Crafted performance marketing collateral, fleet livery, and B2B presentations detailing operational ROI and GPS transparency."
    ],
    deliverables: [
      "Full B2B Brand Identity & Collateral Kit",
      "Field Outreach Playbook & Cold Pitch Script",
      "Digital Freight Portal UI/UX Advisory",
      "CAC & Fleet Utilization Tracking Framework"
    ],
    metrics: [
      { label: "B2B Onboarding", value: "Enterprise Scale" },
      { label: "Commercial Deals", value: "Verified Active" },
      { label: "Brand Presence", value: "Unified 360°" }
    ]
  },
  {
    id: "softwarica-growth",
    title: "Educational Brand Positioning & 20%+ Admissions Inquiries Growth",
    client: "Softwarica College of IT & E-Commerce (Coventry Univ Partner)",
    category: "Campus & Growth",
    period: "2025 - 2026",
    heroImage: softwaricaImage,
    summary: "Orchestrated multi-channel academic marketing campaigns, 100+ monthly counseling sessions, and large-scale IT career summits to fuel institutional recruitment.",
    problem: "Intense competitive pressure from dozens of local and foreign-affiliated IT colleges required differentiated marketing demonstrating real career outcomes.",
    strategy: [
      "Built semester-based promotional event roadmaps highlighting real student software startups and British degree prestige.",
      "Executed 10+ high-engagement campus seminars and 15+ school visits engaging over 200+ parent/student stakeholders directly.",
      "Combined organic TikTok and Instagram student spotlight reels with targeted Google Search campaigns for computer science degrees."
    ],
    deliverables: [
      "5+ Marketing Campaigns Per Semester",
      "100+ Monthly 1-on-1 Student Guidance Sessions",
      "10+ Career & Technology Outreach Seminars",
      "Institutional Relationship Network with 200+ Stakeholders"
    ],
    metrics: [
      { label: "Inquiry Growth", value: "+20% YoY" },
      { label: "Monthly Sessions", value: "100+ Students" },
      { label: "Seminars Executed", value: "10+ Annual" }
    ]
  },
  {
    id: "digital-performance-ads",
    title: "Multi-Brand Paid Performance, Lead Generation & SEO Optimization",
    client: "Chautari Digitals & The Blessing Abroad Study",
    category: "Paid Ads & SEO",
    period: "2023 - 2025",
    heroImage: digitalAdsImage,
    summary: "Engineered scalable Meta and Google Ads lead acquisition funnels combined with technical on-page SEO to drive high-intent student and customer inquiries.",
    problem: "Rising ad cost-per-click (CPC) and poor landing page conversion rates were draining marketing budgets without generating qualified sales leads.",
    strategy: [
      "Restructured ad account architecture with segmented retargeting pools and hyper-targeted audience interests.",
      "Revamped landing page copy and metadata structure for core transactional keywords, lifting organic search indexation.",
      "Instituted rigorous A/B testing on ad creatives (carousel vs video reels) and integrated automated lead alerts for prompt counseling follow-ups."
    ],
    deliverables: [
      "Google Search & Meta Ad Campaign Buildouts",
      "Comprehensive On-Page SEO Keyword Audits",
      "Team Coaching for 4 Digital Specialists",
      "Bi-Weekly Client ROI & ROAS Dashboards"
    ],
    metrics: [
      { label: "Avg Engagement Lift", value: "+30%" },
      { label: "SEO Organic Visibility", value: "Page 1 Ranks" },
      { label: "Client Accounts", value: "5+ Managed" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Digital Marketing & Technical SEO",
    description: "Holistic organic and algorithmic search optimization to capture organic high-intent demand.",
    items: [
      { name: "Search Engine Optimization (SEO)", level: 92, tags: ["On-Page", "Technical", "Keyword Strategy"] },
      { name: "Content Strategy & Editorial Planning", level: 90, tags: ["Editorial", "Calendars", "Tone of Voice"] },
      { name: "Website Traffic Monitoring & GA4", level: 88, tags: ["Google Analytics", "Search Console", "UTM Tracking"] },
      { name: "Conversion Rate Optimization (CRO)", level: 85, tags: ["Landing Pages", "A/B Testing", "Funnel Analysis"] }
    ]
  },
  {
    title: "Performance Advertising & Growth",
    description: "Paid acquisition campaigns engineered for positive ROAS, lower CAC, and qualified conversions.",
    items: [
      { name: "Meta Ads Manager (FB & IG)", level: 92, tags: ["Lead Forms", "Lookalikes", "Retargeting"] },
      { name: "Google Ads (Search & Display)", level: 85, tags: ["Intent Search", "Keyword Match", "Bidding"] },
      { name: "Campaign Analytics & ROI Tracking", level: 90, tags: ["ROAS", "CAC Analysis", "Attribution"] },
      { name: "Social Media Channel Strategy", level: 94, tags: ["TikTok", "Instagram", "LinkedIn", "YouTube"] }
    ]
  },
  {
    title: "UI/UX Design & Front-End Web",
    description: "Fusing visual design aesthetics with clean HTML structure for high-converting digital touchpoints.",
    items: [
      { name: "Figma & Wireframing", level: 86, tags: ["Prototypes", "Design Systems", "Component Hierarchies"] },
      { name: "HTML5 / CSS3 & Responsive Layouts", level: 84, tags: ["Semantic Markup", "Mobile First", "Core Web Vitals"] },
      { name: "Brand Guidelines & Identity Design", level: 90, tags: ["Typography", "Color Palettes", "Collateral"] },
      { name: "Multimedia Creative Direction", level: 88, tags: ["Posters", "Social Reels", "Promotional Decks"] }
    ]
  },
  {
    title: "Business Development & Team Leadership",
    description: "Cross-functional team coordination, enterprise client relationship management, and sales pipeline conversion.",
    items: [
      { name: "Creative Team Mentorship (Up to 10 members)", level: 92, tags: ["Workflow Streamlining", "Quality Control"] },
      { name: "Strategic Cold Outreach & Calling", level: 88, tags: ["Pipeline Building", "Prospecting", "Objection Handling"] },
      { name: "Client Proposal Closing & Relationship Mgmt", level: 90, tags: ["Commercial Terms", "Presentations"] },
      { name: "CRM Software & Pipeline Management", level: 86, tags: ["Lead Tracking", "Lifecycle Nurturing"] }
    ]
  }
];

export const EDUCATION_DATA = [
  {
    degree: "BSc (Hons) in Information Technology (BSc IT)",
    institution: "Softwarica College of IT and E-Commerce",
    university: "Coventry University, England, UK",
    year: "Graduated November, 2025",
    grade: "62.7% (Upper Second-Class equivalent)",
    details: "Specialized in software engineering fundamentals, database systems, web technologies, and human-computer interaction (HCI)."
  },
  {
    degree: "Intermediate (+2 Science)",
    institution: "Trinity International SS / College",
    university: "National Examinations Board (NEB), Nepal Government",
    year: "Completed April, 2022",
    grade: "CGPA 3.14",
    details: "Core focus on physics, mathematics, and analytical problem solving."
  },
  {
    degree: "SLC / SEE (10th)",
    institution: "Occidental Public School",
    university: "National Examinations Board (NEB), Nepal Government",
    year: "Completed April, 2020",
    grade: "CGPA 3.9 (Distinction)",
    details: "Exceptional academic record with focus on science, mathematics, and computer literacy."
  }
];

export const CERTIFICATIONS = [
  {
    title: "The Fundamentals of Digital Marketing (3 Months)",
    issuer: "Chautari Digitals",
    date: "May, 2024",
    skills: ["SEO Strategies", "Social Media Advertising", "Lead Funnel Architecture", "Analytics Tracking"]
  }
];

export const LANGUAGES = [
  { name: "English", level: "Professional Fluency", proficiency: "Reading, Speaking, Writing, Listening (Excellent)" },
  { name: "Nepali", level: "Native / Bilingual", proficiency: "Reading, Speaking, Writing, Listening (Excellent)" },
  { name: "Hindi", level: "Fluent", proficiency: "Reading, Speaking, Writing, Listening (Excellent)" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "modern-seo-playbook",
    title: "The Modern SEO Playbook: Semantic Search, Information Gain & Core Web Vitals",
    excerpt: "How search algorithms have evolved beyond keyword stuffing to prioritize entities, content originality, and millisecond-level frontend rendering speed.",
    category: "SEO & Organic Growth",
    readTime: "5 min read",
    publishedDate: "October, 2026",
    coverImage: "/src/assets/images/blog_seo_strategy_1792385872424.jpg",
    tags: ["Technical SEO", "Core Web Vitals", "Semantic Search", "Schema.org"],
    content: {
      lead: "Organic search ranking in 2026 is no longer about matching exact keyword strings. Today's search engines operate on knowledge graphs, topical authority maps, and user experience telemetry.",
      sections: [
        {
          heading: "1. Moving from Keywords to Entities & Topical Breadth",
          body: [
            "Modern search engines understand the relationships between concepts, businesses, and people rather than merely counting query frequencies.",
            "To dominate transactional search queries (e.g., commercial logistics or educational admissions), your content must answer not just the primary question, but the implicit follow-up decisions a prospective client must navigate.",
            "Implementing clean Schema.org structured data (like Person, Organization, and Service graphs) establishes verifiable entity credibility across search crawlers."
          ],
          keyTakeaway: "Map out the complete buyer question journey rather than writing isolated articles around a single search query."
        },
        {
          heading: "2. The Critical Link Between Frontend Speed and Organic Visibility",
          body: [
            "Search engines penalize pages that frustrate mobile users with heavy layout shifts, sluggish input delays, or unoptimized images.",
            "Targeting an LCP (Largest Contentful Paint) under 1.2s and CLS (Cumulative Layout Shift) at 0.00 is not merely an engineering preference—it directly protects your crawl budget and boosts organic bounce-rate metrics.",
            "Using semantic HTML5 elements (main, article, header) helps search crawlers index content hierarchy with zero confusion."
          ],
          keyTakeaway: "Fast loading speed is your strongest on-page conversion rate optimizer."
        },
        {
          heading: "3. Generating Real 'Information Gain'",
          body: [
            "With millions of generic AI-generated articles flooding the web, search algorithms now reward verified personal experience, real client case studies, and proprietary campaign metrics.",
            "Content that includes authentic case summaries, team workflows, and verifiable outcomes consistently outranks surface-level rehashed listicles."
          ],
          keyTakeaway: "Always anchor your articles in tangible projects, real client outcomes, and verifiable data."
        }
      ]
    }
  },
  {
    id: "meta-google-ad-funnels",
    title: "From Cold Scroll to Qualified Inbound: Architecting Paid Lead Funnels That Convert",
    excerpt: "Why 80% of digital advertising budgets leak at the post-click transition, and how to structure retargeting loops with friction-free lead capture.",
    category: "Performance & Ads",
    readTime: "6 min read",
    publishedDate: "September, 2026",
    coverImage: "/src/assets/images/blog_paid_ads_funnel_1792385872670.jpg",
    tags: ["Meta Ads", "Google Ads", "Lead Generation", "CRO & CAC"],
    content: {
      lead: "Acquiring clicks is easy; turning those clicks into commercial revenue requires disciplined audience segmentation and rapid response automation.",
      sections: [
        {
          heading: "1. Aligning Intent: Search Capture vs. Social Discovery",
          body: [
            "Google Ads captures high-intent demand from users actively looking for immediate solutions (e.g. 'freight transport Kathmandu' or 'IT degree admissions').",
            "Meta and TikTok Ads, on the other hand, generate discovery by presenting visual storytelling and student/client transformations to audiences who aren't actively searching yet.",
            "The most resilient growth strategy combines Google Search for immediate conversion with Meta reels/carousels to seed the pipeline for retargeting."
          ],
          keyTakeaway: "Separate capture channels from discovery channels to avoid misallocating ad budget."
        },
        {
          heading: "2. Eliminating the Post-Click Drop-Off",
          body: [
            "The biggest reason for high CAC (Customer Acquisition Cost) is a disconnect between the ad creative and the landing page destination.",
            "If an ad highlights 'Scholarship Counseling', the destination page must immediately present that exact counseling booking form within the initial mobile viewport—never force the user to hunt through unrelated menus.",
            "Reducing form fields to essential identifiers (Name, WhatsApp/Phone, Primary Goal) lifted conversion rates by up to 28% in our tests."
          ],
          keyTakeaway: "Match headline, promise, and form field count directly to the user's initial click intent."
        },
        {
          heading: "3. Speed-to-Contact and CRM Lifecycle Nurturing",
          body: [
            "A lead contacted within 15 minutes of submitting an inquiry is 7x more likely to convert than one contacted after 2 hours.",
            "Integrating instant WhatsApp and automated email alerts directly to counseling or sales teams ensures zero leads go cold."
          ],
          keyTakeaway: "Lead generation without instant follow-up workflows is wasted marketing capital."
        }
      ]
    }
  },
  {
    id: "b2b-brand-positioning",
    title: "Building High-Trust Brand Positioning in Developing B2B Industrial Markets",
    excerpt: "Lessons learned while scaling freight logistics platforms and tech colleges: turning fragmented offline networks into engaged brand advocates.",
    category: "Brand Strategy",
    readTime: "4 min read",
    publishedDate: "August, 2026",
    coverImage: "/src/assets/images/blog_b2b_brand_positioning_1792385872838.jpg",
    tags: ["B2B Branding", "Market Strategy", "Client Retention", "Outreach"],
    content: {
      lead: "In markets where commercial transactions traditionally rely on informal verbal agreements, introducing a digital platform demands deep empathy, clear brand governance, and boots-on-the-ground proof.",
      sections: [
        {
          heading: "1. Solving the Trust Deficit First",
          body: [
            "Enterprise shippers and factory owners rarely adopt an app simply because of modern UI; they adopt it because of financial security, punctuality, and verified vehicle placement.",
            "Branding materials must emphasize operational safeguards, insurance guarantees, and clear pricing transparency above tech buzzwords."
          ],
          keyTakeaway: "Frame your platform around risk reduction and financial clarity rather than purely technical features."
        },
        {
          heading: "2. Unifying Offline Collateral with Digital Touchpoints",
          body: [
            "B2B decision-makers still hold printed brochures, corporate pitch decks, and attend industry expos.",
            "By ensuring consistent typography, vehicle livery, and uniform slide decks across field representatives, the brand establishes an institutional presence that outlasts transactional cold calls."
          ],
          keyTakeaway: "Brand consistency across offline physical meetings and mobile apps compounds trust exponentially."
        },
        {
          heading: "3. The Synergy Between Cold Calling and Brand Recognition",
          body: [
            "Cold calls are infinitely more productive when the prospect has already seen your company's sponsored posts, trade event presence, or industry case studies.",
            "Branding and sales development must operate as two gears of the same machine."
          ],
          keyTakeaway: "Targeted brand awareness warms up cold sales outreach and doubles close rates."
        }
      ]
    }
  },
  {
    id: "education-marketing-nepal",
    title: "Scaling Higher-Ed Admissions: How Story-Driven Content Marketing Drove +20% Growth",
    excerpt: "Case analysis on building high-converting content ecosystems across TikTok, Meta, and campus expos to turn prospective applicants into enrolled students.",
    category: "Content Marketing",
    readTime: "5 min read",
    publishedDate: "July, 2026",
    coverImage: "/src/assets/images/education_marketing_campaign_1792384748730.jpg",
    tags: ["Higher Education", "Student Storytelling", "Content Strategy", "Conversion Funnels"],
    content: {
      lead: "When students decide on their higher education, they do not merely purchase a curriculum; they invest in a future identity. Marketing must shift from institutional brochures to student-centric narrative proof.",
      sections: [
        {
          heading: "1. Micro-Content That Solves Career Anxiety",
          body: [
            "Prospective students and parents look for tangible proof that graduating will lead to real-world employment and recognized international credentials.",
            "Short-form alumni spotlight reels and real-time lab project demonstrations generated 3x higher engagement than static graphic announcements.",
            "Publishing transparent graduate salary outcomes and international credit-transfer stories built immediate trust with skeptical parents."
          ],
          keyTakeaway: "Address parental career anxiety directly with verified alumni proof and hands-on curriculum demonstrations."
        },
        {
          heading: "2. The Multi-Channel Content Calendar",
          body: [
            "Different demographics require tailored narrative angles: TikTok and Instagram Reels for student aspirational campus life, Facebook community groups for parents, and LinkedIn for faculty and industry partnership credibility.",
            "Synchronizing digital content drops with seasonal school exam dates and graduation ceremonies doubled direct inquiry volume during peak admissions windows."
          ],
          keyTakeaway: "Segment content formats strictly by generational audience: aspirational reels for students, institutional proof for parents."
        }
      ]
    }
  }
];

export const GROWTH_ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    id: 'milestone-discovery',
    stepNumber: '01',
    phase: 'Phase 01',
    phaseNe: 'चरण ०१',
    stageName: 'Discovery & Growth Diagnostic',
    stageNameNe: 'खोज तथा वृद्धि विश्लेषण',
    title: 'Comprehensive Brand Audit & Footprint Benchmark',
    titleNe: 'समग्र ब्रान्ड अडिट र बजार विश्लेषण',
    timeline: 'Weeks 1–2',
    timelineNe: 'हप्ता १–२',
    category: 'discovery',
    tags: ['full-funnel', 'seo', 'paid'],
    summary: 'A forensic audit of your existing digital assets, technical SEO health, competitor positioning, and customer acquisition cost (CAC) leaks.',
    summaryNe: 'तपाईंको अवस्थित डिजिटल उपस्थिति, प्राविधिक एसईओ स्वास्थ्य, प्रतिस्पर्धी स्थिति र बजेट चुहावटको गहिरो अडिट।',
    objectives: [
      {
        en: 'Perform a full-site technical SEO crawl to uncover indexation blockers, schema gaps, and Core Web Vitals latency.',
        ne: 'इन्डेक्सेसन समस्याहरू, स्किमा त्रुटिहरू र वेबसाइट गतिको पूर्ण प्राविधिक एसईओ परीक्षण।'
      },
      {
        en: 'Analyze competitor share of search, active advertising creatives, and messaging differentiators in regional/global markets.',
        ne: 'प्रतिस्पर्धीहरूको विज्ञापन शैली, खोजी बजार हिस्सा र ब्रान्डिङ भिन्नताहरूको तुलनात्मक विश्लेषण।'
      },
      {
        en: 'Establish baseline conversion metrics, customer acquisition cost (CAC), and historical inquiry drop-offs.',
        ne: 'हालको ग्राहक प्राप्ति लागत (CAC), रूपान्तरण दर र सोधपुछ चुहावटको आधारभूत मापन।'
      }
    ],
    deliverables: [
      {
        en: '45-Point Technical SEO & Performance Health Audit',
        ne: '४५-बुँदे प्राविधिक एसईओ र वेबसाइट गति अडिट'
      },
      {
        en: 'Competitor Digital Footprint & Gap Analysis Matrix',
        ne: 'प्रतिस्पर्धी डिजिटल उपस्थिति तथा बजार अवसर म्याट्रिक्स'
      },
      {
        en: 'High-Value Inbound Persona & Acquisition Bottleneck Map',
        ne: 'लक्षित ग्राहक प्रोफाइल र मुख्य अवरोधहरूको नक्सा'
      }
    ],
    targetKpis: [
      {
        label: 'Crawl Coverage',
        labelNe: 'अडिट कभरेज',
        value: '100%',
        context: 'Complete discovery index of all public URLs & landing pages',
        contextNe: 'सबै वेबपेज र ल्यान्डिङ पृष्ठहरूको पूर्ण विश्लेषण'
      },
      {
        label: 'Bottlenecks Identified',
        labelNe: 'पहिचान भएका अवरोध',
        value: '12+',
        context: 'Actionable friction points across mobile, form, and page load',
        contextNe: 'फारम, मोबाइल गति र युजर अनुभवमा सुधारयोग्य कमजोरी'
      },
      {
        label: 'Audit Diagnostic Score',
        labelNe: 'अडिट स्कोर',
        value: 'Baseline',
        context: 'Documented benchmark before strategic intervention begins',
        contextNe: 'रणनीतिक सुधार अघिको प्रमाणीकरण बेन्चमार्क'
      }
    ],
    toolsUsed: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Hotjar', 'Google Analytics 4'],
    clientActionItem: {
      en: 'Grant analytics & ad account view access; participate in one 45-minute strategic discovery interview.',
      ne: 'एनालिटिक्स र विज्ञापन खाताको अवलोकन अनुमति प्रदान गर्ने; ४५ मिनेटको रणनीतिक छलफलमा भाग लिने।'
    },
    deliverablePreview: {
      badge: 'Deliverable 01',
      badgeNe: 'नतिजा ०१',
      title: 'Growth Diagnostic & Tech Audit Report',
      titleNe: 'ग्रोथ डायग्नोस्टिक र टेक अडिट प्रतिवेदन',
      summary: 'Executive brief detailing exact crawl errors, speed bottlenecks, keyword cannibalization, and competitor cost inefficiencies.',
      summaryNe: 'प्राविधिक त्रुटि, गति समस्या, किवर्ड अवसर र प्रतिस्पर्धी विश्लेषण समेटिएको संक्षिप्त प्रतिवेदन।',
      metricProof: 'Zero speculative assumptions—grounded in real crawl logs.'
    }
  },
  {
    id: 'milestone-strategy',
    stepNumber: '02',
    phase: 'Phase 02',
    phaseNe: 'चरण ०२',
    stageName: 'Strategic Architecture & Positioning',
    stageNameNe: 'रणनीतिक संरचना तथा ब्रान्डिङ',
    title: 'Value Proposition & Semantic Search Blueprint',
    titleNe: 'मूल्य प्रस्ताव र सिमान्टिक सर्च योजना',
    timeline: 'Weeks 3–4',
    timelineNe: 'हप्ता ३–४',
    category: 'strategy',
    tags: ['full-funnel', 'seo'],
    summary: 'Engineering a differentiated brand positioning narrative that commands premium authority, coupled with high-intent semantic keyword clustering.',
    summaryNe: 'बजारमा प्रतिस्पर्धाबाट पृथक देखाउने ब्रान्ड पहिचान र उच्च-खरिद सम्भावना भएका किवर्ड समूहहरूको रणनीति।',
    objectives: [
      {
        en: 'Formulate defensible brand positioning pillars that solve customer anxiety and eliminate price-driven resistance.',
        ne: 'ग्राहकको विश्वास जित्ने र मूल्यको तुलना रोक्ने सशक्त ब्रान्डिङ आधार तयार पार्ने।'
      },
      {
        en: 'Cluster high-intent commercial keywords across search volume, intent difficulty, and conversion probability.',
        ne: 'व्यावसायिक महत्त्व भएका किवर्डहरूको समूह निर्माण र प्राथमिकता निर्धारण।'
      },
      {
        en: 'Architect the complete customer decision journey from initial curiosity to qualified sales conversation.',
        ne: 'सोधपुछदेखि खरिद निर्णयसम्मको ग्राहक यात्रा र अनुभवको खाका कोर्ने।'
      }
    ],
    deliverables: [
      {
        en: 'Brand Architecture & Messaging Guide (Core Differentiators)',
        ne: 'ब्रान्ड पहिचान तथा मुख्य सन्देश निर्देशिका'
      },
      {
        en: 'Semantic SEO Architecture & Topic Cluster Roadmap (30+ High-Intent Keywords)',
        ne: 'सिमान्टिक एसईओ किवर्ड संरचना तथा कन्टेन्ट तालिका'
      },
      {
        en: 'Full-Funnel Conversion Wireframe UX Schematics (Figma)',
        ne: 'युजर अनुभव (UX) र रूपान्तरण वायरफ्रेम (Figma)'
      }
    ],
    targetKpis: [
      {
        label: 'Keyword Clusters',
        labelNe: 'किवर्ड क्लस्टर',
        value: '30+',
        context: 'High-intent commercial terms mapped to targeted landing pages',
        contextNe: 'ल्यान्डिङ पृष्ठहरूका लागि लक्षित व्यावसायिक किवर्डहरू'
      },
      {
        label: 'Funnel Wireframes',
        labelNe: 'वायरफ्रेम डिजाइन',
        value: '3 Flows',
        context: 'Desktop, tablet, and mobile optimized conversion routes',
        contextNe: 'मोबाइल, ट्याब्लेट र डेस्कटपका लागि ३ अनुकूलित रूपान्तरण मार्ग'
      },
      {
        label: 'Expected Conversion Lift',
        labelNe: 'अनुमानित रूपान्तरण वृद्धि',
        value: '+25–35%',
        context: 'Modelled conversion uplift from streamlined value architecture',
        contextNe: 'स्पष्ट मूल्य सन्देशबाट सम्भावित रूपान्तरण सुधार'
      }
    ],
    toolsUsed: ['Figma', 'SEMrush', 'Notion', 'Miro', 'Google Keyword Planner'],
    clientActionItem: {
      en: 'Review and approve core brand value propositions, messaging pillars, and target keyword clusters.',
      ne: 'ब्रान्डका मुख्य सन्देश, मूल्य प्रस्ताव र किवर्ड योजनाको समीक्षा र स्वीकृति।'
    },
    deliverablePreview: {
      badge: 'Deliverable 02',
      badgeNe: 'नतिजा ०२',
      title: 'Brand Positioning & Semantic Roadmap',
      titleNe: 'ब्रान्डिङ तथा सिमान्टिक सर्च रोडम्याप',
      summary: 'Complete Figma wireframe system and editorial calendar designed to capture ready-to-buy searchers.',
      summaryNe: 'खरिद गर्न तयार ग्राहकहरूलाई आकर्षित गर्ने फिग्मा वायरफ्रेम र कन्टेन्ट तालिका।',
      metricProof: 'Addresses customer pain points before sales objection arises.'
    }
  },
  {
    id: 'milestone-production',
    stepNumber: '03',
    phase: 'Phase 03',
    phaseNe: 'चरण ०३',
    stageName: 'Funnel Build & Creative Production',
    stageNameNe: 'फनेल निर्माण तथा सिर्जना',
    title: 'High-Converting Landing Pages & Creative Asset Suite',
    titleNe: 'प्रभावकारी ल्यान्डिङ पृष्ठ तथा विज्ञापन सामग्री निर्माण',
    timeline: 'Weeks 5–6',
    timelineNe: 'हप्ता ५–६',
    category: 'production',
    tags: ['full-funnel', 'paid', 'seo'],
    summary: 'Developing sub-second responsive landing pages, crafting high-CTR ad creative variants, and configuring bulletproof attribution tracking.',
    summaryNe: 'छिटो खुल्ने ल्यान्डिङ पृष्ठहरू, आकर्षक विज्ञापन भिडियो तथा ग्राफिक्स र सटीक रूपान्तरण ट्र्याकिङको स्थापना।',
    objectives: [
      {
        en: 'Code responsive landing pages with sub-second LCP speed, WCAG contrast, and frictionless WhatsApp / lead forms.',
        ne: 'द्रुत गतिमा खुल्ने मोबाइल-मैत्री ल्यान्डिङ पृष्ठहरू र सहज फारम/ह्वाट्सएप बटन निर्माण।'
      },
      {
        en: 'Produce 15+ ad creative variations (video reels, carousels, display banners) tailored to pain-point triggers.',
        ne: '१५+ विज्ञापन भिडियो र ब्यानरहरू निर्माण गरी विभिन्न ग्राहक भावनालाई सम्बोधन गर्ने।'
      },
      {
        en: 'Deploy server-side Meta Conversions API (CAPI) and GA4 enhanced measurement for 100% data fidelity.',
        ne: 'मेटा रूपान्तरण एपीआई (CAPI) र गुगल एनालिटिक्स ४ मार्फत १००% भरपर्दो डेटा ट्र्याकिङ।'
      }
    ],
    deliverables: [
      {
        en: 'Modular High-Converting Landing Page Ecosystem (<1s Load Time)',
        ne: '१ सेकेन्डभन्दा कममा खुल्ने उच्च-रूपान्तरण ल्यान्डिङ पृष्ठ'
      },
      {
        en: '15+ Creative Ad Variations (Reels, Static Carousels, Search Headlines)',
        ne: '१५+ सिर्जनशील विज्ञापन सामग्री (भिडियो, क्यारोसेल, सर्च कपी)'
      },
      {
        en: 'End-to-End Tracking Architecture (Meta CAPI, GA4 Events, CRM Webhooks)',
        ne: 'पूर्ण डेटा ट्र्याकिङ प्रणाली (CAPI, GA4, CRM इन्टिग्रेशन)'
      }
    ],
    targetKpis: [
      {
        label: 'Page Speed (LCP)',
        labelNe: 'पृष्ठ गति (LCP)',
        value: '<0.9s',
        context: 'Sub-second Largest Contentful Paint ensuring zero bounce drop-off',
        contextNe: 'शून्य ड्रप-अफ सुनिश्चित गर्न १ सेकेन्डभन्दा छिटो लोड गति'
      },
      {
        label: 'Creative Variants',
        labelNe: 'विज्ञापन भेरिएन्ट',
        value: '18 Assets',
        context: 'Diverse hooks, social proof reels, and commercial benefit cards',
        contextNe: 'विविध हुक, भिडियो र ग्राहक सफलताका प्रमाणहरू'
      },
      {
        label: 'Event Match Quality',
        labelNe: 'डेटा म्याच गुणस्तर',
        value: '9.2 / 10',
        context: 'Meta Conversions API score for optimal ad algorithm targeting',
        contextNe: 'मेटा विज्ञापन एल्गोरिदमका लागि उच्च गुणस्तरको डेटा मिलान'
      }
    ],
    toolsUsed: ['Meta Ads Manager', 'Google Tag Manager', 'Canva Pro', 'Tailwind CSS', 'CapCut Pro'],
    clientActionItem: {
      en: 'Approve final visual assets and ensure designated sales/intake team is set up to receive incoming leads.',
      ne: 'अन्तिम विज्ञापन सामग्री स्वीकृत गर्ने र सोधपुछ सम्हाल्ने टिम तयार राख्ने।'
    },
    deliverablePreview: {
      badge: 'Deliverable 03',
      badgeNe: 'नतिजा ०३',
      title: 'Production Assets & Attribution Suite',
      titleNe: 'उत्पादन सामग्री र डेटा ट्र्याकिङ प्रणाली',
      summary: 'Battle-tested landing pages, short-form reels, and verified pixel/server routing ready for launch.',
      summaryNe: 'प्रमाणित ल्यान्डिङ पृष्ठहरू, छोटो भिडियोहरू र पूर्ण ट्र्याकिङ प्रणाली लन्चका लागि तयार।',
      metricProof: 'Engineered for sub-second speeds and zero drop-off.'
    }
  },
  {
    id: 'milestone-launch',
    stepNumber: '04',
    phase: 'Phase 04',
    phaseNe: 'चरण ०४',
    stageName: 'Precision Multi-Channel Launch',
    stageNameNe: 'सटीक मल्टि-च्यानल लन्च',
    title: 'Synchronized Paid Deployment & Organic Pillar Indexing',
    titleNe: 'विज्ञापन सुरु र अर्गानिक सामग्री प्रकाशन',
    timeline: 'Weeks 7–8',
    timelineNe: 'हप्ता ७–८',
    category: 'launch',
    tags: ['full-funnel', 'paid', 'seo'],
    summary: 'Deploying targeted paid campaigns across Google Search & Meta, publishing indexable SEO pillar articles, and monitoring early lead velocity.',
    summaryNe: 'गुगल र मेटा विज्ञापन सुरु गर्ने, एसईओ सामग्री प्रकाशित गर्ने र सोधपुछको गति नजिकबाट अनुगमन गर्ने।',
    objectives: [
      {
        en: 'Activate high-intent Google Search ad groups and Meta lookalike/interest funnels with tightly budgeted dayparting.',
        ne: 'गुगल सर्च विज्ञापन र मेटा अडियन्स क्याम्पेन सुरु गरी बजेटको सही सदुपयोग गर्ने।'
      },
      {
        en: 'Publish core SEO pillar articles with JSON-LD schema markup, canonical tags, and internal link routing.',
        ne: 'गुगलमा छिट्टै इन्डेक्स हुने गरी स्किमा सहितका मुख्य एसईओ लेखहरू प्रकाशित गर्ने।'
      },
      {
        en: 'Streamline lead handoff to sales/admissions counselors within a strict 10-minute turnaround protocol.',
        ne: 'आएका सोधपुछहरूलाई १० मिनेटभित्र परामर्शदाता वा सेल्स टिमसँग जोड्ने व्यवस्था।'
      }
    ],
    deliverables: [
      {
        en: 'Multi-Channel Live Ad Campaigns (Google Search, Meta Ads, TikTok)',
        ne: 'गुगल, मेटा र टिकटकमा सक्रिय विज्ञापन अभियान'
      },
      {
        en: 'Indexed Pillar SEO Articles (Fully Crawled & Ranked in SERPs)',
        ne: 'गुगलमा सर्च इन्डेक्स भएका मुख्य एसईओ सामग्री'
      },
      {
        en: 'Executive Real-Time Telemetry Dashboard (Looker Studio / Live KPIs)',
        ne: 'प्रत्यक्ष तथ्याङ्क देखाउने लाइभ ड्यासबोर्ड'
      }
    ],
    targetKpis: [
      {
        label: 'Inbound Inquiries',
        labelNe: 'सोधपुछ संख्या',
        value: '72h Window',
        context: 'First qualified inquiries generated within 72 hours of campaign activation',
        contextNe: 'अभियान सुरु भएको ७२ घण्टाभित्र पहिलो योग्य सोधपुछ'
      },
      {
        label: 'Click-Through Rate (CTR)',
        labelNe: 'क्लिक दर (CTR)',
        value: '>3.8%',
        context: 'Search ad click-through rate vs 1.9% regional industry average',
        contextNe: 'उद्योग औसतभन्दा दोब्बर उच्च क्लिक दर'
      },
      {
        label: 'Speed-to-Lead Response',
        labelNe: 'प्रतिक्रिया समय',
        value: '<10 min',
        context: 'Direct WhatsApp/phone connection increasing appointment show-rates',
        contextNe: '१० मिनेटभित्र सम्पर्क गर्दा भेटघाट दरमा व्यापक सुधार'
      }
    ],
    toolsUsed: ['Google Ads', 'Meta Business Suite', 'Looker Studio', 'Supermetrics', 'WhatsApp Business API'],
    clientActionItem: {
      en: 'Track incoming inquiry quality daily and submit 10-minute counseling feedback logs.',
      ne: 'दैनिक प्राप्त सोधपुछको गुणस्तर अनुगमन गर्ने र प्रतिक्रिया उपलब्ध गराउने।'
    },
    deliverablePreview: {
      badge: 'Deliverable 04',
      badgeNe: 'नतिजा ०४',
      title: 'Active Campaigns & Real-Time Telemetry',
      titleNe: 'सक्रिय अभियान र प्रत्यक्ष तथ्याङ्क ड्यासबोर्ड',
      summary: 'Live looker studio dashboard and synchronized paid ad distribution across target buyer demographics.',
      summaryNe: 'लक्षित ग्राहकहरूका लागि प्रत्यक्ष विज्ञापन प्रदर्शन र दैनिक नतिजा ड्यासबोर्ड।',
      metricProof: 'Generating qualified leads within 72 hours of deployment.'
    }
  },
  {
    id: 'milestone-cro',
    stepNumber: '05',
    phase: 'Phase 05',
    phaseNe: 'चरण ०५',
    stageName: 'Conversion Rate Optimization (CRO)',
    stageNameNe: 'रूपान्तरण दर सुधार (CRO)',
    title: 'A/B Variant Testing & CAC Compression',
    titleNe: 'ए/बी परीक्षण र ग्राहक प्राप्ति लागत (CAC) कटौती',
    timeline: 'Weeks 9–10',
    timelineNe: 'हप्ता ९–१०',
    category: 'cro',
    tags: ['full-funnel', 'paid'],
    summary: 'Iterative split testing of headlines, social proof placements, and friction points to slash Customer Acquisition Cost by 25–35%.',
    summaryNe: 'हेडलाइन, समीक्षा र फारमका विभिन्न रूपहरू परीक्षण गरेर प्रति-ग्राहक लागत २५–३५% घटाउने प्रक्रिया।',
    objectives: [
      {
        en: 'Deploy statistical A/B tests on landing page headlines, form fields, and trust badges to maximize conversion yield.',
        ne: 'रूपान्तरण बढाउन विभिन्न हेडलाइन, फारम र विश्वसनीयता ब्यानरहरूको ए/बी परीक्षण गर्ने।'
      },
      {
        en: 'Examine behavioral heatmaps and session recordings to locate drop-off dropouts and rage-click barriers.',
        ne: 'प्रयोगकर्ताको व्यवहार र स्क्रोलिङ नक्सा हेरेर अनावश्यक झन्झटहरू हटाउने।'
      },
      {
        en: 'Shift ad campaign bidding models to Maximize Conversions with algorithmic Target CPA constraints.',
        ne: 'न्यूनतम लागतमा धेरै सोधपुछ ल्याउन स्मार्ट विज्ञापन बिडिङ मोडेल लागू गर्ने।'
      }
    ],
    deliverables: [
      {
        en: 'Statistical A/B Split Test Winner Implementation',
        ne: 'सफल भएको ए/बी परीक्षण भेरिएन्टको स्थायी कार्यान्वयन'
      },
      {
        en: 'Behavioral Heatmap Friction Elimination Report',
        ne: 'प्रयोगकर्ता व्यवहार र अवरोध निवारण प्रतिवेदन'
      },
      {
        en: 'Retargeting Architecture for Unconverted High-Intent Visitors',
        ne: 'सोधपुछ नगरी फर्किएकाहरूलाई पुनः आकर्षित गर्ने विज्ञापन'
      }
    ],
    targetKpis: [
      {
        label: 'CAC Reduction',
        labelNe: 'लागत कटौती (CAC)',
        value: '-28.4%',
        context: 'Measured drop in cost per acquired customer or enrolled student',
        contextNe: 'प्रति ग्राहक प्राप्ति लागतमा २८% भन्दा बढी बचत'
      },
      {
        label: 'Conversion Rate',
        labelNe: 'रूपान्तरण दर',
        value: '+32.6%',
        context: 'Lift in completed consultation bookings from identical ad traffic',
        contextNe: 'उही विज्ञापन बजेटबाट ३२% बढी परामर्श बुकिङ'
      },
      {
        label: 'Retargeting ROAS',
        labelNe: 'रिटार्गेटिङ प्रतिफल',
        value: '4.8x',
        context: 'Return on ad spend for mid-funnel remarketing audiences',
        contextNe: 'पुनः विज्ञापनबाट प्राप्त असाधारण प्रतिफल'
      }
    ],
    toolsUsed: ['Microsoft Clarity', 'Hotjar', 'Google Optimize / VWO', 'Meta Conversion API'],
    clientActionItem: {
      en: 'Review bi-weekly optimization findings and sign off on rolling winning creative iterations.',
      ne: 'पाक्षिक सुधार प्रतिवेदन हेर्ने र सफल विज्ञापन भेरिएन्टहरू अनुमोदन गर्ने।'
    },
    deliverablePreview: {
      badge: 'Deliverable 05',
      badgeNe: 'नतिजा ०५',
      title: 'CRO Performance & CAC Compression Log',
      titleNe: 'सीआरओ नतिजा र लागत न्यूनीकरण लग',
      summary: 'Data-backed record of tested variations, winning layouts, and permanent cost efficiency gains.',
      summaryNe: 'परीक्षण गरिएका ढाँचाहरू, सफल डिजाइन र स्थायी लागत बचतको तथ्याङ्कीय विवरण।',
      metricProof: 'Over 28% reduction in cost per lead documented.'
    }
  },
  {
    id: 'milestone-scale',
    stepNumber: '06',
    phase: 'Phase 06',
    phaseNe: 'चरण ०६',
    stageName: 'Sustained Authority & Scaled Pipeline',
    stageNameNe: 'दिगो ब्रान्ड प्रभाव तथा बजेट विस्तार',
    title: 'Compounding Organic Rankings & Predictable Scaling',
    titleNe: 'दिगो अर्गानिक र्याङ्किङ र भरपर्दो व्यवसाय विस्तार',
    timeline: 'Week 11+ & Ongoing',
    timelineNe: 'हप्ता ११+ र निरन्तर',
    category: 'scale',
    tags: ['full-funnel', 'seo', 'paid'],
    summary: 'Cementing top Google search rankings, expanding lookalike ad reach horizontally, and turning one-time campaigns into an enduring growth engine.',
    summaryNe: 'गुगलको पहिलो पृष्ठमा स्थान सुरक्षित गर्ने, विज्ञापनको दायरा फराकिलो बनाउने र दिगो ग्राहक प्राप्ति इन्जिन स्थापना गर्ने।',
    objectives: [
      {
        en: 'Solidify Page 1 Google SERP rankings across high-value commercial keywords to earn permanent zero-cost traffic.',
        ne: 'व्यावसायिक महत्त्व भएका किवर्डहरूमा गुगलको पहिलो पृष्ठमा स्थान सुरक्षित गरी निःशुल्क अर्गानिक ट्राफिक लिने।'
      },
      {
        en: 'Scale ad budgets profitably by cloning winning ad variants into lookalike and intent-based audiences.',
        ne: 'सफल विज्ञापनहरूलाई नयाँ ग्राहक समूहहरूमा विस्तार गरी नाफामूलक ढंगले बजेट बढाउने।'
      },
      {
        en: 'Institute an executive quarterly marketing review cadence to continually outpace competitors.',
        ne: 'प्रतिस्पर्धीहरू भन्दा अगाडि रहन त्रैमासिक रणनीतिक समीक्षा प्रणाली बसाल्ने।'
      }
    ],
    deliverables: [
      {
        en: 'Quarterly Executive Growth & Compounding Inbound Playbook',
        ne: 'त्रैमासिक रणनीतिक वृद्धि र अर्गानिक इन्बाउन्ड प्लेबुक'
      },
      {
        en: 'Compounding Organic SEO Moat (Page 1 Commercial Visibility)',
        ne: 'गुगलको पहिलो पृष्ठमा दिगो उपस्थिति र एसईओ किल्ला'
      },
      {
        en: 'Predictable Cost-Per-Acquisition Forecasting Model',
        ne: 'भविष्यको ग्राहक लागत र बजेट प्रक्षेपण मोडेल'
      }
    ],
    targetKpis: [
      {
        label: 'Page 1 Rankings',
        labelNe: 'गुगल पहिलो पृष्ठ',
        value: '15+ Keywords',
        context: 'Commercial terms driving compounding organic inbound appointments',
        contextNe: 'निःशुल्क निरन्तर ग्राहक ल्याउने १५+ महत्त्वपूर्ण किवर्डहरू'
      },
      {
        label: 'Admissions / Sales Lift',
        labelNe: 'बिक्री / भर्ना वृद्धि',
        value: '+20–30%',
        context: 'Verified net commercial revenue uplift vs historical baseline',
        contextNe: 'विगतको तुलनामा २०–३०% प्रमाणित कुल व्यवसाय वृद्धि'
      },
      {
        label: 'Organic Inbound Share',
        labelNe: 'अर्गानिक इन्बाउन्ड हिस्सा',
        value: '45%+',
        context: 'Portion of total inquiries arriving with $0 marginal advertising cost',
        contextNe: 'शून्य विज्ञापन खर्चमा आउने ४५%+ सोधपुछ'
      }
    ],
    toolsUsed: ['Ahrefs', 'Looker Studio', 'GA4', 'HubSpot / Zoho CRM', 'Google Search Console'],
    clientActionItem: {
      en: 'Participate in quarterly strategic growth reviews and set next-quarter expansion milestones.',
      ne: 'त्रैमासिक रणनीतिक समीक्षामा सहभागी हुने र आगामी त्रैमासिक लक्ष्यहरू निर्धारण गर्ने।'
    },
    deliverablePreview: {
      badge: 'Deliverable 06',
      badgeNe: 'नतिजा ०६',
      title: 'Compounding Authority & Predictable Moat',
      titleNe: 'दिगो ब्रान्ड प्रतिष्ठा र व्यवसाय विस्तार प्लेबुक',
      summary: 'A predictable, scalable customer acquisition machine that drives down marginal cost with every passing month.',
      summaryNe: 'प्रत्येक महिना लागत घट्दै जाने र व्यवसाय बढ्दै जाने भरपर्दो ग्राहक प्राप्ति प्रणाली।',
      metricProof: 'Compounding Page 1 rankings & predictable CAC.'
    }
  }
];


