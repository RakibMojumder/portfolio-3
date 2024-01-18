import Project from "../others/Project";
import { useQuery } from "react-query";
import axios from "axios";
import Title from "../others/Title";
import Tabs from "../others/Tabs";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const tabs = [
  { id: 1, label: "All" },
  { id: 2, label: "React JS" },
  { id: 3, label: "Next JS" },
  { id: 4, label: "JavaScript" },
  { id: 5, label: "Redux" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredTab, setHoveredTab] = useState("");
  const [projects, setProjects] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { isLoading } = useQuery(["projects"], async () => {
    const res = await axios.get(
      `https://portfolio-server-mocha-ten.vercel.app/project`
    );
    setProjects(res.data.data);
    setFilteredData(res.data.data);
    return null;
  });

  const handledFilteredProjects = (item) => {
    setActiveTab(item);
    if (item == "All") {
      setFilteredData(projects);
    } else {
      const findProjects = projects.filter((pr) =>
        pr.technology.find((i) => i == item)
      );
      setFilteredData(findProjects);
    }
  };

  if (isLoading) return;

  return (
    <section id="project" className="pt-20 pb-32 sm:pt-0 overflow-hidden">
      <Title labelOne={"Featured"} labelTwo={"Projects"} />
      <Tabs
        tabs={tabs}
        data={projects}
        activeTab={activeTab}
        hoveredTab={hoveredTab}
        setActiveTab={setActiveTab}
        setHoveredTab={setHoveredTab}
        setFilteredData={setFilteredData}
        handler={handledFilteredProjects}
      />
      <m.div
        layout
        className="px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
      >
        <AnimatePresence>
          {filteredData.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </AnimatePresence>
      </m.div>
    </section>
  );
};

export default Projects;
