/** @format */
import About from "../About/About";
import styles from "./Profile.module.css";

// import Details from "./Details";

export default function AboutDetails({ about, socialLinks, brand }) {
  return (
    <div className={styles.aboutdetails}>
      <About about={about} socialLinks={socialLinks} brand={brand} />
    </div>
  );
}
