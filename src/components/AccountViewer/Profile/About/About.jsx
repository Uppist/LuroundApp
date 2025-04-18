/** @format */

import React from "react";
import styles from "./about.module.css";
import Brands from "../../../Profile/ClientProfile/Brands/Brands";
import Reviews from "../../../Profile/ClientProfile/Review/Reviews";
import Contact from "../../../Profile/ClientProfile/Contact/Contact";
import SocialMedia from "../../../Profile/ClientProfile/SocialMedia/SocialMedia";
import Review from "../Reviews/Review";

export default function About() {
  return (
    <section className={styles.about}>
      <label className={styles.aboutlabel}> About</label>
      <p className={styles.paragraph}>about</p>
      <hr />
      <Brands />
      <hr />
      <Review />
      <hr />
      <Contact />
      <SocialMedia />
    </section>
  );
}
