/** @format */

import React, { useContext } from "react";
import styles from "../Contact/Contact.module.css";
import { Link } from "react-router-dom";
import { userContext } from "../../../../Context";

export default function SocialMedia({ socialLinks }) {
  const [userData] = useContext(userContext);

  // Find relevant items in media_links
  const youtube = userData?.media_links?.find(
    (item) => item.name === "Youtube"
  );
  const website = userData?.media_links?.find(
    (item) => item.name === "Website"
  );
  // const linkedin = userData?.media_links?.find((item) => item.name === "Email");
  const linkedin = userData?.media_links?.find(
    (item) => item.name === "LinkedIn"
  );
  const facebook = userData?.media_links?.find(
    (item) => item.name === "Facebook"
  );
  const instagram = userData?.media_links?.find(
    (item) => item.name === "Instagram"
  );
  const twitter = userData?.media_links?.find(
    (item) => item.name === "Twitter"
  );

  return (
    <section className={styles.contact}>
      <div className={styles.contacts}>
        {/* Linkedin Icon */}
        {linkedin?.link?.trim() && (
          <Link
            to={linkedin?.link?.trim()}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedin?.icon} alt='' width={16} />
          </Link>
        )}
        {/* Facebook icon */}
        {facebook?.link?.trim() && (
          <Link
            to={facebook?.link?.trim()}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook?.icon} alt='' width={16} />
          </Link>
        )}
        {/*Twitter icon */}
        {twitter?.link?.trim() && (
          <Link
            to={twitter?.link?.trim()}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitter?.icon} alt='' width={16} />
          </Link>
        )}
        {instagram?.link?.trim() && (
          <Link
            to={instagram.link?.trim()}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram?.icon} alt='' width={16} />
          </Link>
        )}

        {website?.link?.trim() && (
          <Link
            to={website?.link?.trim()}
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            <img src={website?.icon} alt='website' width={16} />
          </Link>
        )}
        {youtube?.link?.trim() && (
          <Link
            to={youtube?.link?.trim()}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={youtube?.icon} alt='' width={16} />
          </Link>
        )}
      </div>
    </section>
  );
}
