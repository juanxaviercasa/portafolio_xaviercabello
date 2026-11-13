import { PROJECTS_DATA } from '@/data/projects';
import { GITHUB_INVENTORY } from '@/data/github-inventory';

const EXPLORATION_LINKS = [
  ['01 · Educación', 'Simuladores y práctica para explorar una idea.', '/proyectos?area=edtech'],
  ['02 · Producto', 'Información organizada para resolver una necesidad.', '/proyectos?formato=webapp'],
  ['03 · Método', 'Definir, construir con IA, comprobar y publicar.', '/taller-fenix/'],
] as const;

export function GitHubActivitySection() {
  const repositories = GITHUB_INVENTORY.filter(
    (repo) =>
      repo.hasCode &&
      repo.minimumCommits >= 2 &&
      PROJECTS_DATA.some((project) => project.githubUrl === repo.url),
  );

  return (
    <section
      id="actividad"
      aria-labelledby="activity-title"
      className="rounded-[2rem] border border-orange-300/60 bg-white/90 p-6 dark:bg-[#2c1654] sm:p-10"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-amber-300">
        Código y evidencia · Revisión del 23 de octubre de 2026
      </p>
      <h2 id="activity-title" className="mt-2 text-3xl font-black">
        Del proyecto al aprendizaje
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed">
        {repositories.length} proyectos con captura real, archivos de código y al menos dos commits
        recuperados. Explora decisiones, compara implementaciones y encuentra ideas para tu próximo
        proyecto. Los repositorios vacíos y las demos sin captura quedan fuera de esta vitrina.
      </p>
      <div className="my-6 grid gap-3 sm:grid-cols-3">
        {EXPLORATION_LINKS.map(([title, text, href]) => (
          <a
            key={title}
            href={href}
            className="rounded-xl border border-orange-300/50 p-4 transition-colors hover:bg-orange-100/30 focus-visible:outline focus-visible:outline-2"
          >
            <strong>{title}</strong>
            <p className="mt-2 text-sm">{text}</p>
          </a>
        ))}
      </div>
      <p className="mb-4 text-xs leading-relaxed">
        Fechas en hora de Lima. «Último push» indica actividad del repositorio, no un despliegue. La
        revisión comprueba archivos e historial; no certifica calidad, autoría original de todas
        las dependencias ni resultados. Algunas aplicaciones requieren un entorno local o acceso
        autenticado.
      </p>
      <details>
        <summary className="cursor-pointer rounded-xl bg-orange-100 p-4 font-bold text-slate-900 focus-visible:outline focus-visible:outline-2">
          Explorar los {repositories.length} repositorios con código e historial
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {repositories.map((repo) => (
            <article key={repo.fullName} className="min-w-0 rounded-xl border border-orange-300/50 p-4">
              <a
                className="break-words font-bold underline underline-offset-4 [overflow-wrap:anywhere]"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.fullName}
              </a>
              <p className="mt-2 text-sm">
                {repo.description || 'Sin descripción publicada en GitHub. Consulta los archivos y la documentación.'}
              </p>
              <p className="mt-3 text-xs">
                {repo.archived ? 'Archivado · ' : ''}
                {repo.language || 'Lenguaje no informado'} · Último push:{' '}
                <time dateTime={repo.pushedAt}>{repo.pushLabel}</time>
              </p>
              <p className="mt-2 text-xs">
                {repo.codeFileCount} archivos de código identificados · Historial: al menos{' '}
                {repo.minimumCommits} commits
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs underline">
                <a href={repo.source} target="_blank" rel="noopener noreferrer">
                  Archivos comprobados
                </a>
                {repo.readmeUrl && (
                  <a href={repo.readmeUrl} target="_blank" rel="noopener noreferrer">
                    Documentación
                  </a>
                )}
                {repo.commit && (
                  <a href={repo.commit.html_url} target="_blank" rel="noopener noreferrer">
                    Commit consultado
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
