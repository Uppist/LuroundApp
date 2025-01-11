/** @format */

import React from "react";
import styles from "./Quotes.module.css";
import CreateNew from "../CreateNew";

export default function Quotes({ onComponentSwitch }) {
  function handleBack(item) {
    onComponentSwitch(item);
  }
  return (
    <section className={styles.quotes}>
      <div className={styles.createquote}>
        <div className={styles.quotesvg}>
          <svg
            onClick={() => {
              handleBack("financial");
            }}
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='hsla(180, 23%, 15%, 0.8)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <label>Quotes</label>
        </div>
        <CreateNew />
      </div>

      <div className={styles.quotecontainer}>
        <div className={styles.float}>
          <div className={styles.quotestatus}>
            <button>Sent</button>
            <button>Draft</button>
          </div>
          <div>
            <label>Last 90 days</label>
          </div>
        </div>
        <div className={styles.cardline}>
          <div className={styles.statuscontainer}>
            <span>Quote No.</span>
            <span>Name</span>

            <span>Date</span>
            <span>Amount</span>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
}
