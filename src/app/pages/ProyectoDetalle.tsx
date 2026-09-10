import { useParams, Link, Navigate } from 'react-router';
import { useState, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import { getProjectBySlug, getRelatedProjects, getPrevNextProjects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
import { ImageLightbox } from '../components/ImageLightbox';
import { AudioPlayer, getAudioTracks } from '../components/AudioPlayer';
import { VideoThumbnail } from '../components/VideoThumbnail';
import { VideoLightbox } from '../components/VideoLightbox';
import { Badge } from '../components/ui/badge';
import { ProjectLink } from '../components/ProjectLink';

const galleryModules = import.meta.glob<{
  default: string;
}>('@/assets/projects/*/gallery/*.webp', { eager: true });

const videoModules = import.meta.glob<{
  default: string;
}>('@/assets/projects/*/video/*.mp4', { eager: true });

function getGalleryImages(slug: string): string[] {
  const needle = `projects/${slug}/gallery/`;
  const matching = Object.entries(galleryModules)
    .filter(([key]) => key.includes(needle))
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/\/(\d+)\.webp$/)?.[1] ?? '0', 10);
      const numB = parseInt(b.match(/\/(\d+)\.webp$/)?.[1] ?? '0', 10);
      return numA - numB;
    });
  return matching.map(([, mod]) => mod.default);
}

function getVideoFiles(slug: string): { type: 'mp4'; url: string; title: string; thumbnail?: string }[] {
  const needle = `projects/${slug}/video/`;
  const matching = Object.entries(videoModules)
    .filter(([key]) => key.includes(needle))
    .sort(([a], [b]) => a.localeCompare(b));
  return matching.map(([key, mod]) => {
    const raw = decodeURIComponent(key.split('?')[0].split('/').pop() ?? '');
    const title = raw.replace(/\.mp4$/, '');
    return { type: 'mp4' as const, url: mod.default, title };
  });
}

function GalleryImage({ img, index, projectTitle, onClick }: { img: string; index: number; projectTitle: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-secondary cursor-pointer group rounded-sm"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.img
        src={img}
        alt={`${projectTitle} – imagen ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
        animate={{ scale: hovered ? 1.045 : 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.4) 0%, transparent 50%)' }}
      />
      <motion.div
        className="absolute top-3 right-3"
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
      </motion.div>
    </motion.div>
  );
}

export function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [galleryCount, setGalleryCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoLightboxIndex, setVideoLightboxIndex] = useState<number | null>(null);

  const galleryImages = useMemo(
    () => (slug ? getGalleryImages(slug) : []),
    [slug],
  );

  const audioTracks = useMemo(
    () => (slug ? getAudioTracks(slug) : []),
    [slug],
  );

  const localVideos = useMemo(
    () => (slug ? getVideoFiles(slug) : []),
    [slug],
  );

  const allVideos = useMemo(() => {
    const staticVids = project?.videos ?? [];
    return [...staticVids, ...localVideos];
  }, [project?.videos, localVideos]);

  if (!project) return <Navigate to="/proyectos" replace />;

  const { prev, next } = getPrevNextProjects(project.slug);
  const related = getRelatedProjects(project.relatedSlugs);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ height: '92vh', minHeight: '550px', backgroundColor: 'var(--foreground)' }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.85) brightness(0.75)' }}
          />
        </motion.div>

        {/* Layered gradients for depth */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.9) 0%, rgba(var(--foreground-rgb),0.2) 45%, rgba(var(--foreground-rgb),0.35) 100%)' }}
        />

        {/* Back link */}
        <div className="absolute top-20 md:top-24 left-6 md:left-12 z-10">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-3 transition-colors duration-200"
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              color: 'rgba(var(--white-rgb), 0.35)',
            }}
          >
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
              <path d="M13 4.5H1M1 4.5L5 1M1 4.5L5 8" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <span className="uppercase tracking-widest hover:text-white/60 transition-colors duration-200">Proyectos</span>
          </Link>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-white max-w-4xl mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              {project.title}
            </h1>
            <p
              className="text-white/75 max-w-2xl"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                lineHeight: 1.5,
              }}
            >
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction + credits */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <FadeIn className="md:col-span-7">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase mb-6"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Sobre el proyecto
            </p>
            <p
              className="text-foreground/80 leading-relaxed"
              style={{ fontSize: '1rem', lineHeight: 1.88 }}
            >
              {project.description}
            </p>
            {project.team && (
              <div className="mt-8">
                <p
                  className="text-muted-foreground tracking-[0.25em] uppercase mb-3"
                  style={{ fontSize: 'var(--text-label)' }}
                >
                  Equipo
                </p>
                <p
                  className="text-foreground/80 leading-relaxed"
                  style={{ fontSize: 'var(--text-body)', lineHeight: 1.8 }}
                >
                  {project.team.split(',').map((item, i, arr) => (
                    <span key={i}>
                      {item.trim()}
                      {i < arr.length - 1 && <span className="mx-2 text-muted-foreground/50">·</span>}
                    </span>
                  ))}
                </p>
              </div>
            )}
            <div className="w-10 h-px mt-8" style={{ backgroundColor: 'var(--accent)' }} />
          </FadeIn>

          <FadeIn className="md:col-span-5" delay={0.12}>
            <div className="space-y-0">
              {[
                { label: 'Localización', value: project.location },
                { label: 'Año', value: project.year },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex gap-4 mb-3 justify-end"
                >
                  <span
                    className="ds-form-label text-xs"
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <section className="pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="border-t border-border pt-10">
                <p
                  className="text-muted-foreground tracking-[0.25em] uppercase mb-6"
                  style={{ fontSize: 'var(--text-label)' }}
                >
                  Enlaces
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.links.map(link => (
                    <ProjectLink
                      key={link.url}
                      href={link.url}
                      label={link.label}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Awards */}
      {project.awards && project.awards.length > 0 && (
        <section className="pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="border-t border-border pt-10">
                <p
                  className="text-muted-foreground tracking-[0.25em] uppercase mb-6"
              style={{ fontSize: 'var(--text-label)' }}
                >
                  Reconocimientos
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.awards.map(award => (
                    <Badge key={award}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>
                      {award}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Audio Player */}
      {audioTracks.length > 0 && (
        <section className="pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-8">
              <p
                className="text-muted-foreground tracking-[0.25em] uppercase"
                style={{ fontSize: 'var(--text-label)' }}
              >
                Audio
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <AudioPlayer tracks={audioTracks} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* Videos */}
      {allVideos.length > 0 && (
        <section className="pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-8">
              <p
                className="text-muted-foreground tracking-[0.25em] uppercase"
                style={{ fontSize: 'var(--text-label)' }}
              >
                Videos
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {allVideos.map((video, i) => (
                <div key={i}>
                  <VideoThumbnail
                    type={video.type}
                    url={video.url}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    onClick={() => setVideoLightboxIndex(i)}
                  />
                  <p
                    className="mt-2 text-muted-foreground"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-8">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Galería
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {galleryImages.slice(0, galleryCount).map((img, i) => (
              <GalleryImage key={i} img={img} index={i} projectTitle={project.title} onClick={() => setLightboxIndex(i)} />
            ))}
          </div>

          {galleryImages.length > galleryCount && (
            <FadeIn className="mt-8 text-center">
              <button
                onClick={() => setGalleryCount(prev => prev + 12)}
                className="inline-flex items-center gap-2 rounded-sm transition-all duration-200 hover:bg-foreground hover:text-background"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: 'var(--foreground)',
                  padding: '10px 24px',
                  border: '1px solid var(--foreground)',
                }}
              >
                Ver más
              </button>
            </FadeIn>
          )}
        </div>
      </section>
      )}

      {/* Prev / Next navigation */}
      <section className="py-0 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Prev */}
          <div className="border-b md:border-b-0 md:border-r border-border">
            {prev ? (
              <Link
                to={`/proyectos/${prev.slug}`}
                className="group flex items-stretch h-full"
              >
                <div className="w-1 bg-transparent group-hover:bg-accent transition-colors duration-300" />
                <div className="flex-1 p-8 md:p-10">
                  <p
                    className="text-muted-foreground/50 mb-4"
                    style={{ fontSize: 'var(--text-label)', letterSpacing: '0.2em' }}
                  >
                    ← ANTERIOR
                  </p>
                  <div className="flex items-center gap-5">
                    <div
                      className="w-16 h-20 overflow-hidden bg-secondary flex-shrink-0"
                    >
                      <img src={prev.coverImage} alt={prev.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p
                        className="text-muted-foreground mb-1"
                        style={{ fontSize: '0.68rem' }}
                      >
                        {prev.year} · {prev.category.join(', ')}
                      </p>
                      <h3
                        className="text-foreground group-hover:text-accent transition-colors duration-300"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {prev.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-8 md:p-10">
                <p
                  className="text-muted-foreground/25"
                  style={{ fontSize: '0.7rem' }}
                >
                  Primer proyecto
                </p>
              </div>
            )}
          </div>

          {/* Next */}
          <div>
            {next ? (
              <Link
                to={`/proyectos/${next.slug}`}
                className="group flex items-stretch h-full justify-end"
              >
                <div className="flex-1 p-8 md:p-10 text-right">
                  <p
                    className="text-muted-foreground/50 mb-4"
                    style={{ fontSize: 'var(--text-label)', letterSpacing: '0.2em' }}
                  >
                    SIGUIENTE →
                  </p>
                  <div className="flex items-center gap-5 justify-end">
                    <div>
                      <p
                        className="text-muted-foreground mb-1"
                        style={{ fontSize: '0.68rem' }}
                      >
                        {next.year} · {next.category.join(', ')}
                      </p>
                      <h3
                        className="text-foreground group-hover:text-accent transition-colors duration-300"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {next.title}
                      </h3>
                    </div>
                    <div className="w-16 h-20 overflow-hidden bg-secondary flex-shrink-0">
                      <img src={next.coverImage} alt={next.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="w-1 bg-transparent group-hover:bg-accent transition-colors duration-300" />
              </Link>
            ) : (
              <div className="p-8 md:p-10 text-right">
                <p
                  className="text-muted-foreground/25"
                  style={{ fontSize: '0.7rem' }}
                >
                  Último proyecto
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ backgroundColor: 'var(--foreground)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <FadeIn>
            <h2
              className="text-white max-w-lg"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              ¿Tienes un proyecto<br />
              <em className="text-white/50">que documentar?</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-4 group"
              style={{
                fontSize: 'var(--text-label-lg)',
                letterSpacing: '0.18em',
                color: 'rgba(var(--white-rgb), 0.4)',
              }}
            >
              <span className="uppercase tracking-widest group-hover:text-white/70 transition-colors duration-300">
                Contactar al colectivo
              </span>
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryImages.slice(0, galleryCount)}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          altPrefix={project.title}
        />
      )}

      {/* Video Lightbox */}
      {videoLightboxIndex !== null && allVideos.length > 0 && (
        <VideoLightbox
          videos={allVideos}
          index={videoLightboxIndex}
          onClose={() => setVideoLightboxIndex(null)}
          onPrev={() => setVideoLightboxIndex(prev => prev! > 0 ? prev! - 1 : allVideos.length - 1)}
          onNext={() => setVideoLightboxIndex(prev => prev! < allVideos.length - 1 ? prev! + 1 : 0)}
        />
      )}
    </div>
  );
}
