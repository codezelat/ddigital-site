import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
      },
    ],
  },
  // Enable React Compiler (experimental in React 19)
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
