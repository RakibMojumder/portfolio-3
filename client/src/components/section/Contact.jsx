import contact from "../../assets/lottie-icons/contact.json";
import contactOne from "../../assets/lottie-icons/contact-1.json";
import Lottie from "lottie-react";
import { useTheme } from "../../provider/ThemeProvider";
import Title from "../others/Title";
import { motion as m } from "framer-motion";

const Contact = () => {
  const { theme } = useTheme();
  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="min-h-full flex justify-center items-center pt-10 sm:p-4 px-3 overflow-x-hidden"
    >
      <div>
        <Title labelOne={"Contact"} labelTwo={"With me"} />

        <div className="grid grid-cols-12 items-center">
          <m.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-6 hidden lg:block"
          >
            <Lottie animationData={theme ? contact : contactOne} />
          </m.div>
          <m.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 md:w-[70%] md:mx-auto lg:w-[85%]"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 text-slate-200"
            >
              <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border-b border-neutral-800 dark:border-purple-200/10 focus:border-secondary dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border-b border-neutral-800 dark:border-purple-200/10 focus:border-secondary dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border-b border-neutral-800 dark:border-purple-200/10 focus:border-secondary dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              />
              <textarea
                name=""
                placeholder="Message"
                onChange={handleChange}
                className="w-full bg-transparent py-1 pl-3 border-b border-neutral-800 dark:border-purple-200/10 focus:border-secondary dark:focus:border-primary text-sm rounded-sm focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-1 bg-secondary text-black dark:text-white dark:bg-primary rounded-sm"
              >
                Send
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
