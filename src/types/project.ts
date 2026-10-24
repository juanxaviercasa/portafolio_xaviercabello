export type ProjectCategoryId =
  | 'all'
  | 'webapp'
  | 'web'
  | 'mobile'
  | 'edtech'
  | 'pymes'
  | 'ai'
  | 'tools'
  | 'leisure'
  | 'automation'
  | 'culture'
  | 'templates';

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
  description?: string;
}

export type ProjectStatus = 'online' | 'beta' | 'maintenance';

/** Información de progreso para proyectos en desarrollo (< 100%) */
export interface ProjectProgress {
  percentage: number;
  phase?: string;
  isPlaceholder?: boolean;
}

/** Plataforma que sirve la versión en vivo (el código siempre vive en GitHub). */
export type ProjectHosting = 'cloudflare' | 'siteground' | 'vercel' | 'github';

export interface Project {
  preview?: {kind: 'live' | 'local' | 'unavailable'; sourceUrl?: string; capturedAt?: string; dateLabel?: string; note: string};
  evidence?: {codeUrl: string; readmeUrl: string | null; manifestUrl: string | null; latestCommitUrl: string; minimumCommits: number; codeFileCount: number};
  id: string;
  repositoryReview?: {verified: boolean; pushedAt?: string; label?: string; language?: string | null; archived?: boolean; description?: string | null};
  title: string;
  description: string;
  summary?: string;
  category: ProjectCategoryId;
  categories?: ProjectCategoryId[];
  subcategory?: string;
  progress?: ProjectProgress;
  subdomain: string;
  liveUrl: string;
  githubUrl?: string;
  figmaUrl?: string;
  image: string;
  tags: string[];
  featured?: boolean;
  status?: ProjectStatus;
  developmentState: 'completed' | 'in_progress';
  hosting?: ProjectHosting;
  year?: number;
  metrics?: string;

  // Campos de detalle formativo y técnico (Showcase profundo)
  about?: string;            // De qué trata el proyecto en profundidad
  whatILearned?: string[];   // Qué aprendí yo como programador / Desafíos técnicos
  whatITeach?: string[];     // Qué puedo enseñar a los estudiantes / Aplicación práctica
  architecture?: string;     // Stack, arquitectura Edge / Jamstack, herramientas IA
  highlights?: string[];     // Puntos clave o funcionalidades destacadas
  simpleExplanation?: string; // Explicación en palabras sencillas para público no técnico
  howToApply?: string[];      // Cómo el usuario final podría aplicar esto en su propio negocio o proyecto
}

export interface PortfolioConfig {
  owner: {
    name: string;
    alias?: string;
    role: string;
    tagline: string;
    siteUrl: string;
    brandMark?: string;
    socials: {
      github?: string;
      linkedin?: string;
      email?: string;
      twitter?: string;
      tiktok?: string;
      whatsapp: string;
    };
  };
  showcase: {
    itemsPerPage: number;
    defaultView: 'grid' | 'table';
  };
  training: {
    url: string;
  };
}
