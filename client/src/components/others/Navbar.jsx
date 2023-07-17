import { motion } from "framer-motion";
import myImage from "../../assets/rakib.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = ({ handleOpen }) => {
  return (
    <motion.div
      key="Navbar"
      initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut", type: "spring" },
      }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="min-w-[92%] h-[90vh] bg-gray-600/60 backdrop-blur-xl py-6 px-3 sm:hidden overflow-y-auto z-50 fixed top-16 left-1/2 -translate-x-1/2 text-white rounded-md"
    >
      <div className="pb-4 border-b">
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
      <div className="flex flex-col justify-center items-center gap-y-5 py-5">
        <HashLink to="#home" smooth onClick={handleOpen}>
          Home
        </HashLink>
        <HashLink to="#about" smooth onClick={handleOpen}>
          About
        </HashLink>
        <HashLink to="#project" smooth onClick={handleOpen}>
          Project
        </HashLink>
        <HashLink to="#skills" smooth onClick={handleOpen}>
          Skills
        </HashLink>
        <HashLink to="#service" smooth onClick={handleOpen}>
          Services
        </HashLink>
        <HashLink to="#contact" smooth onClick={handleOpen}>
          Contact
        </HashLink>
        <Link to="others/resume">Resume</Link>
        <Link to="others/blog">Blog</Link>
        <ThemeSwitcher />
      </div>
    </motion.div>
  );
};

export default Navbar;
