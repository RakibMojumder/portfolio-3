import { motion } from "framer-motion";
import myImage from "../../assets/rakib.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = ({ handleOpen }) => {
  return (
    <motion.div
      key="Navbar"
      initial={{ opacity: 0, x: "-50%" }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut", type: "spring" },
      }}
      exit={{ opacity: 0, x: "-50%" }}
      className="min-w-[75%] h-full bg-neutral-900 backdrop-blur-xl pt-6 pb-10 pr-0.5 sm:hidden overflow-y-auto z-50 fixed top-0 left-0 text-white rounded-md border-r border-neutral-600"
    >
      <div className="pb-4 border-b border-b-neutral-600">
        <img
          src={myImage}
          alt="my image"
          className="w-28 mx-auto rounded-full"
        />
        <div className="mt-1 text-center">
          <h3 className="text-lg font-semibold">Rakib Ahmed</h3>
          <p className="block sm:hidden md:block text-xs">
            sujonahmed45a4@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center divide-y divide-neutral-600">
        <HashLink
          to="#home"
          smooth
          onClick={handleOpen}
          className="w-full py-1.5 pl-4"
        >
          Home
        </HashLink>
        <HashLink
          to="#about"
          smooth
          onClick={handleOpen}
          className="w-full py-1.5 pl-4"
        >
          About
        </HashLink>
        <HashLink
          to="#project"
          smooth
          onClick={handleOpen}
          className="w-full py-1.5 pl-4"
        >
          Project
        </HashLink>
        <HashLink
          to="#skills"
          smooth
          onClick={handleOpen}
          className="w-full py-1.5 pl-4"
        >
          Skills
        </HashLink>
        <HashLink
          to="#service"
          smooth
          onClick={handleOpen}
          className="w-full py-1.5 pl-4"
        >
          Services
        </HashLink>
        <HashLink
          to="#contact"
          smooth
          onClick={handleOpen}
          className="w-full py-1.5 pl-4"
        >
          Contact
        </HashLink>
        <ThemeSwitcher className={"pt-3 border-b pl-4"} />
      </div>
    </motion.div>
  );
};

export default Navbar;
