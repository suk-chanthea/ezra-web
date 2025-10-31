import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8088",
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8088",
  },
};

export default nextConfig;
