"use client";

import ClientOrganization from "@/app/components/clients/client";
import EmptyState from "@/app/components/empty-state/empty-state";
import Navbar from "@/app/components/navbar/navbar";
import NewClientOrganization from "@/app/components/popups/clients/client/new-client";
import styles from "@/app/styles/clients.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Client } from "../types/clients";

const Client = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("organizations")!);
    if (JSON.stringify(data) !== JSON.stringify(clients)) {
      setClients(data);
    }
  }, [clients]);

  return (
    <>
      <Navbar />
      {showPopup && <NewClientOrganization setShowPopup={setShowPopup} />}
      <main className={styles.clients}>
        <header className={styles.clients__header}>
          <h1 className="fw-bold fs-title">Client Organizations</h1>
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
            <span>New Client Organization</span>
          </button>
        </header>
        {clients && clients.length > 0 ? (
          <div className={styles.all_clients}>
            {clients &&
              clients.map((client) => {
                return <ClientOrganization key={client.id} client={client} />;
              })}
          </div>
        ) : (
          <EmptyState
            title={"No Clients in your clients list"}
            button={"New Client Organization"}
            message={"to add a new client."}
          />
        )}
      </main>
    </>
  );
};

export default Client;
