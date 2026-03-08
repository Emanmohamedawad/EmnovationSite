import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Html from "../public/assets/courses/html.jpg";
import Css from "../public/assets/courses/css.jpg";
import Js from "../public/assets/courses/js.jpg";
import ReactImg from "../public/assets/courses/react.jpg";
import Bootstrap from "../public/assets/courses/bootstrap.jpg";
import UiUx from "../public/assets/courses/uiux.jpg";
import Graphic from "../public/assets/courses/graphic.jpg";
import Sql from "../public/assets/courses/sql.jpg";
import Node from "../public/assets/courses/node.jpg";

const Courses = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "HTML",
      image: Html,
      topics: ["Tags", "Forms", "Semantic", "SEO Basics"],
      price: "800 EGP",
    },
    {
      id: 2,
      title: "CSS",
      image: Css,
      topics: ["Flexbox", "Grid", "Responsive", "Animations"],
      price: "900 EGP",
    },
    {
      id: 3,
      title: "JavaScript",
      image: Js,
      topics: ["Variables", "DOM", "Events", "API"],
      price: "1200 EGP",
    },
    {
      id: 4,
      title: "React",
      image: ReactImg,
      topics: ["Components", "Hooks", "Redux", "Routing"],
      price: "1500 EGP",
    },
    {
      id: 5,
      title: "Bootstrap",
      image: Bootstrap,
      topics: ["Grid System", "Components", "Responsive Layout"],
      price: "700 EGP",
    },
    {
      id: 6,
      title: "UI / UX Design",
      image: UiUx,
      topics: ["Design Principles", "Wireframes", "Figma Basics"],
      price: "1000 EGP",
    },

    {
      id: 7,
      title: "Graphic Design",
      image: Graphic,
      topics: ["Photoshop", "Illustrator", "Branding"],
      price: "1200 EGP",
    },
    {
      id: 8,
      title: "SQL",
      image: Sql,
      topics: ["Queries", "Joins", "Database Design"],
      price: "1000 EGP",
    },
    {
      id: 9,
      title: "Node.js",
      image: Node,
      topics: ["Express", "APIs", "Authentication"],
      price: "1400 EGP",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-16"
      id="Courses"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Learn Tech Skills With Me 🚀
            </h2>

            <p className="text-gray-500 mt-4">
              Practical courses to help you start your career in tech
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <ScrollAnimationWrapper key={course.id}>
              <motion.div
                variants={scrollAnimation}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{course.title}</h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {course.topics.length} Topics
                  </p>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
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
  className="bg-white backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-2xl border border-gray-200 relative"
  onClick={(e) => e.stopPropagation()}
  style={{backgroundColor:"white"}}
>
    {/* Close */}
    <button
      onClick={() => setSelectedCourse(null)}
      className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-xl"
    >
      ✕
    </button>

    {/* Title */}
    <h3 className="text-2xl font-bold mb-4 text-gray-800">
      {selectedCourse.title}
    </h3>

    {/* Topics */}
    <ul className="space-y-2 mb-6 text-gray-600">
      {selectedCourse.topics.map((topic, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-orange-500">•</span>
          {topic}
        </li>
      ))}
    </ul>

    {/* Price */}
    <p className="font-semibold mb-6 text-lg text-gray-800">
      Price: {selectedCourse.price}
    </p>

    {/* WhatsApp */}
    <a
      href="https://wa.me/201XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition"
    >
      Contact on WhatsApp
    </a>
  </div>
</div>
      )}
    </div>
  );
};

export default Courses;