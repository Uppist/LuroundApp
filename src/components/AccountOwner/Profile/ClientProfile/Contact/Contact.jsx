/** @format */

import React from "react";
import styles from "./Contact.module.css";
import { userContext } from "../../../../Context";
import { useContext } from "react";

export default function Contact() {
  const [userData] = useContext(userContext);

  // Find relevant items in media_links
  const location = userData?.media_links?.find(
    (item) => item.name === "Location"
  );
  const mobile = userData?.media_links?.find((item) => item.name === "Mobile");
  const email = userData?.media_links?.find((item) => item.name === "Email");

  return (
    <section className={styles.contact}>
      <div className={styles.contacts}>
        {location?.link?.trim() && (
          <div>
            <img src={location.icon} alt='location' width={20} />
            <label>{location.link}</label>
          </div>
        )}

        {mobile?.link?.trim() && (
          <div>
            <img src={mobile.icon} alt='mobile' width={20} />
            <label>{mobile.link}</label>
          </div>
        )}

        {email?.link?.trim() && (
          <div>
            <img src={email.icon} alt='email' width={20} />
            <label>{email.link}</label>
          </div>
        )}
      </div>
    </section>
  );
}
