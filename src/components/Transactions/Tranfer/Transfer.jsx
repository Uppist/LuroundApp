/** @format */

import React from "react";
import styles from "./transfer.module.css";

export default function Transfer({ CancelTransfer }) {
  return (
    <div className='popupcancel popupwithdrawpin'>
      <div className='overlay' onClick={CancelTransfer}></div>
      <div className='withdrawpin'>
        <div className={styles.container}>
          <div className={styles.setpin}>
            <span>Add an account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
