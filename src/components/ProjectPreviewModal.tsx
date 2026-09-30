'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Monitor,
  Image as ImageIcon,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Cpu,
  Sparkles,
  CheckCircle2,
  Lock,
  Info,
} from 'lucide-react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { getDisplayUrl } from '@/lib/utils';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Modal de Ficha Técnica, Pedagógica y Previsualización
 * Permite a estudiantes, reclutadores y clientes explorar:
 * 1. De qué trata el proyecto
 * 2. Qué aprendió Xavier como programador (desafíos resueltos y arquitectura)
 * 3. Qué puede enseñar a los estudiantes del curso / mentoría
 * 4. Captura en alta resolución o Sandbox interactivo embebido
 */
export function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'image' | 'iframe'>('details');

  // Reset tab to details when a new project is opened
  useEffect(() => {
    if (project) {
      setActiveTab('details');
    }
  }, [project]);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
          className="relative z-10 flex flex-col max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d0e11] shadow-2xl shadow-black"
        >
          {/* Modal Header with Traffic Lights, Title & Tab Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#121316] px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Traffic light dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#f7f8f8] truncate">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="hidden sm:inline-block font-mono text-[10px]">
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                  <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">https://{displayUrl}</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-white/[0.08] bg-black/50 p-0.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'details'
                      ? 'bg-emerald-500 text-[#08090a] font-bold shadow-bevel'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Ficha & Aprendizajes</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('image')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'image'
                      ? 'bg-white/[0.12] text-[#f7f8f8] shadow-bevel'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <ImageIcon className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Captura</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('iframe')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    activeTab === 'iframe'
                      ? 'bg-white/[0.12] text-[#f7f8f8] shadow-bevel'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Sandbox</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/[0.08] hover:text-[#f7f8f8] transition-colors"
                title="Cerrar ventana (Esc)"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Modal Body Area */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'details' && (
              <div className="p-5 sm:p-7 space-y-6 bg-[#0e0f12]">
                {/* 1. ¿De qué trata el proyecto? */}
                <div className="rounded-xl border border-white/[0.08] bg-[#121316] p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>¿De qué trata este proyecto?</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {project.about || project.description}
                  </p>

                  {/* Explicación Sencilla */}
                  {project.simpleExplanation && (
                    <div className="mt-5 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold text-blue-400">
                        <Info className="h-3.5 w-3.5" />
                        <span>En palabras sencillas</span>
                      </div>
                      <p className="text-sm text-blue-100/90 leading-relaxed">
                        {project.simpleExplanation}
                      </p>
                    </div>
                  )}

                  {/* Cómo aplicarlo a tu negocio */}
                  {project.howToApply && project.howToApply.length > 0 && (
                    <div className="mt-4 rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold text-purple-400">
                        <Lightbulb className="h-3.5 w-3.5" />
                        <span>Ideas para aplicarlo en tu negocio</span>
                      </div>
                      <ul className="space-y-2">
                        {project.howToApply.map((idea, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-purple-100/90 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights pills */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-xs text-emerald-300 font-mono"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                          <span>{highlight}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Qué aprendí como desarrollador & Qué puedo enseñar a los estudiantes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Qué aprendí como desarrollador */}
                  <div className="rounded-xl border border-amber-500/20 bg-gradient-to-b from-amber-500/[0.04] to-transparent p-5">
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="rounded-lg bg-amber-500/10 p-1.5 text-amber-400 border border-amber-500/30">
                        <Lightbulb className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#f7f8f8] tracking-tight">
                        Qué aprendí como desarrollador
                      </h4>
                    </div>

                    <ul className="space-y-2.5">
                      {project.whatILearned && project.whatILearned.length > 0 ? (
                        project.whatILearned.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-zinc-400">
                          Diseño e implementación de arquitectura full-stack optimizada para producción.
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Qué puedo enseñar a los estudiantes */}
                  <div className="rounded-xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/[0.04] to-transparent p-5">
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="rounded-lg bg-indigo-500/10 p-1.5 text-indigo-400 border border-indigo-500/30">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#f7f8f8] tracking-tight">
                        Qué puedo enseñar a los estudiantes
                      </h4>
                    </div>

                    <ul className="space-y-2.5">
                      {project.whatITeach && project.whatITeach.length > 0 ? (
                        project.whatITeach.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-zinc-400">
                          Metodologías de desarrollo rápido y publicación sin costo de infraestructura.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* 3. Arquitectura & Stack Tecnológico */}
                <div className="rounded-xl border border-white/[0.08] bg-[#121316] p-5 space-y-4">
                  {project.architecture && (
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Arquitectura Técnica & Despliegue</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 font-mono bg-black/40 rounded-lg p-2.5 border border-white/[0.05]">
                        {project.architecture}
                      </p>
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-2 uppercase tracking-wider">
                      Tecnologías y Librerías Utilizadas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-white/[0.08] bg-white/[0.03] text-zinc-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'image' && (
              <div className="relative aspect-video w-full bg-[#08090a] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            )}

            {activeTab === 'iframe' && (
              <div className="relative aspect-video w-full bg-[#08090a] overflow-hidden">
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

          {/* Modal Footer: Action Buttons */}
          <div className="border-t border-white/[0.08] bg-[#121316] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400">
                {project.year ? `${project.year} · ` : ''}{project.metrics || 'En producción activa'}
              </span>
            </div>

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

              {/* DEDICATED EXTERNAL LAUNCHER */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-[#08090a] shadow-bevel transition-all hover:bg-emerald-400 active:scale-95"
              >
                <span>Ver Web App</span>
                <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
