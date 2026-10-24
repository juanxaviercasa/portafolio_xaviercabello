const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'og_template.html');
const dest = path.resolve(__dirname, '../public/og-image.png');

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body {
      width: 1200px;
      height: 630px;
      background-color: #08090a;
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px);
      background-size: 28px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 64px 72px;
      color: #f7f8f8;
      position: relative;
      overflow: hidden;
    }
    .glow {
      position: absolute;
      top: -100px;
      right: -100px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%);
      pointer-events: none;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      border-radius: 9999px;
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-family: monospace;
      width: fit-content;
    }
    h1 {
      font-size: 52px;
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.025em;
      margin-top: 24px;
      max-width: 980px;
      color: #ffffff;
    }
    h1 span {
      color: #34d399;
    }
    p {
      font-size: 22px;
      color: #94a3b8;
      margin-top: 18px;
      line-height: 1.45;
      max-width: 900px;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 28px;
    }
    .author {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .avatar {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      border: 2px solid rgba(16, 185, 129, 0.4);
      background: #141518;
    }
    .author-name {
      font-size: 20px;
      font-weight: 700;
      color: #f7f8f8;
    }
    .author-role {
      font-size: 14px;
      color: #94a3b8;
    }
    .stats {
      display: flex;
      gap: 24px;
    }
    .stat-pill {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 10px 18px;
      text-align: right;
    }
    .stat-val {
      font-size: 20px;
      font-weight: 700;
      font-family: monospace;
      color: #34d399;
    }
    .stat-lbl {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="glow"></div>

  <div>
    <div class="badge">● Portafolio Docente · Taller Fénix</div>
    <h1>18 Proyectos Web Reales Creados con <span>IA</span> y Publicados a <span>$0/mes</span></h1>
    <p>Aprende cómo construir aplicaciones web funcionales con Vibe Coding e instrucciones en español, sin programar y desplegadas en la nube.</p>
  </div>

  <div class="footer">
    <div class="author">
      <img class="avatar" src="https://github.com/juanxaviercasa.png" alt="Juan Xavier Cabello" />
      <div>
        <div class="author-name">Juan Xavier Cabello</div>
        <div class="author-role">Profesor de matemáticas y desarrollador web</div>
      </div>
    </div>

    <div class="stats">
      <div class="stat-pill">
        <div class="stat-val">18 Apps</div>
        <div class="stat-lbl">En Producción</div>
      </div>
      <div class="stat-pill">
        <div class="stat-val">$0/mes</div>
        <div class="stat-lbl">Cloud Hosting</div>
      </div>
      <div class="stat-pill">
        <div class="stat-val">Next.js + Astro</div>
        <div class="stat-lbl">Stack Moderno</div>
      </div>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(htmlFile, htmlContent, 'utf8');

try {
  execFileSync(CHROME_PATH, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1200,630',
    `--screenshot=${dest}`,
    `file://${htmlFile}`
  ], { timeout: 15000, stdio: 'pipe' });

  if (fs.existsSync(dest)) {
    const kb = Math.round(fs.statSync(dest).size / 1024);
    console.log(`OpenGraph image generada con éxito: public/og-image.png (${kb} KB)`);
  }
} catch (err) {
  console.error('Error generando OG image:', err.message);
} finally {
  fs.unlinkSync(htmlFile);
}
