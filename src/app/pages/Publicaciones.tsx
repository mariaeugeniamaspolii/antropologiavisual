import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { publications, type PublicationType } from '../data/publications';
import { FadeIn } from '../components/FadeIn';
import { FilterButton } from '../components/FilterButton';

const BASE = 'https://images.unsplash.com/photo-';

const types: (PublicationType | 'Todos')[] = ['Todos', 'Ensayo fotográfico', 'Libro', 'Investigación', 'Catálogo'];

const typeLabels: Record<PublicationType, string> = {
  'Ensayo fotográfico': 'Ensayo',
  'Libro': 'Libro',
  'Investigación': 'Investigación',
  'Catálogo': 'Catálogo',
};

export function Publicaciones() {
  const [activeType, setActiveType] = useState<PublicationType | 'Todos'>('Todos');

  const filtered = activeType === 'Todos' ? publications : publications.filter(p => p.type === activeType);
  const featured = publications.find(p => p.featured);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ height: '65vh', minHeight: '420px', backgroundColor: 'var(--foreground)' }}
      >
        <img
          src="/images/publications/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ height: '65vh', objectPosition: 'center top' }}

        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.85) 0%, rgba(var(--foreground-rgb),0.2) 60%, transparent 85%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/30 mb-4 tracking-widest uppercase"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Publicaciones
            </p>
            <h1
              className="text-white max-w-2xl"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
              }}
            >
              Escritura<br />
              <em>y memoria visual</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <FadeIn className="md:col-span-7">
            <p
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontStyle: 'italic',
                lineHeight: 1.55,
                color: 'rgba(var(--foreground-rgb),0.78)',
              }}
            >
              Libros, ensayos fotográficos, investigaciones académicas y catálogos de exposición que articulan imagen y pensamiento en torno a las culturas que documentamos.
            </p>
          </FadeIn>
          <FadeIn className="md:col-span-5" delay={0.15}>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: 'var(--text-body)', lineHeight: 1.8 }}
            >
              Entendemos la publicación como extensión del trabajo de campo: un espacio donde la imagen y la escritura se articulan para crear formas de conocimiento que persisten en el tiempo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured publication — large showcase */}
      {featured && (
        <section className="pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-8">
              <p
                className="text-muted-foreground tracking-[0.25em] uppercase"
                style={{ fontSize: 'var(--text-label)' }}
              >
                Publicación destacada
              </p>
            </FadeIn>
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center border border-border p-8 md:p-12">
                {/* Book cover */}
                <div
                  className="relative overflow-hidden bg-secondary group"
                  style={{ aspectRatio: '3/4', maxWidth: '360px', margin: '0 auto', borderRadius: 'var(--radius)' }}
                >
                  <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(var(--foreground-rgb),0.3) 100%)' }}
                  />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      style={{
                        fontSize: 'var(--text-badge)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        backgroundColor: 'rgba(var(--background-rgb), 0.9)',
                        color: 'var(--foreground)',
                      }}
                    >
                      {featured.type}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <p
                    className="text-muted-foreground/50 mb-1"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}
                  >
                    {featured.year}{featured.publisher && ` · ${featured.publisher}`}
                  </p>
                  <h2
                    className="text-foreground mb-2"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                      fontWeight: 400,
                      lineHeight: 1.12,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-accent mb-4"
                    style={{ fontSize: 'var(--text-nav)', fontStyle: 'italic' }}
                  >
                    {featured.subtitle}
                  </p>
                  <p
                    className="text-muted-foreground mb-6"
                    style={{ fontSize: 'var(--text-nav)' }}
                  >
                    {featured.authors}
                  </p>
                  <p
                    className="text-foreground/65 leading-relaxed mb-8"
                    style={{ fontSize: '0.88rem', lineHeight: 1.8 }}
                  >
                    {featured.description}
                  </p>
                  {featured.pages && (
                    <p
                      className="text-muted-foreground/40"
                      style={{ fontSize: 'var(--text-label-lg)' }}
                    >
                      {featured.pages} páginas
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Filter + grid */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <div
            className="flex items-center gap-3 flex-wrap mb-12 pb-8"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            {types.map(type => (
              <FilterButton
                key={type}
                label={type}
                active={activeType === type}
                onClick={() => setActiveType(type)}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* List view — editorial, not card grid */}
              <div className="space-y-0">
                {filtered.map((pub, i) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start border-t border-border py-10"
                  >
                    {/* Cover thumbnail */}
                    <div className="md:col-span-2">
                      <div
                        className="relative overflow-hidden bg-secondary"
                        style={{ aspectRatio: '3/4', borderRadius: 'var(--radius)' }}
                      >
                        <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          style={{
                            fontSize: 'var(--text-badge)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '3px 8px',
                            border: '1px solid var(--border)',
                            color: 'var(--accent)',
                            borderRadius: 'var(--radius)',
                          }}
                        >
                          {pub.type}
                        </span>
                        <span
                          className="text-muted-foreground/40"
                          style={{ fontSize: '0.68rem' }}
                        >
                          {pub.year}
                        </span>
                      </div>
                      <h3
                        className="text-foreground mb-1"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1.15rem, 2.2vw, 1.7rem)',
                          fontWeight: 400,
                          lineHeight: 1.18,
                        }}
                      >
                        {pub.title}
                      </h3>
                      <p
                        className="text-muted-foreground mb-4"
                        style={{ fontSize: '0.8rem', fontStyle: 'italic' }}
                      >
                        {pub.subtitle}
                      </p>
                      <p
                        className="text-foreground/60 leading-relaxed"
                        style={{ fontSize: 'var(--text-body)', lineHeight: 1.75 }}
                      >
                        {pub.description}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="md:col-span-3 md:text-right">
                      <p
                        className="text-muted-foreground/50 mb-2"
                        style={{ fontSize: 'var(--text-label-lg)' }}
                      >
                        {pub.authors}
                      </p>
                      {pub.publisher && (
                        <p
                          className="text-muted-foreground/35"
                          style={{ fontSize: '0.7rem', lineHeight: 1.5 }}
                        >
                          {pub.publisher}
                        </p>
                      )}
                      {pub.pages && (
                        <p
                          className="text-muted-foreground/30 mt-2"
                          style={{ fontSize: '0.68rem' }}
                        >
                          {pub.pages} pp.
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div className="border-t border-border" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Full-bleed separator */}
      <section className="relative overflow-hidden" style={{ height: '35vh' }}>
        <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(var(--foreground-rgb),0.35)' }} />
      </section>
    </div>
  );
}
