const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../out');
const port = Number(process.env.PORT || 3000);
const mime = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon', '.woff2': 'font/woff2'};
if (!fs.existsSync(path.join(root, 'index.html'))) {
  console.error('Primero ejecuta npm run build para generar out/.');
  process.exit(1);
}
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Solicitud inválida'); return; }
  const absolute = path.resolve(root, `.${pathname}`);
  if (absolute !== root && !absolute.startsWith(root + path.sep)) {
    res.writeHead(403); res.end('Acceso no permitido'); return;
  }
  const candidates = [absolute, `${absolute}.html`, path.join(absolute, 'index.html')];
  const file = candidates.find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  const target = file || path.join(root, '404.html');
  res.writeHead(file ? 200 : 404, {'Content-Type': mime[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-cache'});
  if (req.method === 'HEAD') res.end(); else fs.createReadStream(target).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`Vista previa: http://127.0.0.1:${port}`));
