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
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 transition-opacity duration-200 hover:opacity-70"
          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Counter */}
        <div
          className="absolute top-4 left-4 md:top-6 md:left-6 z-10"
          style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.7rem', letterSpacing: '0.1em' }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev arrow */}
        {images.length > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-2 md:left-6 z-10 transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            aria-label="Imagen anterior"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {images.length > 1 && (
          <button
            onClick={goNext}
            className="absolute right-2 md:right-6 z-10 transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            aria-label="Imagen siguiente"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          className="w-full h-full flex items-center justify-center px-12 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={images[currentIndex]}
            alt={altPrefix ? `${altPrefix} – imagen ${currentIndex + 1}` : `Imagen ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain select-none"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
