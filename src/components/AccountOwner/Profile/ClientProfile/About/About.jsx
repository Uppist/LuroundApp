/** @format */
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import Reviews from "../../../Review/Reviews";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./About.module.css";
import EmptyState from "./EmptyState";

export default function About({ about }) {
  return (
    <section className={styles.about}>
      {about === null || about.trim() === "" ? (
        <EmptyState />
      ) : (
        <>
          <label className={styles.aboutlabel}> About</label>

          <p className={styles.paragraph}>{about}</p>

          <hr />
          <Brands />
          <hr />
          <Reviews />
          <hr />
          <Contact />
          <hr />
          <SocialMedia />
        </>
      )}
    </section>
  );
}
