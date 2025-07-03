/** @format */

import React, { useState } from "react";
import styles from "./Contact.module.css";
import Addcontact from "./Addcontact";
import NoContact from "./NoContact";
import ContactSaved from "./ContactSaved";
import NewContact from "./NewContact";

export default function Contact() {
  const [isAddContact, setIsAddContact] = useState(false);
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

  return (
    <section className={styles.contact}>
      <NewContact
        isAddContact={isAddContact}
        isValue={isValue}
        Values={Values}
        contacts={contacts}
        setContacts={setContacts}
        setIsValue={setIsValue}
        CancelAddContact={CancelAddContact}
        AddContact={AddContact}
      />

      {!isAddContact ? (
        <NoContact
          isAddContact={isAddContact}
          AddContact={AddContact}
          CancelAddContact={CancelAddContact}
          // visible={visible}
        />
      ) : (
        <>
          <ContactSaved />
        </>
      )}
    </section>
  );
}
