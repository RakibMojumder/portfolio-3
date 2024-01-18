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
    <motion.div layout initial={{ opacity: 0.2 }} animate={{ opacity: 1 }}>
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
          className="group w-full py-1 bg-secondary dark:text-white dark:bg-primary text-sm rounded-full flex justify-center items-center"
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
