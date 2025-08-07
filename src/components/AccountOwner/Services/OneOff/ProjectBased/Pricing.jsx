/** @format */

import React from "react";
import nigeria from "../../../../elements/nigeria.png";
import styles from "./Project.module.css";

export default function Pricing({ project_pricing, handlePricing }) {
  return (
    <>
      <span>Pricing</span>
      <div className={styles.nigeriaprice}>
        <button>
          <div className={styles.nigeriadown}>
            <img src={nigeria} />
            <div className={styles.ngndown}>
              <span>NGN</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </button>
        <input
          type='number'
          name='project_pricing'
          min={0}
          value={project_pricing}
          onChange={handlePricing}
          placeholder='0.00'
        />
      </div>
    </>
  );
}
