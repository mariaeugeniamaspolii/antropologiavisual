import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Equipo } from './pages/Equipo';
import { Proyectos } from './pages/Proyectos';
import { ProyectoDetalle } from './pages/ProyectoDetalle';
import { Publicaciones } from './pages/Publicaciones';
import { Contacto } from './pages/Contacto';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'equipo', Component: Equipo },
      { path: 'proyectos', Component: Proyectos },
      { path: 'proyectos/:slug', Component: ProyectoDetalle },
      { path: 'publicaciones', Component: Publicaciones },
      { path: 'contacto', Component: Contacto },
      { path: '*', Component: NotFound },
    ],
  },
]);
