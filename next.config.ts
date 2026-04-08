import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Allow local images from public folder (default behaviour)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
