/** @format */

import React from "react";
import styles from "./Setting.module.css";

export default function BankDetails({ CloseBank }) {
  return (
    <section>
      <div className='popupcancel'>
        <div className='overlay' onClick={CloseBank}></div>
        <div className={styles.account}>
          <div className={styles.bankcontainer}>
            <div className={styles.accountcontainer}>
              <span>Add an account</span>
            </div>

            <div className={styles.bankcontainer}>
              <div className={styles.inputbank}>
                <span>Input or select bank</span>
                <button className={styles.selectbank}>
                  <div className={styles.banktext}>
                    <span>Bank</span>

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
                </button>
              </div>

              <div className={styles.inputbank}>
                <span>Account Number</span>
                <input type='number' />
              </div>

              <div className={styles.inputbank}>
                <span>Account Name</span>
                <input type='text' />
              </div>
            </div>
          </div>

          <div className={styles.canceldone}>
            <button className={styles.canceltime} onClick={CloseBank}>
              Cancel
            </button>
            <button className={styles.donetime}>Save</button>
          </div>
        </div>
      </div>
    </section>
  );
}
