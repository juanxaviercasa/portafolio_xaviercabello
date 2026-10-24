const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../src/data/projects.ts');
let content = fs.readFileSync(file, 'utf8');

const regex = /("id":\s*"([^"]+)"[\s\S]*?"image":\s*)"[^"]+"/g;
content = content.replace(regex, '$1"/projects/$2.png"');

fs.writeFileSync(file, content, 'utf8');
console.log('Todas las imágenes actualizadas a capturas de pantalla reales en /projects/<id>.png');
