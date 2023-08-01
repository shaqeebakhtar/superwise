import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/popup.module.css";
import { Contact } from "@/app/types/clients";

type Props = {
  setShowEditPopup: Dispatch<SetStateAction<boolean>>;
  clientContact: Contact;
};

const EditContact = ({ setShowEditPopup, clientContact }: Props) => {
  const [clientName, setClientName] = useState(clientContact.name);
  const [clientEmail, setClientEmail] = useState(clientContact.email);

  const handleSubmit = () => {
    if (!clientName || !clientEmail) alert("All fields are required!");

    let organizations = JSON.parse(localStorage.getItem("organizations")!);

    let contactObj = {
      id: clientContact.id,
      name: clientName,
      email: clientEmail,
    };

    for (let i = 0; i < organizations.length; i++) {
      for (let j = 0; j < organizations[i].contacts.length; j++) {
        if (organizations[i].contacts[j].id === clientContact.id) {
          organizations[i].contacts[j] = contactObj;
        }
      }
    }

    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowEditPopup((prev) => !prev);
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
            onClick={(e) => setShowEditPopup((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="btn--add" onClick={handleSubmit}>
            Update Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
