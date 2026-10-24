const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

function loadTs(file) {
  const result = {};
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText;
  new Function('exports', output)(result);
  return result;
}
const projects = loadTs('src/data/projects.ts').PROJECTS_DATA;
const cases = loadTs('src/data/case-studies.ts').CASE_STUDIES;
const categories = loadTs('src/data/portfolio.config.ts').CATEGORIES;
assert.equal(new Set(projects.map(p => p.id)).size, projects.length, 'IDs únicos');
for (const p of projects) {
  assert.ok(['completed', 'in_progress'].includes(p.developmentState), `Estado explícito: ${p.id}`);
  assert.ok(['online', 'beta', 'maintenance'].includes(p.status), `Disponibilidad: ${p.id}`);
  assert.ok(!p.progress || p.developmentState === 'in_progress', `Progreso coherente: ${p.id}`);
  assert.ok(categories.some(c => c.id === p.category), `Categoría visible: ${p.id}`);
  for (const id of p.categories || []) assert.ok(categories.some(c => c.id === id), `Categoría secundaria: ${id}`);
  if (p.preview?.kind !== 'unavailable') assert.ok(p.image && fs.existsSync(path.join('public', p.image)), `Captura existente: ${p.id}`);
  assert.ok(p.evidence?.minimumCommits >= 2 && p.evidence?.codeFileCount > 0, `Código e historial: ${p.id}`);
  assert.equal(new URL(p.liveUrl).protocol, 'https:', `Demo HTTPS: ${p.id}`);
  const htmlFile = path.join('out/proyectos', `${p.id}.html`);
  assert.ok(fs.existsSync(htmlFile), `Ficha exportada: ${p.id}`);
  const html = fs.readFileSync(htmlFile, 'utf8');
  assert.ok(html.includes(`https://xavier.cabellosalirrosas.com/proyectos/${p.id}`), `URL canónica: ${p.id}`);
  assert.ok(html.includes('Conversemos sobre tu proyecto.'), `Contacto en ficha: ${p.id}`);
}
assert.equal(cases.length, 3, 'Tres casos destacados');
for (const study of cases) {
  assert.ok(projects.some(p => p.id === study.projectId), 'Proyecto del caso existente');
  for (const field of ['problem', 'contribution', 'decision', 'outcome', 'limitation']) assert.ok(study[field], `Caso completo: ${field}`);
  assert.ok(fs.readFileSync(path.join('out/proyectos', `${study.projectId}.html`), 'utf8').includes(study.title), `Caso renderizado: ${study.projectId}`);
}
const home = fs.readFileSync('out/index.html', 'utf8').replace(/<!--.*?-->/g, '');
const ids = ['inicio', 'destacados', 'formacion', 'actividad', 'servicios', 'sobre-mi', 'catalogo', 'contacto'];
const positions = ids.map(id => home.indexOf(`id="${id}"`));
assert.ok(positions.every((pos, i) => pos >= 0 && (i === 0 || pos > positions[i-1])), 'Ocho secciones en orden');
assert.ok(home.includes(`${projects.length} proyectos en el catálogo`), 'Conteo dinámico');
assert.ok(!home.includes('100% Despliegues Verificados'), 'Sin uptime o verificación inventada');
assert.ok(!home.includes('fonts.googleapis.com'), 'Sin descarga externa de fuentes');
assert.ok(home.includes('mailto:xavier@cabellosalirrosas.com'), 'Contacto visible');
assert.ok(home.includes('https://wa.me/51925475034'), 'Contacto por WhatsApp');
assert.ok(home.includes('/images/xavier-cabello.webp'), 'Retrato del autor');
assert.ok(home.includes('href="/taller-fenix/"'), 'Enlace al taller local');
for (const variant of ['', 'webcero', 'bycoding', 'agencia']) {
  const workshopFile = path.join('out/taller-fenix', variant, 'index.html');
  assert.ok(fs.existsSync(workshopFile), `Taller exportado: ${variant || 'principal'}`);
  const workshop = fs.readFileSync(workshopFile, 'utf8');
  assert.ok(workshop.includes('/taller-fenix/assets/'), 'Recursos del taller bajo su propia ruta');
  assert.ok(!workshop.includes('src="/assets/'), 'Sin rutas de recursos rotas');
}
assert.ok(fs.existsSync('out/404.html'), 'Página 404 exportada');
console.log(`OK: ${projects.length} fichas, ${cases.length} casos, ocho secciones, categorías, estados, imágenes, metadatos y contacto.`);

