"use client";

import { useRef } from "react";
import styles from "../../page.module.css";
import Nav from "../Nav";
import Socials from "../Socials";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, scale }}
      className={styles.hero_section}
    >
      <aside className={styles.hero_nav}>
        <Nav />
      </aside>
      <h1>Chase White</h1>
      <h3>
        Frontend /<br /> Web Developer
      </h3>
      <aside className={styles.hero_socials}>
        <Socials />
      </aside>
    </motion.section>
  );
};

export default Hero;
