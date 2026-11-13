import { CATEGORIES } from '@/data/portfolio.config';
import type { Project, ProjectCategory, ProjectCategoryId } from '@/types/project';

export type ProjectFormatId = Extract<ProjectCategoryId, 'webapp' | 'web' | 'mobile' | 'tools' | 'templates'>;
export type ProjectAreaId = Extract<ProjectCategoryId, 'ai' | 'edtech' | 'pymes' | 'leisure' | 'automation' | 'culture' | 'development'>;
export type ProjectFormatFilter = 'all' | ProjectFormatId;
export type ProjectAreaFilter = 'all' | ProjectAreaId;

export interface FacetOption<T extends string> {
  id: T;
  label: string;
  description?: string;
}

const category = (id: ProjectCategoryId): ProjectCategory | undefined =>
  CATEGORIES.find((item) => item.id === id);

function optionsFor<T extends ProjectCategoryId>(ids: readonly T[]): FacetOption<T>[] {
  return ids.flatMap((id) => {
    const item = category(id);
    return item ? [{ id, label: item.label, description: item.description }] : [];
  });
}

export const PROJECT_FORMATS: FacetOption<ProjectFormatFilter>[] = [
  { id: 'all', label: 'Todos' },
  ...optionsFor(['webapp', 'web', 'mobile', 'tools', 'templates'] as const),
];

export const PROJECT_AREAS: FacetOption<ProjectAreaFilter>[] = [
  { id: 'all', label: 'Todas' },
  ...optionsFor(['edtech', 'pymes', 'ai', 'leisure', 'automation', 'culture', 'development'] as const),
];

export function isProjectFormat(value: string | null): value is ProjectFormatFilter {
  return PROJECT_FORMATS.some((item) => item.id === value);
}

export function isProjectArea(value: string | null): value is ProjectAreaFilter {
  return PROJECT_AREAS.some((item) => item.id === value);
}

export function isFormatCategory(value: string | null): value is ProjectFormatId {
  return value !== null && PROJECT_FORMATS.some((item) => item.id === value && item.id !== 'all');
}

export function isAreaCategory(value: string | null): value is ProjectAreaId {
  return value !== null && PROJECT_AREAS.some((item) => item.id === value && item.id !== 'all');
}

export function projectHasCategory(project: Project, categoryId: ProjectCategoryId): boolean {
  return project.category === categoryId || Boolean(project.categories?.includes(categoryId));
}
