import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';
import type { VideoItem } from '../data/projects';

interface VideoLightboxProps {
  videos: VideoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function getYoutubeId(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : '';
}

export function VideoLightbox({ videos, index, onClose, onPrev, onNext }: VideoLightboxProps) {
  const video = videos[index];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
        onClick={handleBackdropClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
          style={{ fontSize: '1.5rem' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {videos.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2 md:left-4 z-10 text-white/60 hover:text-white transition-colors"
              style={{ fontSize: '2rem' }}
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 md:right-4 z-10 text-white/60 hover:text-white transition-colors"
              style={{ fontSize: '2rem' }}
            >
              ›
            </button>
          </>
        )}

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {video.type === 'youtube' ? (
            <div className="w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(video.url)}?autoplay=0`}
                className="w-full h-full"
                style={{ border: 'none', borderRadius: 'var(--radius)' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              />
            </div>
          ) : (
            <VideoPlayer src={video.url} title={video.title} />
          )}

          <div className="mt-3 text-center">
            <p className="text-white/80" style={{ fontSize: '0.85rem' }}>
              {video.title}
            </p>
            {videos.length > 1 && (
              <p className="text-white/40 mt-1" style={{ fontSize: '0.7rem' }}>
                {index + 1} / {videos.length}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
