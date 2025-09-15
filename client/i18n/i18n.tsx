import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries } from "./dictionaries";

export type Lang = "en" | "hi" | "ml";

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function getBrowserLang(): Lang {
  const nav = typeof navigator !== "undefined" ? navigator.language : "en";
  if (nav.startsWith("hi")) return "hi";
  if (nav.startsWith("ml") || nav.startsWith("ms")) return "ml";
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (stored as Lang) || getBrowserLang();
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[lang] as Record<string, any>;
      const parts = key.split(".");
      let cur: any = dict;
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in cur) cur = cur[p];
        else return key;
      }
      return typeof cur === "string" ? cur : key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}
