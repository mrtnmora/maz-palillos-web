# MAZ · Palillos de madera

Sitio corporativo B2B estático en Astro y TypeScript, con CSS nativo y JavaScript
mínimo para menú móvil y video. Sin React, backend, base de datos ni comercio.

## Desarrollo

Node.js 24 LTS y npm. Desde la raíz:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abre http://127.0.0.1:4321. Para compilar y revisar la salida estática:

```powershell
npm.cmd run build
npm.cmd run preview
```

`build` ejecuta primero el verificador Astro/TypeScript. Publica únicamente `dist/`
en un alojamiento estático; `preview` es una herramienta de revisión local.
Configura `SITE_URL` con el dominio real en el entorno de compilación. Sin esta
variable se omiten los enlaces canónicos y URLs sociales absolutas.

## Estructura activa

- `src/pages/index.astro`: composición de la página.
- `src/layouts/Layout.astro`: HTML, idioma, metadatos y enlace de salto.
- `src/components/`: Header, HeroVideo, About, Process, Products, ProductCard,
  CatalogCTA, Contact, Footer y Brand.
- `src/data/site.ts`: textos principales, proceso, navegación, contactos y medios.
- `src/data/products.ts`: cinco familias, fotografías y especificaciones.
- `src/styles/global.css`: estilos, breakpoints y movimiento reducido.
- `src/assets/images/products/`: originales optimizados por Astro durante build.
- `public/`: video, poster, documentos y originales históricos.
- `legacy/`: implementación React/Vinext anterior conservada como referencia,
  excluida de la compilación y del despliegue.

## Recursos pendientes

Consulta [la guía de medios](docs/MEDIA.md) para rutas exactas y activación.
El hero usa una fotografía real existente hasta recibir el video industrial.
El catálogo completo se muestra como próximo; la ficha de palo elotero sigue
siendo descargable. Los contactos vacíos no generan enlaces ficticios.

Antes del lanzamiento deben aprobarse logo, textos, proceso, medidas,
presentaciones, contactos, dominio, video y catálogo. Los textos de fabricación
son una base editorial para revisión de MAZ, sin certificaciones ni capacidades
cuantificadas inventadas.

## Accesibilidad y comportamiento

Navegación semántica, enlaces de salto, foco visible y menú con `aria-expanded`,
Escape y cierre al navegar. Sin JavaScript, la navegación sigue visible. Galerías
con `<details>` nativo. Video con fallback, pausa accesible, movimiento reducido
y ahorro de datos. Imágenes WebP responsive, lazy loading salvo el hero y fuentes
del sistema. La ficha PDF original no se ha auditado por accesibilidad documental.

## Migración

Se preservaron las 12 fotografías, las cinco familias, la ficha PDF y el acento
rojo MAZ+. La vista Slides/Grid se sustituyó por tarjetas y galerías sin framework
cliente. Las dependencias antiguas se retiraron del proyecto activo; sus fuentes
se conservaron en `legacy/`. No existe sincronización automática con Sites.

Referencia: [configuración de Astro](https://docs.astro.build/en/reference/configuration-reference/).
