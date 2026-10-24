'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/types/project';
import { assetPath } from '@/lib/utils';

/** Only actual browser captures. Missing or unavailable previews never become stock artwork. */
export function ProjectPreview({ project, sizes, priority = false }: { project: Project; sizes: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!project.image || project.preview?.kind === 'unavailable' || failed) {
    return <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 bg-[#23153c] p-6 text-white">
      <span className="rounded-full border border-amber-300/40 px-3 py-1 text-xs font-bold text-amber-200">Código disponible</span>
      <p className="text-lg font-bold">{failed ? 'Captura no disponible' : 'Demo pendiente de verificar'}</p>
      <p className="max-w-lg text-xs leading-relaxed text-purple-100">{project.preview?.note || 'Revisa el repositorio para conocer el proyecto.'}</p>
    </div>;
  }
  return <>
    <Image src={assetPath(project.image)} alt={`Captura ${project.preview?.kind === 'local' ? 'de la aplicación local' : 'del sitio publicado'}: ${project.title}`} fill sizes={sizes} priority={priority} className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" onError={() => setFailed(true)} />
    <span className="absolute bottom-2 left-2 rounded-md border border-white/25 bg-slate-950/90 px-2.5 py-1 text-[10px] font-semibold text-white">{project.preview?.kind === 'local' ? 'Vista previa local' : 'Captura real del sitio'}{project.preview?.dateLabel ? ` · ${project.preview.dateLabel}` : ''}</span>
  </>;
}
