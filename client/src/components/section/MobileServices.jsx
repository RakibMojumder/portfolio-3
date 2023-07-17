import { motion } from "framer-motion";
import { Bug, Responsive, WebDev } from "../../utils/icons";

const MobileServices = () => {
  return (
    <div id="service" className="lg:hidden mb-14">
      <motion.h1
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          ease: "easeIn",
          bounce: 0.5,
        }}
        className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-neutral-200 pt-20 sm:pt-4 mb-14"
      >
        My <span className="text-emerald-500 dark:text-primary">Services</span>
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5">
        <motion.div className="bg-emerald-200/5 dark:bg-purple-200/10 p-3 text-center rounded-md z-30 overflow-hidden relative before:absolute before:top-0 before:left-0 before:h-20 before:w-20 before:bg-emerald-500 dark:before:bg-primary before:rounded-br-full before:-z-10 before:duration-500 hover:before:w-[150%] hover:before:h-[150%]">
          <div className="flex items-start gap-8">
            <WebDev />
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-slate-100">
                Web Design
              </h3>
              <p className="text-gray-100 text-xs mb-2">
                2022-2023 | 1.5 year experience
              </p>
            </div>
          </div>
          <p className="text-sm text-justify text-white">
            I am a skilled and creative web designer dedicated to crafting
            visually stunning and user-friendly websites. With a passion for
            aesthetics and a deep understanding of user experience, I specialize
            in creating engaging online experiences that leave a lasting
            impression.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            ease: "easeIn",
            bounce: 0.5,
            delay: 0.2,
          }}
          className="bg-emerald-200/5 dark:bg-purple-200/10 p-3 text-center rounded-md z-30 overflow-hidden relative before:absolute before:top-0 before:left-0 before:h-20 before:w-20 before:bg-emerald-500 dark:before:bg-primary before:rounded-br-full before:-z-10 before:duration-500 hover:before:w-[150%] hover:before:h-[150%]"
        >
          <div className="flex items-start gap-8">
            <WebDev />
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-slate-100">
                Web Developer
              </h3>
              <p className="text-gray-100 text-xs mb-2">
                2022-2023 | 1.5 year experience
              </p>
            </div>
          </div>
          <p className="text-sm text-justify text-white">
            I am a dedicated and skilled web developer passionate about building
            exceptional websites and web applications. With a strong foundation
            in programming languages and frameworks, I specialize in creating
            robust and dynamic online solutions that meet the unique needs of my
            clients.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            ease: "easeIn",
            bounce: 0.5,
            delay: 0.2,
          }}
          className="bg-emerald-200/5 dark:bg-purple-200/10 p-3 text-center rounded-md z-30 overflow-hidden relative before:absolute before:top-0 before:left-0 before:h-20 before:w-20 before:bg-emerald-500 dark:before:bg-primary before:rounded-br-full before:-z-10 before:duration-500 hover:before:w-[150%] hover:before:h-[150%]"
        >
          <div className="flex items-start gap-8">
            <Responsive />
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-slate-100">
                Responsive Designer
              </h3>
              <p className="text-gray-100 text-xs mb-2">
                2022-2023 | 1.5 year experience
              </p>
            </div>
          </div>
          <p className="text-sm text-justify text-white">
            I am a passionate and skilled responsive designer, dedicated to
            creating visually stunning and user-friendly websites that adapt
            seamlessly across different devices and screen sizes. With a deep
            understanding of responsive design principles, I specialize in
            crafting engaging online experiences that provide an optimal viewing
            and interaction experience for every user.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            ease: "easeIn",
            bounce: 0.5,
            delay: 0.2,
          }}
          className="bg-emerald-200/5 dark:bg-purple-200/10 p-3 text-center rounded-md z-30 overflow-hidden relative before:absolute before:top-0 before:left-0 before:h-20 before:w-20 before:bg-emerald-500 dark:before:bg-primary before:rounded-br-full before:-z-10 before:duration-500 hover:before:w-[150%] hover:before:h-[150%]"
        >
          <div className="flex items-start gap-8">
            <Bug />
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-slate-100">
                Bug Fixer
              </h3>
              <p className="text-gray-100 text-xs mb-2">
                2022-2023 | 1.5 year experience
              </p>
            </div>
          </div>
          <p className="text-sm text-justify text-white">
            I am a meticulous and experienced website bug fixer, dedicated to
            identifying and resolving issues to ensure smooth and error-free
            functionality for your website. With a keen eye for detail and a
            strong troubleshooting mindset, I specialize in detecting and fixing
            bugs that may disrupt the user experience or hinder the performance
            of your website.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileServices;
