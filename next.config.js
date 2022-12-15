const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})

const i18n = require("./next-i18next.config")

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n,
})

module.exports = nextConfig
