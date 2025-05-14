import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://assets.jitter.video/horizontal-scroll/**'), new URL('https://jitter.video/aw-cms/**')],
  },
};

export default nextConfig;
