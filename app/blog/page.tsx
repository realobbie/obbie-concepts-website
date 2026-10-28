// app/blog/page.tsx
import type { Metadata } from 'next';
import { seoKeywordClusters } from '@/lib/seoKeywordClusters';
import BlogListingContent from '@/components/BlogListingContent';

export const metadata: Metadata = {
  title: 'Journal & Tech Insights | Obbie Concepts Kenya',
  description:
    'Read expert articles, technical tutorials, and business guides on web development, corporate branding, printing, and digital marketing in Eldoret and Kenya.',
  keywords: [
    ...seoKeywordClusters.webDesignAndDevelopment,
    ...seoKeywordClusters.digitalMarketing,
    'Obbie Concepts Journal',
    'Tech Insights Kenya',
    'Web Development Eldoret Articles',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Journal & Tech Insights | Obbie Concepts',
    description:
      'Expert guides on software development, design, printing, and digital growth for Kenyan businesses.',
    url: 'https://obbieconcepts.com/blog',
    siteName: 'Obbie Concepts',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogListingContent />;
}