/** @format */

import React from "react";
import styles from "./Event.module.css";

export default function SecondEvent() {
  return (
    <div className={styles.createeventservice}>
      <div className={styles.createtimebased}>
        <span>Create an Event</span>
        <div className={styles.eventtype}>
          <span>Pricing model</span>
          <div className={styles.eventcheckbox}>
            <div className={styles.checkvirtual}>
              {" "}
              <input type='radio' />
              <label>Free</label>
            </div>

            <div className={styles.checkinperson}>
              {" "}
              <input type='radio' />
              <label>Ticket Tiers</label>
            </div>

            <div>
              <label htmlFor=''>Coupons</label>
              <div>
                <span>You've not set up any coupons</span>
                <button>Create</button>
              </div>
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
