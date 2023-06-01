"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";
import Hero from "./Components/Home/Hero";
import Projects from "./Components/Home/Projects";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [innerHeight, setInnerHeight] = useState(null);
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
    return pos >= 0.5 ? "100vh" : "500px";
  });
  const width = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.5 ? "100vw" : "500px";
  });

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

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
        }}
        className={styles.home_portal}
      >
        <Projects />
      </motion.div>
    </main>
  );
}
