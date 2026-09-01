const BASE = 'https://images.unsplash.com/photo-';

export type PublicationType = 'Ensayo fotográfico' | 'Libro' | 'Investigación' | 'Catálogo';

export interface Publication {
  id: number;
  slug: string;
  type: PublicationType;
  title: string;
  subtitle: string;
  authors: string;
  year: string;
  publisher?: string;
  coverImage: string;
  description: string;
  pages?: number;
  featured?: boolean;
  link?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    slug: 'imagenes-que-resisten',
    type: 'Libro',
    title: 'Imágenes que Resisten',
    subtitle: 'Fotografía documental y derechos humanos en América Latina',
    authors: 'Valentina Cruz, Lucía Fernández',
    year: '2023',
    publisher: 'Ediciones FLACSO',
    coverImage: `${BASE}1698899114761-3a154520c816?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Un análisis crítico de la relación entre la fotografía documental y los movimientos de derechos humanos en el subcontinente latinoamericano desde la década del setenta hasta el presente. El libro recorre los archivos de seis países y propone una genealogía de la mirada comprometida.',
    pages: 312,
    featured: true,
  },
  {
    id: 2,
    slug: 'geografias-del-silencio',
    type: 'Ensayo fotográfico',
    title: 'Geografías del Silencio',
    subtitle: 'El desierto como espacio de ausencia y latencia',
    authors: 'Beatriz Salcedo',
    year: '2022',
    publisher: 'Autoedición',
    coverImage: `${BASE}1774870214362-c809e2847d10?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Un ensayo visual de largo aliento sobre los desiertos del mundo como geografías del silencio y la espera. Las imágenes construyen una cartografía poética de la aridez, en la que la ausencia humana revela la presencia más profunda del tiempo.',
    pages: 128,
    featured: true,
  },
  {
    id: 3,
    slug: 'el-tiempo-de-los-cuerpos',
    type: 'Ensayo fotográfico',
    title: 'El Tiempo de los Cuerpos',
    subtitle: 'Retratos de la vejez en comunidades rurales andinas',
    authors: 'Catalina Rojas',
    year: '2022',
    coverImage: `${BASE}1760637627114-659997dd5a96?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Cuarenta retratos de personas mayores en comunidades quechua de los Andes peruanos. Las fotografías exploran la inscripción del tiempo en los cuerpos y los rostros como forma de archivo viviente. Acompañadas de fragmentos de conversaciones registradas durante el trabajo de campo.',
    pages: 96,
  },
  {
    id: 4,
    slug: 'archivo-vivo',
    type: 'Libro',
    title: 'Archivo Vivo',
    subtitle: 'Prácticas de preservación de la memoria visual indígena',
    authors: 'Catalina Rojas, Valentina Cruz',
    year: '2021',
    publisher: 'Siglo XXI Editores',
    coverImage: `${BASE}1763922705578-0039fdcdfc48?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'El libro examina las metodologías desarrolladas por comunidades indígenas latinoamericanas para preservar y transmitir sus propios archivos visuales. Un trabajo que desafía las categorías occidentales de autoría, archivo y patrimonio, y propone la idea del archivo como práctica viva y comunitaria.',
    pages: 248,
    featured: true,
  },
  {
    id: 5,
    slug: 'rituales-de-la-permanencia',
    type: 'Catálogo',
    title: 'Rituales de la Permanencia',
    subtitle: 'Exposición colectiva — Centro Cultural Recoleta, Buenos Aires',
    authors: 'Colectivo Antropología Visual',
    year: '2021',
    publisher: 'Centro Cultural Recoleta',
    coverImage: `${BASE}1667572736586-ed434bf5dee8?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Catálogo de la exposición colectiva presentada en el Centro Cultural Recoleta de Buenos Aires. Reúne obra fotográfica de los cinco investigadores del colectivo en torno al concepto de permanencia: las formas en que las culturas inscriben su existencia en el tiempo a través del ritual.',
    pages: 84,
  },
  {
    id: 6,
    slug: 'voces-desde-los-margenes',
    type: 'Investigación',
    title: 'Voces desde los Márgenes',
    subtitle: 'Metodologías participativas en etnografía audiovisual',
    authors: 'Martín Andrade, Beatriz Salcedo',
    year: '2020',
    publisher: 'Revista Latinoamericana de Estudios Visuales, vol. 8',
    coverImage: `${BASE}1728072074686-cd8f8f2baf3a?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Artículo de investigación que examina las implicaciones éticas y metodológicas de la etnografía audiovisual participativa. A partir de cuatro estudios de caso en contextos de pobreza urbana y comunidades indígenas, los autores proponen un marco metodológico basado en la reciprocidad, la transparencia y la co-autoría.',
    featured: false,
  },
  {
    id: 7,
    slug: 'la-mirada-oblicua',
    type: 'Ensayo fotográfico',
    title: 'La Mirada Oblicua',
    subtitle: 'Sobre la fotografía de lo cotidiano como práctica antropológica',
    authors: 'Valentina Cruz',
    year: '2023',
    publisher: 'Autoedición',
    coverImage: `${BASE}1586957601609-472c804d426f?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Un ensayo visual y textual sobre las posibilidades antropológicas de la fotografía cotidiana. La mirada oblicua no busca el acontecimiento excepcional sino la densidad de lo ordinario: los objetos olvidados, los gestos repetidos, las luces de las tardes que siempre son las mismas y nunca lo son.',
    pages: 64,
  },
  {
    id: 8,
    slug: 'territorios-de-la-memoria',
    type: 'Investigación',
    title: 'Territorios de la Memoria',
    subtitle: 'Cartografías visuales del desplazamiento forzado en Uruguay',
    authors: 'Lucía Fernández, Martín Andrade',
    year: '2022',
    publisher: 'Cuadernos de Antropología Social, n° 55',
    coverImage: `${BASE}1759654527840-8e3b1c64187c?w=500&h=700&fit=crop&auto=format&q=80`,
    description: 'Investigación interdisciplinar que combina metodologías de la geografía cultural, la antropología visual y los estudios de memoria para analizar cómo las comunidades desplazadas reconstruyen su relación con el territorio a través de prácticas de cartografía participativa y fotografía comunitaria.',
  },
];

export const featuredPublications = publications.filter(p => p.featured);

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find(p => p.slug === slug);
}
