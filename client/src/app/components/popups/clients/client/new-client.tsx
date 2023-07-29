import React, { Dispatch, SetStateAction, useState } from "react";
import getId from "@/app/utils/generate-id";
import styles from "@/app/styles/popup.module.css";

type Props = {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
};

const NewClientOrganization = ({ setShowPopup }: Props) => {
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit = () => {
    if (!organizationName) {
      alert("Organization Name is required");
      return;
    }

    let organizations = JSON.parse(localStorage.getItem("organizations")!);
    if (!organizations) organizations = [];

    let orgObj = {
      id: getId(),
      organization: organizationName,
      contacts: [],
    };

    organizations.push(orgObj);
    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowPopup((prev) => !prev);
    window.location.reload();
  };

  return (
    <div className="popup-backdrop">
      <div className="new-client-org popup gap">
        <h2 className="fw-bold fs-body-lg">Add New Client</h2>
        <div className={styles.input_field}>
          <label htmlFor="new-client" className="fs-body-sm text-neutral-700">
            Client Organization Name
          </label>
          <input
            type="text"
            id="new-client"
            placeholder="Wisdmlabs"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
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
            Add Organization
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewClientOrganization;
