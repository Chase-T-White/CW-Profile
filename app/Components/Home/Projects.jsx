"use client";

import { useState, useEffect } from "react";
import styles from "../../page.module.css";
import Loading from "../Loading";
import Image from "next/image";
import Link from "next/link";
import { RiSignalTowerFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";

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

  return (
    <section id="projects" className={styles.projects_section}>
      <article className={styles.projects_displayContainer}>
        {projects.map((project) => {
          if (gridColumn === 2) {
            gridColumn += 2;
          } else {
            gridColumn += 1;
          }
          console.log(gridColumn);
          if (project.id === selectedProject.id) {
            return;
          } else {
            return (
              <div
                style={{ gridArea: `2 / ${gridColumn}` }}
                className={styles.otherProjects_container}
              >
                <div className={styles.containerTriangle}>
                  <div className={styles.otherProjects}>{project.name}</div>
                </div>
              </div>
            );
          }
        })}
        <div className={styles.project_cardContainer}>
          <div className={styles.project_card}>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <ul className={styles.project_cardTechs}>
              {selectedProject.technologies.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
            <div className={styles.project_cardLinks}>
              <div>
                <Link href={selectedProject.github} target="_blank">
                  <AiOutlineGithub />
                </Link>
              </div>
              <div>
                <Link href={selectedProject.pageLive} target="_blank">
                  <RiSignalTowerFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.retroSphere}>
          <Link href={selectedProject.pageLive} target="_blank">
            <Image src={selectedProject.projectImage} fill />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Projects;
