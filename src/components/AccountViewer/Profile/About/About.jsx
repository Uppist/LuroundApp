/** @format */

import React, { useContext } from "react";
import styles from "./about.module.css";
import Brands from "../../../AccountOwner/Profile/ClientProfile/Brands/Brands";
import Reviews from "../../../AccountOwner/Review/Reviews";
import Contact from "../../../AccountOwner/Profile/ClientProfile/Contact/Contact";
import SocialMedia from "../../../AccountOwner/Profile/ClientProfile/SocialMedia/SocialMedia";
import Review from "../Reviews/Review";
import { userContext } from "../../../Context";

export default function About({ about }) {
  const [userData, setUserData] = useContext(userContext);
  return (
    <section className={styles.about2}>
      <label className={styles.aboutlabel}> About</label>
      <p className={styles.paragraph}>{userData.about}</p>
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
