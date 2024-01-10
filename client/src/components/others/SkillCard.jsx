import { motion } from "framer-motion";

const SkillCard = ({ skill, length }) => {
  return (
    <>
      <div className="hidden sm:block" key={skill.id}>
        <motion.div
          initial={{ y: 100, opacity: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: `${((skill.id - 1) % length) / 100 + 0.2}`,
          }}
          className="h-20 md:h-32 w-[70px] md:w-28 mx-auto bg-gradient-to-br from-secondary/[0.5] dark:from-primary to-transparent shadow-xl rounded-lg cursor-pointer p-[1px] group"
        >
          <div className="w-full h-full bg-neutral-900 dark:bg-[#373D5F] px-2 rounded-lg flex flex-col items-center justify-center">
            <img className="w-10 h-10" src={skill.img} alt="img" />
            <h4 className="text-xs md:text-sm mt-3 text-white group-hover:text-secondary text-center">
              {skill.name}
            </h4>
          </div>
        </motion.div>
      </div>
      <div className="block sm:hidden" key={skill.id + ".."}>
        <div className="h-24 w-20 mx-auto flex flex-col items-center justify-center bg-purple-300/5 shadow-xl rounded-lg cursor-pointer text-center">
          <img className="w-10 h-10" src={skill.img} alt="img" />
          <h4 className="text-xs md:text-sm mt-3 text-white">{skill.name}</h4>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
