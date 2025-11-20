/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config, { isServer }) => {
    // Exclude Supabase functions from build
    config.module.rules.push({
      test: /src[\/\\]supabase[\/\\]functions/,
      loader: 'ignore-loader'
    });
    return config;
  },
};

module.exports = nextConfig;