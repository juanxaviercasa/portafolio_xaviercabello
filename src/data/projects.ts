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
    "image": "/todo_lima.jpg",
    "tags": [
      "JavaScript",
      "Directorio Web",
      "Geolocalización",
      "Pymes Lima",
      "SEO"
    ],
    "featured": true,
    "status": "online",
    "year": new Date().getFullYear(),
    "metrics": "todolima.com · Dominio Oficial",
    "about": "Directorio comercial y guía urbana interactiva para la ciudad de Lima Metropolitana. Conecta a usuarios con comercios locales clasificados por distritos y rubros, integrando geolocalización, búsqueda instantánea y fichas comerciales optimizadas para conversión móvil.",
    "whatILearned": [
      "Estructuración de datos geográficos y filtrado multidistrital en cliente sin depender de bases de datos pesadas.",
      "Implementación de arquitectura Jamstack ultrarrápida con renderizado estático y puntuación perfecta en Core Web Vitals.",
      "Patrones de SEO local y metadatos dinámicos Open Graph para indexación orgánica en motores de búsqueda.",
      "Diseño de interfaz con Tailwind CSS garantizando ergonomía táctil en smartphones de gama media y baja."
],
    "whatITeach": [
      "Cómo modelar un directorio comercial local con IA dictando la taxonomía y categorías en lenguaje natural.",
      "Estrategias para monetizar espacios destacados y cobrar a comercios por fichas premium.",
      "Despliegue a costo cero en servidores perimetrales (Edge) sin pagar cuotas de mantenimiento mensual.",
      "Diseño centrado en conversión móvil para mercados emergentes sin saturar el consumo de datos."
],
    "architecture": "Vanilla JS / TypeScript + Tailwind CSS + Despliegue distribuido Edge (Costo $0/mes)",
    "highlights": [
      "Búsqueda instantánea multi-distrito",
      "Fichas de comercios locales",
      "Optimizado para 4G móvil"
],
    "simpleExplanation": "Imagínate un directorio como las Páginas Amarillas, pero rápido y en tu teléfono. Es una página donde cualquier persona puede entrar a buscar negocios locales en Lima (como restaurantes, talleres o tiendas) clasificados por zonas, y funciona muy rápido sin necesidad de descargar nada.",
    "howToApply": [
      "Si eres profesor o coach, podrías crear un directorio de recursos útiles o libros recomendados para tus alumnos.",
      "Si ofreces servicios, podrías crear una guía con tus trabajos anteriores clasificados por área o tipo de servicio.",
      "Puedes monetizar cobrando a empresas por aparecer destacadas en los primeros resultados."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "nubeparapymes.online · En Vivo",
    "about": "Plataforma centralizada de recursos, plantillas y herramientas web diseñadas específicamente para micro y pequeñas empresas. Opera 100% en el navegador, eliminando la necesidad de instalaciones complejas o software de pago.",
    "whatILearned": [
      "Construcción de un centro de recursos desacoplado con tiempos de respuesta instantáneos.",
      "Arquitectura de componentes modulares reutilizables para catálogos de software sin CMS tradicional.",
      "Estrategias de enrutamiento estático y precarga inteligente de recursos estáticos.",
      "Optimización de tipografía y accesibilidad para dueños de pymes no técnicos."
],
    "whatITeach": [
      "Cómo crear portales de recursos para clientes o comunidades educativas sin gastar en hosting.",
      "Técnicas de Vibe Coding para iterar módulos de contenido y descargables en minutos.",
      "Estructura de landing pages informativas que transmiten autoridad y seguridad digital.",
      "Independencia tecnológica frente a CMS pesados como WordPress."
],
    "architecture": "HTML5 Semántico + Tailwind CSS + Cloudflare Pages / Vercel",
    "highlights": [
      "100% en navegador sin instalaciones",
      "Catálogo modular para pymes",
      "Rendimiento instantáneo"
],
    "simpleExplanation": "Imagínate un cajón de herramientas digitales gratuito. Es un portal donde pequeñas empresas pueden encontrar recursos, plantillas y herramientas útiles que funcionan directamente en su navegador web sin tener que instalar nada.",
    "howToApply": [
      "Como dueño de negocio, puedes usarlo para organizar y optimizar tus tareas diarias.",
      "Si ofreces consultoría, puedes compartir este portal con tus clientes como un recurso de valor agregado.",
      "Puedes crear una plataforma similar para reunir los recursos más útiles de tu propio sector o industria."
    ]
  },{
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
    "year": new Date().getFullYear(),
    "metrics": "hazlocrecer.com · Dominio Oficial",
    "about": "Plataforma de consultoría y metodologías para el despliegue de ecosistemas digitales, automatización de prospección comercial y agentes de IA enfocados en conversión predecible para empresas B2B.",
    "whatILearned": [
      "Diseño de interfaces con tipografía refinada (Dark Mode & Bento Grid) inspiradas en estándares Linear/Vercel.",
      "Micro-animaciones fluidas con Framer Motion sin penalizar la velocidad de carga móvil.",
      "Estructuración de embudos de conversión y copy persuasivo con gatillos psicológicos B2B.",
      "Optimización de componentes UI para transmitir alto valor percibido y credibilidad corporativa."
],
    "whatITeach": [
      "Cómo diseñar landing pages 'High Ticket' para servicios de consultoría o agencias.",
      "Redacción orientada a conversión usando IA para desmantelar objeciones de clientes empresariales.",
      "Despliegue y configuración de dominios corporativos con certificados SSL automáticos.",
      "Automatización de captura de leads cualificados hacia CRM o WhatsApp."
],
    "architecture": "Next.js / React + Tailwind CSS + Framer Motion + Vercel Edge",
    "highlights": [
      "Diseño Bento Grid de alta gama",
      "Micro-interacciones cinemáticas",
      "Copywriting de alta conversión"
],
    "simpleExplanation": "Es una plataforma que te enseña a armar sistemas automáticos para conseguir clientes. Te muestra cómo construir páginas atractivas y usar inteligencia artificial para que tu negocio trabaje de forma más inteligente y predecible.",
    "howToApply": [
      "Puedes aplicar sus metodologías para rediseñar la página de ventas de tu empresa y aumentar tus conversiones.",
      "Si ofreces servicios profesionales, te ayuda a automatizar el proceso de agendar reuniones con prospectos.",
      "Puedes usar sus conceptos de IA para responder dudas de clientes 24/7 sin contratar más personal."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "rale.sistemazenit.com · Oficial",
    "about": "Landing page y plataforma institucional de alta conversión para academia de preparación física, académica y psicotécnica orientada a postulantes de las Fuerzas Armadas y Policía Nacional del Perú (FFAA & PNP).",
    "whatILearned": [
      "Arquitectura de landing page con más del 10% de tasa de conversión con tráfico frío.",
      "Integración de prueba social dinámica (casos de éxito, testimonios y estadísticas de ingreso).",
      "Optimización de formularios directos a WhatsApp para reducir la fricción en ventas telefónicas.",
      "Diseño visual de alto impacto con paleta institucional sobria y contrastes accesibles."
],
    "whatITeach": [
      "Cómo estructurar páginas de venta para academias presenciales y cursos intensivos.",
      "Uso de ganchos de urgencia y autoridad para multiplicar la conversión de anuncios publicitarios.",
      "Cómo evitar costos de agencias creando páginas de matrícula autogestionables en un fin de semana.",
      "Canalización de prospectos directo a WhatsApp con mensajes pre-redactados."
],
    "architecture": "HTML5 + Tailwind CSS + Cloudflare Pages + Integración WhatsApp API",
    "highlights": [
      "Embudos de admisión 2026",
      "Integración directa con WhatsApp",
      "Carga ultra-rápida en 4G"
],
    "simpleExplanation": "Es la página oficial de una academia de preparación física y mental para jóvenes que quieren ingresar a las Fuerzas Armadas o Policía. La página está diseñada para convencer al visitante de matricularse, mostrando testimonios y facilitando el contacto por WhatsApp.",
    "howToApply": [
      "Si tienes una escuela o academia, puedes copiar esta estructura para multiplicar el número de alumnos inscritos.",
      "Puedes agregar botones directos a WhatsApp en tu propio negocio para cerrar ventas más rápido.",
      "Te sirve como ejemplo de cómo mostrar tus casos de éxito y testimonios para dar confianza a tus clientes."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "raletest.sistemazenit.com · Test Vocacional",
    "about": "Aplicación interactiva de evaluación vocacional adaptativa con algoritmo de puntuación en tiempo real para orientar a jóvenes hacia la escuela militar o policial que mejor se ajusta a su perfil psicofísico.",
    "whatILearned": [
      "Diseño de algoritmos de puntuación y ponderación multivariable ejecutados en el navegador.",
      "Manejo de estado complejo en tests paso a paso (stepper) sin perder respuestas previas.",
      "Generación dinámica de informes diagnósticos personalizados al finalizar la evaluación.",
      "Implementación de gating de resultados para captación de leads con alta intención de compra."
],
    "whatITeach": [
      "Cómo programar tests interactivos y diagnósticos con IA para cualificar a tus estudiantes.",
      "Técnicas de 'Lead Magnet' interactivo para multiplicar por 5 la captura de contactos frente a un PDF.",
      "Cálculo de percentiles y perfiles personalizados con lógica condicional en JavaScript.",
      "Uso de tests interactivos para justificar programas formativos personalizados de mayor ticket."
],
    "architecture": "JavaScript / TypeScript + Tailwind CSS + GitHub Pages",
    "highlights": [
      "Algoritmo vocacional de 5 ramas",
      "Diagnóstico personalizado inmediato",
      "Lead magnet interactivo"
],
    "simpleExplanation": "Es un examen interactivo en línea que ayuda a los jóvenes a descubrir para qué rama de las Fuerzas Armadas tienen mayor aptitud. El usuario responde preguntas y el sistema le da un perfil y recomendación al final.",
    "howToApply": [
      "Puedes crear un cuestionario similar para recomendar a tus clientes cuál de tus productos o servicios es el ideal para ellos.",
      "Si eres profesor o psicólogo, puedes adaptar este test para hacer evaluaciones automatizadas a tus pacientes o alumnos.",
      "Puedes usarlo como gancho en redes sociales: ofrece un test gratuito a cambio del correo electrónico de los interesados."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "cepreuni.sistemazenit.com · Oficial",
    "about": "Plataforma de entrenamiento intensivo y simulación de exámenes de admisión para postulantes a la Universidad Nacional de Ingeniería (UNI). Integra banco de preguntas, cronometrado riguroso y renderizado de fórmulas científicas.",
    "whatILearned": [
      "Renderizado de fórmulas matemáticas complejas en tiempo real utilizando KaTeX y MathJax.",
      "Simulación de entornos de examen con temporizadores estrictos y guardado preventivo en LocalStorage.",
      "Estructuración de bases de datos de preguntas en formato JSON ligero para acceso instantáneo.",
      "Métricas de aciertos, fallos y puntajes ponderados según el sistema de admisión UNI."
],
    "whatITeach": [
      "Cómo crear simuladores de exámenes virtuales para tus propios alumnos sin plataformas costosas.",
      "Manejo de contenido técnico, fórmulas y diagramas en la web sin ralentizar la interfaz.",
      "Estrategias para que educadores vendan acceso a bancos de preguntas interactivos.",
      "Arquitectura libre de servidores para alojar exámenes con cientos de estudiantes en simultáneo."
],
    "architecture": "React / Vanilla JS + KaTeX + Tailwind CSS + Vercel",
    "highlights": [
      "Renderizado KaTeX de fórmulas UNI",
      "Temporizador de examen estricto",
      "Puntaje ponderado real"
],
    "simpleExplanation": "Es un simulador de exámenes de alta dificultad para estudiantes que postulan a la universidad. Les permite tomar pruebas con tiempo límite y luego ver cómo se resuelve paso a paso cada pregunta en la que se equivocaron.",
    "howToApply": [
      "Si enseñas cualquier materia, puedes crear exámenes cronometrados para que tus alumnos practiquen desde casa.",
      "Puedes usar este sistema para capacitar a tu personal o medir sus conocimientos técnicos de forma automatizada.",
      "Te permite vender simulacros virtuales y crear una nueva línea de ingresos sin depender de aulas físicas."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "sanmarcos.sistemazenit.com · Oficial",
    "about": "Simulador y analizador adaptativo para postulantes a la Universidad Nacional Mayor de San Marcos (UNMSM). Clasifica por áreas (Ingenierías, Ciencias de la Salud, Letras), diagnosticando debilidades por temas específicos.",
    "whatILearned": [
      "Clasificación multidimensional de preguntas con ponderaciones distintas por área académica.",
      "Visualización gráfica de fortalezas y debilidades temáticas con charts SVG interactivos.",
      "Diseño de UX adaptativo para adolescentes y jóvenes en dispositivos móviles.",
      "Prevención de trampas y optimización de carga diferida de imágenes explicativas."
],
    "whatITeach": [
      "Cómo estructurar simuladores adaptativos que personalizan la experiencia de aprendizaje.",
      "Creación de tableros de resultados visuales que motivan a los alumnos a estudiar más.",
      "Uso de IA para generar cientos de preguntas con explicaciones detalladas en minutos.",
      "Monetización de herramientas diagnósticas como puerta de entrada a cursos de pago."
],
    "architecture": "TypeScript + Tailwind CSS + Charting SVG + Cloudflare Pages",
    "highlights": [
      "Diagnóstico por áreas A, B, C, D, E",
      "Radar de debilidades temáticas",
      "Banco DECO interactivo"
],
    "simpleExplanation": "Es una plataforma de práctica para el examen de ingreso a la universidad San Marcos. A medida que el alumno responde, el sistema detecta sus puntos débiles y le recomienda estudiar temas específicos.",
    "howToApply": [
      "Puedes usar este modelo para crear cursos de nivelación donde el sistema se adapte automáticamente al ritmo de cada alumno.",
      "Si vendes infoproductos, puedes ofrecer un diagnóstico inicial para recomendar el curso exacto que el cliente necesita.",
      "Sirve como base para crear juegos de preguntas y respuestas educativas para cualquier área temática."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "transformacionesgeometricas.sistemazenit.com",
    "about": "Laboratorio visual y simulador geométrico interactivo para la enseñanza de álgebra lineal y geometría analítica: traslación, rotación, escalado, reflexión y matrices de transformación en tiempo real.",
    "whatILearned": [
      "Renderizado por hardware y manipulación matemática de matrices 2D/3D con HTML5 Canvas y WebGL.",
      "Mapeo de interacciones táctiles (arrastre, pellizco, rotación) sincronizadas a 60 FPS.",
      "Diseño de interfaz con controles deslizantes e interpolación matemática fluida.",
      "Optimización de ciclos de dibujado (requestAnimationFrame) para evitar sobrecalentamiento en celulares."
],
    "whatITeach": [
      "Cómo crear herramientas de aprendizaje visual e interactivo para ciencias exactas.",
      "Generación de simuladores matemáticos mediante Vibe Coding con prompts de geometría analítica.",
      "Sustitución de pizarras estáticas por software dinámico que asombra a los alumnos.",
      "Exportación y empaquetado de simuladores para usarse en clase sin conexión a internet."
],
    "architecture": "HTML5 Canvas API + WebGL + JavaScript Vectorial + GitHub Pages",
    "highlights": [
      "Matrices 2D/3D en tiempo real",
      "Controles táctiles y sliders reactivos",
      "60 FPS en móvil"
],
    "simpleExplanation": "Es una pizarra matemática virtual donde puedes jugar con figuras geométricas (como estirarlas, rotarlas o moverlas) y ver cómo cambian sus fórmulas matemáticas al instante. Ayuda a entender conceptos difíciles viéndolos en acción.",
    "howToApply": [
      "Si eres docente de matemáticas, puedes usarlo proyectándolo en clase para explicar geometría visualmente.",
      "Si eres diseñador 3D o arquitecto, te sirve para comprender la lógica detrás de los programas de diseño.",
      "Puedes desarrollar simuladores visuales similares para explicar conceptos complejos de tu propia industria de forma fácil."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "tablaperiodica.sistemazenit.com",
    "about": "Aplicación científica interactiva para estudiantes preuniversitarios de química. Proporciona visualización cuántica, propiedades periódicas, electronegatividad, configuraciones electrónicas y búsqueda en vivo.",
    "whatILearned": [
      "Modelado de esquemas de datos relacionales ricos en JSON para los 118 elementos químicos.",
      "Filtrado instantáneo por familias, bloques (s, p, d, f), estados de agregación y electronegatividad.",
      "Diseño CSS Grid responsivo altamente denso con adaptación móvil mediante zoom cinemático.",
      "Cálculo algorítmico de pesos moleculares y configuraciones electrónicas por regla de Hund/Aufbau."
],
    "whatITeach": [
      "Cómo transformar tablas de información densa en herramientas interactivas de alto impacto.",
      "Técnicas de filtrado ultrarrápido en el navegador sin retraso perceptivo.",
      "Estructuración de datos educativos para convertirlos en herramientas de consulta de cabecera.",
      "Estrategias de posicionamiento SEO para apps utilitarias educativas con tráfico orgánico constante."
],
    "architecture": "CSS Grid Avanzado + JavaScript Moderno + Tailwind + Vercel",
    "highlights": [
      "118 elementos con datos cuánticos",
      "Filtros por bloques s, p, d, f",
      "Calculadora de masa molecular"
],
    "simpleExplanation": "Es una tabla periódica digital y colorida donde puedes hacer clic en cualquier elemento químico y ver toda su información y características de forma interactiva, diseñada para ayudar a estudiantes a memorizar mejor.",
    "howToApply": [
      "Puedes adaptar esta idea para crear un mapa interactivo de todos los productos que vendes, organizado por categorías.",
      "Si eres educador, te sirve como material didáctico gamificado que tus alumnos pueden explorar en sus tablets.",
      "Puedes usar la misma estructura visual para presentar los perfiles del equipo de trabajo de tu empresa."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "mapasplanos.sistemazenit.com",
    "about": "Software interactivo para estudiantes de educación secundaria enfocado en la comprensión intuitiva de escalas numéricas y gráficas, cálculo de distancias reales y conversión de medidas cartográficas.",
    "whatILearned": [
      "Desarrollo de reglas interactivas y medidores cartográficos con zoom interactivo.",
      "Gamificación de ejercicios prácticos con validación inmediata de respuestas.",
      "Diseño pedagógico adaptado a la malla curricular escolar con lenguaje claro.",
      "Optimización de recursos vectoriales SVG para renderizado nítido en pantallas Retina."
],
    "whatITeach": [
      "Cómo digitalizar ejercicios de libros escolares y convertirlos en simuladores interactivos.",
      "Implementación de dinámicas de juego (gamificación) que elevan el compromiso del alumno.",
      "Desarrollo de material educativo interactivo vendible a colegios y docentes particulares.",
      "Cómo compilar herramientas educativas en archivos únicos portables."
],
    "architecture": "SVG Interactivo + Vanilla JS + CSS3 + GitHub Pages",
    "highlights": [
      "Medidor de escalas interactivo",
      "Ejercicios autocorregibles",
      "Diseñado para secundaria"
],
    "simpleExplanation": "Es un juego educativo para aprender cómo funcionan las escalas en los mapas (como cuando 1 centímetro en el papel significa 1 kilómetro en la vida real). Permite hacer mediciones directamente en la pantalla.",
    "howToApply": [
      "Si trabajas en bienes raíces o construcción, podrías crear una herramienta similar para que tus clientes interactúen con planos de casas.",
      "Puedes usarlo como actividad práctica en clases de geografía, arquitectura o diseño urbano.",
      "Sirve de inspiración para desarrollar visualizadores de mapas donde los usuarios midan distancias para despachos o entregas."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "translate.sistemazenit.com",
    "about": "Plataforma de catálogo formativo con arquitectura de internacionalización y localización dinámica. Permite explorar programas académicos, filtrar por niveles y previsualizar mallas curriculares.",
    "whatILearned": [
      "Implementación de arquitectura multi-idioma e internacionalización (i18n) en cliente.",
      "Filtrado facetado complejo por habilidades, duración, instructor y prerrequisitos.",
      "Diseño de tarjetas de cursos de alta densidad de información con modales de temarios.",
      "Estrategias de enrutamiento dinámico para fichas de cursos optimizadas para SEO."
],
    "whatITeach": [
      "Cómo estructurar el catálogo web de tu propia academia online sin pagar suscripciones mensuales.",
      "Organización de mallas curriculares atractivas que facilitan la decisión de compra del estudiante.",
      "Integración de pasarelas de pago y botones de inscripción automatizada.",
      "Despliegue escalable en la nube con capacidad para soportar miles de cursos."
],
    "architecture": "Next.js / Static Export + Tailwind CSS + Edge Delivery",
    "highlights": [
      "Filtrado facetado multi-criterio",
      "Arquitectura i18n preparada",
      "Fichas de cursos de alta conversión"
],
    "simpleExplanation": "Es una biblioteca donde están organizados todos los cursos educativos disponibles. Además de mostrarlos, tiene un sistema interno que ayuda a traducir y adaptar el contenido a diferentes idiomas de forma eficiente.",
    "howToApply": [
      "Si tienes muchos tutoriales o videos, puedes usar esto para organizar tu propio Netflix educativo para tus clientes.",
      "Puedes usar su sistema para ofrecer tus manuales o guías de servicios en múltiples idiomas y abrirte a mercados internacionales.",
      "Te permite crear un repositorio corporativo de capacitaciones accesible para todos tus empleados."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "cajapifuerte.vercel.app · Zero-Knowledge",
    "about": "Bóveda digital de seguridad criptográfica orientada a la protección de contraseñas, claves API y secretos de desarrollo. Funciona bajo arquitectura Zero-Knowledge: el descifrado ocurre 100% en el dispositivo del usuario.",
    "whatILearned": [
      "Implementación de la Web Crypto API nativa del navegador con algoritmos PBKDF2 y AES-GCM (256-bit).",
      "Diseño de arquitectura Zero-Knowledge donde ninguna clave en texto plano viaja por la red.",
      "Exportación e importación cifrada de respaldos con derivación de llaves maestras seguras.",
      "Auditoría de seguridad y mitigación de ataques XSS y fugas de memoria en JavaScript."
],
    "whatITeach": [
      "Principios fundamentales de seguridad y privacidad en aplicaciones web modernas.",
      "Cómo usar la Web Crypto API para cifrar datos sensibles sin comprar servicios de backend caros.",
      "Por qué las arquitecturas descentralizadas en cliente son más seguras que los servidores compartidos.",
      "Cómo generar aplicaciones de confianza empresarial usando Inteligencia Artificial para el código crítico."
],
    "architecture": "Web Crypto API (AES-GCM / PBKDF2) + TypeScript + Tailwind CSS",
    "highlights": [
      "Cifrado Zero-Knowledge en cliente",
      "Gestión de API Keys y contraseñas",
      "Exportación blindada"
],
    "simpleExplanation": "Es como una caja fuerte digital súper segura en tu navegador. Puedes guardar contraseñas o textos secretos y el sistema los bloquea con una llave tan compleja que nadie, ni siquiera el dueño de la página, puede ver qué guardaste.",
    "howToApply": [
      "Puedes usarlo para guardar notas personales o claves importantes sabiendo que no se filtrarán a internet.",
      "Si trabajas con información confidencial de clientes, puedes ofrecerles esta bóveda para que te compartan datos sensibles de forma segura.",
      "Sirve como ejemplo de que puedes construir aplicaciones web totalmente seguras sin depender de grandes empresas tecnológicas."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "colab.sistemazenit.com · Subdominio Oficial",
    "about": "Laboratorio de aprendizaje práctico y entorno interactivo para estudiantes de ciencia de datos, Python y machine learning. Ofrece guías interactivas, playgrounds de código y visualizaciones de algoritmos.",
    "whatILearned": [
      "Integración de editores de código en el navegador (Monaco Editor / CodeMirror) con resaltado sintáctico.",
      "Estructuración de sandboxes de ejecución y visualización de datasets con Web Workers.",
      "Diseño de interfaz tipo IDE minimalista enfocado en productividad de aprendizaje.",
      "Sincronización de notebooks con Google Colab y repositorios de GitHub."
],
    "whatITeach": [
      "Cómo crear entornos interactivos de programación para estudiantes sin servidores dedicados.",
      "Diseño de interfaces tipo editor de código para cursos de tecnología y ciencia de datos.",
      "Automatización de generación de ejercicios de código y soluciones con IA.",
      "Alojamiento de plataformas de documentación interactiva a costo cero."
],
    "architecture": "React + CodeMirror + Web Workers + Vercel Edge",
    "highlights": [
      "Playground interactivo de código",
      "Guías paso a paso de ML",
      "Integración directa con Google Colab"
],
    "simpleExplanation": "Es un laboratorio virtual para aprender a programar y analizar datos. Se conecta directamente con las herramientas de Google, permitiendo que los estudiantes practiquen con código sin tener que instalar programas complicados en sus computadoras.",
    "howToApply": [
      "Si eres consultor de datos, puedes compartir experimentos directamente con tus clientes para que los vean funcionar en vivo.",
      "Te sirve para dictar talleres técnicos donde los alumnos solo necesitan un navegador para empezar a practicar.",
      "Puedes crear reportes de análisis interactivos donde el usuario puede modificar variables y ver cómo cambian los resultados."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "mundossimulados.online · WebGL 60fps",
    "about": "Entorno de experimentación con autómatas celulares, física de partículas, fractales y sistemas complejos. Permite a estudiantes modificar parámetros matemáticos y observar el comportamiento emergente en vivo.",
    "whatILearned": [
      "Optimización de bucles de simulación espacial con buffers de memoria tipada (Float32Array).",
      "Implementación de algoritmos de física computacional (gravedad, colisiones, Conway Game of Life).",
      "Controles en tiempo real con dat.GUI y paneles personalizados para ajustar variables físicas.",
      "Técnicas de renderizado masivo en Canvas 2D minimizando la recolección de basura (Garbage Collector)."
],
    "whatITeach": [
      "Cómo ilustrar conceptos abstractos de física y matemática mediante simulación visual.",
      "Uso de IA generativa para codificar complejas fórmulas físicas en bucles gráficos.",
      "Creación de experiencias inmersivas que dejan boquiabiertos a alumnos y reclutadores.",
      "Rendimiento extremo en el navegador web moderno aprovechando toda la potencia del hardware."
],
    "architecture": "HTML5 Canvas + Tipos de Memoria JavaScript + Tailwind UI",
    "highlights": [
      "Simulación de sistemas complejos",
      "Autómatas celulares y partículas",
      "Control de variables en tiempo real"
],
    "simpleExplanation": "Es un simulador visual donde puedes experimentar con reglas de la física. Por ejemplo, puedes poner planetas virtuales en la pantalla y ver cómo la gravedad hace que giren unos alrededor de otros como en la vida real.",
    "howToApply": [
      "Puedes usar esto como una forma muy llamativa y lúdica de enseñar física, física cuántica o astronomía a estudiantes.",
      "Si eres creador de contenido, puedes grabar estas animaciones para explicar conceptos abstractos en tus videos.",
      "Se puede adaptar para crear animaciones interactivas únicas en la página de inicio de tu sitio web que cautiven a tus visitantes."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "juan.cabellosalirrosas.com · Two-Speed UX",
    "about": "Portafolio profesional interactivo con arquitectura Two-Speed UX: modo exploración cinemático con fondos WebGL y modo lectura ultra-eficiente para reclutadores técnicos y clientes corporativos.",
    "whatILearned": [
      "Desarrollo de shaders GLSL y escenas Three.js ligeras que no degradan la batería del usuario.",
      "Arquitectura Two-Speed UX: alternancia sin recarga entre modo visual inmersivo y modo texto accesible.",
      "Micro-animaciones de desplazamiento basadas en scroll y transiciones de página suaves.",
      "Auditoría Lighthouse con puntaje de 98+ a pesar de incluir efectos visuales avanzados."
],
    "whatITeach": [
      "Cómo construir portafolios que se diferencian radicalmente del 99% de plantillas aburridas.",
      "Equilibrio entre impacto visual y rendimiento técnico implacable para contratación.",
      "Estrategias para presentar proyectos con narrativa y storytelling que vende servicios.",
      "Despliegue automatizado con integración continua (CI/CD) desde GitHub a la nube."
],
    "architecture": "Three.js / WebGL + Tailwind CSS + Framer Motion + Cloudflare Pages",
    "highlights": [
      "Two-Speed UX (Exploración / Lectura)",
      "Efectos WebGL optimizados",
      "Lighthouse Score 98+"
],
    "simpleExplanation": "Es un currículum o portafolio personal moderno. Tiene un botón mágico que cambia la página entre una vista súper rápida solo con texto, o una vista en 3D espectacular tipo videojuego, dependiendo de lo que el visitante prefiera ver.",
    "howToApply": [
      "Puedes aplicar esta idea para que tu página web se adapte a clientes que quieren ir al grano y a los que quieren ver un diseño impresionante.",
      "Si ofreces servicios premium, el modo 3D te ayuda a proyectar exclusividad y alto valor técnico.",
      "Te sirve de modelo para crear experiencias digitales que destaquen frente a tus competidores que usan plantillas aburridas."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "jessica.cabellosalirrosas.com · Subdominio Oficial",
    "about": "Plataforma profesional para terapeuta y docente psicopedagógica. Incluye catálogo de recursos descargables, guías de estimulación cognitiva, sistema de agendamiento y artículos especializados para padres y maestros.",
    "whatILearned": [
      "Diseño de interfaz accesible con paletas cromáticas calmadas y tipografía legible para educadores.",
      "Estructuración de biblioteca de recursos descargables categorizados por edades y necesidades.",
      "Integración de calendario interactivo para reserva de consultas y sesiones de orientación.",
      "Optimización de tiempos de carga en dispositivos móviles utilizados frecuentemente por madres y docentes."
],
    "whatITeach": [
      "Cómo crear sitios web profesionales para terapeutas, psicólogos y docentes particulares.",
      "Estrategias para ofrecer recursos descargables como imán de captación de consultas privadas.",
      "Diseño empático que transmite calidez y confianza profesional sin parecer una plantilla corporativa fría.",
      "Cómo monetizar asesorías y cursos especializados sin intermediarios de plataformas de cursos."
],
    "architecture": "HTML5 Semántico + Tailwind CSS + GitHub Pages",
    "highlights": [
      "Biblioteca de recursos psicopedagógicos",
      "Diseño empático y accesible",
      "Agendamiento de consultas"
],
    "simpleExplanation": "Es el sitio web de una profesional en educación, diseñado para ser muy amigable y transmitir calma. Permite a los padres de familia descargar hojas de trabajo para sus hijos y agendar citas directamente desde la página.",
    "howToApply": [
      "Si eres psicólogo, terapeuta o asesor, puedes usar este modelo para mostrar tus servicios y atraer pacientes de manera automatizada.",
      "Te permite crear una sección de recursos gratuitos que funciona como imán para conseguir el correo electrónico de clientes potenciales.",
      "Puedes integrar el sistema de agendamiento para que las personas reserven y paguen por tus asesorías sin que tú tengas que chatear con ellos."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "mapavida.sistemazenit.com · Audio Ambiental",
    "about": "Experiencia digital narrativa y cartografía interactiva que combina líneas de tiempo SVG, nodos biográficos y síntesis de audio ambiental inmersivo mediante la Web Audio API.",
    "whatILearned": [
      "Manipulación avanzada de curvas Bézier y trazado dinámico de líneas de tiempo en SVG.",
      "Implementación de generadores de sonido ambiental con osciladores y nodos de ganancia en Web Audio API.",
      "Navegación horizontal fluida con aceleración por GPU y snapping suave.",
      "Storytelling digital interactivo integrando texto, audio y diseño espacial."
],
    "whatITeach": [
      "Cómo incorporar audio ambiental y dinamismo sonoro en aplicaciones web para crear atmósfera.",
      "Técnicas de infografía interactiva para cursos de historia, literatura o desarrollo personal.",
      "Manejo de SVG interactivo para representar procesos evolutivos o líneas temporales.",
      "Creación de activos digitales únicos con alta capacidad de viralización en redes sociales."
],
    "architecture": "Web Audio API + SVG Dinámico + JavaScript + Vercel",
    "highlights": [
      "Línea de tiempo SVG interactiva",
      "Audio ambiental en Web Audio API",
      "Storytelling biográfico inmersivo"
],
    "simpleExplanation": "Es una página web artística que cuenta una historia personal como si fuera un viaje. A medida que bajas por la página, te va mostrando etapas de la vida acompañadas de sonidos y música relajante de fondo que se genera en el momento.",
    "howToApply": [
      "Puedes usar este formato inmersivo para contar la historia de cómo fundaste tu empresa, conectando emocionalmente con tus clientes.",
      "Si eres artista o músico, puedes crear experiencias interactivas que acompañen el lanzamiento de tu nuevo trabajo.",
      "Sirve de inspiración para transformar currículums tradicionales aburridos en narrativas visuales memorables."
    ]
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
    "year": new Date().getFullYear(),
    "metrics": "psicologiaoscura.sistemazenit.com",
    "about": "Plataforma interactiva de divulgación científica en psicología y ciencias del comportamiento. Presenta experimentos clásicos interactivos (efecto Stroop, sesgos cognitivos, memoria de trabajo) con análisis en tiempo real.",
    "whatILearned": [
      "Medición precisa de tiempos de reacción (latencia en milisegundos) con performance.now().",
      "Diseño de experimentos interactivos con recolección y comparación de métricas individuales vs. medias poblacionales.",
      "Visualización interactiva de conceptos cognitivos abstractos mediante retos dinámicos.",
      "Arquitectura ligera que permite correr experimentos en cualquier navegador escolar o móvil."
],
    "whatITeach": [
      "Cómo transformar conceptos teóricos de ciencias sociales en dinámicas interactivas comprobables.",
      "Medición de datos en cliente y cálculo de estadísticas descriptivas instantáneas.",
      "Cómo los docentes pueden impartir clases prácticas donde los alumnos experimentan la teoría.",
      "Creación de infoproductos educativos interactivos con un valor de mercado mucho más alto que un libro."
],
    "architecture": "JavaScript ES6+ + Tailwind CSS + High Precision Timers + Cloudflare Pages",
    "highlights": [
      "Experimentos cognitivos en tiempo real",
      "Medición de tiempos de reacción",
      "Visualización de sesgos psicológicos"
],
    "simpleExplanation": "Es una página que te hace pequeños trucos mentales o juegos para enseñarte cómo funciona tu cerebro. En lugar de solo leer sobre psicología, participas en mini-experimentos que miden qué tan rápido reaccionas a diferentes ilusiones.",
    "howToApply": [
      "Puedes utilizar esta dinámica de mini-juegos para enseñar conceptos teóricos complejos de tu industria de una forma divertida.",
      "Si das charlas o talleres, puedes usar la página en vivo y pedirle a la audiencia que participe desde sus celulares.",
      "Te sirve como modelo para convertir un libro o curso tradicional en un infoproducto interactivo que puedas vender mucho más caro."
    ]
  }
];
