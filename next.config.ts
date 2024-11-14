import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    "remotePatterns": [
      {
        protocol: "https",
        hostname: "*.ggpht.com"
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "placehold.co"
      }
    ]
  },
  /* config options here */
};

export default nextConfig;
