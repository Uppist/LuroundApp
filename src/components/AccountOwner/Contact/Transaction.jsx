/** @format */

import React from "react";
import styles from "./Contact.module.css";

export default function Transaction({ Cancel, transactions }) {
  console.log(transactions);

  function formatDate(timestamp) {
    const date = new Date(Number(timestamp));
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }
  return (
    <div className='popupcancel popupwithdrawpin'>
      <div className='overlay' onClick={Cancel}></div>
      {transactions.length > 0 ? (
        <div className={styles.contactcontainer}>
          <div className={styles.contactline}>
            <div className={styles.contactsvg}>
              <label>Transaction History</label>
              <svg
                onClick={Cancel}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <hr />
          </div>

          <div className={styles.details}>
            <div className={styles.amount}>
              <div className={styles.date}>
                {" "}
                <span>Date</span>
                <span>Name</span>
              </div>

              <span>Amount</span>
            </div>
            <div>
              {transactions.map((transaction, index) => (
                <div className={styles.amount2}>
                  <div className={styles.date2}>
                    <span>{formatDate(transaction.date)}</span>
                    <span>{transaction.service_name}</span>
                  </div>

                  <span>₦{Number(transaction.amount)} </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.notransaction}>
          <span>No transactions yet</span>
        </div>
      )}
    </div>
  );
}
