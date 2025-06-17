/** @format */

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Addcontact({
  CancelAddContact,
  handleOneOffClick,
  isValue,
  Values,
  contacts,
  setContacts,
  setIsValue,
}) {
  function Submit() {
    console.log("Names: ", isValue);
    setContacts([...contacts, isValue]);
    setIsValue({ name: "", email: "", phone: "" });
    handleOneOffClick("contactsaved");
    CancelAddContact();
  }
  return (
    <div className='popupcancel popupwithdrawpin'>
      <div className='overlay' onClick={CancelAddContact}></div>
      <div className={styles.contactcontainer}>
        <div className={styles.contactline}>
          <div className={styles.contactsvg}>
            <label>Add Contact</label>
            <svg
              onClick={CancelAddContact}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='#1D2E2E'
                strokeOpacity='0.8'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <hr />
        </div>

        <div className={styles.contactinfo}>
          <div className={styles.contactdetails}>
            <label>Name</label>
            <input
              placeholder='Name'
              name='name'
              value={isValue.name}
              onChange={Values}
            />
          </div>
          <div className={styles.contactdetails}>
            <label>Email address</label>
            <input
              placeholder='Email address'
              type='email'
              name='email'
              value={isValue.email}
              onChange={Values}
            />
          </div>
          <div className={styles.contactdetails}>
            <label>Phone number</label>
            <input
              placeholder='Phone number'
              name='phone'
              value={isValue.phone}
              onChange={Values}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={CancelAddContact}>
            Cancel
          </button>
          <button className={styles.next} onClick={Submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
