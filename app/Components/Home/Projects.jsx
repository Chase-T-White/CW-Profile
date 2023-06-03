"use client";

import { useState, useEffect } from "react";
import styles from "../../page.module.css";
import Loading from "../Loading";
import Image from "next/image";
import Link from "next/link";
import { RiSignalTowerFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Autour_One } from "next/font/google";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
      setSelectedProject(data[0]);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  let gridColumn = -1;

  const parentVariants = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        type: "linear",
        delay: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        type: "linear",
      },
    },
  };

  const cardVariants = {
    initial: {
      height: 0,
    },
    open: {
      height: "auto",
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
        type: "linear",
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        when: "afterChildren",
        type: "linear",
      },
    },
  };

  const digitalTextVariants = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "linear",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "linear",
      },
    },
  };

  return (
    <section id="projects" className={styles.projects_section}>
      <article className={styles.projects_displayContainer}>
        {projects.map((project) => {
          if (gridColumn === 2) {
            gridColumn += 2;
          } else {
            gridColumn += 1;
          }
          if (project.id === selectedProject.id) {
            return;
          } else {
            return (
              <div
                key={project.id}
                style={{ gridArea: `1 / ${gridColumn}` }}
                className={styles.otherProjects_container}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.containerTriangle}>
                  <div className={styles.otherProjects}>{project.name}</div>
                </div>
              </div>
            );
          }
        })}
        <AnimatePresence>
          <motion.div
            variants={parentVariants}
            initial="initial"
            animate="open"
            exit="exit"
            key={selectedProject.id}
            className={styles.project_cardContainer}
          >
            <motion.div variants={cardVariants} className={styles.project_card}>
              <motion.h3 variants={digitalTextVariants}>
                {selectedProject.name}
              </motion.h3>
              <motion.p variants={digitalTextVariants}>
                {selectedProject.description}
              </motion.p>
              <motion.ul
                variants={digitalTextVariants}
                className={styles.project_cardTechs}
              >
                {selectedProject.technologies.map((tech, i) => {
                  return <li key={i}>{tech}</li>;
                })}
              </motion.ul>
              <motion.div
                variants={digitalTextVariants}
                className={styles.project_cardLinks}
              >
                <div title="Github">
                  <Link href={selectedProject.github} target="_blank">
                    <AiOutlineGithub />
                  </Link>
                </div>
                <div title="Site Page">
                  <Link href={selectedProject.pageLive} target="_blank">
                    <RiSignalTowerFill />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className={styles.retroSphere}>
            <Link href={selectedProject.pageLive} target="_blank">
              <Image
                src={selectedProject.projectImage}
                fill
                alt={selectedProject.name}
                title="Go to Page"
              />
            </Link>
          </div>
        </AnimatePresence>
      </article>
    </section>
  );
};

export default Projects;
