// lib/productsData.ts

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'SaaS Platforms' | 'Mobile Apps' | 'Brand Systems' | 'E-Commerce';
  description: string;
  longDescription: string[];
  coverImage: string;
  screenshots: string[];
  features: string[];
  demoUrl?: string;
  status: 'Live' | 'In Beta' | 'Case Study Only';
  featured?: boolean;
}

export const PRODUCT_CATEGORIES = [
  'All',
  'SaaS Platforms',
  'Mobile Apps',
  'Brand Systems',
  'E-Commerce',
] as const;

export const PRODUCTS_DATA: ProductItem[] = [
{
    id: '1',
    slug: 'obbie-invoice-generator',
    title: 'Obbie Invoice Generator',
    subtitle: 'Lightning-Fast Document Creation, QR Verification & Secure Cloud Archiving',
    category: 'SaaS Platforms',
    description: 'A custom-built billing and document generation engine that lets businesses instantly create, verify, and archive secure professional invoices, quotations, and receipts.',
    longDescription: [
      'We built the Obbie Invoice Generator out of a direct need to eliminate the back-and-forth friction of manual billing, lost paperwork, and fake payment receipts. Whether you are billing a corporate client or issuing a point-of-sale receipt, our platform generates crisp, branded PDF documents instantly.',
      'What sets it apart is its built-in trust and security architecture. Every generated document embeds a verifiable QR code linked to a secure cloud-archived ledger in Supabase. Clients and auditors can scan the code to instantly verify authenticity, while your team gets a password-protected powerhouse to keep your cash flow organized and tamper-proof.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop', // You can swap this with a screenshot of your actual tool later
    screenshots: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    ],
    features: [
      'Instant PDF Generation for Invoices, Quotes & Receipts',
      'Tamper-Proof QR Code Authenticity & Verification',
      'Secure Automated Cloud Archiving (Supabase Backed)',
      'Password-Protected Admin Portal & Mobile-First Design'
    ],
    demoUrl: '/tools/invoice',
    status: 'Live',
    featured: true,
  },
  {
    id: '2',
    slug: 'citysearch',
    title: 'citySearch',
    subtitle: 'Get Found by Customers, Grow Your Visibility & Connect with Your Next Customer',
    category: 'SaaS Platforms',
    description: 'A hyperlocal business discovery platform that helps customers find businesses across Kenya, explore their services, and connect directly through phone calls, WhatsApp, and Google Maps.',
    longDescription: [
      'We built citySearch to make finding local businesses easier and more convenient. Whether someone is searching for a restaurant, a plumber, a retail shop, or a professional service, citySearch helps them discover relevant businesses, explore their profiles, view photos, and read available customer reviews without the frustration of searching through irrelevant results.',
      'For business owners, citySearch is an opportunity to get discovered by potential customers actively searching for products and services. Showcase your business, highlight what you offer, and make it easier for customers to reach you through phone calls, WhatsApp, and Google Maps directions. Developed by Obbie Concepts, citySearch is built to strengthen local commerce by helping businesses improve their online visibility and connect with more customers.',
      'Your next customer could already be searching for what you offer. Give them a better chance of finding you. Register your business on citySearch for free and start building your digital presence today.'
    ],
    coverImage: '/assets/citysearch/citysearch-homepage.webp',
    screenshots: [
      '/assets/citysearch/citysearch-homepage.webp',
      '/images/projects/citysearch/citysearch-search-results.png',
      '/images/projects/citysearch/citysearch-business-profile.png',
    ],
    features: [
      'Hyperlocal Business Discovery Across Kenya',
      'Business Profiles Featuring Services, Photos & Customer Reviews',
      'Direct Customer Connections Through Phone Calls & WhatsApp',
      'Google Maps Directions for Easy Business Location Discovery',
      'Improved Online Visibility for Local Businesses',
      'Mobile-Friendly Business Discovery Experience',
      'Free Business Registration to Help You Get Started'
    ],
    demoUrl: 'https://citysearch.co.ke',
    status: 'Live',
    featured: true,
  },
];