import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import TechSlider from "./TechSlider";
import { useLanguage } from "../utils/LanguageContext";

const Hero = ({
  listUser = [
    {
      name: "Students",
      number: "20",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "ProgrammingCourses",
      number: "10",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
    {
      name: "ExpertInstructors",
      number: "5",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const { t } = useLanguage();
  return (
    <div
      className="max-w-screen-xl mt-28 px-4 sm:px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 items-center"
          variants={scrollAnimation}
        >
          {/* Left Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary-600 dark:text-dark-text leading-snug">
              {t("heroTitle")}
            </h1>
            <p className="text-neutral-700 dark:text-dark-text mt-4 mb-6">
              {t("heroDescription")}
            </p>
            <div className="text-center">
              <a href="#Courses">
                <ButtonPrimary>{t("startLearning")}</ButtonPrimary>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center sm:justify-end w-full">
            <motion.div className="w-full max-w-md" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustration"
                width={612}
                height={483}
                layout="responsive"
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats Section */}
      {/* <div className="relative w-full flex mt-12">
    <ScrollAnimationWrapper className="rounded-lg w-full grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 bg-white-500 z-10">
      {listUser.map((listUsers, index) => (
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center py-4 sm:py-6 px-4"
          key={index}
          custom={{ duration: 2 + index }}
          variants={scrollAnimation}
        >
          <div className="flex items-center justify-center bg-orange-100 w-12 h-12 rounded-full mb-2 sm:mb-0 mx-2">
            <img src={listUsers.icon} className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl text-black-600 font-bold">{listUsers.number}+</p>
            <p className="text-lg text-black-500 text-center sm:text-left">{t(listUsers.name)}</p>
          </div>
        </motion.div>
      ))}
    </ScrollAnimationWrapper>

    <div
      className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
      style={{ filter: "blur(114px)" }}
    ></div>
  </div> */}
    </div>
  );
};

export default Hero;
