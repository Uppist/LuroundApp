/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Signup() {
  return (
    <form action='' className={styles.form}>
      <div>
        <label htmlFor='text'>First name</label>
        <input type='text' name='text' id='text' placeholder='First name' />
      </div>
      <div>
        <label htmlFor=''>Last name</label>
        <input type='text' name='' id='' placeholder='Last name' />
      </div>
      <div>
        <label htmlFor=''>Email address</label>
        <input type='email' name='' id='' placeholder='youremail@address.com' />
      </div>{" "}
    </form>
  );
}
