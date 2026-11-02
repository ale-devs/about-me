import { useContext } from "react";
import { LanguageContext } from "./context";
import { translations } from "./translations";

export function useLanguage() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang, t: translations[lang] };
}
