/** @format */

import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";

import luround from "../elements/LuroundApp.png";
import styles from "./Viewer.module.css";
import About from "./Profile/About/About";
import { useLocation, useNavigate } from "react-router-dom";

export default function Viewer() {
  const location = useLocation();
  const navigate = useNavigate();

  const [viewerData, setViewerData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const user = JSON.parse(data);
      console.log(user);
      setViewerData(user);
    } else {
      console.log("No user data found in localStorage");
      navigate("/");
    }
  }, [navigate]);

  if (!viewerData) {
    return null;
  }

  const { name, company, url, logo, occupation, photoUrl, about } = viewerData;

  console.log("data from viewer", viewerData);

  return (
    <div className={styles.viewer}>
      <div className={styles.container}>
        <Profile
          name={name}
          url={url}
          logo={logo}
          Occupation={occupation}
          photoUrl={photoUrl}
        />
        <hr />
        <About about={about} />
      </div>

      <div className={styles.footer}>
        <p>Powered by</p>
        <img src={luround} alt="Luround's logo" />
      </div>
    </div>
  );
}
