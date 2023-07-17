import { motion } from "framer-motion";

const SkillCard = ({ skill, rotateX, rotateZ, skewY }) => {
  return (
    <>
      <div
        className="hidden sm:block"
        key={skill.id}
        style={{ transformOrigin: "bottom" }}
      >
        <motion.div
          style={{ rotateX, rotateZ, skewY }}
          className="h-20 md:h-24 w-[70px] md:w-20 mx-auto flex flex-col items-center justify-center bg-purple-300/5 shadow-xl rounded-lg cursor-pointer"
        >
          <img className="w-10 h-10" src={skill.img} alt="img" />
          <h4 className="text-xs md:text-sm mt-3 text-white">{skill.name}</h4>
        </motion.div>
      </div>
      <div className="block sm:hidden" key={skill.id + ".."}>
        <div className="h-20 md:h-24 w-[70px] md:w-20 mx-auto flex flex-col items-center justify-center bg-purple-300/5 shadow-xl rounded-lg cursor-pointer">
          <img className="w-10 h-10" src={skill.img} alt="img" />
          <h4 className="text-xs md:text-sm mt-3 text-white">{skill.name}</h4>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
