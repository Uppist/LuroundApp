/** @format */

import React from "react";
import styles from "./Support.module.css";

export default function Support() {
  return (
    <section className={styles.support}>
      <div>
        <label className={styles.contact}>Contact us</label>{" "}
      </div>
      <div className={styles.supportcontainer}>
        <div className={styles.subject}>
          <label>Subject</label>
          <input placeholder='Enter here' />
        </div>

        <div>
          {" "}
          <div className={styles.description}>
            <label>Description</label>
            <textarea placeholder='Enter the details of your request. Our team will respond as soon as possible.' />
          </div>
          <span>0/100</span>
        </div>

        <div className={styles.cancelsubmit}>
          <button className={styles.canceltime}>Cancel</button>
          <button className={styles.donetime} type='submit'>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
