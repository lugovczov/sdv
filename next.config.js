const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    serverSourceMaps: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData: `@import '@styles/breakpoints.scss';`,
  },
};

module.exports = nextConfig;
