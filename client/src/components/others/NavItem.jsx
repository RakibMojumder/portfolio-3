import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

const NavItem = ({ href, icon: Icon, label }) => {
  const [hoverHref, setHoverHref] = useState("");

  return (
    <NavLink
      to={href}
      onMouseOver={() => setHoverHref(href)}
      onMouseLeave={() => setHoverHref("")}
      className={({ isActive }) =>
        `flex items-center gap-5 pl-10 py-2.5 z-10 relative ${
          isActive
            ? "text-neutral-100"
            : "text-neutral-400 dark:text-neutral-500"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`h-7 w-7 flex justify-center items-center rounded-lg transition-all duration-500 ${
              isActive
                ? "bg-secondary text-black dark:text-white dark:bg-primary"
                : "bg-white/10"
            }`}
          >
            <Icon size={18} />
          </span>
          <span>{label}</span>
          {hoverHref == href && (
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
        </>
      )}
    </NavLink>
  );
};

export default NavItem;
