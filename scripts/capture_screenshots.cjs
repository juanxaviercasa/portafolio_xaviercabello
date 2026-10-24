/** Capture only verified public demos. New images go to artifacts for review, never over published assets. */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const modules = process.env.PORTFOLIO_CAPTURE_MODULES;
let chromium;
try { ({chromium} = require(modules ? path.join(modules, 'playwright') : 'playwright')); }
catch { throw new Error('Playwright no está disponible. Configura PORTFOLIO_CAPTURE_MODULES con la carpeta de módulos de automatización.'); }
const root = path.resolve(__dirname, '..');
const exportsData = {};
new Function('exports', ts.transpileModule(fs.readFileSync(path.join(root, 'src/data/projects.ts'), 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText)(exportsData);
const ids = process.argv.slice(2);
const projects = exportsData.PROJECTS_DATA.filter(p => p.preview?.kind === 'live' && (!ids.length || ids.includes(p.id)));
const receipts = JSON.parse(fs.readFileSync(path.join(root, 'docs/capturas-verificadas.json'), 'utf8')).receipts;
const output = path.join(root, 'artifacts', 'site-captures', new Date().toISOString().replace(/[:.]/g, '-'));
fs.mkdirSync(output, {recursive: true});
(async () => {
  const executablePath = process.env.PORTFOLIO_CHROME || (process.platform === 'win32' ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : undefined);
  const browser = await chromium.launch({headless: true, ...(executablePath ? {executablePath} : {})});
  const report = [];
  try {
    for (const project of projects) {
      const context = await browser.newContext({viewport: {width: 1440, height: 1000}, deviceScaleFactor: 1, reducedMotion: 'reduce'});
      const page = await context.newPage();
      const result = {id: project.id, requestedUrl: project.liveUrl, capturedAt: new Date().toISOString()};
      try {
        const response = await page.goto(project.liveUrl, {waitUntil: 'domcontentloaded', timeout: 30000});
        if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status()}`);
        await page.waitForLoadState('networkidle', {timeout: 7000}).catch(() => {});
        await page.evaluate(() => document.fonts.ready);
        result.finalUrl = page.url(); result.title = await page.title();
        const expected = receipts.find(r => r.id === project.id)?.title;
        if (new URL(result.finalUrl).hostname !== new URL(project.liveUrl).hostname) throw new Error('El sitio redirige a otro dominio; requiere revisión.');
        if (expected && result.title !== expected) throw new Error('El título cambió; verifica que siga siendo el mismo proyecto.');
        const essential = page.getByRole('button', {name: 'Solo esenciales', exact: true});
        if (await essential.count() && await essential.first().isVisible()) await essential.first().click();
        const understood = page.getByRole('button', {name: 'Entendido', exact: true});
        if (project.id === 'herramientas-pymes' && await understood.count() && await understood.first().isVisible()) await understood.first().click();
        if (project.id === 'transformaciones-geometricas') {
          const square = page.getByRole('button', {name: /Cuadrado.*4 ejes/});
          if (await square.count()) { await square.first().click(); await page.evaluate(() => window.scrollTo(0, 0)); }
        }
        await page.waitForTimeout(1000);
        result.file = project.id + '.png';
        await page.screenshot({path: path.join(output, result.file), animations: 'disabled'});
        result.text = (await page.locator('body').innerText()).slice(0, 4000);
      } catch (error) { result.error = error.message; }
      finally { report.push(result); await context.close(); }
      console.log(`${project.id}: ${result.error || 'captura guardada para revisión'}`);
    }
  } finally { await browser.close(); fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify(report, null, 2)); }
  console.log(`Revisión visual pendiente: ${output}`);
})();
