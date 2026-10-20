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
    slug: 'invoicex-cloud-invoicing',
    title: 'InvoiceX Enterprise',
    subtitle: 'Automated Billing & Recurring Invoicing Engine',
    category: 'SaaS Platforms',
    description: 'A cloud-based invoicing platform built for SMEs to automate recurring billing, tax calculations, and multi-currency payments.',
    longDescription: [
      'InvoiceX was built to solve payment reconciliation friction for growing regional businesses. It automates recurring invoice generation, integrates local mobile payment gateways (like M-Pesa) alongside credit card processors, and tracks outstanding balances in real time.',
      'Designed with high-concurrency microservices, the platform generates PDF statements on the fly and dispatches automated SMS/Email payment reminders to improve cash flow cycles.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    ],
    features: [
      'Automated M-Pesa & Card Payment Reconciliation',
      'Multi-currency Invoice Generation & PDF Export',
      'Automated Reminders via SMS & WhatsApp API',
      'Client Self-Service Payment Portal'
    ],
    demoUrl: 'https://example.com/demo/invoicex',
    status: 'Live',
    featured: true,
  },
  {
    id: '2',
    slug: 'nexus-logistics-app',
    title: 'Nexus Driver & Fleet Portal',
    subtitle: 'Real-time Cargo Tracking & Dispatch System',
    category: 'Mobile Apps',
    description: 'Cross-platform mobile application and web portal for logistics dispatchers and fleet drivers with real-time GPS telemetry.',
    longDescription: [
      'Nexus simplifies complex supply chain handoffs by pairing an intuitive mobile app for drivers with an analytics-heavy dashboard for dispatchers.',
      'Drivers receive optimized routing, electronic Proof of Delivery (e-POD) signatures, and offline job sync when driving through low-connectivity regions.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop'
    ],
    features: [
      'Offline-First Data Syncing for Mobile Drivers',
      'Live GPS Fleet Location & Telemetry',
      'Digital Signature & Image Proof of Delivery',
      'Route Optimization Engine'
    ],
    demoUrl: 'https://example.com/demo/nexus',
    status: 'Live',
    featured: true,
  },
  {
    id: '3',
    slug: 'lumina-brand-identity-system',
    title: 'Lumina Corporate Brand System',
    subtitle: 'Complete Visual Identity & 3D Packaging Mockups',
    category: 'Brand Systems',
    description: 'Full identity design, typography guidelines, vector icon sets, and high-resolution 3D product packaging mockups for Lumina Organics.',
    longDescription: [
      'We crafted a modern, organic brand visual system for Lumina. Beyond logo mark design, we engineered scalable brand guidelines covering print design, digital design tokens, and photorealistic 3D packaging renders.',
      'The identity system was delivered with complete digital asset management guidelines and UI kit components.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop'
    ],
    features: [
      'Full Logo Guidelines & Vector Formats',
      '3D Product Packaging Renders & Mockups',
      'Figma UI Design System & Component Library',
      'Stationery & Marketing Collateral Templates'
    ],
    status: 'Case Study Only',
  },
  {
    id: '4',
    slug: 'pulse-commerce-headless-store',
    title: 'Pulse Commerce Storefront',
    subtitle: 'High-Performance Headless E-Commerce Platform',
    category: 'E-Commerce',
    description: 'A Next.js powered sub-second online shopping platform with dynamic inventory management and localized checkout integrations.',
    longDescription: [
      'Pulse Commerce was engineered to handle high-volume sales spikes. Built using Next.js App Router and dynamic server rendering, product pages load under 400ms.',
      'Includes custom cart drawer interactions, integrated search filtering, and one-step checkout.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ],
    features: [
      'Sub-Second Page Load Times',
      'Dynamic Cart Drawer & Instant Checkout',
      'Inventory Sync & Order Notification Engine',
      'SEO-Optimized Product Architecture'
    ],
    demoUrl: 'https://example.com/demo/pulse',
    status: 'Live',
  }
];