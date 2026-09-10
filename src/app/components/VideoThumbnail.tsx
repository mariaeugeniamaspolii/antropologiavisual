import { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface VideoThumbnailProps {
  type: 'mp4' | 'youtube';
  url: string;
  title: string;
  thumbnail?: string;
  onClick: () => void;
}

function getYoutubeId(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : '';
}

export function VideoThumbnail({ type, url, title, thumbnail, onClick }: VideoThumbnailProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mp4Poster, setMp4Poster] = useState<string | null>(null);

  const posterSrc = type === 'youtube'
    ? (thumbnail || `https://img.youtube.com/vi/${getYoutubeId(url)}/mqdefault.jpg`)
    : (thumbnail || mp4Poster);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-secondary cursor-pointer group rounded-sm"
      style={{ aspectRatio: '16/9' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {type === 'mp4' && !thumbnail && (
        <video
          ref={videoRef}
          src={url}
          muted
          preload="metadata"
          onLoadedData={() => {
            if (videoRef.current && videoRef.current.duration > 0) {
              videoRef.current.currentTime = Math.min(1, videoRef.current.duration * 0.1);
            }
          }}
          onSeeked={() => {
            if (videoRef.current) {
              const canvas = document.createElement('canvas');
              canvas.width = videoRef.current.videoWidth;
              canvas.height = videoRef.current.videoHeight;
              canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
              setMp4Poster(canvas.toDataURL('image/webp'));
            }
          }}
          className="hidden"
        />
      )}

      {posterSrc && (
        <motion.img
          src={posterSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: hovered ? 1.045 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: hovered ? 1.05 : 1, opacity: hovered ? 1 : 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
