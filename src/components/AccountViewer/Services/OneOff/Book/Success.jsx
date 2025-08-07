/** @format */

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../style.module.css";
import { Link } from "react-router-dom";
import checkIcon from "/public/assets/png/check.png"; // Adjust the path as necessary

export default function Success() {
  const location = useLocation();

  const { data } = location.state || {};
  console.log(data);

  return (
    <div className={styles.successContainer}>
      <img src={checkIcon} alt='Success Icon' className={styles.successIcon} />
      <h1 className={styles.successTitle}>Successful</h1>
      <h3>You have successfully booked a {data.service_name} service</h3>
      <Link to='/services'>
        <button className={styles.successButton}>Okay</button>
      </Link>
    </div>
  );
}
