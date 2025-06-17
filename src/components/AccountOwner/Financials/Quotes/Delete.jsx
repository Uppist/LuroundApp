/** @format */

import React from "react";
import styles from "./Quotes.module.css";

export default function Delete({ CloseView }) {
  return (
    <>
      {" "}
      <div className={styles.popup}>
        <div className={styles.overlay} onClick={CloseView}></div>
        <div className={styles.delete}>
          <label>Are you sure you want to delete this quote?</label>

          <div className={styles.cancelsubmit}>
            <button className={styles.canceltime} onClick={CloseView}>
              Cancel
            </button>
            <button className={styles.donetime} type='submit'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
