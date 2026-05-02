import React from "react";
import Image from "next/image";
import LogoEm from "../../public/assets/logoem.png";
import { useLanguage } from "../../utils/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  // ✅ FAST smooth scroll with fixed-header offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const offset = 12;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white-500 py-16 border-t  border-orange-500">
      <div className="max-w-screen-md mx-auto px-6 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <Image
          src={LogoEm}
          alt="EMnovation Logo"
          width={150}
          height={50}
          className="object-contain"
        />
        {/* Description */}
        <p className="text-black-500 max-w-md">{t("heroDescription")}</p>
        {/* NAVIGATION (NO react-scroll) */}
        <div className="hidden md:flex gap-8 text-gray-600">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-orange-500 transition"
          >
            {t("about")}
          </button>

          <button
            onClick={() => scrollToSection("we-offer")}
            className="hover:text-orange-500 transition"
          >
            {t("whatWeOffer")}
          </button>

          <button
            onClick={() => scrollToSection("Courses")}
            className="hover:text-orange-500 transition"
          >
            {t("courses")}
          </button>
        </div>
        {/* Social */}{" "}
        <div className="flex gap-4 mt-2">
          {" "}
          <a
            href="https://www.linkedin.com/in/emanmohameda2799/"
            target="_blank"
            className="text-orange-500 hover:text-black-600 transition "
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {" "}
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.7s.8-1.7 1.8-1.7 1.8.8 1.8 1.7-.8 1.7-1.8 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.8h-3v-10h3v1.4c.4-.7 1.2-1.6 2.8-1.6 2 0 3.6 1.3 3.6 4.1v6.1z" />{" "}
            </svg>{" "}
          </a>{" "}
          <a
            href="https://wa.me/201153035834?text=Hello%20EMnovation!%20I%20want%20to%20know%20more%20about%20your%20programming%20courses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-black-600 transition"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7"
              fill="currentColor"
            >
              {" "}
              <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.885.755 5.7 2.188 8.178L.046 32l7.629-2.104A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16.004C32 7.56 24.836.396 16 .396zm0 29.25c-2.602 0-5.15-.698-7.37-2.016l-.527-.312-4.527 1.25 1.207-4.414-.343-.558A13.19 13.19 0 012.75 16.396C2.75 9.08 8.684 3.146 16 3.146c7.316 0 13.25 5.934 13.25 13.25 0 7.316-5.934 13.25-13.25 13.25zm7.286-9.857c-.398-.199-2.356-1.164-2.72-1.296-.364-.133-.63-.199-.896.199-.266.398-1.03 1.296-1.263 1.562-.232.266-.465.299-.863.1-.398-.199-1.68-.619-3.2-1.974-1.182-1.055-1.98-2.356-2.213-2.754-.232-.398-.025-.613.174-.812.18-.18.398-.465.597-.697.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.896-2.157-1.23-2.954-.326-.782-.658-.676-.896-.688l-.764-.014c-.266 0-.697.1-1.063.498-.364.398-1.396 1.365-1.396 3.328s1.43 3.86 1.628 4.125c.199.266 2.812 4.293 6.816 6.016.952.41 1.695.654 2.274.836.956.305 1.826.262 2.514.159.767-.115 2.356-.962 2.688-1.891.332-.93.332-1.727.232-1.891-.1-.166-.365-.266-.764-.465z" />{" "}
            </svg>{" "}
          </a>{" "}
        </div>
        {/* Copyright */}
        <p className="text-gray-400 text-sm pt-4">
          © {new Date().getFullYear()} Emnovation Academy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
