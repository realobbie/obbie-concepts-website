// app/products/[slug]/page.tsx
'use client';

import { useState, useEffect, useCallback, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  IconArrowLeft, 
  IconBrandWhatsapp, 
  IconCheck, 
  IconX, 
  IconMaximize, 
  IconLayersIntersect,
  IconShieldCheck,
  IconSparkles
} from '@tabler/icons-react';

// Example products data fallback structure
interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
  features: string[];
  specifications: { label: string; value: string }[];
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: '1',
    slug: 'obbie-invoice-generator',
    title: 'Obbie Invoice Generator & Billing Suite',
    category: 'SaaS Platforms',
    shortDescription: 'An automated, password-protected billing engine that instantly generates verifiable invoices, quotes, and receipts with secure cloud archiving.',
    description: [
      'We built the Obbie Invoice Generator to eliminate the friction of manual paperwork, lost receipts, and invoice verification headaches.',
      'Whether you are billing corporate clients or issuing point-of-sale receipts, our platform produces crisp, branded PDF documents on demand.',
      'Every generated document embeds a tamper-proof QR code linked to a secure ledger in Supabase, giving your business absolute transparency, professional polish, and effortless record-keeping.'
    ].join('\n\n'),
    mainImage: '/assets/oc/invoice-generator.webp',
    galleryImages: [
      '/assets/oc/invoice-generator.webp',
      '/assets/oc/quotation-generator.webp',
      '/assets/oc/authenticate.webp',
    ],
    features: [
      'Instant PDF Generation for Invoices, Quotations, and Receipts',
      'Tamper-Proof QR Code Authenticity Check & Live Verification Page',
      'Secure Automated Cloud Archiving via Private Supabase Storage',
      'Password-Protected Admin Portal & Fully Responsive Mobile UI'
    ],
    specifications: [
      { label: 'Platform Type', value: 'Web-Based SaaS / Next.js App Router' },
      { label: 'Security', value: 'Encrypted HTTP-Only Session Cookies' },
      { label: 'Cloud Storage', value: 'Supabase Private Bucket (Service Role)' },
      { label: 'Output Format', value: 'High-Resolution Vector PDF' }
    ]
  },

  {
    id: '2',
    slug: 'citysearch',
    title: 'citySearch — Hyperlocal Business Discovery Platform',
    category: 'SaaS Platforms',
    shortDescription: 'A hyperlocal business discovery platform developed by Obbie Concepts to help customers find local businesses across Kenya, explore their offerings, and connect directly through phone calls, WhatsApp, and Google Maps.',
    description: [
          'citySearch is a digital business discovery platform developed by Obbie Concepts to make finding local businesses easier. Whether customers are looking for a restaurant, a reliable plumber, a retail shop, or a professional service, citySearch helps them discover relevant businesses without the frustration of scrolling through unrelated results.',

          'The platform brings business information together in one accessible place, allowing customers to explore business profiles, discover services, view photos, read available customer reviews, and connect directly through phone calls or WhatsApp. With Google Maps directions, users can move from discovering a business to finding and contacting it with ease.',

          'For business owners, citySearch creates an opportunity to get found by potential customers actively searching for the products and services they offer. By showcasing their businesses online and making it easier for customers to connect with them, local enterprises can strengthen their digital presence and improve their visibility. Built by Obbie Concepts to support local commerce across Kenya, citySearch is making business discovery simpler for customers and helping businesses get closer to their next opportunity.'
        ].join('\n\n'),
    mainImage: '/assets/citysearch/citysearch-homepage.webp',
    galleryImages: [
      '/assets/citysearch/citysearch-homepage.webp',
      '/assets/citysearch/citysearch-search-results.webp',
      '/assets/citysearch/citysearch-business-profile.webp',
      '/assets/citysearch/citysearch-dashboard.webp',
      '/assets/citysearch/citysearch-found-results.webp',
      '/assets/citysearch/citysearch-reviews.webp'
    ],
    features: [
      'Location-Relevant Business Discovery to Help Customers Find Businesses and Services',
      'Business Profiles Featuring Descriptions, Services, Photos, and Available Customer Reviews',
      'Direct Customer Connections Through Phone Calls and WhatsApp',
      'Google Maps Directions for Convenient Business Location Discovery and Navigation',
      'Business Information and Descriptions to Help Customers Understand Available Offerings',
      'Mobile-Responsive Interface for Business Discovery Across Devices',
      'Digital Business Visibility for Local Enterprises Across Kenya',
      'Business Registration and Listing Management for Participating Businesses'
    ],
    specifications: [
      { label: 'Platform Type', value: 'Web-Based SaaS / Hyperlocal Business Discovery Platform' },
      { label: 'Product Owner', value: 'Obbie Concepts' },
      { label: 'Target Market', value: 'Consumers, SMEs, and Local Businesses Across Kenya' },
      { label: 'Core Functionality', value: 'Business Discovery, Digital Listings, and Direct Customer Connections' },
      { label: 'Communication Channels', value: 'Phone Calls and WhatsApp' },
      { label: 'Location Services', value: 'Google Maps Directions and Business Location Discovery' },
      { label: 'Access', value: 'Public Business Discovery with Business Account Registration' },
      { label: 'Business Model', value: 'Business Discovery Platform with an Evolving Monetization Strategy' },
      { label: 'Website', value: 'https://citysearch.co.ke' }
    ]
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  const product = PRODUCTS_DATA.find((p) => p.slug === slug) || PRODUCTS_DATA[0];

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>(
    product?.mainImage || ''
  );

  // Touch gesture handling variables for mobile swipe-to-close
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const whatsappNumber = "254735602433";

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImage, closeLightbox]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  if (!product) {
    notFound();
  }

  // Mobile Touch Swipe Handlers for Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffY) > 80) {
      closeLightbox();
    }
    setTouchStartY(null);
  };

  return (
    <article className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <div data-aos="fade-down" className="mb-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-orange transition-colors"
          >
            <IconArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Left Column: Image Showcase */}
          <div data-aos="fade-right" className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Primary Featured Image Viewport */}
            <div 
              onClick={() => setActiveImage(selectedGalleryImage)}
              className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#131B2A] group cursor-pointer shadow-md"
            >
              <Image
                src={selectedGalleryImage}
                alt={product.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tap / Click to Expand Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg">
                  <IconMaximize size={16} /> Tap to Expand Preview
                </span>
              </div>
            </div>

            {/* Thumbnail Selection Bar */}
            {product.galleryImages && product.galleryImages.length > 0 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGalleryImage(img)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      selectedGalleryImage === img
                        ? 'border-brand-orange scale-105 shadow-md'
                        : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information */}
          <div data-aos="fade-left" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3">
                {product.category}
              </span>

              <h1 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                {product.title}
              </h1>

              {/* Formatted Description with Spacing for Long Text */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {product.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Highlights List */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Product Key Features
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <IconCheck size={16} className="text-brand-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technical Specifications
                </h3>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800 bg-slate-50 dark:bg-[#131B2A] overflow-hidden">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 text-xs gap-4">
                      <span className="font-semibold text-slate-500 dark:text-slate-400 text-left shrink-0">
                        {spec.label}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-right break-words">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call To Action */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello Obbie Concepts! I would like to order or inquire about "${product.title}".`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3.5 rounded-2xl font-bold text-xs hover:bg-brand-orange-hover active:scale-95 transition-all shadow-lg"
              >
                <IconBrandWhatsapp size={18} /> Request Instant Quote on WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* Touch Responsive Lightbox Modal Overlay */}
        {activeImage && (
          <div 
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-pointer touch-none"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              data-aos="zoom-in"
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl cursor-default"
            >
              {/* Modal Control Header Bar */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-900/90 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white/80">
                    {product.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-800 px-2 py-0.5 rounded-md">
                    ESC
                  </span>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close image preview"
                    className="p-2 bg-slate-800 hover:bg-brand-orange text-white rounded-full transition-colors cursor-pointer shadow-md"
                  >
                    <IconX size={20} />
                  </button>
                </div>
              </div>

              {/* Expandable Image Viewport */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-950">
                <Image
                  src={activeImage}
                  alt="Full-size Product Preview"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Mobile Gesture Hint Footer */}
              <div className="p-3 text-center border-t border-slate-800/60 bg-slate-900 text-[11px] text-slate-400 shrink-0">
                <span className="sm:hidden">Swipe down or tap close to exit</span>
                <span className="hidden sm:inline">Press ESC or click outside to exit preview</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </article>
  );
}