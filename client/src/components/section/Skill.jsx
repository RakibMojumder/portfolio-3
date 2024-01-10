import { skills } from "../../utils/data";
import SkillCard from "../others/SkillCard";
import Title from "../others/Title";

const Skills = ({ targetRef }) => {
  return (
    <section
      id="skills"
      ref={targetRef}
      className="pt-20 pb-32 mb-20 w-full overflow-x-hidden"
    >
      <div>
        <Title labelOne={"Expertise"} labelTwo={"Skills"} />

        <div className="flex items-center flex-wrap gap-3 lg:gap-6 px-5 sm:p-4 lg:px-8">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} length={skills.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
