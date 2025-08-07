/** @format */

import React from "react";
import styles from "./style.module.css";

export default function EventDescription() {
  return (
    <>
      <div className={styles.timeservice}>
        <span>Event Name</span>
        <input
          type='text'
          placeholder='eg. Business, Career & Leadership Summit'
        />
      </div>

      <div className={styles.timedescription}>
        <span>Description</span>
        <textarea placeholder='Write a brief descriptive summary of the event'></textarea>
        <span className={styles.count}>0/500</span>
      </div>
    </>
  );
}
