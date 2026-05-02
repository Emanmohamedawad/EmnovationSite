import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-accent-500 text-accent-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-accent-500 hover:text-white transition-all hover:shadow-lg ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
