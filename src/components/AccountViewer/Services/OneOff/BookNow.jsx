/** @format */

import React from "react";
import Layout from "../../Layout";
import styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import Calendar from "../../../Bookings/Calendar/Calendar";

export default function BookNow() {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <>
      <Layout>
        <div className={styles.booknow}>
          <Link to='/services' state={{ data }}>
            <span className={styles.back}>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 1L1 6L6 11'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span>Back</span>
            </span>
          </Link>

          <div className={styles.container}>
            <div className={styles.header}>
              <label htmlFor=''>Book {data.Title}</label>
              <span>1 of 2 steps</span>
            </div>
            <div className={styles.form}>
              <div className={styles.formheader}>
                <div className={styles.form2}>
                  <label htmlFor=''>Full name</label>
                  <input type='text' name='' id='' placeholder='Full name' />
                </div>
                <div className={styles.form2}>
                  <label htmlFor=''>Email Address</label>
                  <input
                    type='email'
                    name=''
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
                      type='number'
                      name=''
                      id=''
                      placeholder='Phone number'
                    />
                  </div>
                </div>
                <div className={styles.form2}>
                  <label htmlFor=''>Service name</label>
                  <div className={styles.title}>
                    <span>{data.Title}</span>
                  </div>
                </div>
                <div className={styles.form2}>
                  <label htmlFor=''>Note</label>
                  <div className={styles.textarea}>
                    <textarea name='' id=''></textarea>
                    <span>0/500</span>
                  </div>
                </div>
              </div>

              <Calendar />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
