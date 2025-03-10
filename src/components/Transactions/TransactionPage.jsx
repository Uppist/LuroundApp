/** @format */

import { useState } from "react";
import TransactionTime from "./TransactionAllTime";
import Withdraw from "./Withdraw";
import Account from "./SavedAccount/Account";
import styles from "./style.module.css";
export default function Transaction() {
  const [isAlltime, setIsAlltime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("All time");
  const [isWithdrawPin, setIsWithdrawPin] = useState(false);

  const [isConfirm, setIsConfirm] = useState(false);
  function Confirm() {
    setIsConfirm(true);
  }

  function WithdrawPin() {
    setIsWithdrawPin(true);
  }
  function dropDown() {
    setIsAlltime((prev) => !prev);
  }

  function handleDropdown(option) {
    setSelectedTime(option);
    setIsAlltime(false);
  }

  function closeModal() {
    setIsWithdrawPin(false);
    setIsConfirm(false);
  }

  const [time] = useState([
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "All Time",
  ]);

  return (
    <>
      {isConfirm ? (
        <>
          <Account confirm={Confirm} onClose={closeModal} />
        </>
      ) : (
        <div className={styles.transaction}>
          <div className={styles.card}>
            <svg
              className={styles.svg}
              width='729'
              height='271'
              viewBox='0 0 729 271'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M481.043 0L640 270.5H561H151.543L481.043 0Z'
                fill='white'
                fillOpacity='0.1'
              />
              <path
                d='M599.043 0L758 270.5H679H269.543L599.043 0Z'
                fill='white'
                fillOpacity='0.1'
              />
              <path
                d='M750.043 0L830 206.5V270.5H420.543L750.043 0Z'
                fill='white'
                fillOpacity='0.1'
              />
              <path
                d='M330.043 0L489 270.5H410H0.542542L330.043 0Z'
                fill='white'
                fillOpacity='0.1'
              />
            </svg>

            <div className={styles.balance}>
              <label>Current Balance</label>
              <span>
                ₦<span>150,500.00</span>
              </span>
            </div>
            <div>
              <span
                className={`${styles.withdraw} ${isWithdrawPin ? "open" : ""}`}
                onClick={WithdrawPin}
              >
                withdraw
              </span>
              {isWithdrawPin && (
                <Withdraw onClose={closeModal} confirm={Confirm} />
              )}
            </div>
          </div>

          <div className={styles.status}>
            <div className={styles.filter}>
              <span>Transactions</span>
              <div className={styles.by}>
                <span>Filter by:</span>
                <div className='dropdown'>
                  <div
                    className={`select-list ${styles.alltime} ${
                      isAlltime ? "select-clicked" : ""
                    }`}
                    onClick={dropDown}
                  >
                    <span className='selected-list'>{selectedTime}</span>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                        stroke='currentColor'
                        strokeOpacity='0.8'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  {isAlltime && (
                    <ul className={`${styles.menu} ${styles.time}`}>
                      {time.map((option) => (
                        <li
                          key={option}
                          className={`${styles.item} ${
                            selectedTime === option ? "active" : ""
                          }`}
                          onClick={() => handleDropdown(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <TransactionTime />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
