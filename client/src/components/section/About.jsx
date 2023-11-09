import developer from "../../assets/lottie-icons/Developer.json";
import developerOne from "../../assets/lottie-icons/Developer-1.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useTheme } from "../../provider/ThemeProvider";
import Title from "../others/Title";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="min-h-full flex items-center mb-20 sm:mb-0 pt-20 sm:pt-0 overflow-x-hidden"
    >
      <div>
        <Title labelOne={"About"} labelTwo={"Myself"} />
        {/* <motion.h1
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            ease: "easeIn",
            bounce: 0.5,
          }}
          className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-neutral-200 pt-4"
        >
          <span className="text-emerald-500 dark:text-primary">About</span> me
        </motion.h1> */}
        <div className="grid grid-cols-12 items-center w-full px-3 lg:pr-5">
          <div className="col-span-12 lg:col-span-5">
            <Lottie animationData={theme ? developerOne : developer} />
          </div>
          <p className="col-span-12 lg:col-span-7 text-justify text-neutral-300 text-[15px]">
            Hello! I am{" "}
            <strong>Rakib Ahmed Junior MERN Stack Developer </strong>. As a
            Junior Web Developer, I am eager to bring my technical skills and
            passion for creating dynamic, user-friendly websites to a
            challenging and dynamic work environment. With a solid understanding
            of <strong>HTML, CSS, JavaScript,</strong> and{" "}
            <strong>React Js</strong> and a growing knowledge of back-end
            technologies like <strong>Node Js, and Express Js</strong>. I am
            confident in my ability to build and maintain websites that meet the
            needs of users and clients alike. I am a quick learner and always
            eager to take on new challenges, and I thrive in collaborative
            environments where I can work with designers, senior developers, and
            other stakeholders to bring projects to life. If you are looking for
            a Junior Web Developer who is dedicated, detail-oriented, and eager
            to grow and learn, please do not hesitate to reach out. I would be
            thrilled to bring my skills and enthusiasm to your team!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
