"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Discussion from "@/components/projects/tabs/discussion/discussion";
import Documents from "@/components/projects/tabs/documents/documents";
import Navbar from "@/components/navbar/navbar";
import EditProject from "@/components/popups/projects/project/edit-project";
import ProjectProgress from "@/components/projects/tabs/project-progress/project-progress";
import Status from "@/components/statuses/status";
import styles from "@/styles/projects.module.css";
import { Project } from "@/app/types/projects";

const ProjectPage = () => {
  const [currTab, setCurrTab] = useState("project-progress");
  const [showMenu, setShowMenu] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState<boolean>(false);
  const [project, setProject] = useState<Project>();

  const { id } = useParams();
  const router = useRouter();

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let projects: Project[] = JSON.parse(localStorage.getItem("projects")!);

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === project?.id) {
        projects.splice(i, 1);
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowMenu((prev) => !prev);
    router.push("/projects");
  };

  useEffect(() => {
    const data: Project[] = JSON.parse(localStorage.getItem("projects")!);
    data.forEach((projectData) => {
      if (projectData.id === id) {
        setProject(projectData);
      }
    });
  }, [id]);

  return (
    <>
      <Navbar />
      {showEditPopup && (
        <EditProject setShowEditPopup={setShowEditPopup} project={project!} />
      )}
      <main className="project-page">
        <div
          className={`${styles.project__overview} bg-neutral-900 text-neutral-100`}
        >
          <div className="gap-sm">
            <div
              className="flex"
              style={{ alignItems: "center", gap: "0.5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
              >
                <path
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1.688 15.75h14.624m-13.5-13.5v13.5m7.876-13.5v13.5m4.5-10.125V15.75M5.062 5.062h.563m-.563 2.25h.563m-.563 2.25h.563m2.25-4.5h.563m-.563 2.25h.563m-.563 2.25h.563M5.062 15.75v-2.531c0-.466.378-.844.844-.844h1.688c.466 0 .843.378.843.844v2.531M2.25 2.25h9m-.563 3.375h5.063m-2.813 2.813h.006v.005h-.005v-.005Zm0 2.25h.006v.005h-.005v-.005Zm0 2.25h.006v.005h-.005v-.005Z"
                />
              </svg>
              <p className="fw-bold">{project?.clientName}</p>
            </div>
            <div className={`${styles.project__name} flex`}>
              <h1 className="fw-bold fs-title">{project?.projectName}</h1>
              <Status status={project?.projectStatus} />
            </div>
            <div className={styles.project__description}>
              <p
                className="fs-body-sm"
                style={{
                  color: "hsl(var(--clr-neutral-100),0.7)",
                  maxWidth: "75ch",
                }}
              >
                {project?.projectDescription}
              </p>
            </div>
            <div className={styles.project__timeline}>
              <p className="fw-semi-bold fs-body-sm">
                {project?.startDate} to {project?.endDate}
              </p>
            </div>
          </div>
          <div className="dropdown">
            <button
              className={styles.project__menu}
              onClick={(e) => setShowMenu((prev) => !prev)}
            >
              <span className="visually-hidden">Project View Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
            {showMenu && (
              <ul
                className="dropdown-menu product-page-dropdown box-shadow"
                role="menu"
              >
                <li className="menu-item" onClick={handleEdit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m12.646 3.365 1.266-1.266A1.406 1.406 0 1 1 15.9 4.09l-7.964 7.963a3.375 3.375 0 0 1-1.423.848l-2.014.6.6-2.014c.16-.537.451-1.026.848-1.423l6.698-6.698Zm0 0 1.979 1.979M13.5 10.5v3.563c0 .931-.755 1.687-1.688 1.687H3.939a1.687 1.687 0 0 1-1.688-1.688V6.188c0-.931.756-1.687 1.688-1.687H7.5"
                    />
                  </svg>
                  <span>Edit</span>
                </li>
                <li className="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1.527 9.242a.759.759 0 0 1 0-.48 7.878 7.878 0 0 1 14.946-.004.76.76 0 0 1 0 .48 7.878 7.878 0 0 1-14.946.004Z"
                    />
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M11.25 9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <span>View as Client</span>
                </li>
                <li className="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13.5 5.625v2.25m0 0v2.25m0-2.25h2.25m-2.25 0h-2.25M9.562 4.781a2.531 2.531 0 1 1-5.062 0 2.531 2.531 0 0 1 5.063 0Zm-7.311 9.645-.001-.082a4.781 4.781 0 1 1 9.563 0v.002l-.001.08a9.238 9.238 0 0 1-4.78 1.324 9.238 9.238 0 0 1-4.781-1.324Z"
                    />
                  </svg>
                  <span>Add People</span>
                </li>
                <li className="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.195 2.955a.844.844 0 0 1 .832-.705h1.946c.412 0 .764.298.832.705l.16.96c.047.281.235.515.483.653.056.03.111.062.165.095.244.147.54.193.807.093l.913-.342a.844.844 0 0 1 1.027.369l.972 1.684a.844.844 0 0 1-.194 1.074l-.753.62a.932.932 0 0 0-.323.743 5.066 5.066 0 0 1 0 .192.932.932 0 0 0 .323.743l.753.62c.318.262.4.716.194 1.074l-.972 1.684a.844.844 0 0 1-1.027.369l-.913-.342a.933.933 0 0 0-.807.093c-.054.033-.109.064-.165.095a.933.933 0 0 0-.483.652l-.16.961a.844.844 0 0 1-.832.705H8.027a.844.844 0 0 1-.832-.705l-.16-.96a.934.934 0 0 0-.483-.653 5.07 5.07 0 0 1-.165-.095.933.933 0 0 0-.807-.093l-.913.342a.844.844 0 0 1-1.026-.369l-.973-1.684a.844.844 0 0 1 .194-1.074l.754-.62c.219-.18.328-.46.323-.743a5.152 5.152 0 0 1 0-.192.932.932 0 0 0-.323-.743l-.754-.62a.844.844 0 0 1-.194-1.074l.973-1.684a.844.844 0 0 1 1.026-.369l.913.342c.267.1.563.054.807-.093.054-.033.11-.064.165-.095a.934.934 0 0 0 .483-.652l.16-.961Z"
                    />
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M11.25 9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <span>Project Settings</span>
                </li>
                <li className="menu-item" onClick={handleDelete}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m11.055 6.75-.26 6.75m-3.59 0-.26-6.75m7.476-2.407c.256.039.512.08.767.124m-.767-.124-.801 10.411c-.068.88-.8 1.559-1.683 1.559H6.063a1.688 1.688 0 0 1-1.683-1.559l-.8-10.411m10.84 0c-.86-.13-1.729-.23-2.607-.297m-9 .421c.254-.044.51-.085.766-.124m0 0c.86-.13 1.73-.23 2.608-.297m5.625 0v-.687c0-.885-.682-1.623-1.567-1.652a38.942 38.942 0 0 0-2.49 0c-.885.029-1.567.767-1.567 1.652v.687m5.625 0a36.504 36.504 0 0 0-5.626 0"
                    />
                  </svg>
                  <span>Delete</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.project__details}>
          <div className={styles.project__tabs}>
            <div
              className={
                currTab === "project-progress"
                  ? `project-progress-tab ${styles.tab} ${styles.current}`
                  : `project-progress-tab ${styles.tab}`
              }
              onClick={() => setCurrTab("project-progress")}
            >
              <span>Project Progress</span>
            </div>
            <div
              className={
                currTab === "documents"
                  ? `documents-tab ${styles.tab} ${styles.current}`
                  : `documents-tab ${styles.tab}`
              }
              onClick={() => setCurrTab("documents")}
            >
              <span>Documents</span>
            </div>
            <div
              className={
                currTab === "discussion"
                  ? `discussion-tab ${styles.tab} ${styles.current}`
                  : `discussion-tab ${styles.tab}`
              }
              onClick={() => setCurrTab("discussion")}
            >
              <span>Discussion</span>
            </div>
          </div>
          {currTab === "project-progress" ? (
            <ProjectProgress tasks={project?.tasks} projectId={project?.id} />
          ) : currTab === "documents" ? (
            <Documents documents={project?.documents} projectId={project?.id} />
          ) : (
            <Discussion />
          )}
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
