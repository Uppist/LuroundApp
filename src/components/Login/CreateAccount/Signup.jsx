/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Signup({ logindetail, LoginDetail }) {
  return (
    <div action='' className={styles.form}>
      <div>
        <label htmlFor='text'>First name</label>
        <input
          type='text'
          name='firstName'
          value={logindetail.firstName}
          onChange={LoginDetail}
          id='text'
          placeholder='First name'
        />
      </div>
      <div>
        <label htmlFor=''>Last name</label>
        <input
          type='text'
          name='lastName'
          value={logindetail.lastName}
          onChange={LoginDetail}
          id=''
          placeholder='Last name'
        />
      </div>
      <div>
        <label htmlFor=''>Email address</label>
        <input
          type='email'
          name='email'
          value={logindetail.email}
          onChange={LoginDetail}
          id=''
          placeholder='youremail@address.com'
        />
      </div>{" "}
    </div>
  );
}
