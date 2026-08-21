import { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';

const BASE = 'https://images.unsplash.com/photo-';

const inquiryTypes = [
  'Colaboración en investigación',
  'Propuesta de proyecto',
  'Solicitud de archivo',
  'Prensa y medios',
  'Exposición o exhibición',
  'Otro',
];

export function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', type: inquiryTypes[0], message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldStyle = (name: string) => ({
                fontSize: '0.9rem',
    borderBottom: `1px solid ${focused === name ? 'rgba(var(--foreground-rgb),0.45)' : 'rgba(var(--foreground-rgb),0.12)'}`,
    transition: 'border-color 0.25s',
  });

  return (
    <div className="bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ height: '65vh', minHeight: '380px', backgroundColor: 'var(--foreground)' }}
      >
        <img
          src="/images/contact/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
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
              Contacto
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
              Conversemos.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          {/* Left info */}
          <FadeIn className="md:col-span-4">
            <p
              className="mb-12 leading-relaxed"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'rgba(var(--foreground-rgb),0.75)',
              }}
            >
              Estamos abiertos a colaboraciones con investigadores, comunidades, instituciones culturales y medios de comunicación.
            </p>

            <div className="space-y-8">
              <div>
                <p
                  className="text-muted-foreground/45 tracking-widest uppercase mb-2"
                  style={{ fontSize: 'var(--text-badge)' }}
                >
                  Correo
                </p>
                <a
                  href="mailto:contacto@antropologiavisual.org"
                  className="text-foreground/70 hover:text-accent transition-colors duration-200"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  contacto@antropologiavisual.org
                </a>
              </div>
              <div>
                <p
                  className="text-muted-foreground/45 tracking-widest uppercase mb-2"
                  style={{ fontSize: 'var(--text-badge)' }}
                >
                  Sede
                </p>
                <p
                  className="text-foreground/60"
                  style={{ fontSize: 'var(--text-body)', lineHeight: 1.6 }}
                >
                  Bogotá, Colombia<br />
                  <span style={{ fontSize: 'var(--text-nav)', color: 'var(--muted-foreground)' }}>
                    Con equipos en México D.F., Santiago y Lima
                  </span>
                </p>
              </div>
              <div>
                <p
                  className="text-muted-foreground/45 tracking-widest uppercase mb-3"
                  style={{ fontSize: 'var(--text-badge)' }}
                >
                  Redes
                </p>
                <div className="space-y-2">
                  {['Instagram', 'Vimeo', 'Academia.edu', 'YouTube'].map(s => (
                    <a
                      key={s}
                      href="#"
                      className="block text-muted-foreground/45 hover:text-muted-foreground transition-colors duration-200"
                      style={{ fontSize: 'var(--text-body-md)' }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right form */}
          <FadeIn className="md:col-span-8" delay={0.12}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="py-16"
              >
                <div className="w-10 h-px mb-8" style={{ backgroundColor: 'var(--accent)' }} />
                <h2
                  className="text-foreground mb-5"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  Mensaje recibido.
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed max-w-md"
                  style={{ fontSize: '0.9rem', lineHeight: 1.75 }}
                >
                  Gracias por escribirnos, <strong className="text-foreground font-normal">{form.name}</strong>. Revisamos todos los mensajes con cuidado y te responderemos pronto.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', organization: '', type: inquiryTypes[0], message: '' }); }}
                  className="mt-10 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-200"
                  style={{ fontSize: 'var(--text-label-lg)', letterSpacing: '0.15em' }}
                >
                  ENVIAR OTRO MENSAJE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {(['name', 'email'] as const).map(field => (
                    <div key={field}>
                      <label
                        className="block mb-2 tracking-widest uppercase"
style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}
                    >
                      {field === 'name' ? 'Nombre *' : 'Correo *'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder={field === 'name' ? 'Tu nombre completo' : 'tu@correo.com'}
                        className="w-full bg-transparent py-3 outline-none placeholder:text-muted-foreground/30 text-foreground"
                        style={fieldStyle(field)}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block mb-2 tracking-widest uppercase"
                      style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}
                    >
                      Organización
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={e => setForm(p => ({ ...p, organization: e.target.value }))}
                      onFocus={() => setFocused('organization')}
                      onBlur={() => setFocused(null)}
                      placeholder="Universidad, institución..."
                      className="w-full bg-transparent py-3 outline-none placeholder:text-muted-foreground/30 text-foreground"
                      style={fieldStyle('organization')}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 tracking-widest uppercase"
                      style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}
                    >
                      Tipo de consulta
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                      onFocus={() => setFocused('type')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent py-3 outline-none text-foreground cursor-pointer"
                      style={fieldStyle('type')}
                    >
                      {inquiryTypes.map(t => (
                        <option key={t} value={t} className="bg-background">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-2 tracking-widest uppercase"
style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}
                    >
                      Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    className="w-full bg-transparent py-3 outline-none resize-none placeholder:text-muted-foreground/30 text-foreground"
                    style={fieldStyle('message')}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p
                    className="text-muted-foreground/35"
                    style={{ fontSize: '0.7rem' }}
                  >
                    * Campos obligatorios
                  </p>
                  <button
                    type="submit"
                    className="transition-colors duration-300"
                    style={{
                      fontSize: 'var(--text-label-lg)',
                      letterSpacing: '0.2em',
                      padding: '12px 32px',
                      backgroundColor: 'var(--foreground)',
                      color: 'var(--primary-foreground)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--foreground)')}
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Collaboration types */}
      <section
        className="py-20 md:py-28 px-6 md:px-12"
        style={{ backgroundColor: 'var(--secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p
              className="text-muted-foreground tracking-[0.25em] uppercase mb-3"
              style={{ fontSize: 'var(--text-label)' }}
            >
              Formas de colaboración
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {[
              {
                title: 'Investigación conjunta',
                desc: 'Proyectos de larga duración con instituciones académicas y organizaciones de la sociedad civil. Compartimos metodología, archivos y créditos de investigación.',
              },
              {
                title: 'Documentación encargada',
                desc: 'Documentamos proyectos culturales, comunitarios y de derechos humanos con alineación ética y metodológica con nuestro trabajo.',
              },
              {
                title: 'Talleres y formación',
                desc: 'Impartimos talleres de fotografía documental, etnografía visual y archivo comunitario para investigadores, activistas y comunicadores.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="w-5 h-px mb-6" style={{ backgroundColor: 'var(--accent)' }} />
                <h3
                  className="text-foreground mb-3"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: 'var(--text-body)', lineHeight: 1.8 }}
                >
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
