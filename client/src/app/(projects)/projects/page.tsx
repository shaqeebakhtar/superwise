"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/projects.module.css";
import Project from "@/app/components/projects/project";
import NewProject from "@/app/components/popups/projects/project/new-project";
import EmptyState from "@/app/components/empty-state/empty-state";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import { Project as IProject } from "@/app/types/projects";

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects")!);
    setProjects(data);
  }, []);

  return (
    <>
      <Navbar />
      {showPopup && <NewProject setShowPopup={setShowPopup} />}
      <main className={styles.projects}>
        <header className={styles.projects__header}>
          <h1 className="fw-bold fs-title">Projects</h1>
          <button
            className="btn--add | flex"
            onClick={(e) => setShowPopup((prev) => !prev)}
          >
            <Image
              src="/assets/plus.svg"
              alt="plus sign"
              width={18}
              height={18}
            />
            <span>New Project</span>
          </button>
        </header>
        {projects && projects.length > 0 ? (
          <div className={`${styles.all_projects} ${styles.grid_view}`}>
            {projects.map((project, index) => {
              return <Project project={project} key={index} />;
            })}
          </div>
        ) : (
          <EmptyState
            title={"No Projects in your projects list"}
            button={"New Project"}
            message={"to add a new project."}
          />
        )}
      </main>
    </>
  );
};

export default Projects;
