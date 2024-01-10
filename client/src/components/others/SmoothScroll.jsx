import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { navItems } from "../../utils/data";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

const options = {
  damping: 0.02,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = ({ setActiveSection }) => {
  useEffect(() => {
    try {
      let container = document.getElementById("container");

      if (container) {
        Scrollbar.use(OverscrollPlugin);
        const scrollbar = Scrollbar.init(container, options);

        scrollbar.addListener(() => {
          const sectionOffsets = navItems.map((section) => {
            const element = document.getElementById(section.href);
            return {
              href: section.href,
              offset: element.offsetTop,
              height: element.offsetHeight,
            };
          });

          const currentSection = sectionOffsets.find(
            ({ offset, height }) => scrollbar.scrollTop >= offset - 50
          );
          console.log(sectionOffsets);
          console.log(currentSection);
          setActiveSection(currentSection.href);
        });
      }
    } catch (error) {
      console.log(error);
    }

    return () => {
      if (Scrollbar) Scrollbar.destroy(container);
    };
  }, [setActiveSection]);

  return null;
};

export default SmoothScroll;
