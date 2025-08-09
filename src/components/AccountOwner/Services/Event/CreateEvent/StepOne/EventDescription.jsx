/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";

export default function EventDescription({ createService, handleChange }) {
  return (
    <>
      <div className={styles.timeservice}>
        <span>Event Name</span>
        <input
          type='text'
          name='service_name'
          value={createService.service_name}
          onChange={handleChange}
          placeholder='eg. Business, Career & Leadership Summit'
        />
      </div>

      <div className={styles.timedescription}>
        <span>Description</span>
        <textarea
          name='description'
          value={createService.description}
          onChange={handleChange}
          placeholder='Write a brief descriptive summary of the event'
        ></textarea>
        <span className={styles.count}>0/500</span>
      </div>
    </>
  );
}
