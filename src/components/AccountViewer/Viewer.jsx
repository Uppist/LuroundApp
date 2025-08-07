/** @format */

import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile/Profile";

import luround from "../elements/LuroundApp.png";
import styles from "./Viewer.module.css";
import About from "./Profile/About/About";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../Context";

export default function Viewer() {
  return (
    <div className={styles.viewer}>
      <div className={styles.container}>
        <Profile />
        <hr />
        <About />
      </div>

      <div className={styles.footer}>
        <p>Powered by</p>
        <img src={luround} alt="Luround's logo" />
      </div>
    </div>
  );
}
