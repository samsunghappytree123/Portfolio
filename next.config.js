/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['ghchart.rshah.org', 'github-readme-stats.vercel.app'],
  },
}

module.exports = nextConfig
