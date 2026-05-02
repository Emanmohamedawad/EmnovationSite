import Image from "next/image";
import React, { useMemo, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* WE OFFER SECTION */}
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="max-w-screen-xl mb-6 py-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="we-offer"
      >
        <div
          className={`flex flex-col sm:flex-row gap-8 py-8 ${
            locale === "ar" ? "sm:flex-row-reverse text-right" : "text-left"
          }`}
        >
          {/* IMAGE */}
          <ScrollAnimationWrapper className="flex w-full justify-center">
            <motion.div className="w-full p-4" variants={scrollAnimation}>
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

          {/* TEXT */}
          <ScrollAnimationWrapper className="flex items-center w-full">
            <motion.div
              className={`flex flex-col justify-center w-full lg:w-9/12 mt-4 sm:mt-0`}
              variants={scrollAnimation}
            >
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-primary-600 dark:text-dark-text">
                {t("weOfferTitle")}
              </h3>

              <p className="my-2 text-neutral-700 dark:text-dark-text">
                {t("weOfferDescription")}
              </p>

              <ul className="text-neutral-700 dark:text-dark-text list-none space-y-2">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex items-center"
                  >
                    <span className="w-5 h-5 flex-shrink-0 mr-2">✅</span>

                    <span className="flex-1">{t(feature)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* SECOND SECTION - SCHOOL PROGRAMMING */}
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="max-w-screen-xl mb-6 py-6 sm:mt-10 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      >
        <div
          className={`flex flex-col sm:flex-row gap-8 py-8 ${
            locale === "ar" ? "sm:flex-row-reverse text-right" : "text-left"
          }`}
        >
          {/* IMAGE */}
          <ScrollAnimationWrapper className="flex w-full justify-center">
            <motion.div className="w-full p-4" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration2.png"
                alt="School Programming"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          {/* CARD */}
          <ScrollAnimationWrapper className="flex items-center w-full">
            <motion.div
              variants={scrollAnimation}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-white dark:bg-dark-surface rounded-2xl p-6 shadow-xl dark:shadow-none border border-gray-100 dark:border-dark-border"
            >
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-dark-text">
                {t("schoolProgrammingTitle")}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm md:text-base text-neutral-700 dark:text-dark-text leading-relaxed">
                {t("schoolProgrammingDesc")}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-accent-50 dark:bg-accent-600/10 text-accent-600 dark:text-accent-200 px-3 py-1 rounded-full text-xs font-medium border border-accent-200 dark:border-accent-600/40">
                  {t("featureCurriculumExplanation")}
                </span>

                <span className="bg-accent-50 dark:bg-accent-600/10 text-accent-600 dark:text-accent-200 px-3 py-1 rounded-full text-xs font-medium border border-accent-200 dark:border-accent-600/40">
                  {t("featureSimplified")}
                </span>

                <span className="bg-accent-50 dark:bg-accent-600/10 text-accent-600 dark:text-accent-200 px-3 py-1 rounded-full text-xs font-medium border border-accent-200 dark:border-accent-600/40">
                  {t("featurePractical")}
                </span>

                <span className="bg-accent-50 dark:bg-accent-600/10 text-accent-600 dark:text-accent-200 px-3 py-1 rounded-full text-xs font-medium border border-accent-200 dark:border-accent-600/40">
                  {t("featureExams")}
                </span>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/201153035834?text=${encodeURIComponent(
                  `Hello Emnovation - School Programming`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <button className="mt-6 bg-accent-500 text-white font-medium rounded-lg px-6 py-2 hover:bg-accent-600 transition shadow-md">
                  {t("startNow")}
                </button>
              </a>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Feature;
