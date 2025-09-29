/** @format */

import React from "react";
import styles from "../Contact.module.css";
import arrow from "../../../../components/elements/support/arrow.svg";

export default function MobileTransaction({ Cancel, transactions }) {
  console.log(transactions);
  return (
    <>
      <div className={styles.contactcontainer}>
        <div className={styles.contactline}>
          <div className={styles.contactsvg}>
            <img src={arrow} onClick={Cancel} alt='' />

            <label>Transaction History</label>
          </div>
          <hr />
        </div>
        {transactions.length > 0 ? (
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
                    <span>22/04/24</span>
                    <span>{transaction.service_name}</span>
                  </div>

                  <span>₦82,000</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.notransaction}>
            <span>No transactions yet</span>
          </div>
        )}{" "}
      </div>
    </>
  );
}
