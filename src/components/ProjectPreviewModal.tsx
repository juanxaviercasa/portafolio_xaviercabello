'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Monitor, Image as ImageIcon } from 'lucide-react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { getDisplayUrl } from '@/lib/utils';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Modal de Inspección Rápida
 * Extraído y adaptado de las mejores prácticas de steven-tey/precedent
 * Permite explorar los detalles y una previsualización sin abandonar el catálogo principal.
 */
export function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<'image' | 'iframe'>('image');

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const displayUrl = getDisplayUrl(project.liveUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
          className="relative z-10 flex flex-col max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0e0f12] shadow-2xl shadow-black"
        >
          {/* Modal Header with Traffic Lights & Address Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#121316] px-5 py-3.5">
            <div className="flex items-center gap-3">
              {/* Window dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-[#f7f8f8] hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{project.title}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-zinc-400 hover:text-emerald-400 transition-colors block"
                >
                  https://{displayUrl}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Selector: Screenshot vs Live IFrame */}
              <div className="flex rounded-lg border border-white/[0.08] bg-black/40 p-0.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('image')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'image'
                      ? 'bg-white/[0.1] text-[#f7f8f8] shadow-bevel'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <ImageIcon className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Captura</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('iframe')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'iframe'
                      ? 'bg-white/[0.1] text-[#f7f8f8] shadow-bevel'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5 text-blue-400" />
                  <span>Sandbox</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/[0.08] hover:text-[#f7f8f8] transition-colors"
                title="Cerrar modal (Esc)"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Modal Media Area */}
          <div className="relative aspect-video w-full bg-[#08090a] border-b border-white/[0.08] overflow-hidden">
            {activeTab === 'image' ? (
              <div className="relative h-full w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            ) : (
              <div className="h-full w-full">
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  className="h-full w-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Modal Content Details */}
          <div className="p-6 bg-[#0e0f12] overflow-y-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="success" className="uppercase tracking-wider font-semibold font-mono text-[11px]">
                  {project.category}
                </Badge>
                {project.year && (
                  <Badge variant="outline" className="font-mono text-zinc-400 text-[11px]">
                    {project.year}
                  </Badge>
                )}
                {project.metrics && (
                  <span className="text-xs text-zinc-400 font-mono">· {project.metrics}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-300 shadow-bevel transition-all hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-[#f7f8f8]"
                  >
                    <Github className="h-4 w-4" />
                    <span>Ver Código</span>
                  </a>
                )}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-[#08090a] shadow-bevel transition-all hover:bg-emerald-400 active:scale-95"
                >
                  <span>Lanzar Subdominio</span>
                  <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            <p className="text-sm text-[#d0d6e0] leading-relaxed mb-4">
              {project.description}
            </p>

            <div>
              <span className="text-[11px] font-mono text-zinc-500 block mb-2 uppercase tracking-wider">
                Tecnologías y librerías utilizadas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border border-white/[0.06] bg-white/[0.02]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
