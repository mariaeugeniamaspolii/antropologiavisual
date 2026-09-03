export type PublicationType = 'Libro' | 'Revista' | 'Artículo';

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
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/09/tapa-400x280.jpg',
    description: 'El libro Montevideo Electrónico fue el ganador del concurso «Tu tesis en Cultura» realizado por la Intendencia Municipal de Montevideo. Surge de las investigaciones en antropología urbana y antropología de la música del autor. Se metió dentro de los templos de la música techno de la noche montevideana y escribió un libro reflejando éticas y estéticas propias de movimientos jóvenes.',
    featured: true,
  },
  {
    id: 2,
    slug: 'trascendiendo-la-dicotomia',
    type: 'Artículo',
    title: 'Trascendiendo la dicotomía en torno a la (in)materialidad del patrimonio',
    subtitle: 'Conocimientos ecológicos locales sobre el uso de vegetales',
    authors: 'Juan Martín Dabezies',
    year: '2010',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/09/DSCN5230-400x280.jpg',
    description: 'La crisis de la modernidad ha despertado una búsqueda de alternativas a las formas modernas de relacionamiento entre el ser humano y su medio ambiente. En este artículo se presenta un trabajo de puesta en valor del patrimonio que se basa en el extrañamiento y la familiarización cultural, documentando los conocimientos asociados al manejo local de la palma Butia capitata.',
  },
  {
    id: 3,
    slug: 'nuevos-lenguajes-butia',
    type: 'Artículo',
    title: 'Nuevos lenguajes de representación y patrimonialización del Butiá en Rocha',
    subtitle: 'Patrimonialización del palmar de Butiá',
    authors: 'Gabriel de Souza',
    year: '2010',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/08/10chica-400x280.jpg',
    description: 'Publicación sobre nuevos lenguajes de representación y patrimonialización del palmar de Butiá en el departamento de Rocha.',
  },
  {
    id: 4,
    slug: 'trama-revista-3',
    type: 'Revista',
    title: 'Trama. Revista de Cultura y Patrimonio. N° 3',
    subtitle: 'Asociación Uruguaya de Antropología Social y Cultural',
    authors: 'AUAS',
    year: '2013',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/08/trama3-e1440516898958-400x280.jpg',
    description: 'Trama, revista de la Asociación Uruguaya de Antropología Social y Cultural (AUAS), nace como proyecto premiado por Fondos Concursables para la Cultura / MEC en 2009. Cuatro años y cuatro números más tarde estamos dando continuidad al proyecto fundacional, a través de un nuevo número de Trama, esta vez en formato digital.',
  },
  {
    id: 5,
    slug: 'trama-revista-4',
    type: 'Revista',
    title: 'Trama. Revista de Cultura y Patrimonio. N° 4',
    subtitle: 'Asociación Uruguaya de Antropología Social y Cultural',
    authors: 'AUAS',
    year: '2015',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/08/Trama-tapa-e1440516535909-400x280.png',
    description: 'Trama, revista de la Asociación Uruguaya de Antropología Social y Cultural (AUAS), nace como proyecto premiado por Fondos Concursables para la Cultura / MEC en 2009. Cuatro años y cuatro números más tarde estamos dando continuidad al proyecto fundacional, a través de un nuevo número de Trama, esta vez en formato digital.',
  },
  {
    id: 6,
    slug: 'anuario-unesco-2009-2010',
    type: 'Libro',
    title: 'Antropología Social y Cultural del Uruguay. Anuario UNESCO 2009-2010',
    subtitle: 'Compilación y edición académica',
    authors: 'Sonnia Romero Gorski (comp.)',
    year: '2010',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/09/Tapa-anuario09-10-400x280.jpg',
    description: 'Anuario Antropología Social y Cultural en Uruguay 2009-2010. Compilación y Edición: Sonnia Romero Gorski. Directora del Departamento de Antropología Social, Facultad de Humanidades y Ciencias de la Educación, Universidad de la República.',
  },
];

export const featuredPublications = publications.filter(p => p.featured);

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find(p => p.slug === slug);
}
