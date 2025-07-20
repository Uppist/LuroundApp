/** @format */

import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./About.module.css";
import EmptyState from "./EmptyState";
import { userContext } from "../../../../Context";
import { useContext } from "react";

export default function About() {
  const [userData] = useContext(userContext);

  const hasContactInfo =
    userData?.socialLinks?.location?.link?.trim() ||
    userData?.socialLinks?.mobile?.link?.trim() ||
    userData?.socialLinks?.email?.link?.trim();

  const hasSocialMedia =
    userData?.socialLinks?.website?.link?.trim() ||
    userData?.socialLinks?.instagram?.link?.trim() ||
    userData?.socialLinks?.linkedin?.link?.trim() ||
    userData?.socialLinks?.youtube?.link?.trim() ||
    userData?.socialLinks?.facebook?.link?.trim() ||
    userData?.socialLinks?.twitter?.link?.trim();

  console.log(userData.media_links);
  return (
    <section className={styles.about}>
      {!userData?.about?.trim() ? (
        <EmptyState />
      ) : (
        <>
          <label className={styles.aboutlabel}> About</label>
          <p className={styles.paragraph}>{userData.about}</p>

          {Array.isArray(userData?.brands) &&
            userData.brands.some((b) => b.logo?.trim()) && (
              <>
                <hr />
                <Brands />
              </>
            )}

          {/* {hasContactInfo && (
            <>
              <hr />
              <Contact />
            </>
          )} */}

          {/* {hasSocialMedia && (
            <>
              <hr />
              <SocialMedia />
            </>
          )} */}
        </>
      )}
    </section>
  );
}
