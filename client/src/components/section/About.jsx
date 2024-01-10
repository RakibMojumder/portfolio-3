import developer from "../../assets/lottie-icons/Developer.json";
import developerOne from "../../assets/lottie-icons/Developer-1.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { container, item } from "../../utils/animation";
import { useTheme } from "../../provider/ThemeProvider";
import Title from "../others/Title";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="sm:h-[90vh] flex items-center mb-20 pt-20 sm:pt-0 overflow-x-hidden"
    >
      <div>
        <Title labelOne={"About"} labelTwo={"Myself"} />
        <div className="grid grid-cols-12 items-center w-full px-3 lg:pr-5">
          <div className="col-span-12 lg:col-span-5">
            <Lottie animationData={theme ? developer : developerOne} />
          </div>
          <motion.div
            variants={container}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
            className="col-span-12 lg:col-span-7 text-justify text-white text-sm"
          >
            <div className="overflow-hidden">
              <motion.p
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                Hello! I am{" "}
                <span className="bg-[#FFCD19] text-slate-900 px-2 mr-2 rounded font-medium">
                  Rakib Ahmed Junior MERN Stack Developer
                </span>
                . As a Junior Web Developer, I am eager to bring my technical
                skills and passion for creating dynamic, user-friendly websites
                to a challenging and dynamic work environment. With a solid
                understanding of{" "}
                <span className="bg-[#FFCD19] text-slate-900 px-2 mr-2 rounded font-medium">
                  HTML, CSS, JavaScript, React Js, Redux and Next JS
                </span>{" "}
                and a growing knowledge of back-end technologies like{" "}
                <span className="bg-[#FFCD19] text-slate-900 px-2 mr-2 rounded font-medium">
                  Node Js, and Express Js.
                </span>
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={item}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="my-4"
              >
                I am confident in my ability to build and maintain websites that
                meet the needs of users and clients alike. I am a quick learner
                and always eager to take on new challenges, and I thrive in
                collaborative environments where I can work with designers,
                senior developers, and other stakeholders to bring projects to
                life.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                If you are looking for a Junior Web Developer who is dedicated,
                detail-oriented, and eager to grow and learn, please do not
                hesitate to reach out. I would be thrilled to bring my skills
                and enthusiasm to your team!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
