import React from "react";
import { useLanguage } from "../i18n/useLanguage";

const options = [
  { id: "es", label: "ES", name: "Español" },
  { id: "en", label: "EN", name: "English" },
];

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.languageLabel}
      className="flex items-center gap-2 text-xs font-medium tracking-wider"
    >
      {options.map((o, i) => (
        <React.Fragment key={o.id}>
          {i > 0 && (
            <span className="text-slate-600" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(o.id)}
            aria-pressed={lang === o.id}
            title={o.name}
            className={`cursor-pointer transition-colors ${
              lang === o.id ? "text-white" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {o.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default LanguageToggle;
