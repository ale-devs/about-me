import React from 'react'
import { ExternalLink, Briefcase, Sparkles } from "lucide-react";

function Projects() {
  const myProjects = [
    {
      title: "Festival Musical SV",
      href: "https://festival-musical-sv.netlify.app/",
      type: "Personal",
      description:
        "Proyecto web personal enfocado en una experiencia visual tipo landing para presentar contenido de un evento. Diseño responsivo y estructura clara para navegación rápida.",
      highlights: ["Landing page", "Responsive UI", "Enfoque en presentación"],
      stack: ["HTML", "CSS / Sass", "JavaScript"],
    },
    {
      title: "Cafetería Lessandro",
      href: "https://cafeterialessandro.netlify.app/",
      type: "Personal",
      description:
        "Proyecto web personal orientado a mostrar información de una cafetería de forma atractiva, con secciones organizadas para contenido y navegación.",
      highlights: ["UI clara", "Diseño responsivo", "Estructura por secciones"],
      stack: ["HTML", "CSS / Sass", "JavaScript"],
    },
    {
      title: "Portal Formación Docente",
      href: "https://formaciondocente.edu.sv/",
      type: "Profesional",
      description:
        "Participé en el desarrollo y evolución del portal, trabajando tanto en frontend como en backend. También contribuí al panel administrativo con interfaces dinámicas para la gestión interna.",
      highlights: [
        "Frontend + Backend",
        "Panel administrativo",
        "Trabajo en producción",
      ],
      stack: ["PHP", "Laravel", "React", "Inertia.js", "Tailwind CSS", "JavaScript"],
    },
  ];
return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">Proyectos</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-white">
                    {p.title}
                  </h4>

                  <span
                    className={[
                      "rounded-full px-3 py-1 text-xs font-medium",
                      p.type === "Profesional"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-sky-500/10 text-sky-400",
                    ].join(" ")}
                  >
                    {p.type === "Profesional" ? (
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        Profesional
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" />
                        Personal
                      </span>
                    )}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-400">{p.description}</p>
              </div>

              <ExternalLink className="h-4 w-4 text-gray-400 transition group-hover:text-white" />
            </div>

            {p.highlights?.length ? (
              <ul className="mt-4 space-y-1 text-sm text-gray-400">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Stack */}
            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-300">
                Tecnologías
              </p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-black/40 px-3 py-1 text-xs text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects
