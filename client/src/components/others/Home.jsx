import { useRef } from "react";
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
import { useState } from "react";
import { useEffect } from "react";
import ScrollIndicate from "./ScrollIndicate";

const Home = () => {
  const targetRef = useRef();
  const containerRef = useRef();
  const [showIndicate, setShowIndicate] = useState(true);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["center center", "center end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -10]);

  useEffect(() => {
    const handleIndicate = () => {
      if (containerRef.current.scrollTop > 20) {
        setShowIndicate(false);
      }
    };

    let container = containerRef.current;

    container.addEventListener("scroll", handleIndicate);

    return () => container.removeEventListener("scroll", handleIndicate);
  }, []);

  return (
    <div className="sm:flex h-full">
      <Sidebar containerRef={containerRef} />

      <div
        ref={containerRef}
        id="container"
        className="2xl:mx-auto overflow-y-auto purple-scroll"
      >
        {showIndicate && <ScrollIndicate className={"bottom-20"} />}
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
