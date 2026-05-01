import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../utils/LanguageContext";
// import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Html from "../public/assets/courses/html.jpg";
import Css from "../public/assets/courses/css.jpg";
import Js from "../public/assets/courses/js.jpg";
import ReactImg from "../public/assets/courses/react.jpg";
import BootstrapTailwind from "../public/assets/courses/bootstrap-tailwind.png";
import UiUx from "../public/assets/courses/uiux.jpg";
import Graphic from "../public/assets/courses/graphic.jpg";
import Sql from "../public/assets/courses/sql.jpg";
import Node from "../public/assets/courses/node.jpg";
import ProgrammingFundamentals from "../public/assets/courses/programing.jpg";
import DataStructures from "../public/assets/courses/database.jpg";
import SoftwareEngineering from "../public/assets/courses/software.jpg";
import DataAnalysis from "../public/assets/courses/data.jpg";
import CyberSecurity from "../public/assets/courses/cyber.jpg";

const Courses = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      titleKey: "Fundamentals Programming",
      image: ProgrammingFundamentals,
      sessions: 8,
      pricePerSession: 12,
      currency: "SAR",
      topicsKeys: [
        "pfTopic1",
        "pfTopic2",
        "pfTopic3",
        "pfTopic4",
        "pfTopic5",
        "pfTopic6",
        "pfTopic7",
        "pfTopic8",
      ],
    },

    {
      id: 2,
      titleKey: "Data Stuctures",
      image: DataStructures,
      sessions: 8,
      pricePerSession: 15,
      currency: "SAR",
      topicsKeys: [
        "dsTopic1",
        "dsTopic2",
        "dsTopic3",
        "dsTopic4",
        "dsTopic5",
        "dsTopic6",
        "dsTopic7",
        "dsTopic8",
      ],
    },

    {
      id: 3,
      titleKey: "Software Engineering",
      image: SoftwareEngineering,
      sessions: 7,
      pricePerSession: 15,
      currency: "SAR",
      topicsKeys: [
        "seTopic1",
        "seTopic2",
        "seTopic3",
        "seTopic4",
        "seTopic5",
        "seTopic6",
        "seTopic7",
        "seTopic8",
      ],
    },
    {
      id: 4,
      titleKey: "courseHtml",
      image: Html,
      sessions: 6,
      pricePerSession: 10,
      currency: "SAR",
      topicsKeys: [
        "htmlTopic1",
        "htmlTopic2",
        "htmlTopic3",
        "htmlTopic4",
        "htmlTopic5",
        "htmlTopic6",
        "htmlTopic7",
        "htmlTopic8",
      ],
    },

    {
      id: 5,
      titleKey: "courseCss",
      image: Css,
      sessions: 7,
      pricePerSession: 10,
      currency: "SAR",
      topicsKeys: [
        "cssTopic1",
        "cssTopic2",
        "cssTopic3",
        "cssTopic4",
        "cssTopic5",
        "cssTopic6",
        "cssTopic7",
        "cssTopic8",
      ],
    },

    {
      id: 6,
      titleKey: "courseJavascript",
      image: Js,
      sessions: 8,
      pricePerSession: 15,
      currency: "SAR",
      topicsKeys: [
        "jsTopic1",
        "jsTopic2",
        "jsTopic3",
        "jsTopic4",
        "jsTopic5",
        "jsTopic6",
        "jsTopic7",
        "jsTopic8",
        "jsTopic9",
      ],
    },

    {
      id: 7,
      titleKey: "courseReact",
      image: ReactImg,
      sessions: 8,
      pricePerSession: 15,
      currency: "SAR",
      topicsKeys: [
        "reactTopic1",
        "reactTopic2",
        "reactTopic3",
        "reactTopic4",
        "reactTopic5",
        "reactTopic6",
        "reactTopic7",
        "reactTopic8",
        "reactTopic9",
      ],
    },

    {
      id: 8,
      titleKey: "courseBootstrapTailwind",
      image: BootstrapTailwind,
      sessions: 5,
      pricePerSession: 10,
      currency: "SAR",
      topicsKeys: [
        "bootstrapTailwindTopic1",
        "bootstrapTailwindTopic2",
        "bootstrapTailwindTopic3",
        "bootstrapTailwindTopic4",
        "bootstrapTailwindTopic5",
        "bootstrapTailwindTopic6",
        "bootstrapTailwindTopic7",
        "bootstrapTailwindTopic8",
        "bootstrapTailwindTopic9",
        "bootstrapTailwindTopic10",
      ],
    },

    {
      id: 9,
      titleKey: "courseUiUx",
      image: UiUx,
      sessions: 6,
      pricePerSession: 10,
      currency: "SAR",
      topicsKeys: [
        "uiuxTopic1",
        "uiuxTopic2",
        "uiuxTopic3",
        "uiuxTopic4",
        "uiuxTopic5",
        "uiuxTopic6",
        "uiuxTopic7",
        "uiuxTopic8",
      ],
    },

    {
      id: 10,
      titleKey: "courseGraphic",
      image: Graphic,
      sessions: 6,
      pricePerSession: 10,
      currency: "SAR",
      topicsKeys: [
        "graphicTopic1",
        "graphicTopic2",
        "graphicTopic3",
        "graphicTopic4",
        "graphicTopic5",
        "graphicTopic6",
        "graphicTopic7",
        "graphicTopic8",
      ],
    },

    {
      id: 11,
      titleKey: "courseSql",
      image: Sql,
      sessions: 5,
      pricePerSession: 10,
      currency: "SAR",
      topicsKeys: [
        "sqlTopic1",
        "sqlTopic2",
        "sqlTopic3",
        "sqlTopic4",
        "sqlTopic5",
        "sqlTopic6",
        "sqlTopic7",
        "sqlTopic8",
      ],
    },

    {
      id: 12,
      titleKey: "Data Analysis",
      image: DataAnalysis,
      sessions: 7,
      pricePerSession: 15,
      currency: "SAR",
      topicsKeys: [
        "daTopic1",
        "daTopic2",
        "daTopic3",
        "daTopic4",
        "daTopic5",
        "daTopic6",
        "daTopic7",
        "daTopic8",
      ],
    },

    {
      id: 13,
      titleKey: "Cyber Security",
      image: CyberSecurity,
      sessions: 7,
      pricePerSession: 15,
      currency: "SAR",
      topicsKeys: [
        "csTopic1",
        "csTopic2",
        "csTopic3",
        "csTopic4",
        "csTopic5",
        "csTopic6",
        "csTopic7",
        "csTopic8",
      ],
    },
  ];

  return (
    <div
      className="bg-white-200 w-full "
      id="Courses"
    >

      {/* section privte session */}
      <div className="py-6 bg-orange-500 text-white-500 text-center">
        <span className="text-lg font-semibold block">
          {t("privateSessionTitle")}
        </span>

        <span className="mt-2 text-sm text-center block">
          {t("privateSessionDesc")}
        </span>
        <a
          href={`https://wa.me/201153035834?text=${encodeURIComponent(
            `Hello Emnovation`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="my-6 font-semibold bg-transparnt border-white-500 border rounded-[10px] text-white-500 hover:text-orange-500 hover:bg-white-500 px-6 py-1">
            {t("contactWhatsapp")}
          </button>
        </a>
      </div>
      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 my-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("coursesSectionTitle")}
          </h2>

          <p className="text-gray-500 mt-4">{t("coursesSectionDescription")}</p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <Image
                src={course.image}
                alt={t(course.titleKey)}
                width={400}
                height={250}
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{t(course.titleKey)}</h3>

                <p className="text-gray-500 text-sm mt-1">
                  {t("durationLabel")} : {course.sessions} {t("weeksLabel")}
                </p>

                <button
                  onClick={() => setSelectedCourse(course)}
                  className="mt-4 bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                  style={{
                    color: "#fff",
                  }}
                >
                  {t("viewDetails")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white m-5 rounded-2xl p-8 w-full max-w-md shadow-2xl border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#fff" }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              {t(selectedCourse.titleKey)}
            </h3>

            {/* Course Info */}
            <div className="mb-4 text-sm text-gray-500">
              {/* <p>
                {t("durationLabel")} : {selectedCourse.sessions}{" "}
                {t("weeksLabel")}
              </p> */}
              {/* <p>
                {t("pricePerSessionLabel")} : {selectedCourse.pricePerSession}{" "}
                {selectedCourse.currency}
              </p>
              <p className="font-semibold text-gray-700">
                {t("totalLabel")} :{" "}
                {selectedCourse.pricePerSession * selectedCourse.sessions}{" "}
                {selectedCourse.currency}
              </p> */}
            </div>

            {/* Topics */}
            <ul className="space-y-2 mb-6 text-gray-600 max-h-48 overflow-y-auto pr-2">
              {selectedCourse.topicsKeys.map((key, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-orange-500">•</span>
                  {t(key)}
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/201153035834?text=${encodeURIComponent(
                `${t("whatsappMessagePrefix")} ${t(selectedCourse.titleKey)}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition"
              style={{ color: "#fff" }}
            >
              {t("contactWhatsapp")}
            </a>
            {/* Note */}
            <p className="text-sm text-gray-700 mt-4 text-center bg-gray-50 p-3 rounded-lg border border-gray-100">
              {t("firstSessionFreeNote")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
