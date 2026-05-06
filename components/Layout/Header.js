import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../utils/LanguageContext";
import { useTheme } from "../../utils/ThemeContext";
import LogoEm from "../../public/assets/logoblue.png";
import LogoWhite from "../../public/assets/logowhitenew.png";

const Header = () => {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  // ✅ Smooth scroll helper with fixed-header offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const offset = 12; // small extra spacing below header

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveLink(id);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-30 bg-white dark:bg-dark-bg transition-all ${
          scrollActive ? "shadow-md py-2" : "py-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col sm:py-4">
          {/* LOGO */}
          <div
            className={`col-start-1 col-end-2 flex items-center ${
              locale === "ar" ? "justify-end" : "justify-start"
            }`}
          >
            <Image
              src={theme === "dark" ? LogoWhite : LogoEm}
              alt="EMnovation Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex col-start-4 col-end-8 text-neutral-700 dark:text-dark-text items-center gap-2">
            <li
              onClick={() => scrollToSection("about")}
              className={`px-4 py-2 cursor-pointer transition ${
                activeLink === "about"
                  ? "text-accent-500"
                  : "hover:text-accent-500"
              }`}
            >
              {t("about")}
            </li>

            <li
              onClick={() => scrollToSection("we-offer")}
              className={`px-4 py-2 cursor-pointer transition ${
                activeLink === "we-offer"
                  ? "text-accent-500"
                  : "hover:text-accent-500"
              }`}
            >
              {t("whatWeOffer")}
            </li>

            <li
              onClick={() => scrollToSection("Courses")}
              className={`px-4 py-2 cursor-pointer transition ${
                activeLink === "Courses"
                  ? "text-accent-500"
                  : "hover:text-accent-500"
              }`}
            >
              {t("courses")}
            </li>
          </ul>

          {/* LANGUAGE SWITCH & THEME TOGGLE */}
          <div className="col-start-8 col-end-9 flex items-center justify-end gap-2">
            <button
              onClick={toggleTheme}
              className="text-sm border border-accent-500 px-3 py-1 rounded text-accent-500 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white transition"
              title={
                theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              onClick={toggle}
              className="text-sm border border-accent-500 px-3 py-1 rounded text-accent-500 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white transition"
            >
              {locale === "en" ? t("switchToAr") : t("switchToEn")}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAV */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t bg-white dark:bg-dark-bg">
        <ul className="flex justify-between items-center px-4 py-2 text-neutral-700 dark:text-dark-text">
          <li
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-xs cursor-pointer"
          >
            <span>ℹ️</span>
            {t("about")}
          </li>

          <li
            onClick={() => scrollToSection("we-offer")}
            className="flex flex-col items-center text-xs cursor-pointer"
          >
            <span>🌐</span>
            {t("whatWeOffer")}
          </li>

          <li
            onClick={() => scrollToSection("Courses")}
            className="flex flex-col items-center text-xs cursor-pointer"
          >
            <span>📚</span>
            {t("courses")}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
