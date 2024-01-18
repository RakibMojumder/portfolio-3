/* eslint-disable react/prop-types */
import { navItems } from "../../utils/data";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { AiFillFileImage, AiOutlineLogin } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";
import SectionItem from "./SectionItem";
import Profile from "./Profile";
import NavItem from "./NavItem";
import { useEffect } from "react";
import useScroll from "../../hooks/useScroll";
import handleScrollActiveLink from "../../lib/handleScrollActiveLink";

const Sidebar = ({ containerRef }) => {
  const [activeSection, setActiveSection] = useState("home");
  const scrollPosition = useScroll(containerRef);

  useEffect(() => {
    let container = containerRef.current;

    container.addEventListener("scroll", () =>
      handleScrollActiveLink(setActiveSection, scrollPosition)
    );

    return () => {
      container.removeEventListener("scroll", () =>
        handleScrollActiveLink(setActiveSection, scrollPosition)
      );
    };
  }, [activeSection, scrollPosition, containerRef]);

  return (
    <div
      id="sidebar"
      className={`hidden sm:block h-full sm:min-w-[26%] md:min-w-[210px] xl:max-w-[17%] border-r border-secondary/10 dark:border-slate-700 pt-5 pb-12 overflow-y-auto`}
    >
      <Profile />
      <div className="mt-4">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">
          Sections
        </h3>
        <ul className="flex flex-col mt-4 text-sm px-2">
          {navItems.map((item) => (
            <SectionItem
              key={item.id}
              href={item.href}
              label={item.label}
              icon={item.icon}
              activeSection={activeSection}
            />
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">Pages</h3>
        <ul className="flex flex-col mt-4 text-sm px-2">
          <NavItem
            href="/others/resume"
            label="Resume"
            icon={AiFillFileImage}
          />
          <NavItem href="/others/blog" label="Blog" icon={FaFileSignature} />
          <NavItem href="/others/login" label="Login" icon={AiOutlineLogin} />
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">Theme</h3>
        <ThemeSwitcher className={"mt-3 pl-10"} />
      </div>
    </div>
  );
};

export default Sidebar;
