const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['press.hulu.com', 'images.tmdb.org'],
  },
  reactStrictMode: true,
})
