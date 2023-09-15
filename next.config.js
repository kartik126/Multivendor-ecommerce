/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${hostname}`],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    APPLICATION_URL: process.env.APPLICATION_URL,
  },
};

module.exports = nextConfig;
