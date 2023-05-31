"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";
import Hero from "./Components/Home/Hero";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [innerHeight, setInnerHeight] = useState(null);
  const portalRef = useRef();
  const { scrollYProgress } = useScroll({
    target: portalRef,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 5]);
  const x = useTransform(scrollYProgress, [0, 0.25], ["-50%", "-50%"]);
  const y = useTransform(scrollYProgress, [0, 0.25], ["-50%", "-50%"]);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  return (
    <main ref={portalRef} className={styles.main}>
      <Hero />
      <motion.div
        style={{
          top: innerHeight / 2,
          x,
          y,
          scale,
        }}
        className={styles.home_portal}
      ></motion.div>
    </main>
  );
}
