import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow phone testing on local network
  allowedDevOrigins: ['192.168.18.5'],
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