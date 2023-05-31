"use client";

import { useState, useEffect } from "react";
import Loading from "../Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <article>
        {projects.map((project) => {
          return <div>project card</div>;
        })}
      </article>
    </section>
  );
};

export default Projects;
