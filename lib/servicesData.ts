// lib/servicesData.ts

export interface SubService {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Graphic Design' | 'Printing Services' | 'Digital Marketing' | 'Web Design & Dev' | 'Business Content' | 'Branding';
  summary: string;
  description: string;
  iconName: 'design' | 'print' | 'marketing' | 'web' | 'content' | 'branding';
  heroImage: string;
  deliverables: string[];
  subServices: SubService[];
  impactMetric: string;
}

export const SERVICE_CATEGORIES = [
  'All',
  'Graphic Design',
  'Printing Services',
  'Digital Marketing',
  'Web Design & Dev',
  'Business Content',
  'Branding',
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'High-Impact Visual Communication & Collateral',
    category: 'Graphic Design',
    summary: 'Custom vector artwork, marketing collateral, social media assets, and promotional materials crafted to communicate your core brand message.',
    description: 'We translate your company value proposition into striking visual assets. From corporate pitch decks to high-converting advertising creatives, our graphic design team ensures visual consistency across every customer touchpoint.',
    iconName: 'design',
    heroImage: '/assets/landin-collage.webp',
    deliverables: [
      'Social Media Ad Creatives & Banner Packs',
      'Corporate Pitch Decks & Sales Presentations',
      'Product Packaging & Label Design',
      'Infographics & Annual Report Layouts'
      
    ],
    subServices: [
      {
    title: 'Marketing & Promotional Assets',
    description: 'Eye-catching banners, flyers, posters, brochures, digital ads, campaign creatives, and promotional materials designed to capture attention and communicate your message effectively.'
  },
  {
    title: 'Corporate & Institutional Graphics',
    description: 'Professional business and institutional graphics, including company profiles, presentation decks, organizational charts, certificates, ID cards, branded stationery, internal communications, and corporate announcements that maintain a consistent, credible image.'
  },
  {
    title: 'Publication & Report Layouts',
    description: 'Well-structured layouts for annual reports, proposals, eBooks, catalogs, magazines, newsletters, manuals, research publications, and corporate briefs that make information clear, engaging, and easy to navigate.'
  },
  {
    title: 'Brand Identity & Business Collateral',
    description: 'Cohesive visual assets that strengthen your brand, from business cards, letterheads, envelopes, and branded documents to company presentation templates and everyday business communication materials.'
  },
  {
    title: 'Digital & Social Media Graphics',
    description: 'Platform-ready graphics for social media posts, stories, covers, event announcements, infographics, web banners, email campaigns, and other digital touchpoints that keep your brand recognizable and engaging.'
  },
  {
    title: 'Event & Exhibition Graphics',
    description: 'Professional visual materials for conferences, corporate events, exhibitions, launches, and institutional functions, including event posters, backdrops, pull-up banners, stage graphics, signage, and directional displays.'
  },
  {
    title: 'Print & Large-Format Graphics',
    description: 'Print-ready artwork for business stationery, brochures, posters, billboards, shop signage, vehicle branding, roll-up banners, wall graphics, and other large-format applications, prepared for high-quality production.'
  },
  {
    title: 'Vector Illustrations & Infographics',
    description: 'Custom vector illustrations, icons, diagrams, charts, and infographics that simplify complex information, support presentations and reports, and give your brand a distinctive visual language.'
  }
    ],
    impactMetric: '100% Custom Vector Deliverables',
  },
  {
    id: '2',
    slug: 'printing-services',
    title: 'Printing Services',
    tagline: 'Large Format, Paper Printing & Vinyl Wrap Solutions',
    category: 'Printing Services',
    summary: 'Precision physical printing including large-format banners, vinyl stickers, vehicle branding, and high-quality paper print collateral.',
    description: 'For everyday business stationery to bold outdoor displays, Obbie Concepts delivers professional printing solutions that bring your brand to life. We work with businesses, corporations, institutions, and organizations to produce high-quality print materials for marketing, communication, events, packaging, and workplace branding combining thoughtful design with quality production to ensure your brand makes the right impression.',
    iconName: 'print',
    heroImage: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Large Format Banners & Event Backdrops',
      'Custom Vinyl Stickers & Window Graphics',
      'Corporate Stationery, Cards & Flyers',
      'Vehicle Wraps & Retail Signage'
    ],
    subServices: [
      {
    title: 'Large Format Printing',
    description: 'High-quality printing for PVC banners, pull-up stands, exhibition backdrops, billboards, posters, wall displays, and other large-format promotional materials designed to make your brand visible.'
  },
  {
    title: 'Vinyl Printing & Decals',
    description: 'Custom vinyl stickers, die-cut decals, frosted glass films, window graphics, wall stickers, product labels, and branded surface graphics for offices, retail spaces, vehicles, and commercial environments.'
  },
  {
    title: 'Paper & Commercial Printing',
    description: 'Professional printing of business cards, brochures, flyers, company profiles, letterheads, envelopes, compliment slips, folders, and other essential business stationery that keeps your brand looking consistent.'
  },
  {
    title: 'Corporate & Institutional Printing',
    description: 'Reliable printing solutions for companies, NGOs, schools, universities, government institutions, and other organizations, including annual reports, proposals, manuals, training materials, newsletters, certificates, forms, and official documents.'
  },
  {
    title: 'Promotional & Marketing Materials',
    description: 'Printed marketing collateral that helps businesses attract attention and promote their products or services, including posters, promotional leaflets, campaign materials, branded calendars, vouchers, coupons, and promotional inserts.'
  },
  {
    title: 'Packaging & Product Labels',
    description: 'Custom-printed product labels, stickers, tags, packaging sleeves, branded boxes, and other packaging materials that help products stand out and maintain a professional, recognizable identity.'
  },
  {
    title: 'Signage & Display Printing',
    description: 'Custom-printed signage and display materials for offices, retail outlets, events, and commercial spaces, including indoor and outdoor signs, directional signage, reception displays, point-of-sale graphics, and exhibition panels.'
  },
  {
    title: 'Event & Exhibition Printing',
    description: 'Complete print solutions for conferences, launches, exhibitions, trade fairs, and institutional events, including event backdrops, branded banners, name badges, programmes, tickets, certificates, directional signs, and delegate materials.'
  },
  {
    title: 'Branded Merchandise Printing',
    description: 'Custom branding and printing for promotional merchandise such as T-shirts, hoodies, mugs, tote bags, notebooks, pens, and other branded items that help organizations promote their identity and connect with their audiences.'
  }
    ],
    impactMetric: 'High-DPI UV & Eco-Solvent Print Quality',
  },

  {
    id: '3',
    slug: 'branding-identity',
    title: 'Branding & Visual Identity',
    tagline: 'Brand Architecture, Guidelines & Unique Visual Tokens',
    category: 'Branding',
    summary: 'We bring your brand to life on T-shirts, hoodies, caps, mugs, bottles, and other everyday products.',
    description: 'Turn everyday products into powerful brand touchpoints. We customize apparel, corporate gifts, promotional merchandise, and everyday items with your logo, message, or design, helping businesses, institutions, and organizations build brand visibility through products people wear, use, and remember.',
    iconName: 'branding',
    heroImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Custom-Branded Apparel: T-Shirts, Hoodies, Polo Shirts & Caps',
      'Branded Corporate Gifts: Mugs, Bottles, Pens & Notebooks',
      'Promotional Merchandise for Events, Campaigns & Organizations',
      'Print-Ready Artwork and Product Branding Mockups'
    ],
    subServices: [
  {
    title: 'Apparel & Textile Branding',
    description: 'Custom branding on T-shirts, polo shirts, hoodies, jackets, uniforms, caps, and other garments using suitable printing and branding techniques for businesses, teams, events, and organizations.'
  },
  {
    title: 'Corporate Gifts & Merchandise',
    description: 'Personalized branding on mugs, water bottles, pens, notebooks, keyholders, tote bags, umbrellas, and other promotional items that help businesses showcase their identity and create lasting brand impressions.'
  },
  {
    title: 'Promotional & Event Merchandise',
    description: 'Branded merchandise for corporate events, conferences, product launches, campaigns, exhibitions, and team activities, including custom T-shirts, caps, bags, lanyards, badges, and giveaways.'
  },
  {
    title: 'Product & Surface Branding',
    description: 'Custom logos, graphics, and designs applied to selected products and surfaces, including stickers, decals, packaging, drinkware, office accessories, and other brandable items.'
  }
],
    impactMetric: 'Complete Brand Identity Manuals',
  },

  {
    id: '4',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Performance Growth, Paid Ads & Search Engine Dominance',
    category: 'Digital Marketing',
    summary: 'Strategic digital marketing services covering SEO, paid advertising, social media management, content marketing, lead generation, and conversion optimization.',
    description: 'We help businesses reach the right audience, build a stronger online presence, and turn digital attention into real business opportunities. From creating engaging content and running targeted ad campaigns to improving search visibility and building conversion-focused marketing funnels, we bring strategy, creativity, and performance together to support sustainable growth',
    iconName: 'marketing',
    heroImage: '/assets/digital-marketing-service.webp',
    deliverables: 
    [
        'Digital Marketing Strategy & Campaign Plans',
        'Social Media Content Calendars & Management',
        'Paid Advertising Campaign Setup & Optimization',
        'SEO Audits, Keyword Research & On-Page Optimization',
        'Lead Generation Funnels & Landing Pages',
        'Marketing Analytics & Performance Reports'
    ],
    subServices: [
      {
        title: 'Social Media Management',
        description: 'Strategic social media planning, content creation, publishing, community management, and performance reporting to build your brand presence and keep your audience engaged.'
      },
      {
        title: 'Paid Advertising & PPC',
        description: 'Targeted advertising campaigns across Google, Meta, and other relevant platforms, designed to reach potential customers, generate qualified leads, and make your advertising budget work harder.'
      },
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'On-page SEO, technical optimization, keyword research, local SEO, and content improvements that help your business become more visible when potential customers search online.'
      },
      {
        title: 'Content Marketing',
        description: 'Purposeful content that attracts, educates, and builds trust with your audience, including social media content, blog articles, promotional campaigns, short-form videos, and branded storytelling.'
      },
      {
        title: 'Lead Generation & Conversion Funnels',
        description: 'Marketing funnels, landing pages, lead capture forms, WhatsApp conversion flows, and follow-up strategies that guide potential customers from initial interest towards taking action.'
      },
      {
        title: 'Email & Customer Retention Marketing',
        description: 'Email campaigns, newsletters, customer follow-ups, and automated communication sequences that nurture leads, strengthen customer relationships, and encourage repeat business.'
      },
      {
        title: 'Marketing Strategy & Campaign Management',
        description: 'Audience research, campaign planning, channel selection, budget allocation, and coordinated marketing campaigns aligned with your business objectives and growth priorities.'
      },
      {
        title: 'Analytics & Performance Reporting',
        description: 'Campaign tracking, website analytics, conversion measurement, and clear performance reports that reveal what is working, where opportunities exist, and how marketing efforts can improve.'
      }
    ],
    impactMetric: 'Measurable ROI & Lead Conversion Tracking',
  },
  {
    id: '5',
    slug: 'web-design-development',
    title: 'Web Design & Development',
    tagline: 'Fast, Scalable Custom Websites & Web Applications',
    category: 'Web Design & Dev',
    summary: 'Custom website and web application development, from corporate websites and e-commerce stores to business portals, SaaS platforms, and tailored digital solutions.',
    description: 'We design and develop modern digital platforms that help businesses establish their online presence, serve customers more effectively, and simplify the way they operate. From professional corporate websites and online stores to custom web applications and SaaS products, we combine thoughtful design, reliable engineering, and scalable technology to build solutions tailored to your business goals.',
    iconName: 'web',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
        'Custom Corporate Websites & Landing Pages',
        'E-Commerce Stores & Payment Gateway Integration',
        'Custom Web Applications, SaaS Platforms & Business Portals',
        'Admin Dashboards, APIs & Database Integration',
        'Responsive, Accessible & Performance-Optimized Interfaces',
        'Content Management Systems & Website Administration',
        'Deployment, Technical Documentation & Maintenance Options'
      ],
    subServices: [
  {
    title: 'Business & Corporate Web Development',
    description: 'Professional, responsive websites tailored to your brand, with modern design, content management, and the functionality your business needs to build credibility and attract customers.'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom online stores with product management, payment integration, inventory tools, and streamlined checkout experiences that make it easier for customers to shop and for you to manage sales.'
  },
  {
    title: 'Web Applications & SaaS Development',
    description: 'Custom digital platforms, business portals, dashboards, and subscription-based software engineered around your workflows, with scalable architecture and integrations to support future growth.'
  },
  {
    title: 'Website Optimization & Maintenance',
    description: 'Ongoing technical support, performance improvements, responsive design refinements, security updates, bug fixes, and functionality enhancements to keep your digital platforms reliable as your business evolves.'
  },
  {
    title: 'API Integration & Backend Engineering',
    description: 'Custom backend systems, third-party API integrations, database design, authentication, payment gateways, and automated workflows that connect your digital platforms and support their core functionality.'
  }
  
],
    impactMetric: 'Sub-400ms Page Load Speeds',
  },
  {
    id: '6',
    slug: 'business-content-creation',
    title: 'Business Content Creation',
    tagline: 'Copywriting, Product Photography & Corporate Storytelling',
    category: 'Business Content',
    summary: 'Professional content creation covering business copywriting, corporate photography, promotional videos, product shoots, and brand storytelling.',
    description: 'We help businesses communicate their value, showcase their work, and connect with the right audience through compelling content. From website copy and company profiles to professional photography, promotional videos, and customer success stories, we create content that brings your brand to life, builds credibility, and gives people a clearer reason to choose you.',
    iconName: 'content',
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
        'Website Copywriting, SEO Articles & Blog Content',
        'Company Profiles, Proposals & Corporate Publications',
        'Corporate Videos, Promotional Reels & Interviews',
        'Commercial Product, Team & Workplace Photography',
        'Case Studies, Testimonials & Client Success Stories',
        'Product Demonstrations & Service Explainer Videos',
        'Marketing Campaign Content & Brand Storytelling'
      ],
    subServices: [
        {
          title: 'Marketing & Social Media Content Production',
          description: 'Planned and produced content for social media, advertising campaigns, product launches, and brand awareness initiatives, including short-form videos, promotional photography, interviews, and campaign-specific creative assets.'
        },
        {
          title: 'Business Copywriting & Corporate Content',
          description: 'Compelling website copy, company profiles, service descriptions, SEO articles, proposals, and corporate publications that communicate your value clearly and professionally.'
        },
        {
          title: 'Commercial Photography & Video',
          description: 'Professional product photography, team portraits, workplace shoots, corporate videos, promotional reels, interviews, and service demonstrations that bring your business to life.'
        },
        {
          title: 'Corporate Storytelling & Brand Content',
          description: 'Company stories, customer testimonials, case studies, project highlights, and marketing content that showcase your expertise, build trust, and help audiences connect with your brand.'
        },
        {
          title: 'Company Profiles & Corporate Publications',
          description: 'Well-written and professionally structured company profiles, capability statements, organizational profiles, annual reports, institutional publications, and business presentations that communicate your organizations work and credibility.'
        },
        {
          title: 'Testimonials, Case Studies & Brand Stories',
          description: 'Customer interviews, project highlights, client success stories, testimonials, and case studies that demonstrate your work, communicate real outcomes, and help prospective customers understand the value you deliver.'
        }
      ],
    impactMetric: 'Engaging Multimedia Assets',
  },
  
];