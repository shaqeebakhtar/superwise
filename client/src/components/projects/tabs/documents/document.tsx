import { useState } from "react";
import EditDocument from "@/components/popups/projects/document/edit-document";
import styles from "@/styles/documents.module.css";
import Link from "next/link";
import Dropdown from "@/components/dropdown";
import { Document } from "@/app/types/projects";

type Props = {
  document: Document;
  projectId: string;
};

const Document = ({ document, projectId }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let projects = JSON.parse(localStorage.getItem("projects")!);
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].documents.length; j++) {
        if (projects[i].documents[j].id === document.id) {
          projects[i].documents.splice(j, 1);
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
        <EditDocument setShowEditPopup={setShowEditPopup} document={document} />
      )}
      <div className={`${styles.document} bg-neutral-100 box-shadow`}>
        <Link
          href={document.docUrl}
          download={document.docName}
          className={styles.document__download}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1.25 11.375v1.688c0 .931.756 1.687 1.688 1.687h10.124c.933 0 1.688-.755 1.688-1.688v-1.687M11.375 8 8 11.375m0 0L4.625 8M8 11.375V1.25"
            />
          </svg>
        </Link>
        <div className={styles.document__image}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
          >
            <path
              fill="#ABABAB"
              d="M11.25 3A3.75 3.75 0 0 0 7.5 6.75v34.5A3.75 3.75 0 0 0 11.25 45h25.5a3.75 3.75 0 0 0 3.75-3.75V25.5A7.5 7.5 0 0 0 33 18h-3.75a3.75 3.75 0 0 1-3.75-3.75V10.5A7.5 7.5 0 0 0 18 3h-6.75Z"
            />
            <path
              fill="#ABABAB"
              d="M25.942 3.632A10.46 10.46 0 0 1 28.5 10.5v3.75c0 .414.336.75.75.75H33c2.626 0 5.027.964 6.868 2.558A19.535 19.535 0 0 0 25.942 3.632Z"
            />
          </svg>
        </div>
        <div
          className="flex"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.5em",
          }}
        >
          <p className="fw-semi-bold fs-body-sm">{document.docName}</p>
          <div className="dropdown">
            <button
              className={styles.document__menu}
              onClick={(e) => setShowMenu((prev) => !prev)}
            >
              <span className="visually-hidden">Document Menu</span>
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
            {showMenu && (
              <Dropdown onEdit={handleEdit} onDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
