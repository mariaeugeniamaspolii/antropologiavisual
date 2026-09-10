export type ProjectRatio = 'square' | 'portrait' | 'landscape';

export interface VideoItem {
  type: 'mp4' | 'youtube';
  url: string;
  title: string;
  thumbnail?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string[];
  ratio: ProjectRatio;
  format?: string;
  location: string;
  coverImage: string;
  heroImage: string;
  introduction: string;
  description: string;
  team: string;
  director: string;
  photography: string;
  fieldwork?: string;
  duration?: string;
  awards?: string[];
  relatedSlugs: string[];
  featured?: boolean;
  links?: { url: string; label: string; }[];
  videos?: VideoItem[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ciar',
    title: 'CIAR – Centro de Interpretación del Arte Rupestre',
    subtitle: 'Nuevas maneras de acercarnos al arte rupestre y a la prehistoria del Uruguay',
    year: '2018',
    category: [],
    ratio: 'landscape',
    location: 'Salto, Uruguay',
    coverImage: new URL('../../assets/projects/ciar/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/ciar/hero.webp', import.meta.url).href,
    introduction: 'Sumergite en el trabajo de campo arqueológico y descubre grabados que hicieron nuestros pobladores hace miles de años.',
    description: 'Antropología Visual y la Facultad de Humanidades y Ciencias de la Educación (FHCE) presentan el Centro de Interpretación del Arte Rupestre, un proyecto premiado por la Agencia Nacional de Investigación e Innovación (ANII).\n\nUna experiencia pensada para descubrir, conocer y relacionarnos de otra forma con las huellas que dejaron quienes habitaron este territorio antes que nosotros.\n\nCon el apoyo del Gobierno Departamental de Salto, el Departamento de Arqueología y el Área de Estudios Turísticos de la FHCE (Udelar), el proyecto propone nuevas maneras de acercarnos al arte rupestre y a la prehistoria del Uruguay.',
    team: 'Coordinación del proyecto: Gabriel de Souza, Realización audiovisual: Andrés Costa, Audio y realización audiovisual: Claudia Píriz, Equipo Departamento de Arqueología FHCE Diana Rosete, Diseño muestra lúdica: Verónica Albarellos',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    awards: ['Proyecto premiado por ANII (Agencia Nacional de Investigación e Innovación de Uruguay)'],
    relatedSlugs: ['viviendo-a-monte', 'voces-nuevo-berlin'],
    featured: true,
    links: [],
  },
  {
    id: 2,
    slug: 'del-butia',
    title: 'Del butiá',
    subtitle: 'Una mirada antropológica sobre el palmar de Butia odorata',
    year: '2012',
    category: [],
    ratio: 'landscape',
    location: 'Vuelta del Palmar, Rocha, Uruguay',
    coverImage: new URL('../../assets/projects/del-butia/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/del-butia/hero.webp', import.meta.url).href,
    introduction: 'Una mirada antropológica del palmar de Butia odorata, conocido localmente como Butiá, desde la perspectiva de Vuelta del Palmar.',
    description: 'Esta web es el producto de una mirada antropológica del palmar de Butia odorata, conocido localmente como Butiá. Es una mirada que define una perspectiva desde Vuelta del Palmar (Departamento de Rocha, Uruguay), una localidad de pequeños productores rurales que, entre otras actividades económicas, elaboran y venden productos derivados del Butiá en la ruta nacional nº9. La relación que tienen las personas de Vuelta del Palmar con el palmar de Butiá de Castillos es muy particular y significativa ya que es parte de su vida diaria como un todo y por ese motivo decidimos representar el palmar desde ese lugar.',
team: '',

    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    awards: ['Proyecto premiado por los Fondos Concursables para la Cultura MEC 2012'],
    relatedSlugs: ['viviendo-a-monte', 'pesca-artesanal'],
    featured: true,
    links: [],
  },
  {
    id: 3,
    slug: 'voces-nuevo-berlin',
    title: 'Voces Nuevo Berlín',
    subtitle: 'Un homenaje a Nuevo Berlín a través de sus músicos y sus canciones',
    year: '2018',
    category: [],
    ratio: 'landscape',
    location: 'Nuevo Berlín, Uruguay',
    coverImage: new URL('../../assets/projects/voces-nuevo-berlin/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/voces-nuevo-berlin/hero.webp', import.meta.url).href,
    introduction: 'Un homenaje al pueblo Nuevo Berlín a través de las canciones de Ofelio Acosta, Laudemaro Moreno, Rubén Maidana, Wilson Vega y Miguel Ángel Rodríguez.',
    description: 'Proyecto Voces por Antropología Visual. Un homenaje al pueblo Nuevo Berlín en las canciones de Ofelio Acosta, Laudemaro Moreno, Rubén Maidana, Wilson Vega y Miguel Ángel Rodríguez. Presentado en el Teatro Young de Fray Bentos el 22 de diciembre de 2018. Diseño gráfico: Lorena Canelas. Diseño audiovisual: María Victoria Pena y Gabriel de Souza. Por la Liga de Turismo de Nuevo Berlín: Silvia Fellosa.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    awards: ['Proyecto premiado por los Fondos Concursables para la Cultura'],
    relatedSlugs: ['del-butia', 'candombe'],
    featured: true,
    links: [
      { url: 'https://comunicacionmaleco.wixsite.com/vocesnuevoberlin', label: 'Sitio web' },
    ],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=HdtrVh4b7-0', title: 'Video Voces Teatro Young' },
    ],
  },
  {
    id: 4,
    slug: 'viviendo-a-monte',
    title: 'Viviendo a Monte',
    subtitle: 'Explora los vínculos con el territorio, recuperando saberes transmitidos entre generaciones',
    year: '2010',
    category: [],
    ratio: 'landscape',
    location: 'Durazno y Tacuarembó, Uruguay',
    coverImage: new URL('../../assets/projects/viviendo-a-monte/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/viviendo-a-monte/hero.webp', import.meta.url).href,
    introduction: 'El territorio según sus niños. A través de talleres en Durazno y Tacuarembó los niños dibujaron lo que ellos consideraron importante de sus localidades.',
    description: 'Estimulando la interacción, reflexión y comunicación de la investigación se hace énfasis en las vivencias generadas para fortalecer el sentido de pertenencia e identidad. Se revitalizan los imaginarios locales, tradiciones y oficios vinculados al territorio que configuran ciertos procesos de tradicionalización de conocimientos sobre el mundo vegetal, movilizando el diálogo en el ámbito familiar. El territorio es interpretado desde la mirada de cazadores, mujeres que curan, apicultores, pescadores y otros pobladores del monte. El monte se convierte de a poco en territorio referencial, donde los lugares les pertenecen a los montaraces, en donde se reconocen.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    fieldwork: 'Analía Pérez Landa, Leticia Berrondo, Andrés Cabrera',
    awards: [
      'Proyecto premiado por los Fondos Concursables para la Cultura MEC 2010',
      'Proyecto premiado por Global Greengrants Fund',
    ],
    relatedSlugs: ['del-butia', 'pesca-artesanal'],
    links: [],
  },
  {
    id: 5,
    slug: 'candombe',
    title: 'Candombe',
    subtitle: 'El Candombe y sus comparsas en todo el país',
    year: '2015',
    category: [],
    ratio: 'landscape',
    location: 'Montevideo, Uruguay',
    coverImage: new URL('../../assets/projects/candombe/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/candombe/hero.webp', import.meta.url).href,
    introduction: 'El Candombe y su espacio sociocultural. Documentación, promoción y difusión de las llamadas tradicionales del Candombe.',
    description: 'Proyecto "Documentación, promoción y difusión de las llamadas tradicionales del Candombe, expresiones de identidad de los barrios Sur, Cordón y Palermo de la ciudad de Montevideo" del Fondo de Patrimonio Cultural Inmaterial, integrado por la Comisión Nacional para la UNESCO, el equipo de coordinación del proyecto MEC y la Comisión del Patrimonio Cultural de la Nación. El mapa aporta información sobre 60 entrevistas realizadas a comparsas de todo el país por parte del Colectivo antropologiavisual.org. La información avanza sobre la historia de las comparsas, su significación en el barrio donde suenan, comparten y enseñan candombe; los horarios y recorridos de sus salidas y cómo el candombe viene ganando las calles no solo en Montevideo sino en muchas localidades del interior del país.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Fabiana Operti, Nicole Ljungmann',
    awards: [],
    relatedSlugs: ['voces-nuevo-berlin', 'del-butia'],
    links: [
      {
        url: 'https://www.google.com/maps/d/viewer?mid=1VVsKep9oMu_g7YvY9m2eCFUvajU&ll=-32.6638360359881%2C-57.01322372928546&z=6',
        label: 'Candombe y su espacio sociocultural - Google Maps '
      }
    ]
  },
  {
    id: 6,
    slug: 'pesca-artesanal',
    title: 'Pesca Artesanal',
    subtitle: 'El oficio de la pesca y su vínculo con el Paisaje Protegido Laguna de Rocha',
    year: '2015',
    category: [],
    ratio: 'landscape',
    location: 'Laguna de Rocha, Uruguay',
    coverImage: new URL('../../assets/projects/pesca-artesanal/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/pesca-artesanal/hero.webp', import.meta.url).href,
    introduction: 'Construcción participativa de un espacio interpretativo sobre bienes culturales asociados al oficio de la pesca en el Paisaje Protegido Laguna de Rocha.',
    description: 'A través de un fondo concursable MEC, el proyecto propone la construcción participativa de un espacio interpretativo que provoque en la sociedad rochense la expresión de ciertos bienes culturales asociados al oficio de la pesca en el "Paisaje Protegido Laguna de Rocha".',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    awards: ['Proyecto premiado por los Fondos Concursables para la Cultura MEC 2014'],
    relatedSlugs: ['del-butia', 'viviendo-a-monte'],
    links: [],
  },
  {
    id: 7,
    slug: 'los-narradores-del-caraguata',
    title: 'Los Narradores del Caraguatá',
    subtitle: 'Pobladores e investigadores reflexionan sobre nuestra identidad nacional',
    year: '2009',
    category: ['Documental', 'Audio'],
    ratio: 'portrait',
    location: 'Tacuarembó, Uruguay',
    coverImage: new URL('../../assets/projects/los-narradores-del-caraguata/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/los-narradores-del-caraguata/hero.webp', import.meta.url).href,
    introduction: 'Un documental que hace emerger voces e imaginarios históricamente relegados en Uruguay.',
    description: '"Los Narradores del Caraguatá" es un documental que hace emerger voces e imaginarios históricamente relegados en Uruguay. Está filmado en pequeños poblados de Tacuarembó y construye redes de testimonios en donde pobladores locales e investigadores reflexionan sobre patrimonios ausentes y memorias residuales. En imágenes y sonidos se replantea nuestra identidad nacional, quebrando espejos a partir de los cuales nos pensamos desde la prehistoria hasta hoy.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    duration: '55:48',
    relatedSlugs: ['la-casita-del-hornero', 'castillos-de-tierra'],
    links: [
      { url: 'https://www.lr21.com.uy/comunidad/384480-al-rescate-de-lo-desconocido?utm_source=redirects&utm_medium=dominiolargo&utm_campaign=301_Redirects', label: 'Noticias Uruguay, LARED21 Diario Digital' },
      { url: 'https://www.elpais.com.uy/sabado-show/con-el-ojo-urbano', label: 'Nota de El País' },
    ],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=SuBDkrJggo0', title: 'Los Narradores del Caraguatá Documental' },
    ],
  },
  {
    id: 8,
    slug: 'la-casita-del-hornero',
    title: 'La casita del hornero',
    subtitle: 'Las voces de una familia de fabricantes de ladrillos artesanales',
    year: '2009',
    category: ['Documental', 'Audio'],
    ratio: 'square',
    location: 'Villa Ansina, Tacuarembó, Uruguay',
    coverImage: new URL('../../assets/projects/la-casita-del-hornero/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/la-casita-del-hornero/hero.webp', import.meta.url).href,
    introduction: 'Una investigación que aborda conocimientos, técnicas y representaciones transmitidas por generaciones en Villa Ansina.',
    description: 'Una investigación que aborda conocimientos, técnicas y representaciones transmitidas por generaciones en Villa Ansina, Tacuarembó. La voz de una familia de fabricantes de ladrillos artesanales que está sufriendo el proceso de despoblamiento rural. Una mirada y un oído puestos en los saberes, los objetos y los ambientes sonoros de la producción del ladrillo y los paisajes que la envuelven.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    duration: '13:35',
    relatedSlugs: ['los-narradores-del-caraguata', 'el-fogon-50-anos'],
    links: [],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=uhpp49bphZM', title: 'La casita del hornero' },
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=RqoJHvLzrd8', title: 'CURE' },
    ],
  },
  {
    id: 9,
    slug: 'castillos-de-tierra',
    title: 'Castillos de Tierra',
    subtitle: 'Historias del trabajo rural en Castillos',
    year: 'Null',
    category: ['Documental'],
    ratio: 'portrait',
    location: 'Castillos, Rocha, Uruguay',
    coverImage: new URL('../../assets/projects/castillos-de-tierra/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/castillos-de-tierra/hero.webp', import.meta.url).href,
    introduction: 'Un circo que llega a la ciudad, una feria vecinal, una quesería, una huerta y un tractor que activan el sentido de pertenencia.',
    description: 'Un circo que llega a la ciudad, una feria vecinal, una quesería, una huerta, un tractor y un niño que activa el sentido de pertenencia de cuatro generaciones a esa tierra. En Castillos de Tierra, se atan historias de culto al trabajo en el campo por cuatro familias rurales del entorno de Castillos (Rocha). Los altos costos de producción, la dificultad de acceso a herramientas, el aislamiento, la competencia con los "grandes" por la tierra son algunas de las dificultades que enfrenta el productor pequeño.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    duration: '16:41',
    relatedSlugs: ['los-narradores-del-caraguata', 'el-tiempo-de-los-abuelos'],
    links: [],
  },
  {
    id: 10,
    slug: 'el-fogon-50-anos',
    title: 'El fogón 50 años',
    subtitle: 'Recorrido por la memoria de algunas familias rurales de Sarandí del Yí',
    year: 'Null',
    category: ['Documental'],
    ratio: 'square',
    location: 'Sarandí del Yí, Durazno, Uruguay',
    coverImage: new URL('../../assets/projects/el-fogon-50-anos/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/el-fogon-50-anos/hero.webp', import.meta.url).href,
    introduction: 'Un recorrido por la memoria de familias rurales integrantes de la Cooperativa Agraria El Fogón.',
    description: 'Este documental plantea un recorrido por la memoria de algunas familias rurales de Sarandí del Yí integrantes de la Cooperativa Agraria El Fogón. Los problemas y desafíos del aislamiento de las familias rurales de hace 50 años hasta ahora, y la asociación como estrategia para enfrentarlos y "hacer historia juntos". Testimonios que reflejan distintas formas de vivir la institución cooperativa y sentirse parte de "algo más grande que los une".',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    duration: '15:29',
    relatedSlugs: ['la-casita-del-hornero', 'el-tiempo-de-los-abuelos'],
    links: [],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=Q9zcBQTX6ow', title: 'EL FOGON 50 años' },
    ],
  },
  {
    id: 11,
    slug: 'el-tiempo-de-los-abuelos',
    title: 'El tiempo de los Abuelos',
    subtitle: 'Una mirada íntima sobre los vínculos entre generaciones',
    year: 'Null',
    category: ['Documental'],
    ratio: 'portrait',
    location: 'Uruguay',
    coverImage: new URL('../../assets/projects/el-tiempo-de-los-abuelos/cover.webp', import.meta.url).href,
    heroImage: new URL('../../assets/projects/el-tiempo-de-los-abuelos/hero.webp', import.meta.url).href,
    introduction: 'Una movida donde cualquier realizador entrevista a sus abuelos y sale al encuentro de memorias y olvidos.',
    description: 'La idea de esta movida es que cualquier realizador (o no) de audiovisuales, entreviste de la forma que se le ocurra mejor a sus abuelos y salga al encuentro de memorias y olvidos, de lugares referenciales "con sentido para ellos" y que se expresen también los vínculos abuelo/nieto.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    relatedSlugs: ['castillos-de-tierra', 'el-fogon-50-anos'],
    links: [],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=gdYXvwnxvks', title: 'El tiempo de los abuelos' },
    ],
  },

  {
    id: 14,
    slug: 'tierra-en-pila',
    title: 'Proyecto Tierra en Pila',
    subtitle: 'Presentación Tierra en Pila en el Centro Universitario Región Este (CURE).',
    year: '2015',
    category: ['Audio'],
    ratio: 'landscape',
    location: 'Uruguay',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/09/tierra-en-pila-foto-400x280.jpg',
    heroImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/09/tierra-en-pila-foto-400x280.jpg',
    introduction: 'Canal de audio de antropologiavisual.org.',
    description: 'Canal de audio antropologiavisual.org. Presentación Tierra en Pila en el Centro Universitario Región Este.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    relatedSlugs: ['apenas-ranas-del-caraguata', 'cafe-de-coco'],
    links: [],
  },
  {
    id: 17,
    slug: 'los-lobos-por-el-zorro',
    title: 'Los lobos por El Zorro',
    subtitle: 'Audios',
    year: '2015',
    category: ['Audio'],
    ratio: 'landscape',
    location: 'Cabo Polonio, Rocha, Uruguay',
    coverImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/08/Imagen-140-400x280.jpg',
    heroImage: 'https://www.antropologiavisual.org/wp-content/uploads/2015/08/Imagen-140-400x280.jpg',
    introduction: 'Testimonios de "El Zorro" antiguo lobero del Cabo Polonio sobre el trabajo en las Loberías.',
    description: 'Testimonios de "El Zorro" antiguo lobero del Cabo Polonio sobre el trabajo en las Loberías. Realizado por Gabriel de Souza. Grabado en Estudios Rock Yugular.',
    team: '',
    director: 'Gabriel de Souza',
    photography: 'Colectivo antropologiavisual.org',
    relatedSlugs: ['cafe-de-coco', 'tierra-en-pila'],
    links: [],
  },
];

export const featuredProjects = projects.filter(p => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter(p => slugs.includes(p.slug)).slice(0, 3);
}

export function getPrevNextProjects(slug: string): { prev: Project | null; next: Project | null } {
  const idx = projects.findIndex(p => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? projects[idx - 1] : projects[projects.length - 1],
    next: idx < projects.length - 1 ? projects[idx + 1] : projects[0],
  };
}
