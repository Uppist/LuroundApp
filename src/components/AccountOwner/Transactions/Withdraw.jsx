/** @format */

import { useEffect, useState } from "react";
import ConfirmWithdraw from "./ConfirmWithdraw";
import styles from "./style.module.css";
import { useRef } from "react";
import axios from "axios";

export default function Withdraw({ onClose, confirm }) {
  const [isNextWithdraw, setIsNextWithdraw] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState("fade-in");
  const [pinValues, setPinValues] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  function NextWithdraw() {
    setIsFadeOut("fade-out");

    setTimeout(() => {
      setIsNextWithdraw(true);
      setIsFadeOut("fade-in");
    }, 200);

    const token = localStorage("Token");
    axios
      .post("https://api.luround.com/v1/wallet/create-wallet-pin", pinValues, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log("data", res.data));
  }

  function handleChange(e, id) {
    const value = e.target.value;
    const newPinValues = [...pinValues];
    newPinValues[id] = value;
    setPinValues(newPinValues);

    if (value.length === 1 && id < inputRefs.length - 1) {
      inputRefs[id + 1].current.focus();
    }
  }

  function handleConfirmChange(e, id) {
    const value = e.target.value;
    const newConfirmPinValues = [...confirmPin];
    newConfirmPinValues[id] = value;
    setConfirmPin(newConfirmPinValues);

    if (value.length === 1 && id < inputRefs.length - 1) {
      inputRefs[id + 1].current.focus();
    }
  }

  const isNext = pinValues.every((val) => val.length === 1);

  //create wallet pin

  //verify wallet pin

  return (
    <div>
      {isNextWithdraw ? (
        <ConfirmWithdraw
          handleChange={handleConfirmChange}
          isNext={isNext}
          onClose={onClose}
          confirm={confirm}
          inputRefs={inputRefs}
          pinValues={pinValues}
          confirmPin={confirmPin}
        />
      ) : (
        <div className='popupcancel popupwithdrawpin'>
          <div className='overlay' onClick={onClose}></div>
          <div className={`withdrawpin ${isFadeOut}`}>
            <div className={styles.closesvg}>
              {" "}
              <svg
                onClick={onClose}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                  stroke='#1D2E2E'
                  stroke-opacity='0.8'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>

            <div className={styles.password}>
              <div className={styles.pin}>
                <span>Set Withdrawal Pin</span>
                <label>Set a 4 digit pin for withdrawal</label>
              </div>
              <div className={styles.withdrawal}>
                {inputRefs.map((ref, id) => (
                  <input
                    key={id}
                    type='password'
                    maxLength={1}
                    ref={ref}
                    onChange={(e) => handleChange(e, id)}
                  />
                  // <input type='password' maxLength={1} />
                  // <input type='password' maxLength={1} />
                  // <input type='password' maxLength={1} />
                ))}
              </div>
            </div>

            <div>
              <button
                className={styles.next}
                disabled={!isNext}
                onClick={NextWithdraw}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
