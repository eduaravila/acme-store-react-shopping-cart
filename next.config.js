const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  images: {
    domains: ['placeimg.com'],
  },
}

module.exports = nextConfig
