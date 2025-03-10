/** @format */

import React from "react";
import styles from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <section className={styles.account}>
      <div className={styles.imgdiv}>
        <img src={image} alt='' />
        <div className={styles.create}>
          <div className={styles.label}>
            <label htmlFor=''>Reset password</label>
            <span>Enter a new password to reset</span>
          </div>

          <div className={styles.signup}>
            <div className={styles.container}>
              <form action='' className={styles.form}>
                <div>
                  <label htmlFor=''>Password</label>
                  <input
                    type='password'
                    name=''
                    id=''
                    placeholder='Input password'
                    //   value={logindetail.email}
                    //   onChange={(e) => LoginDetail(e)}
                  />
                </div>{" "}
                <div>
                  <label htmlFor=''>Confirm Password</label>
                  <input
                    type='password'
                    name='password'
                    id=''
                    placeholder='Re-type password'
                    //   value={logindetail.password}
                    //   onChange={(e) => LoginDetail(e)}
                  />
                </div>{" "}
              </form>
              <Link to='/password-updated'>
                <button type='submit'>Reset</button>
              </Link>
            </div>
          </div>

          <div className={styles.login}>
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
