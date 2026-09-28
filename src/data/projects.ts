import { Project } from '@/types/project';

/**
 * Catálogo exclusivo de proyectos con despliegue en producción y enlaces personalizados verificados.
 * 
 * - Todos los elementos listados cuentan con dominio, subdominio o URL interactiva en vivo.
 * - No incluye repositorios sin entorno de producción desplegado.
 */
export const PROJECTS_DATA: Project[] = [
  {
    "id": "todo-lima",
    "title": "Todo Lima — Guía Comercial y Directorio Urbano",
    "description": "Guía digital interactiva y directorio web de comercios, servicios y cultura de la ciudad de Lima Metropolitana, con geolocalización y búsqueda comercial.",
    "category": "pymes",
    "subdomain": "todolima.com",
    "liveUrl": "https://todolima.com/",
    "githubUrl": "https://github.com/juanxaviercasa/todo_lima",
    "image": "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Directorio Web",
      "Geolocalización",
      "Pymes Lima",
      "SEO"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "todolima.com · Dominio Oficial"
  },
  {
    "id": "nube-para-pymes",
    "title": "Nube Para PyMEs — Portal de Software & Recursos",
    "description": "Centro de recursos, guías prácticas y suite de herramientas web que se ejecutan 100% en el navegador, sin instalaciones ni barreras para pequeñas empresas.",
    "category": "pymes",
    "subdomain": "nubeparapymes.online",
    "liveUrl": "https://nubeparapymes.online/",
    "githubUrl": "https://github.com/juanxaviercasa/nube-para-pymes",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "HTML5",
      "Tailwind CSS",
      "Web Tools",
      "Productividad",
      "SEO"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "nubeparapymes.online · En Vivo"
  },
  {
    "id": "nube-para-pymes-apps",
    "title": "Nube Para PyMEs — Hub de Apps & Calculadoras",
    "description": "Hub de micro-aplicaciones financieras y utilidades operativas: cálculo de márgenes comerciales, costos laborales, punto de equilibrio y facturación.",
    "category": "pymes",
    "subdomain": "apps.nubeparapymes.online",
    "liveUrl": "https://apps.nubeparapymes.online/",
    "githubUrl": "https://github.com/juanxaviercasa/nube-para-pymes",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Tailwind CSS",
      "Micro-Apps",
      "Finanzas Pyme"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "apps.nubeparapymes.online"
  },
  {
    "id": "herramientas-pymes",
    "title": "Herramientas PyMEs — Suite 22-en-1 PWA",
    "description": "Suite integral con 22 herramientas web gratuitas y aplicación de escritorio PWA para optimizar, calcular y potenciar la gestión de pequeñas y medianas empresas offline.",
    "category": "pymes",
    "subdomain": "juanxaviercasa.github.io/herramientas-pymes",
    "liveUrl": "https://juanxaviercasa.github.io/herramientas-pymes/",
    "githubUrl": "https://github.com/juanxaviercasa/herramientas-pymes",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "HTML5",
      "PWA",
      "JavaScript",
      "Offline",
      "22 Herramientas"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "22 Herramientas PWA Offline"
  },
  {
    "id": "hazlo-crecer",
    "title": "Hazlo Crecer — Ecosistemas Digitales & IA",
    "description": "Framework de ecosistemas digitales, automatización de prospección comercial y agentes de IA enfocados en conversión predecible para empresas.",
    "category": "pymes",
    "subdomain": "hazlocrecer.com",
    "liveUrl": "https://hazlocrecer.com",
    "githubUrl": "https://github.com/juanxaviercasa/hazlo-crecer",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Agentes IA",
      "Automatización",
      "Conversión"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "hazlocrecer.com · Dominio Oficial"
  },
  {
    "id": "rale-premilitar",
    "title": "RALE Premilitar & Prepolicial de Élite — Admisión Oficial 2026",
    "description": "Preparación física de élite, piscina semiolímpica propia temperada, simulador psicotécnico con IA y prechequeo médico para las 8 escuelas matrices del Perú: EO-PNP, ETS, EMCH, ETE, ESNA, CITEN, EOFAP y ESOFA.",
    "category": "edtech",
    "subdomain": "rale.sistemazenit.com",
    "liveUrl": "https://rale.sistemazenit.com",
    "githubUrl": "https://github.com/juanxaviercasa/sistema-zenit",
    "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Astro",
      "Tailwind CSS",
      "Simulador Psicotécnico IA",
      "Preparación Premilitar",
      "Admisión PNP & FFAA"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "rale.sistemazenit.com · Oficial"
  },
  {
    "id": "rale-test-vocacional",
    "title": "Test Vocacional Militar — RALE Premilitar · FFAA & PNP",
    "description": "Plataforma oficial de evaluación y orientación vocacional militar interactiva de RALE Premilitar para las 8 escuelas matrices del Perú: EMCH, ETE, ENP, CITEN, EOFAP, ESOFA, EO-PNP y EESTP.",
    "category": "edtech",
    "subdomain": "raletest.sistemazenit.com",
    "liveUrl": "https://raletest.sistemazenit.com",
    "githubUrl": "https://github.com/juanxaviercasa/sistema-zenit",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Evaluación Vocacional",
      "Simulador Psicotécnico",
      "Orientación Militar",
      "FFAA & PNP"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "raletest.sistemazenit.com · Test Vocacional"
  },
  {
    "id": "estudio-uni",
    "title": "Núcleo UNI — Plataforma de Preparación CEPRE-UNI",
    "description": "Plataforma interactiva de entrenamiento de alto rendimiento y simulacros cronometrados con resolución metódica para el examen de admisión CEPRE-UNI.",
    "category": "edtech",
    "subdomain": "cepreuni.sistemazenit.com",
    "liveUrl": "https://cepreuni.sistemazenit.com/",
    "githubUrl": "https://github.com/juanxaviercasa/estudio_uni",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Matemáticas",
      "CEPRE-UNI"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "cepreuni.sistemazenit.com · Oficial"
  },
  {
    "id": "rumbo-san-marcos",
    "title": "Rumbo San Marcos — Diagnóstico Adaptativo UNMSM",
    "description": "Plataforma web de evaluación diagnóstica adaptativa, simulacros DECO y preparación especializada para postulantes de la Universidad Nacional Mayor de San Marcos.",
    "category": "edtech",
    "subdomain": "sanmarcos.sistemazenit.com",
    "liveUrl": "https://sanmarcos.sistemazenit.com/",
    "githubUrl": "https://github.com/juanxaviercasa/rumbo-san-marcos",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "HTML5",
      "PocketBase",
      "Pedagogía Adaptativa",
      "UNMSM DECO"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "sanmarcos.sistemazenit.com · Oficial"
  },
  {
    "id": "transformaciones-geometricas",
    "title": "Transformaciones Geométricas Interactivas (2D / 3D)",
    "description": "Visualizador matemático interactivo para exploración de transformaciones lineales, homotecias, autovalores, rotaciones y traslaciones matriciales en tiempo real.",
    "category": "edtech",
    "subdomain": "transformacionesgeometricas.sistemazenit.com",
    "liveUrl": "https://transformacionesgeometricas.sistemazenit.com/",
    "githubUrl": "https://github.com/juanxaviercasa/transformaciones_geometricas",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "TypeScript",
      "Canvas API",
      "Álgebra Lineal",
      "WebGL 3D"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "transformacionesgeometricas.sistemazenit.com"
  },
  {
    "id": "tabla-periodica",
    "title": "Tabla Periódica Interactiva Pre-UNI",
    "description": "Aplicación web interactiva para exploración pedagógica de elementos químicos, propiedades atómicas, tendencias periódicas y modelos de capas electrónicas.",
    "category": "edtech",
    "subdomain": "tablaperiodica.sistemazenit.com",
    "liveUrl": "https://tablaperiodica.sistemazenit.com/",
    "githubUrl": "https://github.com/juanxaviercasa/tabla-periodica",
    "image": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Canvas",
      "CSS Grid",
      "Química Pre-UNI"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "tablaperiodica.sistemazenit.com"
  },
  {
    "id": "mapas-planos",
    "title": "Planos y Mapas a Escala — 1.° de Secundaria",
    "description": "Plataforma web interactiva para la enseñanza y aprendizaje de escalas numéricas, escalas gráficas y manipulación técnica de planos y geometría en el navegador.",
    "category": "edtech",
    "subdomain": "mapasplanos.sistemazenit.com",
    "liveUrl": "https://mapasplanos.sistemazenit.com",
    "githubUrl": "https://github.com/juanxaviercasa/mapas-planos",
    "image": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "HTML5",
      "Canvas",
      "Geometría",
      "Escalas",
      "Secundaria"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "mapasplanos.sistemazenit.com"
  },
  {
    "id": "catalogo-cursos",
    "title": "Catálogo de Cursos & Pipeline de Localización",
    "description": "Catálogo interactivo y pipeline de localización, traducción y procesamiento multimedia para cursos educativos y contenidos especializados.",
    "category": "edtech",
    "subdomain": "translate.sistemazenit.com",
    "liveUrl": "https://translate.sistemazenit.com",
    "githubUrl": "https://github.com/juanxaviercasa/catalogo-cursos",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "TypeScript",
      "React",
      "Localización",
      "Traducción Multimedia"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "translate.sistemazenit.com"
  },
  {
    "id": "caja-fuerte",
    "title": "DevVault Pro Suite — Bóveda Zero-Knowledge",
    "description": "Bóveda de claves y centro de comando con criptografía Zero-Knowledge (AES-GCM 256 bits + PBKDF2 de 100,000 rondas) que opera 100% en el cliente.",
    "category": "tools",
    "subdomain": "cajapifuerte.vercel.app",
    "liveUrl": "https://cajapifuerte.vercel.app/",
    "githubUrl": "https://github.com/juanxaviercasa/caja-fuerte",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Web Crypto API",
      "AES-GCM",
      "Zero-Knowledge",
      "Vercel"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "cajapifuerte.vercel.app · Zero-Knowledge"
  },
  {
    "id": "potencia-colab",
    "title": "Colab Atelier — Data Learning Lab",
    "description": "Laboratorio de ingeniería de datos y aprendizaje con autenticación, sincronización de notebooks con Google Colab/Drive, almacenamiento y tests automatizados.",
    "category": "tools",
    "subdomain": "colab.sistemazenit.com",
    "liveUrl": "https://colab.sistemazenit.com",
    "githubUrl": "https://github.com/juanxaviercasa/potencia-colab",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "TypeScript",
      "Google Colab",
      "Data Engineering",
      "Vitest",
      "Seguridad"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "colab.sistemazenit.com · Subdominio Oficial"
  },
  {
    "id": "mundos-simulados",
    "title": "Mundos Simulados — Laboratorio de Computación Visual",
    "description": "Plataforma interactiva de física computacional, gravedad n-cuerpos, termodinámica y simulación de sistemas dinámicos en Canvas y WebGL.",
    "category": "culture",
    "subdomain": "mundossimulados.online",
    "liveUrl": "https://mundossimulados.online",
    "githubUrl": "https://github.com/juanxaviercasa/mundos-simulados",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Three.js",
      "WebGL",
      "Física Computacional",
      "Canvas API"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "mundossimulados.online · WebGL 60fps"
  },
  {
    "id": "portafolio-juancabello",
    "title": "Portafolio Juan Cabello — Two-Speed UX & WebGL",
    "description": "Portafolio profesional de nueva generación con experiencia de usuario bifurcada: Modo Rendimiento accesible vs. Modo Inmersivo WebGL con Three.js.",
    "category": "culture",
    "subdomain": "juan.cabellosalirrosas.com",
    "liveUrl": "https://juan.cabellosalirrosas.com/",
    "githubUrl": "https://github.com/juanxaviercasa/portafolio_juancabello",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "TypeScript",
      "WebGL",
      "Three.js",
      "Two-Speed UX",
      "Vite"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "juan.cabellosalirrosas.com · Two-Speed UX"
  },
  {
    "id": "portafolio-jessicacabello",
    "title": "Portafolio Jessica Cabello — Recursos Psicopedagógicos",
    "description": "Sitio web profesional y repositorio de recursos psicopedagógicos, ejercicios didácticos y actividades de estimulación y atención infantil.",
    "category": "culture",
    "subdomain": "jessica.cabellosalirrosas.com",
    "liveUrl": "https://jessica.cabellosalirrosas.com",
    "githubUrl": "https://github.com/juanxaviercasa/portafolio_jessicacabello",
    "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "HTML5",
      "CSS3",
      "Psicopedagogía",
      "Educación Infantil"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "jessica.cabellosalirrosas.com · Subdominio Oficial"
  },
  {
    "id": "mapa-de-vida",
    "title": "Mapa de Vida — Cartografía Personal & Audio Ambiental",
    "description": "Aplicación web interactiva de introspección personal, cálculo simbólico y cartografía visual con generación de paisaje sonoro ambiental procedural.",
    "category": "culture",
    "subdomain": "mapavida.sistemazenit.com",
    "liveUrl": "https://mapavida.sistemazenit.com/",
    "githubUrl": "https://github.com/juanxaviercasa/mapa-de-vida",
    "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "HTML5",
      "Canvas",
      "Audio Procedural"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "mapavida.sistemazenit.com · Audio Ambiental"
  },
  {
    "id": "psicologia-interactiva",
    "title": "Psicología Interactiva — Divulgación Cognitiva",
    "description": "Libro interactivo y plataforma web divulgativa de conceptos de psicología cognitiva, sesgos del comportamiento humano y simuladores de toma de decisiones.",
    "category": "culture",
    "subdomain": "psicologiaoscura.sistemazenit.com",
    "liveUrl": "https://psicologiaoscura.sistemazenit.com/",
    "githubUrl": "https://github.com/juanxaviercasa/psicologia-interactiva",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Psicología Cognitiva"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "psicologiaoscura.sistemazenit.com"
  },
  {
    "id": "portafolio-xaviercabello-hub",
    "title": "Portafolio Principal — Xavier Cabello (Showcase Central)",
    "description": "Showcase centralizado y directorio web Data-Driven en Next.js 14 que organiza, exhibe y enlaza todas las plataformas y subdominios en producción.",
    "category": "templates",
    "subdomain": "xavier.cabellosalirrosas.com",
    "liveUrl": "https://xavier.cabellosalirrosas.com/",
    "githubUrl": "https://github.com/juanxaviercasa/portafolio_xaviercabello",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Next.js 14",
      "Tailwind CSS",
      "TypeScript",
      "Data-Driven Hub",
      "Spotlight UX"
    ],
    "featured": true,
    "status": "online",
    "year": 2024,
    "metrics": "xavier.cabellosalirrosas.com · Hub Central"
  }
];
