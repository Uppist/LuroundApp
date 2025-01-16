/** @format */

import React from "react";
import styles from "./Resend.module.css";
export default function Email({ CloseView }) {
  return (
    <>
      {" "}
      <div className={styles.popup}>
        <div className={styles.overlay} onClick={CloseView}></div>
        <div className={styles.email}>
          <div className={styles.quotesvg}>
            <label>Send Via Email</label>
            <svg
              onClick={CloseView}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='#1D2E2E'
                stroke-opacity='0.8'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <hr />

          <div className={styles.receiver}>
            <label>Receiver's email name</label>
            <input type='email' name='' id='' placeholder='k@gmail.com' />
          </div>

          <div className={styles.cancelsubmit}>
            <button className={styles.canceltime}>Cancel</button>
            <button className={styles.donetime} type='submit'>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
