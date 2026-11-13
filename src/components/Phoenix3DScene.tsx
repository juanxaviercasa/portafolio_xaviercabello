'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { assetPath } from '@/lib/utils';

/**
 * Trilogía Cinemática 3D - Ave Fénix.
 * El vídeo solo se carga cuando la persona activa la reproducción.
 */
export function Phoenix3DScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  const [activeScene, setActiveScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [feedbackState, setFeedbackState] = useState<'play' | 'pause' | null>(null);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number; z: number } | null>(null);

  const isMutedRef = useRef(true);
  const isPlayingRef = useRef(false);
  const activeSceneRef = useRef(0);
  const isVisibleRef = useRef(false);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sceneCutSeconds = [6.5, 6.8, 7.2];

  const videos = () => [video1Ref.current, video2Ref.current, video3Ref.current];

  const pauseAll = useCallback(() => {
    videos().forEach((video) => video?.pause());
    isPlayingRef.current = false;
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (typeof IntersectionObserver === 'undefined') {
      isVisibleRef.current = true;
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      if (!entry.isIntersecting && isPlayingRef.current) pauseAll();
    }, { threshold: 0.1 });
    observer.observe(stage);
    return () => {
      observer.disconnect();
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
      videos().forEach((video) => video?.pause());
    };
  }, [pauseAll]);

  const triggerTransition = useCallback((nextIndex: number) => {
    if (isTransitioning || !isPlayingRef.current || !isVisibleRef.current) return;
    setIsTransitioning(true);
    const allVideos = videos();
    const nextVideo = allVideos[nextIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.muted = isMutedRef.current;
      nextVideo.play().catch(() => {
        pauseAll();
      });
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setActiveScene(nextIndex);
      activeSceneRef.current = nextIndex;
      allVideos.forEach((video, index) => {
        if (index !== nextIndex && video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, pauseAll]);

  const handleTimeUpdate = (sceneIndex: number) => {
    if (activeSceneRef.current !== sceneIndex || isTransitioning || !isPlayingRef.current) return;
    const currentVideo = videos()[sceneIndex];
    if (currentVideo && currentVideo.currentTime >= sceneCutSeconds[sceneIndex]) {
      triggerTransition((sceneIndex + 1) % 3);
    }
  };

  const togglePlayPause = () => {
    const wasPlaying = isPlayingRef.current;
    if (!hasStarted) {
      const firstVideo = video1Ref.current;
      if (!firstVideo) return;
      firstVideo.muted = isMutedRef.current;
      firstVideo.src = assetPath('/videos/phoenix-scene-1.mp4');
      firstVideo.load();
      setHasStarted(true);
      firstVideo.play().then(() => {
        isPlayingRef.current = true;
        setIsPlaying(true);
      }).catch(() => {
        isPlayingRef.current = false;
        setIsPlaying(false);
      });
    } else if (isPlayingRef.current) {
      pauseAll();
    } else {
      const currentVideo = videos()[activeSceneRef.current];
      if (!currentVideo || !isVisibleRef.current) return;
      currentVideo.play().then(() => {
        isPlayingRef.current = true;
        setIsPlaying(true);
      }).catch(() => pauseAll());
    }

    setFeedbackState(wasPlaying ? 'pause' : 'play');
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => setFeedbackState(null), 650);
  };

  const toggleSound = () => {
    const nextMuted = !isMutedRef.current;
    isMutedRef.current = nextMuted;
    setIsMuted(nextMuted);
    videos().forEach((video, index) => {
      if (!video) return;
      video.muted = index === activeSceneRef.current ? nextMuted : true;
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    setMouseTilt({
      x: -(relY - 0.5) * 6,
      y: (relX - 0.5) * 12,
      z: (relX - 0.5) * 2,
    });
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseTilt(null)}
      className="perspective-stage relative w-full py-2 px-1 sm:px-2 select-none"
    >
      <div className="ambilight-water pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-orange-600/35 via-amber-500/30 to-purple-600/40 blur-3xl -z-10" aria-hidden="true" />
      <div className="shadow-water pointer-events-none absolute -bottom-5 inset-x-8 h-8 rounded-full bg-gradient-to-r from-orange-600/40 via-amber-400/35 to-purple-600/45 blur-2xl opacity-75 -z-10" aria-hidden="true" />

      <div
        style={mouseTilt ? {
          transform: `perspective(1500px) rotateY(${mouseTilt.y}deg) rotateX(${mouseTilt.x}deg) rotateZ(${mouseTilt.z}deg) scale3d(1.02, 1.02, 1.02)`,
        } : undefined}
        className={`portal-3d-fluid group relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-amber-300/70 bg-[#0c041a] ${!mouseTilt ? 'portal-water-motion' : ''} ${isTransitioning ? 'brightness-125' : ''}`}
      >
        {/* La poster permanece visible hasta que la persona pulsa Play. */}
        {!hasStarted && (
          <div className="absolute inset-0 z-20">
            <Image
              src={assetPath('/images/phoenix-rising-poster.webp')}
              alt="Ave Fénix emergiendo de las cenizas"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-bottom"
            />
          </div>
        )}

        <video
          ref={video1Ref}
          src={hasStarted ? assetPath('/videos/phoenix-scene-1.mp4') : undefined}
          muted
          playsInline
          preload="none"
          poster={assetPath('/images/phoenix-rising-poster.webp')}
          onTimeUpdate={() => handleTimeUpdate(0)}
          onEnded={() => triggerTransition(1)}
          className={`absolute inset-0 h-full w-full object-cover object-bottom filter saturate-[1.18] brightness-[1.03] contrast-[1.05] transition-opacity duration-700 ease-in-out ${activeScene === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          aria-label="Ave Fénix despertando de las brasas incandescentes"
        >
        </video>
        <video
          ref={video2Ref}
          src={hasStarted ? assetPath('/videos/phoenix-scene-2.mp4') : undefined}
          muted
          playsInline
          preload="none"
          poster={assetPath('/images/phoenix-scene-2-poster.webp')}
          onTimeUpdate={() => handleTimeUpdate(1)}
          onEnded={() => triggerTransition(2)}
          className={`absolute inset-0 h-full w-full object-cover object-bottom filter saturate-[1.18] brightness-[1.03] contrast-[1.05] transition-opacity duration-700 ease-in-out ${activeScene === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          aria-label="Ave Fénix rugiendo con plumaje incandescente"
        >
        </video>
        <video
          ref={video3Ref}
          src={hasStarted ? assetPath('/videos/phoenix-scene-3.mp4') : undefined}
          muted
          playsInline
          preload="none"
          poster={assetPath('/images/phoenix-hero-poster.webp')}
          onTimeUpdate={() => handleTimeUpdate(2)}
          onEnded={() => triggerTransition(0)}
          className={`absolute inset-0 h-full w-full object-cover object-bottom filter saturate-[1.18] brightness-[1.03] contrast-[1.05] transition-opacity duration-700 ease-in-out ${activeScene === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          aria-label="Ave Fénix en vuelo cósmico por el espacio interestelar"
        >
        </video>

        {isTransitioning && <div className="pointer-events-none absolute inset-0 z-30 animate-kinetic-sweep bg-gradient-to-r from-transparent via-amber-300/60 to-transparent mix-blend-screen" aria-hidden="true" />}
        <div className="pointer-events-none absolute inset-0 z-20" style={{ background: 'radial-gradient(ellipse at center, transparent 65%, rgba(8, 3, 18, 0.45) 100%)' }} aria-hidden="true" />
        {feedbackState && <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center animate-fade-in" aria-hidden="true"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/70 bg-black/60 text-amber-200 backdrop-blur-md shadow-2xl transition-all scale-105">{feedbackState === 'pause' ? <Pause size={24} className="text-amber-300" /> : <Play size={24} className="translate-x-0.5 text-amber-300 fill-amber-300" />}</div></div>}

        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={togglePlayPause}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/80 bg-black/65 text-amber-200 shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            aria-label={isPlaying ? 'Pausar vídeo del Ave Fénix' : hasStarted ? 'Reanudar vídeo del Ave Fénix' : 'Reproducir vídeo del Ave Fénix'}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="translate-x-0.5 fill-amber-200" />}
          </button>
        </div>
        <div className="absolute right-3.5 bottom-3.5 z-30">
          <button
            type="button"
            onClick={toggleSound}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${isMuted ? 'border-white/20 bg-black/60 text-amber-200/75 hover:bg-black/90 hover:text-white hover:scale-110' : 'border-amber-400 bg-black/75 text-amber-200 shadow-md scale-105'}`}
            title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            aria-pressed={!isMuted}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
