/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {turbo: undefined},
  // Commit two points for local start
  output: 'export',
  basePath: '/cv',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, {dev}) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
