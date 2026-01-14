/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["localhost", "127.0.01"],
    },
};
  
module.exports = nextConfig;