/** @format */

import React, { useContext } from "react";
import styles from "./Contact.module.css";
import Addcontact from "./Addcontact";
import arrow from "../../../components/elements/support/Arrow.svg";

export default function NewContact({
  isAddContact,
  isValue,
  setIsValue,
  setContacts,
  contacts,
  AddContact,
  Values,
  CancelAddContact,
  isContacts,
  setIsContacts,
}) {
  const mobileview = window.innerWidth <= 900;

  console.log(isContacts);

  console.log(isValue);

  return (
    <div className={styles.addcontacts}>
      <div className={styles.contactImg}>
        <img src={arrow} alt='' />
        <label>Contacts</label>
      </div>
      <div>
        {!mobileview || (mobileview && isContacts.length > 0) ? (
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
          </div>
        ) : (
          <div className={styles.addnewcontact}>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
                fill='#00CCCC'
              />
            </svg>
            <label
              className={` ${isAddContact ? "open" : ""}`}
              onClick={AddContact}
            >
              Add new
            </label>
          </div>
        )}

        {isAddContact && (
          <>
            <Addcontact
              CancelAddContact={CancelAddContact}
              // handleOneOffClick={handleOneOffClick}
              isValue={isValue}
              Values={Values}
              contacts={contacts}
              setContacts={setContacts}
              isContacts={isContacts}
              setIsContacts={setIsContacts}
              setIsValue={setIsValue}
            />
          </>
        )}
      </div>
    </div>
  );
}
