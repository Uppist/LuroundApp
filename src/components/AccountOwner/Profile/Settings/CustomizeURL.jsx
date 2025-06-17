/** @format */

import React from "react";
import styles from "./Setting.module.css";

export default function CustomizeURL() {
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Customize your URL</span>
        <div className={styles.password}>
          <div>
            <label htmlFor=''>Current URL</label>
            <div className={styles.editinput}>
              {" "}
              <input type='password' name='' id='' placeholder='Current pin' />
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 6L18 9M5 16L4 20L8 19L19.586 7.414C19.9609 7.03895 20.1716 6.53033 20.1716 6C20.1716 5.46967 19.9609 4.96106 19.586 4.586L19.414 4.414C19.0389 4.03906 18.5303 3.82843 18 3.82843C17.4697 3.82843 16.9611 4.03906 16.586 4.414L5 16Z'
                  stroke='#0468DB'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>{" "}
            <p>
              Note: Your custom URL must contain 3-100 letters or numbers.
              Please do not use spaces, symbols, or special characters.
            </p>
          </div>
        </div>
        <div className={styles.canceldone}>
          <button className={styles.canceltime}>Cancel</button>
          <button type='submit' className={styles.donetime}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
