import React from "react";
import {
  Database,
  Server,
  Layers,
  BookOpen,
  Paintbrush,
  BarChart3,
  Cloud,
} from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { handleSpotlightMove } from "../utils/spotlight";

const groupStyles = [
  { key: "frontend", icon: Layers, color: "text-sky-400", bg: "bg-sky-400/10", dot: "bg-sky-400", accent: "56 189 248" },
  { key: "backend", icon: Server, color: "text-emerald-400", bg: "bg-emerald-400/10", dot: "bg-emerald-400", accent: "52 211 153" },
  { key: "database", icon: Database, color: "text-purple-400", bg: "bg-purple-400/10", dot: "bg-purple-400", accent: "192 132 252" },
  { key: "data", icon: BarChart3, color: "text-amber-400", bg: "bg-amber-400/10", dot: "bg-amber-400", accent: "251 191 36" },
  { key: "cloud", icon: Cloud, color: "text-cyan-400", bg: "bg-cyan-400/10", dot: "bg-cyan-400", accent: "34 211 238" },
  { key: "styles", icon: Paintbrush, color: "text-pink-400", bg: "bg-pink-400/10", dot: "bg-pink-400", accent: "244 114 182" },
];

function Skills() {
  const { t } = useLanguage();
  const skillGroups = groupStyles.map((g) => ({ ...g, ...t.skills.groups[g.key] }));
  const learning = t.skills.learning;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">{t.skills.title}</h3>

      <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ key, title, icon, color, bg, dot, accent, items }) => {
          const Icon = icon;
          return (
            <div
              key={key}
              onMouseMove={handleSpotlightMove}
              style={{ "--accent": accent }}
              className="spotlight-card group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]"
            >
              <span className="spotlight-glow" aria-hidden="true" />
              <span className="spotlight-border" aria-hidden="true" />

              <div className="relative mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-tight text-white">{title}</span>
                </div>
                <span className="text-xs tabular-nums text-gray-500">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="relative flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-black/25 px-2.5 py-1 text-sm text-gray-300 transition-colors group-hover:border-white/10"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* En aprendizaje */}
        <div className="relative flex flex-col gap-4 rounded-2xl border border-dashed border-orange-400/30 bg-orange-400/[0.03] p-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10">
              <BookOpen className="h-5 w-5 text-orange-400" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-white">{t.skills.learningTitle}</p>
              <p className="text-sm text-gray-500">{t.skills.learningHint}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-300"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
