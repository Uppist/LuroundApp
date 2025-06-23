/** @format */

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

export default function Success() {

  return (
    <div className={styles.successContainer}>
      <img src="./public/assets/png/check.png" alt="Success Icon" className={styles.successIcon} />
      <h1 className={styles.successTitle}>Successful</h1>
      <h3>You have successfully booked a Personal Consultation service</h3>
      <Link to='/services'>
        <button className={styles.successButton}>
          Okay
        </button>
      </Link>
    </div>
  );
}