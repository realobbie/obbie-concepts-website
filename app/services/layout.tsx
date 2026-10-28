// app/services/layout.tsx
import type { Metadata } from 'next';
import { seoKeywordClusters } from '@/lib/seoKeywordClusters';

export const metadata: Metadata = {
  title: 'Services & Capabilities | Web Dev, Printing & Branding in Eldoret',
  description:
    'Explore Obbie Concepts end-to-end capabilities: Custom web design & development, corporate brand identity, large-format printing, digital marketing, and software solutions in Eldoret and across Kenya.',
  keywords: [
    ...seoKeywordClusters.webDesignAndDevelopment,
    ...seoKeywordClusters.graphicDesign,
    ...seoKeywordClusters.brandingAndPromotionalProducts,
    ...seoKeywordClusters.digitalMarketing,
    ...seoKeywordClusters.softwareAndSaaS,
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & Capabilities | Obbie Concepts Eldoret',
    description:
      'From custom web software to corporate branding and high-speed print production in Eldoret and across Kenya.',
    url: 'https://obbieconcepts.com/services',
    siteName: 'Obbie Concepts',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}