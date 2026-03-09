import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useLanguage } from "../utils/LanguageContext";

// each string is a translation key
const features = [
  "structuredRoadmaps",
  "liveSessions",
  "learnTechnologies",
  "realProjects",
  "guidance",
  "supportWhatsapp",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t, locale } = useLanguage();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="max-w-screen-xl  mb-6 py-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="we-offer"
    >
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 ${locale === "ar" ? "text-right" : "text-left"}`}
      >
        {/* image column; flip order on arabic */}
        <ScrollAnimationWrapper
          className={`flex w-full justify-end ${locale === "ar" ? "sm:order-2" : "sm:order-1"}`}
        >
          <motion.div className="w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          className={locale === "ar" ? "sm:order-1" : "sm:order-2"}
        >
          <motion.div
            className={`flex flex-col justify-center w-full lg:w-9/12 mt-4 sm:mt-0 ${
              locale === "ar" ? "items-start" : "items-end"
            }`}
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              {t("weOfferTitle")}
            </h3>
            <p className="my-2 text-black-500">{t("weOfferDescription")}</p>
<ul className={`text-black-500 self-start list-none space-y-2`}>
  {features.map((feature, index) => (
    <motion.li
      key={feature}
      custom={{ duration: 2 + index }}
      variants={scrollAnimation}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="flex items-center"
    >
      {/* أيقونة */}
      <span
        className={`w-5 h-5 flex-shrink-0 mr-2 ${
          locale === "ar" ? "order-2 ml-2 mr-0" : "order-1"
        }`}
      >
        ✅
      </span>

      {/* النص */}
      <span className={`flex-1 ${locale === "ar" ? "order-1 text-right" : "order-2 text-left"}`}>
        {t(feature)}
      </span>
    </motion.li>
  ))}
</ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
