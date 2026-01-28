import React from 'react'

function Experience() {
  const tecnologias = [
        "PHP",
        "Laravel",
        "JavaScript",
        "React",
        "Inertia.js",
        "Tailwind CSS"
  ]
  return (
<div className="space-y-6">
  <div className="flex flex-wrap items-center gap-3">
    <h3 className="text-xl font-semibold text-white">
      Formación Docente
    </h3>
    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">
      Abril 2024 – Diciembre 2025
    </span>
  </div>

  <div className="text-gray-400 text-lg space-y-4">
    <p>
      Mi experiencia profesional se centra en el desarrollo del portal{" "}
      <span className="text-white font-semibold">
        Formación Docente
      </span>, participando activamente en la construcción y evolución de la plataforma en un entorno real de producción.
    </p>

    <p>
      Durante este período trabajé de forma integral en el{" "}
      <span className="text-white font-semibold">frontend</span> y{" "}
      <span className="text-white font-semibold">backend</span>, desarrollando funcionalidades orientadas a la estabilidad, mantenibilidad y claridad del código.
    </p>

    <p>
      Adicionalmente, formé parte del desarrollo del{" "}
      <span className="text-white font-semibold">
        panel de control administrativo
      </span>, implementando interfaces dinámicas y flujos internos que mejoraron la experiencia de gestión para los usuarios del sistema.
    </p>
  </div>

  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">
      Tecnologías utilizadas
    </p>

    <div className="flex flex-wrap gap-2">
      {tecnologias.map((tech) => (
        <span
          key={tech}
          className="rounded-lg bg-black/40 px-3 py-1 text-sm text-gray-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>



  )
}

export default Experience
