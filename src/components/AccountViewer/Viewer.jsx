/** @format */

import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile/Profile";

import luround from "../elements/LuroundApp.png";
import styles from "./Viewer.module.css";
import About from "./Profile/About/About";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserViewerContext } from "../ViewerContext";

export default function Viewer() {
  const [userViewer, setUserViewer] = useContext(UserViewerContext);

  return (
    <div className={styles.viewer}>
      <div className={styles.container}>
        <Profile userData={userViewer} />
        <hr />
        <About userData={userViewer} />
      </div>

      <div className={styles.footer}>
        <p>Powered by</p>
        <img src={luround} alt="Luround's logo" />
      </div>
    </div>
  );
}
