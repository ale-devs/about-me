import React from "react";
import { Check } from "lucide-react";
import Rich from "../i18n/Rich";
import { useLanguage } from "../i18n/useLanguage";
import { handleSpotlightMove } from "../utils/spotlight";

// Calcula la duración entre "AAAA-MM" y "AAAA-MM" (o hoy), contando ambos meses.
function duration(start, end, units) {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const fmt = (n, [one, many]) => `${n} ${n === 1 ? one : many}`;
  return [years && fmt(years, units.year), months && fmt(months, units.month)]
    .filter(Boolean)
    .join(" ");
}

function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.jobs;

  return (
    <div className="stagger relative space-y-8">
      {/* Línea de tiempo */}
      <span
        className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-emerald-400/50 via-white/10 to-orange-400/40"
        aria-hidden="true"
      />

      {experiences.map((exp) => {
        const accent = exp.current
          ? { text: "text-emerald-400", bg: "bg-emerald-400/10", ring: "ring-emerald-400/30", rgb: "52 211 153" }
          : { text: "text-orange-400", bg: "bg-orange-400/10", ring: "ring-orange-400/30", rgb: "251 146 60" };

        return (
          <article key={exp.company} className="relative pl-14">
            {/* Inicial de la empresa sobre la línea */}
            <span
              className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold ring-1 ${accent.ring} ${accent.text}`}
              aria-hidden="true"
            >
              {exp.company.charAt(0)}
            </span>

            <div
              onMouseMove={handleSpotlightMove}
              style={{ "--accent": accent.rgb }}
              className="spotlight-card relative space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <span className="spotlight-glow" aria-hidden="true" />
              <span className="spotlight-border" aria-hidden="true" />

              {/* Encabezado */}
              <div className="relative flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        {t.experience.currentLabel}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-gray-300">{exp.role}</p>
                </div>

                <div className="text-left sm:text-right">
                  <p className={`text-sm font-medium ${accent.text}`}>{exp.period}</p>
                  <p className="text-xs text-gray-500">
                    {duration(exp.start, exp.end, t.experience.units)}
                  </p>
                </div>
              </div>

              <div className="relative space-y-4 text-gray-400 md:text-lg">
                {exp.paragraphs.map((p) => (
                  <p key={p}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>

              {/* Responsabilidades */}
              <div className="relative">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  {t.experience.responsibilitiesTitle}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 rounded-lg bg-black/20 px-3 py-2 text-sm text-gray-300"
                    >
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`} aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologías */}
              <div className="relative border-t border-white/10 pt-4">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  {t.experience.techTitle}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((tech) => (
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
          </article>
        );
      })}
    </div>
  );
}

export default Experience;
