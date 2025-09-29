/** @format */

import React, { useRef, useState } from "react";
import styles from "./transfer.module.css";
import Success from "./Success";
import axios from "axios";
import { toast } from "react-toastify";

export default function Confirm({ Cancel, details, account }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState("fade-in");
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // console.log(account);

  function NextSuccess() {
    // setIsFadeOut("fade-out");

    const data = {
      account_bank: account.bank_code,
      account_number: account.account_number,
      amount: details.amount,
      wallet_pin: confirmPin.join(""),
      recipient_code: account.recipient_code,
      reference: "N/A",
    };
    const token = localStorage.getItem("Token");

    axios
      .post("https://api.luround.com/v1/wallet/withdraw-funds", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        const id = toast.loading("Processing…");

        toast.update(id, {
          render: "Done!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        setTimeout(() => {
          setIsSuccess(true);
          setIsFadeOut("fade-in");
        }, 200);
      })
      .catch((err) => {
        toast.error("Wrong pin, please try again.");
        setConfirmPin(["", "", "", ""]);
      });
  }

  function handleChange(e, id) {
    const value = e.target.value;
    const newPinValues = [...confirmPin];
    newPinValues[id] = value;
    setConfirmPin(newPinValues);

    if (value.length === 1 && id < inputRefs.length - 1) {
      inputRefs[id + 1].current.focus();
    }
  }

  const isNext = confirmPin.every((val) => val.length === 1);

  return (
    <>
      {isSuccess ? (
        <Success Cancel={Cancel} />
      ) : (
        <section className='popupcancel popupwithdrawpin'>
          <div className='overlay' onClick={Cancel}></div>
          <div className={`${styles.withdrawpin} ${isFadeOut}`}>
            <div className={styles.confirm}>
              <div className={styles.text}>
                <span>Confirm Transaction</span>
                <svg
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

            <div className={styles.pattern}>
              <p>
                You are about to withdraw <span>₦{details.amount}</span> from
                your wallet to{" "}
                <span>
                  {account.account_name} - {account.account_number} -{" "}
                  {account.bank_name}
                </span>{" "}
              </p>
              <div className={styles.password}>
                <div className={styles.label}>
                  <label>Confirm your 4-digit pin</label>
                </div>
                <div className={styles.pin}>
                  {inputRefs.map((ref, id) => (
                    <input
                      key={id}
                      type='password'
                      maxLength={1}
                      ref={ref}
                      value={confirmPin[id]}
                      onChange={(e) => handleChange(e, id)}
                    />
                    // <input type='password' maxLength={1} />
                    // <input type='password' maxLength={1} />
                    // <input type='password' maxLength={1} />
                  ))}
                </div>

                <div className={styles.numberpin}>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>0</span>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='24' height='24' rx='2' fill='#1D2E2E' />
                    <path
                      d='M6.75781 17.2438L12.0008 12.0008L17.2438 17.2438M17.2438 6.75781L11.9998 12.0008L6.75781 6.75781'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>{" "}
            </div>
            <button disabled={!isNext} onClick={NextSuccess}>
              Withdraw
            </button>
          </div>
        </section>
      )}
    </>
  );
}
