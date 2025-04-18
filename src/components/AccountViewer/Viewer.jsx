/** @format */

import React from "react";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";

import luround from "../elements/LuroundApp.png";
import styles from "./Viewer.module.css";
import About from "./Profile/About/About";

export default function Viewer() {
  return (
    <div className={styles.viewer}>
      <NavBar />
      <Profile />
      <hr />
      <About />

      <div className={styles.footer}>
        <p>Powered by</p>
        <img src={luround} alt="Luround's logo" />
      </div>
    </div>
  );
}
