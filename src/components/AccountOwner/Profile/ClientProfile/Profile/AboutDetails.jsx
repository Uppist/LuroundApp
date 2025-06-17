/** @format */
import About from "../About/About";
import styles from "./Profile.module.css";

// import Details from "./Details";

export default function AboutDetails({ about, socialLink }) {
  const isEmpty = !about || about.trim() === "";
  return (
    <div className={styles.aboutdetails}>
      {isEmpty ? <p>Empty</p> : <About about={about} />}
    </div>
  );
}
