import { NavLink } from "react-router-dom";

const NavItem = ({ href, icon: Icon, label }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center gap-5 pl-10 ${
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
              isActive ? "bg-emerald-500 dark:bg-primary" : "bg-white/10"
            }`}
          >
            <Icon size={18} />
          </span>
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
};

export default NavItem;
