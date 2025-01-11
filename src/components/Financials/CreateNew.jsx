/** @format */

import React from "react";
import styles from "./Financials.module.css";

export default function CreateNew() {
  return (
    <div className={styles.createnew}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
          fill='#FFFFFF'
        />
      </svg>
      <label>
        Create new
        <svg
          width='25'
          height='25'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
            stroke='#FFFFFF'
            strokeOpacity='0.8'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </label>
    </div>
  );
}
