/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";
import { useState } from "react";
import handleNavigate from "../../lib/handleNavigate";

const SectionItem = ({ href, label, icon: Icon, activeSection }) => {
  const [hoverHref, setHoverHref] = useState("");

  return (
    <a
      href={`#${href}`}
      onClick={(e) => handleNavigate(e)}
      onMouseOver={() => setHoverHref(href)}
      onMouseLeave={() => setHoverHref("")}
      data-active={activeSection == href}
      className={`flex items-center gap-5 pl-10 py-2.5 relative z-10 ${
        activeSection == href
          ? "text-neutral-100"
          : "text-neutral-400 dark:text-neutral-500"
      }`}
    >
      <span
        className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-300 ${
          activeSection === href
            ? "bg-secondary text-black dark:text-white dark:bg-primary"
            : "bg-white/10"
        }`}
      >
        <Icon size={18} />
      </span>
      <span>{label}</span>
      {href === hoverHref && (
        <m.div
          className="absolute bottom-0 left-0 h-full w-full bg-neutral-900 dark:bg-primary/[.13] rounded-lg -z-10"
          layoutId="navbar"
          aria-hidden="true"
          transition={{
            type: "spring",
            // bounce: 0.1,
            // stiffness: 130,
            // damping: 9,
            duration: 0.3,
          }}
        ></m.div>
      )}
    </a>
  );
};
export default SectionItem;
