import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { IoServer } from "react-icons/io5";
import { HiCheckCircle, HiOutlineLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { useState, useRef } from "react";
import Image from "./Image";
import { useEffect } from "react";
import ScrollIndicate from "./ScrollIndicate";
import useClickOutside from "../../hooks/useClickOutside";

const ProjectDetails = ({ project, handleOpen }) => {
  const ref = useRef();
  useClickOutside(ref, handleOpen);
  const [showIndicate, setShowIndicate] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageSource, setImageSource] = useState(project.image[0]);

  useEffect(() => {
    ref.current.addEventListener("scroll", () => {
      if (ref.current.scrollTop > 20) {
        setShowIndicate(false);
      }
    });
  }, []);

  const changeImageSource = (index) => {
    setImageSource(project.image[index]);
    setActiveIndex(index);
  };

  return (
    <motion.div
      key={project._Id}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]"
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
        className={`h-[90vh] md:h-[80vh] w-[90%] md:w-1/2 lg:w-2/5 rounded-md overflow-y-auto relative purple-scroll bg-neutral-900 border border-white/10`}
      >
        <button
          onClick={handleOpen}
          className="md:h-10 h-8 md:w-10 w-8 bg-secondary dark:bg-purple-500 flex md:hidden justify-center items-center text-white rounded-full fixed top-1 right-1"
        >
          <RxCross1 size={20} />
        </button>
        {showIndicate && <ScrollIndicate className={"bottom-[70px]"} />}
        <div className="grid grid-cols-1 gap-y-20 md:gap-10 text-gray-200 p-5 md:p-7">
          <div>
            <Image src={imageSource} height={350} alt="project Image" />
            <div className="flex justify-center gap-4 mt-4">
              {project.image.slice(0, 5).map((src, index) => (
                <button
                  key={index}
                  onClick={() => changeImageSource(index)}
                  className={`h-10 lg:h-20 w-full ${
                    index === activeIndex &&
                    "border-2 dark:border-purple-500 border-secondary"
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
            <h1 className="text-3xl dark:text-purple-500 text-secondary">
              {project.name}
              <span className="text-xl font-normal text-gray-300">
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
                    className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-secondary dark:bg-purple-500/80 text-black dark:text-white"
                  >
                    <HiOutlineLink />
                    <span>Live</span>
                  </a>
                </div>
                {project.link?.githubClient && (
                  <div className="inline-flex">
                    <a
                      href={project.link?.githubClient}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-secondary dark:bg-purple-500/80 text-black dark:text-white"
                    >
                      <AiFillGithub />
                      <span>Client</span>
                    </a>
                  </div>
                )}

                {project.link?.githubServer && (
                  <div className="inline-flex">
                    <a
                      href={project.link?.githubServer}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-1 inline-flex items-center rounded-md space-x-2 font-semibold bg-secondary dark:bg-purple-500/80 text-black dark:text-white"
                    >
                      <IoServer />
                      <span>Server</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* FEATURES */}
            {project?.features && (
              <div className="mt-8">
                <h3 className="text-xl">Features</h3>
                <div className="space-y-3 mt-2">
                  {project?.features?.map((feature, index) => (
                    <div key={index} className="flex gap-3 items-start text-sm">
                      <HiCheckCircle className="flex-shrink-0 text-xl dark:text-primary text-secondary" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TECHNOLOGY */}
            <div className="mt-8">
              <h3 className="text-xl">Technology</h3>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {project?.technology?.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 py-0.5 text-white border border-secondary/[.50] dark:border-primary rounded-full`}
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
