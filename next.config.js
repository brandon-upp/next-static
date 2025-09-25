/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next-static",
  images: {unoptimized: true}
};

module.exports = nextConfig;
