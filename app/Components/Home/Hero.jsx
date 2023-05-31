import React from "react";
import styles from "../../page.module.css";
import Nav from "../Nav";
import Socials from "../Socials";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <aside className={styles.hero_nav}>
        <Nav />
      </aside>
      <h1>Chase White</h1>
      <aside className={styles.hero_socials}>
        <Socials />
      </aside>
    </section>
  );
};

export default Hero;
