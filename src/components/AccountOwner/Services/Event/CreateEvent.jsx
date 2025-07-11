/** @format */

import React, { useState } from "react";
import styles from "./Event.module.css";
import SecondEvent from "./SecondEvent";

export default function CreateEvent({ handleClick }) {
  const [isNext, setIsNext] = useState(false);

  function Next() {
    setIsNext(true);
  }

  return (
    <>
      {isNext ? (
        <SecondEvent handleClick={handleClick} />
      ) : (
        <div className={styles.createtimebased}>
          <div className={styles.createtimeservice}>
            <span>Create an Event</span>
          </div>

          <div className={styles.timeservice}>
            <span>Event Name</span>
            <input />
          </div>

          <div className={styles.timedescription}>
            <span>Description</span>
            <textarea></textarea>
          </div>

          <div className={styles.timeservice}>
            <span>Event schedule</span>
            <div className={styles.timecontainer}>
              <div className={styles.startendtime}>
                <span>Start time</span>
                <span>End time</span>
              </div>
              <div className={styles.daycheckedcontainer}>
                <div className={styles.inputtimecontainer}>
                  <div className={styles.nairavirtual}>
                    <input type='date' />{" "}
                  </div>

                  <div className={styles.nairavirtualinperson}>
                    <div className={styles.nairavirtual}>
                      <input />
                    </div>

                    <div className={styles.nairainperson}>
                      <input />
                    </div>
                  </div>
                </div>
                <div>
                  <button className={styles.addtimebutton}>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 0C4.4868 0 0 4.4868 0 10C0 15.5132 4.4868 20 10 20C15.5132 20 20 15.5132 20 10C20 4.4868 15.5132 0 10 0ZM10 18.5924C5.27859 18.5924 1.40763 14.7507 1.40763 10C1.40763 5.24927 5.24927 1.40763 10 1.40763C14.7214 1.40763 18.5924 5.24927 18.5924 10C18.5924 14.7507 14.7214 18.5924 10 18.5924Z'
                        fill='#1D2E2E'
                      />
                      <path
                        d='M14.6039 9.2086H10.7036V5.3083C10.7036 4.92707 10.381 4.60449 9.99981 4.60449C9.61858 4.60449 9.296 4.92707 9.296 5.3083V9.2086H5.39571C5.01447 9.2086 4.69189 9.53118 4.69189 9.91241C4.69189 10.2936 5.01447 10.6162 5.39571 10.6162H9.296V14.5165C9.296 14.8977 9.61858 15.2203 9.99981 15.2203C10.381 15.2203 10.7036 14.8977 10.7036 14.5165V10.6162H14.6039C14.9851 10.6162 15.3077 10.2936 15.3077 9.91241C15.3077 9.53118 14.9851 9.2086 14.6039 9.2086Z'
                        fill='#1D2E2E'
                      />
                    </svg>

                    <span>Add multiple dates</span>
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <button onClick={Next} className='next'>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
