"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";
import Hero from "./Components/Home/Hero";
import Projects from "./Components/Home/Projects";
import About from "./Components/Home/About";
import Contact from "./Components/Home/Contact";
import Footer from "./Components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [innerHeight, setInnerHeight] = useState(null);
  const [innerWidth, setInnerWidth] = useState(null);
  const portalRef = useRef();
  const { scrollYProgress } = useScroll({
    target: portalRef,
  });

  // const scaleDown = useTransform(scrollYProgress, [0, 0.25], [1, 0.5])
  // const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.499, 0.5], [1, 5, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.499, 0.5],
    ["-50%", "-50%", "0"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.499, 0.5],
    ["-50%", "-50%", "0"]
  );

  const top = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "0" : `${innerHeight / 2}px`;
  });
  const left = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "0" : "50%";
  });
  const borderRadius = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "0" : "500vw";
  });
  const height = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "100vh" : innerWidth >= 900 ? "500px" : "400px";
  });
  const width = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "100vw" : innerWidth >= 900 ? "500px" : "400px";
  });
  const zIndex = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "-100" : "100";
  });

  useEffect(() => {}, []);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <main ref={portalRef} className={styles.main}>
      <Hero />
      <motion.div
        style={{
          top,
          left,
          x,
          y,
          scale,
          width,
          height,
          borderRadius,
          zIndex,
        }}
        className={styles.home_portal}
      ></motion.div>
      <div className={styles.sections_container}>
        <About />
        <Projects innerWidth={innerWidth} />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
