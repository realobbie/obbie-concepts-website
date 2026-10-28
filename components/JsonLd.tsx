import type { WithContext, LocalBusiness } from 'schema-dts';
import { seoKeywordClusters } from '@/lib/seoKeywordClusters';

export default function JsonLd() {
  // Dynamically compile a deduplicated list of entity topics for AI/LLM understanding
  const dynamicKnowsAbout = Array.from(
    new Set([
      ...seoKeywordClusters.brandAndAgency,
      ...seoKeywordClusters.graphicDesign,
      ...seoKeywordClusters.webDesignAndDevelopment,
      ...seoKeywordClusters.digitalMarketing,
      ...seoKeywordClusters.printing,
      ...seoKeywordClusters.brandingAndPromotionalProducts,
      ...seoKeywordClusters.softwareAndSaaS,
      ...seoKeywordClusters.invoiceGenerator,
      ...seoKeywordClusters.contentCreationAndPhotography,
      ...seoKeywordClusters.uiUxAndProductDesign,
      'Next.js and React Application Development',
      'M-Pesa Payment Integration',
      'Full-Stack Custom Software & SaaS Architecture',
      'Large Format Commercial Print Production',
    ])
  );

  const jsonLd: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',

    '@id': 'https://obbieconcepts.com/#business',
    name: 'Obbie Concepts',
    url: 'https://obbieconcepts.com',

    description:
      'Obbie Concepts is an integrated creative, digital, and technology agency in Eldoret, Kenya. We specialize in corporate branding, large-format printing, custom web application development, SaaS solutions, and digital marketing.',

    image: 'https://obbieconcepts.com/assets/landin-collage.webp',
    logo: 'https://obbieconcepts.com/obbieLogo.png',

    telephone: '+254735602433',
    email: 'hello@obbieconcepts.com',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zion Mall Building, off Malaba Rd',
      addressLocality: 'Eldoret',
      addressRegion: 'Uasin Gishu County',
      postalCode: '30100',
      addressCountry: 'KE',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0.5143,
      longitude: 35.2698,
    },

    areaServed: [
      {
        '@type': 'City',
        name: 'Eldoret',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Uasin Gishu County',
      },
      {
        '@type': 'Country',
        name: 'Kenya',
      },
    ],

    // Feeds entity markers directly to AI Search Engines (Perplexity, Gemini, ChatGPT)
    knowsAbout: dynamicKnowsAbout,

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Obbie Concepts Agency Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Graphic Design & Brand Identity',
            description:
              'Logo design, corporate identity design, company profiles, brochures, packaging, and brand guidelines.',
            areaServed: 'Kenya',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Software Development',
            description:
              'Custom Next.js web application development, SaaS platforms, e-commerce stores with M-Pesa integration, and business management software.',
            areaServed: 'Kenya',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Large Format & Commercial Printing',
            description:
              'Banner printing, shop signage, vehicle branding, pull-up banners, stickers, receipt books, and promotional merchandise.',
            areaServed: 'Kenya',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing & Local SEO',
            description:
              'Meta & Google ad funnels, search engine optimization (SEO), local Google Business Profile management, and social media marketing.',
            areaServed: 'Kenya',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Content & Product Photography',
            description:
              'Product photography, corporate headshots, reels video production, SEO copywriting, and business storytelling.',
            areaServed: 'Kenya',
          },
        },
      ],
    },
  };

  // Sanitize string output to protect against script injection
  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}