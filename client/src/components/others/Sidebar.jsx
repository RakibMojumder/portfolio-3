import { navItems } from "../../utils/data";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { AiFillFileImage } from "react-icons/ai";
import SectionItem from "./SectionItem";
import Profile from "./Profile";
import NavItem from "./NavItem";
import { useEffect } from "react";
import useScroll from "../../hooks/useScroll";

const Sidebar = ({ containerRef }) => {
  const [activeSection, setActiveSection] = useState("home");
  const scrollPosition = useScroll(containerRef);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems.map((section) => {
        const element = document.getElementById(section.href);
        return {
          href: section.href,
          offset: element.offsetTop,
          height: element.offsetHeight,
        };
      });

      const currentSection = sectionOffsets.find(
        ({ offset, height }) =>
          scrollPosition >= offset - 50 && scrollPosition < offset + height - 50
      );

      if (currentSection) {
        setActiveSection(currentSection.href);
      }
    };

    let container = containerRef.current;

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, scrollPosition, containerRef]);

  return (
    <div
      id="sidebar"
      className={`hidden sm:block h-full sm:min-w-[26%] md:min-w-[210px] xl:max-w-[17%] border-r border-emerald-500/10 dark:border-slate-600 pt-5 pb-12 overflow-y-auto`}
    >
      <Profile />
      <div className="mt-4">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">
          Sections
        </h3>
        <ul className="flex flex-col mt-4 text-sm gap-y-6">
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
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">
          Others
        </h3>
        <ul className="flex flex-col mt-4 text-sm gap-y-5">
          <NavItem
            href="/others/resume"
            label="Resume"
            icon={AiFillFileImage}
          />
          <NavItem href="/others/blog" label="Blog" icon={AiFillFileImage} />
          <ThemeSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
