/** @format */

import React, { useState } from "react";
import styles from "./Setting.module.css";

export default function Notifications() {
  const [isSuspended, setIsSuspended] = useState(false);
  function toggle() {
    setIsSuspended((prevState) => !prevState);
  }
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Notifications</span>
        <div className={styles.suspend}>
          <div className={styles.suspenddiv}>
            <span> Push Notification </span>
          </div>
          <div className={styles.togglebutton}>
            <input
              type='checkbox'
              id='check1'
              className='check'
              onChange={toggle}
              checked={isSuspended}
            />
            <label for='check1' className={styles.toggle}></label>
          </div>
        </div>
        <span className={styles.label}>All notifications</span>
        <div className={styles.suspend}>
          <div className={styles.suspenddiv}>
            <span> New </span>
          </div>
          <div className={styles.togglebutton}>
            <input
              type='checkbox'
              id='check2'
              className='check'
              onChange={toggle}
              checked={isSuspended}
            />
            <label for='check2' className={styles.toggle}></label>
          </div>
        </div>
        <div className={styles.suspend}>
          <div className={styles.suspenddiv}>
            <span> Confirmations </span>
          </div>
          <div className={styles.togglebutton}>
            <input
              type='checkbox'
              id='check3'
              className='check'
              onChange={toggle}
              checked={isSuspended}
            />
            <label for='check3' className={styles.toggle}></label>
          </div>
        </div>
        <div className={styles.suspend}>
          <div className={styles.suspenddiv}>
            <span> Rescheduled </span>
          </div>
          <div className={styles.togglebutton}>
            <input
              type='checkbox'
              id='check4'
              className='check'
              onChange={toggle}
              checked={isSuspended}
            />
            <label for='check4' className={styles.toggle}></label>
          </div>
        </div>
        <div className={styles.suspend}>
          <div className={styles.suspenddiv}>
            <span> Cancelled </span>
          </div>
          <div className={styles.togglebutton}>
            <input
              type='checkbox'
              id='check5'
              className='check'
              onChange={toggle}
              checked={isSuspended}
            />
            <label for='check5' className={styles.toggle}></label>
          </div>
        </div>
      </div>
    </>
  );
}
