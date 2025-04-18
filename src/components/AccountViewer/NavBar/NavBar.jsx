/** @format */

import React from "react";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <label htmlFor=''>Logo</label>

      <ul className={styles.list}>
        <li>Profile</li>
        <li>Service</li>
        <li>Storefront</li>
      </ul>
    </nav>
  );
}
