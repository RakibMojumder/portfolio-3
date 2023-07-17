import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "./Image";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "framer-motion";

const Project = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 1,
        ease: "easeIn",
        bounce: 0.3,
      }}
    >
      <Image src={project.image[0]} height={208} />
      <div className="mt-3">
        <h3 className="text-neutral-50 font-medium">{project.name}</h3>
        <p className="text-sm text-neutral-400 mt-1 mb-4">
          {project.description.length > 50
            ? project.description.slice(0, 50) + "..."
            : project.description}
        </p>
        <button
          onClick={handleOpen}
          className="group w-full py-1 bg-emerald-500 dark:bg-primary text-white text-sm rounded-full flex justify-center items-center"
        >
          <span>Details</span>
          <BiChevronRight
            size={20}
            className="transition-all duration-300 group-hover:translate-x-2.5"
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <ProjectDetails project={project} handleOpen={handleOpen} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
