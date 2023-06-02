import React from "react";
import styles from "../../page.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/images/aboutFiller.png";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <section className={styles.about_section}>
      <div className="wrapper">
        <article className={styles.about_contentContainer}>
          <div className={styles.about_textContainer}>
            <header>
              <h1>Chase White</h1>
              <p>
                Hello! Thank you for checking out my profile. I am an aspiring{" "}
                <span>Frontend</span> / <span>Web Developer</span> looking to
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
              <div className={styles.additionalInfo}>
                <h3>Interests / Hobbies</h3>
                <ul>
                  <li>
                    <h5>Green Bay Packers</h5>
                    Love watching football. Going to miss #12, but I am ready to
                    see what #10 can do. Go Pack Go!
                  </li>
                  <li>
                    <h5>Horticulture</h5>
                    Building gardens has always been a fun way to create
                    something aesthetically pleasing or highly functional. I
                    have some ideas on a future automated garden.
                  </li>
                  <li>
                    <h5>Music</h5>
                    Might be a bit of a cliche, I do enjoy discovering new music
                    that helps facilitate a productive work state. Two of my
                    favorite artists are Carpenter Brut and Gunship.
                  </li>
                  <li>
                    <h5>Montana</h5>
                    Enjoying the various outdoor activites that I enjoyed from
                    my home state. Hunting, fishing or going on a long ass hike,
                    I enjoy it all!
                  </li>
                </ul>
              </div>
              <div className={styles.additionalInfo}>
                <h3>Cool Facts</h3>
                <ul>
                  <li>
                    There was a mathmatician who studied the concept of
                    infinity. He suffered several mental breakdowns and was
                    ultimately institutionalized.
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div>
              <blockquote>
                We will chase perfection, and we will chase it relentlessly,
                knowing all the while we can never attain it because nothing is
                perfect. But along the way, we shall catch excellence.
              </blockquote>
              <em>--Vince Lombardi</em>
            </div>
          </div>
          <div className={styles.about_imgContainer}>
            <Image src={profilePic} fill alt="Chase White" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
