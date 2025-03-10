/** @format */

import React from "react";
import styles from "./Login.module.css";
import styles2 from "../CreateAccount/style.module.css";
import { Link } from "react-router-dom";

export default function Signin({ Submit, logindetail, LoginDetail }) {
  return (
    <form onSubmit={Submit} action='' className={styles2.form}>
      <div>
        <label htmlFor=''>Email address</label>
        <input
          type='email'
          name='email'
          id=''
          placeholder='youremail@address.com'
          value={logindetail.email}
          onChange={(e) => LoginDetail(e)}
        />
      </div>{" "}
      <div>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          name='password'
          id=''
          placeholder='input password'
          value={logindetail.password}
          onChange={(e) => LoginDetail(e)}
        />

        <Link to='/Forgot-password'>
          <span>Forgot Password?</span>
        </Link>
      </div>{" "}
      {/* <Link to='/Profile-page'> */}
      <button type='submit'>login</button>
      {/* </Link> */}
    </form>
  );
}
