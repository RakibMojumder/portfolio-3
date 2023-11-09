import Project from "../others/Project";
import { useQuery } from "react-query";
import axios from "axios";
import { motion } from "framer-motion";
import Title from "../others/Title";

const Projects = () => {
  const { data: projects, isLoading } = useQuery("projects", async () => {
    const res = await axios.get(
      "https://portfolio-server-mocha-ten.vercel.app/project"
    );
    return res.data.data;
  });

  if (isLoading) return;

  return (
    <section id="project" className="pt-20 pb-32 sm:pt-0 overflow-x-hidden">
      <Title labelOne={"Featured"} labelTwo={"Projects"} />
      {/* <motion.h1
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          ease: "easeIn",
          bounce: 0.5,
        }}
        className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-neutral-200 mb-10 pt-4"
      >
        My <span className="text-emerald-500 dark:text-primary">Projects</span>
      </motion.h1> */}
      <div className="px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
