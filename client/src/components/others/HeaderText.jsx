import React from "react";
import { motion as m } from "framer-motion";

const HeadingText = ({ label, delay, small }) => {
  return (
    <m.span
      initial={{ y: -40, x: -80, opacity: 0 }}
      animate={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: { duration: 0.75, delay },
      }}
      className={`header-text inline-block bg-neutral-800 dark:bg-neutral-400 text-white dark:text-[#1B1B1B] uppercase font-extrabold lg:[word-spacing:15px] font-robotoSlab leading-none ${
        small
          ? "text-4xl md:text-5xl lg:text-[75px]"
          : "text-5xl md:text-[66px] lg:text-8xl"
      }`}
    >
      {label}
    </m.span>
  );
};

export default HeadingText;
