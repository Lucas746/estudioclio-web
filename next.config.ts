import type { NextConfig } from "next";

// Sitio estático: `next build` genera la carpeta `out/`, que Cloudflare publica tal cual.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
