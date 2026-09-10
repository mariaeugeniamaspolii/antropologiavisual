import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { StatsHighlight } from './StatsHighlight';

import aniiLogo from '@/assets/institutions/ANII.png';
import fhceLogo from '@/assets/institutions/FHCE.png';
import mecLogo from '@/assets/institutions/MEC.png';
import fccLogo from '@/assets/institutions/FCC.png';

const institutions = [
  { name: 'ANII ', logo: aniiLogo },
  { name: 'Departamento de Arqueología', logo: aniiLogo },
  { name: 'Área de Estudios Turísticos de la Facultad de Humanidades y Ciencias de la Educación UDELAR', logo: fhceLogo },
  { name: 'Ministerio de Educación y Cultura MEC', logo: mecLogo },
  { name: 'Patrimonio Cultural de la Nación', logo: fccLogo },
];

export function Recognitions() {
  return (
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

        <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
          {institutions.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="h-16 flex items-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full w-auto object-contain opacity-90"
                />
              </div>

              <p
                className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                style={{ fontSize: 'var(--text-nav)', lineHeight: 1.4 }}
              >
                {/* {item.name} */}
              </p>
            </motion.div>
          ))}
        </div>

        <StatsHighlight
          stats={[
            { num: String(new Date().getFullYear() - 2006), label: 'años documentando' },
          ]}
          description="Una trayectoria construida a través de distintas miradas de registro audiovisual, con la intención de compartir aquello que encontramos en el camino."
        />
      </div>
    </section>
  );
}
