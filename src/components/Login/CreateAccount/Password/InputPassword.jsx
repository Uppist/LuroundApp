/** @format */

import React from "react";
import styles from "../style.module.css";
import { useLocation } from "react-router-dom";

export default function InputPassword({ password, Passcode }) {
  // console.log(password, Password, isPassowrdCheck);
  return (
    <form action='' className={styles.form}>
      <div>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          name='password'
          id=''
          value={password.password}
          onChange={Passcode}
          placeholder='Input password'
        />
      </div>{" "}
      <div>
        <label htmlFor=''>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          id=''
          placeholder='Re-type password'
          value={password.confirmPassword}
          onChange={Passcode}
        />
      </div>{" "}
    </form>
  );
}
