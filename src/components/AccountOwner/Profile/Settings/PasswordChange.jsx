/** @format */

import React from "react";
import styles from "./Setting.module.css";

export default function PasswordChange() {
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Change password</span>
        <div className={styles.password}>
          <div>
            <label htmlFor=''>Current password</label>
            <input
              type='password'
              name=''
              id=''
              placeholder='Current password'
            />
          </div>
          <div>
            <label htmlFor=''>New password</label>
            <input type='password' name='' id='' placeholder='New password' />
          </div>
          <div>
            <label htmlFor=''>Confirm new password</label>
            <input
              type='password'
              name=''
              id=''
              placeholder='Confirm new password'
            />
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
