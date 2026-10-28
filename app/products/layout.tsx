// app/products/layout.tsx
import type { Metadata } from 'next';
import { seoKeywordClusters } from '@/lib/seoKeywordClusters';

export const metadata: Metadata = {
  title: 'Software Products & Digital Portals | Obbie Concepts Kenya',
  description:
    'Explore ready-to-deploy software products, digital platforms, custom invoicing SaaS, and brand identity systems engineered by Obbie Concepts in Eldoret, Kenya.',
  keywords: [
    ...seoKeywordClusters.softwareAndSaaS,
    ...seoKeywordClusters.invoiceGenerator,
    ...seoKeywordClusters.webDesignAndDevelopment,
    'Obbie Concepts Products',
    'Custom SaaS Development Kenya',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Software Products & Brand Systems | Obbie Concepts',
    description:
      'Explore ready-to-deploy web platforms, apps, and digital systems engineered for modern brands.',
    url: 'https://obbieconcepts.com/products',
    siteName: 'Obbie Concepts',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}