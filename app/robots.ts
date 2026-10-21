// app/robots.ts
import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://obbieconcepts.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/tools/login'], // Protect sensitive routes from crawling
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}