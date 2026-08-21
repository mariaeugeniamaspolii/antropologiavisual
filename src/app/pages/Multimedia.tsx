import { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';

const BASE = 'https://images.unsplash.com/photo-';

const documentaries = [
  {
    title: 'La Palabra que Permanece',
    subtitle: 'Relatos orales en comunidades amazónicas de Perú y Brasil',
    year: '2023',
    duration: '74 min',
    image: `${BASE}1541528833328-45068ca34c67?w=800&h=500&fit=crop&auto=format&q=80`,
    director: 'Martín Andrade',
    festivals: ['IDFA Amsterdam', 'DOC Buenos Aires', 'FIDMarseille'],
  },
  {
    title: 'Mujeres del Agua',
    subtitle: 'Las defensoras del río Atrato frente a la minería ilegal',
    year: '2022',
    duration: '58 min',
    image: `${BASE}1551484661-f2afb4a50f3a?w=800&h=500&fit=crop&auto=format&q=80`,
    director: 'Valentina Cruz',
    festivals: ['Sundance', 'Visions du Réel', 'BAFICI'],
  },
  {
    title: 'El Tiempo de los Muertos',
    subtitle: 'Continuidades rituales entre México y Haití',
    year: '2021',
    duration: '82 min',
    image: `${BASE}1667572736586-ed434bf5dee8?w=800&h=500&fit=crop&auto=format&q=80`,
    director: 'Beatriz Salcedo',
    festivals: ['Tribeca', 'Hot Docs', 'Ambulante México'],
  },
  {
    title: 'Geografías Invisibles',
    subtitle: 'Cartografías mentales de comunidades desplazadas',
    year: '2020',
    duration: '65 min',
    image: `${BASE}1760504008367-bca2f23a6541?w=800&h=500&fit=crop&auto=format&q=80`,
    director: 'Lucía Fernández',
    festivals: ['DocsBarcelona', 'Rencontres Internationales Paris', 'Sheffield DocFest'],
  },
];

const audioRecordings = [
  {
    title: 'Cantos de Velorio',
    desc: 'Registro sonoro de alabaos y chiguaos del Chocó, Colombia',
    duration: '38:22',
    year: '2023',
  },
  {
    title: 'Voces del Ande',
    desc: 'Entrevistas con tejedoras quechua sobre los significados del textil',
    duration: '52:10',
    year: '2023',
  },
  {
    title: 'Paisajes Sonoros del Sahel',
    desc: 'Grabaciones de campo en Mali y Burkina Faso (2019–2021)',
    duration: '1:14:08',
    year: '2021',
  },
  {
    title: 'El Sonido de la Asamblea',
    desc: 'Documento sonoro de asambleas comunitarias zapatistas',
    duration: '28:45',
    year: '2022',
  },
  {
    title: 'Memorias Habladas',
    desc: 'Testimonios orales de sobrevivientes de la dictadura chilena',
    duration: '1:02:33',
    year: '2023',
  },
];

const publications = [
  {
    title: 'Imágenes que Resisten',
    subtitle: 'Fotografía documental y derechos humanos en América Latina',
    authors: 'Cruz, V. / Fernández, L.',
    year: '2023',
    publisher: 'Ediciones FLACSO',
    image: `${BASE}1728072074686-cd8f8f2baf3a?w=400&h=550&fit=crop&auto=format&q=80`,
  },
  {
    title: 'El Ojo Etnográfico',
    subtitle: 'Metodologías de la imagen en el trabajo de campo antropológico',
    authors: 'Andrade, M. / Salcedo, B.',
    year: '2022',
    publisher: 'Fondo de Cultura Económica',
    image: `${BASE}1763922705578-0039fdcdfc48?w=400&h=550&fit=crop&auto=format&q=80`,
  },
  {
    title: 'Archivo Vivo',
    subtitle: 'Práticas de preservación de la memoria visual indígena',
    authors: 'Rojas, C. / Cruz, V.',
    year: '2021',
    publisher: 'Siglo XXI Editores',
    image: `${BASE}1698899114761-3a154520c816?w=400&h=550&fit=crop&auto=format&q=80`,
  },
];

const interviews = [
  {
    name: 'Sebastião Salgado',
    role: 'Fotógrafo documental (Brasil)',
    topic: 'Sobre la ética de la representación en fotografía de conflicto',
    year: '2023',
    duration: '45 min',
    image: `${BASE}1627223160123-4f222c43cb97?w=300&h=300&fit=crop&auto=format&q=80`,
  },
  {
    name: 'Arjun Appadurai',
    role: 'Antropólogo (India/EE.UU.)',
    topic: 'Globalización, aspiración y las nuevas culturas visuales',
    year: '2022',
    duration: '38 min',
    image: `${BASE}1731518220947-fa812c897e03?w=300&h=300&fit=crop&auto=format&q=80`,
  },
  {
    name: 'Trinh T. Minh-ha',
    role: 'Cineasta y teórica (Vietnam/EE.UU.)',
    topic: 'El documental como escritura y el silencio como narración',
    year: '2022',
    duration: '52 min',
    image: `${BASE}1602566356391-67f94029b0ca?w=300&h=300&fit=crop&auto=format&q=80`,
  },
  {
    name: 'João Moreira Salles',
    role: 'Documentalista (Brasil)',
    topic: 'Tiempo, archivo y la imposibilidad del documental total',
    year: '2023',
    duration: '41 min',
    image: `${BASE}1495580621852-5de0cc907d2f?w=300&h=300&fit=crop&auto=format&q=80`,
  },
];

const tabs = ['Documentales', 'Audio', 'Publicaciones', 'Entrevistas'];

export function Multimedia() {
  const [activeTab, setActiveTab] = useState('Documentales');

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground" style={{ height: '65vh', minHeight: '380px' }}>
        <img
          src={`${BASE}1698899114761-3a154520c816?w=1600&h=900&fit=crop&auto=format&q=80`}
          alt="Archivo multimedia"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-foreground/20" />
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
              04 — Multimedia
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
              Archivo audiovisual
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-[64px] md:top-[80px] z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-5 flex-shrink-0 transition-all duration-200 border-b-2 ${
                  activeTab === tab
                    ? 'border-foreground text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Documentales */}
          {activeTab === 'Documentales' && (
            <div className="space-y-0">
              {documentaries.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-border py-10 group items-start"
                >
                  <div className="md:col-span-4">
                    <div
                      className="relative overflow-hidden bg-secondary"
                      style={{ aspectRatio: '16/9' }}
                    >
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-background/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-background/40 transition-colors duration-300">
                          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                            <path d="M1 1.5L15 9L1 16.5V1.5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span
                          className="bg-foreground/80 text-primary-foreground px-2 py-1"
                          style={{ fontSize: '0.65rem' }}
                        >
                          {doc.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span
                        className="text-muted-foreground tracking-widest uppercase"
                        style={{ fontSize: 'var(--text-label)' }}
                      >
                        {doc.year}
                      </span>
                      <span className="text-border">·</span>
                      <span
                        className="text-muted-foreground"
                        style={{ fontSize: 'var(--text-label)' }}
                      >
                        Dir. {doc.director}
                      </span>
                    </div>
                    <h3
                      className="text-foreground mb-2"
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      {doc.title}
                    </h3>
                    <p
                      className="text-muted-foreground mb-6"
                      style={{ fontSize: '0.9rem', fontStyle: 'italic' }}
                    >
                      {doc.subtitle}
                    </p>
                    <div>
                      <p
                        className="text-muted-foreground/50 tracking-widest uppercase mb-2"
                        style={{ fontSize: 'var(--text-label)' }}
                      >
                        Festivales
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {doc.festivals.map(f => (
                          <span
                            key={f}
                            className="border border-border px-3 py-1 text-muted-foreground"
                            style={{ fontSize: '0.7rem' }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </div>
          )}

          {/* Audio */}
          {activeTab === 'Audio' && (
            <div>
              <div className="mb-12">
                <img
                  src={`${BASE}1776645483665-39961155ca69?w=1400&h=400&fit=crop&auto=format&q=80`}
                  alt="Grabaciones de campo"
                  className="w-full object-cover"
                  style={{ height: '250px' }}
                />
              </div>
              <div className="space-y-0">
                {audioRecordings.map((rec, i) => (
                  <motion.div
                    key={rec.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="flex items-start gap-6 border-t border-border py-8 group cursor-pointer"
                  >
                    <span
                      className="text-muted-foreground/40 w-8 flex-shrink-0 pt-1"
                      style={{ fontSize: '0.7rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-foreground mb-1 group-hover:text-accent transition-colors duration-200"
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {rec.title}
                      </h3>
                      <p
                        className="text-muted-foreground"
                        style={{ fontSize: 'var(--text-body)', fontStyle: 'italic' }}
                      >
                        {rec.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span
                        className="text-muted-foreground"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {rec.year}
                      </span>
                      <span
                        className="text-muted-foreground/60"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {rec.duration}
                      </span>
                      <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-200">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                          <path d="M0.5 1L9.5 6L0.5 11V1Z" className="fill-foreground group-hover:fill-background transition-colors duration-200" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>
          )}

          {/* Publicaciones */}
          {activeTab === 'Publicaciones' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {publications.map((pub, i) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative overflow-hidden bg-secondary mb-5"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-400" />
                  </div>
                  <span
                    className="text-muted-foreground block mb-1"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}
                  >
                    {pub.year} · {pub.publisher}
                  </span>
                  <h3
                    className="text-foreground mb-1 group-hover:text-accent transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    {pub.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-2"
                    style={{ fontSize: 'var(--text-body-md)', fontStyle: 'italic' }}
                  >
                    {pub.subtitle}
                  </p>
                  <p
                    className="text-muted-foreground/60"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {pub.authors}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Entrevistas */}
          {activeTab === 'Entrevistas' && (
            <div className="space-y-0">
              {interviews.map((iv, i) => (
                <motion.div
                  key={iv.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-border py-10 group items-center"
                >
                  <div className="md:col-span-2">
                    <div
                      className="w-20 h-20 overflow-hidden bg-secondary rounded-full"
                    >
                      <img
                        src={iv.image}
                        alt={iv.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <h3
                      className="text-foreground mb-1"
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      {iv.name}
                    </h3>
                    <p
                      className="text-accent mb-3"
                      style={{ fontSize: 'var(--text-nav)' }}
                    >
                      {iv.role}
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: '0.9rem', fontStyle: 'italic' }}
                    >
                      {iv.topic}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex md:flex-col items-start md:items-end gap-4 md:gap-3">
                    <span
                      className="text-muted-foreground"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {iv.year}
                    </span>
                    <span
                      className="text-muted-foreground/60"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {iv.duration}
                    </span>
                    <button
                      className="border border-border px-4 py-2 text-muted-foreground hover:bg-foreground hover:text-primary-foreground hover:border-foreground transition-all duration-200"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}
                    >
                      VER ENTREVISTA
                    </button>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
