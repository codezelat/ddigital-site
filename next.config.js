/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
};
