import { skills } from "../../utils/data";
import SkillCard from "../others/SkillCard";
import { motion } from "framer-motion";

const Skills = ({ targetRef, rotateX, rotateZ, skewY }) => {
  return (
    <section
      id="skills"
      ref={targetRef}
      className="pt-20 pb-32 mb-20 w-full overflow-x-hidden"
    >
      <div>
        <motion.h1
          initial={{ x: 300 }}
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
          My <span className="text-emerald-500 dark:text-primary">Skills</span>
        </motion.h1>
        <div className="flex items-center flex-wrap gap-3 px-2 sm:p-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              rotateX={rotateX}
              rotateZ={rotateZ}
              skewY={skewY}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
