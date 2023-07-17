import { useRef } from "react";
import { useTheme } from "../../provider/ThemeProvider";
import About from "../section/About";
import Header from "../section/Header";
import Sidebar from "./Sidebar";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import Skills from "../section/Skill";
import Projects from "../section/Projects";
import Services from "../section/Services";
import Contact from "../section/Contact";
import Footer from "./Footer";
import MobileServices from "../section/MobileServices";
import MobileNav from "./MobileNav";

const Home = () => {
  const { theme } = useTheme();
  const containerRef = useRef();
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["center center", "center end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  return (
    <div className="sm:flex h-full">
      <Sidebar containerRef={containerRef} />
      <div
        ref={containerRef}
        className={`${
          theme ? "green-scroll" : "purple-scroll"
        } 2xl:mx-auto overflow-y-auto`}
      >
        <MobileNav />
        <Header />
        <About />
        <Projects />
        <Skills
          targetRef={targetRef}
          rotateX={rotateX}
          rotateZ={rotateZ}
          skewY={skewY}
        />
        <MobileServices />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
