import React, { Dispatch, SetStateAction, useState } from "react";
import getId from "@/app/utils/generate-id";
import styles from "@/styles/popup.module.css";

type Props = {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
  clientId: string;
};

const NewContact = ({ setShowPopup, clientId }: Props) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const handleSubmit = () => {
    if (!clientName || !clientEmail) {
      alert("All field is required");
      return;
    }

    let organizations = JSON.parse(localStorage.getItem("organizations")!);

    let contactObj = {
      id: getId(),
      name: clientName,
      email: clientEmail,
    };

    for (let i = 0; i < organizations.length; i++) {
      if (organizations[i].id === clientId) {
        organizations[i].contacts.push(contactObj);
      }
    }

    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowPopup((prev) => !prev);
    window.location.reload();
  };

  return (
    <div className="popup-backdrop">
      <div className="new-contact popup gap">
        <h2 className="fw-bold fs-body-lg">New Client Contact</h2>
        <div className={styles.input_field}>
          <label htmlFor="client-name" className="fs-body-sm text-neutral-700">
            Client Name
          </label>
          <input
            type="text"
            id="client-name"
            placeholder="Full Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor="client-email" className="fs-body-sm text-neutral-700">
            Email Address
          </label>
          <input
            type="email"
            id="client-email"
            placeholder="example@domain.com"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
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
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
