"use client";

import { useState } from "react";
import Contact from "@/app/components/clients/contact";
import NewContact from "@/app/components/popups/clients/contact/new-contact";
import EditClientOrganization from "@/app/components/popups/clients/client/edit-client";
import styles from "@/app/styles/clients.module.css";
import Dropdown from "../dropdown";
import Image from "next/image";
import { Client } from "@/app/types/clients";

type Props = {
  client: Client;
};

const ClientOrganization = ({ client }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleEdit = () => {
    setShowEditPopup((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    let organizations = JSON.parse(localStorage.getItem("organizations")!);

    for (let i = 0; i < organizations.length; i++) {
      if (organizations[i].id === client.id) {
        organizations.splice(i, 1);
      }
    }

    localStorage.setItem("organizations", JSON.stringify(organizations));
    setShowMenu((prev) => !prev);
    window.location.reload();
  };

  return (
    <>
      {showPopup && (
        <NewContact setShowPopup={setShowPopup} clientId={client.id} />
      )}
      {showEditPopup && (
        <EditClientOrganization
          setShowEditPopup={setShowEditPopup}
          client={client}
        />
      )}

      <div
        className={`${styles.client_organization}  bg-neutral-100 box-shadow`}
      >
        <div className={styles.organization}>
          <div
            className={`${styles.client__info} flex`}
            style={{ alignItems: "center", gap: "0.5rem" }}
          >
            <div className={styles.organization__logo}>
              <Image
                src="/assets/org-logo.jpeg"
                alt="org logo"
                width={35}
                height={35}
              />
            </div>
            <h3 className="fw-bold fs-body-lg" style={{ lineHeight: "1.1" }}>
              {client.organization}
            </h3>
          </div>
          <div className="flex" style={{ alignItems: "center", gap: "0.5rem" }}>
            <button
              className={`btn--add ${styles.org_btn} flex`}
              onClick={(e) => setShowPopup((prev) => !prev)}
            >
              <Image
                src="/assets/plus.svg"
                alt="plus sign"
                width={18}
                height={18}
              />
              <span>Add Contact</span>
            </button>
            <div className="dropdown">
              <button
                className={styles.organization__menu}
                onClick={(e) => setShowMenu((prev) => !prev)}
              >
                <span className="visually-hidden">Organization Menu</span>
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
        {client.contacts && client.contacts.length > 0 && (
          <div className={styles.contacts}>
            {client.contacts &&
              client.contacts.map((contact) => {
                return <Contact contact={contact} key={contact.id} />;
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default ClientOrganization;
