/** @format */

import React, { useState } from "react";
import styles from "./Contact.module.css";
import Addcontact from "./Addcontact";
import NoContact from "./NoContact";
import ContactSaved from "./ContactSaved";

export default function Contact() {
  const [isAddContact, setIsAddContact] = useState(false);
  const [visible, setVisible] = useState("");
  const [activeComponent, setActiveComponent] = useState("nocontact");
  const [isValue, setIsValue] = useState({ name: "", email: "", phone: "" });
  const [contacts, setContacts] = useState([]);

  function Values(e) {
    setIsValue({ ...isValue, [e.target.name]: e.target.value });
  }

  function AddContact() {
    setIsAddContact(true);
  }

  function CancelAddContact() {
    setIsAddContact(false);
  }

  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.addcontacts}>
        <label>Contacts</label>
        <div className={styles.addcontact}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
              fill='#FFFFFF'
            />
          </svg>
          <label
            className={` ${isAddContact ? "open" : ""}`}
            onClick={AddContact}
          >
            Add contact
          </label>

          {isAddContact && (
            <Addcontact
              CancelAddContact={CancelAddContact}
              handleOneOffClick={handleOneOffClick}
              isValue={isValue}
              Values={Values}
              contacts={contacts}
              setContacts={setContacts}
              setIsValue={setIsValue}
            />
          )}
        </div>
      </div>

      {activeComponent === "contactsaved" && (
        <ContactSaved contacts={contacts} />
      )}

      {!isAddContact && activeComponent === "nocontact" && (
        <NoContact
          isAddContact={isAddContact}
          AddContact={AddContact}
          CancelAddContact={CancelAddContact}
          visible={visible}
        />
      )}
    </section>
  );
}
