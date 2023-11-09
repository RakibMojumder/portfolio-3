import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { IoServer } from "react-icons/io5";
import { HiCheckCircle, HiOutlineLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { useState, useRef } from "react";
import Image from "./Image";
import { useEffect } from "react";
import { useTheme } from "../../provider/ThemeProvider";

const ProjectDetails = ({ project, handleOpen }) => {
  const ref = useRef();
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageSource, setImageSource] = useState(project.image[0]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        console.log("object");
        handleOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleOpen]);

  const changeImageSource = (index) => {
    setImageSource(project.image[index]);
    setActiveIndex(index);
  };

  return (
    <motion.div
      key={project._Id}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
        exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
        className={`h-[90vh] md:h-[80vh] w-[95%] lg:w-1/2 bg-emerald-100/[0.03] dark:bg-purple-200/10 backdrop-blur-2xl rounded-md overflow-y-auto relative ${
          theme ? "green-scroll" : "purple-scroll"
        }`}
      >
        <button
          onClick={handleOpen}
          className="md:h-10 h-8 md:w-10 w-8 bg-emerald-500 dark:bg-purple-500 flex md:hidden justify-center items-center text-white rounded-full fixed top-1 right-1"
        >
          <RxCross1 size={20} />
        </button>
        <div className="grid grid-cols-1 gap-y-20 md:gap-10 text-gray-200 p-5 md:p-10">
          <div>
            <Image src={imageSource} height={350} alt="project Image" />
            <div className="flex justify-center gap-4 mt-4">
              {project.image.map((src, index) => (
                <button
                  key={index}
                  onClick={() => changeImageSource(index)}
                  className={`h-10 lg:h-20 w-full ${
                    index === activeIndex &&
                    "border-2 dark:border-purple-500 border-emerald-500"
                  }`}
                >
                  <Image
                    src={src}
                    className="h-full w-full"
                    alt="project image"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-semibold dark:text-purple-500 text-emerald-500">
              {project.name}
              <span className="text-lg font-normal text-gray-300">
                {" "}
                - {project.description}
              </span>
            </h1>

            {/* SOURCE CODE */}
            <div className="mt-8">
              <h3 className="text-xl">Source Code</h3>
              <div className="flex flex-wrap gap-3 mt-2 text-sm">
                <div className="inline-flex">
                  <a
                    href={project.link.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-emerald-400/60 dark:bg-purple-500/80"
                  >
                    <HiOutlineLink />
                    <span>Live</span>
                  </a>
                </div>
                <div className="inline-flex">
                  <a
                    href={project.link.githubClient}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-emerald-400/60 dark:bg-purple-500/80"
                  >
                    <AiFillGithub />
                    <span>Client</span>
                  </a>
                </div>
                <div className="inline-flex">
                  <a
                    href={project.link.githubServer}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-emerald-400/60 dark:bg-purple-500/80"
                  >
                    <IoServer />
                    <span>Server</span>
                  </a>
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-8">
              <h3 className="text-xl">Features</h3>
              <div className="space-y-3 mt-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start text-sm">
                    <HiCheckCircle className="flex-shrink-0 text-xl dark:text-primary text-emerald-500" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGY */}
            <div className="mt-8">
              <h3 className="text-xl">Technology</h3>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 py-0.5 text-white border border-emerald-500 dark:border-primary rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
