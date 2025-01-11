/** @format */

import React from "react";
import styles from "./Receipt.module.css";
import CreateNew from "../CreateNew";

export default function Receipt({ onComponentSwitch }) {
  function handleBack(item) {
    onComponentSwitch(item);
  }
  return (
    <section className={styles.receipts}>
      <div className={styles.createreceipt}>
        <div className={styles.receiptsvg}>
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
          <label>Receipts</label>
        </div>
        <CreateNew />
      </div>
    </section>
  );
}
