/** @format */

import React from "react";
import styles from "./Setting.module.css";

export default function ChangeWithdrawalPin() {
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Change withdrawal pin</span>
        <div className={styles.password}>
          <div>
            <label htmlFor=''>Current PIN</label>
            <input type='password' name='' id='' placeholder='Current pin' />
          </div>
          <div>
            <label htmlFor=''>New PIN</label>
            <input type='password' name='' id='' placeholder='New pin' />
          </div>
          <div>
            <label htmlFor=''>Confirm new PIN</label>
            <input
              type='password'
              name=''
              id=''
              placeholder='Confirm new pin'
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
