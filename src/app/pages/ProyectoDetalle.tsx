import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { getProjectBySlug, getRelatedProjects, getPrevNextProjects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';

export function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

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
            {/* Meta chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[project.category, project.year, project.location].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: 'var(--text-label)',
                    letterSpacing: '0.1em',
                    padding: '4px 10px',
                    border: '1px solid var(--popover)' ,
                    color: 'var(--popover)' ,
                    backgroundColor: 'var(--border)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

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
            {/* <p
              className="mb-8"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                fontStyle: 'italic',
                lineHeight: 1.58,
                color: 'rgba(var(--foreground-rgb),0.8)',
              }}
            >
              {project.introduction}
            </p> */}
            <div className="w-10 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          </FadeIn>

          <FadeIn className="md:col-span-5" delay={0.12}>
            <div className="space-y-0">
              {[
                { label: 'Dirección', value: project.director },
                { label: 'Fotografía', value: project.photography },
                ...(project.fieldwork ? [{ label: 'Trabajo de campo', value: project.fieldwork }] : []),
                ...(project.format ? [{ label: 'Formato', value: project.format }] : []),
                { label: 'Duración', value: project.duration || 'N/D' },
                { label: 'Localización', value: project.location },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex gap-4 py-3.5"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <span
                    className="text-muted-foreground tracking-[0.25em] uppercase flex-shrink-0 w-32"
                    style={{
                      fontSize: '0.62rem',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-foreground/75"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

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
                <div className="flex flex-wrap gap-3">
                  {project.awards.map(award => (
                    <span
                      key={award}
                      className="flex items-center gap-2"
                      style={{
                        fontSize: 'var(--text-nav)',
                        color: 'var(--muted-foreground)',
                        border: '1px solid var(--border)',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius)',
                      }}
                    >
                      <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Gallery */}
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
            {project.galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden bg-secondary ${i === 0 ? 'md:col-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '16/7' : '4/3', borderRadius: 'var(--radius)' }}
              >
                <img
                  src={img}
                  alt={`${project.title} – imagen ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      {/* <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-1" />
          <FadeIn className="md:col-span-8">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase mb-6"
              style={{ fontSize: 'var(--text-label)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Sobre el proyecto
            </p>
            <p
              className="text-foreground/80 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', lineHeight: 1.88 }}
            >
              {project.description}
            </p>
          </FadeIn>
        </div>
      </section> */}

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
                        {prev.year} · {prev.category}
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
                        {next.year} · {next.category}
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
    </div>
  );
}
