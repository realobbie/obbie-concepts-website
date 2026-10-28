// app/sitemap.ts
import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://obbieconcepts.com';

const PRODUCT_SLUGS = [
  'obbie-invoice-generator',
  'citysearch',
  
];

const SERVICES_SLUGS = [
  'vinyl-banner-printing',
  'business-content-creation',
  'web-design-development',
  'digital-marketing',
  'branding-identity',
  'printing-services',
  'graphic-design',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/products',
    '/about',
    '/booking',
    '/contact',
    '/tools/invoice',
    '/privacy-policy',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}