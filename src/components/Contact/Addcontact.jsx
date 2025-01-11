/** @format */

import React from "react";
import styles from "./Contact.module.css";

export default function Addcontact({ CancelAddContact }) {
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
            <input placeholder='Name' />
          </div>
          <div className={styles.contactdetails}>
            <label>Email address</label>
            <input placeholder='Email address' type='email' />
          </div>
          <div className={styles.contactdetails}>
            <label>Phone number</label>
            <input placeholder='Phone number' />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={CancelAddContact}>
            Cancel
          </button>
          <button className={styles.next}>Save</button>
        </div>
      </div>
    </div>
  );
}
