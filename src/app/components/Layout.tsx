import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { getProjectBySlug } from '../data/projects';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Antropología Visual',
  '/proyectos': 'Proyectos',
  '/contacto': 'Contacto',
  '/equipo': 'Equipo',
  '/publicaciones': 'Publicaciones',
};

const navLinks = [
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/equipo', label: 'Equipo' },
  { to: '/publicaciones', label: 'Publicaciones' },
  { to: '/contacto', label: 'Contacto' },
];

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  // Dynamic page title
  useEffect(() => {
    const slugMatch = location.pathname.match(/^\/proyectos\/(.+)$/);
    if (slugMatch) {
      const project = getProjectBySlug(slugMatch[1]);
      document.title = project ? `${project.title} — Antropología Visual` : 'Proyecto — Antropología Visual';
    } else {
      const base = PAGE_TITLES[location.pathname] || 'Antropología Visual';
      document.title = location.pathname === '/' ? base : `${base} — Antropología Visual`;
    }
  }, [location.pathname]);

  const navDark = scrolled || !isHome;
  const isActive = (to: string) =>
    location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: navDark ? '#F2EBE0' : 'rgba(var(--background-rgb), 0)',
          transition: 'background-color 0.2s ease',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-14 md:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            aria-label="Inicio"
          >
            <span
              className="transition-colors duration-400"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                color: navDark ? 'var(--foreground)' : 'rgba(var(--white-rgb), 0.9)',
                lineHeight: 1,
              }}
            >
              Antropología Visual
            </span>
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-5 md:gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="relative transition-colors duration-400"
                style={{
                  fontSize: 'var(--text-nav)',
                  letterSpacing: '0.06em',
                  color: navDark
                    ? isActive(link.to)
                      ? 'var(--foreground)'
                      : 'var(--muted-foreground)'
                    : isActive(link.to)
                      ? 'rgba(var(--white-rgb), 0.95)'
                      : 'rgba(var(--white-rgb), 0.55)',
                }}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ backgroundColor: navDark ? 'var(--accent)' : 'rgba(var(--white-rgb), 0.5)' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Hamburger — mobile/tablet */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.span
              className="block w-5 h-px"
              style={{ backgroundColor: navDark ? 'var(--foreground)' : 'rgba(var(--white-rgb), 0.9)' }}
              animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-5 h-px"
              style={{ backgroundColor: navDark ? 'var(--foreground)' : 'rgba(var(--white-rgb), 0.9)' }}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-px"
              style={{ backgroundColor: navDark ? 'var(--foreground)' : 'rgba(var(--white-rgb), 0.9)' }}
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundColor: navDark ? '#F2EBE0' : 'rgba(var(--background-rgb), 0)' }}
        >
          <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 border-b transition-colors duration-200"
                style={{
                  fontSize: 'var(--text-nav)',
                  letterSpacing: '0.06em',
                  borderColor: navDark ? 'rgba(26,21,16,0.06)' : 'rgba(255,255,255,0.08)',
                  color: navDark
                    ? isActive(link.to)
                      ? 'var(--foreground)'
                      : 'var(--muted-foreground)'
                    : isActive(link.to)
                      ? 'rgba(var(--white-rgb), 0.95)'
                      : 'rgba(var(--white-rgb), 0.55)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </header>

      {/* Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="pt-20 md:pt-28 pb-10 px-6 md:px-12"
        style={{ backgroundColor: 'var(--foreground)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-20">

            {/* Col 1: Brand + description */}
            <div>
              <Link to="/">
                <p
                  className="text-primary-foreground/90 mb-4"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  Antropología Visual
                </p>
              </Link>

              {/* Nav links in footer */}
              <ul className="space-y-2">
                {navLinks.map(l => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors duration-200"
                      style={{ fontSize: 'var(--text-nav)' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Redes */}
            <div>
              <p
                className="text-primary-foreground/40 tracking-[0.25em] uppercase mb-6"
                style={{ fontSize: 'var(--text-label)' }}
              >
                Redes
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/antropologia_visual/' },
                  { name: 'YouTube', url: 'https://www.youtube.com/channel/UC-vfGoqm4Y6Sd5gflR3Q5XQ' },
                  { name: 'Facebook', url: 'https://www.facebook.com/antropologiaculturavisual.org' },
                ].map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors duration-200"
                    style={{ fontSize: 'var(--text-nav)' }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Contacto */}
            <div>
              <p
                className="text-primary-foreground/40 tracking-[0.25em] uppercase mb-6"
                style={{ fontSize: 'var(--text-label)' }}
              >
                Contacto
              </p>
              <a
                href="mailto:gadesouza@gmail.com"
                className="block text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors duration-200"
                style={{ fontSize: 'var(--text-body-md)' }}
              >
                gadesouza@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom rule */}
          <div
            className="border-t pt-8 flex items-center justify-between"
            style={{ borderColor: 'rgba(var(--background-rgb), 0.06)' }}
          >
            <p
              className="text-primary-foreground/40"
              style={{ fontSize: '0.7rem' }}
            >
              © {new Date().getFullYear()} Antropología Visual
            </p>
            <p
              className="text-primary-foreground/40 italic"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'var(--text-label-lg)' }}
            >
              Diseño y desarrollo por{' '}
              <a
                href="https://mariaeugeniamaspoli.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors duration-200"
              >
                <strong>María Eugenia Máspoli</strong>
              </a>
              {' '}y

              <a
                href="https://www.linkedin.com/in/sofia-morelli-cobham/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors duration-200"
              >
                <strong>Sofía Morelli</strong>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
