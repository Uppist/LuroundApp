/** @format */

import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import styles from "./writereview.module.css";
import { Link, useSearchParams } from "react-router-dom";

export default function WriteReview() {
  const [selectStar, setSelectStar] = useState(0);

  function handleSelect(index) {
    if (index + 1 === selectStar) {
      setSelectStar(selectStar - 1);
    } else {
      setSelectStar(index + 1);
    }
  }
  return (
    <>
      <NavBar />

      <section className={styles.writeReview}>
        <div className={styles.container}>
          <span className={styles.text}>
            <Link to='/viewowner'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                transform='rotate(180)'
              >
                <path
                  d='M7.93066 5.86086L12.0686 9.99879L7.93066 14.1367'
                  stroke='#1D2E2E'
                  stroke-opacity='0.8'
                  stroke-width='2'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </Link>
            Write a review
          </span>

          <div className={styles.review}>
            <div className={styles.rate}>
              <span>Rate this person</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={styles.star}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill={index < selectStar ? "#FFB800" : "none"}
                    stroke={index < selectStar ? "none" : "#1D2E2EA6"}
                    stroke-width='1.2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    width={index < selectStar ? "30" : "24"}
                    height={index < selectStar ? "30" : "24"}
                    onClick={() => handleSelect(index)}
                  >
                    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                  </svg>
                ))}
              </div>
            </div>

            <div className={styles.container2}>
              <div className={styles.reviewtext}>
                <div className={styles.reviewname}>
                  <img src='' alt='' />
                  <div className={styles.name}>
                    <span>Name</span>
                    <label htmlFor=''>
                      Reviews are public and include your account info.
                    </label>
                  </div>
                </div>
                <div className={styles.textarea}>
                  <textarea
                    name=''
                    id=''
                    placeholder='Write about your experience'
                  ></textarea>
                  <span>0/500</span>
                </div>
              </div>
              <div>
                <div className={styles.canceldone}>
                  <Link to='/viewowner'>
                    <button className={styles.canceltime}>Cancel</button>
                  </Link>
                  <button type='submit' className={styles.donetime}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
