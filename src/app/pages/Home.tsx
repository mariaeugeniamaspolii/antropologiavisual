import { useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { featuredProjects, projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
import { useGsapParallax, useGsapScrollFade } from '../hooks/useGsapParallax';

const collaborators = [
  'FLACSO', 'Magnum Foundation', 'Sundance Documentary Fund',
  'Universidad de los Andes', 'Musée du Quai Branly', 'Tribeca Film Institute',
  'FNPI', 'FotoEvidence', 'DOC Buenos Aires', 'Human Rights Watch Film Festival',
];

export function Home() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useGsapParallax(150);
  const heroTextFade = useGsapScrollFade(heroSectionRef);

  const bannerRef = useGsapParallax(100);

  const featured = featuredProjects.slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero — full screen */}
      <section ref={heroSectionRef} className="overflow-hidden" style={{ position: 'relative', height: '100svh', backgroundColor: 'var(--foreground)' }}>
        <div ref={heroRef} className="absolute inset-0" style={{ height: '140%', top: '-20%' }}>
          <img
            src="/images/home/hero.gif"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.85) brightness(0.8)' }}
          />
        </div>

        {/* Subtle grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.18,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.7) 0%, rgba(var(--foreground-rgb),0.1) 40%, transparent 70%)' }} />

        <div
          ref={heroTextFade}
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <p
              className="text-white/30 mb-8"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >Colectivo de Antropología Visual — desde 2016</p>

            {/* Poetic statement */}
            <h1
              className="text-white"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
              }}
            >Encuentro entre imagen y<br /><em style={{ fontWeight: 400 }}>reflexión antropológica.</em></h1>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 right-6 md:right-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-10 bg-white/25" />
            <span
              className="text-white/20 tracking-widest"
              style={{ fontSize: '0.5rem', writingMode: 'vertical-rl' }}
            >deslizar</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Poetic intro */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-1 hidden md:block">
            <FadeIn>
              <div className="w-px h-20 bg-accent/40 mt-1" />
            </FadeIn>
          </div>
          <FadeIn className="md:col-span-8" delay={0.1}>
            <p
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                fontStyle: 'italic',
                lineHeight: 1.55,
                color: 'rgba(var(--foreground-rgb),0.82)',
                fontWeight: 400,
              }}
            >"Somos un equipo encaminado a construir conocimiento a partir de herramientas de registro y representación audiovisuales para dejar planteados marcos amplios y provocar un acceso más abierto a los resultados de las investigaciones."</p>
          </FadeIn>
          <FadeIn className="md:col-span-3" delay={0.2}>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: 'var(--text-body)', lineHeight: 1.8 }}
            >Un colectivo interdisciplinar de fotógrafos e investigadores con base en Uruguay.</p>
            <Link
              to="/equipo"
              className="inline-flex items-center gap-3 mt-6 group"
              style={{ fontSize: 'var(--text-label-lg)', letterSpacing: '0.12em', color: 'var(--accent)' }}
            >
              <span className="uppercase tracking-widest">El equipo</span>
              <span className="w-5 h-px bg-accent group-hover:w-8 transition-all duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured projects */}
      <section className="pb-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Proyectos recientes
            </p>
          </FadeIn>

          {/* Main featured project — full width tall */}
          {featured[1] && (
            <FadeIn className="mb-4">
              <Link
                to={`/proyectos/${featured[1].slug}`}
                className="group block relative overflow-hidden bg-secondary"
                style={{ aspectRatio: '16/8' }}
              >
                <img
                  src={featured[1].coverImage}
                  alt={featured[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.72) 0%, rgba(var(--foreground-rgb),0.08) 50%, transparent 75%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-white/40 mb-3 tracking-widest uppercase"
                        style={{ fontSize: 'var(--text-badge)' }}
                      >
                        {featured[1].category} · {featured[1].year}
                      </p>
                      <h2
                        className="text-white mb-1"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1.8rem, 4vw, 3.8rem)',
                          fontWeight: 400,
                          lineHeight: 1.05,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {featured[1].title}
                      </h2>
                      <p
                        className="text-white/50"
                        style={{ fontSize: 'var(--text-body)', fontStyle: 'italic' }}
                      >
                        {featured[1].location}
                      </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors duration-300">
                      <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em' }}>VER</span>
                      <div className="w-8 h-px bg-current" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )}

          {/* Two projects in asymmetric grid */}
          {featured.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {featured[1] && (
                <FadeIn className="md:col-span-3">
                  <Link
                    to={`/proyectos/${featured[2].slug}`}
                    className="group block relative overflow-hidden bg-secondary"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={featured[2].coverImage}
                      alt={featured[2].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.7) 0%, transparent 55%)' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p
                        className="text-white/35 mb-2 tracking-widest uppercase"
                        style={{ fontSize: '0.55rem' }}
                      >
                        {featured[2].category} · {featured[2].year}
                      </p>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
                          fontWeight: 400,
                          lineHeight: 1.1,
                        }}
                      >
                        {featured[2].title}
                      </h3>
                    </div>
                  </Link>
                </FadeIn>
              )}
              {featured[0] && (
                <FadeIn className="md:col-span-2" delay={0.1}>
                  <Link
                    to={`/proyectos/${featured[0].slug}`}
                    className="group block relative overflow-hidden bg-secondary"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <img
                      src={featured[0].coverImage}
                      alt={featured[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.72) 0%, transparent 55%)' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p
                        className="text-white/35 mb-2 tracking-widest uppercase"
                        style={{ fontSize: '0.55rem' }}
                      >
                        {featured[0].category} · {featured[0].year}
                      </p>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1.1rem, 2vw, 1.8rem)',
                          fontWeight: 400,
                          lineHeight: 1.15,
                        }}
                      >
                        {featured[0].title}
                      </h3>
                    </div>
                  </Link>
                </FadeIn>
              )}
            </div>
          )}

          {/* All projects link */}
          <FadeIn className="mt-10 flex justify-end">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-4 group"
              style={{ fontSize: 'var(--text-label-lg)', letterSpacing: '0.12em', color: 'var(--muted-foreground)' }}
            >
              <span className="uppercase tracking-widest group-hover:text-foreground transition-colors duration-200">
                Ver todos los proyectos ({projects.length})
              </span>
              <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Full-bleed separator image */}
      <section ref={bannerRef} className="relative overflow-hidden" style={{ height: '45vh', backgroundColor: 'var(--foreground)' }}>
        <div className="absolute inset-0" style={{ height: '150%', top: '-25%' }}>
          <img
            src="/images/home/banner.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 70%', filter: 'saturate(0.85) brightness(0.8)' }}
          />
        </div>
      </section>

      {/* Recognitions and collaborators */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-16">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase mb-3"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Reconocimientos y colaboraciones
            </p>
            <div className="w-10 h-px bg-accent/60" />
          </FadeIn>

          {/* Collaborators in elegant text grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6">
            {[
              'ANII',
              'Departamento de Arqueología',
              'Área de Estudios Turísticos de la Facultad de Humanidades y Ciencias de la Educación UDELAR',
              'Ministerio de Educación y Cultura MEC',
              'Patrimonio Cultural de la Nación',
            ].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              >
                <p
                  className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                  style={{ fontSize: 'var(--text-nav)', lineHeight: 1.4 }}
                >
                  {name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Awards highlight */}
          <FadeIn className="mt-20 pt-12 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {[
                { num: '23', label: 'países documentados' },
                { num: '16', label: 'proyectos de largo aliento' },
                { num: '8', label: 'años de trabajo colectivo' },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <p
                    className="text-foreground mb-1"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: '0.8rem' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
