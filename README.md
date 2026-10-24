## Estado actual · 23 de octubre de 2026

La vitrina muestra 23 proyectos con código, historial comprobado y captura real de su sitio publicado. Incluye Sólidos Geométricos y la nueva versión de Hazlo Crecer del commit 454277a. Los proyectos sin demo verificable y Mejor Versión quedan fuera del catálogo y de las rutas públicas.

La identidad conserva el fénix con fondos luminosos en lavanda y azul y acentos púrpura y naranja. El tema luminoso evita recuperar una preferencia oscura antigua del navegador. No se añaden ilustraciones generadas para representar proyectos.

Las capturas activas están en public/projects/captures/. Su procedencia y las visitas históricas están en docs/capturas-verificadas.json; ese archivo conserva también registros anteriores que ya no forman parte de la vitrina. Las fechas documentan una visita, no garantizan disponibilidad continua ni certifican resultados comerciales.

npm run capture:screenshots guarda capturas nuevas en artifacts/site-captures para revisión, sin sobrescribir las publicadas. Requiere Playwright: puede indicarse una carpeta de módulos existente con PORTFOLIO_CAPTURE_MODULES y el ejecutable de Chrome con PORTFOLIO_CHROME. Los temporales y las referencias exclusivamente locales no se versionan.

---
# Xavier Cabello · Portafolio profesional

Portafolio en español con Next.js 14, TypeScript y Tailwind CSS. Exportación estática para el alojamiento existente en Cloudflare Pages; no necesita backend para navegar ni filtrar proyectos.

## Estructura

1. Presentación y acceso a contacto.
2. Tres proyectos destacados con casos de estudio.
3. Servicios: educación, aplicaciones web y presencia digital.
4. Sobre Xavier y proceso de trabajo.
5. Catálogo completo con búsqueda, categorías, estados, tarjetas y directorio.
6. Formación: Taller Fénix.
7. Contacto por correo, GitHub y LinkedIn.

## Desarrollo y verificación

- `npm install`
- `npm run dev`: servidor de desarrollo.
- `npm run build`: genera `out/` sin descargar fuentes externas.
- `npm run check:portfolio`: comprueba datos, estados, referencias, imágenes y salida estática después del build.
- `npm start`: vista previa estática de `out/` en http://127.0.0.1:3000.

El servidor de desarrollo usa `.next-dev/` y la compilación de producción `.next/` para evitar que una compilación sobrescriba la caché de una sesión de desarrollo abierta.

## Contenido

- `src/data/portfolio.config.ts`: identidad, contacto, categorías y tamaño de página.
- `src/data/projects.ts`: catálogo. Los conteos de la interfaz se derivan de estos datos.
- `src/data/case-studies.ts`: casos destacados, aportación, decisiones y limitaciones.
- `src/components/PortfolioSections.tsx`: las secciones de presentación, servicios, trayectoria, formación y contacto.
- `src/app/globals.css`: sistema visual y ajustes responsive.

Cada proyecto requiere `developmentState: 'completed' | 'in_progress'`, independiente de `status: 'online' | 'beta' | 'maintenance'`. La migración inicial conserva la clasificación del catálogo anterior: los proyectos con progreso quedan en desarrollo y los demás en versión publicada. Revisa este dato editorial al actualizar cada proyecto; no equivale a verificar su calidad o disponibilidad.

Añade categorías usadas al arreglo `CATEGORIES`. Las categorías sin proyectos se ocultan automáticamente. `progress` sirve para documentar una etapa; no se muestra como una métrica de calidad. Los estados son datos editoriales, no monitorización de uptime.

La búsqueda ignora tildes y mayúsculas. La URL conserva `q`, `categoria`, `estado` y `vista`; puedes compartir una colección filtrada. El catálogo comienza con seis proyectos y permite cargar los demás. La vista de directorio muestra todos los resultados.

Los archivos WebP son derivados de las capturas PNG originales, que se conservan. Los SVG son ilustraciones de proyecto, no capturas; reemplázalos por capturas reales cuando estén disponibles. La imagen social general está en `public/og-image.png`.

## Contacto y publicación

Los botones de proyectos abren WhatsApp al +51 925 475 034 con un mensaje preparado. No se envía automáticamente. El correo permanece visible como alternativa.

La foto de portada y de la sección Sobre mí es una copia WebP optimizada de `taller_web_cero/Xavier Cabello.jpeg`; el original no se modifica.

El botón de formación abre `/taller-fenix/`: una copia compilada del proyecto vecino `taller_web_cero`, con sus recursos y tres variantes A/B bajo la misma ruta. No requiere mantener un segundo servidor local abierto. Para actualizarla, compila primero el taller en su propio repositorio y ejecuta `npm run import:workshop` aquí antes de `npm run build`. El importador solo escribe en este portafolio; no modifica el proyecto de origen. Puedes indicar otra carpeta dist: `node scripts/import-workshop.cjs C:/ruta/al/dist`.

La dirección pública del taller está pendiente. Se propone `https://fenix.cabellosalirrosas.com` para mantenerlo como proyecto independiente. `https://cabellosalirrosas.com/taller-fenix` también es posible, pero requiere desplegar o enrutar el taller en el sitio raíz de ese dominio; no queda activada por estos cambios locales.

La exportación puede servirse desde `out/` en Cloudflare Pages. `next.config.mjs` conserva soporte de `basePath` para GitHub Pages. Las pruebas locales no verifican la disponibilidad de todos los enlaces externos, la entrega del correo ni los resultados comerciales de los proyectos.

Antes de publicar, revisa el copy y el alcance de los casos de estudio con la persona autora. No se añaden testimonios, clientes, métricas de impacto ni disponibilidad laboral sin confirmación factual.

