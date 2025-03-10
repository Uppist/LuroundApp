/** @format */

import React from "react";
import styles2 from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link } from "react-router-dom";

export default function EmailLink() {
  return (
    <section className={styles2.account}>
      <div className={styles2.imgdiv}>
        <img src={image} alt='' />
        <div className={styles2.create}>
          <div className={styles2.label}>
            <label htmlFor=''>Forgot Password</label>
            <span>
              You will receive an email with a link to reset your password.
              Please check your inbox.
            </span>
          </div>

          <div className={styles2.container}>
            {/* <Signup /> */}
            <Link to='/reset-password'>
              <button type='submit'>Resend email</button>
            </Link>
          </div>

          <div className={styles2.login}>
            <label htmlFor=''>Already have an account?</label>
            <Link to='/Login'>
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <Animation />
    </section>
  );
}
