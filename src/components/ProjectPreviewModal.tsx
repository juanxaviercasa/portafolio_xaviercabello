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
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className="relative z-10 flex flex-col max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/80"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-zinc-100 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{project.title}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors block"
                >
                  https://{displayUrl}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Selector: Screenshot vs Live IFrame */}
              <div className="flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('image')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'image'
                      ? 'bg-zinc-800 text-emerald-400'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <ImageIcon className="h-3.5 w-3.5" />
                  <span>Captura</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('iframe')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'iframe'
                      ? 'bg-zinc-800 text-emerald-400'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" />
                  <span>Sandbox</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                title="Cerrar modal (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Modal Media Area */}
          <div className="relative aspect-video w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden">
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
          <div className="p-6 bg-zinc-900/90 overflow-y-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="success" className="uppercase tracking-wider font-semibold">
                  {project.category}
                </Badge>
                {project.year && (
                  <Badge variant="outline" className="font-mono text-zinc-400">
                    {project.year}
                  </Badge>
                )}
                {project.metrics && (
                  <span className="text-xs text-zinc-400">· {project.metrics}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/80 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:bg-zinc-700"
                  >
                    <Github className="h-4 w-4" />
                    <span>Ver Código</span>
                  </a>
                )}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-emerald-400 shadow-md shadow-emerald-500/20"
                >
                  <span>Abrir Subdominio Completo</span>
                  <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {project.description}
            </p>

            <div>
              <span className="text-xs font-semibold text-zinc-400 block mb-2 uppercase tracking-wider">
                Tecnologías y librerías utilizadas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
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
