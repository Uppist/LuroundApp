/** @format */

import React from "react";
import styles from "./Contact.module.css";

export default function Transaction({ Cancel }) {
  return (
    <div className='popupcancel popupwithdrawpin'>
      <div className='overlay' onClick={Cancel}></div>
      <div className={styles.contactcontainer}>
        <div className={styles.contactline}>
          <div className={styles.contactsvg}>
            <label>Transaction History</label>
            <svg
              onClick={Cancel}
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

        <div>
          <div>
            <span>Date</span>
            <span>Name</span>
            <span>Amount</span>
          </div>
          <div>
            <div>
              <span>22/04/24</span>
              <span>Kafayah</span>
              <span>₦82,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
