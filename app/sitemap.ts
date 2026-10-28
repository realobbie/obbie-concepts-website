// app/sitemap.ts
import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/lib/servicesData';
import { BLOG_POSTS } from '@/lib/blogData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://obbieconcepts.com';

const PRODUCT_SLUGS = [
  'obbie-invoice-generator',
  'citysearch',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/products',
    '/blog',
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

  // 2. Dynamic Product Routes
  const productRoutes: MetadataRoute.Sitemap = PRODUCT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Dynamic Service Routes (Imported straight from your single source of truth)
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 4. Dynamic Blog Post Routes (Imported straight from your blog data)
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes, ...blogRoutes];
}