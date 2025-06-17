/** @format */

import React from "react";
import styles2 from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <section className={styles2.account}>
      <div className={styles2.imgdiv}>
        <img src={image} alt='' />
        <div className={styles2.create}>
          <div className={styles2.label}>
            <label htmlFor=''>Forgot Password</label>
            <span>Welcome Back!</span>
          </div>

          <div className={styles2.form2}>
            <label htmlFor=''>Email address</label>
            <input
              type='email'
              name='email'
              id=''
              placeholder='youremail@address.com'
              //   value={logindetail.email}
              //   onChange={(e) => LoginDetail(e)}
            />
          </div>
          <div className={styles2.container}>
            {/* <Signup /> */}
            <Link to='/resend-email'>
              <button type='submit'>Next</button>
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
