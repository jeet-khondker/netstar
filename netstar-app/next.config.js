/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Reference URL : https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig
