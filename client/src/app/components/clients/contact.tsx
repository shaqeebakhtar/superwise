import React, { useEffect, useState } from "react";
import EditContact from "@/app/components/popups/clients/contact/edit-contact";
import styles from "@/app/styles/clients.module.css";
import Dropdown from "../dropdown";
import { Client, Contact } from "@/app/types/clients";

type Props = {
  contact: Contact;
};

const Contact = ({ contact }: Props) => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [clients, setClients] = useState([]);

  const getClientId = (clients: Client[]) => {
    for (let i = 0; i < clients.length; i++) {
      for (let j = 0; j < clients[i].contacts!.length; j++) {
        if (clients[i].contacts![j].id === contact.id) {
          return clients[i].id;
        }
      }
    }
  };

  let clientId;
  const handleEdit = () => {
    clientId = getClientId(clients);
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let organizations = JSON.parse(localStorage.getItem("organizations")!);

    for (let i = 0; i < organizations.length; i++) {
      for (let j = 0; j < organizations[i].contacts.length; j++) {
        if (organizations[i].contacts[j].id === contact.id) {
          organizations[i].contacts.splice(j, 1);
        }
      }
    }

    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowMenu((prev) => !prev);
    window.location.reload();
  };

  useEffect(() => {
    setClients(JSON.parse(localStorage.getItem("organizations")!));
  }, [localStorage.getItem("organizations")]);

  return (
    <>
      {showEditPopup && (
        <EditContact
          setShowEditPopup={setShowEditPopup}
          clientContact={contact}
        />
      )}
      <div className={styles.contact}>
        <div className={styles.contact__details}>
          <p className="fw-medium fs-body-sm" style={{ lineHeight: "1.3" }}>
            {contact.name}
          </p>
          <p className="fs-body-sm text-neutral-700">{contact.email}</p>
        </div>
        <div className="flex" style={{ alignItems: "center", gap: "0.5rem" }}>
          <button className={styles.btn__invite}>
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
                d="M4.5 9 2.452 2.344A44.825 44.825 0 0 1 16.114 9a44.826 44.826 0 0 1-13.662 6.657L4.5 9Zm0 0h5.625"
              />
            </svg>
            <span>Invite</span>
          </button>
          <div className="dropdown">
            <button
              className={styles.contact__menu}
              onClick={(e) => setShowMenu((prev) => !prev)}
            >
              <span className="visually-hidden">Contact Menu</span>
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

export default Contact;
