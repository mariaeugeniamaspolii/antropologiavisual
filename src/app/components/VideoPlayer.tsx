import { useRef, useState, useEffect, useCallback } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setCurrentTime(v.currentTime);
    const onDur = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onDur);
    v.addEventListener('ended', onEnd);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onDur);
      v.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) { v.pause(); } else { v.play(); }
    setPlaying(!playing);
  }, [playing]);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * v.duration;
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.muted) {
      v.muted = false;
      setVolume(v.volume || 1);
    } else {
      v.muted = true;
      setVolume(0);
    }
  }, []);

  const cycleVolume = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const levels = [1, 0.5, 0.25, 0];
    const currentIdx = levels.indexOf(volume);
    const nextIdx = (currentIdx + 1) % levels.length;
    const next = levels[nextIdx];
    v.volume = next;
    v.muted = next === 0;
    setVolume(next);
  }, [volume]);

  const toggleFullscreen = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      v.requestFullscreen();
    }
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full">
      <video
        ref={videoRef}
        src={src}
        className="w-full bg-black rounded-token"
        style={{ aspectRatio: '16/9' }}
        playsInline
      />

      <div
        className="flex items-center mt-3"
        style={{ color: 'var(--muted-foreground)' }}
      >
        <button
          onClick={togglePlay}
          className="w-15 h-15 flex items-center justify-center transition-opacity hover:opacity-70 flex-shrink-0 rounded-token"
        >
          {playing ? (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex-1 flex items-center gap-3 mx-4">
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="flex-1 h-3 cursor-pointer relative"
            style={{
              backgroundColor: 'AccentColor',
              borderRadius: '9999px',
            }}
          >
            <div
              className="absolute inset-y-0 left-0"
              style={{
                width: `${progress}%`,
                backgroundColor: 'var(--accent)',
                borderRadius: '9999px',
              }}
            />
          </div>

          <span
            className="tabular-nums whitespace-nowrap flex-shrink-0"
            style={{ fontSize: '1.2rem' }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <div
            className="relative"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button
              onClick={cycleVolume}
              className="w-15 h-15 flex items-center justify-center transition-opacity hover:opacity-70"
            >
              {volume === 0 ? (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12A4.5 4.5 0 0014 8.18v1.7l2.39 2.39c.07-.2.11-.4.11-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.89 8.89 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : volume < 0.5 ? (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.5 12A4.5 4.5 0 0016 8.18v7.64c1.2-.9 2-2.32 2-3.82zM5 9v6h4l5 5V4L9 9H5z" />
                </svg>
              ) : (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.18v7.64c1.2-.9 2-2.32 2-3.82zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>

          <button
            onClick={toggleFullscreen}
            className="w-15 h-15 flex items-center justify-center transition-opacity hover:opacity-70"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
