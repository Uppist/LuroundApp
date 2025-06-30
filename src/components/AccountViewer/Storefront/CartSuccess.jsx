/** @format */

import React from "react";
import styles from './store.module.css';
import checkIcon from './public/assets/png/check.png'; // Adjust the path as necessary

export default function CartSuccess({ onBack }) {
  const handleOkayClick = () => {
    onBack(); // Calls the callback to return to the store view
  };

  return (
    <div className={styles.successContainer}>
      <img src={checkIcon} alt="Success Icon" className={styles.successIcon} />
      <h1 className={styles.successTitle}>Transaction Successful</h1>
      <button className={styles.successButton} onClick={handleOkayClick}>
        Okay
      </button>
    </div>
  );
}