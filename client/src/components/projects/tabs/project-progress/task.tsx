import React, { useState } from "react";
import EditTask from "@/components/popups/projects/task/edit-task";
import Status from "@/components/statuses/status";
import styles from "@/styles/task.module.css";
import Dropdown from "@/components/dropdown";
import { Task } from "@/app/types/projects";

type Props = {
  task: Task;
  projectId: string;
};

const Task = ({ task, projectId }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let projects = JSON.parse(localStorage.getItem("projects")!);

    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].tasks.length; j++) {
        if (projects[i].tasks[j].id === task.id) {
          projects[i].tasks.splice(j, 1);
        }
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowMenu((prev) => !prev);
    window.location.reload();
  };

  return (
    <>
      {showEditPopup && (
        <EditTask setShowEditPopup={setShowEditPopup} task={task} />
      )}
      <div className={`${styles.task} bg-neutral-100 box-shadow`}>
        <h3 className="fw-bold" style={{ gridArea: "task-name" }}>
          {task.taskName}
        </h3>
        <div className={styles.task_status} style={{ gridArea: "task-status" }}>
          <Status status={task.taskStatus} />
        </div>
        <div
          className={`${styles.task__due_date} fs-body-sm`}
          style={{ gridArea: "due-date" }}
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
              d="M5.063 2.25v1.688m7.875-1.688v1.688M2.25 14.062V5.626c0-.932.756-1.688 1.688-1.688h10.124c.933 0 1.688.756 1.688 1.688v8.438m-13.5 0c0 .931.756 1.687 1.688 1.687h10.124c.933 0 1.688-.755 1.688-1.688m-13.5 0V8.439c0-.932.756-1.688 1.688-1.688h10.124c.933 0 1.688.756 1.688 1.688v5.624M9 9.563h.006v.006H9v-.005Zm0 1.688h.006v.006H9v-.006Zm0 1.688h.006v.005H9v-.005ZM7.312 11.25h.006v.006h-.005v-.006Zm0 1.688h.006v.005h-.005v-.005ZM5.625 11.25h.006v.006h-.006v-.006Zm0 1.688h.006v.005h-.006v-.005Zm5.063-3.376h.005v.006h-.005v-.005Zm0 1.688h.005v.006h-.005v-.006Zm0 1.688h.005v.005h-.005v-.005Zm1.687-3.376h.006v.006h-.006v-.005Zm0 1.688h.006v.006h-.006v-.006Z"
            />
          </svg>
          <span>{task.dueDate}</span>
        </div>
        <div className="dropdown">
          <button
            className={styles.task__menu}
            style={{ gridArea: "task-menu" }}
            onClick={(e) => setShowMenu((prev) => !prev)}
          >
            <span className="visually-hidden">Task Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#1D1A26"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
          {showMenu && <Dropdown onEdit={handleEdit} onDelete={handleDelete} />}
        </div>
      </div>
    </>
  );
};

export default Task;
