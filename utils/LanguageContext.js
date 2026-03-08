import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  // initialize from localStorage if available
  useEffect(() => {
    const stored =
      typeof window !== "undefined" && localStorage.getItem("locale");
    if (stored && (stored === "en" || stored === "ar")) {
      setLocale(stored);
    }
  }, []);

  // whenever locale changes, update html attributes and persist
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      // set a cookie so SSR (_document) can pick it up
      document.cookie = `locale=${locale}; path=/`;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const t = (key) => {
    return translations[locale]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
