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
