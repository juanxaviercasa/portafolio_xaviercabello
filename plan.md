# Plan de mejora del portafolio

## Objetivo y límites
Convertir la portada extensa en una entrada breve con navegación por páginas, un catálogo categorizado y CTA de contacto según intención. Conservar las fichas verificadas y la exportación estática; Cloudflare Pages es el único destino de producción elegido. No añadir backend, base de datos, registros de disponibilidad ni métricas comerciales nuevas.

## Dirección visual

- **Movimiento:** brutalismo editorial suave de portafolio técnico, combinado con la identidad luminosa violeta y ámbar de Fénix 357.
- **Principios:** jerarquía legible antes que decoración; pruebas visuales reales en vez de adornos genéricos; rutas cortas y navegación predecible; controles accesibles en móvil y teclado.
- **Color:** lavanda e índigo comunican aprendizaje y profundidad; blanco cálido conserva respiración; naranja/ámbar identifica acción y energía del Fénix. Los estados neutros no simulan disponibilidad laboral.
- **Estructura:** portada compacta como índice editorial; páginas de proyecto, servicios, perfil y contacto independientes. El catálogo empieza por búsqueda y dos facetas paralelas —tipo de producto y área de aplicación—, que se pueden combinar. En móvil los grupos se envuelven en varias líneas, sin una tira horizontal que obligue a desplazarse lateralmente.
- **Elementos distintivos:** emblema existente del Fénix; degradado tipográfico naranja-violeta solo en frases clave; capturas reales como miniaturas de producto.
- **Interacción y movimiento:** enlaces de navegación persistentes, rutas copiables, filtros sincronizados con la URL y tamaños táctiles cómodos. El hero comienza en poster estático y solo reproduce video tras Play; controles independientes de play/pausa y sonido; respetar movimiento reducido y pausar fuera de pantalla.
- **Tipografía:** mantener el sistema sans del sitio (`Inter` con fallbacks del sistema), titulares pesados y compactos, etiquetas mono pequeñas para metadatos. No descargar fuentes externas.
- **Esencia de marca:** “Matemática, educación e IA convertidas en productos que se pueden explorar”; personalidad didáctica, experimental y rigurosa.
- **Voz:** directa y concreta, centrada en lo que la persona quiere construir o aprender. Ejemplos: “¿Qué te gustaría hacer?” y “Cuéntame qué problema necesitas resolver”.
- **Logotipo y color propio:** conservar el emblema Fénix 357 ya aprobado en los assets del repositorio; el naranja brasa `#f97316` es el color de acción reconocible.

## Arquitectura e implementación

- `src/app/page.tsx`: propuesta, métricas, casos destacados y puertas de entrada a las áreas principales.
- `src/app/proyectos/page.tsx`: búsqueda y catálogo completo con filtros independientes de formato y área.
- `src/app/proyectos/[id]/page.tsx`: fichas actuales, breadcrumbs, estudio del caso y contacto por proyecto.
- `src/app/servicios/page.tsx`, `src/app/sobre-mi/page.tsx` y `src/app/contacto/page.tsx`: páginas dedicadas que reutilizan el contenido y los componentes existentes.
- `src/app/globals.css`, `src/components/Header.tsx`, `src/components/FilterBar.tsx`, `src/components/ShowcaseGrid.tsx`, `src/components/Phoenix3DScene.tsx`: sistema visual, menú responsive, facetas y reproductor accesible.
- `src/data/portfolio.config.ts`, `src/data/project-facets.ts`, `src/data/projects.ts`, `src/types/project.ts`: identidad, categorías, contactos y tipos del catálogo.
- `src/lib/page-metadata.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`: metadata propia por ruta, sitemap y crawling.
- `public/taller-fenix/`: micrositio estático importado; queda accesible en su URL original y no se reescribe como página Next.
- `.github/workflows/`, `scripts/`, `wrangler.toml`: controles de calidad, verificación periódica de enlaces y despliegue de Pages.
- `public/manus-routes.json`: inventario de rutas públicas, sincronizado con Next y el Taller estático.

La salida es `out/`, `next.config.mjs` mantiene `basePath` vacío en CI/Cloudflare salvo declaración explícita, y Wrangler apunta al proyecto Pages previsto `portafolio-xaviercabello`. La CI no debe publicar GitHub Pages. Si el despliegue automatizado de Cloudflare requiere secretos de Actions, solo se referencian como `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID`; nunca se guardan en el repositorio. La migración de Next/React/Wrangler/ESLint se acepta solo si permanece compatible con la exportación y supera las verificaciones del proyecto.

La revisión de solo lectura del 13 nov. 2026 no encontró un proyecto Pages con ese nombre entre los 30 proyectos de la cuenta Cloudflare conectada ni la zona `cabellosalirrosas.com`. El dominio de producción responde actualmente a través de Cloudflare, pero no se cambiará. Antes de producción habrá que crear el Pages project y confirmar cómo asociar el subdominio; también se requiere que las credenciales de Actions estén configuradas. La lista de secrets de GitHub no pudo consultarse con la autorización disponible (403), por lo que el workflow informa y omite el despliegue si faltan. La publicación queda pendiente de confirmación final del usuario.
