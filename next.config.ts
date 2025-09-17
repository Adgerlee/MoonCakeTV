import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.DOCKER_ENV === "true" ? "standalone" : undefined,
  reactStrictMode: true, // 
};

export default nextConfig;
