// app/services/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/servicesData';
import ServiceDetailContent from '@/components/ServiceDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Params for High-Speed SSG
export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

// 2. Dynamic SEO Metadata per Service Slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    return { title: 'Service Not Found | Obbie Concepts' };
  }

  return {
    title: `${service.title} in Eldoret & Kenya | Obbie Concepts`,
    description: service.summary,
    keywords: [
      service.title,
      `${service.title} Eldoret`,
      `${service.title} Kenya`,
      ...service.deliverables,
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Obbie Concepts`,
      description: service.summary,
      url: `https://obbieconcepts.com/services/${service.slug}`,
      type: 'website',
      images: [
        {
          url: service.heroImage.startsWith('http') ? service.heroImage : `https://obbieconcepts.com${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);

  if (!service) notFound();

  // 3. AEO Structured Data Schema for individual service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
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
    description: service.description,
    areaServed: ['Eldoret', 'Uasin Gishu County', 'Kenya'],
    serviceType: service.category,
  };

  return (
    <>
      {/* Inject Structured Schema for AI Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ServiceDetailContent service={service} />
    </>
  );
}