import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment the line below if you want pure static HTML/CSS/JS export (e.g. for GitHub Pages / Cloudflare Pages)
  // output: 'export',
  images: {
    // Allows loading external avatars or unoptimized images for static exports if needed
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
