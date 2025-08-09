/** @format */

import React from "react";
import styles from "../../Event.module.css";
import nigeria from "../../../../../elements/nigeria.png";
export default function Regular({
  Virtual,
  Person,
  isRegularVirtual,
  isRegularPerson,
}) {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketname}>
        <span>Name</span>
        <input type='text' name='' id='' placeholder='Regular' />
      </div>
      <div className={styles.ticketname}>
        <span>Description</span>
        <textarea
          name=''
          id=''
          placeholder='Write a brief descriptive summary of this ticket tier'
        ></textarea>
      </div>
      <div className={styles.tickettype}>
        <label htmlFor=''>Event Type</label>
        <div className={styles.ticketevent}>
          <div>
            <input
              type='checkbox'
              name=''
              id=''
              checked={isRegularVirtual}
              onChange={Virtual}
              onClick={(e) => e.stopPropagation()}
            />
            <span>Virtual</span>
          </div>
          {isRegularVirtual && (
            <div className={styles.virtual}>
              <div>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Add meeting link for virtual event'
                />
              </div>
              <div>
                <span>Perks</span>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='List out the perks of this ticket tier'
                />
              </div>
              <div className={styles.pricingproject}>
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
                  <input type='text' placeholder='0.00' />
                </div>
              </div>{" "}
            </div>
          )}
          <div>
            {" "}
            <input
              type='checkbox'
              name=''
              id=''
              checked={isRegularPerson}
              onChange={Person}
              onClick={(e) => e.stopPropagation()}
            />
            <span>In-person</span>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        {" "}
        <button>Remove</button>
      </div>
    </div>
  );
}
