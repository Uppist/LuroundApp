/** @format */

import React from "react";
import styles from "./styles.module.css";
import QRsvg from "./QRsvg";

export default function QrCode({ Close }) {
  return (
    <div className='popupcancel'>
      <div className='overlay' onClick={Close}></div>
      <div className={styles.body}>
        <div>
          <div className={styles.cancelbooking}>
            <label>Service QR Code</label>
            <svg
              onClick={Close}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='currentColor'
                strokeOpacity='0.8'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.p}>
            <i>
              Please scan QR code to share this <br />
              service
            </i>
          </p>
        </div>

        <div className={styles.svg}>
          <QRsvg />
        </div>
      </div>
    </div>
  );
}
