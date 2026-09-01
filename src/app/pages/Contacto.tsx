import { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { useGsapParallax } from '../hooks/useGsapParallax';

const inquiryTypes = [
  'Colaboración en investigación',
  'Propuesta de proyecto',
  'Solicitud de archivo',
  'Prensa y medios',
  'Exposición o exhibición',
  'Otro',
];

export function Contacto() {
  const heroRef = useGsapParallax(80);
  const [form, setForm] = useState({ name: '', email: '', organization: '', type: inquiryTypes[0], message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background">
      {/* Hero with parallax */}
      <section
        ref={heroRef}
        className="overflow-hidden"
        style={{ position: 'relative', height: '65vh', minHeight: '420px', backgroundColor: 'var(--foreground)' }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/contact/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.88) 0%, rgba(var(--foreground-rgb),0.25) 55%, transparent 85%)' }}
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
              Contacto
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
              Conversemos.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <FadeIn className="md:col-span-5">
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'rgba(var(--foreground-rgb),0.78)',
                }}
              >
                Estamos abiertos a colaboraciones con investigadores, comunidades, instituciones culturales y medios de comunicación.
              </p>
            </FadeIn>
            <FadeIn className="md:col-span-7 md:pt-2" delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-muted-foreground/40 tracking-widest uppercase mb-3" style={{ fontSize: 'var(--text-badge)' }}>
                    Correo
                  </p>
                  <a
                    href="mailto:contacto@antropologiavisual.org"
                    className="text-foreground/70 hover:text-accent transition-colors duration-200 block"
                    style={{ fontSize: 'var(--text-body)', lineHeight: 1.6 }}
                  >
                    contacto@antropologiavisual.org
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground/40 tracking-widest uppercase mb-3" style={{ fontSize: 'var(--text-badge)' }}>
                    Sede
                  </p>
                  <p className="text-foreground/60" style={{ fontSize: 'var(--text-body)', lineHeight: 1.6 }}>
                    Montevideo, Uruguay
                  </p>
                  <p className="text-muted-foreground/50 mt-1" style={{ fontSize: 'var(--text-nav)' }}>
                    Con equipos en México D.F., Santiago y Lima
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground/40 tracking-widest uppercase mb-3" style={{ fontSize: 'var(--text-badge)' }}>
                    Redes
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {['Instagram', 'Vimeo', 'YouTube'].map(s => (
                      <a
                        key={s}
                        href="#"
                        className="text-muted-foreground/45 hover:text-muted-foreground transition-colors duration-200"
                        style={{ fontSize: 'var(--text-body-md)' }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Form + image */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — decorative image */}
          <FadeIn className="md:col-span-5">
            <div
              className="relative overflow-hidden h-full min-h-[320px]"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <img
                src="/images/contact/hero.jpg"
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 60%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(var(--foreground-rgb),0.45) 0%, transparent 50%)' }}
              />
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn className="md:col-span-7" delay={0.1}>
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
                <p className="text-muted-foreground leading-relaxed max-w-md" style={{ fontSize: 'var(--text-body)', lineHeight: 1.75 }}>
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
              <form onSubmit={handleSubmit}>
                <p
                  className="mb-10"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                    lineHeight: 1.55,
                    color: 'rgba(var(--foreground-rgb),0.6)',
                  }}
                >
                  Completá el formulario y te responderemos a la brevedad.
                </p>

                <div className="space-y-8">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {([
                      { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo', required: true },
                      { key: 'email', label: 'Correo', type: 'email', placeholder: 'tu@correo.com', required: true },
                    ] as const).map(f => (
                      <div key={f.key}>
                        <label className="block mb-2 tracking-widest uppercase" style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}>
                          {f.label} {f.required && '*'}
                        </label>
                        <input
                          type={f.type}
                          name={f.key}
                          value={form[f.key]}
                          onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                          onFocus={() => setFocused(f.key)}
                          onBlur={() => setFocused(null)}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full bg-transparent py-3 outline-none placeholder:text-muted-foreground/25 text-foreground"
                          style={{
                            fontSize: 'var(--text-body)',
                            borderBottom: `1px solid ${focused === f.key ? 'rgba(var(--foreground-rgb),0.4)' : 'rgba(var(--foreground-rgb),0.1)'}`,
                            transition: 'border-color 0.3s',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Organization + Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block mb-2 tracking-widest uppercase" style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}>
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
                        className="w-full bg-transparent py-3 outline-none placeholder:text-muted-foreground/25 text-foreground"
                        style={{
                          fontSize: 'var(--text-body)',
                          borderBottom: `1px solid ${focused === 'organization' ? 'rgba(var(--foreground-rgb),0.4)' : 'rgba(var(--foreground-rgb),0.1)'}`,
                          transition: 'border-color 0.3s',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 tracking-widest uppercase" style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}>
                        Tipo de consulta
                      </label>
                      <select
                        name="type"
                        value={form.type}
                        onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                        onFocus={() => setFocused('type')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent py-3 outline-none text-foreground cursor-pointer"
                        style={{
                          fontSize: 'var(--text-body)',
                          borderBottom: `1px solid ${focused === 'type' ? 'rgba(var(--foreground-rgb),0.4)' : 'rgba(var(--foreground-rgb),0.1)'}`,
                          transition: 'border-color 0.3s',
                        }}
                      >
                        {inquiryTypes.map(t => (
                          <option key={t} value={t} className="bg-background">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 tracking-widest uppercase" style={{ fontSize: 'var(--text-badge)', color: 'var(--muted-foreground)', opacity: 0.5 }}>
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
                      placeholder="Contanos sobre tu proyecto o consulta..."
                      className="w-full bg-transparent py-3 outline-none resize-none placeholder:text-muted-foreground/25 text-foreground"
                      style={{
                        fontSize: 'var(--text-body)',
                        borderBottom: `1px solid ${focused === 'message' ? 'rgba(var(--foreground-rgb),0.4)' : 'rgba(var(--foreground-rgb),0.1)'}`,
                        transition: 'border-color 0.3s',
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-muted-foreground/30" style={{ fontSize: 'var(--text-badge)' }}>
                      * Campos obligatorios
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-4 group"
                      style={{
                        fontSize: 'var(--text-label-lg)',
                        letterSpacing: '0.18em',
                        color: 'var(--foreground)',
                      }}
                    >
                      <span className="uppercase tracking-widest group-hover:text-accent transition-colors duration-200">
                        Enviar
                      </span>
                      <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
                    </button>
                  </div>
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
            <div className="w-8 h-px bg-accent/50" />
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
