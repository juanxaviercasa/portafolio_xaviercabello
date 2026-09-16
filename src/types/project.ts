export type ProjectCategoryId =
  | 'all'
  | 'edtech'
  | 'pymes'
  | 'tools'
  | 'automation'
  | 'culture'
  | 'templates';

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
  description?: string;
}

export type ProjectStatus = 'online' | 'beta' | 'maintenance';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategoryId;
  subdomain: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  tags: string[];
  featured?: boolean;
  status?: ProjectStatus;
  year?: number;
  metrics?: string;
}

export interface PortfolioConfig {
  owner: {
    name: string;
    role: string;
    tagline: string;
    subdomainDomain: string;
    socials: {
      github?: string;
      linkedin?: string;
      email?: string;
      twitter?: string;
      tiktok?: string;
    };
  };
  showcase: {
    itemsPerPage: number;
    defaultView: 'grid' | 'table';
    enableQuickModalPreview: boolean;
  };
}
