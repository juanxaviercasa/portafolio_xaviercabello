# Portafolio de Xavier Cabello

Portafolio en español construido con Next.js, React y TypeScript. Se exporta como sitio estático; no necesita backend para recorrer los casos ni combinar filtros. Mantiene los colores lavanda, índigo y ámbar de Fénix 357, la marca gráfica existente y capturas reales de proyectos.

## Arquitectura de navegación

| Ruta | Propósito |
| --- | --- |
| `/` | Presentación, proyectos destacados, Taller Fénix y accesos por intención. |
| `/proyectos` | Catálogo filtrable por **tipo de producto** y **área de aplicación**, con búsqueda y vista de lista/tarjetas. |
| `/proyectos/:id` | Ficha de caso, evidencia, alcance y CTA de desarrollo. |
| `/servicios` | Oferta para negocios y equipos, con CTA de proyecto. |
| `/sobre-mi` | Perfil, método y evidencia seleccionada de repositorios. |
| `/contacto` | Consulta de proyecto por WhatsApp y correo. |
| `/taller-fenix/` | Micrositio estático de formación, importado del repositorio del taller. |

El catálogo usa los parámetros `formato`, `area`, `q` y `vista`, por lo que se pueden compartir colecciones combinadas. Los enlaces antiguos que usan `categoria` se leen y se traducen a la faceta correspondiente. La página inicial no contiene el catálogo completo: sirve como índice y presenta accesos directos a las áreas.

## Desarrollo y controles

Usa Node.js 20.9+; el workflow de CI se ejecuta con Node.js 22.

```sh
npm ci
npm run dev
npm run lint
npm audit
npm run build
npm run check:portfolio
npm run start
```

`npm run build` genera `out/` sin descargar fuentes externas; el verificador `check:portfolio` se ejecuta después del build y valida rutas, metadatos, datos, CTA, inventario de facetas, recursos estáticos y carga voluntaria del video. `npm audit` forma parte del control de CI. `npm run check:links` consulta hasta cinco demos a la vez con timeouts; 401, 403, 429, errores de red o interrupciones se registran como indeterminados y no bloquean el build.

El workflow `Revisión mensual de enlaces de demos` ejecuta esa comprobación desde GitHub Actions el día 1 de cada mes o manualmente. El reporte se incluye en el resumen del workflow; no afirma uptime ni valida el contenido de las páginas de terceros.

## Contenido y recursos

`src/data/portfolio.config.ts` declara identidad, categorías y contacto; `src/data/project-facets.ts` distribuye las categorías entre formato y área; `src/data/projects.ts` contiene el catálogo y `src/data/case-studies.ts`, los casos destacados. Cada proyecto debe tener al menos una faceta de formato y otra de área. Los estados son editoriales, no monitorización en tiempo real.

`src/app` define las rutas, `src/lib/page-metadata.ts` genera metadatos propios por página y `src/app/sitemap.ts` conserva fechas fijas y verificables para las rutas de contenido compartido; las fichas omiten `lastModified` si no se conoce cuándo se actualizó su contenido. `public/manus-routes.json` registra las rutas de Next y del micrositio independiente.

Las capturas activas están en `public/projects/captures/`; sus fuentes y fechas de visita están en `docs/capturas-verificadas.json`. Una captura documenta una consulta y no garantiza que el sitio siga disponible. No se atribuyen resultados comerciales ni disponibilidad laboral no confirmados.

`public/taller-fenix/` contiene una exportación del proyecto vecino `taller_web_cero` y sus variantes. Para actualizarla, compila el taller en su propio repositorio y luego ejecuta `npm run import:workshop` antes de `npm run build`. El importador escribe únicamente en este repositorio. No modifica el proyecto de origen.

## Publicación en Cloudflare Pages

Cloudflare Pages es el único destino de producción elegido. La compilación produce `out/` con `basePath` vacío; el nombre previsto del proyecto Pages es `portafolio-xaviercabello` y la rama prevista es `main`. La auditoría de solo lectura del 13 nov. 2026 no encontró ese Pages project ni la zona `cabellosalirrosas.com` en la cuenta Cloudflare conectada; por tanto, el proyecto aún debe crearse y el dominio/custom domain debe resolverse antes de publicar. El sitio productivo actual no se modificó. El workflow verifica las pull requests y, al llegar un cambio a `main`, publica `out/` con Wrangler solo si están configurados los secretos de Actions `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID`; si falta alguno, el despliegue se omite. El token debe tener permisos de despliegue de Cloudflare Pages; no se guarda en Git.

Para evitar compilaciones duplicadas, usa este workflow de GitHub como mecanismo de publicación y desactiva el auto-deploy de un eventual vínculo Git independiente que tenga el proyecto Pages. El comando local `npm run deploy:pages` publica en la rama reconocida por Wrangler y requiere una sesión Cloudflare válida. GitHub Pages queda desactivado.

El lanzamiento productivo queda sujeto a confirmación final, creación del Pages project y definición de cómo asociar `xavier.cabellosalirrosas.com` sin interrumpir el sitio actual.
