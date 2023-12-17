/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hysj.kr',
      },
      {
        protocol: 'https',
        hostname: '**.htlab.kr',
      },
    ],
    domains: ['ghchart.rshah.org', 'github-readme-stats.vercel.app'],
  },
}

module.exports = nextConfig
