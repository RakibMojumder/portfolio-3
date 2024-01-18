import rec from "../../assets/rec2.png";
import { motion } from "framer-motion";
import { WebDev } from "../../utils/icons";
import { Bug, Responsive } from "../../utils/icons";
import Title from "../others/Title";
import image1 from "../../assets/vector-img/image-1.svg";
import image2 from "../../assets/vector-img/image-2.svg";
import { useTheme } from "../../provider/ThemeProvider";

const Services = () => {
  const { theme } = useTheme();

  return (
    <div id="services" className="min-h-full w-full mb-32 overflow-hidden">
      <Title labelOne={"Services"} labelTwo={"What i do"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-5 lg:px-8">
        <motion.div
          initial={{ y: 100, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded bg-secondary dark:bg-primary"
        >
          <div className="h-28 flex flex-col items-center justify-end bg-neutral-900 dark:bg-[#373D5F]">
            <WebDev />
            <h2 className="text-white text-xl">Web Development</h2>
          </div>
          <div className="">
            <div className="bg-neutral-900 dark:bg-[#373D5F]">
              <img
                src={theme ? image2 : image1}
                alt="vector image"
                height={20}
                className="w-full"
              />
            </div>
            <p className="p-4 pt-0 text-sm -mt-0.5 dark:text-neutral-100">
              I am a dedicated and skilled web developer passionate about
              building exceptional websites and web applications. With a strong
              foundation in programming languages and frameworks, I specialize
              in creating robust and dynamic online solutions that meet the
              unique needs of my clients.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded bg-secondary dark:bg-primary"
        >
          <div className="h-28 flex flex-col items-center justify-end bg-neutral-900 dark:bg-[#373D5F]">
            <Responsive />
            <h2 className="text-white text-xl">Responsive Design</h2>
          </div>
          <div className="">
            <div className="bg-neutral-900 dark:bg-[#373D5F]">
              <img
                src={theme ? image2 : image1}
                alt="vector image"
                height={20}
                className="w-full"
              />
            </div>
            <p className="p-4 pt-0 text-sm -mt-0.5 dark:text-neutral-100">
              I am a passionate and skilled responsive designer, dedicated to
              creating visually stunning and user-friendly websites that adapt
              seamlessly across different devices and screen sizes. With a deep
              understanding of responsive design principles, I specialize in
              crafting engaging online experiences that provide an optimal
              viewing and interaction experience for every user.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded bg-secondary dark:bg-primary"
        >
          <div className="h-28 flex flex-col items-center justify-end bg-neutral-900 dark:bg-[#373D5F]">
            <Bug />
            <h2 className="text-white text-xl">Bug Fixing</h2>
          </div>
          <div className="">
            <div className="bg-neutral-900 dark:bg-[#373D5F]">
              <img
                src={theme ? image2 : image1}
                alt="vector image"
                height={20}
                className="w-full"
              />
            </div>
            <p className="p-4 pt-0 text-sm -mt-0.5 dark:text-neutral-100">
              I am a meticulous and experienced website bug fixer, dedicated to
              identifying and resolving issues to ensure smooth and error-free
              functionality for your website. With a keen eye for detail and a
              strong troubleshooting mindset, I specialize in detecting and
              fixing bugs that may disrupt the user experience or hinder the
              performance of your website.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
