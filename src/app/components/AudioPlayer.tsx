import { useState, useRef, useEffect, useCallback } from 'react';

const audioModules = import.meta.glob<{
  default: string;
}>('@/assets/projects/**/audio/**/*.mp3', { eager: true });

export function getAudioTracks(slug: string): { src: string; name: string }[] {
  const needle = `projects/${slug}/audio/`;
  const matching = Object.entries(audioModules)
    .filter(([key]) => key.includes(needle))
    .sort(([a], [b]) => a.localeCompare(b));
  return matching.map(([key, mod]) => {
    const raw = decodeURIComponent(key.split('?')[0].split('/').pop() ?? '');
    const name = raw.replace(/\.mp3$/, '');
    return { src: mod.default, name };
  });
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

interface Track {
  src: string;
  name: string;
}

export function AudioPlayer({ tracks }: { tracks: Track[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durations, setDurations] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // Preload durations for all tracks
  useEffect(() => {
    const loaded: HTMLAudioElement[] = [];
    const durationsMap: number[] = tracks.map(() => 0);

    tracks.forEach((track, i) => {
      const audio = new Audio(track.src);
      loaded.push(audio);
      audio.addEventListener('loadedmetadata', () => {
        durationsMap[i] = audio.duration;
        setDurations([...durationsMap]);
      });
    });

    return () => {
      loaded.forEach(a => { a.src = ''; });
    };
  }, [tracks]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const loadTrack = useCallback((index: number, shouldPlay = false) => {
    audioRef.current?.pause();

    const audio = new Audio(tracks[index].src);
    audioRef.current = audio;
    setCurrentTime(0);

    audio.addEventListener('loadedmetadata', () => {
      if (shouldPlay) audio.play();
    });
    audio.addEventListener('timeupdate', () => {
      if (!dragging) setCurrentTime(audio.currentTime);
    });
    audio.addEventListener('ended', () => setPlaying(false));
    audio.addEventListener('play', () => setPlaying(true));
    audio.addEventListener('pause', () => setPlaying(false));

    setActiveIndex(index);
  }, [tracks, dragging]);

  const togglePlay = useCallback((index: number) => {
    if (activeIndex !== index) {
      loadTrack(index, true);
      return;
    }
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [activeIndex, playing, loadTrack]);

  const seekTo = useCallback((clientX: number) => {
    if (!progressRef.current || !audioRef.current) return;
    const dur = durations[activeIndex!] || 0;
    if (!dur) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newTime = ratio * dur;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, [durations, activeIndex]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setDragging(true);
    seekTo(e.clientX);
    const onMove = (ev: PointerEvent) => seekTo(ev.clientX);
    const onUp = () => {
      setDragging(false);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [seekTo]);

  if (tracks.length === 0) return null;

  const activeDur = activeIndex !== null ? durations[activeIndex] || 0 : 0;
  const progress = activeDur > 0 ? (currentTime / activeDur) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      {tracks.map((track, i) => {
        const isActive = activeIndex === i;
        const dur = durations[i] || 0;

        return (
          <div key={track.src}>
            <div
              className="group cursor-pointer"
              style={{
                borderBottom: '1px solid var(--border)',
                padding: isActive ? '20px 0 16px' : '18px 0',
              }}
              onClick={() => togglePlay(i)}
            >
              {/* Track info row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  {/* Play/Pause button */}
                  <button
                    className="flex-shrink-0 flex items-center justify-center transition-opacity duration-200"
                    style={{
                      width: 28,
                      height: 28,
                      opacity: isActive && playing ? 1 : 0.4,
                    }}
                    onClick={(e) => { e.stopPropagation(); togglePlay(i); }}
                    aria-label={isActive && playing ? 'Pausar' : 'Reproducir'}
                  >
                    {isActive && playing ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="1" width="3.5" height="12" rx="1" fill="var(--foreground)" />
                        <rect x="8.5" y="1" width="3.5" height="12" rx="1" fill="var(--foreground)" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 1.5v11l9-5.5L3 1.5z" fill="var(--foreground)" />
                      </svg>
                    )}
                  </button>

                  <div className="min-w-0">
                    <p
                      className="truncate"
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: isActive ? '1.05rem' : '0.95rem',
                        fontWeight: isActive ? 500 : 400,
                        color: 'var(--foreground)',
                        lineHeight: 1.3,
                      }}
                    >
                      {track.name}
                    </p>
                  </div>
                </div>

                <span
                  className="flex-shrink-0 tabular-nums"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  {isActive && activeDur > 0
                    ? `${formatTime(currentTime)} / ${formatTime(activeDur)}`
                    : formatTime(dur)}
                </span>
              </div>

              {/* Progress bar (only for active track) */}
              {isActive && (
                <div
                  ref={progressRef}
                  className="mt-4 cursor-pointer"
                  style={{ height: 3, background: 'var(--border)', position: 'relative' }}
                  onPointerDown={onPointerDown}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: 'var(--foreground)',
                      transition: dragging ? 'none' : 'width 0.1s linear',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: `${progress}%`,
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: 'var(--foreground)',
                      transform: 'translate(-50%, -50%)',
                      opacity: dragging ? 1 : 0,
                      transition: 'opacity 0.15s',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
