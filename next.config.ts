import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve formatos modernos (melhor compressão) quando o navegador suporta.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
