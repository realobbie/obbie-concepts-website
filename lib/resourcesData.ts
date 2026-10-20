// lib/resourcesData.ts

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'Company' | 'Services & Pricing' | 'Brand Assets' | 'Case Studies';
  fileType: 'PDF' | 'ZIP' | 'DOCX';
  fileSize: string;
  downloadUrl: string; // E.g., '/downloads/obbie-concepts-company-profile.pdf'
  iconName: 'profile' | 'brochure' | 'pricing' | 'brand' | 'casestudy';
  featured?: boolean;
}

export const RESOURCE_CATEGORIES = [
  'All',
  'Company',
  'Services & Pricing',
  'Brand Assets',
  'Case Studies',
] as const;

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: '1',
    title: 'Official Company Profile 2026',
    description: 'An overview of Obbie Concepts, our mission, core agency services, technical capabilities, and leadership team.',
    category: 'Company',
    fileType: 'PDF',
    fileSize: '4.2 MB',
    downloadUrl: '/downloads/obbie-concepts-company-profile.pdf',
    iconName: 'profile',
    featured: true,
  },
  {
    id: '2',
    title: 'Services & Solutions Brochure',
    description: 'Detailed breakdown of our web development, SaaS architecture, UI/UX design, and digital marketing capabilities.',
    category: 'Services & Pricing',
    fileType: 'PDF',
    fileSize: '3.1 MB',
    downloadUrl: '/downloads/obbie-concepts-services-brochure.pdf',
    iconName: 'brochure',
    featured: true,
  },
  {
    id: '3',
    title: 'Agency Pricing & Engagement Models',
    description: 'Transparent tier structures, retainer models, and project-based pricing guide for corporate and enterprise clients.',
    category: 'Services & Pricing',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    downloadUrl: '/downloads/obbie-concepts-pricing-guide.pdf',
    iconName: 'pricing',
    featured: true,
  },
  {
    id: '4',
    title: 'Brand Assets & Press Kit',
    description: 'High-resolution logo package (PNG, SVG, EPS), brand color palettes, typography specs, and usage guidelines.',
    category: 'Brand Assets',
    fileType: 'ZIP',
    fileSize: '12.5 MB',
    downloadUrl: '/downloads/obbie-concepts-brand-kit.zip',
    iconName: 'brand',
  },
  {
    id: '5',
    title: 'SaaS Architecture & Growth Case Studies',
    description: 'A collection of real-world client case studies detailing conversion improvements, SEO growth, and platform scalability.',
    category: 'Case Studies',
    fileType: 'PDF',
    fileSize: '5.6 MB',
    downloadUrl: '/downloads/obbie-concepts-case-studies.pdf',
    iconName: 'casestudy',
  },
];