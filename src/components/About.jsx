import React from "react";
import { Code2, BarChart3, Cloud } from "lucide-react";
import Rich from "../i18n/Rich";
import { useLanguage } from "../i18n/useLanguage";
import { handleSpotlightMove } from "../utils/spotlight";

const focusStyles = {
  web: { icon: Code2, color: "text-sky-400", bg: "bg-sky-400/10", accent: "56 189 248" },
  data: { icon: BarChart3, color: "text-amber-400", bg: "bg-amber-400/10", accent: "251 191 36" },
  platforms: { icon: Cloud, color: "text-emerald-400", bg: "bg-emerald-400/10", accent: "52 211 153" },
};

function About() {
  const { t } = useLanguage();
  const [intro, ...rest] = t.about;
  const page = t.aboutPage;

  return (
    <div className="stagger space-y-8">
      {/* Introducción destacada */}
      <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
        <Rich text={intro} />
      </p>

      {/* Cifras */}
      <div className="grid grid-cols-3 gap-3">
        {page.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center sm:px-4 sm:py-4 sm:text-left"
          >
            <p className="bg-linear-to-br from-white to-indigo-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-[11px] leading-tight text-gray-400 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Resto del texto */}
      <div className="space-y-5 text-lg text-gray-400">
        {rest.slice(0, -1).map((p) => (
          <p key={p}>
            <Rich text={p} />
          </p>
        ))}
      </div>

      {/* Puesto actual */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {page.nowLabel}
        </div>
        <p className="mt-3 text-lg font-semibold text-white">
          {page.nowRole} <span className="text-gray-500">·</span>{" "}
          <span className="text-emerald-300">{page.nowCompany}</span>
        </p>
        <p className="mt-2 text-gray-400">
          <Rich text={page.nowText} />
        </p>
      </div>

      {/* Áreas de enfoque */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {page.focusTitle}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {page.focus.map((f) => {
            const st = focusStyles[f.key];
            const Icon = st.icon;
            return (
              <div
                key={f.key}
                onMouseMove={handleSpotlightMove}
                style={{ "--accent": st.accent }}
                className="spotlight-card relative rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="spotlight-glow" aria-hidden="true" />
                <span className="spotlight-border" aria-hidden="true" />
                <span className={`relative flex h-9 w-9 items-center justify-center rounded-lg ${st.bg}`}>
                  <Icon className={`h-5 w-5 ${st.color}`} aria-hidden="true" />
                </span>
                <p className="relative mt-3 font-semibold text-white">{f.title}</p>
                <p className="relative mt-1 text-sm leading-relaxed text-gray-400">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
