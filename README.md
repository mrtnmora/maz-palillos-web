# MAZ+ Palillos de madera

Sitio de catálogo en React, TypeScript y Vinext. Incluye 12 fotografías reales,
vistas Slides/Grid, ficha técnica PDF y sección de contacto pendiente de datos.

## Desarrollo en Windows

Requisitos: Node.js 24 LTS, npm (incluido), Git y Visual Studio Code.
Desde la carpeta que contiene package.json:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abre la dirección Local que indique la terminal. Para detener: Ctrl+C.

## Validar compilación

```powershell
npm.cmd run build
```

## Archivos principales

- app/page.tsx: textos, productos y contacto.
- app/globals.css: diseño y colores.
- public/products/: fotos.
- public/palo-elotero.pdf: ficha técnica.

## Subir al repositorio vacío

Desde esta carpeta:

```powershell
git init -b main
git add .
git commit -m "Initial MAZ website"
git remote add origin https://github.com/mrtnmora/maz-palillos-web.git
git push -u origin main
```

Si Git pide identidad, configura user.name y user.email con tus datos antes del commit.
Si el repositorio remoto contiene archivos, no fuerces el push: integra primero ese historial.

## Seguimiento

Usar ramas por cambio, por ejemplo feature/contacto, y pull requests hacia main.
Los pendientes iniciales están en docs/PENDIENTES.md.

## Alcance de esta exportación

Parte del código publicado en Sites (commit 5847446475b8873d6d2c156970a073b068755708).
Los comandos de desarrollo y compilación fueron adaptados para no depender de Bash
ni de la infraestructura privada de Sites. No incluye node_modules, credenciales,
configuración privada de hospedaje ni el historial Git anterior: inicia una base nueva.
No modifica ni se sincroniza automáticamente con el sitio alojado en Sites.
La conexión de despliegue a Cloudflare se configura en una etapa posterior.
Los datos de contacto deben confirmarse antes de publicar para clientes.
