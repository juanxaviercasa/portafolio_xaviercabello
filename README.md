# Portafolio Showcase & Directorio Web (40+ Proyectos)

> **Arquitectura de Alto Impacto para Exhibición de Sitios Web Desplegados en Subdominios Independientes.**  
> Diseñado para Xavier Cabello combinando las mejores prácticas de 7 proyectos líderes de código abierto.

---

## 🏛️ Síntesis Arquitectónica de los Repositorios de Referencia

| Repositorio Referencia | Característica Extraída e Implementada | Archivo en este Proyecto |
| :--- | :--- | :--- |
| **A. `timlrx/tailwind-nextjs-starter-blog`** | Proporción visual 16:9 (`aspect-video`), layout de tarjetas, espaciado limpio y tipografía de alto contraste. | `src/components/ProjectCard.tsx` |
| **B. `codewithsadee/vcard-personal-portfolio`** | Sistema de filtrado reactivo por categorías con badge de conteo y transiciones fluidas de pestaña activa. | `src/components/FilterBar.tsx` |
| **C. `bchiang7/v4` (Brittany Chiang)** | Separación estricta entre datos y vistas + Vista alternativa de Directorio/Tabla de archivo para 40+ proyectos. | `src/components/ProjectDirectoryTable.tsx` |
| **D. `chronark/chronark.com`** | Microinteracciones modernas: efecto Spotlight radial con seguimiento de cursor del mouse y estética dark minimalista. | `src/components/ui/SpotlightCard.tsx` |
| **E. `rammcodes/Dopefolio`** | Enfoque 100% orientado a proyectos: botones directos "Visitar Sitio ↗" sin rodeos biográficos ni fricción. | `src/components/ProjectCard.tsx` |
| **F. `steven-tey/precedent`** | Modal de inspección rápida con vista previa de capturas en alta resolución y sandbox interactivo embebible. | `src/components/ProjectPreviewModal.tsx` |
| **G. `arifszn/gitprofile`** | Archivo de configuración centralizado (`portfolio.config.ts`) y esquema de datos único (`projects.ts`). | `src/data/portfolio.config.ts`, `projects.ts` |

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18.x o superior (Probado en Node.js v24)
- npm, pnpm o bun

### Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en entorno de desarrollo local
npm run dev

# 3. Abrir en tu navegador
# http://localhost:3000
```

### Compilación para Producción

```bash
npm run build
npm run start
```

---

## 📂 Estructura de Carpetas

```text
portafolio_xaviercabello/
├── public/
│   └── placeholders/
│       └── project-mockup.svg    # Mockup SVG de respaldo en caso de fallo de imagen
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos base Tailwind y variables de tema oscuro
│   │   ├── layout.tsx            # Metadata SEO, OpenGraph y estructura raíz
│   │   └── page.tsx              # Página principal (Server Component directo)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.tsx         # Badges de tags, tecnologías y categorías
│   │   │   └── SpotlightCard.tsx # Tarjeta con efecto glow radial según el cursor
│   │   ├── FilterBar.tsx         # Barra de búsqueda, categorías y toggle de vistas
│   │   ├── Header.tsx            # Header minimalista con contador y redes
│   │   ├── ProjectCard.tsx       # Tarjeta visual con captura, enlace externo y status
│   │   ├── ProjectDirectoryTable.tsx # Vista alternativa compacta tipo Brittany Chiang
│   │   ├── ProjectPreviewModal.tsx   # Modal de vista rápida / sandbox interactivo
│   │   ├── ShowcaseGrid.tsx      # Orquestador del catálogo, filtros y paginación
│   │   └── StatsSummary.tsx      # Franja de métricas e impacto (40+ subdominios)
│   ├── data/
│   │   ├── portfolio.config.ts   # Configuración de autor, categorías y preferencias
│   │   └── projects.ts           # Catálogo centralizado de 40+ proyectos (Data-Driven)
│   ├── lib/
│   │   └── utils.ts              # Funciones helper (cn, formateo de subdominios)
│   └── types/
│       └── project.ts            # Tipado estricto TypeScript (Project, Category, Config)
├── next.config.mjs               # Configuración de imágenes remotas y formatos WebP/AVIF
├── tailwind.config.ts            # Tokens de diseño y colores
├── tsconfig.json                 # Alias de rutas (@/*) y configuración de TypeScript
└── package.json
```

---

## 📝 Guía para Agregar o Remover Proyectos

Gracias a la **Arquitectura Data-Driven**, **NO necesitas tocar ningún componente React ni archivo HTML/JSX**. Toda la interfaz se actualiza automáticamente modificando únicamente `src/data/projects.ts`.

### Paso 1: Abrir `src/data/projects.ts`

Inserta un nuevo objeto dentro del array `PROJECTS_DATA`:

```typescript
{
  id: 'mi-nuevo-proyecto',
  title: 'Mi Nuevo Proyecto SaaS',
  description: 'Descripción concisa de 1 a 2 oraciones explicando el valor y características clave.',
  category: 'saas', // 'saas' | 'ecommerce' | 'dashboards' | 'landing' | 'tools' | 'creative'
  subdomain: 'app.xaviercabello.dev',
  liveUrl: 'https://app.xaviercabello.dev',
  githubUrl: 'https://github.com/xaviercabello/mi-nuevo-proyecto', // Opcional
  image: 'https://images.unsplash.com/...', // o ruta local '/projects/preview.webp'
  tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  featured: true, // true para destacar con estrella dorada
  status: 'online', // 'online' | 'beta' | 'maintenance'
  year: 2024,
  metrics: 'Lighthouse 100 · 99.9% Uptime' // Opcional
}
```

### Paso 2: Verificar Categorías Válidas
Las categorías admitidas están tipadas en `src/types/project.ts`:
- `'saas'`: Aplicaciones web con autenticación o servicios cloud.
- `'ecommerce'`: Tiendas virtuales, carritos y pasarelas de pago.
- `'dashboards'`: Paneles administrativos, telemetría y gráficos.
- `'landing'`: Sitios de conversión y páginas corporativas.
- `'tools'`: Herramientas de productividad, editores y generadores.
- `'creative'`: Experiencias interactivas, 3D, WebGL y sonido.

Al guardar el archivo, los contadores, el motor de búsqueda en tiempo real, el grid y la tabla se sincronizan al instante.
