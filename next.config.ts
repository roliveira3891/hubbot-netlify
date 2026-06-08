import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve formatos modernos (melhor compressão) quando o navegador suporta.
    formats: ["image/avif", "image/webp"],
    // Qualidades permitidas. 90 é usado nos screenshots do produto (UI com
    // muito texto, que sofre na compressão padrão de 75).
    qualities: [75, 90],
  },
};

export default nextConfig;
