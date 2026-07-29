import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kafeneja",
  images: { unoptimized: true },
};

export default nextConfig;
