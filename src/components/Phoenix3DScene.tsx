'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { assetPath } from '@/lib/utils';

/**
 * Trilogía Cinemática 3D - Ave Fénix:
 * 1. Escena 1 (Despertar en las Cenizas): Ignición en las brasas y despegue con alas áureas. (Corte a los 6.5s)
 * 2. Escena 2 (Ascenso y Rugido Incandescente): Ascenso potente con plumaje en llamas doradas. (Corte a los 6.8s)
 * 3. Escena 3 (Vuelo Cósmico Infinito): Planeo estelar entre nebulosas y galaxias violetas. (Corte a los 7.2s)
 *
 * Características:
 * - Perspectiva isométrica 3D levitante ("De Costado 3D") con halo Ambilight reactivo.
 * - Paralaje interactivo que responde al cursor de forma orgánica y regresa a flotación continua.
 * - Transición cinética con barrido de luz direccional (Kinetic Light Sweep) entre las 3 escenas.
 * - Clic intuitivo sobre la imagen para pausar/reanudar sin controles ni textos invasivos.
 * - Único control visible: micro-conmutador discreto de sonido ambiente en la esquina inferior.
 */
export function Phoenix3DScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  const [activeScene, setActiveScene] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [feedbackState, setFeedbackState] = useState<'play' | 'pause' | null>(null);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number; z: number } | null>(null);

  const isMutedRef = useRef<boolean>(true);
  const isPlayingRef = useRef<boolean>(true);
  const activeSceneRef = useRef<number>(0);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Tiempos óptimos de corte para ritmo cinemático (en segundos)
  const SCENE_CUT_SECONDS = [6.5, 6.8, 7.2];

  // Iniciar reproducción de la primera escena
  useEffect(() => {
    const v1 = video1Ref.current;
    if (v1) {
      v1.currentTime = 0;
      v1.play().catch(() => {});
    }
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    };
  }, []);

  // Transición cinética automática hacia la siguiente escena
  const triggerTransition = useCallback((nextIndex: number) => {
    if (isTransitioning || !isPlayingRef.current) return;
    setIsTransitioning(true);

    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    const nextVideo = videos[nextIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.muted = isMutedRef.current;
      nextVideo.play().catch(() => {});
    }

    // A mitad del destello cinético conmutamos la visibilidad
    transitionTimeoutRef.current = setTimeout(() => {
      setActiveScene(nextIndex);
      activeSceneRef.current = nextIndex;

      // Pausar y resetear las demás escenas
      videos.forEach((v, idx) => {
        if (idx !== nextIndex && v) {
          v.pause();
          v.currentTime = 0;
        }
      });
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  // Vigilancia del punto de corte para cada escena
  const handleTimeUpdate = (sceneIndex: number) => {
    if (activeSceneRef.current !== sceneIndex || isTransitioning || !isPlayingRef.current) return;
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    const cur = videos[sceneIndex];
    if (!cur) return;

    const cutPoint = SCENE_CUT_SECONDS[sceneIndex];
    if (cur.currentTime >= cutPoint) {
      const nextIndex = (sceneIndex + 1) % 3;
      triggerTransition(nextIndex);
    }
  };

  // Clic intuitivo para pausar / reanudar
  const togglePlayPause = () => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    const cur = videos[activeScene];
    if (!cur) return;

    if (isPlaying) {
      cur.pause();
      isPlayingRef.current = false;
      setIsPlaying(false);
      setFeedbackState('pause');
    } else {
      cur.play().catch(() => {});
      isPlayingRef.current = true;
      setIsPlaying(true);
      setFeedbackState('play');
    }

    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedbackState(null);
    }, 650);
  };

  // Conmutador discreto de sonido
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMutedRef.current;
    isMutedRef.current = nextMuted;
    setIsMuted(nextMuted);

    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    videos.forEach((v, idx) => {
      if (!v) return;
      if (idx === activeScene) {
        v.muted = nextMuted;
        if (!nextMuted && v.paused && isPlayingRef.current) {
          v.play().catch(() => {});
        }
      } else {
        v.muted = true;
      }
    });
  };

  // Movimiento fluido e interactivo tipo agua al mover el cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    // Balanceo suave hacia ambos lados sin rigidez
    const tiltY = (relX - 0.5) * 12; // -6deg a +6deg
    const tiltX = -(relY - 0.5) * 6; // -3deg a +3deg
    const tiltZ = (relX - 0.5) * 2;   // -1deg a +1deg
    setMouseTilt({ x: tiltX, y: tiltY, z: tiltZ });
  };

  const handleMouseLeave = () => {
    setMouseTilt(null);
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-stage relative w-full py-2 px-1 sm:px-2 select-none"
    >
      {/* Halo ambiental líquido (Ambilight) que ondea como agua hacia los lados */}
      <div
        className="ambilight-water pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-orange-600/35 via-amber-500/30 to-purple-600/40 blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Sombra líquida reflectiva en el suelo */}
      <div
        className="shadow-water pointer-events-none absolute -bottom-5 inset-x-8 h-8 rounded-full bg-gradient-to-r from-orange-600/40 via-amber-400/35 to-purple-600/45 blur-2xl opacity-75 -z-10"
        aria-hidden="true"
      />

      {/* Contenedor del Portal 3D Fluido con Ondulación de Agua */}
      <div
        onClick={togglePlayPause}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            togglePlayPause();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Escenario cinemático del Ave Fénix. Haz clic para pausar o reproducir."
        style={
          mouseTilt
            ? {
                transform: `perspective(1500px) rotateY(${mouseTilt.y}deg) rotateX(${mouseTilt.x}deg) rotateZ(${mouseTilt.z}deg) scale3d(1.02, 1.02, 1.02)`,
              }
            : undefined
        }
        className={`portal-3d-fluid group relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-amber-300/70 bg-[#0c041a] cursor-pointer ${
          !mouseTilt ? 'portal-water-motion' : ''
        } ${isTransitioning ? 'brightness-125' : ''}`}
      >
        {/* Escena 1: Despertar en las Cenizas (nuevo video optimizado de alta fidelidad) */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={assetPath('/images/phoenix-rising-poster.webp')}
          onTimeUpdate={() => handleTimeUpdate(0)}
          onEnded={() => triggerTransition(1)}
          className={`absolute inset-0 h-full w-full object-cover object-bottom filter saturate-[1.18] brightness-[1.03] contrast-[1.05] transition-opacity duration-700 ease-in-out ${
            activeScene === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-label="Ave Fénix despertando de las brasas incandescentes"
        >
          <source src={assetPath('/videos/phoenix-scene-1.mp4')} type="video/mp4" />
          <Image
            src={assetPath('/images/phoenix-rising-poster.webp')}
            alt="Ave Fénix emergiendo de las cenizas"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-bottom"
          />
        </video>

        {/* Escena 2: Ascenso y Rugido Incandescente */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="metadata"
          poster={assetPath('/images/phoenix-scene-2-poster.webp')}
          onTimeUpdate={() => handleTimeUpdate(1)}
          onEnded={() => triggerTransition(2)}
          className={`absolute inset-0 h-full w-full object-cover object-bottom filter saturate-[1.18] brightness-[1.03] contrast-[1.05] transition-opacity duration-700 ease-in-out ${
            activeScene === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-label="Ave Fénix rugiendo con plumaje incandescente"
        >
          <source src={assetPath('/videos/phoenix-scene-2.mp4')} type="video/mp4" />
          <Image
            src={assetPath('/images/phoenix-scene-2-poster.webp')}
            alt="Ave Fénix con plumaje de fuego"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-bottom"
          />
        </video>

        {/* Escena 3: Vuelo Cósmico Infinito */}
        <video
          ref={video3Ref}
          muted
          playsInline
          preload="metadata"
          poster={assetPath('/images/phoenix-hero-poster.webp')}
          onTimeUpdate={() => handleTimeUpdate(2)}
          onEnded={() => triggerTransition(0)}
          className={`absolute inset-0 h-full w-full object-cover object-bottom filter saturate-[1.18] brightness-[1.03] contrast-[1.05] transition-opacity duration-700 ease-in-out ${
            activeScene === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-label="Ave Fénix en vuelo cósmico por el espacio interestelar"
        >
          <source src={assetPath('/videos/phoenix-scene-3.mp4')} type="video/mp4" />
          <Image
            src={assetPath('/images/phoenix-hero-poster.webp')}
            alt="Ave Fénix en vuelo cósmico"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-bottom"
          />
        </video>

        {/* Efecto Cinético de Barrido Lumínico (Light Sweep) en la transición de escenas */}
        {isTransitioning && (
          <div
            className="pointer-events-none absolute inset-0 z-30 animate-kinetic-sweep bg-gradient-to-r from-transparent via-amber-300/60 to-transparent mix-blend-screen"
            aria-hidden="true"
          />
        )}

        {/* Sutil viñeta cinematográfica en bordes */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 65%, rgba(8, 3, 18, 0.45) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Feedback visual momentáneo y sutil al hacer clic (se desvanece de inmediato) */}
        {feedbackState && (
          <div
            className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center animate-fade-in"
            aria-hidden="true"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/70 bg-black/60 text-amber-200 backdrop-blur-md shadow-2xl transition-all scale-105">
              {feedbackState === 'pause' ? (
                <Pause size={24} className="text-amber-300" />
              ) : (
                <Play size={24} className="translate-x-0.5 text-amber-300 fill-amber-300" />
              )}
            </div>
          </div>
        )}

        {/* Micro-botón Minimalista de Sonido (Único control visible, Esquina Inferior Derecha) */}
        <div className="absolute right-3.5 bottom-3.5 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={toggleSound}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
              isMuted
                ? 'border-white/20 bg-black/60 text-amber-200/75 hover:bg-black/90 hover:text-white hover:scale-110'
                : 'border-amber-400 bg-amber-500/35 text-amber-200 shadow-md scale-105'
            }`}
            title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="animate-pulse" />}
          </button>
        </div>
      </div>
    </div>
  );
}
