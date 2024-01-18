import { useState } from "react";
import { skillsData } from "../../utils/data";
import SkillCard from "../others/SkillCard";
import Tabs from "../others/Tabs";
import Title from "../others/Title";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const tabs = [
  { id: 1, label: "All" },
  { id: 2, label: "Frontend" },
  { id: 3, label: "Backend" },
  { id: 4, label: "Tools" },
];

const Skills = ({ targetRef }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredTab, setHoveredTab] = useState("");
  const [skills, setSkills] = useState(skillsData);
  const [filteredData, setFilteredData] = useState(skillsData);

  const handledFilteredProjects = (item) => {
    setActiveTab(item);
    if (item == "All") {
      setFilteredData(skills);
    } else {
      const findProjects = skills.filter((pr) => pr.label === item);
      setFilteredData(findProjects);
    }
  };

  return (
    <section
      id="skills"
      ref={targetRef}
      className="pt-20 pb-32 mb-20 w-full overflow-x-hidden"
    >
      <div>
        <Title labelOne={"Expertise"} labelTwo={"Skills"} />
        <Tabs
          tabs={tabs}
          data={skills}
          activeTab={activeTab}
          hoveredTab={hoveredTab}
          setActiveTab={setActiveTab}
          setHoveredTab={setHoveredTab}
          setFilteredData={setFilteredData}
          handler={handledFilteredProjects}
        />

        <m.div
          layout
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-6 px-5 sm:p-4 lg:px-8"
        >
          <AnimatePresence>
            {filteredData.map((skill) => (
              <SkillCard key={skill.id} skill={skill} length={skills.length} />
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
};

export default Skills;
