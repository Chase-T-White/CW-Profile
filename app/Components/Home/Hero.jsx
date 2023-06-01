"use client";

import { useRef } from "react";
import styles from "../../page.module.css";
import Nav from "../Nav";
import Socials from "../Socials";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.5]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className={styles.hero_section}
    >
      <aside className={styles.hero_nav}>
        <Nav />
      </aside>
      <h1>Chase White</h1>
      <aside className={styles.hero_socials}>
        <Socials />
      </aside>
    </motion.section>
  );
};

export default Hero;
