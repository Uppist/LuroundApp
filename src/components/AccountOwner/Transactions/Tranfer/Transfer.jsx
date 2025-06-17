/** @format */

import React, { useState } from "react";
import styles from "./transfer.module.css";
import Confirm from "./Confirm";

export default function Transfer({ CancelTransfer }) {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState("fade-in");
  function NextConfirm() {
    setIsFadeOut("fade-out");

    setTimeout(() => {
      setIsConfirm(true);
      setIsFadeOut("fade-in");
    }, 200);
  }

  return (
    <>
      {isConfirm ? (
        <Confirm Cancel={CancelTransfer} />
      ) : (
        <div className='popupcancel popupwithdrawpin'>
          <div className='overlay' onClick={CancelTransfer}></div>
          <div className={`${styles.withdrawpin} ${isFadeOut}`}>
            <div className={styles.setpin}>
              <div className={styles.transferto}>
                <label htmlFor=''>Transfer To</label>
                <div className={styles.container}>
                  <div className={styles.bank}>
                    <label>Bank</label>
                    <span htmlFor=''>GTB</span>
                  </div>
                  <div className={styles.number}>
                    <div>
                      <label htmlFor=''>Account Number</label>
                    </div>
                    <div className={styles.name}>
                      <label htmlFor=''>Account Name</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.transferto}>
                <label htmlFor=''>Transfer From</label>
                <div className={styles.container2}>
                  <span>Wallet</span>

                  <div className={styles.balance}>
                    <label htmlFor=''>Balance</label>
                    <span>125,000</span>
                  </div>
                </div>
              </div>
              <div className={styles.amount}>
                <div className={styles.amount2}>
                  <label htmlFor=''>Enter amount</label>
                  <input type='number' name='' id='' />
                </div>
                <div className={styles.amount2}>
                  <span>Remarks (Optional)</span>
                  <input type='text' name='' id='' />
                </div>
              </div>
              <div className={styles.button}>
                <button onClick={NextConfirm}>Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
