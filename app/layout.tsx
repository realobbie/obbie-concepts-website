// app/layout.tsx
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fontHeading, fontBody } from './fonts';
import './globals.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import JsonLd from '@/components/JsonLd';
import { ThemeProvider } from '@/components/theme-provider';
import { seoKeywordClusters } from '@/lib/seoKeywordClusters';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://obbieconcepts.com';

// Dynamically generate metadata keywords from your centralized cluster file
const siteKeywords = Array.from(
  new Set([
    ...seoKeywordClusters.brandAndAgency,
    ...seoKeywordClusters.graphicDesign.slice(0, 5),
    ...seoKeywordClusters.webDesignAndDevelopment.slice(0, 5),
    ...seoKeywordClusters.digitalMarketing.slice(0, 5),
    ...seoKeywordClusters.printing.slice(0, 5),
    ...seoKeywordClusters.brandingAndPromotionalProducts.slice(0, 5),
    ...seoKeywordClusters.softwareAndSaaS.slice(0, 5),
  ])
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Obbie Concepts | Graphic Design, Printing, Web Design & Digital Marketing in Eldoret, Kenya',
    template: '%s | Obbie Concepts',
  },
  description:
    'Obbie Concepts is a premier creative digital agency in Eldoret, Kenya. We specialize in custom web application development, corporate brand identity, digital marketing, flyers, brochures, custom merchandise branding, and large-format printing.',
  keywords: siteKeywords,
  authors: [{ name: 'Obbie Concepts', url: SITE_URL }],
  creator: 'Obbie Concepts',
  publisher: 'Obbie Concepts',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Obbie Concepts | Creative Digital Agency & Printing Services in Eldoret',
    description:
      'We scale modern brands across Kenya with stunning graphics, high-speed websites, targeted digital marketing, and precision physical printing.',
    url: SITE_URL,
    siteName: 'Obbie Concepts',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/assets/landin-collage.webp',
        width: 1200,
        height: 630,
        alt: 'Obbie Concepts Creative Agency Eldoret Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obbie Concepts | Creative Digital Agency & Printing Services',
    description:
      'High-speed web portals, graphic design, large format printing, and performance digital marketing in Eldoret, Kenya.',
    images: ['/assets/landin-collage.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontHeading.variable} ${fontBody.variable}`}
    >
      <body className="font-body antialiased bg-[#FAFAFA] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 flex flex-col min-h-screen relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Inject Structured Schema globally for AI & Search Engine Crawlers */}
          <JsonLd />

          {/* ================= SITE CONTENT ================= */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />

            {/* Standard main container */}
            <main className="flex-grow">{children}</main>

            <Footer />
          </div>

          {/* Vercel Monitoring */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}