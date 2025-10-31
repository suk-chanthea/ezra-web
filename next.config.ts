import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8088",
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8088",
    NEXT_PUBLIC_FIREBASE_VAPID_KEY: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY || "BAhvVYawwBaTD7iDM3KGU0YRNxjraiOe9KCUMWdyDTp3Y5enhEpplE_w7Pz4E6qg9SWkYGPOMvvjsWmu8s5gvRg",
  },
};

export default nextConfig;
