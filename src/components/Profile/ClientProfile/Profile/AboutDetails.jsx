/** @format */
import styles from "./Profile.module.css";
import About from "../About/About";
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import SocialMedia from "../SocialMedia/SocialMedia";
import Reviews from "../Review/Reviews";

// import Details from "./Details";

export default function AboutDetails({ about, socialLink }) {
  return (
    <div className={styles.aboutdetails}>
      <About about={about} />
      {/* <Brands />
      <Reviews />
      <Contact />
      <SocialMedia /> */}
    </div>
  );
}
