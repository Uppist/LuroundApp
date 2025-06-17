/** @format */

import React from "react";
import styles from "./about.module.css";
import Brands from "../../../AccountOwner/Profile/ClientProfile/Brands/Brands";
import Reviews from "../../../AccountOwner/Review/Reviews";
import Contact from "../../../AccountOwner/Profile/ClientProfile/Contact/Contact";
import SocialMedia from "../../../AccountOwner/Profile/ClientProfile/SocialMedia/SocialMedia";
import Review from "../Reviews/Review";

export default function About({ about }) {
  return (
    <section className={styles.about2}>
      <label className={styles.aboutlabel}> About</label>
      <p className={styles.paragraph}>{about}</p>
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
