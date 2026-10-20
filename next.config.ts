import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow phone testing on local network
  //allowedDevOrigins: ['192.168.18.5'],
  // Required for Puppeteer / Chromium on Next.js App Router
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
  
};

export default nextConfig;