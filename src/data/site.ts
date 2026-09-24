export const navigation = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
];
export const site = {
  title: 'MAZ | Palillos de madera · Fabricación en México',
  description: 'Fabricamos palillos de madera para paletas, frutas, alimentos y otras aplicaciones. Conoce los formatos de MAZ y consulta las necesidades de tu negocio.',
  hero: {
    eyebrow: 'MANUFACTURA MEXICANA',
    title: 'Una pieza de madera.\nUn mundo de posibilidades.',
    description: 'Fabricamos palillos de madera para los productos que forman parte de todos los días.',
    cta: 'Conoce nuestros productos',
  },
  about: {
    title: 'En el origen de\ntu siguiente producto.',
    paragraphs: [
      'Somos MAZ, un fabricante mexicano de palillos de madera para diferentes industrias y aplicaciones.',
      'Transformamos la madera en formatos que acompañan tu producción: desde paletas y frutas hasta alimentos, manualidades y nuevas ideas. Hablemos del formato que necesita tu negocio.',
    ],
  },
  // Enable only after placing approved assets at these paths.
  media: {
    videoEnabled: false,
    webm: '/video/maz-proceso.webm',
    mp4: '/video/maz-proceso.mp4',
    poster: '/images/maz-proceso-poster.webp',
    posterEnabled: false,
  },
  catalog: { available: false, path: '/documents/catalogo-maz.pdf' },
  // WhatsApp: international digits only; telephone: international number with +.
  contact: { whatsapp: '5217861223290', email: '', phone: '', location: '' },
};
// Draft sequence: confirm with production before publication.
export const processSteps = [
  ['Materia prima', 'El punto de partida: la madera.'],
  ['Corte', 'El material toma sus primeras medidas.'],
  ['Formado', 'Cada aplicación define su forma.'],
  ['Pulido', 'Atención a la superficie y al acabado.'],
  ['Selección', 'Revisión y control de calidad.'],
  ['Empaque', 'Preparación de la presentación.'],
  ['Producto terminado', 'Un formato para tu producción.'],
];
