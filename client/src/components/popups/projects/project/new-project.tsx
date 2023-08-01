import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "@/styles/popup.module.css";
import getId from "@/app/utils/generate-id";
import Link from "next/link";
import { Client } from "@/app/types/clients";

type Props = {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
};

const NewProject = ({ setShowPopup }: Props) => {
  const projectStatuses = ["Not Started", "In Progress", "Completed"];

  const [projectName, setProjectName] = useState("");
  const [clientOrg, setClientOrg] = useState("default");
  const [status, setStatus] = useState("default");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const [clients, setClients] = useState<Client[]>([]);

  const getData = useCallback(() => {
    const data: Client[] = JSON.parse(localStorage.getItem("organizations")!);
    setClients(data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    if (
      !projectName ||
      !clientOrg ||
      !status ||
      !startDate ||
      !endDate ||
      !projectDesc
    ) {
      alert("All field is required");
      return;
    }

    let projects = JSON.parse(localStorage.getItem("projects")!);
    if (!projects) projects = [];

    let projectObj = {
      id: getId(),
      projectName: projectName,
      projectStatus: status,
      clientName: clientOrg,
      startDate: startDate,
      endDate: endDate,
      projectDescription: projectDesc,
      tasks: [],
      documents: [],
    };

    projects.push(projectObj);
    localStorage.setItem("projects", JSON.stringify(projects));
    setShowPopup((prev) => !prev);
    window.location.reload();
  };

  return (
    <div className="popup-backdrop">
      <div className="new-project popup gap">
        <h2 className="fw-bold fs-body-lg">Project Details</h2>
        <div className={styles.input_field}>
          <label htmlFor="project-name" className="fs-body-sm text-neutral-700">
            Project Name
          </label>
          <input
            type="text"
            id="project-name"
            placeholder="Website Development"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor="client-org" className="fs-body-sm text-neutral-700">
            Client Organization
          </label>
          <select
            name="client-org"
            id="client-org"
            value={clientOrg}
            onChange={(e) => setClientOrg(e.target.value)}
          >
            <option value="default" disabled>
              Select a Client
            </option>
            {clients &&
              clients.length > 0 &&
              clients.map((client, index) => (
                <option value={client.organization} key={index}>
                  {client.organization}
                </option>
              ))}
          </select>
          <Link href={`/clients`} className="fs-body-x-sm text-primary-400">
            Create a new client organization
          </Link>
        </div>
        <div className={styles.input_field}>
          <label
            htmlFor="project-status"
            className="fs-body-sm text-neutral-700"
          >
            Project Status
          </label>
          <select
            name="project-status"
            id="project-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="default" disabled>
              Select Status
            </option>
            {projectStatuses.map((status, index) => (
              <option value={status} key={index}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div
          className={`${styles.project_timeline} flex`}
          style={{ alignItems: "center", gap: "1rem" }}
        >
          <div className={styles.input_field}>
            <label htmlFor="start-date" className="fs-body-sm text-neutral-700">
              Start Date
            </label>
            <input
              type="date"
              name="start-date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.input_field}>
            <label htmlFor="end-date" className="fs-body-sm text-neutral-700">
              End Date
            </label>
            <input
              type="date"
              name="end-date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="project-desc" className="fs-body-sm text-neutral-700">
            Project Description
          </label>
          <textarea
            name="project-desc"
            id="project-desc"
            cols={20}
            rows={5}
            placeholder="Add a short description..."
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
          ></textarea>
        </div>

        <div
          className="flex"
          style={{ gap: "0.5rem", justifyContent: "end", marginTop: "1.5em" }}
        >
          <button
            className="btn--cancel"
            onClick={(e) => setShowPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add" onClick={handleSubmit}>
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
