import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      opacity: 1,
      staggerChildren: 0.08,
    },
  },
};

const letters = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const Blog = () => {
  const line = "Coming Soon";
  return (
    <div className="h-full flex justify-center items-center">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={sentence}
        className="text-4xl md:text-7xl font-bold bg-gradient-to-tr from-emerald-500 dark:from-purple-500 to-emerald-200 dark:to-purple-300 text-transparent bg-clip-text py-2 mt-10 sm:mt-0"
      >
        {line.split("").map((char, index) => (
          <motion.span
            key={char + "-" + index}
            variants={letters}
            className={`inline-block ${char === " " && "mx-2"}`}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Blog;
