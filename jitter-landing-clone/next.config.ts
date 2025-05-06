import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://assets.jitter.video/horizontal-scroll/**')],
  },
};

export default nextConfig;
