# MARGEN/

Sitio web de MARGEN, publicación independiente de cultura, ideas, música, cine, libros, play y tecnología.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Tipografías [Fraunces](https://fonts.google.com/specimen/Fraunces) (titulares) e [Inter](https://fonts.google.com/specimen/Inter) (interfaz y texto), servidas con `next/font`

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # linter
```

## Estructura

```
src/
  app/            rutas (home, categorías, artículos, páginas institucionales)
  components/     componentes de UI reutilizables
  data/           contenido del sitio (categorías, artículos, "The Margen List")
  lib/            utilidades y configuración de fuentes
  types/          tipos compartidos
```

Las categorías (`/musica`, `/cine`, `/libros`, `/ideas`, `/cultura`, `/play`, `/tech`) y los artículos (`/articulo/[slug]`) se generan dinámicamente a partir de `src/data/content.ts`. Para agregar o editar contenido basta con modificar ese archivo.

## Imágenes

Las portadas de artículos usan un sistema de arte generativo (`src/components/editorial-art.tsx`) en vez de fotografías, como placeholder visual mientras se define la fotografía definitiva del sitio. Cuando haya material propio, lo natural es reemplazar ese componente por `next/image` apuntando a los archivos finales en `public/`.

## Contenido

Los textos de artículos, autores y datos de contacto son contenido de ejemplo para mostrar el diseño con información real de por medio. Deben reemplazarse por el contenido definitivo antes de publicar el sitio.
