import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Exporta el proyecto a archivos estáticos
  trailingSlash: true, // Asegura que todas las rutas terminen con "/"
  images: {
    unoptimized: true, // Evita problemas con la optimización de imágenes
  },
};

export default nextConfig;
