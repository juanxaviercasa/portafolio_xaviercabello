/** @type {import('next').NextConfig} */
// Despliegue principal: Cloudflare Pages (sin basePath).
// Si se compila dentro de GitHub Actions para GitHub Pages, se calcula el basePath del repo
// y se expone como NEXT_PUBLIC_BASE_PATH para que las rutas de imágenes locales sigan funcionando.
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') : '';
const basePath = process.env.basePath || process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions && repo ? `/${repo}` : '');

const nextConfig = {
  // Keep a running development server independent from production builds.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
