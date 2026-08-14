import { Link } from 'react-router';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <p
          className="text-muted-foreground tracking-[0.3em] uppercase mb-6"
          style={{ fontSize: '0.65rem', fontFamily: 'DM Sans, sans-serif' }}
        >
          Error 404
        </p>
        <h1
          className="text-foreground mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            fontStyle: 'italic',
          }}
        >
          Página no encontrada
        </h1>
        <p
          className="text-muted-foreground mb-10 leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', lineHeight: 1.7 }}
        >
          La página que buscas no existe o ha sido movida. Vuelve al inicio o explora nuestros proyectos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-foreground text-primary-foreground px-8 py-4 hover:bg-accent transition-colors duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em' }}
          >
            INICIO
          </Link>
          <Link
            to="/proyectos"
            className="border border-border text-foreground px-8 py-4 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em' }}
          >
            VER PROYECTOS
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
