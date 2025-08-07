/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import scan from "../../elements/scan.jpg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../Context";
export default function NavBar() {
  const [userData, setUserData] = useContext(userContext);
  const nameFormatted = userData?.displayName
    ? userData.displayName.replace(/ /g, "_")
    : "";
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={userData.logo || scan} alt='' />
        <span>{userData.company || "no company yet"}</span>
      </div>

      <ul className={styles.list}>
        <Link to={`/profile/${nameFormatted}`}>
          <li>Profile</li>
        </Link>
        <Link to='/services'>
          <li>Service</li>
        </Link>
        <Link to='/stores'>
          <li>Storefront</li>
        </Link>
      </ul>
    </nav>
  );
}
