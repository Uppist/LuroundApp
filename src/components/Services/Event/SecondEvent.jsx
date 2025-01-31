/** @format */

import React from "react";

export default function SecondEvent() {
  return (
    <div className={styles.createeventservice}>
      <div className={styles.createtimebased}>
        <button className={styles.createtimeservice} onClick={backEvent}>
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
          <span>Create an Event</span>
        </button>

        <div className={styles.eventtype}>
          <span>Price model</span>
          <div className={styles.eventcheckbox}>
            <div className={styles.checkvirtual}>
              {" "}
              <input type='radio' />
              <label>Flat fee</label>
            </div>

            <div className={styles.checkinperson}>
              {" "}
              <input type='radio' />
              <label>Dynamic pricing</label>
            </div>
          </div>
        </div>

        <div className='cancel-done'>
          <button className='cancel-time'>Cancel</button>
          <button className='done-time'>Done</button>
        </div>
      </div>
    </div>
  );
}
