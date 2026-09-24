import type { ImageMetadata } from 'astro';
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/images/products/*.jpeg', { eager: true });
function photo(prefix: string): ImageMetadata {
  const match = Object.entries(images).find(([path]) => path.split('/').pop()?.startsWith(prefix));
  if (!match) throw new Error(`Missing MAZ product photograph: ${prefix}`);
  return match[1].default;
}
export interface Product {
  name: string;
  description: string;
  application: string;
  dimensions: string;
  packaging?: string;
  images: ImageMetadata[];
  technicalDetails?: string;
}
// Existing families and all 12 photographs preserved. Specifications await approval.
export const products: Product[] = [
  { name: 'Palitos para paleta', description: 'Formato plano con extremos redondeados.', application: 'Paletas y helados', dimensions: 'Medidas por confirmar', images: ['11-', '04-', '06-'].map(photo) },
  { name: 'Palillos redondos', description: 'Una sección redonda para diferentes preparaciones.', application: 'Fruta y alimentos', dimensions: 'Medidas por confirmar', images: ['01-', '03-'].map(photo) },
  { name: 'Palillos con punta', description: 'Un extremo con punta para insertar y presentar.', application: 'Brochetas y alimentos', dimensions: 'Medidas por confirmar', images: ['07-', '09-', '10-'].map(photo) },
  { name: 'Palitos de sección cuadrada', description: 'Madera de formato recto y sección cuadrada.', application: 'Alimentos y otras aplicaciones', dimensions: 'Medidas por confirmar', images: ['05-', '08-', '12-'].map(photo) },
  { name: 'Palitas de madera', description: 'Formato corto con un contorno curvo.', application: 'Alimentos y manualidades', dimensions: 'Medidas por confirmar', images: ['02-'].map(photo) },
];
