/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import scan from "../../elements/scan.jpg";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../Context";
import axios from "axios";
import { UserViewerContext } from "../../ViewerContext";
export default function NavBar() {
  const [userViewer, setUserViewer] = useContext(UserViewerContext);
  const nameFormatted = userViewer.displayName
    ? userViewer.displayName.replace(/ /g, "_")
    : "default_user";
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={userViewer.logo || scan} alt='' />
        <span>{userViewer.company || "no company yet"}</span>
      </div>

      <ul className={styles.list}>
        <Link to={`/profile/${nameFormatted}`} state={{ userViewer }}>
          <li>Profile</li>
        </Link>

        <Link to={`/services/${nameFormatted}`}>
          <li>Service</li>
        </Link>
        <Link to={`/stores/${nameFormatted}`}>
          <li>Storefront</li>
        </Link>
      </ul>
    </nav>
  );
}
