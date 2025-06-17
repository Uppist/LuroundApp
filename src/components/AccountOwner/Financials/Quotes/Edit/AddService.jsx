/** @format */

import React from "react";
import styles from "./Edit.module.css";

export default function AddService() {
  return (
    <>
      <div>
        <div className={styles.addservice}>
          <label>Add service</label>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z'
              fill='#1D2E2E'
              fillOpacity='0.8'
            />
          </svg>
        </div>
        <hr />
        <div className={styles.service}>
          <div>
            <label>SubTotal</label>
            <span>₦0</span>
          </div>
          <div>
            {" "}
            <label>Discount</label>
            <span>₦0</span>
          </div>
          <div>
            {" "}
            <label>VAT</label>
            <span>₦0</span>
          </div>
          <div>
            {" "}
            <label>Total</label>
            <span>₦0</span>
          </div>
          <hr />
        </div>
        <div className={styles.sendto}>
          <label>Note (Optional)</label>
          <textarea
            name=''
            id=''
            placeholder='write a note to the recipient'
          ></textarea>
        </div>
      </div>
    </>
  );
}
