/** @format */

import React, { useState } from "react";
import styles from "./transfer.module.css";
import Receipt from "./Receipt";

export default function Success({ Cancel }) {
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState("fade-in");
  function NextWithdraw() {
    setIsFadeOut("fade-out");

    setTimeout(() => {
      setIsWithdraw(true);
      setIsFadeOut("fade-in");
    }, 200);
  }
  return (
    <>
      {isWithdraw ? (
        <Receipt Cancel={Cancel} />
      ) : (
        <section className='popupcancel popupwithdrawpin'>
          <div className='overlay' onClick={Cancel}></div>
          <div className={`${styles.withdrawpin} ${isFadeOut}`}>
            <div className={styles.confirm}>
              <div className={styles.text}>
                <span>Success</span>
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

            <div className={styles.check}>
              <p>
                You have successfully withdrawn <span>₦5000</span> from your
                wallet
              </p>
              <div className={styles.password}>
                <svg
                  width='110'
                  height='110'
                  viewBox='0 0 110 110'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M54.8529 3.30087C48.0803 3.28849 41.3719 4.61402 35.113 7.20134C28.8541 9.78867 23.168 13.5868 18.381 18.3777C-1.7284 38.4871 -1.7284 71.1984 18.3879 91.3077C38.4972 111.41 71.2085 111.41 91.3178 91.3077C111.42 71.1984 111.42 38.4871 91.3178 18.3777C86.5336 13.5869 80.8499 9.78873 74.5932 7.20135C68.3365 4.61397 61.6303 3.28842 54.8597 3.30087H54.8529ZM54.8529 10.1346C66.2791 10.1346 77.7054 14.5002 86.4504 23.2384C90.6066 27.3854 93.904 32.3115 96.1538 37.7347C98.4036 43.1578 99.5617 48.9714 99.5617 54.8427C99.5617 60.714 98.4036 66.5277 96.1538 71.9508C93.904 77.3739 90.6066 82.3 86.4504 86.4471C82.3033 90.6033 77.3772 93.9007 71.954 96.1506C66.5309 98.4004 60.7173 99.5584 54.846 99.5584C48.9747 99.5584 43.161 98.4004 37.7379 96.1506C32.3148 93.9007 27.3887 90.6033 23.2416 86.4471C19.0854 82.3 15.788 77.3739 13.5382 71.9508C11.2883 66.5277 10.1303 60.714 10.1303 54.8427C10.1303 48.9714 11.2883 43.1578 13.5382 37.7347C15.788 32.3115 19.0854 27.3854 23.2416 23.2384C27.3874 19.0791 32.3144 15.7802 37.7393 13.5314C43.1643 11.2826 48.9803 10.1282 54.8529 10.1346ZM75.2029 41.0859C74.5518 41.1471 73.9317 41.3927 73.4154 41.794L48.2941 60.6315L36.6547 48.999C36.3376 48.6707 35.9583 48.4088 35.5389 48.2286C35.1195 48.0485 34.6685 47.9537 34.212 47.9497C33.7556 47.9457 33.303 48.0327 32.8805 48.2055C32.4581 48.3784 32.0743 48.6336 31.7515 48.9564C31.4287 49.2791 31.1735 49.6629 31.0007 50.0854C30.8278 50.5079 30.7408 50.9605 30.7448 51.4169C30.7488 51.8734 30.8436 52.3244 31.0238 52.7438C31.2039 53.1632 31.4658 53.5425 31.7941 53.8596L45.5441 67.6096C46.1285 68.1943 46.904 68.5488 47.7286 68.6081C48.5531 68.6675 49.3714 68.4277 50.0335 67.9327L77.5335 47.3077C78.1162 46.883 78.5506 46.2858 78.7752 45.6006C78.9998 44.9154 79.0032 44.1769 78.785 43.4897C78.5669 42.8024 78.1381 42.2012 77.5594 41.771C76.9807 41.3409 76.2813 41.1036 75.5603 41.0927C75.4436 41.0868 75.3265 41.0868 75.2097 41.0927L75.2029 41.0859Z'
                    fill='#00CCCC'
                  />
                </svg>
              </div>{" "}
            </div>
            <button onClick={NextWithdraw}>Withdrawal Receipt</button>
          </div>
        </section>
      )}
    </>
  );
}
