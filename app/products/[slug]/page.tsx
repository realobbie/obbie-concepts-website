// app/products/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailContent, { ProductItem } from '@/components/ProductDetailContent';

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

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found | Obbie Concepts' };
  }

  return {
    title: `${product.title} | Obbie Concepts Software Kenya`,
    description: product.shortDescription,
    keywords: [
      product.title,
      product.category,
      ...product.features,
      'Obbie Concepts Software',
      'SaaS Development Kenya',
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Obbie Concepts`,
      description: product.shortDescription,
      url: `https://obbieconcepts.com/products/${product.slug}`,
      type: 'website',
      images: [
        {
          url: product.mainImage.startsWith('http') ? product.mainImage : `https://obbieconcepts.com${product.mainImage}`,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) notFound();

  // SoftwareApplication JSON-LD schema for AI & Search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: product.category,
    operatingSystem: 'All',
    description: product.shortDescription,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KES',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Obbie Concepts',
      url: 'https://obbieconcepts.com',
      telephone: '+254735602433',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zion Mall Building, off Malaba Rd',
        addressLocality: 'Eldoret',
        addressRegion: 'Uasin Gishu County',
        postalCode: '30100',
        addressCountry: 'KE',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ProductDetailContent product={product} />
    </>
  );
}