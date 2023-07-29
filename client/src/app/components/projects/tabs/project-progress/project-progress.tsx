import React, { useState } from "react";
import EmptyState from "@/app/components/empty-state/empty-state";
import NewTask from "@/app/components/popups/projects/task/new-task";
import Task from "@/app/components/projects/tabs/project-progress/task";
import styles from "@/app/styles/tabs.module.css";
import Image from "next/image";
import { Task as ITask } from "@/app/types/projects";

type Props = {
  tasks: ITask[];
  projectId: string;
};

const ProjectProgress = ({ tasks, projectId }: Props) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <NewTask setShowPopup={setShowPopup} projectId={projectId} />
      )}
      <div className={styles.project_progress}>
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
          <span>New Task</span>
        </button>
        {tasks && tasks.length > 0 ? (
          <div className={styles.all_tasks}>
            {tasks.map((task) => {
              return <Task task={task} key={task.id} projectId={projectId} />;
            })}
          </div>
        ) : (
          <EmptyState
            title={"No Tasks in your project progress"}
            button={"New Task"}
            message={"to add a new task."}
          />
        )}
      </div>
    </>
  );
};

export default ProjectProgress;
