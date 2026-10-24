export interface CaseStudy {
  projectId: string;
  title: string;
  area: string;
  summary: string;
  problem: string;
  contribution: string;
  decision: string;
  outcome: string;
  limitation: string;
}

// Editorial summaries of the existing catalog; no inferred clients or impact metrics.
export const CASE_STUDIES: CaseStudy[] = [
  {
    projectId: 'transformaciones-geometricas',
    title: "De unas coordenadas a una figura que puedes transformar.",
    area: 'Educación',
    summary: "Un laboratorio que lleva la explicación de geometría a la experimentación: cambia parámetros y observa qué ocurre con la figura.",
    problem: "Al estudiar transformaciones, el estudiante debe conectar la operación geométrica con el movimiento de la figura. En un dibujo estático esa relación puede pasar desapercibida.",
    contribution: "Reuní la representación geométrica, los controles y las coordenadas en un laboratorio interactivo para explorar esa conexión desde el navegador.",
    decision: "Mostrar juntos la figura y los parámetros de transformación, con TypeScript y Canvas para la visualización y controles adaptados al uso táctil.",
    outcome: "Una herramienta para realizar demostraciones en clase y explorar rotaciones, escalas, reflexiones y traslaciones durante el estudio.",
    limitation: "El proyecto aborda la exploración visual de transformaciones. La medición de su impacto en el aprendizaje requiere una evaluación con estudiantes.",
  },
  {
    projectId: 'todo-lima',
    title: "Un negocio de barrio también merece ser encontrado.",
    area: 'Negocios locales',
    summary: "Un directorio que conecta la búsqueda por distrito y rubro con la información de los negocios de Lima.",
    problem: "Las personas necesitan encontrar servicios cerca de ellas. Los comercios necesitan un espacio donde presentar qué ofrecen y cómo contactarlos.",
    contribution: "Desarrollé un directorio con fichas de negocios y una estructura de búsqueda por ubicación y categoría, pensado para la consulta desde el navegador.",
    decision: "Organizar la experiencia alrededor de dos preguntas concretas: qué servicio buscas y en qué zona lo necesitas.",
    outcome: "Una plataforma que reúne comercios, servicios y datos de contacto en un mismo recorrido de consulta.",
    limitation: "El directorio necesita mantener sus fichas actualizadas. La publicación de un negocio permite mostrar su oferta; los contactos y ventas requieren seguimiento.",
  },
  {
    projectId: 'portafolio-jessicacabello',
    title: "Su experiencia, sus servicios y una web propia.",
    area: 'Marca personal',
    summary: "Una presencia digital para que Jessica Cabello pueda presentar su trabajo y compartir una vía directa de contacto.",
    problem: "Una presentación profesional necesita explicar quién está detrás del servicio, qué ofrece y cómo iniciar una conversación.",
    contribution: "Organicé el perfil, los servicios y el contacto en un sitio adaptado a la identidad de Jessica Cabello y al uso en móvil y escritorio.",
    decision: "Usar una estructura estática con componentes reutilizables para dar protagonismo al contenido y facilitar su mantenimiento.",
    outcome: "Un sitio con dominio propio que reúne la presentación profesional y sus vías de contacto en una dirección para compartir.",
    limitation: "El alcance presentado es el sitio de marca personal. La captación de consultas requiere acompañar la web con difusión y seguimiento.",
  },
];
