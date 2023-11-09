import contact from "../../assets/lottie-icons/contact.json";
import contactOne from "../../assets/lottie-icons/contact-1.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useTheme } from "../../provider/ThemeProvider";
import Title from "../others/Title";

const Contact = () => {
  const { theme } = useTheme();
  const handleChange = (e) => console.log(e);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="min-h-full flex justify-center items-center pt-10 sm:p-4 px-3 sm:px-0 overflow-x-hidden"
    >
      <div>
        <Title labelOne={"Contact"} labelTwo={"With me"} />
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
          className="text-center font-extrabold text-4xl sm:text-5xl uppercase text-neutral-200 mb-10 pt-4"
        >
          <span className="text-emerald-500 dark:text-primary">Contact</span> me
        </motion.h1> */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 hidden lg:block">
            <Lottie animationData={theme ? contactOne : contact} />
          </div>
          <div className="col-span-12 lg:col-span-5 md:w-[70%] md:mx-auto lg:w-[85%]">
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 text-slate-200"
            >
              <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <textarea
                name=""
                placeholder="Message"
                onChange={handleChange}
                className="w-full h-20 bg-transparent py-1 pl-3 border border-slate-600 focus:border-emerald-500 dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-1 bg-emerald-500 dark:bg-primary rounded-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
