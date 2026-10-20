export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Marketing' | 'SaaS & Code' | 'Branding' | 'SEO';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  content: string[];
}

export const BLOG_CATEGORIES = ['All', 'Marketing', 'SaaS & Code', 'Branding', 'SEO'] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'scaling-saas-with-nextjs-14',
    title: 'Why Next.js App Router is the Ultimate Framework for Modern SaaS Applications',
    excerpt: 'Explore how server components, streaming, and edge rendering can drastically lower server costs while boosting conversion rates.',
    category: 'SaaS & Code',
    author: {
      name: 'Obbie Team',
      role: 'Lead Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Sep 24, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    featured: true,
    content: [
      'Digital transformation requires balancing technical excellence with strategic business positioning. Building responsive platforms or launching targeted campaigns is only effective when backed by scalable code architectures and data-backed metrics.',
      'Server Components drastically reduce client-side JavaScript execution time, leading to faster First Contentful Paint (FCP) and better Core Web Vitals across low-bandwidth connections.',
      'By serving dynamic content straight from the edge, SaaS applications achieve near-instantaneous page loads while keeping server hosting costs predictably low.'
    ]
  },
  {
    id: '2',
    slug: 'organic-seo-playbook-2026',
    title: 'The 2026 Local & Global Organic Search Playbook',
    excerpt: 'Search algorithms have shifted towards user intent and technical execution. Here is how we get clients onto page 1.',
    category: 'SEO',
    author: {
      name: 'Obbie Team',
      role: 'Growth Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Sep 18, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    content: [
      'Modern search engines prioritize semantic depth, user experience, and technical page performance over legacy keyword density tactics.',
      'Optimizing structure through clean schema markup and semantic HTML helps search crawlers index your application efficiently.',
      'Investing in organic search visibility delivers compounding long-term traffic with significantly lower customer acquisition costs compared to paid channels.'
    ]
  },
  {
    id: '3',
    slug: 'building-a-memorable-brand-identity',
    title: 'How Visual Consistency Drives Higher Customer Lifetime Value',
    excerpt: 'Your brand collateral is more than logos—it is the visual grammar that builds instant trust with prospective enterprise clients.',
    category: 'Branding',
    author: {
      name: 'Obbie Team',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Sep 12, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    content: [
      'A cohesive visual identity establishes immediate credibility across consumer touchpoints, from landing pages to social media assets.',
      'Consistency in typography, color palettes, and interaction design reduces cognitive friction for prospective clients evaluating your offer.',
      'Strong visual grammar turns casual visitors into brand advocates, driving retention and elevating lifetime customer value.'
    ]
  },
  {
    id: '4',
    slug: 'meta-ads-vs-google-ads-roi',
    title: 'Meta Ads vs. Google Ads: Where Should You Allocate Your Budget?',
    excerpt: 'A comprehensive breakdown of CAC, ROAS, and conversion funnel strategies across social ad networks and search engine marketing.',
    category: 'Marketing',
    author: {
      name: 'Obbie Team',
      role: 'Paid Acquisition Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Aug 29, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    content: [
      'Choosing between search engine intent and social discovery depends on product-market stage and target audience awareness.',
      'Google Ads captures high-intent demand from users actively searching for solutions, yielding higher immediate conversion rates.',
      'Meta Ads excels at demand generation, creating brand awareness and building retargeting pools for complex sales cycles.'
    ]
  },
];