import React from "react";
import { ArrowUpRight, Briefcase, Sparkles, Check } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { handleSpotlightMove } from "../utils/spotlight";

// Datos fijos de cada proyecto; los textos están en src/i18n/translations.js
const myProjects = [
  {
    href: "https://excelenciaescolar.edu.gob.sv",
    image: "/projects/excelencia.webp",
    type: "professional",
    stack: ["TypeScript", "React", "Tailwind CSS", "Express", "PostgreSQL"],
  },
  {
    href: "https://festival-musical-sv.netlify.app/",
    image: "/projects/festival.webp",
    type: "personal",
    stack: ["HTML", "CSS / Sass", "JavaScript"],
  },
  {
    href: "https://cafeterialessandro.netlify.app/",
    image: "/projects/cafeteria.webp",
    type: "personal",
    stack: ["HTML", "CSS / Sass", "JavaScript"],
  },
  {
    href: "https://formaciondocente.edu.sv/",
    image: "/projects/formacion.webp",
    type: "professional",
    stack: ["PHP", "Laravel", "React", "Inertia.js", "Tailwind CSS", "JavaScript"],
  },
];

const typeStyles = {
  professional: {
    accent: "52 211 153", // emerald-400
    badge: "bg-emerald-500/10 text-emerald-400 ring-emerald-400/20",
    check: "text-emerald-400",
    Icon: Briefcase,
  },
  personal: {
    accent: "56 189 248", // sky-400
    badge: "bg-sky-500/10 text-sky-400 ring-sky-400/20",
    check: "text-sky-400",
    Icon: Sparkles,
  },
};

function ProjectCard({ project, labels }) {
  const style = typeStyles[project.type] ?? typeStyles.personal;
  const TypeIcon = style.Icon;
  const domain = new URL(project.href).hostname.replace(/^www\./, "");

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleSpotlightMove}
      style={{ "--accent": style.accent }}
      className="spotlight-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-none"
    >
      <span className="spotlight-glow z-10" aria-hidden="true" />
      <span className="spotlight-border z-10" aria-hidden="true" />

      {/* Captura del sitio */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top opacity-90 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 px-2.5 py-1 text-xs font-medium ring-1 ring-inset backdrop-blur ${style.badge}`}
        >
          <TypeIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {labels.types[project.type]}
        </span>

        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 text-gray-300 ring-1 ring-white/15 backdrop-blur transition duration-300 group-hover:bg-white group-hover:text-slate-900">
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h4 className="text-xl font-semibold leading-snug text-white">
          {project.title}
        </h4>
        <p className="mt-1 text-xs text-gray-500">
          {domain}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {project.highlights?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-gray-300">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <Check className={`h-4 w-4 shrink-0 ${style.check}`} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Tecnologías: siempre al fondo de la tarjeta */}
        <div className="mt-auto pt-6">
          <div className="border-t border-white/10 pt-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              {labels.techTitle}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/5 bg-black/30 px-2 py-0.5 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white">{t.projects.title}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="stagger grid gap-5 sm:grid-cols-2">
        {myProjects
          .map((p, i) => ({ ...p, ...t.projects.items[i] }))
          // Profesionales primero, personales después
          .sort((a, b) => (a.type === b.type ? 0 : a.type === "professional" ? -1 : 1))
          .map((p) => (
            <ProjectCard key={p.href} project={p} labels={t.projects} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
