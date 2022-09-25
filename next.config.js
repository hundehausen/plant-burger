/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
};

module.exports = nextConfig;
