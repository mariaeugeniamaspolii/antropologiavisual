import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
import { FilterButton } from '../components/FilterButton';

const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))];
const formats = ['Todos los formatos', 'Fotografía Documental', 'Documental', 'Etnografía visual comparada', 'Fotografía de larga duración', 'Investigación etnográfica'];

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
          style={{ aspectRatio: index % 4 === 1 ? '2/3' : index % 3 === 0 ? '4/3' : '3/4', borderRadius: 'var(--radius)' }}
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
            style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.55) 0%, rgba(var(--foreground-rgb),0.05) 50%, transparent 75%)' }}
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className="px-2.5 py-1"
              style={{
                backgroundColor: 'rgba(var(--background-rgb), 0.9)',
                fontSize: 'var(--text-badge)',
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
              style={{ fontSize: '0.75rem', fontStyle: 'italic', lineHeight: 1.4 }}
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
              style={{ backgroundColor: 'rgba(var(--background-rgb), 0.9)' }}
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
              style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}
            >
              {project.year}
            </span>
            <span
              className="text-muted-foreground/50"
              style={{ fontSize: '0.65rem' }}
            >
              {project.location.split(',')[0]}
            </span>
          </div>
          <h3
            className="text-foreground transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-playfair)',
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
        style={{ height: '65vh', minHeight: '420px', backgroundColor: 'var(--foreground)' }}
      >
        <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.8) 0%, rgba(var(--foreground-rgb),0.2) 60%, transparent 85%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/50 mb-4 tracking-widest uppercase"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Proyectos
            </p>
            <h1
              className="text-white"
              style={{
                fontFamily: 'var(--font-playfair)',
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
          backgroundColor: 'rgba(var(--background-rgb), 0.96)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3 flex-wrap">
          <span
            className="text-muted-foreground/50 tracking-widest uppercase mr-2 hidden md:block"
            style={{ fontSize: 'var(--text-badge)' }}
          >
            Filtrar
          </span>
          {categories.map(cat => (
            <FilterButton
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
          <span
            className="ml-auto text-muted-foreground/50"
            style={{ fontSize: '0.7rem' }}
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
