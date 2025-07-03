/** @format */

import React from "react";
import styles from "./Contact.module.css";
import Addcontact from "./Addcontact";

export default function NewContact({
  isAddContact,
  isValue,
  setIsValue,
  setContacts,
  contacts,
  AddContact,
  Values,
  CancelAddContact,
}) {
  return (
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
          New contact
        </label>

        {isAddContact && (
          <Addcontact
            CancelAddContact={CancelAddContact}
            // handleOneOffClick={handleOneOffClick}
            isValue={isValue}
            Values={Values}
            contacts={contacts}
            setContacts={setContacts}
            setIsValue={setIsValue}
          />
        )}
      </div>
    </div>
  );
}
