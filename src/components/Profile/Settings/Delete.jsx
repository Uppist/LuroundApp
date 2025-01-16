/** @format */

import React from "react";
import styles from "./Setting.module.css";

export default function Delete() {
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Delete account</span>
        <p className={styles.p}>
          You will permanently lose all your data on our database after deleting
          your account
        </p>
        <div className={styles.canceldone}>
          <button className={styles.canceltime}>Cancel</button>
          <button type='submit' className={styles.donetime}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
