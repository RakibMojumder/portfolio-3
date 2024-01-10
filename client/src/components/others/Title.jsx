import { motion as m } from "framer-motion";

const Title = ({ labelOne, labelTwo }) => {
  return (
    <div className="relative mb-8 mt-2">
      <m.h1
        initial={{ y: 100, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-6xl lg:text-[110px] text-center text-white/[.07] uppercase font-extrabold tracking-wider"
      >
        {labelOne}
      </m.h1>
      <m.h2
        initial={{ y: "200%", x: "0%", opacity: 0.2 }}
        whileInView={{ y: "-140%", x: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.06 }}
        className="w-full text-center text-4xl lg:text-6xl uppercase font-semibold text-secondary dark:text-primary absolute -translate-x-1/2 -translate-y-1/2"
      >
        {labelTwo}
      </m.h2>
    </div>
  );
};

export default Title;
