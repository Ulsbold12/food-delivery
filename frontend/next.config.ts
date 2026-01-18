import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "u1i2jd28bovycgpr.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
