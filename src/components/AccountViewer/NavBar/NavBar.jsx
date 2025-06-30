/** @format */

import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();

  const [viewerData, setViewerData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const user = JSON.parse(data);
      setViewerData(user);
    } else {
      console.log("No user data found in localStorage");
      navigate("/");
    }
  }, [navigate]);

  if (!viewerData) {
    return null;
  }

  const { company, logo, name } = viewerData;

  const nameFormatted = name.replace(/\s+/g, "_");

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt='' />
        <span>{company}</span>
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
