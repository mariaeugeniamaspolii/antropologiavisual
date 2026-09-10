import { Link } from 'react-router';
import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { Recognitions } from '../components/Recognitions';
import { useGsapParallax } from '../hooks/useGsapParallax';
import { team } from '../data/team';

import heroImg from '@/assets/team/hero.jpg';
import bannerImg from '@/assets/team/banner.jpg';

export function Equipo() {
  const heroRef = useGsapParallax(90);

  return (
    <div className="bg-background">
      {/* Hero with parallax */}
      <section
        ref={heroRef}
        className="overflow-hidden"
        style={{ position: 'relative', height: '65vh', minHeight: '480px', backgroundColor: 'var(--foreground)' }}
      >
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}

          />
        </div>

        {/* Layered overlay — geological/memory layer feel */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(175deg, rgba(var(--foreground-rgb),0.6) 0%, rgba(var(--foreground-rgb),0.2) 40%, rgba(var(--foreground-rgb),0.7) 100%)' }}
        />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/50 mb-4 tracking-widest uppercase"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Equipo
            </p>
            <h1
              className="text-white max-w-2xl"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                fontWeight: 400,
                lineHeight: 1.07,
                letterSpacing: '-0.025em',
              }}
            >
              Distintas<br />
              <em>miradas</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Defining statement + intro */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <FadeIn className="md:col-span-7">
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                  color: 'rgba(var(--foreground-rgb),0.82)',
                }}>Somos un colectivo que explora el encuentro entre la imagen
                y la reflexión antropológica. Desde hace {new Date().getFullYear() - 2006} años documentamos comunidades y
                desarrollamos proyectos junto a instituciones culturales, universidades y organizaciones.</p>
            </FadeIn>
            <FadeIn className="md:col-span-5" delay={0.15}>
              <p
                className="text-muted-foreground leading-relaxed mb-5"
                style={{ fontSize: '0.88rem', lineHeight: 1.8 }}
              >Distintas miradas y recorridos que se encuentran y participan en la construcción de cada proyecto.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12 border-t border-border pt-12">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Investigadores y fotógrafos
            </p>
          </FadeIn>

          <div className="grid grid-cols-3 gap-8 md:gap-10 mb-8">
            {team.slice(0, 3).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* Portrait */}
                <div
                  className="relative overflow-hidden bg-secondary mb-5 rounded-sm"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy" style={{ filter: 'saturate(0.5) contrast(0.92) sepia(0.15)' }}
                  />
                </div>

                {/* Info */}
                <h3
                  className="text-foreground mb-0.5"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-accent mb-3"
                  style={{ fontSize: 'var(--text-label-lg)', letterSpacing: '0.04em' }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-8 md:gap-10">
            {team.slice(3).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i + 3) * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* Portrait */}
                <div
                  className="relative overflow-hidden bg-secondary mb-5 rounded-sm"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy" style={{ filter: 'saturate(.8) contrast(0.9) sepia(0.5)' }}
                  />
                </div>

                {/* Info */}
                <h3
                  className="text-foreground mb-0.5"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-accent mb-3"
                  style={{ fontSize: 'var(--text-label-lg)', letterSpacing: '0.04em' }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative overflow-hidden" style={{ height: '40vh' }}>
        <img
          src={bannerImg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 10%' }}

        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(var(--foreground-rgb),0.3)' }} />
      </section>

      {/* Recognitions */}
      <Recognitions />

      {/* CTA */}
      < section
        className="py-24 px-6 md:px-12"
        style={{ backgroundColor: 'var(--foreground)' }
        }
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p
              className="text-white/25 tracking-[0.25em] uppercase mb-8"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Colaboraciones
            </p>
            <h2
              className="text-white mb-8 max-w-xl"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              ¿Quieres trabajar<br />
              <em>en conjunto?</em>
            </h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-4 group"
              style={{
                fontSize: 'var(--text-label-lg)',
                letterSpacing: '0.15em',
                color: 'rgba(var(--white-rgb), 0.45)',
              }}
            >
              <span className="uppercase tracking-widest group-hover:text-white/75 transition-colors duration-200">
                Escríbenos
              </span>
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section >
    </div >
  );
}
