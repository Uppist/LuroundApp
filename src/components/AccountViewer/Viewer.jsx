/** @format */

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";

import luround from "../elements/LuroundApp.png";
import styles from "./Viewer.module.css";
import About from "./Profile/About/About";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";

export default function Viewer() {
  const location = useLocation();
  const navigate = useNavigate();

  const [viewerData, setViewerData] = useState(null);

  useEffect(() => {
    const stateData = location.state;

    if (stateData) {
      setViewerData(stateData);
      localStorage.setItem("viewerData", JSON.stringify(stateData));
    } else {
      const storedData = localStorage.getItem("userData");

      if (storedData) {
        setViewerData(JSON.parse(storedData));
      } else {
        // Redirect or handle no data
        navigate("/");
      }
    }
  }, [location.state, navigate]);

  if (!viewerData) return null;

  const { name, company, url, logo, occupation, photoUrl, about } = viewerData;

  console.log("data from viewer", viewerData);
  return (
    <div className={styles.viewer}>
      <Layout logo={logo} company={company}>
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
      </Layout>
    </div>
  );
}
