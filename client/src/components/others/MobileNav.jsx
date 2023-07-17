import { useState } from "react";
import myImg from "../../assets/rakib.png";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="h-12 w-full px-3 backdrop-blur-xl sm:hidden flex justify-between items-center fixed top-0 z-50">
        <img src={myImg} alt="" className="h-9 w-9 rounded-full" />
        <Hamburger handleOpen={handleOpen} isOpen={isOpen} />
      </div>
      <AnimatePresence>
        {isOpen && <Navbar handleOpen={handleOpen} pathname={pathname} />}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
