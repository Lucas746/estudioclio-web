# Estudio Clio · Sitio web

Next.js + Tailwind, exportado como sitio estático y publicado en Cloudflare.

- **Textos y datos:** `src/content.ts`
- **Secciones:** `src/components/`
- **Imágenes:** `public/` (portada, `obra/`, `partidas/`)
- **SEO:** metadatos en `src/app/layout.tsx` y en cada página; `sitemap.ts` y `robots.ts`

Páginas: `/`, `/arquitecto-hudson` (anuncios) y `/pueblos-del-plata`.

## Publicación en Cloudflare
- Comando de compilación: `npm run build`
- Comando de publicación (Workers): `npx wrangler deploy`
- Carpeta de salida (Pages): `out`
