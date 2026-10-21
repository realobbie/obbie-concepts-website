// app/layout.tsx
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fontHeading, fontBody } from './fonts';
import './globals.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://obbieconcepts.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Obbie Concepts | Graphic Design, Printing, Web Design & Digital Marketing in Eldoret, Kenya',
    template: '%s | Obbie Concepts',
  },
  description:
    'Obbie Concepts is a premier creative digital agency in Eldoret, Kenya. We specialize in custom web application development, corporate brand identity, digital marketing, flyers, brochures, custom merchandise branding, and large-format printing.',
  keywords: [
    'Obbie Concepts',
    'Graphic Design Eldoret',
    'Web Design Eldoret',
    'Web Development Kenya',
    'Digital Marketing Agency Kenya',
    'Large Format Printing Eldoret',
    'Branding Agency Eldoret',
    'Printing and Branding Kenya',
    'Next.js Web Developers Kenya',
    'Meta Ads Agency Kenya',
    'Custom Invoicing SaaS Kenya',
    'Corporate Identity Design Kenya',
    // --- Local Print & Promotional Keywords ---
    'Flyer Design & Printing Eldoret',
    'Brochure Printing Kenya',
    'Poster Design Eldoret',
    'Funeral Program Printing Kenya',
    'Hoodie Branding Eldoret',
    'Mug & Cup Branding Kenya',
    'Campaign Posters Printing Kenya',
    'Banner Printing Eldoret',
    'Custom Apparel Branding Kenya',
  ],
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
      'We scale modern brands across Kenya with stunning graphics, high-speed Next.js web portals, targeted digital marketing, and precision physical printing.',
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
          {/* ================= SITE CONTENT ================= */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />

            {/* Standard main container without artificial top padding */}
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