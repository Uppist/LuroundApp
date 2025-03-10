/** @format */

import React from "react";
import styles2 from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link } from "react-router-dom";

export default function PasswordUpdated() {
  return (
    <section className={styles2.account}>
      <div className={styles2.imgdiv}>
        <img src={image} alt='' />
        <div className={styles2.create}>
          <div className={styles2.label}>
            <label htmlFor=''>Password Updated</label>
            <span>Your password has been updated</span>
          </div>

          <div className={styles2.container}>
            {/* <Signup /> */}
            <Link to='/Login'>
              <button type='submit'>Login</button>
            </Link>
          </div>
        </div>
      </div>
      <Animation />
    </section>
  );
}
