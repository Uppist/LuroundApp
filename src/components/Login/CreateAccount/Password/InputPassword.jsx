/** @format */

import React from "react";
import styles from "../style.module.css";

export default function InputPassword() {
  return (
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
  );
}
