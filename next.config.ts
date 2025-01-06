import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.pexels.com",
      "i.imgur.com",
      "i.pravatar.cc",
      "picsum.photos",
      "fakestoreapi.com",
    ], // Add the hostname of your external image source
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

