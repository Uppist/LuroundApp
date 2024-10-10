/** @format */

import { useState } from "react";
import ConfirmWithdraw from "./ConfirmWithdraw";

export default function Withdraw({ onClose, confirm }) {
  const [isNextWithdraw, setIsNextWithdraw] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState("fade-in");
  function NextWithdraw() {
    setIsFadeOut("fade-out");

    setTimeout(() => {
      setIsNextWithdraw(true);
      setIsFadeOut("fade-in");
    }, 200);
  }

  return (
    <div>
      {isNextWithdraw ? (
        <ConfirmWithdraw onClose={onClose} confirm={confirm} />
      ) : (
        <div className='popupcancel popupwithdrawpin'>
          <div className='overlay' onClick={onClose}></div>
          <div className={`withdrawpin ${isFadeOut}`}>
            <div className='withdraw-svg'>
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

            <div className='set-password'>
              <div className='set-pin'>
                <span>Set Withdrawal Pin</span>
                <label>Set a 4 digit pin for withdrawal</label>
              </div>
              <div className='withdrawal-password'>
                <input type='password' />
                <input type='password' />
                <input type='password' />
                <input type='password' />
              </div>
            </div>

            <div>
              <button className='next Next' onClick={NextWithdraw}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
