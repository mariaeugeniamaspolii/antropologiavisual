import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from '../components/FadeIn';

const BASE = 'https://images.unsplash.com/photo-';

const team = [
  {
    name: 'Valentina Cruz',
    role: 'Directora & Fotógrafa',
    origin: 'Bogotá, Colombia',
    image: `${BASE}1526094114998-bbde692632d4?w=600&h=800&fit=crop&auto=format&q=80`,
    bio: 'Antropóloga visual y fotógrafa documental especializada en memoria cultural afrodescendiente. Ha expuesto en el Festival Internacional de Fotografía de Cartagena y el Musée du Quai Branly.',
    interests: ['Memoria afrodescendiente', 'Ritual y performance', 'Archivo visual'],
  },
  {
    name: 'Martín Andrade',
    role: 'Documentalista & Investigador',
    origin: 'Ciudad de México',
    image: `${BASE}1731518220947-fa812c897e03?w=600&h=800&fit=crop&auto=format&q=80`,
    bio: 'Doctor en Antropología Social por la UNAM. Sus investigaciones abordan las migraciones forzadas y los espacios de frontera. Director de cinco documentales premiados internacionalmente.',
    interests: ['Migración y frontera', 'Antropología urbana', 'Cine documental'],
  },
  {
    name: 'Lucía Fernández',
    role: 'Investigadora & Archivista',
    origin: 'Santiago, Chile',
    image: `${BASE}1602566356391-67f94029b0ca?w=600&h=800&fit=crop&auto=format&q=80`,
    bio: 'Historiadora especializada en la recuperación de memorias visuales de la dictadura chilena. Coordina el proyecto de digitalización del Archivo Visual de los Derechos Humanos.',
    interests: ['Archivo y memoria', 'Historia visual', 'Postdictadura'],
  },
  {
    name: 'Beatriz Salcedo',
    role: 'Etnógrafa & Realizadora',
    origin: 'Asunción, Paraguay',
    image: `${BASE}1542992933-ce75d0187ec1?w=600&h=800&fit=crop&auto=format&q=80`,
    bio: 'Etnógrafa audiovisual con experiencia de campo en el Sahel occidental y el Sudeste Asiático. Su investigación explora las transformaciones del hábitat rural frente al cambio climático.',
    interests: ['Hábitat y clima', 'Etnografía del Sahel', 'Arquitectura vernácula'],
  },
  {
    name: 'Catalina Rojas',
    role: 'Fotógrafa & Investigadora',
    origin: 'Lima, Perú',
    image: `${BASE}1495580621852-5de0cc907d2f?w=600&h=800&fit=crop&auto=format&q=80`,
    bio: 'Fotógrafa especializada en comunidades indígenas andinas. Su trabajo con tejedoras quechua fue publicado en National Geographic. Premio Latinoamericano de Fotografía Documental 2021.',
    interests: ['Comunidades andinas', 'Textil como archivo', 'Patrimonio inmaterial'],
  },
];

const recognitions = [
  'FLACSO — Investigación colaborativa 2020–2024',
  'Magnum Foundation — Emergency Fund 2022',
  'Sundance Documentary Fund — Beca de producción 2021',
  'FNPI — Premio Fotografía Documental 2023',
  'Tribeca Film Institute — Artist in Residence 2022',
  'World Press Photo — Mención especial 2023',
];

export function Equipo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="bg-background">
      {/* Hero with parallax */}
      <section
        ref={heroRef}
        className="overflow-hidden"
        style={{ position: 'relative', height: '65vh', minHeight: '480px', backgroundColor: 'var(--foreground)' }}
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
        </motion.div>

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
              className="text-white/30 mb-4 tracking-widest uppercase"
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
              Miradas<br />
              <em>que convergen.</em>
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
                }}
              ><span className="italic">"Somos un equipo encaminado a construir conocimiento a partir de herramientas de registro y representación audiovisuales para dejar planteados marcos amplios y provocar un acceso más abierto a los resultados de las investigaciones."</span></p>
            </FadeIn>
            <FadeIn className="md:col-span-5" delay={0.15}>
              <p
                className="text-muted-foreground leading-relaxed mb-5"
                style={{ fontSize: '0.88rem', lineHeight: 1.8 }}
              ><span className="font-bold">Un Colectivo que explora y transita el encuentro entre la imagen y la reflexión antropológica.</span></p>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: '0.88rem', lineHeight: 1.8 }}
              >Fundado en 2018. En X años hemos documentado comunidades y colaborado con instituciones culturales, universidades y organizaciones.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.map((member, i) => (
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
                  className="relative overflow-hidden bg-secondary mb-5"
                  style={{ aspectRatio: '3/4' }}
                >
                  <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.5) 0%, transparent 60%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <p
                      className="text-white/70"
                      style={{ fontSize: 'var(--text-label-lg)', lineHeight: 1.5 }}
                    >
                      {member.interests.join('  ·  ')}
                    </p>
                  </div>
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
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: 'var(--text-body-md)', lineHeight: 1.7 }}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative overflow-hidden" style={{ height: '40vh' }}>
        <div className="w-full h-full" style={{ backgroundColor: '#000' }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(var(--foreground-rgb),0.3)' }} />
      </section>

      {/* Recognitions */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase mb-3"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Reconocimientos e instituciones
            </p>
            <div className="w-8 h-px bg-accent/50" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {recognitions.map((rec, i) => (
              <motion.div
                key={rec}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="flex items-start gap-4 py-4 border-b border-border"
              >
                <span className="text-accent/40 mt-1" style={{ fontSize: '0.4rem' }}>◆</span>
                <p
                  className="text-foreground/65"
                  style={{ fontSize: 'var(--text-body)', lineHeight: 1.5 }}
                >
                  {rec}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ backgroundColor: 'var(--foreground)' }}
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
      </section>
    </div>
  );
}
