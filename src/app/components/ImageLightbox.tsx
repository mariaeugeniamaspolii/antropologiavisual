import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageLightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
  altPrefix?: string;
}

export function ImageLightbox({ images, startIndex, onClose, altPrefix = '' }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchEnd.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Centered content block */}
        <div className="relative flex flex-col items-center max-w-[800px] w-full mx-4 md:mx-6">

          {/* Close button — top-right of content block */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 md:-top-12 md:right-0 z-10 transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            aria-label="Cerrar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Image + arrows row — fixed min-height so X and counter stay stable */}
          <div className="relative flex items-center w-full min-h-[60vh]">

            {/* Prev arrow — desktop outside, mobile overlay */}
            {images.length > 1 && (
              <button
                onClick={goPrev}
                className="hidden md:flex absolute -left-12 z-10 items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                aria-label="Imagen anterior"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              key={currentIndex}
              className="w-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={images[currentIndex]}
                alt={altPrefix ? `${altPrefix} – imagen ${currentIndex + 1}` : `Imagen ${currentIndex + 1}`}
                className="max-w-[800px] max-h-[75vh] object-contain select-none"
                draggable={false}
              />
            </motion.div>

            {/* Next arrow — desktop outside, mobile overlay */}
            {images.length > 1 && (
              <button
                onClick={goNext}
                className="hidden md:flex absolute -right-12 z-10 items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                aria-label="Imagen siguiente"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Mobile arrows — overlay on image */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-opacity duration-200 hover:opacity-70"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
                  aria-label="Imagen anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-opacity duration-200 hover:opacity-70"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
                  aria-label="Imagen siguiente"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Counter — below image, fixed relative to content block */}
          <div
            className="mt-3 text-center"
            style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.7rem', letterSpacing: '0.1em' }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
