import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",

  basePath: "/sima",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
