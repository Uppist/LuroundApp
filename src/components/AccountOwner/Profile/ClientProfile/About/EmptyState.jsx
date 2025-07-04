/** @format */

import React from "react";
import profile from "../../../../elements/Noprofile.svg";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function EmptyState() {
  return (
    <div className={styles.empty}>
      <img src={profile} alt='' />
      <span>No profile details yet</span>
      <button>
        <Link to='/editprofile'>Edit profile</Link>
      </button>
    </div>
  );
}
