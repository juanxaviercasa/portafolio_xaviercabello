/** @type {import('next').NextConfig} */
// Cloudflare Pages sirve el sitio desde la raíz del dominio, también cuando compila en GitHub Actions.
// Se permite un basePath solo si el entorno lo declara explícitamente para otra instalación.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.basePath || '';

const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
