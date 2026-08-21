import { motion } from 'motion/react';
import { Link } from 'react-router';
import { FadeIn } from '../components/FadeIn';

const BASE = 'https://images.unsplash.com/photo-';

const team = [
  {
    name: 'Valentina Cruz',
    role: 'Directora & Fotógrafa',
    origin: 'Bogotá, Colombia',
    image: `${BASE}1526094114998-bbde692632d4?w=600&h=750&fit=crop&auto=format&q=80`,
    bio: 'Antropóloga visual y fotógrafa documental. Su trabajo se centra en las formas de memoria cultural afrodescendiente en el Pacífico colombiano. Ha expuesto en el Festival Internacional de Fotografía de Cartagena y en el Musée du Quai Branly de París.',
    interests: ['Memoria afrodescendiente', 'Ritual y performance', 'Fotografía de larga duración'],
    years: 8,
  },
  {
    name: 'Martín Andrade',
    role: 'Documentalista & Investigador',
    origin: 'Ciudad de México',
    image: `${BASE}1731518220947-fa812c897e03?w=600&h=750&fit=crop&auto=format&q=80`,
    bio: 'Doctor en Antropología Social por la UNAM. Sus investigaciones abordan las migraciones forzadas y los espacios de frontera en Centroamérica. Director de cinco documentales premiados en festivales internacionales.',
    interests: ['Migración y frontera', 'Antropología urbana', 'Cine documental'],
    years: 7,
  },
  {
    name: 'Lucía Fernández',
    role: 'Investigadora & Archivista',
    origin: 'Santiago, Chile',
    image: `${BASE}1602566356391-67f94029b0ca?w=600&h=750&fit=crop&auto=format&q=80`,
    bio: 'Historiadora y archivista especializada en la recuperación de memorias visuales de la dictadura chilena. Coordinadora del proyecto de digitalización del Archivo Visual de los Derechos Humanos de Santiago.',
    interests: ['Archivo y memoria', 'Historia visual', 'Postdictadura y testimonios'],
    years: 6,
  },
  {
    name: 'Beatriz Salcedo',
    role: 'Etnógrafa & Realizadora',
    origin: 'Asunción, Paraguay',
    image: `${BASE}1542992933-ce75d0187ec1?w=600&h=750&fit=crop&auto=format&q=80`,
    bio: 'Etnógrafa audiovisual con experiencia de campo en el Sahel occidental y el Sudeste Asiático. Su investigación actual explora las transformaciones del hábitat rural frente al cambio climático. Docente en la Universidad de Asunción.',
    interests: ['Hábitat y clima', 'Etnografía del Sahel', 'Arquitectura vernácula'],
    years: 5,
  },
  {
    name: 'Catalina Rojas',
    role: 'Fotógrafa & Investigadora',
    origin: 'Lima, Perú',
    image: `${BASE}1495580621852-5de0cc907d2f?w=600&h=750&fit=crop&auto=format&q=80`,
    bio: 'Fotógrafa especializada en comunidades indígenas andinas. Su trabajo con tejedoras quechua fue publicado en National Geographic y el New York Times. Premio Latinoamericano de Fotografía Documental 2021.',
    interests: ['Comunidades andinas', 'Textil como archivo', 'Patrimonio inmaterial'],
    years: 6,
  },
];

export function Colectivo() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground" style={{ height: '65vh', minHeight: '400px' }}>
        <img
          src={`${BASE}1770480888187-ef09432bbeb1?w=1600&h=900&fit=crop&auto=format&q=80`}
          alt="El colectivo en trabajo de campo"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/20" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/40 tracking-[0.3em] uppercase mb-4"
              style={{ fontSize: '0.65rem' }}
            >
              02 — Colectivo
            </p>
            <h1
              className="text-white"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Quiénes somos
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <FadeIn className="md:col-span-7">
              <p
                className="text-foreground/85 leading-relaxed mb-8"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                }}
              >
                Somos un colectivo interdisciplinar de antropólogos, fotógrafos, cineastas e investigadores comprometidos con la producción de conocimiento visual sobre las culturas del mundo.
              </p>
              <p
                className="text-muted-foreground leading-relaxed mb-6"
                style={{ fontSize: '0.95rem', lineHeight: 1.75 }}
              >
                Fundado en 2016 en Bogotá, el colectivo nació de la convicción de que la imagen fotográfica y audiovisual no es un simple documento sino una forma de investigación en sí misma. Nuestros proyectos combinan el rigor del trabajo etnográfico con la sensibilidad estética del mejor documentalismo contemporáneo.
              </p>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: '0.95rem', lineHeight: 1.75 }}
              >
                En ocho años de trabajo hemos documentado comunidades en 23 países, producido más de 16 proyectos de largo aliento y colaborado con instituciones culturales, universidades y organizaciones de derechos humanos en América Latina, África y Asia.
              </p>
            </FadeIn>
            <FadeIn className="md:col-span-5 md:pl-8" delay={0.15}>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <p
                    className="text-accent tracking-widest uppercase mb-2"
                    style={{ fontSize: '0.65rem' }}
                  >
                    Nuestra metodología
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: '0.9rem', lineHeight: 1.65 }}
                  >
                    Larga duración en campo, construcción colectiva de archivos visuales, devolución de materiales a las comunidades documentadas y publicación crítica de resultados.
                  </p>
                </div>
                <div className="border-l-2 border-border pl-6">
                  <p
                    className="text-muted-foreground tracking-widest uppercase mb-2"
                    style={{ fontSize: '0.65rem' }}
                  >
                    Colaboraciones
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: '0.9rem', lineHeight: 1.65 }}
                  >
                    FLACSO, Universidad de los Andes, Musée du Quai Branly, Magnum Foundation, Sundance Documentary Fund, Human Rights Watch Film Festival.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-16">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase mb-3"
              style={{ fontSize: '0.65rem' }}
            >
              El equipo
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Investigadores y fotógrafos
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-border py-12 md:py-16 items-start group"
              >
                {/* Number */}
                <div className="md:col-span-1 hidden md:block">
                  <span
                    className="text-muted-foreground/40"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Portrait */}
                <div className="md:col-span-3 mb-6 md:mb-0 md:pr-8">
                  <div
                    className="relative overflow-hidden bg-secondary"
                    style={{ aspectRatio: '3/4', maxWidth: '280px' }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-5 md:pr-8">
                  <h3
                    className="text-foreground mb-1"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-accent mb-1"
                    style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-muted-foreground mb-6"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {member.origin}
                  </p>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
                  >
                    {member.bio}
                  </p>
                </div>

                {/* Research interests */}
                <div className="md:col-span-3 mt-6 md:mt-0">
                  <p
                    className="text-muted-foreground/60 tracking-widest uppercase mb-4"
                      style={{ fontSize: 'var(--text-label)' }}
                    >
                      Intereses
                  </p>
                  <ul className="space-y-2">
                    {member.interests.map(interest => (
                      <li key={interest} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5" style={{ fontSize: '0.4rem' }}>●</span>
                        <span
                          className="text-foreground/70"
                          style={{ fontSize: 'var(--text-body-md)', lineHeight: 1.4 }}
                        >
                          {interest}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="text-muted-foreground/40 mt-6"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {member.years} años en el colectivo
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* Full bleed image */}
      <section className="relative" style={{ height: '50vh' }}>
        <img
          src={`${BASE}1731123266133-b950fe7d35d3?w=1600&h=900&fit=crop&auto=format&q=80`}
          alt="Trabajo colectivo en campo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </section>

      {/* Values */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-16">
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Principios del colectivo
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: '01',
                title: 'Larga duración',
                text: 'No creemos en la fotografía de paso. Todos nuestros proyectos implican una permanencia mínima de seis meses en el lugar, muchos superan los dos años. El tiempo es condición para la confianza, y la confianza para la imagen verdadera.',
              },
              {
                num: '02',
                title: 'Devolución',
                text: 'Los archivos visuales que producimos pertenecen también a las comunidades que los protagonizan. Siempre devolvemos copias, organizamos exhibiciones locales y consultamos con la gente cómo quiere ser representada.',
              },
              {
                num: '03',
                title: 'Pensamiento crítico',
                text: 'Toda imagen es una posición. Reflexionamos permanentemente sobre nuestra posición como observadores, sobre las relaciones de poder en el acto fotográfico y sobre las implicaciones éticas de representar la vida de otros.',
              },
            ].map((v, i) => (
              <FadeIn key={v.num} delay={i * 0.1}>
                <p
                  className="text-muted-foreground/40 mb-6"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}
                >
                  {v.num}
                </p>
                <div className="w-8 h-px bg-accent mb-6" />
                <h3
                  className="text-foreground mb-4"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: '0.9rem', lineHeight: 1.75 }}
                >
                  {v.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-foreground">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <FadeIn>
            <h2
              className="text-primary-foreground"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              ¿Quieres colaborar<br />
              <em className="text-primary-foreground/60">con nuestro equipo?</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-4 border border-white/30 text-primary-foreground px-8 py-4 hover:bg-white hover:text-foreground transition-all duration-300"
              style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}
            >
              <span className="uppercase tracking-widest">Escríbenos</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
