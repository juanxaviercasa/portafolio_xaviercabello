/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') : '';
const basePath = process.env.basePath || process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions && repo ? `/${repo}` : '');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
