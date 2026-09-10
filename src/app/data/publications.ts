const coverModules = import.meta.glob<{
  default: string;
}>('@/assets/publications/*/cover.webp', { eager: true });

function getCoverImage(slug: string): string {
  const needle = `publications/${slug}/cover.webp`;
  const match = Object.entries(coverModules).find(([key]) => key.includes(needle));
  return match ? match[1].default : '';
}

export type PublicationType = 'Libro' | 'Revista' | 'Artículo';

export interface PublicationLink {
  url: string;
  label: string;
}

export interface Publication {
  id: number;
  slug: string;
  type: PublicationType;
  title: string;
  subtitle: string;
  authors: string;
  year: string;
  coverImage: string;
  description: string;
  featured?: boolean;
  links?: PublicationLink[];
}

export const publications: Publication[] = [
  {
    id: 1,
    slug: 'montevideo-electronico',
    type: 'Libro',
    title: 'Montevideo Electrónico',
    subtitle: 'Antropología urbana y música electrónica',
    authors: 'Gabriel de Souza',
    year: '2012',
    coverImage: getCoverImage('montevideo-electronico'),
    description: 'El libro Montevideo Electrónico fue el ganador del concurso «Tu tesis en Cultura» realizado por la Intendencia Municipal de Montevideo. Surge de las investigaciones en antropología urbana y antropología de la música del autor. Se metió dentro de los templos de la música techno de la noche montevideana y escribió un libro reflejando éticas y estéticas propias de movimientos jóvenes.',
    featured: true,
    links: [
      { url: 'https://drive.google.com/file/d/16YdhZqwLZJOp3JaqKy9TSiv8eTaikYkG/view', label: 'Ver publicación' },
    ],
  },
  {
    id: 3,
    slug: 'nuevos-lenguajes-butia',
    type: 'Artículo',
    title: 'Nuevos lenguajes de representación y patrimonialización del Butiá en Rocha',
    subtitle: 'Patrimonialización del palmar de Butiá',
    authors: 'Gabriel de Souza',
    year: '2010',
    coverImage: getCoverImage('nuevos-lenguajes-butia'),
    description: 'Publicación sobre nuevos lenguajes de representación y patrimonialización del palmar de Butiá en el departamento de Rocha.',
  },
  {
    id: 4,
    slug: 'trama-revista',
    type: 'Revista',
    title: 'Trama. Revista de Cultura y Patrimonio.',
    subtitle: 'Asociación Uruguaya de Antropología Social y Cultural',
    authors: 'Asociación Uruguaya de Antropología Social y Cultural (AUAS)',
    year: '2013',
    coverImage: getCoverImage('trama-revista'),
    description: 'Trama, revista de la Asociación Uruguaya de Antropología Social y Cultural (AUAS), nace como proyecto premiado por Fondos Concursables para la Cultura / MEC en 2009. Cuatro años y cuatro números más tarde estamos dando continuidad al proyecto fundacional, a través de un nuevo número de Trama, esta vez en formato digital.',
    links: [
      { url: 'https://www.auas.org.uy/trama/index.php/Trama/issue/view/14', label: 'Ver publicación' },
    ],
  },
  {
    id: 6,
    slug: 'anuario-unesco',
    type: 'Libro',
    title: 'Antropología Social y Cultural del Uruguay. Anuario UNESCO 2009-2010',
    subtitle: 'Compilación y edición académica',
    authors: 'Sonnia Romero Gorski',
    year: '2010',
    coverImage: getCoverImage('anuario-unesco'),
    description: 'Anuario Antropología Social y Cultural en Uruguay 2009-2010. Compilación y Edición: Sonnia Romero Gorski. Directora del Departamento de Antropología Social, Facultad de Humanidades y Ciencias de la Educación, Universidad de la República.',
    links: [
      { url: 'https://drive.google.com/file/d/1Nc__vNzCJAATyLqulV6ICy2z7_aKf3hr/view', label: 'Ver publicación' },
    ],
  },
  {
    id: 7,
    slug: 'el-arte-rupestre-del-norte',
    type: 'Artículo',
    title: 'El arte rupestre del norte del Uruguay',
    subtitle: 'Experiencia hacia el pasado e imagen turística del presente',
    authors: 'Gabriel de Souza',
    year: '2014',
    coverImage: getCoverImage('el-arte-rupestre-del-norte'),
    description: 'Publicación sobre el arte rupestre del norte del Uruguay como experiencia hacia el pasado e imagen turística del presente.',
    links: [
      { url: 'https://drive.google.com/file/d/1w4_LJYqb-Bkuxl20YAuHXWbHQr3FVdun/view', label: 'Ver publicación' },
    ],
  },
];

export const featuredPublications = publications.filter(p => p.featured);

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find(p => p.slug === slug);
}
