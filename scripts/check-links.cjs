const fs = require('node:fs');
const ts = require('typescript');

function loadProjects() {
  const source = fs.readFileSync('src/data/projects.ts', 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  new Function('exports', output)(exports);
  return exports.PROJECTS_DATA;
}

const projects = loadProjects();
const urls = [...new Map(projects.map((project) => [project.liveUrl, project])).values()];
const timeoutMs = 10_000;
const concurrency = 5;
const userAgent = 'XavierCabelloPortfolioLinkCheck/1.0 (+https://xavier.cabellosalirrosas.com)';

async function request(url, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      method,
      redirect: 'follow',
      headers: {
        'user-agent': userAgent,
        ...(method === 'GET' ? { range: 'bytes=0-0' } : {}),
      },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function inspect(project) {
  let response;
  try {
    response = await request(project.liveUrl, 'HEAD');
    if ([405, 501].includes(response.status)) response = await request(project.liveUrl, 'GET');

    const code = response.status;
    const unknown = [401, 403, 407, 429].includes(code);
    return {
      project: project.title,
      url: project.liveUrl,
      status: code,
      result: unknown ? 'indeterminado' : code < 400 ? 'ok' : 'revisar',
    };
  } catch (error) {
    return {
      project: project.title,
      url: project.liveUrl,
      status: null,
      result: 'indeterminado',
      note: error?.name === 'AbortError' ? `timeout ${timeoutMs} ms` : String(error?.cause?.code || error?.message || error),
    };
  }
}

async function main() {
  const results = [];
  for (let index = 0; index < urls.length; index += concurrency) {
    const batch = urls.slice(index, index + concurrency);
    results.push(...(await Promise.all(batch.map((project) => inspect(project)))));
  }

  const counts = results.reduce(
    (total, item) => ({ ...total, [item.result]: total[item.result] + 1 }),
    { ok: 0, revisar: 0, indeterminado: 0 },
  );
  const lines = [
    '## Revisión mensual de demos',
    '',
    `Consultadas: ${results.length} · Correctas: ${counts.ok} · Revisar: ${counts.revisar} · Indeterminadas: ${counts.indeterminado}`,
    '',
    '| Estado | Proyecto | HTTP | URL | Nota |',
    '|---|---|---:|---|---|',
    ...results.map((item) =>
      `| ${item.result} | ${item.project.replaceAll('|', '\\|')} | ${item.status ?? '—'} | ${item.url} | ${item.note || ''} |`,
    ),
    '',
    'Un 401/403/407/429 o un timeout es indeterminado: puede deberse a controles de acceso, rate limiting o disponibilidad temporal. Este informe no mide uptime ni verifica el contenido de una demo.',
  ];
  const report = lines.join('\n');
  console.log(report);
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${report}\n`);
  }
  // Los destinos de terceros no bloquean la build ni producen alertas automáticas.
}

main().catch((error) => {
  console.error('No se pudo cargar el catálogo para revisar enlaces.', error);
  process.exitCode = 1;
});
