/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";

export default function InputDetails({ data, setInformation, information }) {
  function handleDetails(e) {
    setInformation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className={styles.formheader}>
      <div className={styles.form2}>
        <label htmlFor=''>Full name</label>
        <input
          type='text'
          name='displayName'
          value={information.displayName}
          onChange={handleDetails}
          id=''
          placeholder='Full name'
        />
      </div>
      <div className={styles.form2}>
        <label htmlFor=''>Email Address</label>
        <input
          type='email'
          name='email'
          value={information.email}
          onChange={handleDetails}
          id=''
          placeholder='Email Address'
        />
      </div>
      <div className={styles.form2}>
        {" "}
        <label htmlFor=''>Phone number</label>
        <div className={styles.phoneinput}>
          <div className={styles.countrycode}>
            <span>+234</span>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              transform='rotate(90)'
            >
              <path
                d='M7.93066 5.86086L12.0686 9.99879L7.93066 14.1367'
                stroke='#1D2E2E'
                stroke-opacity='0.8'
                stroke-width='1.5'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <input
            type='text'
            inputMode='numeric'
            maxLength={12}
            name='phone_number'
            value={information.phone_number}
            onChange={handleDetails}
            min={0}
            max={12}
            id=''
            placeholder='Phone number'
          />
        </div>
      </div>
      <div className={styles.form2}>
        <label htmlFor=''>Service name</label>
        <div className={styles.title}>
          <span>{data.service_name}</span>
        </div>
      </div>
      <div className={styles.form2}>
        <label htmlFor=''>Note</label>
        <div className={styles.textarea}>
          <textarea
            maxLength={500}
            cols={40}
            rows={7}
            name='message'
            value={information.message}
            onChange={handleDetails}
            placeholder='Any additional information you would like us to have'
            id=''
          ></textarea>
          <span>{information.message.length}/500</span>
        </div>
      </div>
    </div>
  );
}
