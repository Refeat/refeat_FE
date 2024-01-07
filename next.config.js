/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {
  // swcMinify: true,
  // output: "standalone",
};

module.exports = withNextIntl(nextConfig);
