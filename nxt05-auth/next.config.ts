import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  auth: {
    secret: process.env.AUTH_SECRET || 'secret',
  },
};

export default nextConfig;
