/** @format */

import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar({ logo, company }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt='' />
        <span>{company}</span>
      </div>

      <ul className={styles.list}>
        <Link to='/viewowner'>
          <li>Profile</li>
        </Link>
        <Link to='/services'>
          <li>Service</li>
        </Link>
        <li>Storefront</li>
      </ul>
    </nav>
  );
}
