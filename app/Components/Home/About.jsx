"use client";

import { useState, useRef } from "react";
import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/images/aboutFiller.png";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const listVariants = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      type: "linear",
      staggerChildren: 0.2,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 1,
    },
  },
};

const listItemVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const About = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={targetRef}
      style={opacity}
      id="about"
      className={styles.about_section}
    >
      <div className="wrapper">
        <article className={styles.about_contentContainer}>
          <div className={styles.about_textContainer}>
            <header>
              <h1>Chase White</h1>
              <p>
                Hello! Thank you for checking out my profile. I am an aspiring{" "}
                <span className="attention">Frontend</span> /{" "}
                <span className="attention">Web Developer</span> looking to
                break into the industry. I started this journey roughly a year
                ago. There were many ups and downs along the way. For as many
                times as doubt would try to drive me away, curiousity and drive
                brought me back to overcome the obsticle at hand. A year later
                and countless problems solved, I cannot believe how much my
                skills have grown. I'm excited to see what skills I will aquire
                this next year!
              </p>
            </header>
            <div className={styles.about_additionalInfoContainer}>
              <div
                className={styles.additionalInfo}
                onClick={() => {
                  if (selectedId === 1) {
                    setIsOpen(!isOpen);
                  } else {
                    setSelectedId(1);
                    setIsOpen(true);
                  }
                }}
              >
                <h3>Interests / Hobbies</h3>
                <AnimatePresence>
                  {selectedId === 1 && isOpen && (
                    <motion.ul
                      variants={listVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.li variants={listItemVariants}>
                        <h5>Green Bay Packers</h5>
                        Love watching football. Going to miss #12, but I am
                        ready to see what #10 can do. Go Pack Go!
                      </motion.li>
                      <motion.li variants={listItemVariants}>
                        <h5>Horticulture</h5>
                        Building gardens has always been a fun way to create
                        something aesthetically pleasing or highly functional. I
                        have some ideas on a future automated garden.
                      </motion.li>
                      <motion.li variants={listItemVariants}>
                        <h5>Music</h5>
                        Might be a bit of a cliche, I do enjoy discovering new
                        music that helps facilitate a productive work state. Two
                        of my favorite artists are Carpenter Brut and Gunship.
                      </motion.li>
                      <motion.li variants={listItemVariants}>
                        <h5>Montana</h5>
                        Enjoying the various outdoor activites that I enjoyed
                        from my home state. Hunting, fishing or going on a long
                        ass hike, I enjoy it all!
                      </motion.li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div
                className={styles.additionalInfo}
                onClick={() => {
                  if (selectedId === 2) {
                    setIsOpen(!isOpen);
                  } else {
                    setSelectedId(2);
                    setIsOpen(true);
                  }
                }}
              >
                <h3>Cool Facts</h3>
                <AnimatePresence>
                  {selectedId === 2 && isOpen && (
                    <motion.ul
                      variants={listVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.li variants={listItemVariants}>
                        There was a mathmatician who studied the concept of
                        infinity. He suffered several mental breakdowns and was
                        ultimately institutionalized.
                      </motion.li>
                      <li></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div>
              <figure className={styles.about_quoteBlock}>
                <blockquote>
                  <span className="attention">"</span>We will chase perfection,
                  and we will chase it relentlessly, knowing all the while we
                  can never attain it because nothing is perfect. But along the
                  way, we shall catch excellence.
                  <span className="attention">"</span>
                </blockquote>
                <figcaption>
                  <em>--Vince Lombardi</em>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className={styles.about_imgContainer}>
            <Image src={profilePic} fill alt="Chase White" />
          </div>
        </article>
      </div>
    </motion.section>
  );
};

export default About;
