/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/analistas",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
