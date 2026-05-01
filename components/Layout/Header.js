import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../utils/LanguageContext";
import LogoEm from "../../public/assets/logoem.png";

const Header = () => {
  const { locale, setLocale, t } = useLanguage();

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

  // ✅ Smooth scroll helper (FAST + NO LAG)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveLink(id);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md py-2" : "py-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">

          {/* LOGO */}
          <div
            className={`col-start-1 col-end-2 flex items-center ${
              locale === "ar" ? "justify-end" : "justify-start"
            }`}
          >
            <Image
              src={LogoEm}
              alt="EMnovation Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center gap-2">

            <li
              onClick={() => scrollToSection("about")}
              className={`px-4 py-2 cursor-pointer transition ${
                activeLink === "about"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {t("about")}
            </li>

            <li
              onClick={() => scrollToSection("we-offer")}
              className={`px-4 py-2 cursor-pointer transition ${
                activeLink === "we-offer"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {t("whatWeOffer")}
            </li>

            <li
              onClick={() => scrollToSection("Courses")}
              className={`px-4 py-2 cursor-pointer transition ${
                activeLink === "Courses"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {t("courses")}
            </li>

          </ul>

          {/* LANGUAGE SWITCH */}
          <div className="col-start-8 col-end-9 flex items-center justify-end">
            <button
              onClick={toggle}
              className="text-sm border border-orange-500 px-3 py-1 rounded text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              {locale === "en" ? t("switchToAr") : t("switchToEn")}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAV */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t bg-white-500">
        <ul className="flex justify-between items-center px-4 py-2 text-black-500">

          <li onClick={() => scrollToSection("about")} className="flex flex-col items-center text-xs cursor-pointer">
            <span>ℹ️</span>
            {t("about")}
          </li>

          <li onClick={() => scrollToSection("we-offer")} className="flex flex-col items-center text-xs cursor-pointer">
            <span>🌐</span>
            {t("whatWeOffer")}
          </li>

          <li onClick={() => scrollToSection("Courses")} className="flex flex-col items-center text-xs cursor-pointer">
            <span>💰</span>
            {t("courses")}
          </li>

        </ul>
      </nav>
    </>
  );
};

export default Header;