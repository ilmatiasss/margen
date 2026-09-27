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

Todos los artículos y los ítems de The Margen List usan fotografía real en `public/images/` (créditos en `PHOTO_CREDITS.md`). Si se agrega contenido nuevo sin foto todavía, `src/components/media-frame.tsx` muestra automáticamente un arte generativo (`src/components/editorial-art.tsx`) como respaldo hasta que se le asigne una imagen definitiva vía el campo `image` en `content.ts`.

## Contenido

Los textos de artículos, autores y datos de contacto son contenido de ejemplo para mostrar el diseño con información real de por medio. Deben reemplazarse por el contenido definitivo antes de publicar el sitio.
