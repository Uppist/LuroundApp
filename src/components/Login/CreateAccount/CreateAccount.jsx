/** @format */

import * as React from "react";
import styles from "./style.module.css";
import image from "../../elements/LuroundApp.png";
import google from "../../elements/Google.png";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation";
import Signup from "./Signup";

// import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <section className={styles.account}>
      <div className={styles.imgdiv}>
        <img src={image} alt='' />
        <div className={styles.create}>
          <div className={styles.label}>
            <label htmlFor=''>Create your account</label>
            <span>Let's get started</span>
          </div>

          <div className={styles.signup}>
            <div className={styles.container}>
              <Signup />
              <Link to='/confirm-password'>
                <button type='submit'>Next</button>
              </Link>
            </div>
            <div className={styles.line}>
              <hr />
              <span>OR</span>
              <hr />
            </div>
          </div>

          <div className={styles.google}>
            <div className={styles.googlebutton}>
              {" "}
              <img src={google} alt='google logo' />
              <button type='submit'>Sign up with Google</button>
            </div>
            <div className={styles.login}>
              <label htmlFor=''>Already have an account?</label>
              <Link to='/Login'>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Animation />
    </section>
  );
}
