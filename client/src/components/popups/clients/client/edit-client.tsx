import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/popup.module.css";
import { Client } from "@/app/types/clients";

type Props = {
  setShowEditPopup: Dispatch<SetStateAction<boolean>>;
  client: Client;
};

const EditClientOrganization = ({ setShowEditPopup, client }: Props) => {
  const [organizationName, setOrganizationName] = useState(client.organization);

  const handleSubmit = () => {
    if (!organizationName) alert("Organization Name is required");

    let organizations = JSON.parse(localStorage.getItem("organizations")!);
    if (!organizations) organizations = [];

    let orgObj = {
      id: client.id,
      organization: organizationName,
      contacts: client.contacts,
    };

    for (let i = 0; i < organizations.length; i++) {
      if (organizations[i].id === client.id) {
        organizations[i] = orgObj;
      }
    }

    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowEditPopup((prev) => !prev);
    window.location.reload();
  };

  return (
    <div className="popup-backdrop">
      <div className={"new-client-org popup gap"}>
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
            onClick={(e) => setShowEditPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add" onClick={handleSubmit}>
            Update Organization
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditClientOrganization;
