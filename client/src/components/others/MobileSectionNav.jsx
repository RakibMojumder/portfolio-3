import { useState } from "react";
import myImg from "../../assets/rakib.png";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

const MobileSectionNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="h-14 w-full px-3 backdrop-blur-xl sm:hidden flex justify-between items-center fixed top-0 z-50">
        <img src={myImg} alt="" className="h-9 w-9 rounded-full" />
        <Hamburger handleOpen={handleOpen} isOpen={isOpen} />
      </div>
      <AnimatePresence>
        {isOpen && <Navbar handleOpen={handleOpen} />}
      </AnimatePresence>
    </>
  );
};

export default MobileSectionNav;
