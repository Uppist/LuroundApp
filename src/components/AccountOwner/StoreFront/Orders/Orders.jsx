/** @format */

import React from "react";
import styles from "../style.module.css";
import styles2 from "./style.module.css";

export default function Orders({ orderHistory }) {
  console.log(orderHistory);
  return (
    <div className={styles2.orders}>
      <div className={styles2.grid}>
        <span>Name</span>
        <span>Date</span>
        <span>Amount</span>
      </div>
      <div className={styles2.orderList}>
        <div className={styles2.grid2}>
          <div className={styles2.product}>
            <img src='' alt='' />
            <span>Beautiful </span>
          </div>
          <div className={styles2.date}>
            <span>Date</span>
            <label>Time</label>
          </div>
          <span>Amount</span>
        </div>
      </div>
    </div>
  );
}
