const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

function loadTs(file) {
  const result = {};
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  new Function('exports', output)(result);
  return result;
}

function readHtml(file) {
  assert.ok(fs.existsSync(file), `HTML exportado: ${file}`);
  return fs.readFileSync(file, 'utf8').replace(/<!--.*?-->/gs, '');
}

function assertRouteMetadata(file, canonical) {
  const html = readHtml(file);
  assert.match(html, /<title>[^<]+<\/title>/, `Título renderizado: ${canonical}`);
  assert.match(html, /<meta name="description" content=".{50,160}"/, `Descripción SEO 50–160 caracteres: ${canonical}`);
  assert.ok(html.includes(`href="${canonical}" rel="canonical"`) || html.includes(`rel="canonical" href="${canonical}"`), `Canonical real: ${canonical}`);
  assert.ok(html.includes(`property="og:url" content="${canonical}"`), `og:url: ${canonical}`);
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), `Twitter Card: ${canonical}`);
  return html;
}

const projects = loadTs('src/data/projects.ts').PROJECTS_DATA;
const cases = loadTs('src/data/case-studies.ts').CASE_STUDIES;
const portfolio = loadTs('src/data/portfolio.config.ts');
const categories = portfolio.CATEGORIES;
const socials = portfolio.portfolioConfig.owner.socials;
const site = portfolio.portfolioConfig.owner.siteUrl.replace(/\/$/, '');
const projectWhatsApp = new URL(socials.whatsapp);
const trainingWhatsApp = new URL(socials.whatsappTraining);

assert.equal(projectWhatsApp.pathname, trainingWhatsApp.pathname, 'Mismo número de WhatsApp');
assert.equal(projectWhatsApp.pathname, '/51925475034', 'Se conserva el número actual');
assert.notEqual(projectWhatsApp.searchParams.get('text'), trainingWhatsApp.searchParams.get('text'), 'Mensajes WhatsApp distintos');
assert.match(projectWhatsApp.searchParams.get('text'), /proyecto de desarrollo/i, 'WhatsApp de desarrollo con intención de proyecto');
assert.match(trainingWhatsApp.searchParams.get('text'), /aprender|aprendizaje|taller/i, 'WhatsApp del taller con intención de aprendizaje');
assert.equal(new Set(projects.map((project) => project.id)).size, projects.length, 'IDs únicos');

const formatIds = new Set(['webapp', 'web', 'mobile', 'tools', 'templates']);
const areaIds = new Set(['edtech', 'pymes', 'ai', 'leisure', 'automation', 'culture', 'development']);
for (const project of projects) {
  assert.ok(['completed', 'in_progress'].includes(project.developmentState), `Estado explícito: ${project.id}`);
  assert.ok(['online', 'beta', 'maintenance'].includes(project.status), `Disponibilidad editorial: ${project.id}`);
  assert.ok(!project.progress || project.developmentState === 'in_progress', `Progreso coherente: ${project.id}`);
  assert.ok(categories.some((category) => category.id === project.category), `Categoría primaria visible: ${project.id}`);
  for (const id of project.categories || []) assert.ok(categories.some((category) => category.id === id), `Categoría secundaria: ${id}`);
  const projectCategories = new Set([project.category, ...(project.categories || [])]);
  assert.ok([...projectCategories].some((id) => formatIds.has(id)), `Faceta de formato: ${project.id}`);
  assert.ok([...projectCategories].some((id) => areaIds.has(id)), `Faceta de área: ${project.id}`);
  if (project.preview?.kind !== 'unavailable') {
    assert.ok(project.image && fs.existsSync(path.join('public', project.image)), `Captura existente: ${project.id}`);
  }
  assert.ok(project.evidence?.minimumCommits >= 2 && project.evidence?.codeFileCount > 0, `Código e historial: ${project.id}`);
  assert.equal(new URL(project.liveUrl).protocol, 'https:', `Demo HTTPS: ${project.id}`);

  const html = readHtml(path.join('out/proyectos', `${project.id}.html`));
  const bodyHtml = html.slice(html.indexOf('<body'), html.lastIndexOf('</body>'));
  const visibleBody = bodyHtml
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ');
  assert.ok(visibleBody.includes(project.title), `Título visible de ficha: ${project.id}`);
  assert.ok(!visibleBody.includes('Esta página no está aquí.'), `Ruta de ficha no termina en 404: ${project.id}`);
  assert.ok(html.includes(`${site}/proyectos/${project.id}`), `URL canónica de ficha: ${project.id}`);
  assert.ok(html.includes('Conversemos sobre tu proyecto.'), `Copy de contacto de ficha: ${project.id}`);
  assert.ok(html.includes('Cuéntame tu proyecto por WhatsApp'), `CTA de desarrollo: ${project.id}`);
  assert.ok(html.includes(encodeURIComponent(projectWhatsApp.searchParams.get('text'))), `WhatsApp de proyecto: ${project.id}`);
}

assert.equal(cases.length, 3, 'Tres casos destacados');
for (const study of cases) {
  assert.ok(projects.some((project) => project.id === study.projectId), `Proyecto del caso ${study.projectId}`);
  for (const field of ['problem', 'contribution', 'decision', 'outcome', 'limitation']) {
    assert.ok(study[field], `Caso completo: ${study.projectId}/${field}`);
  }
  const html = readHtml(path.join('out/proyectos', `${study.projectId}.html`));
  assert.ok(html.includes(study.title), `Caso renderizado: ${study.projectId}`);
}

const home = assertRouteMetadata('out/index.html', site);
assert.ok(home.includes('Explorar proyectos'), 'CTA principal a catálogo');
assert.ok(home.includes('href="/proyectos"'), 'Catálogo enlazado desde portada');
assert.ok(home.includes('Conocer el Taller Fénix') && home.includes('href="/taller-fenix/"'), 'Taller accesible desde portada');
assert.ok(home.includes(encodeURIComponent(trainingWhatsApp.searchParams.get('text'))), 'WhatsApp de aprendizaje enlazado en portada');
assert.ok(home.includes(encodeURIComponent(projectWhatsApp.searchParams.get('text'))), 'WhatsApp de desarrollo enlazado en portada');
assert.ok(!home.includes('Buscar por nombre o tecnología'), 'El catálogo completo vive en su propia ruta');
assert.ok(!home.includes('Disponible para nuevos proyectos'), 'No hay disponibilidad laboral no confirmada');
assert.ok(!home.includes('fonts.googleapis.com'), 'Sin descarga externa de fuentes');
assert.match(home, /<video[^>]*aria-label=/, 'Video rotulado para lector de pantalla');
assert.ok(home.includes('/images/phoenix-rising-poster.webp'), 'Poster del Fénix visible en HTML inicial');
assert.ok(!/<video[^>]*\ssrc="[^"]*phoenix-scene-[123]\.mp4/.test(home), 'No se declara MP4 antes de Play');

const catalog = assertRouteMetadata('out/proyectos.html', `${site}/proyectos`);
assert.ok(catalog.includes('Tipo de producto'), 'Faceta de tipo');
assert.ok(catalog.includes('Área de aplicación'), 'Faceta de área');
assert.ok(catalog.includes('Buscar proyectos'), 'Búsqueda disponible en catálogo');
assert.ok(catalog.includes(`${projects.length}`), 'Conteo dinámico en catálogo');
assert.ok(fs.readFileSync('src/components/ShowcaseGrid.tsx', 'utf8').includes("params.get('categoria')"), 'Compatibilidad de enlaces categoria antiguos');
assert.ok(fs.readFileSync('src/components/ShowcaseGrid.tsx', 'utf8').includes("params.get('formato')"), 'Formato serializado en URL');
assert.ok(fs.readFileSync('src/components/ShowcaseGrid.tsx', 'utf8').includes("params.get('area')"), 'Área serializada en URL');

const services = assertRouteMetadata('out/servicios.html', `${site}/servicios`);
assert.ok(services.includes('Cuéntame tu proyecto'), 'CTA de desarrollo en Servicios');
const about = assertRouteMetadata('out/sobre-mi.html', `${site}/sobre-mi`);
assert.ok(about.includes('Del proyecto al aprendizaje'), 'Evidencia de GitHub en perfil');
assert.ok(about.includes('/proyectos?area=edtech'), 'Atajo a filtro de Educación');
assert.ok(about.includes('/proyectos?formato=webapp'), 'Atajo a filtro de formato');
const contact = assertRouteMetadata('out/contacto.html', `${site}/contacto`);
assert.ok(contact.includes('mailto:xavier@cabellosalirrosas.com'), 'Correo alternativo visible');
assert.ok(contact.includes('/images/xavier-cabello.webp'), 'Retrato enlazado desde Contacto');
assert.ok(contact.includes(encodeURIComponent(projectWhatsApp.searchParams.get('text'))), 'WhatsApp de proyecto en Contacto');
assert.ok(!contact.includes('Disponible para nuevos proyectos'), 'Contacto no afirma disponibilidad no confirmada');

const routeManifest = JSON.parse(fs.readFileSync('out/manus-routes.json', 'utf8'));
const routePaths = routeManifest.routes.map((route) => route.path);
for (const route of ['/', '/proyectos', '/proyectos/:id', '/servicios', '/sobre-mi', '/contacto', '/taller-fenix/']) {
  assert.ok(routePaths.includes(route), `Ruta declarada: ${route}`);
}
for (const url of [`${site}/proyectos`, `${site}/servicios`, `${site}/sobre-mi`, `${site}/contacto`, `${site}/taller-fenix/`]) {
  assert.ok(fs.readFileSync('out/sitemap.xml', 'utf8').includes(url), `Sitemap: ${url}`);
}
assert.ok(fs.existsSync('out/robots.txt'), 'Robots exportado');

for (const variant of ['', 'webcero', 'bycoding', 'agencia']) {
  const workshopFile = path.join('out/taller-fenix', variant, 'index.html');
  assert.ok(fs.existsSync(workshopFile), `Taller exportado: ${variant || 'principal'}`);
  const workshop = fs.readFileSync(workshopFile, 'utf8');
  assert.ok(workshop.includes('/taller-fenix/assets/'), 'Recursos del taller bajo su propia ruta');
  assert.ok(!workshop.includes('src="/assets/'), 'Sin rutas de recursos rotas');
}

const notFound = readHtml('out/404.html');
assert.ok(notFound.includes('Volver al catálogo'), 'Página 404 enlaza al catálogo');
assert.ok(notFound.includes('noindex'), 'Página 404 excluida del índice');
console.log(`OK: ${projects.length} fichas, ${cases.length} casos, cinco páginas SEO, facetas combinables, WhatsApp por intención, poster sin MP4 anticipado, rutas, sitemap y Taller.`);
