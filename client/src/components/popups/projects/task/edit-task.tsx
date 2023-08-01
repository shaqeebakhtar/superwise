import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/popup.module.css";
import { Task } from "@/app/types/projects";

type Props = {
  setShowEditPopup: Dispatch<SetStateAction<boolean>>;
  task: Task;
};

const EditTask = ({ setShowEditPopup, task }: Props) => {
  const taskStatuses = ["Not Started", "In Progress", "Completed"];
  const [taskName, setTaskName] = useState(task.taskName);
  const [status, setStatus] = useState(task.taskStatus);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [taskNote, setTaskNote] = useState(task.taskNote);

  const handleSubmit = () => {
    if (!taskName || !status || !dueDate || !taskNote)
      alert("All fields are required!");

    let projects = JSON.parse(localStorage.getItem("projects")!);

    let taskObj = {
      id: task.id,
      taskName: taskName,
      taskStatus: status,
      dueDate: dueDate,
      taskNote: taskNote,
    };
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].tasks.length; j++) {
        if (projects[i].tasks[j].id === task.id) {
          projects[i].tasks[j] = taskObj;
        }
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    setShowEditPopup((prev) => !prev);
    window.location.reload();
  };

  return (
    <div className="popup-backdrop">
      <div className="new-task popup gap">
        <h2 className="fw-bold fs-body-lg">Task Details</h2>
        <div className={styles.input_field}>
          <label htmlFor="task-name" className="fs-body-sm text-neutral-700">
            Task Name
          </label>
          <input
            type="text"
            id="task-name"
            placeholder="Create a landing page"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className={styles.input_field}>
          <label htmlFor="task-status" className="fs-body-sm text-neutral-700">
            Task Status
          </label>
          <select
            name="task-status"
            id="task-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="default" disabled>
              Select Status
            </option>
            {taskStatuses.map((status, index) => (
              <option value={status} key={index}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="due-date" className="fs-body-sm text-neutral-700">
            Due Date
          </label>
          <input
            type="date"
            name="due-date"
            id="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor="task-note" className="fs-body-sm text-neutral-700">
            Task Note
          </label>
          <textarea
            name="task-note"
            id="task-note"
            cols={20}
            rows={5}
            placeholder="Add details..."
            value={taskNote}
            onChange={(e) => setTaskNote(e.target.value)}
          ></textarea>
        </div>

        <div
          className="flex"
          style={{ gap: "0.5rem", justifyContent: "end", marginTop: "1.5em" }}
        >
          <button
            className="btn--cancel"
            onClick={(e) => setShowEditPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add" onClick={handleSubmit}>
            Update Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
