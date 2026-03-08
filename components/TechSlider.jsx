import React from "react";

const techIcons = [
  "/assets/tech/react.svg",
  "/assets/tech/javascript.svg",
  "/assets/tech/typescript.svg",
  "/assets/tech/html.svg",
//   "/assets/tech/css.svg",
  "/assets/tech/bootstrap.svg",
//   "/assets/tech/tailwind.svg",
//   "/assets/tech/git.svg",
];

const TechSlider = () => {
  return (
    <div className="overflow-hidden mt-16">
      <div className="flex animate-scroll gap-12 items-center w-max">
        {[...techIcons, ...techIcons].map((icon, index) => (
          <img
            key={index}
            src={icon}
            className="h-10 w-auto opacity-70 grayscale hover:grayscale-0 transition"
            alt="tech icon"
          />
        ))}
      </div>
    </div>
  );
};

export default TechSlider;