/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    }
  },
  images: {
    domains: ['stnkworkshop-images.s3.amazonaws.com']
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig
