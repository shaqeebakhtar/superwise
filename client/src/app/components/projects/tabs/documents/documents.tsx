import React, { useState } from "react";
import Document from "@/app/components/projects/tabs/documents/document";
import EmptyState from "@/app/components/empty-state/empty-state";
import NewDocument from "@/app/components/popups/projects/document/new-document";
import styles from "@/app/styles/documents.module.css";
import Image from "next/image";
import { Document as IDocument } from "@/app/types/projects";

type Props = {
  documents: IDocument[];
  projectId: string;
};

const Documents = ({ documents, projectId }: Props) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <NewDocument setShowPopup={setShowPopup} projectId={projectId} />
      )}
      <div className={styles.documents}>
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
          <span>New Document</span>
        </button>
        {documents && documents.length > 0 ? (
          <div className={styles.all_documents}>
            {documents.map((document) => {
              return (
                <Document
                  document={document}
                  key={document.id}
                  projectId={projectId}
                />
              );
            })}
          </div>
        ) : (
          <EmptyState
            title={"No Documents in your documents list"}
            button={"New Document"}
            message={"to add a new document."}
          />
        )}
      </div>
    </>
  );
};

export default Documents;
