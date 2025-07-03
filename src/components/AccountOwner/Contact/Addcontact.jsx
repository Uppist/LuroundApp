/** @format */

import React from "react";
import styles from "./Contact.module.css";
import { useNavigate } from "react-router-dom";

export default function Addcontact({
  CancelAddContact,
  isValue,
  Values,
  contacts,
  setContacts,
  setIsValue,
}) {
  const contactSaved = Object.values(isValue).every((val) => val.trim() !== "");

  const navigate = useNavigate();
  const Submit = () => {
    const exists = contacts.some((c) => c.email === isValue.email);
    if (exists) {
      alert("A contact with this email already exists.");
      return;
    }

    setContacts([...contacts, isValue]);
    setIsValue({ name: "", email: "", phone: "" });
    CancelAddContact();
    navigate("/contactsaved", {
      state: {
        contacts: [
          { name: isValue.name, email: isValue.email, phone: isValue.phone },
        ],
      },
    });
  };

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
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              placeholder='Name'
              name='name'
              value={isValue.name}
              onChange={Values}
            />
          </div>
          <div className={styles.contactdetails}>
            <label htmlFor='email'>Email address</label>
            <input
              id='email'
              placeholder='Email address'
              type='email'
              name='email'
              value={isValue.email}
              onChange={Values}
            />
          </div>
          <div className={styles.contactdetails}>
            <label htmlFor='phone'>Phone number</label>
            <input
              id='phone'
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
          <button
            className={styles.next}
            disabled={!contactSaved}
            onClick={Submit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
