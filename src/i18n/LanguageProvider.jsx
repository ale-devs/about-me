import React, { useEffect, useState } from "react";
import { LanguageContext } from "./context";
import { translations } from "./translations";

const STORAGE_KEY = "lang";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage no disponible
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[lang].meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage no disponible
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
