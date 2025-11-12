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
  const hasContactInfo = userData?.media_links?.some(
    (item) =>
      ["Location", "Mobile", "Email"].includes(item.name) &&
      item.link?.trim() !== ""
  );

  const hasSocialMedia = userData?.media_links?.some(
    (item) =>
      [
        "Website",
        "Instagram",
        "LinkedIn",
        "YouTube",
        "Facebook",
        "Twitter",
      ].includes(item.name) && item.link?.trim() !== ""
  );

  // console.log(userData.media_links);
  // console.log(hasContactInfo);
  // console.log(hasSocialMedia);
  // console.log(userData?.media_links);
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

          {hasContactInfo && (
            <>
              <hr />
              <Contact hasContactInfo={hasContactInfo} />
            </>
          )}

          {hasSocialMedia && (
            <>
              <hr />
              <SocialMedia />
            </>
          )}
        </>
      )}
    </section>
  );
}
