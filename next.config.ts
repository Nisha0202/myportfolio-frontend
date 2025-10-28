import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     domains: ['i.pinimg.com']
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
};

export default nextConfig;
