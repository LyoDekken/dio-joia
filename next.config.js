/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: [
    "page.tsx",
    "api.ts",
    "api.tsx"
  ],
  images: {
    domains: [
      'diojoiasemprata.com.br',
      'job.risestudio.com.br',
      'i.gifer.com'
    ],
  }
}

module.exports = nextConfig;
