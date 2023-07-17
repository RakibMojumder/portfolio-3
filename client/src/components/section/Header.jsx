import Button from "../others/Button";
import { AiOutlineEye } from "react-icons/ai";
import { BsSendCheck } from "react-icons/bs";
import SocialLinks from "../others/SocialLinks";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      opacity: 1,
      staggerChildren: 0.04,
    },
  },
};

const letters = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const Header = () => {
  const lineOne = "Welcome I am";
  const lineTwo = "Rakib Ahmed";
  const lineThree = "MERN Stack Developer";
  return (
    <section
      id="home"
      className="min-h-full flex justify-center items-center p-4 pt-20 sm:pt-0"
    >
      <div>
        <div className="text-white text-center space-y-3">
          <div className="text-xl md:text-4xl lg:text-6xl font-light">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sentence}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-3xl">
                {lineOne.split("").map((char, index) => (
                  <motion.span
                    key={char + "-" + index}
                    variants={letters}
                    className={`inline-block ${char === " " && "mx-2"}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-emerald-500 dark:text-primary font-extrabold uppercase">
                {lineTwo.split("").map((char, index) => (
                  <motion.span
                    key={char + "-" + index}
                    variants={letters}
                    className={`inline-block ${
                      char === " " ? "mx-2 sm:mx-4" : "sm:mx-0.5"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <h1 className="text-5xl lg:text-7xl font-extrabold">
                {lineThree.split("").map((char, index) => (
                  <motion.span
                    key={char + "-" + index}
                    variants={letters}
                    className={`inline-block ${char === " " && "mx-2"}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </div>

          <p className="text-xs sm:text-base">
            As a MERN stack developer, I specialize in building full-stack web
            applications using MongoDB, Express, React, and Node.js. With a
            passion for coding and a dedication to clean, efficient, and
            well-organized code, I strive to create applications that deliver
            exceptional user experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-6 mt-6">
          <Button icon={AiOutlineEye} label="See Resume" />
          <a
            href="mailto:sujonahmed45a4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-1 flex items-center gap-3 text-white underline relative before:absolute before:top-0 before:left-0 before:h-0 before:w-0 before:border-transparent before:border-l before:border-t after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-r after:border-b before:transition-all before:duration-500 ease-linear hover:before:h-full hover:before:w-full hover:before:border-emerald-500 dark:hover:before:border-primary after:border-transparent after:transition-all after:duration-500 after:ease-linear hover:after:h-full hover:after:w-full hover:after:border-emerald-500 dark:hover:after:border-primary"
          >
            <span>Hire me</span>
            <BsSendCheck className="text-emerald-500 dark:text-primary text-lg" />
          </a>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Header;
