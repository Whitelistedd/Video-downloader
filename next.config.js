/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['muha.mo.cloudinary.net'],
  }
}

module.exports = nextConfig
