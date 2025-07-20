/** @format */

import { useState } from "react";
// import styles from "../../../Services/OneOff/OneOffService/DetailService.module.css";
import styles from "../../../AccountOwner/Services/OneOff/OneoffService/DetailService.module.css";
import VirtualContainer from "../../../AccountOwner/Services/OneOff/OneoffService/VirtualContainer";
import { Link, useLocation } from "react-router-dom";
import image from "../../../elements/gallery.png";

export default function More() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log("state", data, "from", data.service_type);

  const backRoute = data.service_type === "retainer" ? "retainer" : "oneoff2";

  return (
    <>
      <div className={styles.more}>
        <Link to='/services' state={{ sessionType: backRoute }}>
          <button className={styles.timebasedback}>
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
          </button>
        </Link>

        <div className={`${styles.morecontainer}  ${styles.container}`}>
          <div className={styles.oneoff}>
            <img src={data.image || image} alt='' />
            <div className={styles.oneoffdetails}>
              <div className={styles.contenttype}>
                <div className={styles.personalservice}>
                  <span className={styles.personal}>{data.service_name}</span>
                </div>
              </div>
              <div className={styles.availability}>
                <label>Service schedule</label>
                <div className={styles.time}>
                  {data.availability && data.availability.length > 0 ? (
                    data.availability.map((slot, idx) => (
                      <span key={idx}>
                        {slot.day}: {slot.from_time} - {slot.to_time}
                      </span>
                    ))
                  ) : (
                    <span>No availability set</span>
                  )}
                </div>
              </div>
              <VirtualContainer data={data} />
            </div>
          </div>
          <div className={styles.description}>
            <span>About service</span>
            <span className={`${styles.text} ${styles.text2}`}>
              {data.description}
            </span>
          </div>
          <Link to='/booknow' state={{ data }}>
            <div className={styles.book}>
              <span>Book now</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
