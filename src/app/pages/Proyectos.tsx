import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projects';

const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))];
const formats = ['Todos los formatos', 'Fotografía Documental', 'Documental', 'Etnografía visual comparada', 'Fotografía de larga duración', 'Investigación etnográfica'];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ delay: index * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/proyectos/${project.slug}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div
          className="relative overflow-hidden bg-secondary mb-4"
          style={{ aspectRatio: index % 4 === 1 ? '2/3' : index % 3 === 0 ? '4/3' : '3/4' }}
        >
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.045 : 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Overlay layers */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ background: 'linear-gradient(to top, rgba(26,21,16,0.55) 0%, rgba(26,21,16,0.05) 50%, transparent 75%)' }}
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className="px-2.5 py-1"
              style={{
                backgroundColor: 'rgba(242,235,226,0.9)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                color: 'var(--foreground)',
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Hover: bottom text reveal */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-5"
            animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontStyle: 'italic', lineHeight: 1.4 }}
            >
              {project.subtitle}
            </p>
          </motion.div>

          {/* Hover: arrow top right */}
          <motion.div
            className="absolute top-3 right-3"
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(242,235,226,0.9)' }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Text */}
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <span
              className="text-muted-foreground"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', letterSpacing: '0.1em' }}
            >
              {project.year}
            </span>
            <span
              className="text-muted-foreground/50"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem' }}
            >
              {project.location.split(',')[0]}
            </span>
          </div>
          <h3
            className="text-foreground transition-colors duration-300"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: hovered ? 'var(--accent)' : 'var(--foreground)',
            }}
          >
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export function Proyectos() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background">
      {/* Hero
      <section
        className="relative overflow-hidden"
        style={{ height: '62vh', minHeight: '420px', backgroundColor: '#1A1510' }}
      >
        <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,21,16,0.8) 0%, rgba(26,21,16,0.2) 60%, transparent 85%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/30 mb-4 tracking-widest uppercase"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem' }}
            >
              Proyectos
            </p>
            <h1
              className="text-white"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
              }}
            >
              Archivo de<br />
              <em>investigaciones</em>
            </h1>
          </motion.div>
        </div>
      </section> */}

      {/* Filter bar */}
      <section
        className="sticky z-30 border-b border-border"
        style={{
          top: '56px',
          backgroundColor: 'rgba(242,235,226,0.96)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3 flex-wrap">
          <span
            className="text-muted-foreground/50 tracking-widest uppercase mr-2 hidden md:block"
            style={{ fontSize: '0.58rem', fontFamily: 'DM Sans, sans-serif' }}
          >
            Filtrar
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="transition-all duration-200"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                padding: '5px 14px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--foreground)' : 'var(--border)',
                backgroundColor: activeCategory === cat ? 'var(--foreground)' : 'transparent',
                color: activeCategory === cat ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
              }}
            >
              {cat}
            </button>
          ))}
          <span
            className="ml-auto text-muted-foreground/50"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem' }}
          >
            {filtered.length} proyectos
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 px-6 md:px-12">
        <div className="py-14 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
