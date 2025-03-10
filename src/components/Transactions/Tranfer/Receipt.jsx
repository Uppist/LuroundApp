/** @format */

import React from "react";
import styles from "./transfer.module.css";

export default function Receipt({ Cancel }) {
  return (
    <section className='popupcancel popupwithdrawpin'>
      <div className='overlay' onClick={Cancel}></div>
      <div className={styles.receipt}>
        <div className={styles.withdraw}>
          <span>Withdrawal Receipt</span>
        </div>

        <div className={styles.details}>
          <div className={styles.detailcon}>
            <label htmlFor=''>Withdrawal Details</label>
            <div className={styles.detailtext}>
              <div className={styles.detail}>
                <label htmlFor=''>Account name:</label>
                <span>Jane Cooper</span>
              </div>
              <div className={styles.detail}>
                <label htmlFor=''>Account number:</label>
                <span>0123456789</span>
              </div>
              <div className={styles.detail}>
                <label htmlFor=''>Date:</label>
                <span>Sunday, 28th Dec. 2023</span>
              </div>
              <div className={styles.detail}>
                <label htmlFor=''>Time:</label>
                <span>06:29AM</span>
              </div>
              <div className={styles.detail}>
                <label htmlFor=''>Reference code:</label>
                <span>Wth0123456789</span>
              </div>
            </div>
            <span>5,000</span>
          </div>
        </div>
        <button>Download Receipt</button>
        <span className={styles.exit}>Exit</span>
      </div>
    </section>
  );
}
