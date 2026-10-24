const fs = require('node:fs');
const path = require('node:path');

// Import a compiled copy without modifying the independent workshop checkout.
const source = path.resolve(process.argv[2] || path.join(__dirname, '../../taller_web_cero/dist'));
const target = path.resolve(__dirname, '../public/taller-fenix');
const prefix = `${process.env.NEXT_PUBLIC_BASE_PATH || process.env.basePath || ''}/taller-fenix`;
if (!fs.existsSync(path.join(source, 'index.html'))) {
  throw new Error('No existe dist/index.html del taller. Compila taller_web_cero antes de importarlo.');
}
fs.mkdirSync(target, {recursive: true});
fs.cpSync(source, target, {recursive: true});

function relocate(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { relocate(file); continue; }
    if (!/\.(html|js|css)$/.test(entry.name)) continue;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/(["'`(=])\/assets\//g, `$1${prefix}/assets/`);
    content = content.replace(/(["'])\/(favicon|icons)\.svg/g, `$1${prefix}/$2.svg`);
    // Preserve the workshop's three standalone landing variants when mounted here.
    content = content.replace(/(["'`])\/(webcero|bycoding|agencia)\1/g, (_, quote, slug) => `${quote}${prefix}/${slug}${quote}`);
    fs.writeFileSync(file, content);
  }
}
relocate(target);
const html = fs.readFileSync(path.join(target, 'index.html'), 'utf8');
for (const variant of ['webcero', 'bycoding', 'agencia']) {
  const dir = path.join(target, variant);
  fs.mkdirSync(dir, {recursive: true});
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
console.log(`Taller importado desde ${source} en ${prefix}/ (incluye sus tres variantes).`);
