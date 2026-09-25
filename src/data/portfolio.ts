export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  alternativePositioning: string;
  shortBio: string;
  fullBio: string;
  location: string;
  phone: string;
  email: string;
  availability: string;
  resumeUrl?: string;
  socials: {
    linkedin?: string;
    github?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export interface CredibilityMetric {
  category: "INDUSTRY" | "CLIENTS" | "EDUCATION" | "TEACHING";
  value: string;
  label: string;
  description: string;
  tag?: string;
}

export interface VideoShowcase {
  title: string;
  subtitle: string;
  badge: string;
  duration?: string;
  videoUrl?: string;
  posterImage?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "marketing" | "teaching";
  description: string;
  keyPoints: string[];
  skills: string[];
}

export interface TeachingPillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export interface CaseStudy {
  id: string;
  clientType: string;
  title: string;
  industry: string;
  ndaProtected: boolean;
  objective: string;
  strategy: string;
  execution: string[];
  result: string;
  tools: string[];
  metricHighlight?: string;
  metricLabel?: string;
  region?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: "Client Work" | "Agency Life" | "Training" | "Presentations" | "Professional Moments";
  caption: string;
  isVideo?: boolean;
  aspectRatio?: "square" | "landscape" | "portrait";
  imagePlaceholderText: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  authority: string;
  verificationId?: string;
  type: "certification" | "degree";
  period?: string;
  description: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  organization: string;
  phone?: string;
  email?: string;
}

export const portfolioData = {
  personal: {
    name: "Naime",
    title: "Digital Marketing & Growth Specialist",
    tagline: "I turn real-world marketing experience into practical learning.",
    alternativePositioning: "Digital Marketing Strategist • Trainer • Client Growth Specialist",
    shortBio: "NSDA Level-3 Certified Digital Marketer with 4+ years of professional experience, 100+ international clients, agency background, and a proven foundation in teaching.",
    fullBio: "Combining formal digital marketing certification, hands-on agency operations, international client management, and over five years of classroom teaching experience to deliver high-impact digital marketing training and measurable business growth.",
    location: "Sirajganj, Bangladesh",
    phone: "+8801625596245",
    email: "digiticnaime@gmail.com",
    availability: "Available for Instructor Roles, Corporate Training & Strategic Consulting",
    resumeUrl: "#contact",
    socials: {
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/8801625596245",
      facebook: "https://facebook.com",
    },
  },

  videoShowcase: {
    title: "How Mathematics Logic Powers Live Marketing Systems",
    subtitle: "A walkthrough of structured pedagogy, international client campaigns, and practical digital marketing frameworks.",
    badge: "Featured Masterclass & Walkthrough",
    duration: "Methodology Video",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Default working placeholder video
    posterImage: "/images/naime-hero.jpg",
  } as VideoShowcase,

  credibilityMetrics: [
    {
      category: "INDUSTRY",
      value: "4+ Years",
      label: "Digital Marketing Growth",
      description: "Hands-on execution across paid advertising, funnels, and organic growth.",
      tag: "Next Clicker Agency",
    },
    {
      category: "CLIENTS",
      value: "100+",
      label: "International Clients",
      description: "Direct client communication, expectation setting, and project delivery.",
      tag: "Social Tamai (Foreign)",
    },
    {
      category: "EDUCATION",
      value: "Level-3",
      label: "NSDA Certified Marketer",
      description: "Standardized competency certification from National Skills Development Authority.",
      tag: "Govt. of Bangladesh",
    },
    {
      category: "TEACHING",
      value: "5+ Years",
      label: "Teaching Experience",
      description: "Mathematics instruction at school & coaching levels, honing structured pedagogy.",
      tag: "Secondary & Coaching",
    },
  ] as CredibilityMetric[],

  clientJourneySteps: [
    { step: "01", name: "Understand", description: "Audit market baseline, audience demographics, and core business goals." },
    { step: "02", name: "Plan", description: "Build data-driven campaign funnels, budget allocation, and messaging frameworks." },
    { step: "03", name: "Execute", description: "Deploy targeted paid ads, content distribution, and tracking infrastructure." },
    { step: "04", name: "Measure", description: "Monitor conversion metrics, CPA, ROAS, and qualitative client feedback." },
    { step: "05", name: "Improve", description: "Iterate on creatives, audience subsets, and retention strategies." },
  ],

  experiences: [
    {
      period: "Mar 2026 – Present",
      role: "Growth & Marketing Specialist",
      company: "Next Clicker",
      location: "Bangladesh (Agency)",
      type: "marketing",
      description: "Planning and executing data-backed digital marketing campaigns to drive brand reach and optimize inbound conversion funnels.",
      keyPoints: [
        "Plan and execute data-backed digital marketing campaigns across multi-channel environments.",
        "Optimize conversion funnels and inbound acquisition channels to generate qualified sales leads.",
        "Collaborate with creative teams to produce high-converting ad collaterals and landing pages.",
      ],
      skills: ["Growth Strategy", "Conversion Funnels", "Paid Media", "Lead Generation", "Analytics"],
    },
    {
      period: "Nov 2023 – Mar 2026",
      role: "Digital Marketing Strategist & Client Lead",
      company: "Social Tamai",
      location: "Bangladesh / International Remote",
      type: "marketing",
      description: "Directly communicated with and managed 100+ international clients, ensuring on-time delivery, high client retention, and organic social growth.",
      keyPoints: [
        "Directly managed communications, sprint updates, and deliverables for 100+ foreign clients.",
        "Led organic social media growth strategies, audience nurturing campaigns, and content scheduling.",
        "Maintained client satisfaction and high retention through clear expectation management and timely execution.",
      ],
      skills: ["International Client Management", "Social Media Strategy", "Organic Growth", "Cross-Platform Ads", "Client Retention"],
    },
    {
      period: "Mar 2023 – Nov 2023",
      role: "Senior Mathematics Teacher",
      company: "Primacia Coaching Home",
      location: "Tamai, Sirajganj",
      type: "teaching",
      description: "Taught advanced mathematics to senior students, breaking down complex analytical concepts into clear, structured lessons.",
      keyPoints: [
        "Structured advanced mathematical curricula into intuitive, bite-sized conceptual frameworks.",
        "Designed weekly diagnostic assessments, evaluated individual learning bottlenecks, and provided tailored mentoring.",
        "Fostered analytical thinking and problem-solving discipline among competitive academic students.",
      ],
      skills: ["Curriculum Structuring", "Conceptual Simplification", "Student Assessment", "Mentoring", "Clear Communication"],
    },
    {
      period: "Aug 2019 – Mar 2023",
      role: "Junior Mathematics Teacher",
      company: "Light High Public School",
      location: "Sirajganj, Bangladesh",
      type: "teaching",
      description: "Delivered secondary school mathematics curriculum using engaging instructional techniques and student-focused problem-solving sessions.",
      keyPoints: [
        "Delivered interactive classroom lectures to cohorts of 50+ secondary school students.",
        "Facilitated dedicated remedial sessions to elevate struggling learners' conceptual clarity.",
        "Developed structured teaching plans and maintained active academic performance tracking.",
      ],
      skills: ["Classroom Management", "Pedagogy", "Public Speaking", "Instructional Design", "Student Motivation"],
    },
  ] as ExperienceItem[],

  teachingPillars: [
    {
      title: "Simplify",
      tagline: "Clarity Over Jargon",
      description: "Turn complex algorithms, ad mechanics, and analytics into easily digestible, intuitive principles that students grasp quickly.",
      iconName: "Lightbulb",
    },
    {
      title: "Structure",
      tagline: "Framework-Driven Learning",
      description: "Build every lecture around structured workflows, actionable checklists, and reproducible step-by-step methodologies.",
      iconName: "Layers",
    },
    {
      title: "Demonstrate",
      tagline: "Grounded in Real Campaigns",
      description: "Replace hypothetical textbook theory with live ad managers, real client accounts, budget management, and campaign post-mortems.",
      iconName: "ScreenShare",
    },
    {
      title: "Mentor",
      tagline: "Career & Client Readiness",
      description: "Prepare learners for the actual market: client communication, proposal drafting, portfolio presentation, and freelancing ethics.",
      iconName: "Users2",
    },
  ] as TeachingPillar[],

  curriculumTopics: [
    { title: "Digital Marketing Fundamentals", category: "Foundation" },
    { title: "Digital Marketing Strategy", category: "Strategy" },
    { title: "Social Media Marketing", category: "Social" },
    { title: "Meta Advertising (Facebook & IG)", category: "Paid Media" },
    { title: "Google Ads (Search & Display)", category: "Paid Media" },
    { title: "LinkedIn Marketing & B2B", category: "Social" },
    { title: "Lead Generation Architectures", category: "Growth" },
    { title: "Marketing Funnels & Retargeting", category: "Growth" },
    { title: "SEO & Content Architecture", category: "Search" },
    { title: "Search Analytics & Performance", category: "Search" },
    { title: "Email Marketing & Copywriting", category: "Retention" },
    { title: "Marketing Automation Workflows", category: "Retention" },
    { title: "Client Communication & Pitching", category: "Client Ops" },
    { title: "Freelancing & Client Management", category: "Client Ops" },
    { title: "Marketing Analytics & KPIs", category: "Analytics" },
    { title: "Organic Social Media Growth", category: "Social" },
  ],

  classroomToCampaign: {
    classroom: [
      "Translating complex abstract ideas into plain language",
      "Designing structured step-by-step lecture syllabi",
      "Diagnosing student bottlenecks and learning curves",
      "Facilitating interactive Q&A and problem-solving",
      "Mentoring individuals toward tangible milestones",
      "Patience and clear articulation under questioning",
    ],
    realWorld: [
      "Direct communication with 100+ international clients",
      "Deploying and managing real advertising budgets",
      "Multi-platform lead generation and conversion funnels",
      "Data-backed performance tracking and ROAS reporting",
      "Adapting strategies to volatile platform algorithm updates",
      "Strict delivery deadlines and agency accountability",
    ],
    theInstructor: "A trainer who doesn't just read presentation slides, but teaches from battle-tested campaign experience and knows exactly how to transmit that knowledge to learners.",
  },

  skillsByCategory: [
    {
      category: "Strategy & Growth",
      description: "High-level campaign architecture and full-funnel customer acquisition planning.",
      skills: [
        { name: "Digital Strategy", focus: "Multi-channel roadmap & channel mix" },
        { name: "Marketing Funnels", focus: "TOFU/MOFU/BOFU stage alignment" },
        { name: "Audience Segmentation", focus: "Behavioral & demographic targeting" },
        { name: "Growth Strategy", focus: "Inbound pipeline acceleration" },
        { name: "Performance Tracking", focus: "KPI dashboards & conversion rates" },
      ],
    },
    {
      category: "Paid Advertising",
      description: "Direct-response advertising campaigns built for measurable return on ad spend.",
      skills: [
        { name: "Meta Ads Manager", focus: "Pixel/CAPI, lookalikes & dynamic retargeting" },
        { name: "Google Ads", focus: "Search intent keywords & display campaigns" },
        { name: "LinkedIn Ads", focus: "B2B account targeting & sponsored content" },
        { name: "Campaign Optimization", focus: "A/B testing ad copy, bids & landing pages" },
        { name: "Conversion Optimization", focus: "Drop-off reduction & CRO principles" },
      ],
    },
    {
      category: "Organic Growth",
      description: "Sustained audience community building and organic brand visibility.",
      skills: [
        { name: "Social Media Marketing", focus: "Channel curation & algorithmic pacing" },
        { name: "Content Strategy", focus: "Value-first editorial planning & themes" },
        { name: "Audience Engagement", focus: "Community interaction & retention" },
        { name: "Organic Growth Systems", focus: "Shareability & viral distribution loops" },
      ],
    },
    {
      category: "Search (SEO & SEM)",
      description: "Organic search visibility and targeted intent-driven search engine marketing.",
      skills: [
        { name: "SEO Fundamentals", focus: "On-page optimization & content structure" },
        { name: "SEM (Search Ads)", focus: "Intent bidding, ad relevance & quality score" },
        { name: "Search Analytics", focus: "Google Search Console & ranking telemetry" },
        { name: "Keyword Strategy", focus: "Commercial intent research & volume gap" },
      ],
    },
    {
      category: "Automation & Retention",
      description: "Lifecycle marketing, email workflows, and automated customer nurturing.",
      skills: [
        { name: "Email Marketing", focus: "Drip campaigns, newsletters & copy" },
        { name: "Email Workflows", focus: "Trigger-based lead onboarding sequences" },
        { name: "Marketing Automation", focus: "CRM integrations & pipeline tagging" },
        { name: "Lead Nurturing", focus: "Educational sequences & re-engagement" },
      ],
    },
    {
      category: "Client & Business Operations",
      description: "Cross-cultural international client communication and professional delivery.",
      skills: [
        { name: "Client Communication", focus: "Briefing, expectations & weekly reporting" },
        { name: "International Client Mgmt", focus: "100+ global clients across timezones" },
        { name: "Sales Communication", focus: "Consultative discovery & proposal scopes" },
        { name: "Project Delivery", focus: "Milestone accountability & quality control" },
      ],
    },
  ] as SkillCategory[],

  caseStudies: [
    {
      id: "cs-1",
      clientType: "International B2B Client",
      title: "Qualified Lead Generation & Funnel Architecture",
      industry: "Professional Services / B2B SaaS",
      region: "North America Remote",
      metricHighlight: "-42% CPL",
      metricLabel: "Cost Per Qualified Lead",
      ndaProtected: true,
      objective: "Generate high-intent inbound qualified leads for specialized business consultation services.",
      strategy: "Multi-touch funnel combining precision LinkedIn and Meta audience targeting with a frictionless landing inquiry workflow.",
      execution: [
        "Researched and built custom audience segments based on job seniority and business scale.",
        "Produced direct-response copy addressing core industry pain points and service value.",
        "Set up pixel tracking and automated CRM lead capture notification pipelines.",
        "Continuously optimized ad budget toward top-performing demographic segments.",
      ],
      result: "Maintained consistent high-intent lead flow with 42% reduction in cost per qualified lead over a 6-month continuous campaign cycle.",
      tools: ["Meta Ads Manager", "Google Analytics", "Lead Funnel", "CRM Automation"],
    },
    {
      id: "cs-2",
      clientType: "International E-Commerce Brand",
      title: "Omnichannel Social Media Growth & Paid Retargeting",
      industry: "E-Commerce / Consumer Goods",
      region: "Europe & Australia",
      metricHighlight: "3.2x ROAS",
      metricLabel: "Return on Ad Spend",
      ndaProtected: true,
      objective: "Drive product discovery, organic follower engagement, and recover abandoned browsing carts.",
      strategy: "Balanced organic value-driven editorial schedule paired with dynamic catalog retargeting ads.",
      execution: [
        "Structured weekly content calendar emphasizing product unboxings, educational use-cases, and social proof.",
        "Configured dynamic catalog ads targeting visitors who viewed specific product collections within 7 days.",
        "Managed community commentary and inbound customer inquiries with rapid turnaround.",
      ],
      result: "Accelerated brand organic reach by 3x and achieved sustained positive return on advertising spend across peak shopping quarters.",
      tools: ["Meta Business Suite", "Canva / Creative Briefs", "Dynamic Ads", "Shopify Analytics"],
    },
    {
      id: "cs-3",
      clientType: "Regional Enterprise Client",
      title: "Local Market Search & Conversion Funnel Optimization",
      industry: "Healthcare / Educational Training",
      region: "Regional Bangladesh",
      metricHighlight: "100%",
      metricLabel: "Cohort Capacity Reached",
      ndaProtected: true,
      objective: "Increase enrolled admissions and scheduled consultations through local search and inbound inquiry channels.",
      strategy: "High-intent Google Search campaign combined with localized social proof and WhatsApp click-to-chat onboarding.",
      execution: [
        "Identified high-conversion local search terms with negative keyword pruning to eliminate wasted spend.",
        "Created mobile-first landing experience with instant WhatsApp consultation triggers.",
        "Trained internal admission staff on lead follow-up timing and conversational conversion techniques.",
      ],
      result: "Consistently delivered fully booked appointment calendars for monthly consultation cohorts with qualitative client commendations.",
      tools: ["Google Ads", "Google Search Console", "WhatsApp Business API", "Call Rail"],
    },
  ] as CaseStudy[],

  mediaItems: [
    {
      id: "media-1",
      title: "International Client Strategy Session",
      category: "Client Work",
      caption: "Conducting remote sprint review and performance dashboard walkthrough with overseas clients.",
      imagePlaceholderText: "Client Meeting / Video Call Workspace",
      aspectRatio: "landscape",
    },
    {
      id: "media-2",
      title: "Agency Campaign Optimization",
      category: "Agency Life",
      caption: "Reviewing ad creative metrics, conversion pipelines, and budget reallocation at Next Clicker.",
      imagePlaceholderText: "Agency Marketing Desk & Multi-Screen Setup",
      aspectRatio: "square",
    },
    {
      id: "media-3",
      title: "Interactive Digital Marketing Workshop",
      category: "Training",
      caption: "Demonstrating Meta Ads Manager workflows, campaign structures, and budget management to trainees.",
      imagePlaceholderText: "Classroom Training / Whiteboard Presentation",
      aspectRatio: "landscape",
      isVideo: true,
    },
    {
      id: "media-4",
      title: "NIYD Professional Certification Session",
      category: "Presentations",
      caption: "Participating in formal digital marketing evaluations and practical curriculum presentations.",
      imagePlaceholderText: "Institute Presentation & Professional Activity",
      aspectRatio: "portrait",
    },
    {
      id: "media-5",
      title: "One-on-One Student Mentoring",
      category: "Training",
      caption: "Helping students review their personal freelance profiles, proposals, and live campaign setups.",
      imagePlaceholderText: "Mentoring & Hands-on Student Support",
      aspectRatio: "square",
    },
    {
      id: "media-6",
      title: "Campaign Data Analysis & Strategy",
      category: "Professional Moments",
      caption: "Deep-diving into search telemetry and analytics reports to identify high-leverage growth avenues.",
      imagePlaceholderText: "Professional Focus / Marketing Strategy Review",
      aspectRatio: "landscape",
    },
  ] as MediaItem[],

  credentials: [
    {
      id: "cred-1",
      title: "NSDA Certified Digital Marketer — Level 3",
      issuer: "National Skills Development Authority (NSDA)",
      authority: "Prime Minister's Office, Government of Bangladesh",
      type: "certification",
      description: "Rigorous national competence assessment verifying advanced operational capability in digital marketing execution, ethics, campaign mechanics, and professional digital delivery.",
    },
    {
      id: "cred-2",
      title: "Professional Digital Marketing",
      issuer: "National Institute of Youth Development (NIYD)",
      authority: "Ministry of Youth and Sports, Government of Bangladesh",
      type: "certification",
      description: "Comprehensive institutional training curriculum covering paid digital advertising, inbound growth strategy, SEO/SEM fundamentals, and digital agency workflows.",
    },
    {
      id: "cred-3",
      title: "Bachelor of Arts (BA)",
      issuer: "National University, Bangladesh",
      authority: "National University Academic Board",
      type: "degree",
      description: "Undergraduate degree providing a strong foundation in humanities, formal communication, logical inquiry, and pedagogical principles.",
    },
  ] as CredentialItem[],

  references: [
    {
      name: "Aliul Kabir",
      role: "CEO, Next Clicker",
      organization: "Master Trainer, ICT Division",
      phone: "+8801733053796",
    },
    {
      name: "Sharmin Akter",
      role: "Assistant Director",
      organization: "National Institute of Youth Development (NIYD)",
      phone: "+8801789378048",
      email: "ad.admin@niyd.gov.bd",
    },
  ] as ReferenceItem[],
};
