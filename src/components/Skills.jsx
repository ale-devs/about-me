import React from 'react'
import {
Database,
Server,
Layers,
BookOpen,
Paintbrush,
} from "lucide-react";


function Skills() {
  return (

<div className="space-y-6">
  <h3 className="text-xl font-semibold text-white">
    Habilidades
  </h3>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {/* Frontend */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-white">
        <Layers className="h-5 w-5 text-sky-400" />
        <span className="font-semibold">Frontend</span>
      </div>

      <ul className="space-y-1 text-gray-400">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Inertia.js</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    {/* Backend */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-white">
        <Server className="h-5 w-5 text-emerald-400" />
        <span className="font-semibold">Backend</span>
      </div>

      <ul className="space-y-1 text-gray-400">
        <li>PHP</li>
        <li>Laravel</li>
        <li>Node.js</li>
      </ul>
    </div>

    {/* Base de datos */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-white">
        <Database className="h-5 w-5 text-purple-400" />
        <span className="font-semibold">Base de datos</span>
      </div>

      <ul className="space-y-1 text-gray-400">
        <li>MySQL</li>
      </ul>
    </div>

    {/* Estilos & arquitectura CSS */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 lg:col-span-3">
      <div className="mb-3 flex items-center gap-2 text-white">
        <Paintbrush className="h-5 w-5 text-pink-400" />
        <span className="font-semibold">Estilos & arquitectura CSS</span>
      </div>

      <ul className="space-y-1 text-gray-400">
        <li>Sass / SCSS</li>
        <li>Metodología BEM</li>
      </ul>
    </div>

    {/* En aprendizaje */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 lg:col-span-3">
      <div className="mb-3 flex items-center gap-2 text-white">
        <BookOpen className="h-5 w-5 text-orange-400" />
        <span className="font-semibold">En aprendizaje</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-400">
          Vue.js
        </span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Skills
